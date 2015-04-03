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
    D             = require('d.js'),
    merge         = require('merge'),
    deployr       = require('deployr'),
    RTaskType     = require('../rtask-type'),
    RBrokerWorker = require('./rbroker-worker');

module.exports = RBrokerWorker.extend({

    initialize: function (task, ruser) {
        RBrokerWorker.initialize.call(this, task);
        this.ruser = ruser;
    },

    work: function(resourceToken) {
        var task = this.task, 
            data = merge({
                project: resourceToken,
                phantom: true
            }, this.task.serialize()),
            api       = '/r/project/execute/' + (data.code ? 'code' : 'script'),
            rinputs   = data.rinputs || [],
            routputs  = data.routputs || [],
            startTime = new Date().getTime();

        delete data.rinputs;
        delete data.routputs;

        this.resourceToken = resourceToken;

        return deployr.io(api)
            .share(this.ruser.getCookies())
            .data(data)
            .rinputs(rinputs)
            .routputs(routputs)
            .global(false) // supress global error events for this `io`            
            .promise()
            .then(function(res) {
                res = res.deployr.response;

                var generatedConsole = res.execution.console,
                    generatedPlots   = res.execution.results,
                    generatedFiles   = res.execution.artifacts,
                    generatedObjects = res.workspace.objects,
                    storedFiles      = res.repository.files;
              
                // resolve the promise which kicks-off the callback
                return {
                    task: task,
                    result: {
                        id: res.project.project,
                        type: RTaskType.POOLED,
                        success: true,
                        timeOnCode: res.execution.timeCode,
                        timeOnServer: res.execution.timeTotal,
                        timeOnCall: (new Date().getTime() - startTime),
                        failure: null,
                        interrupted: false,
                        generatedConsole: generatedConsole,
                        generatedPlots: generatedPlots,
                        generatedFiles: generatedFiles,
                        generatedObjects: generatedObjects,
                        storedFiles: storedFiles
                    }
                };
            })
    },

    terminate: function(interrupt) {
        // work has started and a forced interrupt given
        if (interrupt && this.resourceToken && this.isPending()) {
            this.ruser.io('/r/project/execute/interrupt')
                .data({ project: this.resourceToken })
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
