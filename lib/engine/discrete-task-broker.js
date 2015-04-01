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
var D                  = require('d.js'),
    RBrokerEngine      = require('./rbroker-engine'),
    DiscreteTaskWorker = require('../worker/discrete-task-worker');

/**
 * The Discrete Task Runtime acquires DeployR grid resources per `RTask` 
 * on-demand.
 *
 * @module discrete-broker
 * @for rbroker
 */
module.exports = RBrokerEngine.extend({
  /**
   * The Discrete Task Runtime acquires DeployR grid resources per `RTask` 
   * on-demand.
   *
   * @class 
   * @constructor
   * @param {Object} [options] Configuration options.    
   */   
   initialize: function (config) {
      RBrokerEngine.initialize.call(this, config);

      // Initialize the resourceTokenPool with Integer based resourceTokens.
      for (var i = 0; i < this.parallelTaskLimit; i++) {
         this.resourceTokenPool.offer(i);
      }

      if (config.credentials) {
         this.ruser = this.validateEndpoint().io('/r/user/login')         
            .data(config.credentials)
            .ctx(this)            
            .end(function(res) { this.emit('ready'); });
      } else {
         this.validateEndpoint(function() {
            this.ruser = null;  
            this.emit('ready');
         });
      }
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
      throw new Error('DiscreteTaskBroker refresh not supported.');
   },

   /**
    * @Override
    */
   createWorker: function (task) {
      return DiscreteTaskWorker.new(task, this.ruser);
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

      return this.ruser ? this.ruser.release() : D.promisify(true);
   }   
});