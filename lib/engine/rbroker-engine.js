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
var deployr             = require('deployr'),
    merge               = require('merge'),
    Base                = require('selfish').Base,
    EventEmitter        = require('deployr/lib/emitter'),
    RTaskToken          = require('../rtask-token'),
    RTaskQueue          = require('../util/rtask-queue'),
    MAX_TASK_QUEUE_SIZE = 999;

/**
 * Represents a high-level programming model for building DeployR-enabled 
 * client applications. By using RBroker an application developer can focus 
 * entirely on integrating R Analytics, while offloading the complexity of 
 * managing client-side API task queues and server-side R session lifecycles.
 *
 * The basic programming model for working with RBroker is as follows:
 *
 * 1. Decide if the R Analytics tasks for your application should execute as:
 *    - Discrete tasks: authentication optional, grid resources allocated at 
 *      runtime, results returned immediately, no persistence. Good for 
 *      prototyping and public facing production deployments.
 *    - Pooled tasks: authentication required, grid resources pre-allocated, 
 *      results returned immediately, optional persistence to repository. Good 
 *      for enterprise production deployments, consistent runtime, 
 *      high-throughput environments.
 *    - Background tasks: authentication required, grid resources allocated at 
 *      runtime, results persisted for later retrieval. Good for periodic, 
 *      scheduled or batch processing.
 * 2. Use the factories defined in rbroker to create an appropriate instance of 
 *    `RBroke`r.
 * 3. Define the R Analytics tasks for your application as one or more `RTask`.
 * 4. Submit your `RTask` to `RBroker` for execution.
 * 5. Integrate the results of your `RTask` found within `.complete()`
 *
 * @module rbroker-engine
 * @for rbroker
 */
