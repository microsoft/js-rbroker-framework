/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Base          = require('selfish').Base,
    deployr       = require('deployr'),
    D             = require('d.js'),    
    RTaskType     = require('../rtask-type'),
    RBrokerWorker = require('./rbroker-worker');

module.exports = RBrokerWorker.extend({

    initialize: function (task, ruser) {
        RBrokerWorker.initialize.call(this, task);
        this.ruser = ruser;
        this.job   = null;
    },

    work: function(resourceToken) {
        var self      = this,                        
            startTime = new Date().getTime(),
            data      = this.task.serialize(),
            rinputs   = data.rinputs || [],
            routputs  = data.routputs || [];

        delete data.rinputs;
        delete data.routputs;

        this.resourceToken = resourceToken;        

        return deployr.io('/r/job/submit')
            .share(this.ruser.getCookies())
            .data(data)
            .global(false) // supress global error events for this `io`
            .rinputs(rinputs)
            .routputs(routputs)
            .promise()
            .then(function(res) {
                var about = res.get('job');

                self.job = about.job; // job-id     

                // resolve the promise which kicks-off the callback
                return {
                    task: self.task,
                    result: {
                        id: about.job,
                        type: RTaskType.BACKGROUND,
                        timeOnCode: 0,
                        timeOnServer: 0,
                        timeOnCall: (new Date().getTime() - startTime),
                        success: true,
                        failure: null
                    }
                };
            });
    },

    terminate: function(interrupt) {
        if (interrupt && this.job) {
          this.ruser.io('/r/job/cancel')
            .data({ job: this.job })
            .end();

            return true;
        } else {
            //
            // RTask still pending confirmation from RBroker if there is no
            // `resourceToken` hence can not be interrupted [or] the task is
            // being worked on and a forced `interrupt` was not given
            //
            return false;
        }
    }
});
