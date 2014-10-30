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
    this.ruser = ruser;
    this.job   = null;
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

    deployr.io('/r/job/submit')
      .share(this.ruser.getCookies())
      .data(data)
      .rinputs(rinputs)
      .routputs(routputs)
      .error(function(err) {        
        self.reject(new Error(err.get('error')));     
      })
      .end(function(res) {
        var about = res.deployr.response.job;   

        if (about) {
          self.job = about.job; // job-id     

          // resolve the promise which kicks-off the callback
          self.resolve({
            id: about.job,
            type: RTaskType.BACKGROUND,
            timeOnCode: 0, 
            timeOnServer: 0,
            timeOnCall: (new Date().getTime() - startTime),         
            success: true,
            failure: null
          });          
        }
    });  

    return this;
  },

  terminate: function() {
    deployr.io('/r/job/cancel')
       .share(this.ruser.getCookies())
       .data({ job: this.job })
       .end();

    this.reject(new Error('BackgroundTaskWorker task terminated ' + this.task));
  } 
});