module.exports = Base.extend(EventEmitter, {

   /**
    * Represents a high-level programming model for building DeployR-enabled
    * client applications.
    *
    * @class 
    * @constructor
    * @param {Object} [options] Configuration options.    
    */
   initialize: function (config) {
      EventEmitter.initialize.call(this);

      var self               = this;
      this.config            = config;
      this.scope             = this.config.ctx || this; // EventEmitter context
      this.engineStarted     = false;
      this.parallelTaskLimit = this.config.maxConcurrentTaskLimit || 1;
      this.pendingLow        = RTaskQueue.new(MAX_TASK_QUEUE_SIZE);
      this.pendingHigh       = RTaskQueue.new(MAX_TASK_QUEUE_SIZE);
      this.resourceTokenPool = RTaskQueue.new(MAX_TASK_QUEUE_SIZE);

      //
      // Configure `deployr` client with supplied runtime settings and catch 
      // all `io` internal errors.
      //      
      deployr.configure( { 
        host: config.host, 
        cors: config.cors,
        logging: config.logging,
        allowSelfSignedSSLCert: config.allowSelfSignedSSLCert,
        events: {
          error: function(api, res) {
            this.emit('error', res);
          }.bind(this)
        }
      });
      
      /**
       * Correlate the running task counter and other runtime statistics.
       *
       * @private
       */
      this.runtime = {
         runningTasks: 0,

         totals: { success: 0, failure: 0 },

         stats: function(res) {
            return {
               maxConcurrency: self.maxConcurrency(),
               totalTasksRun: this.totals.success + this.totals.failure,
               totalTasksRunToSuccess: this.totals.success,
               totalTasksRunToFailure: this.totals.failure,
               totalTimeTasksOnCode: res.result.timeOnCode,
               totalTimeTasksOnServer: res.result.timeOnServer,
               totalTimeTasksOnCall: res.result.timeOnCall,
               task: res.task
            };
         },

         calibrate: function(direction) {
            this.runningTasks = this.runningTasks + direction;

            if (this.runningTasks < 0) {
               this.runningTasks = 0;
            }

            return this.runningTasks;
         }
      };

      // -- emitted by subclasses indicating workers can begin work --
      this.on('ready', function() {
         this.engineStarted = true;

         // Flush the queues to force work.
         for (var i = 0; i < this.parallelTaskLimit; i++) {
            if (!this.isIdle()) {
               this.run();
            } else {
               break;
            }
         }
      });      
   },
   
   /**
    * Test the `/r/server/info` endpoint, expect HTTP 200 othwrise
    *
    * @param {Function} The optional callback
    * @api public    
    */
   validateEndpoint: function(cb) {
      return deployr.io('/r/server/info')
             .ctx(this)
             .timeout(1000 * 10) 
             .end(cb);
   },

   owner: function() {
     return this.ruser;
   },

   /**
    * Launch an `RTaskAppSimulator` simulation. The `RTask` defined by your 
    * simulation will be automatically executed by the current instance of 
    * `RBroker`.
    *
    * Make sure to register your `.complete()`, `.error()`, `.idle()`, and
    * `.progress()` listeners before starting your simulation in order to 
    * receive asynchronous callbacks in your application when `RTask` complete 
    * and/or to receive runtime summary statistics from `RBroker` as the 
    * simulation proceeds.
    *
    * @method simulateApp
    * @param {Object} The Application Simulator that implements the
    * `simulateApp(RBroker)` method.
    * @api public
    */
   simulateApp: function(appSimulator) {
      if (appSimulator) {
         if (typeof appSimulator.simulateApp === 'function') {
            appSimulator.simulateApp(this);
         } else {
            throw new Error('ReferenceError: "simulateApp" is not defined');
         }
      }
   },

   /**
    * Submit an `RTask` for execution under the control of `RBroker`. If 
    * priority is indicated, priority tasks are automatically moved to the front
    * of the queue, ahead of all standard tasks that are already pending 
    * execution by the broker.
    *
    * @method submit   
    * @param {RTask} The `RTask` associated with this submission.
    * @param {Boolean} (optional) Mark this task as having priority.
    * @return {RTaskToken} The handle to an `RTask` live on an `RBroker`.
    * @api public
    */
   submit: function(task, priority) {
      // `worker` is a defred object. It is either currently working or queued 
      // up with an appointment to work in the future once `run()` is called   
      var worker    = this.createWorker(task),
          taskToken = RTaskToken.new(worker);

      if (priority) {
         this.pendingHigh.offer(worker);
      } else {
         this.pendingLow.offer(worker);
      }

      // start the task work      
      this.run();

      return taskToken;
   },

   /**
    * Returns the task execution concurrency levels enforced for this instance 
    * of `RBroker`.
    *
    * @method maxConcurrency
    * @return {Number} The task execution concurrency levels.
    * @api public
    */
   maxConcurrency: function() {
      return this.parallelTaskLimit;
   },

   /**
    * Flushes all pending `RTask` from queues maintained by `RBroker`. Flushing 
    * `RTask` queues ensures that queued tasks will not be executed by 
    * `RBroker`.
    *
    * @method flush
    * @return {Object} Object literal containing `RBroker` status indicating 
    * the number of currently queued and executing `RTask`.
    * @api public
    */
   flush: function() {
      this.pendingHigh.clear();
      this.pendingLow.clear();

      return this.status();
   },
   
   /**
    * Indicates if current `RBroker` instance is still connected to the DeployR 
    * server. A connection may be lost for a number of reasons, for example, due 
    * to a droppeed network connection between client and server or if the 
    * DeployR server itself goes down.
    *
    * @method isConnected
    * @return {Promise} A promise with a `Boolean` value connection status.    
    * @api public
    */
   isConnected: function() {
      var test = this.ruser ? this.ruser.io('/r/user/about') :
                   deployr.io('/r/server/info')

      //
      // (authenticated | anonymous) checks
      // authenticated  - Test connection to authenticated HTTP session
      // anonymous - Test the that the server is up.
      // 
      return test
                .global(false) // supress global error events for this `io`
                .promise()
                .success(function() {
                  return true; 
                })
                .error(function() {                
                  return false;
                });
   },

   /**
    * Returns status indicating current `RTask` activity on `RBroker`.
    *
    *
    * @method status
    * @return {Object} Object literal containing `RBroker` status indicating the 
    * number of currently queued and executing `RTask`.
    * @api public
    */
   status: function() {
      // Pending tasks include all tasks on high and low priority queues.
      var pending  = this.pendingHigh.size() + this.pendingLow.size(),
         executing = this.parallelTaskLimit - this.runtime.runningTasks,
         idle      = this.isIdle();

      return {
         pending: pending,
         executing: executing,
         idle: idle,
         toString: function() {
            return '\nRBrokerStatus: [ pending = "' + pending + '" ] ' +
               '[ executing = "' + executing + '" ] ' +
               '[ idle = "' + idle + '" ]\n';
         }
      };
   },

   /**
    * Used to determine if an `RBroker` instance is idle which can be 
    * particularly useful ahead of calls to `shutdown()`. Another options is to
    * bind a listener to the `.isIdle()` method.
    * 
    * @method isIdle
    * @return {Boolean} If the `RBroker` instance is idle.
    * @api public
    */
   isIdle: function() {
      return (this.runtime.runningTasks === 0 &&
         this.pendingLow.isEmpty() && this.pendingHigh.isEmpty());
   },

   /**
    * An initialization lifecycle listener fired during construction. 
    *
    * @method error
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   ready: function(fn) {
      this.on('ready', fn);

      return this;
   },      

   /**
    * A failure listener for all tasks submitted on behalf of `this` `RBroker`.
    *
    * @method error
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   error: function(fn) {
      this.on('error', fn);

      return this;
   },

   /**
    * A notification listener indicating warnings about dubious runtime behavior
    * submitted on behalf of `this` `RBroker`.
    *
    * @method warning
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   warning: function(fn) {
      this.on('warning', fn);

      return this;
   },   

   /**
    * A completion listener for all tasks submitted on behalf of `this` 
    * `RBroker`.
    *
    * @method complete
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   complete: function(fn) {
      this.on('complete', fn);

      return this;
   },

   /**
    * A notification listener indicating that `this` `Rbroker` is still active 
    * and there are currently no `RTasks` running or in the wait queue.
    *
    * @method idle
    * @param {Function} The callback function.    
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   idle: function(fn) {
      this.on('idle', fn);

      return this;
   },

   /**
    * A notification listener for `RBroker` runtime statistics of a `RTask`.
    *
    * @method progress
    * @param {Function} The callback function.
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   progress: function(fn) {
      this.on('progress', fn);

      return this;
   },

   /**
    * A notification listener for `RBroker` runtime statistics of a `RTask`.
    *
    * @method progress
    * @param {Function} The callback function.
    * @return {RBroker} The refrence to `this` `RBroker` used for chaining.
    * @api public
    */
   start: function(fn) {
      this.on('start', fn);

      return this;
   },   

   /**
    * Do the task work.
    *
    * @api private
    */
   run: function() {
      var self = this, nextWorker, resourceToken;

      if (this.engineStarted &&
         !this.resourceTokenPool.isEmpty() &&
         (!this.pendingLow.isEmpty() || !this.pendingHigh.isEmpty())) {

         nextWorker = this.pendingHigh.take() || this.pendingLow.take();

         this.runtime.calibrate(+1);

         this.emit('start', nextWorker.task);
         
         nextWorker.work(this.resourceTokenPool.take()) // start working.... 
             .then(function(res) {
                 self.runtime.totals.success++;
                 self.emit('progress', self.runtime.stats(res));
                 self.emit('complete', res.task, res.result);

                 // -- individual RTask notifications --                 
                 this.resolve(res);
             }.bind(nextWorker), function(err) {
                 var res = {
                     task: this.task,
                     result: { // task error result
                         id: null,
                         type: this.task.type,
                         success: false,
                         timeOnCode: 0,
                         timeOnServer: 0,
                         timeOnCall: 0,
                         failure: err
                     }
                 };

                 self.runtime.totals.failure++;
                 self.emit('progress', self.runtime.stats(res));                  
                 self.emit('error', merge(err, { task: this.task }));
                 self.emit('complete', res.task, res.result);
                 
                 // -- individual RTask notifications --
                 this.reject(merge(err, { task: this.task }));
             }.bind(nextWorker))
             .ensure(function(v) { // finally
                 self.runtime.calibrate(-1);
                 self.resourceTokenPool.offer(this.resourceToken);
                 self.run();

                 // -- notify all tasks submitted have came to completion --           
                 if (self.isIdle()) { self.emit('idle'); }
             }.bind(nextWorker));
      }
   }
});