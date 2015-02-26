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
    merge         = require('merge'),
    deployr       = require('deployr'),
    RTaskType     = require('../rtask-type'),
    RBrokerWorker = require('./rbroker-worker');

module.exports =  RBrokerWorker.extend({

  initialize: function initialize(task, ruser) {
    RBrokerWorker.initialize.call(this, task);
    this.ruser = ruser;
  }, 

  work: function(resourceToken) {
    var self      = this,
        data      = merge({
                      project: resourceToken,
                      phantom: true
                    }, this.task.toJSON()),
        rinputs   = data.rinputs || [],
        routputs  = data.routputs || [],
        startTime = new Date().getTime();

    delete data.rinputs;
    delete data.routputs;

    this.resourceToken = resourceToken;

    deployr.io('/r/project/execute/' + (data.code ? 'code' : 'script'))
      .share(this.ruser.getCookies())
      .data(data)
      .rinputs(rinputs)
      .routputs(routputs)
      .error(function(err) {
         self.reject(new Error(err.get('error')));
      })
      .end(function(res) {
        res = res.deployr.response;

        var generatedConsole = res.execution.console,            
            generatedPlots   = res.execution.results,
            generatedFiles   = res.execution.artifacts,
            generatedObjects = res.workspace.objects,
            storedFiles      = res.repository.files;

        // resolve the promise which kicks-off the callback
        self.resolve({
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
        });
    });  

    return this;
  },

  terminate: function() {
    this.reject(new Error('PooledTaskWorker task terminated ' + this.task));

    this.ruser.io('/r/project/execute/interrupt')
      .data({ project: this.resourceToken })      
      .end();
  }
});
