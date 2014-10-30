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
    RTaskType     = require('../rtask-type'),
    RBrokerWorker = require('./rbroker-worker');

module.exports = RBrokerWorker.extend({

  initialize: function initialize(task, ruser) {
    RBrokerWorker.initialize.call(this, task);
    this.io = null;
    this.ruser = ruser; 
  }, 

  work: function(resourceToken) {
    var self      = this,
        startTime = new Date().getTime(),
        data      = this.task.toJSON(),        
        rinputs   = data.rinputs || [],
        routputs  = data.routputs || [];

    delete data.rinputs;
    delete data.routputs;

    this.resourceToken = resourceToken;

    this.io = deployr.io('/r/repository/script/execute')
      .share(this.ruser ? this.ruser.getCookies() : null) // make parallel req.
      .data(data)
      .rinputs(rinputs)
      .routputs(routputs)
      .error(function(err) {
        self.reject(new Error(err.get('error')));        
      })
      .end(function(res) {
        res = res.deployr.response;

        var timeOnServer     = res.execution.timeTotal,
            id               = res.project.project,          
            generatedConsole = res.execution.console,
            generatedPlots   = res.execution.results,
            generatedFiles   = res.execution.artifacts,
            generatedObjects = res.workspace.objects,
            storedFiles      = res.repository.files;

        // resolve the promise which kicks-off the callback
        self.resolve({
          id: id,
          type: RTaskType.DISCRETE,
          success: true,
          timeOnServer: timeOnServer,        
          timeOnCall: (new Date().getTime() - startTime),
          failure: null,
          interrupted: false,
          generatedConsole: generatedConsole,
          generatedPlots: generatedPlots,
          generatedFiles: generatedFiles,
          generatedObjects: generatedObjects,
          storedFiles: storedFiles
        });
    });  

    return this;
  },

  terminate: function() {
     this.reject(new Error('Worker task terminated ' + this.task));

     // free-up the client connection
     if (this.io) {
       this.io.abort();
       this.io.destroy();
       this.io = null;      
     }

    /*
     * @NOTE:
     * There is no way to obtain DeployR reference, such as a projectId, for an 
     * stateless execution in-progress, so aborting the current RTask operation 
     * is not possible.
     */
  }
});
