/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

var merge                = require('merge'),    
    RBrokerEngine        = require('./rbroker-engine'),
    BackgroundTaskWorker = require('../worker/background-task-worker');

/**
 * The Background Task Runtime acquires DeployR grid resources per `RTask` 
 * based on the server-side management of asynchronous grid resources. 
 *
 * @module brackground-broker
 * @for rbroker
 */
module.exports = RBrokerEngine.extend({  
  /**
   * The Background Task Runtime acquires DeployR grid resources per `RTask` 
   * based on the server-side management of asynchronous grid resources. 
   *
   * @class 
   * @constructor
   * @param {Object} [options] Configuration options.    
   */
  initialize: function (config) {
    /*
     * This limit is set simply to ensure the BackgroundTaskBroker does not 
     * swamp the server which too many concurrent HTTP requests when submitting 
     * RTask. The real queueing of RTask is handled by the server, this broker 
     * simply pushed the RTask into the server-managed queue.
     */
    var PARALLEL_TASK_LIMIT = 10;

    RBrokerEngine.initialize.call(this, merge(config, {
      maxConcurrentTaskLimit: PARALLEL_TASK_LIMIT
    }));    

    // Initialize the resourceTokenPool with Integer based resourceTokens.
    for(var i = 0; i < this.parallelTaskLimit; i++) {
      this.resourceTokenPool.offer(i);
    }
  
    this.ruser = this.validateEndpoint().io('/r/user/login')
      .data(config.credentials)
      .ctx(this)      
      .end(function(res) { this.emit('ready'); });
  }, 

  /**
   * Not supported. Support for `refresh` is only available on the 
   * `PooledTaskBroker` runtime.
   *
   * @method refresh
   * @override
   * @api public   
   */
  refresh: function (config) {
    throw new Error('BackgroundTaskBroker refresh not supported.');
  },

  /**
   * Release all client-side and server-side resources maintained by or on 
   * behalf of an instance of `RBroker`.
   *
   * @method shutdown
   * @override
   * @return {Promise} A promise wrapping the resolution of either "resolve" or 
   * "reject" callback.
   * @api public
   */ 
  shutdown: function () {
    this.flush();

    return this.ruser.release();    
  },  

  /**
   * @override
   * @api private
   */
  createWorker: function (task) {
    return BackgroundTaskWorker.new(task, this.ruser);
  }
});
