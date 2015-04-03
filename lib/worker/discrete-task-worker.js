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

    initialize: function(task, ruser) {
        RBrokerWorker.initialize.call(this, task);
        this.ruser = ruser;
        this.io    = null; // `io` request for 'termination' if called
    },

    work: function(resourceToken) {
        var task      = this.task,
            startTime = new Date().getTime(),
            data      = this.task.serialize(),
            rinputs   = data.rinputs || [],
            routputs  = data.routputs || [];

        delete data.rinputs;
        delete data.routputs;

        this.resourceToken = resourceToken;

        // save `io` request for 'termination' purposes
        this.io = deployr.io('/r/repository/script/execute')
            // make parallel http req. using the same session
            .share(this.ruser ? this.ruser.getCookies() : null)
            .data(data)
            .rinputs(rinputs)
            .routputs(routputs)            
            .global(false); // supress global error events for this `io`

        // send the script execution request and return a promise
        return this.io.promise()
            .then(function(res) {
                res = res.deployr.response;

                var timeOnServer     = res.execution.timeTotal,
                    id               = res.project.project,
                    generatedConsole = res.execution.console,
                    generatedPlots   = res.execution.results,
                    generatedFiles   = res.execution.artifacts,
                    generatedObjects = res.workspace.objects,
                    storedFiles      = res.repository.files;

                // resolve the promise which kicks-off the callback values
                return {
                    task: task,
                    result: {
                        id: id,
                        type: RTaskType.DISCRETE,
                        success: true,
                        timeOnCode: res.execution.timeCode,
                        timeOnServer: timeOnServer,
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
            });
    },

    terminate: function(interrupt) {
        //
        // @NOTE:
        // There is no way to obtain DeployR reference, such as a projectId, for
        // an stateless execution in-progress, so aborting the current RTask 
        // operation is not possible. At best we can do here is free-up the 
        // client connection and abort.
        //        
        if (interrupt && this.io && this.isPending()) {
            this.io.abort();
            this.io.destroy();
            this.io = null;

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
