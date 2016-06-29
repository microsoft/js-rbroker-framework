/*!
 * `rbroker` JavaScript Client Library v8.0.5
 * http://go.microsoft.com/fwlink/?LinkID=698842
 *
 * Copyright (C) 2010-2016, Microsoft Corporation
 * Released under the Apache License 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Includes:
 *   - superagent: https://github.com/visionmedia/superagent
 *   - ws: https://github.com/einaros/ws
 *   - D.js: http://malko.github.io/D.js
 *   - yui-lang.js: https://github.com/yui/yui3 (DeployR port)
 *
 * superagent
 *
 * Copyright (c) 2014-2015 TJ Holowaychuk <tj@vision-media.ca>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * ws
 *
 * Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining 
 * a copy of this software and associated documentation files 
 * (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge
 * publish, distribute, sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be 
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * D
 *
 * Copyright (C) 2013 Jonathan Gotti <jgotti at jgotti dot net>
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * selfish
 *
 * Copyright 2011 Irakli Gozalishvili. All rights reserved
 * Open Source Initiative OSI - The MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the,
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * yui-lang
 *
 * The lang component is a DeployR port of yui-lang.js by Yahoo!
 *
 * Software License Agreement (BSD License)
 * Copyright (c) 2013, Yahoo! Inc. All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, 
 * with or without modification, are permitted provided that the 
 * following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer. Redistributions
 * in binary form must reproduce the above copyright notice, this list of
 * conditions and  the following disclaimer in the documentation and/or 
 * other materials provided with the distribution.
 * 
 * Neither the name of Yahoo! Inc. nor the names of YUI's contributors 
 * may be used to endorse or promote products derived from this software 
 * without specific prior written permission of Yahoo! Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT 
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT 
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT, 
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Date: 2016-06-29
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.rbroker = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../worker/background-task-worker":12,"./rbroker-engine":4,"merge":39}],2:[function(require,module,exports){
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
},{"../worker/discrete-task-worker":13,"./rbroker-engine":4,"d.js":18}],3:[function(require,module,exports){
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

var deployr = require('deployr');

var D                = require('d.js'),
    merge            = require('merge'),
    RBrokerEngine    = require('./rbroker-engine'),
    PooledTaskWorker = require('../worker/pooled-task-worker');    

/**
 * The Pooled Task Runtime acquires a dedicated pool of DeployR grid resources 
 * at startup.
 *
 * @module pooled-task-broker
 * @for rbroker
 */
module.exports = RBrokerEngine.extend({  
  /**
   * The Pooled Task Runtime acquires a dedicated pool of DeployR grid resources 
   * at startup.
   *
   * @class 
   * @constructor
   * @param {Object} [options] Configuration options.    
  */
  initialize: function (config) {
    RBrokerEngine.initialize.call(this, config);  

    if (!config.credentials) {
      throw new Error('Broker failed to initialize, user credentials required.');
    }

    var self     = this,
        poolSize = this.parallelTaskLimit,
        pool     = merge({ poolsize: poolSize }, config.pool || {});

    /*
     * Prevents authenticated HTTP session from timing out due to inactivity to 
     * ensure pool of RProject remain live and available to PooledTaskBroker.
     */
    this.httpKeepAlive = {
      id: null,
      PING_INTERVAL: 60000,

      start: function(ruser) {
        this.stop();
        this.id = setInterval(function() { 
          deployr.io('/r/user/about').share(ruser.getCookies()).end();
        }, this.PING_INTERVAL);
      },

      stop: function() {
        clearInterval(this.id);
      }
    };    

    /*
     * Initialize the resourceTokenPool with RProject.
     */
    function load(res) {
      var projects = res.get('projects');
      
      if (projects.length > 0) {
        // inform caller of any `Grid Notification` errors usch as:
        // 'Concurrent authenticated project limit (10) reached for user XYZ.'
        // These 'errors' are more like warnings than runtime throwable errors.
        var warn = res.get('error');        
        if (warn) { self.emit('warning', warn); }

        projects.forEach(function(project) {
          self.resourceTokenPool.offer(project.project);
        });

        self.parallelTaskLimit = self.resourceTokenPool.size();
        self.httpKeepAlive.start(self.ruser);                      
        self.emit('ready');
      } else { // No projects were created (projects.length == 0)
        self.emit('error', res.get('error'));
      }
    }
   
    //
    // Validate DeployR server `endpoint` and authenticate.
    //
    this.ruser = this.validateEndpoint().io('/r/user/login')
      .data(config.credentials)
      .ctx(this)
      .end(function() {
        // 
        // Build the project pool.
        //        
        if (config.releaseGridResources) {
          this.ruser.io('/r/user/release')
             .end()
             .io('/r/project/pool')
             .data(pool)
             .end(load);
        } else {
          this.ruser.io('/r/project/pool').data(pool).end(load);             
        }  
      });
  }, 

  /**
   * Refresh the configuration for `PooledTaskRBroker`.
   *
   * A refresh causes all workspace objects and directory files in the 
   * underlying R sessions within the pool to be cleared before new workspace 
   * objects and/or directory files are loaded per the new config options.
   *
   * Only an idle RBroker instance can be refreshed.
   *
   * @method refresh
   * @param {Object} Startup options for a `PooledTaskRBroker`.
   * @override
   * @return {Promise} A promise wrapping the resolution of either "resolve" or 
   * "reject" callback.
   * @api public   
   */
  refresh: function (config) {
    var calls = [], 
        data  = {},
        ruser = this.ruser;

    if(!this.isIdle()) {
      //var defer = when.defer();
      //defer.reject(new Error('RBroker is not idle,  refresh not permitted.'));
      //return defer.promise;
      return D.rejected(new Error('RBroker is not idle, refresh not permitted.'));
    }

    // assert only the proper parameters are on the call 
    config = config || {};
    data = {
      code: '# Refresh project on PooledTaskBroker.',
      preloadfilename: config.preloadfilename,
      preloaddirectory: config.preloaddirectory,
      preloadfileauthor: config.preloadfileauthor,
      preloadfileversion: config.preloadfileversion
    };    

    // exe will fulfill only once all the inputs have fulfilled     
    this.resourceTokenPool.q.forEach(function(project) {
      calls.push(
        deployr.io('/r/project/recycle')
        .share(ruser.getCookies())
        .delay()
        .data( { project: project })
        .end()
        .io('/r/project/execute/code')
        .share(ruser.getCookies())
        .delay()
        .data(merge(data, { project: project }))
        .end() );
    });

    // execute a series of sequentially chained tasks in sequence batches 
    // without overlap. Works in conjunction with .delay() + .end() or if no
    // .end() is used
    return deployr.pipeline(calls);      
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
    var projects = this.resourceTokenPool.q.slice();

    this.resourceTokenPool.q = [];
    this.httpKeepAlive.stop();
    this.flush();      

    return this.ruser.release(projects);
  },

  /**
   * @override
   * @api private
   */
  createWorker: function (task) {
    return PooledTaskWorker.new(task, this.ruser);
  }  
});

},{"../worker/pooled-task-worker":14,"./rbroker-engine":4,"d.js":18,"deployr":20,"merge":39}],4:[function(require,module,exports){
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
},{"../rtask-token":5,"../util/rtask-queue":11,"deployr":20,"deployr/lib/emitter":21,"merge":39,"selfish":40}],5:[function(require,module,exports){
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
var Base = require('selfish').Base;

/**
 * Represents a handle to an `RTask` live on an `RBroker`.
 *
 * @module rtask-token
 * @for rbroker
 */
module.exports = Base.extend({

    /**
     * Represents a handle to an `RTask` live on an `RBroker`.
     *
     * @class 
     * @constructor
     * @param {RTask} The task worker.
     */
    initialize: function initialize(worker) {
        this.worker    = worker;
        this.cancelled = false;
    },

    /**    
     * Terminates `this` running task.
     *
     * @method cancel
     * @param {Boolean} Permission to interrupt task if it is running.
     * @return {RTaskToken} for chaining.
     * @api public
     */
    cancel: function(interrupt) {
        // RTask completed (resolved|rejected), can not be cancelled.
        this.cancelled = this.worker.terminate(interrupt);
        return this.cancelled;
    },

    /**    
     * Returns the `RTask` associated with this `RTaskToken`.
     *
     * @method getTask
     * @return {RTaskToken} for chaining.
     * @api public
     */
    getTask: function() {
        return this.worker.task;
    },

    /**    
     * Returns `true` if this task completed. Completion may be due to normal 
     * termination, an exception, or cancellation -- in all of these cases, 
     * this method will return `true`.
     *
     * @deprecated  
     * @method isDone
     * @return {Boolean} If `this` task is completed.
     * @api public
     */
    isDone: function() {
        return !this.isPending();
    },

    /**    
     * Returns `false` if this task completed. Completion may be due to normal 
     * termination, an exception, or cancellation -- in all of these cases, 
     * this method will return `true`.
     *
     * @method isPending
     * @return {Boolean} `true` if this task has not yet been completed.
     * @api public
     */
    isPending: function() {
        return this.worker.isPending();
    },

    /**    
     * Returns `true` if this task was cancelled before it completed normally.
     *
     * @method isCancelled
     * @return {Boolean} `true` if this task was cancelled before it completed.
     * @api public
     */
    isCancelled: function() {
        return this.cancelled;
    },

    /**
     * The `.promise()` method returns a dynamically generated Promise that is 
     * resolved once this task has completed.
     *   
     * @method promise
     * @return {Promise} A promise wrapping the resolution of either "resolve" 
     * or "reject" callback.
     * @api public
     */
    promise: function() {
        return this.worker.defer.promise;
    }
});
},{"selfish":40}],6:[function(require,module,exports){
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

var Base     = require('selfish').Base,
    Enum     = require('enum'),
    taskEnum = new Enum(['DISCRETE', 'POOLED', 'BACKGROUND'], 'RTaskType');

/**
 * Defines the currently supported set of `RTask`.
 *
 * @module rtask-type
 * @for rbroker
 */
module.exports = Base.extend({
    /**
     * Discrete task.
     */
    DISCRETE: taskEnum.DISCRETE,

    /**
     * Pooled task.
     */
    POOLED: taskEnum.POOLED,

    /**
     * Background task.
     */
    BACKGROUND: taskEnum.BACKGROUND
});
},{"enum":37,"selfish":40}],7:[function(require,module,exports){
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

var Base      = require('selfish').Base,
    RTaskType = require('../rtask-type'),
    RTask     = require('./rtask');

module.exports = Base.extend(RTask, {

    initialize: function(props) {
        RTask.initialize.call(this, props, RTaskType.BACKGROUND);
    },

    toString: function() {
        return 'BackgroundTask: ' + RTask.toString.call(this);
    }
});
},{"../rtask-type":6,"./rtask":10,"selfish":40}],8:[function(require,module,exports){
/*!
 * CCopyright (C) 2010-2016, Microsoft Corporation
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var Base      = require('selfish').Base,
    RTaskType = require('../rtask-type'),
    RTask     = require('./rtask');

module.exports = Base.extend(RTask, {

    initialize: function(props) {
        RTask.initialize.call(this, props, RTaskType.DISCRETE);
    },

    toString: function() {
        return 'DiscreteTask: ' + RTask.toString.call(this);
    }
});

},{"../rtask-type":6,"./rtask":10,"selfish":40}],9:[function(require,module,exports){
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

var Base      = require('selfish').Base,
    RTaskType = require('../rtask-type'),
    RTask     = require('./rtask');

module.exports = Base.extend(RTask, {

    initialize: function(props) {
        RTask.initialize.call(this, props, RTaskType.POOLED);
    },        

    toString: function() {
        return 'PooledTask: ' + RTask.toString.call(this);
    }
});
},{"../rtask-type":6,"./rtask":10,"selfish":40}],10:[function(require,module,exports){
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

var Base  = require('selfish').Base,
    merge = require('merge');

/**
 * Represents any R Analytics task for execution on an `RBroker`.
 *
 * @module rtask
 * @for rbroker
 */
module.exports = Base.extend({

    /**
     * Represents any R Analytics task for execution on an `RBroker`.
     *
     * @class
     * @constructs
     * @param {Object} props - The task properties object hash.
     */
    initialize: function initialize(props, type) {
        this.type = type;
        this.token = null;

        props = props || {};

        for (var index in props) {
            Object.defineProperty(this, index, {
                value: props[index],
                enumerable: true
            });
        }
    },

    /**
     * A clone of the `RTask` DeployR API properties as a flat object.
     *
     * @returns {Object} A clone of the `RTask` properties.
     */
    serialize: function() {
        var task = {};

        Object.keys(this).filter(function(key) { // blacklist   
                return (['type', 'token'].indexOf(key) === -1);
            })
            .forEach(function(key) {
                task[key] = this[key];
            }.bind(this));

        return merge(true, task);
    },

    toString: function() {
        var out  = '',
            keys = Object.keys(this);

        for (var o in keys) {
            out += ' [ ' + keys[o] + ' = "' + this[keys[o]] + '" ]';
        }

        return out;
    }
});
},{"merge":39,"selfish":40}],11:[function(require,module,exports){
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
 
var Base = require('selfish').Base;

var RTaskQueue = Base.extend({
   initialize: function (capacity) {
      this.capacity = capacity;
      this.q        = [];
   }, 

   /**
    * Inserts the specified element at the tail of this queue if it is possible 
    * to do so immediately without exceeding the queue's capacity, returning 
    * ```true``` upon success and ```false``` if this queue is full.
    */
   offer: function (rtask) {
      var accepting = this.size() < this.capacity;

      if (accepting) {        
        this.q.push(rtask);      
      }

      return accepting; // True if added False otherwise
   },

   /**
    * Retrieves and removes the head of this queue.
    */
   take: function () {
    return this.q.shift();
   },

   /**
    * Retrieves, but does not remove, the head of this queue, or returns `
    * ``null`` if this queue is empty.
    */
   peek: function () {
    return this.q[0];
   },

   /**
    * Returns the number of elements in this queue.
    */
   size: function () {
      return this.q.length;
   },

   /**
    * Returns ```true``` if this collection contains no elements.
    * This implementation returns size() === 0.
    */
   isEmpty: function () {
      return this.size() === 0;
   },

   clear: function () {
      this.q.length = 0;
   },

   iter: function (fn) {
      this.q.forEach(fn);
   }
});

module.exports = RTaskQueue;
},{"selfish":40}],12:[function(require,module,exports){
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

},{"../rtask-type":6,"./rbroker-worker":15,"d.js":18,"deployr":20,"selfish":40}],13:[function(require,module,exports){
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

},{"../rtask-type":6,"./rbroker-worker":15,"d.js":18,"deployr":20,"selfish":40}],14:[function(require,module,exports){
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

},{"../rtask-type":6,"./rbroker-worker":15,"d.js":18,"deployr":20,"merge":39,"selfish":40}],15:[function(require,module,exports){
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

var Base = require('selfish').Base,
    D    = require('d.js');

module.exports = Base.extend({
    initialize: function initialize(task) {
        this.task  = task;
        this.defer = D();
    },

    work: function(resourceToken) { /* override */ },

    terminate: function(interrupt) { /* override */ },

    isPending: function() {
        return this.defer.promise.isPending();
    },

    resolve: function(result) {
        this.defer.resolve(result);
    },

    reject: function(err) {
        this.defer.reject(err);
    }
});

},{"d.js":18,"selfish":40}],16:[function(require,module,exports){

},{}],17:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],18:[function(require,module,exports){
(function (process){
/**
* attempt of a simple defer/promise library for mobile development
* @author Jonathan Gotti < jgotti at jgotti dot net>
* @since 2012-10
* @version 0.6.0
* @changelog
*           - 2013-12-07 - last promise 1.1 specs test passings (thx to wizardwerdna)
 *                       - reduce promises footprint by unscoping methods that could be
*           - 2013-10-23 - make it workig across node-webkit contexts
*           - 2013-07-03 - bug correction in promixify method (thx to adrien gibrat )
*           - 2013-06-22 - bug correction in nodeCapsule method
*           - 2013-06-17 - remove unnecessary Array.indexOf method dependency
*           - 2013-04-18 - add try/catch block around nodeCapsuled methods
*           - 2013-04-13 - check promises/A+ conformity
*                        - make some minication optimisations
*           - 2013-03-26 - add resolved, fulfilled and rejected methods
*           - 2013-03-21 - browser/node compatible
*                        - new method nodeCapsule
*                        - simpler promixify with full api support
*           - 2013-01-25 - add rethrow method
*                        - nextTick optimisation -> add support for process.nextTick + MessageChannel where available
*           - 2012-12-28 - add apply method to promise
*           - 2012-12-20 - add alwaysAsync parameters and property for default setting
*/
(function(undef){
	"use strict";

	var nextTick
		, isFunc = function(f){ return ( typeof f === 'function' ); }
		, isArray = function(a){ return Array.isArray ? Array.isArray(a) : (a instanceof Array); }
		, isObjOrFunc = function(o){ return !!(o && (typeof o).match(/function|object/)); }
		, isNotVal = function(v){ return (v === false || v === undef || v === null); }
		, slice = function(a, offset){ return [].slice.call(a, offset); }
		, undefStr = 'undefined'
		, tErr = typeof TypeError === undefStr ? Error : TypeError
	;
	if ( (typeof process !== undefStr) && process.nextTick ) {
		nextTick = process.nextTick;
	} else if ( typeof MessageChannel !== undefStr ) {
		var ntickChannel = new MessageChannel(), queue = [];
		ntickChannel.port1.onmessage = function(){ queue.length && (queue.shift())(); };
		nextTick = function(cb){
			queue.push(cb);
			ntickChannel.port2.postMessage(0);
		};
	} else {
		nextTick = function(cb){ setTimeout(cb, 0); };
	}
	function rethrow(e){ nextTick(function(){ throw e;}); }

	/**
	 * @typedef deferred
	 * @property {promise} promise
	 * @method resolve
	 * @method fulfill
	 * @method reject
	 */

	/**
	 * @typedef {function} fulfilled
	 * @param {*} value promise resolved value
	 * @returns {*} next promise resolution value
	 */

	/**
	 * @typedef {function} failed
	 * @param {*} reason promise rejection reason
	 * @returns {*} next promise resolution value or rethrow the reason
	 */

	//-- defining unenclosed promise methods --//
	/**
	 * same as then without failed callback
	 * @param {fulfilled} fulfilled callback
	 * @returns {promise} a new promise
	 */
	function promise_success(fulfilled){ return this.then(fulfilled, undef); }

	/**
	 * same as then with only a failed callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_error(failed){ return this.then(undef, failed); }


	/**
	 * same as then but fulfilled callback will receive multiple parameters when promise is fulfilled with an Array
	 * @param {fulfilled} fulfilled callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_apply(fulfilled, failed){
		return this.then(
			function(a){
				return isFunc(fulfilled) ? fulfilled.apply(null, isArray(a) ? a : [a]) : (defer.onlyFuncs ? a : fulfilled);
			}
			, failed || undef
		);
	}

	/**
	 * cleanup method which will be always executed regardless fulfillment or rejection
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore
	 * @returns {promise} the same promise untouched
	 */
	function promise_ensure(cb){
		function _cb(){ cb(); }
		this.then(_cb, _cb);
		return this;
	}

	/**
	 * take a single callback which wait for an error as first parameter. other resolution values are passed as with the apply/spread method
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore with error as first parameter if any as in node style
	 *                      callback. Rest of parameters will be applied as with the apply method.
	 * @returns {promise} a new promise
	 */
	function promise_nodify(cb){
		return this.then(
			function(a){
				return isFunc(cb) ? cb.apply(null, isArray(a) ? a.splice(0,0,undefined) && a : [undefined,a]) : (defer.onlyFuncs ? a : cb);
			}
			, function(e){
				return cb(e);
			}
		);
	}

	/**
	 *
	 * @param {function} [failed] without parameter will only rethrow promise rejection reason outside of the promise library on next tick
	 *                            if passed a failed method then will call failed on rejection and throw the error again if failed didn't
	 * @returns {promise} a new promise
	 */
	function promise_rethrow(failed){
		return this.then(
			undef
			, failed ? function(e){ failed(e); throw e; } : rethrow
		);
	}

	/**
	* @param {boolean} [alwaysAsync] if set force the async resolution for this promise independantly of the D.alwaysAsync option
	* @returns {deferred} defered object with property 'promise' and methods reject,fulfill,resolve (fulfill being an alias for resolve)
	*/
	var defer = function (alwaysAsync){
		var alwaysAsyncFn = (undef !== alwaysAsync ? alwaysAsync : defer.alwaysAsync) ? nextTick : function(fn){fn();}
			, status = 0 // -1 failed | 1 fulfilled
			, pendings = []
			, value
			/**
			 * @typedef promise
			 */
			, _promise  = {
				/**
				 * @param {fulfilled|function} fulfilled callback
				 * @param {failed|function} failed callback
				 * @returns {promise} a new promise
				 */
				then: function(fulfilled, failed){
					var d = defer();
					pendings.push([
						function(value){
							try{
								if( isNotVal(fulfilled)){
									d.resolve(value);
								} else {
									d.resolve(isFunc(fulfilled) ? fulfilled(value) : (defer.onlyFuncs ? value : fulfilled));
								}
							}catch(e){
								d.reject(e);
							}
						}
						, function(err){
							if ( isNotVal(failed) || ((!isFunc(failed)) && defer.onlyFuncs) ) {
								d.reject(err);
							}
							if ( failed ) {
								try{ d.resolve(isFunc(failed) ? failed(err) : failed); }catch(e){ d.reject(e);}
							}
						}
					]);
					status !== 0 && alwaysAsyncFn(execCallbacks);
					return d.promise;
				}

				, success: promise_success

				, error: promise_error
				, otherwise: promise_error

				, apply: promise_apply
				, spread: promise_apply

				, ensure: promise_ensure

				, nodify: promise_nodify

				, rethrow: promise_rethrow

				, isPending: function(){ return !!(status === 0); }

				, getStatus: function(){ return status; }
			}
		;
		_promise.toSource = _promise.toString = _promise.valueOf = function(){return value === undef ? this : value; };


		function execCallbacks(){
			if ( status === 0 ) {
				return;
			}
			var cbs = pendings, i = 0, l = cbs.length, cbIndex = ~status ? 0 : 1, cb;
			pendings = [];
			for( ; i < l; i++ ){
				(cb = cbs[i][cbIndex]) && cb(value);
			}
		}

		/**
		 * fulfill deferred with given value
		 * @param {*} val
		 * @returns {deferred} this for method chaining
		 */
		function _resolve(val){
			var done = false;
			function once(f){
				return function(x){
					if (done) {
						return undefined;
					} else {
						done = true;
						return f(x);
					}
				};
			}
			if ( status ) {
				return this;
			}
			try {
				var then = isObjOrFunc(val) && val.then;
				if ( isFunc(then) ) { // managing a promise
					if( val === _promise ){
						throw new tErr("Promise can't resolve itself");
					}
					then.call(val, once(_resolve), once(_reject));
					return this;
				}
			} catch (e) {
				once(_reject)(e);
				return this;
			}
			alwaysAsyncFn(function(){
				value = val;
				status = 1;
				execCallbacks();
			});
			return this;
		}

		/**
		 * reject deferred with given reason
		 * @param {*} Err
		 * @returns {deferred} this for method chaining
		 */
		function _reject(Err){
			status || alwaysAsyncFn(function(){
				try{ throw(Err); }catch(e){ value = e; }
				status = -1;
				execCallbacks();
			});
			return this;
		}
		return /**@type deferred */ {
			promise:_promise
			,resolve:_resolve
			,fulfill:_resolve // alias
			,reject:_reject
		};
	};

	defer.deferred = defer.defer = defer;
	defer.nextTick = nextTick;
	defer.alwaysAsync = true; // setting this will change default behaviour. use it only if necessary as asynchronicity will force some delay between your promise resolutions and is not always what you want.
	/**
	* setting onlyFuncs to false will break promises/A+ conformity by allowing you to pass non undefined/null values instead of callbacks
	* instead of just ignoring any non function parameters to then,success,error... it will accept non null|undefined values.
	* this will allow you shortcuts like promise.then('val','handled error'')
	* to be equivalent of promise.then(function(){ return 'val';},function(){ return 'handled error'})
	*/
	defer.onlyFuncs = true;

	/**
	 * return a fulfilled promise of given value (always async resolution)
	 * @param {*} value
	 * @returns {promise}
	 */
	defer.resolved = defer.fulfilled = function(value){ return defer(true).resolve(value).promise; };

	/**
	 * return a rejected promise with given reason of rejection (always async rejection)
	 * @param {*} reason
	 * @returns {promise}
	 */
	defer.rejected = function(reason){ return defer(true).reject(reason).promise; };

	/**
	 * return a promise with no resolution value which will be resolved in time ms (using setTimeout)
	 * @param {int} [time] in ms default to 0
	 * @returns {promise}
	 */
	defer.wait = function(time){
		var d = defer();
		setTimeout(d.resolve, time || 0);
		return d.promise;
	};

	/**
	 * return a promise for the return value of function call which will be fulfilled in delay ms or rejected if given fn throw an error
	 * @param {function} fn
	 * @param {int} [delay] in ms default to 0
	 * @returns {promise}
	 */
	defer.delay = function(fn, delay){
		var d = defer();
		setTimeout(function(){ try{ d.resolve(fn.apply(null)); }catch(e){ d.reject(e); } }, delay || 0);
		return d.promise;
	};

	/**
	 * if given value is not a promise return a fulfilled promise resolved to given value
	 * @param {*} promise a value or a promise
	 * @returns {promise}
	 */
	defer.promisify = function(promise){
		if ( promise && isFunc(promise.then) ) { return promise;}
		return defer.resolved(promise);
	};

	function multiPromiseResolver(callerArguments, returnPromises){
		var promises = slice(callerArguments);
		if ( promises.length === 1 && isArray(promises[0]) ) {
			if(! promises[0].length ){
				return defer.fulfilled([]);
			}
			promises = promises[0];
		}
		var args = []
			, d = defer()
			, c = promises.length
		;
		if ( !c ) {
			d.resolve(args);
		} else {
			var resolver = function(i){
				promises[i] = defer.promisify(promises[i]);
				promises[i].then(
					function(v){
						if (! (i in args) ) { //@todo check this is still required as promises can't be resolve more than once
							args[i] = returnPromises ? promises[i] : v;
							(--c) || d.resolve(args);
						}
					}
					, function(e){
						if(! (i in args) ){
							if( ! returnPromises ){
								d.reject(e);
							} else {
								args[i] = promises[i];
								(--c) || d.resolve(args);
							}
						}
					}
				);
			};
			for( var i = 0, l = c; i < l; i++ ){
				resolver(i);
			}
		}
		return d.promise;
	}

	/**
	 * return a promise for all given promises / values.
	 * the returned promises will be fulfilled with a list of resolved value.
	 * if any given promise is rejected then on the first rejection the returned promised will be rejected with the same reason
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 * @returns {promise} of a list of given promise resolution value
	 */
	defer.all = function(){ return multiPromiseResolver(arguments,false); };

	/**
	 * return an always fulfilled promise of array<promise> list of promises/values regardless they resolve fulfilled or rejected
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 *                     (non promise values will be promisified)
	 * @returns {promise} of the list of given promises
	 */
	defer.resolveAll = function(){ return multiPromiseResolver(arguments,true); };

	/**
	 * transform a typical nodejs async method awaiting a callback as last parameter, receiving error as first parameter to a function that
	 * will return a promise instead. the returned promise will resolve with normal callback value minus the first error parameter on
	 * fulfill and will be rejected with that error as reason in case of error.
	 * @param {object} [subject] optional subject of the method to encapsulate
	 * @param {function} fn the function to encapsulate if the normal callback should receive more than a single parameter (minus the error)
	 *                      the promise will resolve with the list or parameters as fulfillment value. If only one parameter is sent to the
	 *                      callback then it will be used as the resolution value.
	 * @returns {Function}
	 */
	defer.nodeCapsule = function(subject, fn){
		if ( !fn ) {
			fn = subject;
			subject = void(0);
		}
		return function(){
			var d = defer(), args = slice(arguments);
			args.push(function(err, res){
				err ? d.reject(err) : d.resolve(arguments.length > 2 ? slice(arguments, 1) : res);
			});
			try{
				fn.apply(subject, args);
			}catch(e){
				d.reject(e);
			}
			return d.promise;
		};
	};

	typeof window !== undefStr && (window.D = defer);
	typeof module !== undefStr && module.exports && (module.exports = defer);

})();

}).call(this,require('_process'))

},{"_process":17}],19:[function(require,module,exports){
module.exports={
    "/r/user/login": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/logout": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/about": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/autosave": {
        "method": "POST",
        "format": "json"
    },

    "/r/user/release": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/create": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/pool": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/recycle": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/ping": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/about": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/about/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/save": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/saveas": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/close": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/grant": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/import": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/export": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/code": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/script": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/interrupt": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/console": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/history": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/flush": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/execute/result/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/get": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/workspace/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/push": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/save": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/store": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/load": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/workspace/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/project/directory/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/write": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/store": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/load": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/directory/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/attach": {
        "method": "POST",
        "format": "json"
    },

    "/r/project/package/detach": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/submit": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/schedule": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/query": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/cancel": {
        "method": "POST",
        "format": "json"
    },

    "/r/job/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/create": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/rename": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/copy": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/move": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/execute": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/script/render": {
        "method": "GET",
        "format": "json"
    },

    "/r/repository/script/interrupt": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/archive": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/repository/directory/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/directory/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/list": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/fetch": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/fetch": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/upload": {
        "method": "POST",
        "format": "json",
        "upload": true
    },

    "/r/repository/file/transfer": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/write": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/update": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/diff": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/revert": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/grant": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/download": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/delete": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/copy": {
        "method": "POST",
        "format": "json"
    },

    "/r/repository/file/move": {
        "method": "POST",
        "format": "json"
    },

    "/r/server/info": {
        "method": "GET",
        "format": "json"
    }
}

},{}],20:[function(require,module,exports){
(function (process){
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

var win         = (typeof window !== 'undefined'),   
    request     = require('superagent'),
    D           = require('d.js'),
    fs          = require('fs'),
    apis        = require('./apis.json'), 
    EventStream = require('./lib/es'),
    utils       = require('./lib/utils'),
    Lang        = require('./lib/lang'),   
    Logger      = require('./lib/logger'),   
    Queue       = require('./lib/queue'),
    Emitter     = require('./lib/emitter'),
    encoder     = require('./lib/encoder'),
    Base        = require('./lib/selfish').Base,
    RInput      = require('./lib/rinput'),    
    RInputs     = require('./lib/rinputs'),
    merge       = utils.merge;

/*
 * Turn global logging off by default
 */
Logger.setLevel(Logger.OFF);

/*
 * Global options that persist through all DeployR requests.
 */
var globalOptions = { 
  cors: false,
  logging: false,
  sticky: false,
  headers: null,
  host: '',
  allowSelfSignedSSLCert: false,
  maxRequests: null, // no socket pooling in http.Agent
  events:{},
  set: function(prop, value) { 
    if (prop !== 'set') { 
      if (prop === 'host' && value) {         
         // Be more forgiving on the entered DeployR 'endpoint':
         //   - http(s)://dhost:port
         //   - http(s)://dhost:port/deployr
         //   - dhost:port
         //   - dhost:port/deployr         
         value = value.replace(/\/*$|\/*deployr\/*$/, '');
         value = (new RegExp('^(http|https)://', 'i')).test(value) ? value : 
            'http://' + value;
      }

      this[prop] = value; 
    } 
  }
};

/*
 * The top-level DeployR API response entities.
 */
var TOPLEVEL_ENTITIES = [
  'user', 
  'project', 
  'workspace', 
  'execution', 
  'directory', 
  'repository', 
  'packages' 
];

/*
 * Header token for CSRF.
 */
var X_XSRF_TOKEN = 'x-xsrf-token';

/*
 * Notify global IO error events accessible by all subscribers across requests.
 */
function raiseGlobalErrors(api, res) {
  var code    = res.deployr ? res.deployr.response.errorCode : res.status,
      context = this;

  // -- global events if provided --
  if (globalOptions.events) {
    if (!res.deployr) {
      res = res.text;
    }

    context = globalOptions.events.ctx || context;

    // -- general global failure --
    if (globalOptions.events.error) {
      globalOptions.events.error.apply(context, [api, res]);
    }

    // -- HTTP or DeployR global errors --    
    if (globalOptions.events[code]) {
      globalOptions.events[code].apply(context, [api, res]);
    }
  }
}

/**
 * The `DeployR` request class is a utility that brokers HTTP requests through a 
 * simplified fluid interface to DeployR.
 *
 * @module deployr
 * @for deployr
 */
var DeployR = Base.extend(Emitter, RInputs, {

  /**
   * The `DeployR` Request class is a utility that brokers HTTP requests through 
   * a simplified fluid interface to DeployR.
   * 
   * @class 
   * @constructor
   * @param {String} api The DeployR API
   * @param {Object} link The object literal containing the previous request.
   * @api private
   */
  initialize: function initialize(api, link) {
     Emitter.initialize.call(this, {});
  
     var opts = globalOptions;

     if (!apis[api]) { throw new Error('Invalid API "' + api + '"'); }
    
     this.api        = merge({ 'call': api }, apis[api]);    
     this.link       = link || {};
     this.q          = this.link.queue || new Queue();
     this.deferred   = this.link.deferred || D();
     this.headers    = this.link.headers;
     this.logger     = Logger.get(api, Logger.OFF); // transaction-level logging
     this.params     = {};
     this.inputs     = []; // rinputs list 
     this.outputs    = []; // routput object list
     this.rstream    = false;
     this.delayed    = false;
     this.globalEvts = true; // suppress|raise global events fot this `io`     
     this.file       = null; 
     this.entities   = null; 
     this.ioFilter   = function() { return true; };

     // preset deployr's assigned response format for `this` api
     this.data({ format: this.api.format });

     // wrap superagent for the heavy lifting     
     this.req = 
        request[this.api.method.toLowerCase()](opts.host + '/deployr' + api);
     this.req.timeout(20 * 60 * 1000); // default timeout --> 20 minutes

     // All CORS deployr calls require sticky sessions
     if (win && globalOptions.cors) { this.req.withCredentials(); }

     // Node.js - access an SSL endpoint with self signed certs for testing|dev
     if (!win && globalOptions.allowSelfSignedSSLCert) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';        
     }
  },

  /**
   * Binds the scope context for the configured `.end()` and `.error()` event    
   * handler callbacks on this request.
   *
   * @method ctx
   * @param {Object} context The `this` object for the configured `.end()` and
   * `.error()` event handlers on this request.
   * @api public   
   */ 
  ctx: function (context) {
    this.scope = context || this;

    return this;
  },

  /**
   * Suppress or raise global events for this `io` request.
   *
   * @method global
   * @param {Boolean} raise `true` to raise global events, `false` to supress 
   * event firing globally.
   * @return {DeployR} for chaining.
   * @api public
   */  
  global: function(raise) {
    this.globalEvts = Lang.isBoolean(raise) ? raise : this.globalEvts;

    return this;
  },  

  /**
   * Retrieve details about user.
   *   
   * @method about
   * @return {Object} details about user otherwies `null`.
   * @api public   
   */
  about: function() {
    var response = this.req.res;

    return this.api['call'] === '/r/user/login' && response ? 
           response.body.get('user') : null;
  },  

  /**
   * Shares the cookie and CSRF tokens from a differen `.io()` agent to preserve 
   * session state across `this` request and all requests chained to it.   
   *
   * @method share
   * @return {DeployR} for chaining.
   * @api public   
   */  
  share: function (headers) {   

    if (globalOptions.sticky) {       
      if (globalOptions.headers) {
        this.headers = globalOptions.headers;
      } else {
        if (headers) { 
          this.headers = {
            'Cookie': headers['set-cookie'] || headers['Cookie'],
            'x-xsrf-token': headers[X_XSRF_TOKEN]
          };
          globalOptions.set('headers', this.headers);
        }
      }
    } else {
      this.headers = headers ? {
        'Cookie': headers['set-cookie'] || headers['Cookie'],
        'x-xsrf-token': headers[X_XSRF_TOKEN]
      } : this.headers;
    }

    return this;
  },  

  /**
   * Returns the HTTP headers including the cookie previously sent by the server 
   * with Set-Cookie in addition to the X-XSRF-TOKEN.
   *
   * This value can be passed to `.share(ruser.getHeaders())` of a diffrent
   * `.io()` agent to preserve session state across requests.
   *
   * @method getHeaders
   * @return {Array} The HTTP cookie previously sent by the server with 
   * Set-Cookie.
   * @api public   
   */  
  getHeaders: function () {
    return this.headers;
  }, 

  /**
   * Please use `getHeaders()`.
   *
   * @Deprecated 
   */
  getCookies: function () {
    return this.getHeaders();
  },      

  delay: function (ms) {
    // TODO: support delayed requests based on ms for now this is just a pause.
    this.delayed = !isNaN(parseFloat(ms)) && isFinite(ms) ? ms : true;

    return this;
  },   

  /**
   * Unwind the queue chain clearing requests that might have delays attached.
   *
   * @method drain
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public   
   */
  drain: function () {
    this.delayed = false;
    this.q.flush(); 

    return this.deferred.promise;
  },   

  /**
   * The `.promise()` method returns a dynamically generated Promise that is 
   * resolved once all DeployR `.io()` requests have ended.
   *   
   * @method promise
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public
   */     
  promise: function () {
    this.end();

    return this.deferred.promise;
  },

  /**
   * Abort the DeployR request.
   *
   * @method abort  
   * @return {DeployR} for chaining.
   * @api public
   */  
  abort: function () {
    this.req.abort();
    this.emit('abort');
    this.deferred.reject(this._handleError({ 
        status: 'abort',
        text: 'DeployR request aborted.'
    }));

    return this;
  },

 /**
  * Set timeout to `ms`.
  *
  * @method timeout  
  * @param {Number} ms
  * @return {DeployR} for chaining
  * @api public
  */  
  timeout: function (ms) {
    this.req.timeout(ms);

    return this;
  },

 /**
  * Turn logging on for the specific transaction.
  *
  * @method log
  * @return {DeployR} for chaining
  * @api public
  */ 
  log: function (level) {
    this.logger.setLevel(level || Logger.DEBUG);

    return this;
  },

  /**
   * Filters successful responses to contain only a top-level DeployR API 
   * response entities:
   * - 'user'
   * - 'project'
   * - 'workspace' 
   * - 'execution' 
   * - 'directory' 
   * - 'repository'
   * - 'packages' 
   *   
   * @method entity
   * @return {DeployR} for chaining
   * @api public
   */
  entity: function (entity) {
    this.entities = utils.inArray(TOPLEVEL_ENTITIES, entity);

    return this;
  },

  /**
   * Defines the request data being sent to a DeployR API. 
   *
   * @method data
   * @param {Object} data The object literal configuration hash. 
   * @return {DeployR} for chaining
   * @api public
   */
  data: function (data) {
    data = data || {};    

    // remove any inlined rinput(s) and attach them to the rinput(s) property
    if (data.rinput || data.rinputs) {
      this.rinput(data.rinput);
      this.rinputs(data.rinputs);
    } 

    // remove any `reserved` values that could have been passed by mistake
    var BLACKLIST = ['rinput', 'rinputs', '__headers__'];
    BLACKLIST.forEach(function(param) { delete data[param]; });  

    this.params = merge(this.params, data);

    return this;
  },

  /**
   * Attaches a file to be uploaded. 
   *
   * @method attach
   * @param {File|Blob|path} file The file to be attached for an upload. For 
   * Browser environments the HTML5 File|Blob is used. For the Node.js 
   * environment, a file path is accepted.
   * @param {String} filename (optional) the name of the file to be uploaded. 
   * This name does not have to match the actual source filename.
   * @return {DeployR} for chaining
   * @api public
   */
  attach: function (file, filename) {
    if (this.api.upload) {
      this.file = file;

      // optional filename here for convenience
      if (filename) { this.data( { filename: filename } ); }
    }

    return this;
  },

  /**
   * Supported only in Node.js, this method works in conjunction with the 
   * attach method to indicate that the file should be read in as a readable 
   * stream during a file upload.
   *
   * @method stream
   * @param {Object} options (optional) the Readable Stream options hash.
   *  ```
   *    { flags: 'r',
   *      encoding: null,
   *      fd: null,
   *      mode: 0666,
   *      autoClose: true
   *    }
   * ```
   * @return {DeployR} for chaining
   * @api public
   */
  stream: function () {
    this.rstream = (!win && this.api.upload); //nodejs only

    return this;
  },

  /**
   * The `filter(λ)` method removes this DeployR request from the request chain
   * if the provided function does *not* pass the test implemented by it.
   *
   * Examples:
   *
   * ```
   * // Remove from the request chain
   * .filter(function(args) {
   *    return 5 > 10;
   * })
   *
   * // Keep in the request chain
   * .filter(function(args) {
   *    return 10 > 5;
   * })   
   * ```
   *
   * @method filter
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public   
   */
  filter: function(fn) {
    if (fn) {
      this.ioFilter = function(prevArgs) {
        var args = {}, keep;

        // copy over previous arguments and filter out internal __headers__ 
        for (var key in prevArgs) {
           if (key !== '__headers__') { 
              args[key] = prevArgs[key];
           }
        }

        keep = fn(args);
        return (keep || keep === false ? keep : true);
      };
    }

    return this;
  },  
  
  /**
   * Acts as a finally statement allowing you to execute "cleanup" type tasks 
   * in a request chain. It arranges for cleanup to be called, with no 
   * arguments, when the DeployR request chain is either completely fulfilled 
   * or rejected.
   *
   * @method ensure
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public
   */  
  ensure: function (fn) {
    this.deferred.promise.ensure(fn);

    return this.deferred.promise;
  },
      
  /**
   * The general failure callback. If called, all DeployR errors for this 
   * transaction will be returned here when raised.
   *
   * @method error
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining
   * @api public
   */
  error: function (fn) {
    this.on('error', fn);

    return this;
  },

  /**
   * Stream the DeployR response into the pipe. It is important to note that if 
   * the `.pipe()` method is never called the request will not be sent.
   *
   * The `.pipe()` method should be be used as an alternative to `.end()` and 
   * never along side of it. `.pipe()` and `.end()` are an either-or.
   *
   * @method pipe
   * @param {Stream} stream A destination Stream.
   * @return {Stream} The passed in destination stream to be used for additional 
   * piping.
   * @api public
   */
  pipe: function (dest) {
    var q   = this.q,
        api = this.api;        

    q.add(function(responseChain, error, prevArgs) {    
      // brake the call chain on error      
      if (error) {        
        this.deferred.reject(error);      
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('pipe()', api, this.req);
      this.logger.info('pipe()', api, this.req);   

      var stream = this.req.pipe(dest);
      q.yield(true);
      stream.on('error', function () { });    
      stream.on('end', function() { });     
      stream.on('data', function() { });      
    }, this);
  
    if (q.size() <= 1) { q.flush(); }

    return dest;
  },

  /**
   * Indicates that the request is ready to be sent to DeployR. It is important 
   * to note that if the `.end()` method is never called the request will not be
   * sent.
   *
   * @method end
   * @param {Function} λ the callback function.
   * @return {DeployR} for chaining.
   * @api public
   */ 
  end: function (fn) {
    var self     = this,
        q        = this.q,
        api      = this.api,
        args     = null,
        entities =  this.entities;

    q.add(function(responseChain, error, prevArgs) {
      // break the call chain on error      
      if (error) {        
        this.deferred.reject(error);        
        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }

      // filter out responses    
      if (!this.ioFilter(prevArgs)) {
        if (q.size() === 0) { 
          this.deferred.resolve(responseChain || prevArgs);
        }

        q.flush(responseChain, error, prevArgs); // drain the queue
        this._clear();
        return;
      }
      
      this._prepRequest(responseChain, prevArgs);

      Logger.info('io()', api, this.rexq);
      this.logger.info('io()', api, this.req);    

      // send next request
      this.req.end(function(res) {
        //
        // Browsers will not let you set cookies or grab headers as it handles 
        // that for you. Here we store the `X-XSRF-TOKEN` (should it be 
        // available) from the API response for future requests that will 
        // `share` the same authentication HTTP session + CSRF creds.
        //
        if (win && !res.headers['set-cookie']) {
          var r = (res.body && res.body.deployr ? res.body : res);  
          if (r && r.deployr) {
            var headers = {};
            headers[X_XSRF_TOKEN] = r.deployr.response['X-XSRF-TOKEN'];
            if (headers[X_XSRF_TOKEN]) {
              self.share(headers);
            }
          }
        }

        self.share(self.headers || res.headers);       

        // -- log cookies + CSRF across requests --
        if (self.headers) {
          Logger.info('Cookie', api, self.headers.Cookie); 
          self.logger.info('Cookie', api, self.headers.Cookie);
          Logger.info(X_XSRF_TOKEN, api, self.headers[X_XSRF_TOKEN]);
          self.logger.info(X_XSRF_TOKEN, api, self.headers[X_XSRF_TOKEN]); 
        }

        error = self._handleError(res);
        var dres = (res.body && res.body.deployr ? res.body : res);             
      
        self.inputs = [];
        self.outputs = [];

        if (!error) {
           // -- Log global + transaction log --
           Logger.info('end()', api, dres, res);
           self.logger.info('end()', api, dres, res);

           // -- walk response for top-level entity response assignment --        
           if (entities) { dres = dres.deployr.response[entities] || dres; }

           dres.get = function(key) { 
              return utils.get(dres.deployr.response, key); 
           };

           dres.workspace = function(name) { 
              return utils.workspace(dres.deployr.response, name); 
           };

           // -- callback --
           if (fn) { args = fn.apply(self.scope, [dres, responseChain]);}

           // -- notify that the queue has been drained... --
           if (q.size() === 0) { 
             self._clear();
             self.deferred.resolve(responseChain || dres);
           }          

           // -- include headers in next request in the queue --
           args = merge(args, { __headers__: self.headers });          
        }        

        q.yield(false);
        q.flush(dres, error, args); // pass result|error|args to next 
      });

      q.yield(true);
    }, this, this.delayed);
  
    if (!this.delayed && q.size() <= 1) { q.flush(); }

    return this;
  }, 

  /** 
   * Add an additional IO request to the exsisting sequential request chain.
   *
   * @method io
   * @param {String} api One of the supported DeployR APIs.
   * @return {DeployR} for chaining.
   * @api public
   */   
  io: function (api) {    
    return DeployR.new(api, { 
      headers: this.getHeaders(),
      queue: this.q, 
      deferred: this.deferred
    });
  },

  /** 
   * Convenience function for adding an additional script execution to the 
   * exsisting sequential request chain.
   *
   * @method script
   * @param {Arguments} Arguments to define the fully qualified script for 
   * execution.
   * @return {DeployR} for chaining.   
   * @api public
   */
  script: function() {
     var args = utils.signature(arguments),
         opts = args.opts,
         api  = args.api,
         link = { 
          headers: this.getHeaders(),
          queue: this.q, 
          deferred: this.deferred
        };  

    // convenience - if the project is a boolen `true` rather than a pid, first
    // create a new project and then prepare the project api call to execute
    if (args.create) {
      return DeployR.new('/r/project/create', link)
               .end(function(res) {
                  return { project: res.get('project').project };
                })
               .io(api)
               .data(opts);
    } else {
      return DeployR.new(api, link).data(opts);
    }    
  },

  /** 
   * Convenience function for executing a block of R code on the R session.

   * Example:
   *  ```
   *  .code('x<-5')
   *  // -- or --
   *  .code('x<-5', projectId)
   *  ```
   *   
   * @method code
   * @param {String} r - The block of R code to execute.
   * @param {String} project - (optional) if omitted a new project will first be 
   * created and used, otherwise it will execute on the R session identified by 
   * this `project`.
   * @return {DeployR} for chaining.   
   * @api public
   */
  code: function(r, project) {
     var link = {
             headers: this.getHeaders(), 
             queue: this.q,
             deferred: this.deferred
         },
         api = '/r/project/execute/code';

     if (!project) {
         return DeployR.new('/r/project/create', link)
             .end(function(res) {
                 return { project: res.get('project').project };
             })
             .io(api)
             .data({ code: r });
     } else {
         return DeployR.new(api, link).data({ code: r, project: project });
     }
  },
  
  /** 
   * Release any residual project resources associated with the application 
   * instance whenever a client application terminates. This includes closing 
   * any supplied projects down and logging out.
   *
   * @method release
   * @param {String|Array} projects The project or list of projects to close.
   * @param {Boolean} auth (optional) to remain authenticated.
   * @return {DeployR} for chaining.   
   * @api public
   */
  release: function(projects, auth) {
     projects = Lang.isArray(projects) ? projects : [projects];

     var self     = this,
         deferred = D(),
         empty    = !projects || !projects[0],
         count    = 0,
         last     = !empty ? projects.length - 1 : count,
         headers  = this.getHeaders();         

    function logout(index) {
      if (index === last) {
        if (!auth) {
          DeployR.new('/r/user/logout')
          .share(headers)
          .error(function() {          
            deferred.reject(false);
          })      
          .end(function() { 
            deferred.resolve(true);
          })
          .ensure(function() {
            self.destroy();
          });
        } else {
          deferred.resolve(true);
          self.destroy();
        }
      } 
    }

    if (!empty) {
      projects.forEach(function(project) {
        DeployR.new('/r/project/close')
        .data({ project: project })
        .share(headers)
        .end()
        .ensure(function() {
          logout(count);
          count++;
        });
      });   
    } else {
      logout(count);
    }

    return deferred.promise;  
  },  

  /** 
   * A convenience alternative to multiple `.rinput()` calls. Defines a name 
   * list of R objects that will be returned as DeployR-encoded R objects on the 
   * response markup.
   *
   * Calling this method ~.routputs([ ... ])` is equivalent to invoking multiple 
   * `.routput(...)` calls.
   *
   * @method routputs
   * @param {Array} robjects A name list of R objects that will be returned.
   * @return {DeployR} for chaining.   
   * @api public
   */
  routputs: function (routputs) {
    if (routputs) { this.outputs = this.outputs.concat(routputs); }

    return this;
  },
  
  /** 
   * Defines the name of the R object that will be returned as a DeployR-encoded 
   * R object on the response markup.
   *
   * @method routput
   * @param {String} robject The name of the R object that will be returned.
   * @return {DeployR} for chaining.   
   * @api public
   */
  routput: function (routput) {
    if (routput) { this.routputs([routput]); }

    return this;
  },

  /** 
   * Used to pass multiple inputs at once from JavaScript to an R script using 
   * one of the defined `RInput` factories.
   *
   * @method rinputs
   * @param {Array} rinputs The `RInput` list of DeployR-specific encoded R 
   * object data for use on an API call.
   * @return {DeployR} for chaining.   
   * @api public
   */
  rinputs: function (rinputs) {
    if (rinputs) { this.inputs = this.inputs.concat(rinputs); }

    return this;
  },

  /** 
   * Used to pass multiple inputs at once from JavaScript to an R script using 
   * one of the defined `RInput` factories.
   *
   * @method rinput
   * @param {RInput} rinput The DeployR-specific encoded R object data for use 
   * on an API call.   
   * @return {DeployR} for chaining.   
   * @api public
   */
  rinput: function (rinput) {
    if (rinput) { this.inputs.push(rinput); }

    return this;
  },

  /**
   * Destroy lifecycle method. Fires the `destroy` event, prior to invoking 
   * destructors for the class hierarchy. Called internally when `.release()`
   * is called.
   *
   * @method destroy
   * @api public   
   */
  destroy: function () {
    try {
      this.emit('destroy');
      this.offAll();
    
      for (var key in this) {
        if (this.hasOwnProperty(key)) { 
          this[key] = null; 
          delete this[key];
        }
      }
    } catch(err) {}
  },  

  // --------------------------------------------------------------------------
  // Private methods
  // --------------------------------------------------------------------------

  /**
   * @api private
   */
  _clear: function() {    
    this.params   = {};
    this.inputs   = [];
    this.outputs  = [];
    this.rstream  = false;
    this.delayed  = false;
    this.api      = null;    
    this.file     = null;  
    this.entities = null;
    this.ioFilter = null;
  }, 

  /**
   * @api private
   */
  _prepRequest: function (responseChain, args) {
    var req  = this.req,
        file = this.file;

    // set the request type    
    if (this.api.upload) {
       // If the env is the Browser there is no need to manually set the
       // Content-Type. The browser will automatically set the 
       // "multipart/form-data; boundary=..." value. If the env is Node we need
       // to set it manually.
       if (!win) { this.req.type('multipart/form-data'); }    
    } else {
      req.type('form');
    }    

    req.on('error', function(err) { 
      err = err || {  code: 'UNKNOWN CODE', text: 'UNKNOWN ERROR' };

      this._handleError({ 
        status: err.code || 'UNKNOWN CODE',
        text: err
      });
    }.bind(this));    

    this.share(args ? args.__headers__ : null);

    // arguments returned from prev request's io().end(function() { return x; })
    if (args) { 
       this.data(args);
    } 

    if (this.inputs.length > 0) { 
      this.data({ inputs: encoder.encode(this.inputs) }); 
    }
  
    if (this.outputs.length > 0) { 
      this.data({ robjects: this.outputs.join() }); 
    }    

    if (this.headers) {
      for (var prop in this.headers) {
        if (!this.headers.hasOwnProperty(prop)) { continue; }
        if (this.headers[prop]) { req.set(prop, this.headers[prop] || ''); }
      }
    }

    if (this.api.upload) {    
      for(var p in this.params) {
        req.field(p, (this.params[p] || this.params[p] === false) ? 
           this.params[p] + '' : '');
      } 
      req.attach('file', this.rstream ? fs.createReadStream(file) : file);
    } else {
      req[this.api.method === 'GET' ? 'query' : 'send'](this.params);
    } 
  },

  /**
   * @api private
   */
  _handleError: function (raw) {
    var stat  = raw.status,
        res   = (raw.body && raw.body.deployr ? raw.body : raw),
        error = ((stat !== 200) || res.deployr && !res.deployr.response.success);

    // -- Handle errors --
    if (error) {
      res = {
        get: function(key) { 
          return utils.get(this.deployr.response, key); 
        },
        deployr: {          
          response: {
            success: false,
            call: this.api['call'],
            errorCode: res.deployr ? res.deployr.response.errorCode : stat,
            error: res.deployr ? res.deployr.response.error : res.text
          }
        }
      };

      Logger.error('error()', this.api, res, raw);
      this.logger.error('error()', this.api, res, raw);

      // -- notify global errors first (if any) for this call --      
      if (this.globalEvts) {
        raiseGlobalErrors(this.api['call'], res);        
      }

      // -- tranaction level HTTP or DeployR errors come next --    
      this.emit('error', res);
      this.emit('deployr-io:' + res.deployr.response.errorCode, res);
      this.deferred.reject(res);
    }

    return error;
  }
});

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

/**
 * Expose for a cleaner client api into DeployR
 */
module.exports = {

  /**
   * Exposes the `DeployR` object for extending.
   *
   * ```var DeployR = require('deployr').DeployR;```
   *
   * @static
   * @api public
   * @return {DeployR} The `DeployR` object.
   */   
  DeployR: DeployR,

  /**
   * Exposes the supported DeployR APIs.
   *
   * @method apis
   * @param {Boolean} flat (optional) if `true` will return an array of just the 
   * API's endpoint properties, for example: 
   * ```
   * ['/r/user/login', '/r/user/logout', '/r/user/about', ...]
   * ```
   * @static
   * @api public
   * @return {Object|Array} The HTTP request to the DeployR server.      
   */  
  apis: function(flat) {
    return flat ? Object.keys(apis) : apis;
  },

  /**
   * Represents a static method for configuring all DeployR requests. Settings 
   * made here are applied globally across every request.
   *
   * @method configure
   * @param {Object} options The object literal configuration hash. 
   * @static
   * @chainable
   * @api public
   */
  configure: function(options) {
    options = options || {};

    for (var i in options) { globalOptions.set(i, options[i]); }

    // assert global cookies are empty if global `sticky` jsessionid is off
    if (!globalOptions.sticky)  { globalOptions.set('headers', null); }    

    // turn global logging on|off (off by default)
    Logger.setLevel(globalOptions.logging ? Logger.DEBUG : Logger.OFF);

    return this;
  },

  /**
   * Factory for creating new IO requests to `DeployR`.
   *
   * Example:
   * ```   
   *    deployr.io('/r/user/about').end(callback);
   * ```
   *
   * @method io
   * @param {String} api One of the supported DeployR APIs.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.
   * @api public   
   */
  io: function(api) {  
    return DeployR.new(api);
  },

  /**
   * Convenience function to sign the user in by authenticating the credentials 
   * with the DeployR server.   
   *
   * @method auth
   * @param {String} username Specifies the username.
   * @param {String} password Specifies the password.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.   
   * @api public   
   */   
  auth: function(un, pw) {
    var data = { username: un, password: pw };
    return DeployR.new('/r/user/login').data(data).end();    
  },

  /**
   * Convenience function to sign the user in by authenticating the credentials 
   * with the DeployR server.   
   *
   * Example:
   * ```
   *    deployr.script('/testuser/root/reduce.R')
   *    deployr.script({ filename: 'reduce.R', author: 'testuser',
   *                     directory: 'root'})
   *    deployr.script('reduce.R', 'testuser', 'root')
   *    deployr.script('/testuser/root/reduce.R', project)     
   * ```   
   *
   * @method script
   * @param {Arguments} arguments Arguments to define the fully qualified script 
   * for execution.
   * @static
   * @return {DeployR} The HTTP request to the DeployR server.   
   * @api public   
   */     
  script: function() {
    var args = utils.signature(arguments),
        opts = args.opts,
        api  = args.api;  

    // convenience - if the project is a boolen `true` rather than a pid, first
    // create a new project and then prepare the project api call to execute
    if (args.create) {
      return DeployR.new('/r/project/create')
               .end(function(res) {
                  return { project: res.get('project').project };
                })
               .io(api)
               .data(opts);
    } else {
      return DeployR.new(api).data(opts);
    }
  },  

  /**
   * Run an series of chained DeployR requests in sequence and without overlap.       
   *
   * @method pipline
   * @param {Array} tasks Specifies the list of `Function` tasks.
   * @static
   * @return {Promise} A promise wrapping the resolution of either "resolve" or
   * "reject" callback.
   * @api public   
   */
  pipeline: function(chains) {      
    var deployr  = this,
        deferred = D(),
        q        = new Queue(),
        results  = [],
        errors   = [],
        NOOP     = null, // NOOP errors|results for [a] batch request chain
        orig     = {
          sticky: globalOptions.sticky,
          headers: globalOptions.headers          
        };

    // make a copy
    chains = chains.slice(0);

    // turn sticky session for these request (hacky)
    deployr.configure( { sticky: true });

    function add() {
      q.add(function() { 
        chains.shift().drain()
        .then(function(chain) {
          results.push(chain);  
          errors.push(NOOP);           
          if (q.isEmpty()) { 
            deployr.configure(orig); // reset
            deferred.resolve({ results: results, errors: errors }); 
          }  

          q.take();
        }, function(err) {          
          results.push(NOOP); 
          errors.push(err);
          // rejections are only met when they [all] fail
          if (q.isEmpty() && results.length === 0) { 
            deployr.configure(orig); // reset
            deferred.reject(errors); 
          }  
          q.take();
        });       
      }, null, true);
    }

    // convert to a seq queue for better handling
    for(var i = 0; i < chains.length; i++) { add(); }

    // start: dequeue first item and run it
    q.take();

    return deferred.promise;
  },

  /**
   * The event stream API is unique within the DeployR API as it supports push 
   * notifications from the DeployR server to client applications. Notifications 
   * correspond to discrete events that occur within the DeployR server. There 
   * are four distinct event categories:
   * 
   * - Stream Lifecycle events
   * - Execution events
   * - Job Lifecycle events
   * - Management events
   *
   * Example:
   * ```
   * deployr.es({ username: 'testuser', password: 'secret' })
   *    // -- connection choices for event types --
   *    .management()  //.session() | .all() | .project(id) | .job(id)
   *    .on('es:gridHeartbeat', function(data) {
   *        console.log('===================');
   *        console.log('es:gridHeartbeat');
   *        console.log('===================');          
   *     })
   *     .open();
   * ```
   * 
   * @method es
   * @param {Object} options The object literal configuration hash. 
   * @static
   * @return {EventStream} a new `EventStream` for binding.
   * @api public   
   */  
  es: function(credentials) {
    var auth   = (credentials && credentials.username && credentials.password),
        stream = EventStream.new(globalOptions.host, { yield: auth });

    if (auth) {
      var ruser = this.auth(credentials.username, credentials.password);      
      ruser.ensure(function() { 
        stream.share(ruser.getHeaders());
        stream.flush(); 
      });
    }

    return stream;
  },

  /**
   * Defines the factory for creating a DeployR-specific encoded R object to be 
   * sent as input parameters to an R script.
   *
   * Example:
   * ```
   *    var rinput = deployr.RInput.logical('logical_name', true);
   *    var rinput = deployr.RInput.numeric('numeric_name', 10.5);
   *    var rinput = deployr.RInput.integer('integer_name', 5);
   *    var rinput = deployr.RInput.character('character_name', 'Hello');
   *    // ect...
   * ```
   * @property RInput
   * @static
   * @api public
   */
  RInput: {
    numeric: function (name, value) {
      return RInput.new(name, value).numeric();
    },

    integer: function (name, value) {
      return RInput.new(name, value).integer();
    },

    logical: function (name, value) {
      return RInput.new(name, value).logical();
    },

    character: function (name, value) {
      return RInput.new(name, value).character();
    },

    date: function (name, value) {
      return RInput.new(name, value).date();
    },

    posixct: function (name, value) {
      return RInput.new(name, value).posixct();
    },  

    numericVector: function(name, value) {
      return RInput.new(name, value).numericVector();
    }, 

    integerVector: function (name, value) {
      return RInput.new(name, value).integerVector();
    },

    logicalVector: function (name, value) { 
      return RInput.new(name, value).logicalVector();
    },

    characterVector: function (name, value) { 
      return RInput.new(name, value).characterVector();
    },  

    dateVector: function (name, value) { 
      return RInput.new(name, value).dateVector();
    },  

    posixctVector: function (name, value) { 
      return RInput.new(name, value).posixctVector();
    },

    list: function (name, value) {
      return RInput.new(name, value).list(); 
    },

    dataframe: function (name, value) { 
      return RInput.new(name, value).dataframe();
    },
  
    factor: function (name, value, levels, labels) {
      var opts = { levels: levels, labels: labels };
      return RInput.new(name, value, opts).factor();
    },

    ordered: function (name, value, levels, labels) {
      var opts = { levels: levels, labels: labels };
      return RInput.new(name, value, opts).ordered();
    },

    numericMatrix: function (name, value) { 
      return RInput.new(name, value).numericMatrix();
    },

    integerMatrix: function (name, value) { 
      return RInput.new(name, value).integerMatrix();
    },

    logicalMatrix: function (name, value) { 
      return RInput.new(name, value).logicalMatrix();
    },

    characterMatrix: function (name, value) {
      return RInput.new(name, value).characterMatrix();
    }
  }
};
}).call(this,require('_process'))

},{"./apis.json":19,"./lib/emitter":21,"./lib/encoder":22,"./lib/es":23,"./lib/lang":24,"./lib/logger":25,"./lib/queue":27,"./lib/rinput":28,"./lib/rinputs":29,"./lib/selfish":31,"./lib/utils":32,"_process":17,"d.js":33,"fs":16,"superagent":34}],21:[function(require,module,exports){
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

var Base = require('./selfish').Base;

function debug(msg) { }

module.exports = Base.extend({

  initialize: function() {
    this.events = {};
    this.scope  = null;
  },

  /**
   * Adds a listener.  Multiple can be added per name.  Aliased as `on`.
   *
   * @param {String} name The name of the event
   * @param {Function} handler A callback
   * @return {Emitter} `this` for chaining      
   */
  on: function(name, handler) {
    if (name in this.events === false) { this.events[name] = []; }        

    this.events[name].push(handler);
    debug('Emitter.on("' + name + '")');

    return this;
  },

  /**
   * Triggers all matching listeners.
   *
   * @param {String} name The name of the event
   * @return {Emitter} `this` for chaining   
   */
  emit: function(name) {
    if (name in this.events === false) { return this; }

    for (var i = 0; i < this.events[name].length; i++) {
      debug('Fired event: "' + name + '"');
      this.events[name][i].apply(this.scope || this, Array.prototype.slice.call(arguments, 1));       
    }

    return this;
  },

  /**
   * Removes all matching listeners.
   *
   * @param {String} name The name of the event
   * @return {Emitter} `this` for chaining
   */
  offAll: function(name) {
    if (!name) {
      for (var e in this.events) {
        delete this.events[e];
      }
    } else {
      if (name in this.events === false) { return this; }
      delete this.events[name];        
    }

    return this;
  },

  /**
   * Removes a listener based on an index.
   *
   * @private
   * @param {String} name The name of the event
   * @param {Number} index The index of the event 
   */
  offAt: function(name, index) {
    var array = this.events[name],
        rest  = array.slice(index + 1);

    array.length = index;
    array.push.apply(array, rest);
    this.events[name] = array;
  },

  /**
   * Removes a listener based on the handler function.
   *
   * @param {String} name The name of the event
   * @param {Function} handler The handler function to remove
   * @return {Emitter} `this` for chaining
   */
  off: function(name, handler) {
    if (name in this.events === false) { return this; }

    // remove all events handlers by this name
    if (!handler) {
      return this.offAll(name);
    } else { // remove all events handlers == 'handler' by this name
      for (var i = 0; i < this.events[name].length; i++) {
        if (this.events[name][i] == handler) {
          this.offAt(name, i);
          return this;
        }
      }
    } 

    return this;
  }

}); 
},{"./selfish":31}],22:[function(require,module,exports){
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
var Lang    = require('./lang'),
    RTypes  = require('./rtypes'),
    R       = RTypes.r,
    DeployR = RTypes.deployr;

function formatDates(dates, type) {
    var formats = [];

    for (var i = 0; i < dates.length; i++) {
        formats.push(formatDate(dates[i], type));
    }

    return formats;
}

function formatDate(date, type) {    
   var year   = date.getFullYear(),
       month  = (date.getMonth() + 1),
       day    = date.getDate(),    
       hour   = date.getHours(),
       min    = date.getMinutes(),
       sec    = date.getSeconds(),
       zone   = date.getTimezoneOffset(),
       format = '';

    month  = (month < 10 ? '0' + month : month);
    hour   = (hour < 10 ? '0' + hour : hour);
    min    = (min < 10 ? '0' + min : min);
    sec    = (sec < 10 ? '0' + sec : sec);       
    format = year + '-' + month + '-' + day;

    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }
   
    if (type === DeployR.RPOSIX_DATE || type === DeployR.RPOSIX_DATE_VECTOR) {
        var time  = hour + ':' + min + ':' + sec,
            a = -zone,
            b = "+";

        if (a < 0) {
            a = -a;
            b = "-";
        }

        zone = b + leftZeroFill((a / 60), 2) + '' + leftZeroFill(a % 60, 2);
        format += (' ' + time + ' ' + zone);
    }

    return format;
}

function encodeEmbeddedDataframe(obj, rdf) {
    var dfValue = obj.value;
    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];
        if (dfObj.type === DeployR.RDATAFRAME) {
            rdf = encodeEmbeddedDataframe(dfObj, rdf);
        } else {
            // format dates
            if (RTypes.isDate(dfObj.type)) {
                if (Lang.isArray(dfObj.value)) {
                    dfObj.value = formatDates(dfObj.value, dfObj.type);
                } else {
                    dfObj.value = formatDate(dfObj.value, dfObj.type);
                }
            }

            dfObj.type = RTypes.deployrToR(dfObj.type);
            rdf.value.push(dfObj);            
        }

    }
    return rdf;
};

function encodeDataframe(obj) {
    var rdf = {
            type: R.DATAFRAME,
            value: [],
            name: obj.name
        },
        dfValue = obj.value;

    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];

        if (dfObj.type === DeployR.RDATAFRAME) {
            rdf = encodeEmbeddedDataframe(dfObj, rdf);
        } else {
            // format dates
            if (RTypes.isDate(dfObj.type)) {
                if (Lang.isArray(dfObj.value)) {
                    dfObj.value = formatDates(dfObj.value, dfObj.type);
                } else {
                    dfObj.value = formatDate(dfObj.value, dfObj.type);
                }
            }

            dfObj.type = RTypes.deployrToR(dfObj.type);
            rdf.value.push(dfObj);
        }

    }
    return rdf;
};

function encodeList(obj) {
    var rlist = {
            type: R.LIST,
            value: [],
            name: obj.name
        },
        dfValue = obj.value,
        r;

    for (var index = 0; index < dfValue.length; index++) {
        var dfObj = dfValue[index];

        switch (dfObj.type) {
            case DeployR.RDATAFRAME:
                r = encodeDataframe(dfObj);
                break;

            case DeployR.RLIST:
                r = encodeList(dfObj);
                break;

            case DeployR.RNUMERIC_MATRIX:
            case DeployR.RINTEGER_MATRIX:
            case DeployR.RBOOLEAN_MATRIX:
            case DeployR.RSTRING_MATRIX:
                r = {
                    name: dfObj.name,
                    type: R.MATRIX,
                    value: dfObj.value
                };
                break;

            case DeployR.RDATE:
            case DeployR.RPOSIX_DATE:
                r = {
                    name: dfObj.name,
                    type: R.DATE,
                    format: dfObj.format,
                    value: formatDate(dfObj.value, dfObj.type)
                };
                break;

            case DeployR.RFACTOR:
            case DeployR.RORDERED:
                r = {
                    name: dfObj.name,
                    type: R.FACTOR,
                    ordered: dfObj.ordered,
                    labels: dfObj.labels,
                    levels: dfObj.levels,
                    value: dfObj.value
                };
                break;

            case DeployR.RSTRING:
            case DeployR.RBOOLEAN:
            case DeployR.RNUMERIC:
            case DeployR.RINTEGER:
                r = {
                    name: dfObj.name,
                    type: R.PRIMITIVE,
                    value: dfObj.value
                };
                break;

            case DeployR.RNUMERIC_VECTOR:
            case DeployR.RINTEGER_VECTOR:
            case DeployR.RBOOLEAN_VECTOR:
            case DeployR.RSTRING_VECTOR:
                r = {
                    name: dfObj.name,
                    type: R.VECTOR,
                    value: dfObj.value
                };
                break;

            case DeployR.RDATE_VECTOR:
            case DeployR.RPOSIX_DATE_VECTOR:
                r = {
                    name: dfObj.name,
                    type: R.VECTOR,                    
                    value: formatDates(dfObj.value, dfObj.type),
                    format: dfObj.format
                };
                break;

            default:
                throw new Error('No RDataType found for "' + dfObj.type + '"');
                break;
        }

        rlist.value.push(r);
    }
    return rlist;
};

module.exports = {

    /**
     * Flattens a given `RInput` type into a JSON string representing the     
     * expected DeployR input format.
     *
     * @method encode
     * @public
     * @param {Array} rdata An Array of `RInput` Objects to be flattened.
     * @return {String} The flattend `RInput` JSON string representing the 
     *                  DeployR input format.
     */
    encode: function(rdata) {
        var r = {};

        for (var index = 0; index < rdata.length; index++) {
            var obj = rdata[index];

            switch (obj.type) { // -- DeployR Type -- //

                case DeployR.RDATAFRAME:
                    r[obj.name] = encodeDataframe(obj);
                    break;

                case DeployR.RLIST:
                    r[obj.name] = encodeList(obj);
                    break;

                case DeployR.RNUMERIC_MATRIX:
                case DeployR.RINTEGER_MATRIX:
                case DeployR.RBOOLEAN_MATRIX:
                case DeployR.RSTRING_MATRIX:
                    r[obj.name] = {
                        type: R.MATRIX,
                        value: obj.value
                    };
                    break;

                case DeployR.RDATE:
                case DeployR.RPOSIX_DATE:
                    r[obj.name] = {
                        type: R.DATE,
                        format: obj.format,                        
                        value: formatDate(obj.value, obj.type)
                    };
                    break;

                case DeployR.RFACTOR:
                case DeployR.RORDERED:                
                    r[obj.name] = {
                        type: R.FACTOR,
                        ordered: obj.ordered,
                        labels: obj.labels,
                        levels: obj.levels,
                        value: obj.value
                    };
                    break;

                case DeployR.RSTRING:
                case DeployR.RBOOLEAN:
                case DeployR.RNUMERIC:
                case DeployR.RINTEGER:
                    r[obj.name] = {
                        type: R.PRIMITIVE,
                        value: obj.value
                    };
                    break;

                case DeployR.RNUMERIC_VECTOR:
                case DeployR.RINTEGER_VECTOR:
                case DeployR.RBOOLEAN_VECTOR:
                case DeployR.RSTRING_VECTOR:
                    r[obj.name] = {
                        type: R.VECTOR,
                        value: obj.value
                    };
                    break;

                case DeployR.RDATE_VECTOR:
                case DeployR.RPOSIX_DATE_VECTOR:
                    r[obj.name] = {
                        type: R.VECTOR,            
                        value: formatDates(obj.value, obj.type),
                        format: obj.format
                    };
                    break;

                default:
                    throw new Error('No RDataType found for "' + obj.type + '"');
                    break;
            }
        }

        return (JSON.stringify(r));
    }
};
},{"./lang":24,"./rtypes":30}],23:[function(require,module,exports){
 var win       = (typeof window !== 'undefined'),
     optional  = require('./optional'),     
     WebSocket = win ? window.WebSocket : optional('ws'),
     Queue     = require('./queue'),     
     Emitter   = require('./emitter'),
     Base      = require('./selfish').Base,
     merge     = require('./utils').merge;

module.exports = Base.extend(Emitter, {   

  /**
   * The `EventStream` class acts as a client listener for the DeployR event 
   * stream API `/r/event/stream` notifications. Notifications correspond to 
   * discrete  events that occur within the DeployR server. There are four 
   * distinct event categories:
   *
   * - Stream Lifecycle events
   * - Execution events
   * - Job Lifecycle events
   * - Management events   
   * 
   * @class 
   * @constructor
   * @param {String} endpoint The DeployR server endpoint.
   * @param {Object} options Object literal hash of options.
   * @api private
   */
  initialize: function initialize(endpoint, options) {
    Emitter.initialize.call(this, {});
  
    this.api     = (endpoint || '') + '/deployr/r/event/stream',
    this.options = options || {};
    this.ws      = null;
    this.q       = new Queue();
    this.filter  = {};  
    this.cookies = this.options.cookies;
  },  

  /**
   * This call connects to one of the following event streams: authenticated, 
   * anonymous, or management.

   * @method open
   * @param {Object} options Object literal hash of supported options:
   *  - yield: false (default) - 
   *  - cookies: null (default)
   *  - project: null (default)
   *  - job: null (default)
   *  - httpEventOnly: false (default)
   *  - revoEventOnly: false (default)
   *  - managementEventOnly: false (default)
   *
   * ```
   *  {
   *     //
   *     // Wait for authentication to complete before establishing connection.
   *     // 
   *     yield: false, 
   *
   *     //
   *     // Shared cookies from other authenticated DeployR requests
   *     //
   *     cookies: [ 'JSESSIONID=086669ABC226EB78; Path=/deployr/; HttpOnly' ]
   *
   *     //
   *     // Indicate the DeployR event stream to push events only for this 
   *     // project.
   *     //
   *     project: 'PROJECT-ID',
   *
   *     //
   *     // Indicate the DeployR event stream to push events only for this job.
   *     //
   *     job: 'JOB-ID',      
   *   
   *     //
   *     // httpEventOnly=true parameter is specified then an authenticated 
   *     // event stream will see only execution events associated with the 
   *     // current HTTP session.
   *     //
   *     httpEventOnly: true,   
   *                                        
   *     //
   *     // revoEventOnly=true, then execution executionConsoleEvent 
   *     // events are suppressed on the stream
   *     //
   *     revoEventOnly: true,       
   *                   
   *     // 
   *     // managementEventOnly=true, then event stream connection type is 
   *     // management    
   *     //                      
   *     managementEventOnly: true    
   * }
   * ```   
   * @return {EventStream} for chaining.
   * @api public
   */
  open: function(options) {    
    var self = this, url;

    options = this.options = merge(options || {}, this.options);    

    this.cookies = !this.cookies ? options.cookies : this.cookies;

    //
    // Append event filters
    //  
    if (options.project) { this.project(options.project); }
    if (options.job) { this.job(options.job); }
    if (options.managementEventOnly) { this.managementEventOnly(); }
    if (options.revoEventOnly) { this.revoEventOnly(); } 
    if (options.httpEventOnly) { this.httpEventOnly(); }

    url = this.getRequestURL();

    this.q.yield(true);
    this.q.add(function() {
      var headers = this.cookies ? { 'Cookie': this.cookies } : {};
      this.emit('es:connecting', { url: url, headers: headers });

      // For Browsers the thrid argument `opts` isignored
      var ws = (win ? new WebSocket(url) : 
        new WebSocket(url, 'http', { headers: headers }));

      ws.onopen = function (message) {
        self.emit('es:open', message);
      };

      var _message = '';
      ws.onmessage = function (message) {
        try {          
          if (message.data.split('!|!')[1]) {
            _message = _message + message.data.split('!|!')[1];
            message = JSON.parse(_message);
            _message = '';
            var type = message.deployr.response.event.type;
            self.emit('es:' + type.replace('Event', ''), message);
          }
        } catch (e) {} 
      };

      ws.onerror = function (err) { self.emit('es:error', err); };
      ws.onclose = function (message) { self.emit('es:close', message); };

      this.ws = ws;
    }, this);

    //
    // open socket immediately
    //
    if (!options.yield) { this.flush(); }

    return this;    
  },

  /**
   * Terminates the WebSocket closing any connection to DeployR's event stream.
   * @method close
   * @api public   
   */
  close: function() {
    if (this.ws) { this.ws.close(); }

    return this;
  },

  /**
   * Reconstructs the event stream URL the client uses to make the request.
   *
   * Example:
   * ```
   * ws://dhost:7400/deployr/r/event/stream?revoEventOnly=true&project=PID
   * ws://dhost:7400/deployr/r/event/stream
   * ```
   * @method getRequestURL
   * @api public     
   */
  getRequestURL: function() {
    var url    = this.api.replace(/^http/,'ws'),
        filter = this.filter;

    url += (filter.type ? '?' + filter.type : '');  

    if (filter.project) { url += '&' + filter.project; }
    if (filter.job) { url += '&' + filter.job; }

    return  url;
  },

  /**
   * Returns the HTTP cookie previously sent by the server with Set-Cookie.
   * This value can be passed to `.share(ruser.getCookies())` of a diffrent
   * `.io()` agent to preserve session state across requests.
   *
   * @method getCookies
   * @return {Array} The HTTP cookie previously sent by the server with 
   * Set-Cookie.
   * @api public   
   */  
  getCookies: function () {
    return this.cookies;
  },   

  /**
   * Destroy lifecycle method. Fires the `destroy` event, prior to invoking 
   * destructors for the class hierarchy. 
   *
   * @method destroy
   * @api public   
   */
  destroy: function () {    
    this.emit('destroy');
    this.close();
    this.offAll();

    this.ws      = null;
    this.host    = null;
    this.options = null;
    this.ws      = null;
    this.q       = null;
    this.filter  = null;     
  },

  /**
   * Drains the yield queue in situations where `open()` is waiting for 
   * authentication to complete before establishing a connection.
   */
  flush: function() {
    this.q.yield(false);
    this.q.flush();
  },

  /**
   * Shares the cookies from a differen `.io()` agent to preserve session state
   * across `this` request and all requests chained to it.
   *
   * @method share
   * @return {EventStream} for chaining.
   * @api public   
   */ 
  share: function(cookies) {
    this.cookies = cookies;

    return this;
  },

  /**
   * Indicate the DeployR event stream to push events only for this project.
   *
   * @method project
   * @param {String} project The project identifier.
   * @return {EventStream} for chaining.   
   * @api public   
   */
  project: function(project) {
    this.filter.project = 'project=' + project; 
    this.filter.job = null;

    return this;
  },

  /**
   * Indicate the DeployR event stream to push events only for this job.
   *
   * @method project
   * @param {String} job The job identifier.
   * @return {EventStream} for chaining.   
   * @api public   
   */
  job: function(job) {
    this.filter.job = 'job=' +  job; 
    this.filter.project = null;    

    return this;
  },

  /**
   * If specified then event stream connection type is management.
   *
   * @method managementEventOnly
   * @return {EventStream} for chaining.   
   * @api public   
   */  
  managementEventOnly: function() {
    this.filter = {
      type: 'managementEventOnly=true',
      project: null,
      job: null
    };

    return this;
  },

  /**
   * If specified then an authenticated event stream will see only execution 
   * events associated with the current HTTP session.
   *
   * @method httpEventOnly
   * @return {EventStream} for chaining.   
   * @api public   
   */  
  httpEventOnly: function() {
    this.filter.type = 'httpEventOnly=true';

    return this;
  },  

  /**
   * If specified then execution `executionConsoleEvent` events are suppressed
   * on the event stream.
   *
   * @method revoEventOnly
   * @return {EventStream} for chaining.   
   * @api public   
   */ 
  revoEventOnly: function() {
    this.filter.type = 'revoEventOnly=true';

    return this;
  },

  /**
   * @deprecated
   */
  all: function() {
    this.filter = { type: null, project: null, job: null };

    return this;
  },

  /**
   * @deprecated
   */
  session: function() {
    return this.httpEventOnly();
  }, 

  /**
   * @deprecated
   */
  management: function() {
    return this.managementEventOnly();
  }
});
},{"./emitter":21,"./optional":26,"./queue":27,"./selfish":31,"./utils":32}],24:[function(require,module,exports){
/*!
 * Copyright (C) 2010-2016, Microsoft Corporation
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 *
 * This component is a DeployR port of yui-lang.js by Yahoo!
 *
 * Software License Agreement (BSD License)
 * Copyright (c) 2013, Yahoo! Inc. All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, with or 
 * without modification, are permitted provided that the following conditions 
 * are met:
 *
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer. Redistributions in binary 
 * form must reproduce the above copyright notice, this list of conditions and 
 * the following disclaimer in the documentation and/or other materials provided 
 * with the distribution.
 *
 * Neither the name of Yahoo! Inc. nor the names of YUI's contributors may be 
 * used to endorse or promote products derived from this software without 
 * specific prior written permission of Yahoo! Inc.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE  
 * POS SIBILITY OF SUCH DAMAGE.
 */

/**
 * Provides core language utilites and extensions used throughout DeployR.
 *
 * @class Lang
 * @static
 */
var L = {}, 
	TOSTRING = Object.prototype.toString, 
	TYPES = {	
		'undefined' : 'undefined',
		'number' : 'number',
		'boolean' : 'boolean',
		'string' : 'string',
		'[object Function]' : 'function',
		'[object RegExp]' : 'regexp',
		'[object Array]' : 'array',
		'[object Date]' : 'date',
		'[object Error]' : 'error'
	}, unsafeNatives = false;

/**
 * Determines whether or not the provided item is null.
 * @method isNull
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is null.
 */
L.isNull = function(o) {
	return o === null;
};

/**
 * Determines whether or not the provided item is undefined.
 * @method isUndefined
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is undefined.
 */
L.isUndefined = function(o) {
	return typeof o === 'undefined';
};

/**
 * Determines whether or not the provided item is of type object
 * or function. Note that arrays are also objects, so
 * <code>Y.Lang.isObject([]) === true</code>.
 * @method isObject
 * @static
 * @param o The object to test.
 * @param failfn {boolean} fail if the input is a function.
 * @return {boolean} true if o is an object.
 * @see isPlainObject
 */
L.isObject = function(o, failfn) {
	var t = typeof o;
	return (o && (t === 'object' || (!failfn && (t === 'function' || L.isFunction(o))))) || false;
};
/**
 * Determines whether or not the provided item is an array.
 *
 * Returns `false` for array-like collections such as the function `arguments`
 * collection or `HTMLElement` collections.
 *
 * @method isArray
 * @param o The object to test.
 * @return {boolean} true if o is an array.
 * @static
 */
L.isArray = (!unsafeNatives && Array.isArray) ||
function(o) {
	return L.type(o) === 'array';
};

L.isFunction = function isFunctionA(o) {
	return (typeof(o) === "function");
};

/**
 * Determines whether or not the provided item is a boolean.
 * @method isBoolean
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a boolean.
 */
L.isBoolean = function(o) {
	return typeof o === 'boolean';
};

/**
 * Determines whether or not the supplied item is a date instance.
 * @method isDate
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a date.
 */
L.isDate = function(o) {
	return L.type(o) === 'date' && o.toString() !== 'Invalid Date' && !isNaN(o);
};

/**
 * Determines whether or not the provided item is a legal number.
 * @method isNumber
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a number.
 */
L.isNumber = function(o) {
	return typeof o === 'number' && isFinite(o);
};

/**
 * Determines whether or not the provided item is a string.
 * @method isString
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a string.
 */
L.isString = function(o) {
	return typeof o === 'string';
};

/**
 * Returns a string representing the type of the item passed in.
 *
 * @method type
 * @param o the item to test.
 * @return {string} the detected type.
 * @static
 */
L.type = function(o) {
	return TYPES[ typeof o] || TYPES[TOSTRING.call(o)] || ( o ? 'object' : 'null');
};

module.exports = L;
},{}],25:[function(require,module,exports){
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
 
var Logger = {},
    loggerMap = {},
    globalLogger;

/**
 * Universal stdout|stderr printer
 */
function log(messages, context) {	
	if (!console) { return; }

	function sep(level) {
		var sep = '=========================================================' +
		          '=========================================================\n',
		    offset = 0;

		if (level === Logger.DEBUG || level === Logger.ERROR) offset = 8;
		else if (level === Logger.INFO || level === Logger.WARN) offset = 8;
		else offset = 7;

		return { start: sep.substring(offset), end: sep };
	}

	var hdlr,
	    args = Array.prototype.slice.call(messages, 0),
	    name = context.name,
	    error = context.level === Logger.ERROR,
  	    delim = sep(context.level);

  	if (context.level === Logger.WARN && console.warn) {
  		hdlr = 'warn';
  	} else if (context.level === Logger.ERROR && console.error) {
  		hdlr = 'error';
  	} else if (context.level === Logger.INFO && console.info) {
  		hdlr = 'info';
  	} else {
  		hdlr = 'log';
  	}

  	// -- custom format logging statement for deployr request/response/error --
  	args.unshift('[' + (error ? Logger.ERROR.name : name) + '] ' + delim.start);
  	args.push(delim.end);

  	console[hdlr](args[0], [args[1] + ' ---> ' + args[2]['call']]);

    for (var i = 2; i < args.length; i++) { console.log(args[i]); }  
}

/**
 * Logging category by id.
 */
function Category(id, level, fn) {
	this.id = id;
	this.context = level || Logger.DEBUG;
}

Category.prototype = {	
	log: function(level, msgArgs) {
		if (level.value >= this.context.value) {			
			log(msgArgs, { 
				level: level,
				name: this.context.name,
				value: this.context.value
			});		
		}
	},

	debug: function () {		
		this.log(Logger.DEBUG, arguments);
	},

	error: function () {
		this.log(Logger.ERROR, arguments);
	},

	info: function () {		
		this.log(Logger.INFO, arguments);
	},

	warn: function () {
		this.log(Logger.WARN, arguments);
	},

	setLevel: function(level) {
		if (level && 'value' in level) {
			this.context = level;
		}
	}
};

Logger.DEBUG = { value: 1, name: 'DEBUG' };
Logger.INFO  = { value: 2, name: 'INFO' };
Logger.WARN  = { value: 4, name: 'WARN' };
Logger.ERROR = { value: 8, name: 'ERROR' };
Logger.OFF   = { value: 99, name: 'OFF' };   		

Logger.setLevel = function(newLevel) {
	globalLogger.setLevel(newLevel);
};

Logger.debug = function () {
	globalLogger.debug.apply(globalLogger, arguments);
};

Logger.info = function () {
	globalLogger.info.apply(globalLogger, arguments);
};

Logger.warn = function () {
	globalLogger.warn.apply(globalLogger, arguments);
};

Logger.error = function () {
	globalLogger.error.apply(globalLogger, arguments);
};

Logger.get = function (id, level, fn) {	
	return (loggerMap[id] || (function() {
		loggerMap[id] = new Category(id, level, fn);
		return loggerMap[id];
	})());
};

// --- setup the global logger ---
globalLogger = Logger.get('global');

module.exports 	= Logger;

},{}],26:[function(require,module,exports){
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
 
module.exports = function(module) {
  try {
    return require(module);
  } catch (e) {}
};
},{}],27:[function(require,module,exports){
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

function Queue() {
  this.emptyCallback = null;
  this.callbacks = [];
  this.yielded = false;
  this.response = null;
  this.responseChain = [];  
}

Queue.prototype = {

  add: function(fn, ctx, defer) {
    // currently not waiting and there is no defer delay just make call
    if (!this.yielded && !defer) {      
      fn.apply(ctx || this, [this.response]);
    } else { // add to queue
      this.callbacks.push({ fn: fn, ctx: ctx });
    }
  },

  size: function() {
    return this.callbacks.length;
  },

  isEmpty: function() {
    return this.callbacks.length === 0;
  },

  empty: function(fn, ctx) {
    this.emptyCallback = { fn: fn, ctx: ctx };
  },

  yield: function(yield) {
    this.yielded = yield;
  },

  take: function(response, error, args) { 
    var cb;

    if (response) {
      this.response = response;
      this.responseChain.push(response);
    }


    if (!this.yielded && this.callbacks[0]) {
      cb = this.callbacks.shift();
      cb.fn.apply(cb.ctx || this, [this.responseChain, error, args]);

      // notify that the queue is now empty   
      if (this.callbacks[0] && this.emptyCallback) {
        this.emptyCallback.fn.call(this.emptyCallback.ctx || this);         
      }
    }
  },
  
  flush: function(response, error, args) {        
    if (response) {
      this.response = response;
      this.responseChain.push(response);
    }

    // pop and call next inline
    while (this.callbacks[0]) {
      if (this.yielded) { break; }
      var cb = this.callbacks.shift();
      cb.fn.apply(cb.ctx || this, [this.responseChain, error, args]);

      // notify that the queue is now empty
      if (this.callbacks[0] && this.emptyCallback) {
        this.emptyCallback.fn.call(this.emptyCallback.ctx || this);         
      }
    }
  }
};

module.exports = Queue;
},{}],28:[function(require,module,exports){
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

var Base   = require('./selfish').Base,
    RTypes = require('./rtypes');

module.exports = Base.extend(RTypes, {
	initialize: function initialize(name, value, options) {  	
		this.name  = name;
		this.value = value;
		this.options = options || {};
	},

	numeric: function () {
		// support `String` numbers (e.g. "1.2")
		this.value = parseFloat(this.value);

		return this.assert({
			type: this.deployr.RNUMERIC,
			name: this.name, 
			value: this.value,
			toString: this.toString
		});
	},	

	integer: function () {
		// support `String` integer (e.g. "15")
		this.value = parseInt(this.value, 10);

		return this.assert({ 
			type: this.deployr.RINTEGER,
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	logical: function () {
		return this.assert({ 
			type: this.deployr.RBOOLEAN, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	character: function () {
		return this.assert({ 
			type: this.deployr.RSTRING, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	date: function () {
		return this.assert({ 
			type: this.deployr.RDATE,
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd',
			toString: this.toString
		}); 
	},

	posixct: function () {
		return this.assert({ 
			type: this.deployr.RPOSIX_DATE, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd HH:mm:ss Z',
			toString: this.toString
		}); 
	},	
	
	numericVector: function () { 
		return this.assert({ 
			type: this.deployr.RNUMERIC_VECTOR,
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	integerVector: function () {
		return this.assert({ 
			type: this.deployr.RINTEGER_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	logicalVector: function () { 
		return this.assert({ 
			type: this.deployr.RBOOLEAN_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	characterVector: function () { 
		return this.assert({ 
			type: this.deployr.RSTRING_VECTOR, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},  
	
	dateVector: function () { 
		return this.assert({ 
			type: this.deployr.RDATE_VECTOR, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd',
			toString: this.toString
		}); 
	},	
	
	posixctVector: function () { 
		return this.assert({ 
			type: this.deployr.RPOSIX_DATE_VECTOR, 
			name: this.name, 
			value: this.value,
			format: 'yyyy-MM-dd HH:mm:ss Z',
			toString: this.toString
		}); 
	},
	
	list: function () {
		return this.assert({ 
			type: this.deployr.RLIST, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},
	
	dataframe: function () { 
		return this.assert({ 
			type: this.deployr.RDATAFRAME, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	factor: function () {
		var opts = this.options;

		return this.assert( { 
			type: this.deployr.RFACTOR, 
			name: this.name, 
			value: this.value,
			ordered: false,
			levels: opts.levels,
			labels: opts.labels,
			toString: this.toString
		}); 
	},

	ordered: function () {
		var opts = this.options;

		return this.assert( { 
			type: this.deployr.RORDERED, 
			name: this.name, 
			value: this.value,
			ordered: true,
			levels: opts.levels,
			labels: opts.labels,
			toString: this.toString
		}); 
	},		

	numericMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RNUMERIC_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	integerMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RINTEGER_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	logicalMatrix: function () { 
		return this.assert({ 
			type: this.deployr.RBOOLEAN_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	characterMatrix: function () {
		return this.assert({ 
			type: this.deployr.RSTRING_MATRIX, 
			name: this.name, 
			value: this.value,
			toString: this.toString
		}); 
	},

	toString: function() {
		var opts   = this.options || {},
		    levels = opts.levels ? '[ levels = ' + opts.levels + ']' : '',
		    labels = opts.labels ? '[ labels = ' + opts.labels + ']' : '';

		return '[ name = '  + this.name + ' ] ' +
		       '[ value = ' + this.value + ' ] ' +
		       '[ type = '  + this.type + ' ] ' +
		       levels + labels;		       
	}
});
},{"./rtypes":30,"./selfish":31}],29:[function(require,module,exports){
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

var Base   = require('./selfish').Base,
    RTypes = require('./rtypes'),
    Lang   = require('./lang'),
    RInput = require('./rinput'); 

function create(type, name, value, options) {
	var rinput;

	if (Lang.isObject(name)) {
		rinput = name;
		if (!rinput.type !== type) {
			throw new Error('IllegalArgumentError:' + 
				'Expecting "' + type + '" but found "' + rinput.type + '"');
		}
	} else {
	    rinput = RInput.new(name, value, options)[type]();
	} 

	return rinput;
}

module.exports = Base.extend(RTypes, {	
	numeric: function (name, value) {
		this.inputs.push(create(this.deployr.RNUMERIC, name, value));
		return this;
	},
	
	integer: function (name, value) {
		this.inputs.push(create(this.deployr.RINTEGER, name, value));
		return this; 
	},
	
	logical: function (name, value) {
		this.inputs.push(create(this.deployr.RBOOLEAN, name, value));
		return this; 
	},
	
	character: function (name, value) {
		this.inputs.push(create(this.deployr.RSTRING, name, value));
		return this; 
	},
	
	date: function (name, value) {
		this.inputs.push(create(this.deployr.RDATE, name, value));
		return this; 
	},

	posixct: function (name, value) {
		this.inputs.push(create(this.deployr.RPOSIX_DATE, name, value));
		return this; 
	},	
	
	numericVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RNUMERIC_VECTOR, name, value));
		return this; 
	},
	
	integerVector: function (name, value) {
		this.inputs.push(create(this.deployr.RINTEGER_VECTOR, name, value));
		return this; 
	},
	
	logicalVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RBOOLEAN_VECTOR, name, value));
		return this; 
	},
	
	characterVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RSTRING_VECTOR, name, value));
		return this; 
	},  
	
	dateVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RDATE_VECTOR, name, value));
		return this; 
	},	
	
	posixctVector: function (name, value) { 
		this.inputs.push(create(this.deployr.RPOSIX_DATE_VECTOR, name, value));
		return this; 
	},
	
	list: function (name, value) {
		this.inputs.push(create(this.deployr.RLIST, name, value));
		return this; 
	},
	
	dataframe: function (name, value) { 
		this.inputs.push(create(this.deployr.RDATAFRAME, name, value));
		return this; 
	},	

	factor: function (name, value, levels, labels) {
		var opts = { levels: levels, labels: labels };
		this.inputs.push(create(this.deployr.RFACTOR, name, value, opts));
		return this;
	},

	ordered: function (name, value, levels, labels) {
		var opts = { levels: levels, labels: labels };
		this.inputs.push(create(this.deployr.RORDERED, name, value, opts));
		return this;
	},		

	numericMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RNUMERIC_MATRIX, name, value));
		return this; 
	},

	integerMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RINTEGER_MATRIX, name, value));
		return this; 
	},

	logicalMatrix: function (name, value) { 
		this.inputs.push(create(this.deployr.RBOOLEAN_MATRIX, name, value));
		return this; 
	},

	characterMatrix: function (name, value) {
		this.inputs.push(create(this.deployr.RSTRING_MATRIX, name, value));
		return this;
	}
});
},{"./lang":24,"./rinput":28,"./rtypes":30,"./selfish":31}],30:[function(require,module,exports){
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

var Base = require('./selfish').Base,
    Lang = require('./lang'),
    map  = {}; // deployr->To->R catalog

module.exports = Base.extend({
	r: {
		PRIMITIVE: 'primitive',
		DATAFRAME: 'dataframe',
		LIST: 'list',
		MATRIX: 'matrix',
		DATE: 'date',
		FACTOR: 'factor',
		VECTOR: 'vector'
	},

	deployr: {
		RBOOLEAN: 'logical',
		RNUMERIC: 'numeric',
		RINTEGER: 'integer',
		RSTRING: 'character',
		RDATE: 'date',
		RPOSIX_DATE: 'posixct',
		RBOOLEAN_VECTOR: 'logicalVector',
		RNUMERIC_VECTOR:'numericVector',
		RINTEGER_VECTOR: 'integerVector',	
		RSTRING_VECTOR: 'characterVector',
		RDATE_VECTOR: 'dateVector',
		RPOSIX_DATE_VECTOR: 'posixctVector',
		RLIST: 'list',
		RDATAFRAME: 'dataframe',
		RFACTOR: 'factor',
		RORDERED: 'ordered',		
		RBOOLEAN_MATRIX: 'logicalMatrix',
		RNUMERIC_MATRIX: 'numericMatrix',
		RINTEGER_MATRIX: 'integerMatrix',		
		RSTRING_MATRIX: 'characterMatrix'
	},

	isDate: function(type) {
		return (type === this.deployr.RDATE || 
		        type === this.deployr.RPOSIX_DATE || 
		        type === this.deployr.RDATE_VECTOR ||
		        type === this.deployr.RPOSIX_DATE_VECTOR ||
		        type === this.r.DATE);
	},

	deployrToR: function(type) {	
		var deployr = this.deployr,
		    r       = this.r;

		if (!map[type]) { // build catalog only once	
			map[deployr.RBOOLEAN]           = r.PRIMITIVE;
			map[deployr.RNUMERIC]           = r.PRIMITIVE;
			map[deployr.RINTEGER]           = r.PRIMITIVE;
			map[deployr.RSTRING]            = r.PRIMITIVE;
			map[deployr.RDATE]              = r.DATE;
			map[deployr.RPOSIX_DATE]        = r.DATE;
			map[deployr.RBOOLEAN_VECTOR]    = r.VECTOR;
			map[deployr.RNUMERIC_VECTOR]    = r.VECTOR;
			map[deployr.RINTEGER_VECTOR]    = r.VECTOR;
			map[deployr.RSTRING_VECTOR]     = r.VECTOR;
			map[deployr.RDATE_VECTOR]       = r.VECTOR;
			map[deployr.RPOSIX_DATE_VECTOR] = r.VECTOR;
			map[deployr.RLIST]              = r.LIST;
			map[deployr.RDATAFRAME]         = r.DATAFRAME;
			map[deployr.RFACTOR]            = r.FACTOR;
			map[deployr.RORDERED]           = r.FACTOR;
			map[deployr.RBOOLEAN_MATRIX]    = r.MATRIX;
			map[deployr.RNUMERIC_MATRIX]    = r.MATRIX;
			map[deployr.RINTEGER_MATRIX]    = r.MATRIX;
			map[deployr.RSTRING_MATRIX]     = r.MATRIX;
		}

		return map[type];		
	},

	/**
	 * Assert that the `rinput` value is the correct JavaScript Data Type.
	 */
	assert: function (rinput) {
		var deployr = this.deployr,
    		NOOP    = null,
		    values  = rinput.value,
		    fn;

		values = !Lang.isArray(values) ? [values] : values;

		for (var i = 0; i < values.length; i++) {
			var value = values[i];

			switch (rinput.type) {
				case deployr.RNUMERIC :
				case deployr.RNUMERIC_VECTOR :
			    case deployr.RINTEGER :
			    case deployr.RINTEGER_VECTOR :
			    fn = Lang.isNumber;
			    break;

			    case deployr.RBOOLEAN :
			    case deployr.RBOOLEAN_VECTOR :
			    fn = Lang.isBoolean;
			    break;
			    
			    case deployr.RSTRING :
			    case deployr.RSTRING_VECTOR :	
			    fn = Lang.isString;
			    break;

			    case deployr.RDATE :
			    case deployr.RPOSIX_DATE :
			    case deployr.RDATE_VECTOR :
			    case deployr.RPOSIX_DATE_VECTOR :
			    fn = Lang.isDate;
			    break;

			    case deployr.RFACTOR :
			    case deployr.RORDERED :			    
			    case deployr.RDATAFRAME :
			    case deployr.RINTEGER_MATRIX :
			    case deployr.RBOOLEAN_MATRIX :
			    case deployr.RSTRING_MATRIX :	    
			    fn = NOOP;
			    break
			}

			if (fn && !fn(value)) {
				throw new Error('RInputFormatError: ' + '"' + value + 
					'" is not a valid "' + rinput.type + '" type for input ' +
					'"' + rinput.name + '"');					
			}
		}

		return rinput;
	}
});
},{"./lang":24,"./selfish":31}],31:[function(require,module,exports){
/*!
 * https://github.com/Gozala/selfish
 */

/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint undef: true es5: true node: true devel: true evil: true
         forin: true latedef: false supernew: true */
/*global define: true */

!(typeof define !== "function" ? function($){ $(null, typeof exports !== 'undefined' ? exports : window); } : define)(function(require, exports) {

"use strict";

exports.Base = Object.freeze(Object.create(Object.prototype, {
  /**
   * Creates an object that inherits from `this` object (Analog of
   * `new Object()`).
   * @examples
   *
   *    var Dog = Base.extend({
   *      bark: function bark() {
   *        return 'Ruff! Ruff!'
   *      }
   *    });
   *    var dog = Dog.new();
   */
  'new': { value: function create() {
    var object = Object.create(this);
    object.initialize.apply(object, arguments);
    return object;
  }},
  /**
   * When new instance of the this prototype is created it's `initialize`
   * method is called with all the arguments passed to the `new`. You can
   * override `initialize` to set up an instance.
   */
  initialize: { value: function initialize() {
  }},
  /**
   * Merges all the properties of the passed objects into `this` instance (This
   * method can be used on instances only as prototype objects are frozen).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   *
   * @examples
   *
   *    var Pet = Dog.extend({
   *      initialize: function initialize(options) {
   *        // this.name = options.name -> would have thrown (frozen prototype)
   *        this.merge(options) // will override all properties.
   *      },
   *      call: function(name) {
   *        return this.name === name ? this.bark() : ''
   *      },
   *      name: null
   *    })
   *    var pet = Pet.new({ name: 'Benzy', breed: 'Labrador' })
   *    pet.call('Benzy')   // 'Ruff! Ruff!'
   */
  merge: { value: function merge() {
    var descriptor = {};
    Array.prototype.forEach.call(arguments, function (properties) {
      Object.getOwnPropertyNames(properties).forEach(function(name) {
        descriptor[name] = Object.getOwnPropertyDescriptor(properties, name);
      });
    });
    Object.defineProperties(this, descriptor);
    return this;
  }},
  /**
   * Takes any number of argument objects and returns frozen, composite object
   * that inherits from `this` object and combines all of the own properties of
   * the argument objects. (Objects returned by this function are frozen as
   * they are intended to be used as types).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   * @examples
   *
   *    // ## Object composition ##
   *
   *    var HEX = Base.extend({
   *      hex: function hex() {
   *        return '#' + this.color;
   *      }
   *    })
   *
   *    var RGB = Base.extend({
   *      red: function red() {
   *        return parseInt(this.color.substr(0, 2), 16);
   *      },
   *      green: function green() {
   *        return parseInt(this.color.substr(2, 2), 16);
   *      },
   *      blue: function blue() {
   *        return parseInt(this.color.substr(4, 2), 16);
   *      }
   *    })
   *
   *    var CMYK = Base.extend(RGB, {
   *      black: function black() {
   *        var color = Math.max(Math.max(this.red(), this.green()), this.blue());
   *        return (1 - color / 255).toFixed(4);
   *      },
   *      cyan: function cyan() {
   *        var K = this.black();
   *        return (((1 - this.red() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      magenta: function magenta() {
   *        var K = this.black();
   *        return (((1 - this.green() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      yellow: function yellow() {
   *        var K = this.black();
   *        return (((1 - this.blue() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      }
   *    })
   *
   *    var Color = Base.extend(HEX, RGB, CMYK, {
   *      initialize: function Color(color) {
   *        this.color = color;
   *      }
   *    });
   *
   *    // ## Prototypal inheritance ##
   *
   *    var Pixel = Color.extend({
   *      initialize: function Pixel(x, y, hex) {
   *        Color.initialize.call(this, hex);
   *        this.x = x;
   *        this.y = y;
   *      },
   *      toString: function toString() {
   *        return this.x + ':' + this.y + '@' + this.hex();
   *      }
   *    });
   *
   *    var pixel = Pixel.new(11, 23, 'CC3399')
   *    pixel.toString(); // 11:23@#CC3399
   *
   *    pixel.red();      // 204
   *    pixel.green();    // 51
   *    pixel.blue();     // 153
   *
   *    pixel.cyan();     // 0.0000
   *    pixel.magenta();  // 0.7500
   *    pixel.yellow();   // 0.2500
   *
   */
   extend: { value: function extend() {
    return Object.freeze(this.merge.apply(Object.create(this), arguments));
  }}
}));

});
},{}],32:[function(require,module,exports){
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

var Lang = require('./lang');

var get = exports.get = function(s, key) {
    function traverse(obj, fn, parent) {
        for (var i in obj) {
            var result = fn.apply(this, [i, obj[i], parent]);
            if (result) {
                return result;
            } else {
                if (obj[i] instanceof Object && !(obj[i] instanceof Array)) {                
                   traverse(obj[i], fn, i);
               }
            }
        }
    }

    function getProperty(obj, property) {
        var acc = {};
        traverse(obj, function(key, value, parent) {
            if (key === property) {  
                acc = value;
                return acc;
            } else {
                return null;
            }
        });
        return acc;
    }

    function empty(obj) {
        for (var prop in obj) { if (obj.hasOwnProperty(prop)) return obj; }
        return !Lang.isObject(obj) ? obj : null;
    }

    return empty(getProperty(s, key));
};

var inArray = exports.inArray = function(haystack, needle, key) {
    var i, max = haystack.length;

    for (i = 0; i < max; i++) {
        if (key) {
            if (haystack[i][key] === needle) { return haystack[i]; }
        } else {
            if (haystack[i] === needle) { return haystack[i]; }
        }   
    }
    return null;
};

exports.merge = function(to, from) {        
    if (!to || typeof(to) !== 'object') { to = {}; }
    if (!from || typeof(from) !== 'object') { from = {}; }

    for (var k in from) { to[k] = from[k]; }

    return to;
};

exports.workspace = function(obj, name) {
    var ws = get(obj, 'workspace');
    return (ws ? name ? inArray(ws.objects, name, 'name') : ws.objects || ws.object: null);
};

exports.signature = function() {
    var args   = Array.prototype.slice.call(arguments['0'], 0),
        len    = args.length,
        create = false,
        opts   = {},
        api;

    if (len === 1 && Lang.isObject(args[0])) {
        opts = args[0];
        api  = opts.project ? '/r/project/execute/script' :
            '/r/repository/script/execute';
    } else if (len === 1 && Lang.isString(args[0])) {
        args = args[0].split('\/');
        api  = '/r/repository/script/execute'
        opts = {
            author: args[1],
            directory: args[2],
            filename: args[3]
        };
    } else if (len === 2) {
        // ex: .script('/testuser/root/DeployR - Hello World.R', project)
        var project = args[1];
        api = project ? '/r/project/execute/script' : '/r/repository/script/execute';

        args = args[0].split('\/');
        opts = {
            project: project,
            author: args[1],
            directory: args[2],
            filename: args[3]
        };
    } else if (len > 2) {
        // ex: .script('DeployR - Hello World.R', 'testuser', 'root')
        opts = {
            author: args[2],
            directory: args[1],
            filename: args[0]
        };
    }

    // indicate a new project should be created
    if (opts.project && Lang.isBoolean(opts.project)) {
      delete opts['project'];
      create = true;
    }

    return {
        api: api,
        opts: opts,
        create: create
    };
};
},{"./lang":24}],33:[function(require,module,exports){
(function (process){
/**
* attempt of a simple defer/promise library for mobile development
* @author Jonathan Gotti < jgotti at jgotti dot net>
* @since 2012-10
* @version 0.7.3
*/
(function(undef){
	"use strict";

	var nextTick
		, isFunc = function(f){ return ( typeof f === 'function' ); }
		, isArray = function(a){ return Array.isArray ? Array.isArray(a) : (a instanceof Array); }
		, isObjOrFunc = function(o){ return !!(o && (typeof o).match(/function|object/)); }
		, isNotVal = function(v){ return (v === false || v === undef || v === null); }
		, slice = function(a, offset){ return [].slice.call(a, offset); }
		, undefStr = 'undefined'
		, tErr = typeof TypeError === undefStr ? Error : TypeError
	;
	if ( (typeof process !== undefStr) && process.nextTick ) {
		nextTick = process.nextTick;
	} else if ( typeof MessageChannel !== undefStr ) {
		var ntickChannel = new MessageChannel(), queue = [];
		ntickChannel.port1.onmessage = function(){ queue.length && (queue.shift())(); };
		nextTick = function(cb){
			queue.push(cb);
			ntickChannel.port2.postMessage(0);
		};
	} else {
		nextTick = function(cb){ setTimeout(cb, 0); };
	}
	function rethrow(e){ nextTick(function(){ throw e;}); }

	/**
	 * @typedef deferred
	 * @property {promise} promise
	 * @method resolve
	 * @method fulfill
	 * @method reject
	 */

	/**
	 * @typedef {function} fulfilled
	 * @param {*} value promise resolved value
	 * @returns {*} next promise resolution value
	 */

	/**
	 * @typedef {function} failed
	 * @param {*} reason promise rejection reason
	 * @returns {*} next promise resolution value or rethrow the reason
	 */

	//-- defining unenclosed promise methods --//
	/**
	 * same as then without failed callback
	 * @param {fulfilled} fulfilled callback
	 * @returns {promise} a new promise
	 */
	function promise_success(fulfilled){ return this.then(fulfilled, undef); }

	/**
	 * same as then with only a failed callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_error(failed){ return this.then(undef, failed); }


	/**
	 * same as then but fulfilled callback will receive multiple parameters when promise is fulfilled with an Array
	 * @param {fulfilled} fulfilled callback
	 * @param {failed} failed callback
	 * @returns {promise} a new promise
	 */
	function promise_apply(fulfilled, failed){
		return this.then(
			function(a){
				return isFunc(fulfilled) ? fulfilled.apply(null, isArray(a) ? a : [a]) : (defer.onlyFuncs ? a : fulfilled);
			}
			, failed || undef
		);
	}

	/**
	 * cleanup method which will be always executed regardless fulfillment or rejection
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore
	 * @returns {promise} the same promise untouched
	 */
	function promise_ensure(cb){
		function _cb(){ cb(); }
		this.then(_cb, _cb);
		return this;
	}

	/**
	 * take a single callback which wait for an error as first parameter. other resolution values are passed as with the apply/spread method
	 * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
	 *                      when the promise is not pending anymore with error as first parameter if any as in node style
	 *                      callback. Rest of parameters will be applied as with the apply method.
	 * @returns {promise} a new promise
	 */
	function promise_nodify(cb){
		return this.then(
			function(a){
				return isFunc(cb) ? cb.apply(null, isArray(a) ? a.splice(0,0,undefined) && a : [undefined,a]) : (defer.onlyFuncs ? a : cb);
			}
			, function(e){
				return cb(e);
			}
		);
	}

	/**
	 *
	 * @param {function} [failed] without parameter will only rethrow promise rejection reason outside of the promise library on next tick
	 *                            if passed a failed method then will call failed on rejection and throw the error again if failed didn't
	 * @returns {promise} a new promise
	 */
	function promise_rethrow(failed){
		return this.then(
			undef
			, failed ? function(e){ failed(e); throw e; } : rethrow
		);
	}

	/**
	* @param {boolean} [alwaysAsync] if set force the async resolution for this promise independantly of the D.alwaysAsync option
	* @returns {deferred} defered object with property 'promise' and methods reject,fulfill,resolve (fulfill being an alias for resolve)
	*/
	var defer = function (alwaysAsync){
		var alwaysAsyncFn = (undef !== alwaysAsync ? alwaysAsync : defer.alwaysAsync) ? nextTick : function(fn){fn();}
			, status = 0 // -1 failed | 1 fulfilled
			, pendings = []
			, value
			/**
			 * @typedef promise
			 */
			, _promise  = {
				/**
				 * @param {fulfilled|function} fulfilled callback
				 * @param {failed|function} failed callback
				 * @returns {promise} a new promise
				 */
				then: function(fulfilled, failed){
					var d = defer();
					pendings.push([
						function(value){
							try{
								if( isNotVal(fulfilled)){
									d.resolve(value);
								} else {
									d.resolve(isFunc(fulfilled) ? fulfilled(value) : (defer.onlyFuncs ? value : fulfilled));
								}
							}catch(e){
								d.reject(e);
							}
						}
						, function(err){
							if ( isNotVal(failed) || ((!isFunc(failed)) && defer.onlyFuncs) ) {
								d.reject(err);
							}
							if ( failed ) {
								try{ d.resolve(isFunc(failed) ? failed(err) : failed); }catch(e){ d.reject(e);}
							}
						}
					]);
					status !== 0 && alwaysAsyncFn(execCallbacks);
					return d.promise;
				}

				, success: promise_success

				, error: promise_error
				, otherwise: promise_error

				, apply: promise_apply
				, spread: promise_apply

				, ensure: promise_ensure

				, nodify: promise_nodify

				, rethrow: promise_rethrow

				, isPending: function(){ return status === 0; }

				, getStatus: function(){ return status; }
			}
		;
		_promise.toSource = _promise.toString = _promise.valueOf = function(){return value === undef ? this : value; };


		function execCallbacks(){
			/*jshint bitwise:false*/
			if ( status === 0 ) {
				return;
			}
			var cbs = pendings, i = 0, l = cbs.length, cbIndex = ~status ? 0 : 1, cb;
			pendings = [];
			for( ; i < l; i++ ){
				(cb = cbs[i][cbIndex]) && cb(value);
			}
		}

		/**
		 * fulfill deferred with given value
		 * @param {*} val
		 * @returns {deferred} this for method chaining
		 */
		function _resolve(val){
			var done = false;
			function once(f){
				return function(x){
					if (done) {
						return undefined;
					} else {
						done = true;
						return f(x);
					}
				};
			}
			if ( status ) {
				return this;
			}
			try {
				var then = isObjOrFunc(val) && val.then;
				if ( isFunc(then) ) { // managing a promise
					if( val === _promise ){
						throw new tErr("Promise can't resolve itself");
					}
					then.call(val, once(_resolve), once(_reject));
					return this;
				}
			} catch (e) {
				once(_reject)(e);
				return this;
			}
			alwaysAsyncFn(function(){
				value = val;
				status = 1;
				execCallbacks();
			});
			return this;
		}

		/**
		 * reject deferred with given reason
		 * @param {*} Err
		 * @returns {deferred} this for method chaining
		 */
		function _reject(Err){
			status || alwaysAsyncFn(function(){
				try{ throw(Err); }catch(e){ value = e; }
				status = -1;
				execCallbacks();
			});
			return this;
		}
		return /**@type deferred */ {
			promise:_promise
			,resolve:_resolve
			,fulfill:_resolve // alias
			,reject:_reject
		};
	};

	defer.deferred = defer.defer = defer;
	defer.nextTick = nextTick;
	defer.alwaysAsync = true; // setting this will change default behaviour. use it only if necessary as asynchronicity will force some delay between your promise resolutions and is not always what you want.
	/**
	* setting onlyFuncs to false will break promises/A+ conformity by allowing you to pass non undefined/null values instead of callbacks
	* instead of just ignoring any non function parameters to then,success,error... it will accept non null|undefined values.
	* this will allow you shortcuts like promise.then('val','handled error'')
	* to be equivalent of promise.then(function(){ return 'val';},function(){ return 'handled error'})
	*/
	defer.onlyFuncs = true;

	/**
	 * return a fulfilled promise of given value (always async resolution)
	 * @param {*} value
	 * @returns {promise}
	 */
	defer.resolved = defer.fulfilled = function(value){ return defer(true).resolve(value).promise; };

	/**
	 * return a rejected promise with given reason of rejection (always async rejection)
	 * @param {*} reason
	 * @returns {promise}
	 */
	defer.rejected = function(reason){ return defer(true).reject(reason).promise; };

	/**
	 * return a promise with no resolution value which will be resolved in time ms (using setTimeout)
	 * @param {int} [time] in ms default to 0
	 * @returns {promise}
	 */
	defer.wait = function(time){
		var d = defer();
		setTimeout(d.resolve, time || 0);
		return d.promise;
	};

	/**
	 * return a promise for the return value of function call which will be fulfilled in delay ms or rejected if given fn throw an error
	 * @param {*} fn to execute or value to return after given delay
	 * @param {int} [delay] in ms default to 0
	 * @returns {promise}
	 */
	defer.delay = function(fn, delay){
		var d = defer();
		setTimeout(function(){ try{ d.resolve(isFunc(fn) ? fn.apply(null) : fn); }catch(e){ d.reject(e); } }, delay || 0);
		return d.promise;
	};

	/**
	 * if given value is not a promise return a fulfilled promise resolved to given value
	 * @param {*} promise a value or a promise
	 * @returns {promise}
	 */
	defer.promisify = function(promise){
		if ( promise && isFunc(promise.then) ) { return promise;}
		return defer.resolved(promise);
	};

	function multiPromiseResolver(callerArguments, returnPromises){
		var promises = slice(callerArguments);
		if ( promises.length === 1 && isArray(promises[0]) ) {
			if(! promises[0].length ){
				return defer.fulfilled([]);
			}
			promises = promises[0];
		}
		var args = []
			, d = defer()
			, c = promises.length
		;
		if ( !c ) {
			d.resolve(args);
		} else {
			var resolver = function(i){
				promises[i] = defer.promisify(promises[i]);
				promises[i].then(
					function(v){
						args[i] = returnPromises ? promises[i] : v;
						(--c) || d.resolve(args);
					}
					, function(e){
						if( ! returnPromises ){
							d.reject(e);
						} else {
							args[i] = promises[i];
							(--c) || d.resolve(args);
						}
					}
				);
			};
			for( var i = 0, l = c; i < l; i++ ){
				resolver(i);
			}
		}
		return d.promise;
	}

	function sequenceZenifier(promise, zenValue){
		return promise.then(isFunc(zenValue) ? zenValue : function(){return zenValue;});
	}
	function sequencePromiseResolver(callerArguments){
		var funcs = slice(callerArguments);
		if ( funcs.length === 1 && isArray(funcs[0]) ) {
			funcs = funcs[0];
		}
		var d = defer(), i=0, l=funcs.length, promise = defer.resolved();
		for(; i<l; i++){
			promise = sequenceZenifier(promise, funcs[i]);
		}
		d.resolve(promise);
		return d.promise;
	}

	/**
	 * return a promise for all given promises / values.
	 * the returned promises will be fulfilled with a list of resolved value.
	 * if any given promise is rejected then on the first rejection the returned promised will be rejected with the same reason
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 * @returns {promise} of a list of given promise resolution value
	 */
	defer.all = function(){ return multiPromiseResolver(arguments,false); };

	/**
	 * return an always fulfilled promise of array<promise> list of promises/values regardless they resolve fulfilled or rejected
	 * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
	 *                     (non promise values will be promisified)
	 * @returns {promise} of the list of given promises
	 */
	defer.resolveAll = function(){ return multiPromiseResolver(arguments,true); };

	/**
	* execute given function in sequence passing their returned values to the next one in sequence.
	* You can pass values or promise instead of functions they will be passed in the sequence as if a function returned them.
	* if any function throw an error or a rejected promise the final returned promise will be rejected with that reason.
	* @param {array|...*} [function] list of function to call in sequence receiving previous one as a parameter
	*                     (non function values will be treated as if returned by a function)
	* @returns {promise} of the list of given promises
	*/
	defer.sequence = function(){ return sequencePromiseResolver(arguments); };

	/**
	 * transform a typical nodejs async method awaiting a callback as last parameter, receiving error as first parameter to a function that
	 * will return a promise instead. the returned promise will resolve with normal callback value minus the first error parameter on
	 * fulfill and will be rejected with that error as reason in case of error.
	 * @param {object} [subject] optional subject of the method to encapsulate
	 * @param {function} fn the function to encapsulate if the normal callback should receive more than a single parameter (minus the error)
	 *                      the promise will resolve with the list or parameters as fulfillment value. If only one parameter is sent to the
	 *                      callback then it will be used as the resolution value.
	 * @returns {Function}
	 */
	defer.nodeCapsule = function(subject, fn){
		if ( !fn ) {
			fn = subject;
			subject = void(0);
		}
		return function(){
			var d = defer(), args = slice(arguments);
			args.push(function(err, res){
				err ? d.reject(err) : d.resolve(arguments.length > 2 ? slice(arguments, 1) : res);
			});
			try{
				fn.apply(subject, args);
			}catch(e){
				d.reject(e);
			}
			return d.promise;
		};
	};

	/*global define*/
	if ( typeof define === 'function' && define.amd ) {
		define('D.js', [], function(){ return defer; });
	} else if ( typeof module !== undefStr && module.exports ) {
		module.exports = defer;
	} else if ( typeof window !== undefStr ) {
		var oldD = window.D;
		/**
		 * restore global D variable to its previous value and return D to the user
		 * @returns {Function}
		 */
		defer.noConflict = function(){
			window.D = oldD;
			return defer;
		};
		window.D = defer;
	}
})();

}).call(this,require('_process'))

},{"_process":17}],34:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root = 'undefined' == typeof window
  ? this
  : window;

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

function getXHR() {
  if (root.XMLHttpRequest
    && ('file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
}

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  this.text = this.req.method !='HEAD' 
     ? this.xhr.responseText 
     : null;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && str.length
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  var type = status / 100 | 0;

  // status / class
  this.status = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status || 1223 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self); 
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
    }

    self.callback(err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  if (2 == fn.length) return fn(err, res);
  if (err) return this.emit('error', err);
  fn(res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;
    if (0 == xhr.status) {
      if (self.aborted) return self.timeoutError();
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  if (xhr.upload) {
    xhr.upload.onprogress = function(e){
      e.percent = e.loaded / e.total * 100;
      self.emit('progress', e);
    };
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var serialize = request.serialize[this.getHeader('Content-Type')];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":35,"reduce":36}],35:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],36:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],37:[function(require,module,exports){
module.exports = require('./lib/enum');
},{"./lib/enum":38}],38:[function(require,module,exports){
(function (global){
(function (root, module, global, define) {

  "use strict";

  /**
   * Represents an Item of an Enum.
   * @param {String} key   The Enum key.
   * @param {Number} value The Enum value.
   */
  function EnumItem(key, value) {
    this.key = key;
    this.value = value;
  }

  EnumItem.prototype = {

    /*constructor reference so that, this.constructor===EnumItem//=>true */
    constructor: EnumItem,

    /**
     * Checks if the flagged EnumItem has the passing object.
     * @param  {EnumItem || String || Number} value The object to check with.
     * @return {Boolean}                            The check result.
     */
    has: function(value) {
      if (value instanceof EnumItem || (typeof(value) === 'object' && value.key !== undefined && value.value !== undefined)) {
        return (this.value & value.value) !== 0;
      } else if (typeof(value) === 'string') {
        return this.key.indexOf(value) >= 0;
      } else {
        return (this.value & value) !== 0;
      }
    },

    /**
     * Checks if the EnumItem is the same as the passing object.
     * @param  {EnumItem || String || Number} key The object to check with.
     * @return {Boolean}                          The check result.
     */
    is: function(key) {
      if (key instanceof EnumItem || (typeof(key) === 'object' && key.key !== undefined && key.value !== undefined)) {
        return this.key === key.key;
      } else if (typeof(key) === 'string') {
        return this.key === key;
      } else {
        return this.value === key;
      }
    },

    /**
     * Returns String representation of this EnumItem.
     * @return {String} String representation of this EnumItem.
     */
    toString: function() {
      return this.key;
    },

    /**
     * Returns JSON object representation of this EnumItem.
     * @return {String} JSON object representation of this EnumItem.
     */
    toJSON: function() {
      return this.key;
    },

    /**
     * Returns the value to compare with.
     * @return {String} The value to compare with.
     */
    valueOf: function() {
      return this.key;
    }

  };


  /**
   * Represents an Enum with enum items.
   * @param {Array || Object}  map     This are the enum items.
   * @param {String || Object} options This are options. [optional]
   */
  function Enum(map, options) {

    if (options && typeof(options) === 'string') {
      options = { name: options };
    }

    this._options = options || {};
    this._options.separator = this._options.separator || ' | ';

    this.enums = [];

    if (map.length) {
      var array = map;
      map = {};

      for (var i = 0; i < array.length; i++) {
        map[array[i]] = Math.pow(2, i);
      }
    }

    for (var member in map) {
      if ((this._options.name && member === 'name') || member === '_options' || member === 'get' || member === 'getKey' || member === 'getValue' || member === 'enums' || member === 'isFlaggable') {
        throw new Error('Enum key "' + member + '" is a reserved word!');
      }
      this[member] = new EnumItem(member, map[member]);
      this.enums.push(this[member]);
    }

    if (this._options.name) {
      this.name = this._options.name;
    }

    var self = this;

    function isFlaggable() {
      for (var i = 0, len = self.enums.length; i < len; i++) {
        var e = self.enums[i];

        if (!((e.value !== 0) && !(e.value & (e.value - 1)))) {
          return false;
        }
      }
      return true;
    }

    this.isFlaggable = isFlaggable();
    this.freezeEnums(); //this will make instances of Enum non-extensible
  }

  Enum.prototype = {

    /*constructor reference so that, this.constructor===Enum//=>true */
    constructor: Enum,

    /**
     * Returns the appropriate EnumItem key.
     * @param  {EnumItem || String || Number} key The object to get with.
     * @return {String}                           The get result.
     */
    getKey: function(value) {
      var item = this.get(value);
      if (item) {
        return item.key;
      } else {
        return 'Undefined';
      }
    },

    /**
     * Returns the appropriate EnumItem value.
     * @param  {EnumItem || String || Number} key The object to get with.
     * @return {Number}                           The get result.
     */
    getValue: function(key) {
      var item = this.get(key);
      if (item) {
        return item.value;
      } else {
        return null;
      }
    },

    /**
     * Returns the appropriate EnumItem.
     * @param  {EnumItem || String || Number} key The object to get with.
     * @return {EnumItem}                         The get result.
     */
    get: function(key) {
      if (key === null || key === undefined) return null;

      if (key instanceof EnumItem || (typeof(key) === 'object' && key.key !== undefined && key.value !== undefined)) {
        var foundIndex = this.enums.indexOf(key);
        if (foundIndex >= 0) {
          return key;
        }
        if (!this.isFlaggable || (this.isFlaggable && key.key.indexOf(this._options.separator) < 0)) {
          return null;
        }
        return this.get(key.key);
      } else if (typeof(key) === 'string') {
        if (key.indexOf(this._options.separator) > 0) {
          var parts = key.split(this._options.separator);

          var value = 0;
          for(var i = 0; i < parts.length; i++) {
            var part = parts[i];

            value |= this[part].value;
          }

          return new EnumItem(key, value);
        } else {
          return this[key];
        }
      } else {
        for (var m in this) {
          if (this.hasOwnProperty(m)) {
            if (this[m].value === key) {
              return this[m];
            }
          }
        }

        var result = null;

        if (this.isFlaggable) {
          for (var n in this) {
            if (this.hasOwnProperty(n)) {
              if ((key & this[n].value) !== 0) {
                if (result) {
                  result += this._options.separator;
                } else {
                  result = '';
                }
                result += n;
              }
            }
          }
        }

        return this.get(result || null);
      }
    },

    /**
     * Define freezeEnums() as a property of the prototype.
     * make enumerable items nonconfigurable and deep freeze the properties. Throw Error on property setter.
     */
    freezeEnums: function() {
      function freezer(o) {
        var props = Object.getOwnPropertyNames(o);
        props.forEach( function(p){
          if (!Object.getOwnPropertyDescriptor(o, p).configurable) {
            return;
          }

          Object.defineProperties(o, p, {writable:false, configurable:false});
        })
        return o;
      }

      function getPropertyValue(value) {
        return value;
      }

      function deepFreezeEnums(o) {
        if (typeof o !== 'object' || o === null || Object.isFrozen(o) || Object.isSealed(o) ){
          return;
        }
        for (var key in o) {
          if (o.hasOwnProperty(key)) {
            o.__defineGetter__(key, getPropertyValue.bind(null, o[key]));
            o.__defineSetter__(key, function throwPropertySetError(value){throw TypeError("Cannot redefine property; Enum Type is not extensible.")});
            deepFreezeEnums(o[key]);
          }
        }
        if (Object.freeze) {
          Object.freeze(o);
        } else {
          freezer(o);
        }
      }

      deepFreezeEnums(this);

      return this;
    },
  };


  if (module && module.exports) {
    module.exports = Enum;
  } else if (define) {
    define(function () {
      return Enum;
    });
  } else {
    root.Enum = Enum;
  }

  if (module && module.exports && global) {

    /**
     * Registers the Enum Type globally in node.js.
     * @param  {String} key Global variable. [optional]
     */
    Enum.register = function(key) {
      key = key || 'Enum';
      if (!global[key]) {
        global[key] = Enum;
      }
    };
  }

}(
  this,
  typeof(module) !== 'undefined' ? module : undefined,
  typeof(global) !== 'undefined' ? global : undefined,
  typeof(define) !== 'undefined' ? define : undefined
));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],39:[function(require,module,exports){
/*!
 * @name JavaScript/NodeJS Merge v1.2.0
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
},{}],40:[function(require,module,exports){
/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint undef: true es5: true node: true devel: true evil: true
         forin: true latedef: false supernew: true */
/*global define: true */

!(typeof define !== "function" ? function(_, $){ $(null, typeof exports !== 'undefined' ? exports : window); } : define)('selfish', function(require, exports) {

"use strict";

exports.Base = Object.freeze(Object.create(Object.prototype, {
  /**
   * Creates an object that inherits from `this` object (Analog of
   * `new Object()`).
   * @examples
   *
   *    var Dog = Base.extend({
   *      bark: function bark() {
   *        return 'Ruff! Ruff!'
   *      }
   *    });
   *    var dog = Dog.new();
   */
  'new': { value: function create() {
    var object = Object.create(this);
    object.initialize.apply(object, arguments);
    return object;
  }},
  /**
   * When new instance of the this prototype is created it's `initialize`
   * method is called with all the arguments passed to the `new`. You can
   * override `initialize` to set up an instance.
   */
  initialize: { value: function initialize() {
  }},
  /**
   * Merges all the properties of the passed objects into `this` instance (This
   * method can be used on instances only as prototype objects are frozen).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   *
   * @examples
   *
   *    var Pet = Dog.extend({
   *      initialize: function initialize(options) {
   *        // this.name = options.name -> would have thrown (frozen prototype)
   *        this.merge(options) // will override all properties.
   *      },
   *      call: function(name) {
   *        return this.name === name ? this.bark() : ''
   *      },
   *      name: null
   *    })
   *    var pet = Pet.new({ name: 'Benzy', breed: 'Labrador' })
   *    pet.call('Benzy')   // 'Ruff! Ruff!'
   */
  merge: { value: function merge() {
    var descriptor = {};
    Array.prototype.forEach.call(arguments, function (properties) {
      Object.getOwnPropertyNames(properties).forEach(function(name) {
        descriptor[name] = Object.getOwnPropertyDescriptor(properties, name);
      });
    });
    Object.defineProperties(this, descriptor);
    return this;
  }},
  /**
   * Takes any number of argument objects and returns frozen, composite object
   * that inherits from `this` object and combines all of the own properties of
   * the argument objects. (Objects returned by this function are frozen as
   * they are intended to be used as types).
   *
   * If two or more argument objects have own properties with the same name,
   * the property is overridden, with precedence from right to left, implying,
   * that properties of the object on the left are overridden by a same named
   * property of the object on the right.
   * @examples
   *
   *    // ## Object composition ##
   *
   *    var HEX = Base.extend({
   *      hex: function hex() {
   *        return '#' + this.color;
   *      }
   *    })
   *
   *    var RGB = Base.extend({
   *      red: function red() {
   *        return parseInt(this.color.substr(0, 2), 16);
   *      },
   *      green: function green() {
   *        return parseInt(this.color.substr(2, 2), 16);
   *      },
   *      blue: function blue() {
   *        return parseInt(this.color.substr(4, 2), 16);
   *      }
   *    })
   *
   *    var CMYK = Base.extend(RGB, {
   *      black: function black() {
   *        var color = Math.max(Math.max(this.red(), this.green()), this.blue());
   *        return (1 - color / 255).toFixed(4);
   *      },
   *      cyan: function cyan() {
   *        var K = this.black();
   *        return (((1 - this.red() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      magenta: function magenta() {
   *        var K = this.black();
   *        return (((1 - this.green() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      },
   *      yellow: function yellow() {
   *        var K = this.black();
   *        return (((1 - this.blue() / 255).toFixed(4) - K) / (1 - K)).toFixed(4);
   *      }
   *    })
   *
   *    var Color = Base.extend(HEX, RGB, CMYK, {
   *      initialize: function Color(color) {
   *        this.color = color;
   *      }
   *    });
   *
   *    // ## Prototypal inheritance ##
   *
   *    var Pixel = Color.extend({
   *      initialize: function Pixel(x, y, hex) {
   *        Color.initialize.call(this, hex);
   *        this.x = x;
   *        this.y = y;
   *      },
   *      toString: function toString() {
   *        return this.x + ':' + this.y + '@' + this.hex();
   *      }
   *    });
   *
   *    var pixel = Pixel.new(11, 23, 'CC3399')
   *    pixel.toString(); // 11:23@#CC3399
   *
   *    pixel.red();      // 204
   *    pixel.green();    // 51
   *    pixel.blue();     // 153
   *
   *    pixel.cyan();     // 0.0000
   *    pixel.magenta();  // 0.7500
   *    pixel.yellow();   // 0.2500
   *
   */
   extend: { value: function extend() {
    return Object.freeze(this.merge.apply(Object.create(this), arguments));
  }}
}));

});

},{}],41:[function(require,module,exports){
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

var deployr              = require('deployr'),
    DiscreteTask         = require('./lib/task/discreate-task'),
    PooledTask           = require('./lib/task/pooled-task'),
    BackgroundTask       = require('./lib/task/background-task'),
    DiscreteTaskBroker   = require('./lib/engine/discrete-task-broker'),
    PooledTaskBroker     = require('./lib/engine/pooled-task-broker'),
    BackgroundTaskBroker = require('./lib/engine/background-task-broker');    

// -- expose `deployr` into the global namespace for browser convenience --
if (typeof window !== 'undefined' && !window.deployr) {
    window.deployr = deployr;
}

/**
 * The `rbroker` global namespace object. This is the public interface for the
 * DeployR `RBroker`. It is used as a factory to simplify the creation of new
 * instances of:
 *
 * - DiscreteTaskBroker
 * - PooledTaskBroker
 * - BackgroundTaskBroker
 * - DiscreteTask
 * - PooledTask
 * - BackgroundTask
 *
 * @module rbroker
 * @for rbroker
 */
module.exports = {
    /**
     * Expose `deployr` via the `rbroker` for convenience.     
     *
     * @property deployr
     * @static
     * @api public
     */     
    deployr: deployr,

   /**
    * Defines the factory for creating a DeployR-specific encoded R object to be 
    * sent as input parameters to an R script.
    *
    * Example:
    * ```
    *    var rinput = rbroker.RInput.logical('logical_name', true);
    *    var rinput = rbroker.RInput.numeric('numeric_name', 10.5);
    *    var rinput = rboker.RInput.integer('integer_name', 5);
    *    var rinput = rboker.RInput.character('character_name', 'Hello');
    *    // ect...
    * ```
    * @property RInput
    * @static
    * @api public
    */
    RInput: deployr.RInput,

    /**
     * Create an instance of an `DiscreteTaskBroker` to manage the execution of
     * a `DiscreteTask`.
     *
     * @method discreteTaskBroker
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RBroker} A new instance of a `DiscreteTaskBroker`.
     * @api public
     */
    discreteTaskBroker: function(config) {
        return DiscreteTaskBroker.new(config);
    },

    /**
     * Create an instance of an `PooledTaskBroker` to manage the execution of
     * a `PooledTask`.
     *
     * @method pooledTaskBroker
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RBroker} A new instance of a `PooledTaskBroker`.
     * @api public
     */
    pooledTaskBroker: function(config) {
        return PooledTaskBroker.new(config);
    },

    /**
     * Create an instance of an `BackgroundTaskBroker` to manage the execution of
     * a `BackgroundTask`.
     *
     * @method backgroundTaskBroker
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RBroker} A new instance of a `BackgroundTaskBroker`.
     * @api public
     */
    backgroundTaskBroker: function(config) {
        return BackgroundTaskBroker.new(config);
    },

    /**
     * Create an instance of a `DiscreteTask` for an analytics Web service based
     * on either:
     *
     *  1. Repository-managed R script
     *
     *    ```
     *    var rtask = rbroker.discreteTask({
     *       filename: 'regression',
     *       directory: 'demo',
     *       author: 'george',
     *       version: version
     *       // Additional Discrete Task Options...
     *    });
     *    ```
     *
     * 2. URL-addressable R script
     *
     *    ```
     *    var rtask = rbroker.discreteTask( {
     *         externalsource: regressionURL
     *         // Additional Discrete Task Options...
     *    });
     *    ```
     *
     * @method discreteTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of a `DiscreteTask`.
     * @api public
     */
    discreteTask: function(config) {
        return DiscreteTask.new(config);
    },

    /**
     * Create an instance of a `PooledTask` for an analytics Web service based
     * on either:
     *
     *  1. Repository-managed R script
     *
     *    ```
     *    var rtask = rbroker.pooledTask({
     *       filename: 'regression',
     *       directory: 'demo',
     *       author: 'george',
     *       version: version
     *       // Additional Pooled Task Options...
     *    });
     *    ```
     *
     * 2. Arbitrary block of R code
     *
     *    ```
     *    var rtask = rbroker.pooledTask({
     *         code: codeBlock
     *         // Additional Pooled Task Options...
     *    });
     *    ```
     *
     * 3. URL-addressable R script
     *
     *    ```
     *    var rtask = rbroker.pooledTask( {
     *         externalsource: regressionURL
     *         // Additional Pooled Task Options...
     *    });
     *    ```
     *
     * @method pooledTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of a `PooledTask`.
     * @api public
     */
    pooledTask: function(config) {
        return PooledTask.new(config);
    },

    /**
     *  Create an instance of a `BackgroundTask` for an analytics Web service
     * based on either:
     *
     *  1. Repository-managed R script
     *
     *    ```
     *    var rTask = rbroker.backgroundTask({
     *       name: 'Sample Task',
     *       descr: 'Sample description',
     *       rscriptname: 'regression',
     *       rscriptdirectory: 'demo',
     *       rscriptauthor: 'george',
     *       rscriptversion: version
     *       // Additional Background Task Options...
     *    });
     *    ```
     *
     * 2. Arbitrary block of R code
     *
     *    ```
     *    var rtask = rbroker.backgroundTask({
     *         name: 'Sample Task',
     *       descr: 'Sample description',
     *         code: codeBlock
     *         // Additional Background Task Options...
     *    });
     *    ```
     *
     * 3. URL-addressable R script
     *
     *    ```
     *    var rtask = rbroker.backgroundTask( {
     *         name: 'Sample Task',
     *       descr: 'Sample description',
     *         externalsource: regressionURL
     *         // Additional Background Task Options...
     *    });
     *    ```
     *
     * @method backgroundTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of an `BackgroundTask`.
     * @api public
     */
    backgroundTask: function(config) {
        return BackgroundTask.new(config);
    }
};

},{"./lib/engine/background-task-broker":1,"./lib/engine/discrete-task-broker":2,"./lib/engine/pooled-task-broker":3,"./lib/task/background-task":7,"./lib/task/discreate-task":8,"./lib/task/pooled-task":9,"deployr":20}]},{},[41])(41)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZW5naW5lL2JhY2tncm91bmQtdGFzay1icm9rZXIuanMiLCJsaWIvZW5naW5lL2Rpc2NyZXRlLXRhc2stYnJva2VyLmpzIiwibGliL2VuZ2luZS9wb29sZWQtdGFzay1icm9rZXIuanMiLCJsaWIvZW5naW5lL3Jicm9rZXItZW5naW5lLmpzIiwibGliL3J0YXNrLXRva2VuLmpzIiwibGliL3J0YXNrLXR5cGUuanMiLCJsaWIvdGFzay9iYWNrZ3JvdW5kLXRhc2suanMiLCJsaWIvdGFzay9kaXNjcmVhdGUtdGFzay5qcyIsImxpYi90YXNrL3Bvb2xlZC10YXNrLmpzIiwibGliL3Rhc2svcnRhc2suanMiLCJsaWIvdXRpbC9ydGFzay1xdWV1ZS5qcyIsImxpYi93b3JrZXIvYmFja2dyb3VuZC10YXNrLXdvcmtlci5qcyIsImxpYi93b3JrZXIvZGlzY3JldGUtdGFzay13b3JrZXIuanMiLCJsaWIvd29ya2VyL3Bvb2xlZC10YXNrLXdvcmtlci5qcyIsImxpYi93b3JrZXIvcmJyb2tlci13b3JrZXIuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9kLmpzL2xpYi9ELmpzIiwibm9kZV9tb2R1bGVzL2RlcGxveXIvYXBpcy5qc29uIiwibm9kZV9tb2R1bGVzL2RlcGxveXIvZGVwbG95ci5qcyIsIm5vZGVfbW9kdWxlcy9kZXBsb3lyL2xpYi9lbWl0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2RlcGxveXIvbGliL2VuY29kZXIuanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9saWIvZXMuanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9saWIvbGFuZy5qcyIsIm5vZGVfbW9kdWxlcy9kZXBsb3lyL2xpYi9sb2dnZXIuanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9saWIvb3B0aW9uYWwuanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9saWIvcXVldWUuanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9saWIvcmlucHV0LmpzIiwibm9kZV9tb2R1bGVzL2RlcGxveXIvbGliL3JpbnB1dHMuanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9saWIvcnR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL2RlcGxveXIvbGliL3NlbGZpc2guanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9ub2RlX21vZHVsZXMvZC5qcy9saWIvRC5qcyIsIm5vZGVfbW9kdWxlcy9kZXBsb3lyL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9ub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVwbG95ci9ub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9ub2RlX21vZHVsZXMvcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lbnVtL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2VudW0vbGliL2VudW0uanMiLCJub2RlX21vZHVsZXMvbWVyZ2UvbWVyZ2UuanMiLCJub2RlX21vZHVsZXMvc2VsZmlzaC9zZWxmaXNoLmpzIiwicmJyb2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25iQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDMWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDajJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6akNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBtZXJnZSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ21lcmdlJyksICAgIFxuICAgIFJCcm9rZXJFbmdpbmUgICAgICAgID0gcmVxdWlyZSgnLi9yYnJva2VyLWVuZ2luZScpLFxuICAgIEJhY2tncm91bmRUYXNrV29ya2VyID0gcmVxdWlyZSgnLi4vd29ya2VyL2JhY2tncm91bmQtdGFzay13b3JrZXInKTtcblxuLyoqXG4gKiBUaGUgQmFja2dyb3VuZCBUYXNrIFJ1bnRpbWUgYWNxdWlyZXMgRGVwbG95UiBncmlkIHJlc291cmNlcyBwZXIgYFJUYXNrYCBcbiAqIGJhc2VkIG9uIHRoZSBzZXJ2ZXItc2lkZSBtYW5hZ2VtZW50IG9mIGFzeW5jaHJvbm91cyBncmlkIHJlc291cmNlcy4gXG4gKlxuICogQG1vZHVsZSBicmFja2dyb3VuZC1icm9rZXJcbiAqIEBmb3IgcmJyb2tlclxuICovXG5tb2R1bGUuZXhwb3J0cyA9IFJCcm9rZXJFbmdpbmUuZXh0ZW5kKHsgIFxuICAvKipcbiAgICogVGhlIEJhY2tncm91bmQgVGFzayBSdW50aW1lIGFjcXVpcmVzIERlcGxveVIgZ3JpZCByZXNvdXJjZXMgcGVyIGBSVGFza2AgXG4gICAqIGJhc2VkIG9uIHRoZSBzZXJ2ZXItc2lkZSBtYW5hZ2VtZW50IG9mIGFzeW5jaHJvbm91cyBncmlkIHJlc291cmNlcy4gXG4gICAqXG4gICAqIEBjbGFzcyBcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29uZmlndXJhdGlvbiBvcHRpb25zLiAgICBcbiAgICovXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAvKlxuICAgICAqIFRoaXMgbGltaXQgaXMgc2V0IHNpbXBseSB0byBlbnN1cmUgdGhlIEJhY2tncm91bmRUYXNrQnJva2VyIGRvZXMgbm90IFxuICAgICAqIHN3YW1wIHRoZSBzZXJ2ZXIgd2hpY2ggdG9vIG1hbnkgY29uY3VycmVudCBIVFRQIHJlcXVlc3RzIHdoZW4gc3VibWl0dGluZyBcbiAgICAgKiBSVGFzay4gVGhlIHJlYWwgcXVldWVpbmcgb2YgUlRhc2sgaXMgaGFuZGxlZCBieSB0aGUgc2VydmVyLCB0aGlzIGJyb2tlciBcbiAgICAgKiBzaW1wbHkgcHVzaGVkIHRoZSBSVGFzayBpbnRvIHRoZSBzZXJ2ZXItbWFuYWdlZCBxdWV1ZS5cbiAgICAgKi9cbiAgICB2YXIgUEFSQUxMRUxfVEFTS19MSU1JVCA9IDEwO1xuXG4gICAgUkJyb2tlckVuZ2luZS5pbml0aWFsaXplLmNhbGwodGhpcywgbWVyZ2UoY29uZmlnLCB7XG4gICAgICBtYXhDb25jdXJyZW50VGFza0xpbWl0OiBQQVJBTExFTF9UQVNLX0xJTUlUXG4gICAgfSkpOyAgICBcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHJlc291cmNlVG9rZW5Qb29sIHdpdGggSW50ZWdlciBiYXNlZCByZXNvdXJjZVRva2Vucy5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXJhbGxlbFRhc2tMaW1pdDsgaSsrKSB7XG4gICAgICB0aGlzLnJlc291cmNlVG9rZW5Qb29sLm9mZmVyKGkpO1xuICAgIH1cbiAgXG4gICAgdGhpcy5ydXNlciA9IHRoaXMudmFsaWRhdGVFbmRwb2ludCgpLmlvKCcvci91c2VyL2xvZ2luJylcbiAgICAgIC5kYXRhKGNvbmZpZy5jcmVkZW50aWFscylcbiAgICAgIC5jdHgodGhpcykgICAgICBcbiAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7IHRoaXMuZW1pdCgncmVhZHknKTsgfSk7XG4gIH0sIFxuXG4gIC8qKlxuICAgKiBOb3Qgc3VwcG9ydGVkLiBTdXBwb3J0IGZvciBgcmVmcmVzaGAgaXMgb25seSBhdmFpbGFibGUgb24gdGhlIFxuICAgKiBgUG9vbGVkVGFza0Jyb2tlcmAgcnVudGltZS5cbiAgICpcbiAgICogQG1ldGhvZCByZWZyZXNoXG4gICAqIEBvdmVycmlkZVxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgcmVmcmVzaDogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHRocm93IG5ldyBFcnJvcignQmFja2dyb3VuZFRhc2tCcm9rZXIgcmVmcmVzaCBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFsbCBjbGllbnQtc2lkZSBhbmQgc2VydmVyLXNpZGUgcmVzb3VyY2VzIG1haW50YWluZWQgYnkgb3Igb24gXG4gICAqIGJlaGFsZiBvZiBhbiBpbnN0YW5jZSBvZiBgUkJyb2tlcmAuXG4gICAqXG4gICAqIEBtZXRob2Qgc2h1dGRvd25cbiAgICogQG92ZXJyaWRlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgb3IgXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyBcbiAgc2h1dGRvd246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZsdXNoKCk7XG5cbiAgICByZXR1cm4gdGhpcy5ydXNlci5yZWxlYXNlKCk7ICAgIFxuICB9LCAgXG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVdvcmtlcjogZnVuY3Rpb24gKHRhc2spIHtcbiAgICByZXR1cm4gQmFja2dyb3VuZFRhc2tXb3JrZXIubmV3KHRhc2ssIHRoaXMucnVzZXIpO1xuICB9XG59KTtcbiIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICovXG52YXIgRCAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnZC5qcycpLFxuICAgIFJCcm9rZXJFbmdpbmUgICAgICA9IHJlcXVpcmUoJy4vcmJyb2tlci1lbmdpbmUnKSxcbiAgICBEaXNjcmV0ZVRhc2tXb3JrZXIgPSByZXF1aXJlKCcuLi93b3JrZXIvZGlzY3JldGUtdGFzay13b3JrZXInKTtcblxuLyoqXG4gKiBUaGUgRGlzY3JldGUgVGFzayBSdW50aW1lIGFjcXVpcmVzIERlcGxveVIgZ3JpZCByZXNvdXJjZXMgcGVyIGBSVGFza2AgXG4gKiBvbi1kZW1hbmQuXG4gKlxuICogQG1vZHVsZSBkaXNjcmV0ZS1icm9rZXJcbiAqIEBmb3IgcmJyb2tlclxuICovXG5tb2R1bGUuZXhwb3J0cyA9IFJCcm9rZXJFbmdpbmUuZXh0ZW5kKHtcbiAgLyoqXG4gICAqIFRoZSBEaXNjcmV0ZSBUYXNrIFJ1bnRpbWUgYWNxdWlyZXMgRGVwbG95UiBncmlkIHJlc291cmNlcyBwZXIgYFJUYXNrYCBcbiAgICogb24tZGVtYW5kLlxuICAgKlxuICAgKiBAY2xhc3MgXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbmZpZ3VyYXRpb24gb3B0aW9ucy4gICAgXG4gICAqLyAgIFxuICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgUkJyb2tlckVuZ2luZS5pbml0aWFsaXplLmNhbGwodGhpcywgY29uZmlnKTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgcmVzb3VyY2VUb2tlblBvb2wgd2l0aCBJbnRlZ2VyIGJhc2VkIHJlc291cmNlVG9rZW5zLlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhcmFsbGVsVGFza0xpbWl0OyBpKyspIHtcbiAgICAgICAgIHRoaXMucmVzb3VyY2VUb2tlblBvb2wub2ZmZXIoaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuY3JlZGVudGlhbHMpIHtcbiAgICAgICAgIHRoaXMucnVzZXIgPSB0aGlzLnZhbGlkYXRlRW5kcG9pbnQoKS5pbygnL3IvdXNlci9sb2dpbicpICAgICAgICAgXG4gICAgICAgICAgICAuZGF0YShjb25maWcuY3JlZGVudGlhbHMpXG4gICAgICAgICAgICAuY3R4KHRoaXMpICAgICAgICAgICAgXG4gICAgICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcykgeyB0aGlzLmVtaXQoJ3JlYWR5Jyk7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMudmFsaWRhdGVFbmRwb2ludChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucnVzZXIgPSBudWxsOyAgXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgIH0sXG5cbiAgLyoqXG4gICAqIE5vdCBzdXBwb3J0ZWQuIFN1cHBvcnQgZm9yIGByZWZyZXNoYCBpcyBvbmx5IGF2YWlsYWJsZSBvbiB0aGUgXG4gICAqIGBQb29sZWRUYXNrQnJva2VyYCBydW50aW1lLlxuICAgKlxuICAgKiBAbWV0aG9kIHJlZnJlc2hcbiAgICogQG92ZXJyaWRlXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICAgcmVmcmVzaDogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaXNjcmV0ZVRhc2tCcm9rZXIgcmVmcmVzaCBub3Qgc3VwcG9ydGVkLicpO1xuICAgfSxcblxuICAgLyoqXG4gICAgKiBAT3ZlcnJpZGVcbiAgICAqL1xuICAgY3JlYXRlV29ya2VyOiBmdW5jdGlvbiAodGFzaykge1xuICAgICAgcmV0dXJuIERpc2NyZXRlVGFza1dvcmtlci5uZXcodGFzaywgdGhpcy5ydXNlcik7XG4gICB9LFxuXG4gIC8qKlxuICAgKiBSZWxlYXNlIGFsbCBjbGllbnQtc2lkZSBhbmQgc2VydmVyLXNpZGUgcmVzb3VyY2VzIG1haW50YWluZWQgYnkgb3Igb24gXG4gICAqIGJlaGFsZiBvZiBhbiBpbnN0YW5jZSBvZiBgUkJyb2tlcmAuXG4gICAqXG4gICAqIEBtZXRob2Qgc2h1dGRvd25cbiAgICogQG92ZXJyaWRlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgb3IgXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyBcbiAgIHNodXRkb3duOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmZsdXNoKCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnJ1c2VyID8gdGhpcy5ydXNlci5yZWxlYXNlKCkgOiBELnByb21pc2lmeSh0cnVlKTtcbiAgIH0gICBcbn0pOyIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlIFxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgZGVwbG95ciA9IHJlcXVpcmUoJ2RlcGxveXInKTtcblxudmFyIEQgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdkLmpzJyksXG4gICAgbWVyZ2UgICAgICAgICAgICA9IHJlcXVpcmUoJ21lcmdlJyksXG4gICAgUkJyb2tlckVuZ2luZSAgICA9IHJlcXVpcmUoJy4vcmJyb2tlci1lbmdpbmUnKSxcbiAgICBQb29sZWRUYXNrV29ya2VyID0gcmVxdWlyZSgnLi4vd29ya2VyL3Bvb2xlZC10YXNrLXdvcmtlcicpOyAgICBcblxuLyoqXG4gKiBUaGUgUG9vbGVkIFRhc2sgUnVudGltZSBhY3F1aXJlcyBhIGRlZGljYXRlZCBwb29sIG9mIERlcGxveVIgZ3JpZCByZXNvdXJjZXMgXG4gKiBhdCBzdGFydHVwLlxuICpcbiAqIEBtb2R1bGUgcG9vbGVkLXRhc2stYnJva2VyXG4gKiBAZm9yIHJicm9rZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBSQnJva2VyRW5naW5lLmV4dGVuZCh7ICBcbiAgLyoqXG4gICAqIFRoZSBQb29sZWQgVGFzayBSdW50aW1lIGFjcXVpcmVzIGEgZGVkaWNhdGVkIHBvb2wgb2YgRGVwbG95UiBncmlkIHJlc291cmNlcyBcbiAgICogYXQgc3RhcnR1cC5cbiAgICpcbiAgICogQGNsYXNzIFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb25maWd1cmF0aW9uIG9wdGlvbnMuICAgIFxuICAqL1xuICBpbml0aWFsaXplOiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgUkJyb2tlckVuZ2luZS5pbml0aWFsaXplLmNhbGwodGhpcywgY29uZmlnKTsgIFxuXG4gICAgaWYgKCFjb25maWcuY3JlZGVudGlhbHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQnJva2VyIGZhaWxlZCB0byBpbml0aWFsaXplLCB1c2VyIGNyZWRlbnRpYWxzIHJlcXVpcmVkLicpO1xuICAgIH1cblxuICAgIHZhciBzZWxmICAgICA9IHRoaXMsXG4gICAgICAgIHBvb2xTaXplID0gdGhpcy5wYXJhbGxlbFRhc2tMaW1pdCxcbiAgICAgICAgcG9vbCAgICAgPSBtZXJnZSh7IHBvb2xzaXplOiBwb29sU2l6ZSB9LCBjb25maWcucG9vbCB8fCB7fSk7XG5cbiAgICAvKlxuICAgICAqIFByZXZlbnRzIGF1dGhlbnRpY2F0ZWQgSFRUUCBzZXNzaW9uIGZyb20gdGltaW5nIG91dCBkdWUgdG8gaW5hY3Rpdml0eSB0byBcbiAgICAgKiBlbnN1cmUgcG9vbCBvZiBSUHJvamVjdCByZW1haW4gbGl2ZSBhbmQgYXZhaWxhYmxlIHRvIFBvb2xlZFRhc2tCcm9rZXIuXG4gICAgICovXG4gICAgdGhpcy5odHRwS2VlcEFsaXZlID0ge1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBQSU5HX0lOVEVSVkFMOiA2MDAwMCxcblxuICAgICAgc3RhcnQ6IGZ1bmN0aW9uKHJ1c2VyKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgIGRlcGxveXIuaW8oJy9yL3VzZXIvYWJvdXQnKS5zaGFyZShydXNlci5nZXRDb29raWVzKCkpLmVuZCgpO1xuICAgICAgICB9LCB0aGlzLlBJTkdfSU5URVJWQUwpO1xuICAgICAgfSxcblxuICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XG4gICAgICB9XG4gICAgfTsgICAgXG5cbiAgICAvKlxuICAgICAqIEluaXRpYWxpemUgdGhlIHJlc291cmNlVG9rZW5Qb29sIHdpdGggUlByb2plY3QuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9hZChyZXMpIHtcbiAgICAgIHZhciBwcm9qZWN0cyA9IHJlcy5nZXQoJ3Byb2plY3RzJyk7XG4gICAgICBcbiAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGluZm9ybSBjYWxsZXIgb2YgYW55IGBHcmlkIE5vdGlmaWNhdGlvbmAgZXJyb3JzIHVzY2ggYXM6XG4gICAgICAgIC8vICdDb25jdXJyZW50IGF1dGhlbnRpY2F0ZWQgcHJvamVjdCBsaW1pdCAoMTApIHJlYWNoZWQgZm9yIHVzZXIgWFlaLidcbiAgICAgICAgLy8gVGhlc2UgJ2Vycm9ycycgYXJlIG1vcmUgbGlrZSB3YXJuaW5ncyB0aGFuIHJ1bnRpbWUgdGhyb3dhYmxlIGVycm9ycy5cbiAgICAgICAgdmFyIHdhcm4gPSByZXMuZ2V0KCdlcnJvcicpOyAgICAgICAgXG4gICAgICAgIGlmICh3YXJuKSB7IHNlbGYuZW1pdCgnd2FybmluZycsIHdhcm4pOyB9XG5cbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgICAgc2VsZi5yZXNvdXJjZVRva2VuUG9vbC5vZmZlcihwcm9qZWN0LnByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZWxmLnBhcmFsbGVsVGFza0xpbWl0ID0gc2VsZi5yZXNvdXJjZVRva2VuUG9vbC5zaXplKCk7XG4gICAgICAgIHNlbGYuaHR0cEtlZXBBbGl2ZS5zdGFydChzZWxmLnJ1c2VyKTsgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHNlbGYuZW1pdCgncmVhZHknKTtcbiAgICAgIH0gZWxzZSB7IC8vIE5vIHByb2plY3RzIHdlcmUgY3JlYXRlZCAocHJvamVjdHMubGVuZ3RoID09IDApXG4gICAgICAgIHNlbGYuZW1pdCgnZXJyb3InLCByZXMuZ2V0KCdlcnJvcicpKTtcbiAgICAgIH1cbiAgICB9XG4gICBcbiAgICAvL1xuICAgIC8vIFZhbGlkYXRlIERlcGxveVIgc2VydmVyIGBlbmRwb2ludGAgYW5kIGF1dGhlbnRpY2F0ZS5cbiAgICAvL1xuICAgIHRoaXMucnVzZXIgPSB0aGlzLnZhbGlkYXRlRW5kcG9pbnQoKS5pbygnL3IvdXNlci9sb2dpbicpXG4gICAgICAuZGF0YShjb25maWcuY3JlZGVudGlhbHMpXG4gICAgICAuY3R4KHRoaXMpXG4gICAgICAuZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBcbiAgICAgICAgLy8gQnVpbGQgdGhlIHByb2plY3QgcG9vbC5cbiAgICAgICAgLy8gICAgICAgIFxuICAgICAgICBpZiAoY29uZmlnLnJlbGVhc2VHcmlkUmVzb3VyY2VzKSB7XG4gICAgICAgICAgdGhpcy5ydXNlci5pbygnL3IvdXNlci9yZWxlYXNlJylcbiAgICAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAgICAuaW8oJy9yL3Byb2plY3QvcG9vbCcpXG4gICAgICAgICAgICAgLmRhdGEocG9vbClcbiAgICAgICAgICAgICAuZW5kKGxvYWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucnVzZXIuaW8oJy9yL3Byb2plY3QvcG9vbCcpLmRhdGEocG9vbCkuZW5kKGxvYWQpOyAgICAgICAgICAgICBcbiAgICAgICAgfSAgXG4gICAgICB9KTtcbiAgfSwgXG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNvbmZpZ3VyYXRpb24gZm9yIGBQb29sZWRUYXNrUkJyb2tlcmAuXG4gICAqXG4gICAqIEEgcmVmcmVzaCBjYXVzZXMgYWxsIHdvcmtzcGFjZSBvYmplY3RzIGFuZCBkaXJlY3RvcnkgZmlsZXMgaW4gdGhlIFxuICAgKiB1bmRlcmx5aW5nIFIgc2Vzc2lvbnMgd2l0aGluIHRoZSBwb29sIHRvIGJlIGNsZWFyZWQgYmVmb3JlIG5ldyB3b3Jrc3BhY2UgXG4gICAqIG9iamVjdHMgYW5kL29yIGRpcmVjdG9yeSBmaWxlcyBhcmUgbG9hZGVkIHBlciB0aGUgbmV3IGNvbmZpZyBvcHRpb25zLlxuICAgKlxuICAgKiBPbmx5IGFuIGlkbGUgUkJyb2tlciBpbnN0YW5jZSBjYW4gYmUgcmVmcmVzaGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIHJlZnJlc2hcbiAgICogQHBhcmFtIHtPYmplY3R9IFN0YXJ0dXAgb3B0aW9ucyBmb3IgYSBgUG9vbGVkVGFza1JCcm9rZXJgLlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvciBcbiAgICogXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIHJlZnJlc2g6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB2YXIgY2FsbHMgPSBbXSwgXG4gICAgICAgIGRhdGEgID0ge30sXG4gICAgICAgIHJ1c2VyID0gdGhpcy5ydXNlcjtcblxuICAgIGlmKCF0aGlzLmlzSWRsZSgpKSB7XG4gICAgICAvL3ZhciBkZWZlciA9IHdoZW4uZGVmZXIoKTtcbiAgICAgIC8vZGVmZXIucmVqZWN0KG5ldyBFcnJvcignUkJyb2tlciBpcyBub3QgaWRsZSwgIHJlZnJlc2ggbm90IHBlcm1pdHRlZC4nKSk7XG4gICAgICAvL3JldHVybiBkZWZlci5wcm9taXNlO1xuICAgICAgcmV0dXJuIEQucmVqZWN0ZWQobmV3IEVycm9yKCdSQnJva2VyIGlzIG5vdCBpZGxlLCByZWZyZXNoIG5vdCBwZXJtaXR0ZWQuJykpO1xuICAgIH1cblxuICAgIC8vIGFzc2VydCBvbmx5IHRoZSBwcm9wZXIgcGFyYW1ldGVycyBhcmUgb24gdGhlIGNhbGwgXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGRhdGEgPSB7XG4gICAgICBjb2RlOiAnIyBSZWZyZXNoIHByb2plY3Qgb24gUG9vbGVkVGFza0Jyb2tlci4nLFxuICAgICAgcHJlbG9hZGZpbGVuYW1lOiBjb25maWcucHJlbG9hZGZpbGVuYW1lLFxuICAgICAgcHJlbG9hZGRpcmVjdG9yeTogY29uZmlnLnByZWxvYWRkaXJlY3RvcnksXG4gICAgICBwcmVsb2FkZmlsZWF1dGhvcjogY29uZmlnLnByZWxvYWRmaWxlYXV0aG9yLFxuICAgICAgcHJlbG9hZGZpbGV2ZXJzaW9uOiBjb25maWcucHJlbG9hZGZpbGV2ZXJzaW9uXG4gICAgfTsgICAgXG5cbiAgICAvLyBleGUgd2lsbCBmdWxmaWxsIG9ubHkgb25jZSBhbGwgdGhlIGlucHV0cyBoYXZlIGZ1bGZpbGxlZCAgICAgXG4gICAgdGhpcy5yZXNvdXJjZVRva2VuUG9vbC5xLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgY2FsbHMucHVzaChcbiAgICAgICAgZGVwbG95ci5pbygnL3IvcHJvamVjdC9yZWN5Y2xlJylcbiAgICAgICAgLnNoYXJlKHJ1c2VyLmdldENvb2tpZXMoKSlcbiAgICAgICAgLmRlbGF5KClcbiAgICAgICAgLmRhdGEoIHsgcHJvamVjdDogcHJvamVjdCB9KVxuICAgICAgICAuZW5kKClcbiAgICAgICAgLmlvKCcvci9wcm9qZWN0L2V4ZWN1dGUvY29kZScpXG4gICAgICAgIC5zaGFyZShydXNlci5nZXRDb29raWVzKCkpXG4gICAgICAgIC5kZWxheSgpXG4gICAgICAgIC5kYXRhKG1lcmdlKGRhdGEsIHsgcHJvamVjdDogcHJvamVjdCB9KSlcbiAgICAgICAgLmVuZCgpICk7XG4gICAgfSk7XG5cbiAgICAvLyBleGVjdXRlIGEgc2VyaWVzIG9mIHNlcXVlbnRpYWxseSBjaGFpbmVkIHRhc2tzIGluIHNlcXVlbmNlIGJhdGNoZXMgXG4gICAgLy8gd2l0aG91dCBvdmVybGFwLiBXb3JrcyBpbiBjb25qdW5jdGlvbiB3aXRoIC5kZWxheSgpICsgLmVuZCgpIG9yIGlmIG5vXG4gICAgLy8gLmVuZCgpIGlzIHVzZWRcbiAgICByZXR1cm4gZGVwbG95ci5waXBlbGluZShjYWxscyk7ICAgICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgYWxsIGNsaWVudC1zaWRlIGFuZCBzZXJ2ZXItc2lkZSByZXNvdXJjZXMgbWFpbnRhaW5lZCBieSBvciBvbiBcbiAgICogYmVoYWxmIG9mIGFuIGluc3RhbmNlIG9mIGBSQnJva2VyYC5cbiAgICpcbiAgICogQG1ldGhvZCBzaHV0ZG93blxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHdyYXBwaW5nIHRoZSByZXNvbHV0aW9uIG9mIGVpdGhlciBcInJlc29sdmVcIiBvciBcbiAgICogXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICAgXG4gIHNodXRkb3duOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb2plY3RzID0gdGhpcy5yZXNvdXJjZVRva2VuUG9vbC5xLnNsaWNlKCk7XG5cbiAgICB0aGlzLnJlc291cmNlVG9rZW5Qb29sLnEgPSBbXTtcbiAgICB0aGlzLmh0dHBLZWVwQWxpdmUuc3RvcCgpO1xuICAgIHRoaXMuZmx1c2goKTsgICAgICBcblxuICAgIHJldHVybiB0aGlzLnJ1c2VyLnJlbGVhc2UocHJvamVjdHMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVXb3JrZXI6IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgcmV0dXJuIFBvb2xlZFRhc2tXb3JrZXIubmV3KHRhc2ssIHRoaXMucnVzZXIpO1xuICB9ICBcbn0pO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cbnZhciBkZXBsb3lyICAgICAgICAgICAgID0gcmVxdWlyZSgnZGVwbG95cicpLFxuICAgIG1lcmdlICAgICAgICAgICAgICAgPSByZXF1aXJlKCdtZXJnZScpLFxuICAgIEJhc2UgICAgICAgICAgICAgICAgPSByZXF1aXJlKCdzZWxmaXNoJykuQmFzZSxcbiAgICBFdmVudEVtaXR0ZXIgICAgICAgID0gcmVxdWlyZSgnZGVwbG95ci9saWIvZW1pdHRlcicpLFxuICAgIFJUYXNrVG9rZW4gICAgICAgICAgPSByZXF1aXJlKCcuLi9ydGFzay10b2tlbicpLFxuICAgIFJUYXNrUXVldWUgICAgICAgICAgPSByZXF1aXJlKCcuLi91dGlsL3J0YXNrLXF1ZXVlJyksXG4gICAgTUFYX1RBU0tfUVVFVUVfU0laRSA9IDk5OTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgaGlnaC1sZXZlbCBwcm9ncmFtbWluZyBtb2RlbCBmb3IgYnVpbGRpbmcgRGVwbG95Ui1lbmFibGVkIFxuICogY2xpZW50IGFwcGxpY2F0aW9ucy4gQnkgdXNpbmcgUkJyb2tlciBhbiBhcHBsaWNhdGlvbiBkZXZlbG9wZXIgY2FuIGZvY3VzIFxuICogZW50aXJlbHkgb24gaW50ZWdyYXRpbmcgUiBBbmFseXRpY3MsIHdoaWxlIG9mZmxvYWRpbmcgdGhlIGNvbXBsZXhpdHkgb2YgXG4gKiBtYW5hZ2luZyBjbGllbnQtc2lkZSBBUEkgdGFzayBxdWV1ZXMgYW5kIHNlcnZlci1zaWRlIFIgc2Vzc2lvbiBsaWZlY3ljbGVzLlxuICpcbiAqIFRoZSBiYXNpYyBwcm9ncmFtbWluZyBtb2RlbCBmb3Igd29ya2luZyB3aXRoIFJCcm9rZXIgaXMgYXMgZm9sbG93czpcbiAqXG4gKiAxLiBEZWNpZGUgaWYgdGhlIFIgQW5hbHl0aWNzIHRhc2tzIGZvciB5b3VyIGFwcGxpY2F0aW9uIHNob3VsZCBleGVjdXRlIGFzOlxuICogICAgLSBEaXNjcmV0ZSB0YXNrczogYXV0aGVudGljYXRpb24gb3B0aW9uYWwsIGdyaWQgcmVzb3VyY2VzIGFsbG9jYXRlZCBhdCBcbiAqICAgICAgcnVudGltZSwgcmVzdWx0cyByZXR1cm5lZCBpbW1lZGlhdGVseSwgbm8gcGVyc2lzdGVuY2UuIEdvb2QgZm9yIFxuICogICAgICBwcm90b3R5cGluZyBhbmQgcHVibGljIGZhY2luZyBwcm9kdWN0aW9uIGRlcGxveW1lbnRzLlxuICogICAgLSBQb29sZWQgdGFza3M6IGF1dGhlbnRpY2F0aW9uIHJlcXVpcmVkLCBncmlkIHJlc291cmNlcyBwcmUtYWxsb2NhdGVkLCBcbiAqICAgICAgcmVzdWx0cyByZXR1cm5lZCBpbW1lZGlhdGVseSwgb3B0aW9uYWwgcGVyc2lzdGVuY2UgdG8gcmVwb3NpdG9yeS4gR29vZCBcbiAqICAgICAgZm9yIGVudGVycHJpc2UgcHJvZHVjdGlvbiBkZXBsb3ltZW50cywgY29uc2lzdGVudCBydW50aW1lLCBcbiAqICAgICAgaGlnaC10aHJvdWdocHV0IGVudmlyb25tZW50cy5cbiAqICAgIC0gQmFja2dyb3VuZCB0YXNrczogYXV0aGVudGljYXRpb24gcmVxdWlyZWQsIGdyaWQgcmVzb3VyY2VzIGFsbG9jYXRlZCBhdCBcbiAqICAgICAgcnVudGltZSwgcmVzdWx0cyBwZXJzaXN0ZWQgZm9yIGxhdGVyIHJldHJpZXZhbC4gR29vZCBmb3IgcGVyaW9kaWMsIFxuICogICAgICBzY2hlZHVsZWQgb3IgYmF0Y2ggcHJvY2Vzc2luZy5cbiAqIDIuIFVzZSB0aGUgZmFjdG9yaWVzIGRlZmluZWQgaW4gcmJyb2tlciB0byBjcmVhdGUgYW4gYXBwcm9wcmlhdGUgaW5zdGFuY2Ugb2YgXG4gKiAgICBgUkJyb2tlYHIuXG4gKiAzLiBEZWZpbmUgdGhlIFIgQW5hbHl0aWNzIHRhc2tzIGZvciB5b3VyIGFwcGxpY2F0aW9uIGFzIG9uZSBvciBtb3JlIGBSVGFza2AuXG4gKiA0LiBTdWJtaXQgeW91ciBgUlRhc2tgIHRvIGBSQnJva2VyYCBmb3IgZXhlY3V0aW9uLlxuICogNS4gSW50ZWdyYXRlIHRoZSByZXN1bHRzIG9mIHlvdXIgYFJUYXNrYCBmb3VuZCB3aXRoaW4gYC5jb21wbGV0ZSgpYFxuICpcbiAqIEBtb2R1bGUgcmJyb2tlci1lbmdpbmVcbiAqIEBmb3IgcmJyb2tlclxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKEV2ZW50RW1pdHRlciwge1xuXG4gICAvKipcbiAgICAqIFJlcHJlc2VudHMgYSBoaWdoLWxldmVsIHByb2dyYW1taW5nIG1vZGVsIGZvciBidWlsZGluZyBEZXBsb3lSLWVuYWJsZWRcbiAgICAqIGNsaWVudCBhcHBsaWNhdGlvbnMuXG4gICAgKlxuICAgICogQGNsYXNzIFxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbmZpZ3VyYXRpb24gb3B0aW9ucy4gICAgXG4gICAgKi9cbiAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIEV2ZW50RW1pdHRlci5pbml0aWFsaXplLmNhbGwodGhpcyk7XG5cbiAgICAgIHZhciBzZWxmICAgICAgICAgICAgICAgPSB0aGlzO1xuICAgICAgdGhpcy5jb25maWcgICAgICAgICAgICA9IGNvbmZpZztcbiAgICAgIHRoaXMuc2NvcGUgICAgICAgICAgICAgPSB0aGlzLmNvbmZpZy5jdHggfHwgdGhpczsgLy8gRXZlbnRFbWl0dGVyIGNvbnRleHRcbiAgICAgIHRoaXMuZW5naW5lU3RhcnRlZCAgICAgPSBmYWxzZTtcbiAgICAgIHRoaXMucGFyYWxsZWxUYXNrTGltaXQgPSB0aGlzLmNvbmZpZy5tYXhDb25jdXJyZW50VGFza0xpbWl0IHx8IDE7XG4gICAgICB0aGlzLnBlbmRpbmdMb3cgICAgICAgID0gUlRhc2tRdWV1ZS5uZXcoTUFYX1RBU0tfUVVFVUVfU0laRSk7XG4gICAgICB0aGlzLnBlbmRpbmdIaWdoICAgICAgID0gUlRhc2tRdWV1ZS5uZXcoTUFYX1RBU0tfUVVFVUVfU0laRSk7XG4gICAgICB0aGlzLnJlc291cmNlVG9rZW5Qb29sID0gUlRhc2tRdWV1ZS5uZXcoTUFYX1RBU0tfUVVFVUVfU0laRSk7XG5cbiAgICAgIC8vXG4gICAgICAvLyBDb25maWd1cmUgYGRlcGxveXJgIGNsaWVudCB3aXRoIHN1cHBsaWVkIHJ1bnRpbWUgc2V0dGluZ3MgYW5kIGNhdGNoIFxuICAgICAgLy8gYWxsIGBpb2AgaW50ZXJuYWwgZXJyb3JzLlxuICAgICAgLy8gICAgICBcbiAgICAgIGRlcGxveXIuY29uZmlndXJlKCB7IFxuICAgICAgICBob3N0OiBjb25maWcuaG9zdCwgXG4gICAgICAgIGNvcnM6IGNvbmZpZy5jb3JzLFxuICAgICAgICBsb2dnaW5nOiBjb25maWcubG9nZ2luZyxcbiAgICAgICAgYWxsb3dTZWxmU2lnbmVkU1NMQ2VydDogY29uZmlnLmFsbG93U2VsZlNpZ25lZFNTTENlcnQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihhcGksIHJlcykge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHJlcyk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIENvcnJlbGF0ZSB0aGUgcnVubmluZyB0YXNrIGNvdW50ZXIgYW5kIG90aGVyIHJ1bnRpbWUgc3RhdGlzdGljcy5cbiAgICAgICAqXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICB0aGlzLnJ1bnRpbWUgPSB7XG4gICAgICAgICBydW5uaW5nVGFza3M6IDAsXG5cbiAgICAgICAgIHRvdGFsczogeyBzdWNjZXNzOiAwLCBmYWlsdXJlOiAwIH0sXG5cbiAgICAgICAgIHN0YXRzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICBtYXhDb25jdXJyZW5jeTogc2VsZi5tYXhDb25jdXJyZW5jeSgpLFxuICAgICAgICAgICAgICAgdG90YWxUYXNrc1J1bjogdGhpcy50b3RhbHMuc3VjY2VzcyArIHRoaXMudG90YWxzLmZhaWx1cmUsXG4gICAgICAgICAgICAgICB0b3RhbFRhc2tzUnVuVG9TdWNjZXNzOiB0aGlzLnRvdGFscy5zdWNjZXNzLFxuICAgICAgICAgICAgICAgdG90YWxUYXNrc1J1blRvRmFpbHVyZTogdGhpcy50b3RhbHMuZmFpbHVyZSxcbiAgICAgICAgICAgICAgIHRvdGFsVGltZVRhc2tzT25Db2RlOiByZXMucmVzdWx0LnRpbWVPbkNvZGUsXG4gICAgICAgICAgICAgICB0b3RhbFRpbWVUYXNrc09uU2VydmVyOiByZXMucmVzdWx0LnRpbWVPblNlcnZlcixcbiAgICAgICAgICAgICAgIHRvdGFsVGltZVRhc2tzT25DYWxsOiByZXMucmVzdWx0LnRpbWVPbkNhbGwsXG4gICAgICAgICAgICAgICB0YXNrOiByZXMudGFza1xuICAgICAgICAgICAgfTtcbiAgICAgICAgIH0sXG5cbiAgICAgICAgIGNhbGlicmF0ZTogZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmdUYXNrcyA9IHRoaXMucnVubmluZ1Rhc2tzICsgZGlyZWN0aW9uO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nVGFza3MgPCAwKSB7XG4gICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmdUYXNrcyA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmdUYXNrcztcbiAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIC0tIGVtaXR0ZWQgYnkgc3ViY2xhc3NlcyBpbmRpY2F0aW5nIHdvcmtlcnMgY2FuIGJlZ2luIHdvcmsgLS1cbiAgICAgIHRoaXMub24oJ3JlYWR5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICB0aGlzLmVuZ2luZVN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAvLyBGbHVzaCB0aGUgcXVldWVzIHRvIGZvcmNlIHdvcmsuXG4gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFyYWxsZWxUYXNrTGltaXQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSWRsZSgpKSB7XG4gICAgICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSk7ICAgICAgXG4gICB9LFxuICAgXG4gICAvKipcbiAgICAqIFRlc3QgdGhlIGAvci9zZXJ2ZXIvaW5mb2AgZW5kcG9pbnQsIGV4cGVjdCBIVFRQIDIwMCBvdGh3cmlzZVxuICAgICpcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFRoZSBvcHRpb25hbCBjYWxsYmFja1xuICAgICogQGFwaSBwdWJsaWMgICAgXG4gICAgKi9cbiAgIHZhbGlkYXRlRW5kcG9pbnQ6IGZ1bmN0aW9uKGNiKSB7XG4gICAgICByZXR1cm4gZGVwbG95ci5pbygnL3Ivc2VydmVyL2luZm8nKVxuICAgICAgICAgICAgIC5jdHgodGhpcylcbiAgICAgICAgICAgICAudGltZW91dCgxMDAwICogMTApIFxuICAgICAgICAgICAgIC5lbmQoY2IpO1xuICAgfSxcblxuICAgb3duZXI6IGZ1bmN0aW9uKCkge1xuICAgICByZXR1cm4gdGhpcy5ydXNlcjtcbiAgIH0sXG5cbiAgIC8qKlxuICAgICogTGF1bmNoIGFuIGBSVGFza0FwcFNpbXVsYXRvcmAgc2ltdWxhdGlvbi4gVGhlIGBSVGFza2AgZGVmaW5lZCBieSB5b3VyIFxuICAgICogc2ltdWxhdGlvbiB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZXhlY3V0ZWQgYnkgdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgXG4gICAgKiBgUkJyb2tlcmAuXG4gICAgKlxuICAgICogTWFrZSBzdXJlIHRvIHJlZ2lzdGVyIHlvdXIgYC5jb21wbGV0ZSgpYCwgYC5lcnJvcigpYCwgYC5pZGxlKClgLCBhbmRcbiAgICAqIGAucHJvZ3Jlc3MoKWAgbGlzdGVuZXJzIGJlZm9yZSBzdGFydGluZyB5b3VyIHNpbXVsYXRpb24gaW4gb3JkZXIgdG8gXG4gICAgKiByZWNlaXZlIGFzeW5jaHJvbm91cyBjYWxsYmFja3MgaW4geW91ciBhcHBsaWNhdGlvbiB3aGVuIGBSVGFza2AgY29tcGxldGUgXG4gICAgKiBhbmQvb3IgdG8gcmVjZWl2ZSBydW50aW1lIHN1bW1hcnkgc3RhdGlzdGljcyBmcm9tIGBSQnJva2VyYCBhcyB0aGUgXG4gICAgKiBzaW11bGF0aW9uIHByb2NlZWRzLlxuICAgICpcbiAgICAqIEBtZXRob2Qgc2ltdWxhdGVBcHBcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBUaGUgQXBwbGljYXRpb24gU2ltdWxhdG9yIHRoYXQgaW1wbGVtZW50cyB0aGVcbiAgICAqIGBzaW11bGF0ZUFwcChSQnJva2VyKWAgbWV0aG9kLlxuICAgICogQGFwaSBwdWJsaWNcbiAgICAqL1xuICAgc2ltdWxhdGVBcHA6IGZ1bmN0aW9uKGFwcFNpbXVsYXRvcikge1xuICAgICAgaWYgKGFwcFNpbXVsYXRvcikge1xuICAgICAgICAgaWYgKHR5cGVvZiBhcHBTaW11bGF0b3Iuc2ltdWxhdGVBcHAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFwcFNpbXVsYXRvci5zaW11bGF0ZUFwcCh0aGlzKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZmVyZW5jZUVycm9yOiBcInNpbXVsYXRlQXBwXCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH0sXG5cbiAgIC8qKlxuICAgICogU3VibWl0IGFuIGBSVGFza2AgZm9yIGV4ZWN1dGlvbiB1bmRlciB0aGUgY29udHJvbCBvZiBgUkJyb2tlcmAuIElmIFxuICAgICogcHJpb3JpdHkgaXMgaW5kaWNhdGVkLCBwcmlvcml0eSB0YXNrcyBhcmUgYXV0b21hdGljYWxseSBtb3ZlZCB0byB0aGUgZnJvbnRcbiAgICAqIG9mIHRoZSBxdWV1ZSwgYWhlYWQgb2YgYWxsIHN0YW5kYXJkIHRhc2tzIHRoYXQgYXJlIGFscmVhZHkgcGVuZGluZyBcbiAgICAqIGV4ZWN1dGlvbiBieSB0aGUgYnJva2VyLlxuICAgICpcbiAgICAqIEBtZXRob2Qgc3VibWl0ICAgXG4gICAgKiBAcGFyYW0ge1JUYXNrfSBUaGUgYFJUYXNrYCBhc3NvY2lhdGVkIHdpdGggdGhpcyBzdWJtaXNzaW9uLlxuICAgICogQHBhcmFtIHtCb29sZWFufSAob3B0aW9uYWwpIE1hcmsgdGhpcyB0YXNrIGFzIGhhdmluZyBwcmlvcml0eS5cbiAgICAqIEByZXR1cm4ge1JUYXNrVG9rZW59IFRoZSBoYW5kbGUgdG8gYW4gYFJUYXNrYCBsaXZlIG9uIGFuIGBSQnJva2VyYC5cbiAgICAqIEBhcGkgcHVibGljXG4gICAgKi9cbiAgIHN1Ym1pdDogZnVuY3Rpb24odGFzaywgcHJpb3JpdHkpIHtcbiAgICAgIC8vIGB3b3JrZXJgIGlzIGEgZGVmcmVkIG9iamVjdC4gSXQgaXMgZWl0aGVyIGN1cnJlbnRseSB3b3JraW5nIG9yIHF1ZXVlZCBcbiAgICAgIC8vIHVwIHdpdGggYW4gYXBwb2ludG1lbnQgdG8gd29yayBpbiB0aGUgZnV0dXJlIG9uY2UgYHJ1bigpYCBpcyBjYWxsZWQgICBcbiAgICAgIHZhciB3b3JrZXIgICAgPSB0aGlzLmNyZWF0ZVdvcmtlcih0YXNrKSxcbiAgICAgICAgICB0YXNrVG9rZW4gPSBSVGFza1Rva2VuLm5ldyh3b3JrZXIpO1xuXG4gICAgICBpZiAocHJpb3JpdHkpIHtcbiAgICAgICAgIHRoaXMucGVuZGluZ0hpZ2gub2ZmZXIod29ya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLnBlbmRpbmdMb3cub2ZmZXIod29ya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gc3RhcnQgdGhlIHRhc2sgd29yayAgICAgIFxuICAgICAgdGhpcy5ydW4oKTtcblxuICAgICAgcmV0dXJuIHRhc2tUb2tlbjtcbiAgIH0sXG5cbiAgIC8qKlxuICAgICogUmV0dXJucyB0aGUgdGFzayBleGVjdXRpb24gY29uY3VycmVuY3kgbGV2ZWxzIGVuZm9yY2VkIGZvciB0aGlzIGluc3RhbmNlIFxuICAgICogb2YgYFJCcm9rZXJgLlxuICAgICpcbiAgICAqIEBtZXRob2QgbWF4Q29uY3VycmVuY3lcbiAgICAqIEByZXR1cm4ge051bWJlcn0gVGhlIHRhc2sgZXhlY3V0aW9uIGNvbmN1cnJlbmN5IGxldmVscy5cbiAgICAqIEBhcGkgcHVibGljXG4gICAgKi9cbiAgIG1heENvbmN1cnJlbmN5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmFsbGVsVGFza0xpbWl0O1xuICAgfSxcblxuICAgLyoqXG4gICAgKiBGbHVzaGVzIGFsbCBwZW5kaW5nIGBSVGFza2AgZnJvbSBxdWV1ZXMgbWFpbnRhaW5lZCBieSBgUkJyb2tlcmAuIEZsdXNoaW5nIFxuICAgICogYFJUYXNrYCBxdWV1ZXMgZW5zdXJlcyB0aGF0IHF1ZXVlZCB0YXNrcyB3aWxsIG5vdCBiZSBleGVjdXRlZCBieSBcbiAgICAqIGBSQnJva2VyYC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGZsdXNoXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9IE9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgYFJCcm9rZXJgIHN0YXR1cyBpbmRpY2F0aW5nIFxuICAgICogdGhlIG51bWJlciBvZiBjdXJyZW50bHkgcXVldWVkIGFuZCBleGVjdXRpbmcgYFJUYXNrYC5cbiAgICAqIEBhcGkgcHVibGljXG4gICAgKi9cbiAgIGZsdXNoOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucGVuZGluZ0hpZ2guY2xlYXIoKTtcbiAgICAgIHRoaXMucGVuZGluZ0xvdy5jbGVhcigpO1xuXG4gICAgICByZXR1cm4gdGhpcy5zdGF0dXMoKTtcbiAgIH0sXG4gICBcbiAgIC8qKlxuICAgICogSW5kaWNhdGVzIGlmIGN1cnJlbnQgYFJCcm9rZXJgIGluc3RhbmNlIGlzIHN0aWxsIGNvbm5lY3RlZCB0byB0aGUgRGVwbG95UiBcbiAgICAqIHNlcnZlci4gQSBjb25uZWN0aW9uIG1heSBiZSBsb3N0IGZvciBhIG51bWJlciBvZiByZWFzb25zLCBmb3IgZXhhbXBsZSwgZHVlIFxuICAgICogdG8gYSBkcm9wcGVlZCBuZXR3b3JrIGNvbm5lY3Rpb24gYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlciBvciBpZiB0aGUgXG4gICAgKiBEZXBsb3lSIHNlcnZlciBpdHNlbGYgZ29lcyBkb3duLlxuICAgICpcbiAgICAqIEBtZXRob2QgaXNDb25uZWN0ZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3aXRoIGEgYEJvb2xlYW5gIHZhbHVlIGNvbm5lY3Rpb24gc3RhdHVzLiAgICBcbiAgICAqIEBhcGkgcHVibGljXG4gICAgKi9cbiAgIGlzQ29ubmVjdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0ZXN0ID0gdGhpcy5ydXNlciA/IHRoaXMucnVzZXIuaW8oJy9yL3VzZXIvYWJvdXQnKSA6XG4gICAgICAgICAgICAgICAgICAgZGVwbG95ci5pbygnL3Ivc2VydmVyL2luZm8nKVxuXG4gICAgICAvL1xuICAgICAgLy8gKGF1dGhlbnRpY2F0ZWQgfCBhbm9ueW1vdXMpIGNoZWNrc1xuICAgICAgLy8gYXV0aGVudGljYXRlZCAgLSBUZXN0IGNvbm5lY3Rpb24gdG8gYXV0aGVudGljYXRlZCBIVFRQIHNlc3Npb25cbiAgICAgIC8vIGFub255bW91cyAtIFRlc3QgdGhlIHRoYXQgdGhlIHNlcnZlciBpcyB1cC5cbiAgICAgIC8vIFxuICAgICAgcmV0dXJuIHRlc3RcbiAgICAgICAgICAgICAgICAuZ2xvYmFsKGZhbHNlKSAvLyBzdXByZXNzIGdsb2JhbCBlcnJvciBldmVudHMgZm9yIHRoaXMgYGlvYFxuICAgICAgICAgICAgICAgIC5wcm9taXNlKClcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbigpIHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICB9LFxuXG4gICAvKipcbiAgICAqIFJldHVybnMgc3RhdHVzIGluZGljYXRpbmcgY3VycmVudCBgUlRhc2tgIGFjdGl2aXR5IG9uIGBSQnJva2VyYC5cbiAgICAqXG4gICAgKlxuICAgICogQG1ldGhvZCBzdGF0dXNcbiAgICAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyBgUkJyb2tlcmAgc3RhdHVzIGluZGljYXRpbmcgdGhlIFxuICAgICogbnVtYmVyIG9mIGN1cnJlbnRseSBxdWV1ZWQgYW5kIGV4ZWN1dGluZyBgUlRhc2tgLlxuICAgICogQGFwaSBwdWJsaWNcbiAgICAqL1xuICAgc3RhdHVzOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFBlbmRpbmcgdGFza3MgaW5jbHVkZSBhbGwgdGFza3Mgb24gaGlnaCBhbmQgbG93IHByaW9yaXR5IHF1ZXVlcy5cbiAgICAgIHZhciBwZW5kaW5nICA9IHRoaXMucGVuZGluZ0hpZ2guc2l6ZSgpICsgdGhpcy5wZW5kaW5nTG93LnNpemUoKSxcbiAgICAgICAgIGV4ZWN1dGluZyA9IHRoaXMucGFyYWxsZWxUYXNrTGltaXQgLSB0aGlzLnJ1bnRpbWUucnVubmluZ1Rhc2tzLFxuICAgICAgICAgaWRsZSAgICAgID0gdGhpcy5pc0lkbGUoKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIHBlbmRpbmc6IHBlbmRpbmcsXG4gICAgICAgICBleGVjdXRpbmc6IGV4ZWN1dGluZyxcbiAgICAgICAgIGlkbGU6IGlkbGUsXG4gICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1xcblJCcm9rZXJTdGF0dXM6IFsgcGVuZGluZyA9IFwiJyArIHBlbmRpbmcgKyAnXCIgXSAnICtcbiAgICAgICAgICAgICAgICdbIGV4ZWN1dGluZyA9IFwiJyArIGV4ZWN1dGluZyArICdcIiBdICcgK1xuICAgICAgICAgICAgICAgJ1sgaWRsZSA9IFwiJyArIGlkbGUgKyAnXCIgXVxcbic7XG4gICAgICAgICB9XG4gICAgICB9O1xuICAgfSxcblxuICAgLyoqXG4gICAgKiBVc2VkIHRvIGRldGVybWluZSBpZiBhbiBgUkJyb2tlcmAgaW5zdGFuY2UgaXMgaWRsZSB3aGljaCBjYW4gYmUgXG4gICAgKiBwYXJ0aWN1bGFybHkgdXNlZnVsIGFoZWFkIG9mIGNhbGxzIHRvIGBzaHV0ZG93bigpYC4gQW5vdGhlciBvcHRpb25zIGlzIHRvXG4gICAgKiBiaW5kIGEgbGlzdGVuZXIgdG8gdGhlIGAuaXNJZGxlKClgIG1ldGhvZC5cbiAgICAqIFxuICAgICogQG1ldGhvZCBpc0lkbGVcbiAgICAqIEByZXR1cm4ge0Jvb2xlYW59IElmIHRoZSBgUkJyb2tlcmAgaW5zdGFuY2UgaXMgaWRsZS5cbiAgICAqIEBhcGkgcHVibGljXG4gICAgKi9cbiAgIGlzSWRsZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKHRoaXMucnVudGltZS5ydW5uaW5nVGFza3MgPT09IDAgJiZcbiAgICAgICAgIHRoaXMucGVuZGluZ0xvdy5pc0VtcHR5KCkgJiYgdGhpcy5wZW5kaW5nSGlnaC5pc0VtcHR5KCkpO1xuICAgfSxcblxuICAgLyoqXG4gICAgKiBBbiBpbml0aWFsaXphdGlvbiBsaWZlY3ljbGUgbGlzdGVuZXIgZmlyZWQgZHVyaW5nIGNvbnN0cnVjdGlvbi4gXG4gICAgKlxuICAgICogQG1ldGhvZCBlcnJvclxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLiAgICBcbiAgICAqIEByZXR1cm4ge1JCcm9rZXJ9IFRoZSByZWZyZW5jZSB0byBgdGhpc2AgYFJCcm9rZXJgIHVzZWQgZm9yIGNoYWluaW5nLlxuICAgICogQGFwaSBwdWJsaWNcbiAgICAqL1xuICAgcmVhZHk6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0aGlzLm9uKCdyZWFkeScsIGZuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LCAgICAgIFxuXG4gICAvKipcbiAgICAqIEEgZmFpbHVyZSBsaXN0ZW5lciBmb3IgYWxsIHRhc2tzIHN1Ym1pdHRlZCBvbiBiZWhhbGYgb2YgYHRoaXNgIGBSQnJva2VyYC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGVycm9yXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uICAgIFxuICAgICogQHJldHVybiB7UkJyb2tlcn0gVGhlIHJlZnJlbmNlIHRvIGB0aGlzYCBgUkJyb2tlcmAgdXNlZCBmb3IgY2hhaW5pbmcuXG4gICAgKiBAYXBpIHB1YmxpY1xuICAgICovXG4gICBlcnJvcjogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRoaXMub24oJ2Vycm9yJywgZm4pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sXG5cbiAgIC8qKlxuICAgICogQSBub3RpZmljYXRpb24gbGlzdGVuZXIgaW5kaWNhdGluZyB3YXJuaW5ncyBhYm91dCBkdWJpb3VzIHJ1bnRpbWUgYmVoYXZpb3JcbiAgICAqIHN1Ym1pdHRlZCBvbiBiZWhhbGYgb2YgYHRoaXNgIGBSQnJva2VyYC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHdhcm5pbmdcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFRoZSBjYWxsYmFjayBmdW5jdGlvbi4gICAgXG4gICAgKiBAcmV0dXJuIHtSQnJva2VyfSBUaGUgcmVmcmVuY2UgdG8gYHRoaXNgIGBSQnJva2VyYCB1c2VkIGZvciBjaGFpbmluZy5cbiAgICAqIEBhcGkgcHVibGljXG4gICAgKi9cbiAgIHdhcm5pbmc6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0aGlzLm9uKCd3YXJuaW5nJywgZm4pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sICAgXG5cbiAgIC8qKlxuICAgICogQSBjb21wbGV0aW9uIGxpc3RlbmVyIGZvciBhbGwgdGFza3Mgc3VibWl0dGVkIG9uIGJlaGFsZiBvZiBgdGhpc2AgXG4gICAgKiBgUkJyb2tlcmAuXG4gICAgKlxuICAgICogQG1ldGhvZCBjb21wbGV0ZVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLiAgICBcbiAgICAqIEByZXR1cm4ge1JCcm9rZXJ9IFRoZSByZWZyZW5jZSB0byBgdGhpc2AgYFJCcm9rZXJgIHVzZWQgZm9yIGNoYWluaW5nLlxuICAgICogQGFwaSBwdWJsaWNcbiAgICAqL1xuICAgY29tcGxldGU6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0aGlzLm9uKCdjb21wbGV0ZScsIGZuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICAvKipcbiAgICAqIEEgbm90aWZpY2F0aW9uIGxpc3RlbmVyIGluZGljYXRpbmcgdGhhdCBgdGhpc2AgYFJicm9rZXJgIGlzIHN0aWxsIGFjdGl2ZSBcbiAgICAqIGFuZCB0aGVyZSBhcmUgY3VycmVudGx5IG5vIGBSVGFza3NgIHJ1bm5pbmcgb3IgaW4gdGhlIHdhaXQgcXVldWUuXG4gICAgKlxuICAgICogQG1ldGhvZCBpZGxlXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uICAgIFxuICAgICogQHJldHVybiB7UkJyb2tlcn0gVGhlIHJlZnJlbmNlIHRvIGB0aGlzYCBgUkJyb2tlcmAgdXNlZCBmb3IgY2hhaW5pbmcuXG4gICAgKiBAYXBpIHB1YmxpY1xuICAgICovXG4gICBpZGxlOiBmdW5jdGlvbihmbikge1xuICAgICAgdGhpcy5vbignaWRsZScsIGZuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9LFxuXG4gICAvKipcbiAgICAqIEEgbm90aWZpY2F0aW9uIGxpc3RlbmVyIGZvciBgUkJyb2tlcmAgcnVudGltZSBzdGF0aXN0aWNzIG9mIGEgYFJUYXNrYC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHByb2dyZXNzXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgKiBAcmV0dXJuIHtSQnJva2VyfSBUaGUgcmVmcmVuY2UgdG8gYHRoaXNgIGBSQnJva2VyYCB1c2VkIGZvciBjaGFpbmluZy5cbiAgICAqIEBhcGkgcHVibGljXG4gICAgKi9cbiAgIHByb2dyZXNzOiBmdW5jdGlvbihmbikge1xuICAgICAgdGhpcy5vbigncHJvZ3Jlc3MnLCBmbik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgfSxcblxuICAgLyoqXG4gICAgKiBBIG5vdGlmaWNhdGlvbiBsaXN0ZW5lciBmb3IgYFJCcm9rZXJgIHJ1bnRpbWUgc3RhdGlzdGljcyBvZiBhIGBSVGFza2AuXG4gICAgKlxuICAgICogQG1ldGhvZCBwcm9ncmVzc1xuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICogQHJldHVybiB7UkJyb2tlcn0gVGhlIHJlZnJlbmNlIHRvIGB0aGlzYCBgUkJyb2tlcmAgdXNlZCBmb3IgY2hhaW5pbmcuXG4gICAgKiBAYXBpIHB1YmxpY1xuICAgICovXG4gICBzdGFydDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRoaXMub24oJ3N0YXJ0JywgZm4pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgIH0sICAgXG5cbiAgIC8qKlxuICAgICogRG8gdGhlIHRhc2sgd29yay5cbiAgICAqXG4gICAgKiBAYXBpIHByaXZhdGVcbiAgICAqL1xuICAgcnVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcywgbmV4dFdvcmtlciwgcmVzb3VyY2VUb2tlbjtcblxuICAgICAgaWYgKHRoaXMuZW5naW5lU3RhcnRlZCAmJlxuICAgICAgICAgIXRoaXMucmVzb3VyY2VUb2tlblBvb2wuaXNFbXB0eSgpICYmXG4gICAgICAgICAoIXRoaXMucGVuZGluZ0xvdy5pc0VtcHR5KCkgfHwgIXRoaXMucGVuZGluZ0hpZ2guaXNFbXB0eSgpKSkge1xuXG4gICAgICAgICBuZXh0V29ya2VyID0gdGhpcy5wZW5kaW5nSGlnaC50YWtlKCkgfHwgdGhpcy5wZW5kaW5nTG93LnRha2UoKTtcblxuICAgICAgICAgdGhpcy5ydW50aW1lLmNhbGlicmF0ZSgrMSk7XG5cbiAgICAgICAgIHRoaXMuZW1pdCgnc3RhcnQnLCBuZXh0V29ya2VyLnRhc2spO1xuICAgICAgICAgXG4gICAgICAgICBuZXh0V29ya2VyLndvcmsodGhpcy5yZXNvdXJjZVRva2VuUG9vbC50YWtlKCkpIC8vIHN0YXJ0IHdvcmtpbmcuLi4uIFxuICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICBzZWxmLnJ1bnRpbWUudG90YWxzLnN1Y2Nlc3MrKztcbiAgICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIHNlbGYucnVudGltZS5zdGF0cyhyZXMpKTtcbiAgICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdjb21wbGV0ZScsIHJlcy50YXNrLCByZXMucmVzdWx0KTtcblxuICAgICAgICAgICAgICAgICAvLyAtLSBpbmRpdmlkdWFsIFJUYXNrIG5vdGlmaWNhdGlvbnMgLS0gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICB9LmJpbmQobmV4dFdvcmtlciksIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICB2YXIgcmVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgdGFzazogdGhpcy50YXNrLFxuICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IC8vIHRhc2sgZXJyb3IgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy50YXNrLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uQ29kZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lT25TZXJ2ZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uQ2FsbDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICBzZWxmLnJ1bnRpbWUudG90YWxzLmZhaWx1cmUrKztcbiAgICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIHNlbGYucnVudGltZS5zdGF0cyhyZXMpKTsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdlcnJvcicsIG1lcmdlKGVyciwgeyB0YXNrOiB0aGlzLnRhc2sgfSkpO1xuICAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ2NvbXBsZXRlJywgcmVzLnRhc2ssIHJlcy5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgLy8gLS0gaW5kaXZpZHVhbCBSVGFzayBub3RpZmljYXRpb25zIC0tXG4gICAgICAgICAgICAgICAgIHRoaXMucmVqZWN0KG1lcmdlKGVyciwgeyB0YXNrOiB0aGlzLnRhc2sgfSkpO1xuICAgICAgICAgICAgIH0uYmluZChuZXh0V29ya2VyKSlcbiAgICAgICAgICAgICAuZW5zdXJlKGZ1bmN0aW9uKHYpIHsgLy8gZmluYWxseVxuICAgICAgICAgICAgICAgICBzZWxmLnJ1bnRpbWUuY2FsaWJyYXRlKC0xKTtcbiAgICAgICAgICAgICAgICAgc2VsZi5yZXNvdXJjZVRva2VuUG9vbC5vZmZlcih0aGlzLnJlc291cmNlVG9rZW4pO1xuICAgICAgICAgICAgICAgICBzZWxmLnJ1bigpO1xuXG4gICAgICAgICAgICAgICAgIC8vIC0tIG5vdGlmeSBhbGwgdGFza3Mgc3VibWl0dGVkIGhhdmUgY2FtZSB0byBjb21wbGV0aW9uIC0tICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNJZGxlKCkpIHsgc2VsZi5lbWl0KCdpZGxlJyk7IH1cbiAgICAgICAgICAgICB9LmJpbmQobmV4dFdvcmtlcikpO1xuICAgICAgfVxuICAgfVxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cbnZhciBCYXNlID0gcmVxdWlyZSgnc2VsZmlzaCcpLkJhc2U7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGhhbmRsZSB0byBhbiBgUlRhc2tgIGxpdmUgb24gYW4gYFJCcm9rZXJgLlxuICpcbiAqIEBtb2R1bGUgcnRhc2stdG9rZW5cbiAqIEBmb3IgcmJyb2tlclxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKHtcblxuICAgIC8qKlxuICAgICAqIFJlcHJlc2VudHMgYSBoYW5kbGUgdG8gYW4gYFJUYXNrYCBsaXZlIG9uIGFuIGBSQnJva2VyYC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge1JUYXNrfSBUaGUgdGFzayB3b3JrZXIuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZSh3b3JrZXIpIHtcbiAgICAgICAgdGhpcy53b3JrZXIgICAgPSB3b3JrZXI7XG4gICAgICAgIHRoaXMuY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKiAgICBcbiAgICAgKiBUZXJtaW5hdGVzIGB0aGlzYCBydW5uaW5nIHRhc2suXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNhbmNlbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gUGVybWlzc2lvbiB0byBpbnRlcnJ1cHQgdGFzayBpZiBpdCBpcyBydW5uaW5nLlxuICAgICAqIEByZXR1cm4ge1JUYXNrVG9rZW59IGZvciBjaGFpbmluZy5cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGNhbmNlbDogZnVuY3Rpb24oaW50ZXJydXB0KSB7XG4gICAgICAgIC8vIFJUYXNrIGNvbXBsZXRlZCAocmVzb2x2ZWR8cmVqZWN0ZWQpLCBjYW4gbm90IGJlIGNhbmNlbGxlZC5cbiAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0aGlzLndvcmtlci50ZXJtaW5hdGUoaW50ZXJydXB0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuY2VsbGVkO1xuICAgIH0sXG5cbiAgICAvKiogICAgXG4gICAgICogUmV0dXJucyB0aGUgYFJUYXNrYCBhc3NvY2lhdGVkIHdpdGggdGhpcyBgUlRhc2tUb2tlbmAuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGdldFRhc2tcbiAgICAgKiBAcmV0dXJuIHtSVGFza1Rva2VufSBmb3IgY2hhaW5pbmcuXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBnZXRUYXNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud29ya2VyLnRhc2s7XG4gICAgfSxcblxuICAgIC8qKiAgICBcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGlzIHRhc2sgY29tcGxldGVkLiBDb21wbGV0aW9uIG1heSBiZSBkdWUgdG8gbm9ybWFsIFxuICAgICAqIHRlcm1pbmF0aW9uLCBhbiBleGNlcHRpb24sIG9yIGNhbmNlbGxhdGlvbiAtLSBpbiBhbGwgb2YgdGhlc2UgY2FzZXMsIFxuICAgICAqIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGB0cnVlYC5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkICBcbiAgICAgKiBAbWV0aG9kIGlzRG9uZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IElmIGB0aGlzYCB0YXNrIGlzIGNvbXBsZXRlZC5cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzRG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc1BlbmRpbmcoKTtcbiAgICB9LFxuXG4gICAgLyoqICAgIFxuICAgICAqIFJldHVybnMgYGZhbHNlYCBpZiB0aGlzIHRhc2sgY29tcGxldGVkLiBDb21wbGV0aW9uIG1heSBiZSBkdWUgdG8gbm9ybWFsIFxuICAgICAqIHRlcm1pbmF0aW9uLCBhbiBleGNlcHRpb24sIG9yIGNhbmNlbGxhdGlvbiAtLSBpbiBhbGwgb2YgdGhlc2UgY2FzZXMsIFxuICAgICAqIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGB0cnVlYC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgaXNQZW5kaW5nXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoaXMgdGFzayBoYXMgbm90IHlldCBiZWVuIGNvbXBsZXRlZC5cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGlzUGVuZGluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmtlci5pc1BlbmRpbmcoKTtcbiAgICB9LFxuXG4gICAgLyoqICAgIFxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoaXMgdGFzayB3YXMgY2FuY2VsbGVkIGJlZm9yZSBpdCBjb21wbGV0ZWQgbm9ybWFsbHkuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGlzQ2FuY2VsbGVkXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoaXMgdGFzayB3YXMgY2FuY2VsbGVkIGJlZm9yZSBpdCBjb21wbGV0ZWQuXG4gICAgICogQGFwaSBwdWJsaWNcbiAgICAgKi9cbiAgICBpc0NhbmNlbGxlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbmNlbGxlZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGAucHJvbWlzZSgpYCBtZXRob2QgcmV0dXJucyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBQcm9taXNlIHRoYXQgaXMgXG4gICAgICogcmVzb2x2ZWQgb25jZSB0aGlzIHRhc2sgaGFzIGNvbXBsZXRlZC5cbiAgICAgKiAgIFxuICAgICAqIEBtZXRob2QgcHJvbWlzZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgXG4gICAgICogb3IgXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHByb21pc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53b3JrZXIuZGVmZXIucHJvbWlzZTtcbiAgICB9XG59KTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIEJhc2UgICAgID0gcmVxdWlyZSgnc2VsZmlzaCcpLkJhc2UsXG4gICAgRW51bSAgICAgPSByZXF1aXJlKCdlbnVtJyksXG4gICAgdGFza0VudW0gPSBuZXcgRW51bShbJ0RJU0NSRVRFJywgJ1BPT0xFRCcsICdCQUNLR1JPVU5EJ10sICdSVGFza1R5cGUnKTtcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIHNldCBvZiBgUlRhc2tgLlxuICpcbiAqIEBtb2R1bGUgcnRhc2stdHlwZVxuICogQGZvciByYnJva2VyXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoe1xuICAgIC8qKlxuICAgICAqIERpc2NyZXRlIHRhc2suXG4gICAgICovXG4gICAgRElTQ1JFVEU6IHRhc2tFbnVtLkRJU0NSRVRFLFxuXG4gICAgLyoqXG4gICAgICogUG9vbGVkIHRhc2suXG4gICAgICovXG4gICAgUE9PTEVEOiB0YXNrRW51bS5QT09MRUQsXG5cbiAgICAvKipcbiAgICAgKiBCYWNrZ3JvdW5kIHRhc2suXG4gICAgICovXG4gICAgQkFDS0dST1VORDogdGFza0VudW0uQkFDS0dST1VORFxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIEJhc2UgICAgICA9IHJlcXVpcmUoJ3NlbGZpc2gnKS5CYXNlLFxuICAgIFJUYXNrVHlwZSA9IHJlcXVpcmUoJy4uL3J0YXNrLXR5cGUnKSxcbiAgICBSVGFzayAgICAgPSByZXF1aXJlKCcuL3J0YXNrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoUlRhc2ssIHtcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgIFJUYXNrLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwcm9wcywgUlRhc2tUeXBlLkJBQ0tHUk9VTkQpO1xuICAgIH0sXG5cbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAnQmFja2dyb3VuZFRhc2s6ICcgKyBSVGFzay50b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH1cbn0pOyIsIi8qIVxuICogQ0NvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSAgICAgID0gcmVxdWlyZSgnc2VsZmlzaCcpLkJhc2UsXG4gICAgUlRhc2tUeXBlID0gcmVxdWlyZSgnLi4vcnRhc2stdHlwZScpLFxuICAgIFJUYXNrICAgICA9IHJlcXVpcmUoJy4vcnRhc2snKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlLmV4dGVuZChSVGFzaywge1xuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgUlRhc2suaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHByb3BzLCBSVGFza1R5cGUuRElTQ1JFVEUpO1xuICAgIH0sXG5cbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAnRGlzY3JldGVUYXNrOiAnICsgUlRhc2sudG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICB9XG59KTtcbiIsIi8qIVxuICogQ29weXJpZ2h0IChDKSAyMDEwLTIwMTYsIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIHRlcm1zIG9mIFZlcnNpb24gMi4wIG9mIHRoZVxuICogQXBhY2hlIExpY2Vuc2UuIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBXSVRIT1VUXG4gKiBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRZLCBJTkNMVURJTkcgVEhPU0UgT0YgTk9OLUlORlJJTkdFTUVOVCxcbiAqIE1FUkNIQU5UQUJJTElUWSBPUiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gUGxlYXNlIHJlZmVyIHRvIHRoZVxuICogQXBhY2hlIExpY2Vuc2UgMi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlICAgICAgPSByZXF1aXJlKCdzZWxmaXNoJykuQmFzZSxcbiAgICBSVGFza1R5cGUgPSByZXF1aXJlKCcuLi9ydGFzay10eXBlJyksXG4gICAgUlRhc2sgICAgID0gcmVxdWlyZSgnLi9ydGFzaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKFJUYXNrLCB7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICBSVGFzay5pbml0aWFsaXplLmNhbGwodGhpcywgcHJvcHMsIFJUYXNrVHlwZS5QT09MRUQpO1xuICAgIH0sICAgICAgICBcblxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICdQb29sZWRUYXNrOiAnICsgUlRhc2sudG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICB9XG59KTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSAgPSByZXF1aXJlKCdzZWxmaXNoJykuQmFzZSxcbiAgICBtZXJnZSA9IHJlcXVpcmUoJ21lcmdlJyk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbnkgUiBBbmFseXRpY3MgdGFzayBmb3IgZXhlY3V0aW9uIG9uIGFuIGBSQnJva2VyYC5cbiAqXG4gKiBAbW9kdWxlIHJ0YXNrXG4gKiBAZm9yIHJicm9rZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBCYXNlLmV4dGVuZCh7XG5cbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIGFueSBSIEFuYWx5dGljcyB0YXNrIGZvciBleGVjdXRpb24gb24gYW4gYFJCcm9rZXJgLlxuICAgICAqXG4gICAgICogQGNsYXNzXG4gICAgICogQGNvbnN0cnVjdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBUaGUgdGFzayBwcm9wZXJ0aWVzIG9iamVjdCBoYXNoLlxuICAgICAqL1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUocHJvcHMsIHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG5cbiAgICAgICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwcm9wcykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGluZGV4LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIGNsb25lIG9mIHRoZSBgUlRhc2tgIERlcGxveVIgQVBJIHByb3BlcnRpZXMgYXMgYSBmbGF0IG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEEgY2xvbmUgb2YgdGhlIGBSVGFza2AgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBzZXJpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGFzayA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMpLmZpbHRlcihmdW5jdGlvbihrZXkpIHsgLy8gYmxhY2tsaXN0ICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIChbJ3R5cGUnLCAndG9rZW4nXS5pbmRleE9mKGtleSkgPT09IC0xKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICB0YXNrW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBtZXJnZSh0cnVlLCB0YXNrKTtcbiAgICB9LFxuXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3V0ICA9ICcnLFxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuXG4gICAgICAgIGZvciAodmFyIG8gaW4ga2V5cykge1xuICAgICAgICAgICAgb3V0ICs9ICcgWyAnICsga2V5c1tvXSArICcgPSBcIicgKyB0aGlzW2tleXNbb11dICsgJ1wiIF0nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59KTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cbiBcbnZhciBCYXNlID0gcmVxdWlyZSgnc2VsZmlzaCcpLkJhc2U7XG5cbnZhciBSVGFza1F1ZXVlID0gQmFzZS5leHRlbmQoe1xuICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGNhcGFjaXR5KSB7XG4gICAgICB0aGlzLmNhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgICB0aGlzLnEgICAgICAgID0gW107XG4gICB9LCBcblxuICAgLyoqXG4gICAgKiBJbnNlcnRzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBhdCB0aGUgdGFpbCBvZiB0aGlzIHF1ZXVlIGlmIGl0IGlzIHBvc3NpYmxlIFxuICAgICogdG8gZG8gc28gaW1tZWRpYXRlbHkgd2l0aG91dCBleGNlZWRpbmcgdGhlIHF1ZXVlJ3MgY2FwYWNpdHksIHJldHVybmluZyBcbiAgICAqIGBgYHRydWVgYGAgdXBvbiBzdWNjZXNzIGFuZCBgYGBmYWxzZWBgYCBpZiB0aGlzIHF1ZXVlIGlzIGZ1bGwuXG4gICAgKi9cbiAgIG9mZmVyOiBmdW5jdGlvbiAocnRhc2spIHtcbiAgICAgIHZhciBhY2NlcHRpbmcgPSB0aGlzLnNpemUoKSA8IHRoaXMuY2FwYWNpdHk7XG5cbiAgICAgIGlmIChhY2NlcHRpbmcpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnEucHVzaChydGFzayk7ICAgICAgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NlcHRpbmc7IC8vIFRydWUgaWYgYWRkZWQgRmFsc2Ugb3RoZXJ3aXNlXG4gICB9LFxuXG4gICAvKipcbiAgICAqIFJldHJpZXZlcyBhbmQgcmVtb3ZlcyB0aGUgaGVhZCBvZiB0aGlzIHF1ZXVlLlxuICAgICovXG4gICB0YWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucS5zaGlmdCgpO1xuICAgfSxcblxuICAgLyoqXG4gICAgKiBSZXRyaWV2ZXMsIGJ1dCBkb2VzIG5vdCByZW1vdmUsIHRoZSBoZWFkIG9mIHRoaXMgcXVldWUsIG9yIHJldHVybnMgYFxuICAgICogYGBudWxsYGAgaWYgdGhpcyBxdWV1ZSBpcyBlbXB0eS5cbiAgICAqL1xuICAgcGVlazogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnFbMF07XG4gICB9LFxuXG4gICAvKipcbiAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHF1ZXVlLlxuICAgICovXG4gICBzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5xLmxlbmd0aDtcbiAgIH0sXG5cbiAgIC8qKlxuICAgICogUmV0dXJucyBgYGB0cnVlYGBgIGlmIHRoaXMgY29sbGVjdGlvbiBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gcmV0dXJucyBzaXplKCkgPT09IDAuXG4gICAgKi9cbiAgIGlzRW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbiAgIH0sXG5cbiAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnEubGVuZ3RoID0gMDtcbiAgIH0sXG5cbiAgIGl0ZXI6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5xLmZvckVhY2goZm4pO1xuICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUlRhc2tRdWV1ZTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqL1xuXG52YXIgQmFzZSAgICAgICAgICA9IHJlcXVpcmUoJ3NlbGZpc2gnKS5CYXNlLFxuICAgIGRlcGxveXIgICAgICAgPSByZXF1aXJlKCdkZXBsb3lyJyksXG4gICAgRCAgICAgICAgICAgICA9IHJlcXVpcmUoJ2QuanMnKSwgICAgXG4gICAgUlRhc2tUeXBlICAgICA9IHJlcXVpcmUoJy4uL3J0YXNrLXR5cGUnKSxcbiAgICBSQnJva2VyV29ya2VyID0gcmVxdWlyZSgnLi9yYnJva2VyLXdvcmtlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJCcm9rZXJXb3JrZXIuZXh0ZW5kKHtcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICh0YXNrLCBydXNlcikge1xuICAgICAgICBSQnJva2VyV29ya2VyLmluaXRpYWxpemUuY2FsbCh0aGlzLCB0YXNrKTtcbiAgICAgICAgdGhpcy5ydXNlciA9IHJ1c2VyO1xuICAgICAgICB0aGlzLmpvYiAgID0gbnVsbDtcbiAgICB9LFxuXG4gICAgd29yazogZnVuY3Rpb24ocmVzb3VyY2VUb2tlbikge1xuICAgICAgICB2YXIgc2VsZiAgICAgID0gdGhpcywgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgZGF0YSAgICAgID0gdGhpcy50YXNrLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgcmlucHV0cyAgID0gZGF0YS5yaW5wdXRzIHx8IFtdLFxuICAgICAgICAgICAgcm91dHB1dHMgID0gZGF0YS5yb3V0cHV0cyB8fCBbXTtcblxuICAgICAgICBkZWxldGUgZGF0YS5yaW5wdXRzO1xuICAgICAgICBkZWxldGUgZGF0YS5yb3V0cHV0cztcblxuICAgICAgICB0aGlzLnJlc291cmNlVG9rZW4gPSByZXNvdXJjZVRva2VuOyAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGRlcGxveXIuaW8oJy9yL2pvYi9zdWJtaXQnKVxuICAgICAgICAgICAgLnNoYXJlKHRoaXMucnVzZXIuZ2V0Q29va2llcygpKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5nbG9iYWwoZmFsc2UpIC8vIHN1cHJlc3MgZ2xvYmFsIGVycm9yIGV2ZW50cyBmb3IgdGhpcyBgaW9gXG4gICAgICAgICAgICAucmlucHV0cyhyaW5wdXRzKVxuICAgICAgICAgICAgLnJvdXRwdXRzKHJvdXRwdXRzKVxuICAgICAgICAgICAgLnByb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFib3V0ID0gcmVzLmdldCgnam9iJyk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmpvYiA9IGFib3V0LmpvYjsgLy8gam9iLWlkICAgICBcblxuICAgICAgICAgICAgICAgIC8vIHJlc29sdmUgdGhlIHByb21pc2Ugd2hpY2gga2lja3Mtb2ZmIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2s6IHNlbGYudGFzayxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYWJvdXQuam9iLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUlRhc2tUeXBlLkJBQ0tHUk9VTkQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT25Db2RlOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uU2VydmVyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uQ2FsbDogKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24oaW50ZXJydXB0KSB7XG4gICAgICAgIGlmIChpbnRlcnJ1cHQgJiYgdGhpcy5qb2IpIHtcbiAgICAgICAgICB0aGlzLnJ1c2VyLmlvKCcvci9qb2IvY2FuY2VsJylcbiAgICAgICAgICAgIC5kYXRhKHsgam9iOiB0aGlzLmpvYiB9KVxuICAgICAgICAgICAgLmVuZCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBSVGFzayBzdGlsbCBwZW5kaW5nIGNvbmZpcm1hdGlvbiBmcm9tIFJCcm9rZXIgaWYgdGhlcmUgaXMgbm9cbiAgICAgICAgICAgIC8vIGByZXNvdXJjZVRva2VuYCBoZW5jZSBjYW4gbm90IGJlIGludGVycnVwdGVkIFtvcl0gdGhlIHRhc2sgaXNcbiAgICAgICAgICAgIC8vIGJlaW5nIHdvcmtlZCBvbiBhbmQgYSBmb3JjZWQgYGludGVycnVwdGAgd2FzIG5vdCBnaXZlblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIEJhc2UgICAgICAgICAgPSByZXF1aXJlKCdzZWxmaXNoJykuQmFzZSxcbiAgICBkZXBsb3lyICAgICAgID0gcmVxdWlyZSgnZGVwbG95cicpLFxuICAgIEQgICAgICAgICAgICAgPSByZXF1aXJlKCdkLmpzJyksICAgIFxuICAgIFJUYXNrVHlwZSAgICAgPSByZXF1aXJlKCcuLi9ydGFzay10eXBlJyksXG4gICAgUkJyb2tlcldvcmtlciA9IHJlcXVpcmUoJy4vcmJyb2tlci13b3JrZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSQnJva2VyV29ya2VyLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbih0YXNrLCBydXNlcikge1xuICAgICAgICBSQnJva2VyV29ya2VyLmluaXRpYWxpemUuY2FsbCh0aGlzLCB0YXNrKTtcbiAgICAgICAgdGhpcy5ydXNlciA9IHJ1c2VyO1xuICAgICAgICB0aGlzLmlvICAgID0gbnVsbDsgLy8gYGlvYCByZXF1ZXN0IGZvciAndGVybWluYXRpb24nIGlmIGNhbGxlZFxuICAgIH0sXG5cbiAgICB3b3JrOiBmdW5jdGlvbihyZXNvdXJjZVRva2VuKSB7XG4gICAgICAgIHZhciB0YXNrICAgICAgPSB0aGlzLnRhc2ssXG4gICAgICAgICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIGRhdGEgICAgICA9IHRoaXMudGFzay5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgIHJpbnB1dHMgICA9IGRhdGEucmlucHV0cyB8fCBbXSxcbiAgICAgICAgICAgIHJvdXRwdXRzICA9IGRhdGEucm91dHB1dHMgfHwgW107XG5cbiAgICAgICAgZGVsZXRlIGRhdGEucmlucHV0cztcbiAgICAgICAgZGVsZXRlIGRhdGEucm91dHB1dHM7XG5cbiAgICAgICAgdGhpcy5yZXNvdXJjZVRva2VuID0gcmVzb3VyY2VUb2tlbjtcblxuICAgICAgICAvLyBzYXZlIGBpb2AgcmVxdWVzdCBmb3IgJ3Rlcm1pbmF0aW9uJyBwdXJwb3Nlc1xuICAgICAgICB0aGlzLmlvID0gZGVwbG95ci5pbygnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZScpXG4gICAgICAgICAgICAvLyBtYWtlIHBhcmFsbGVsIGh0dHAgcmVxLiB1c2luZyB0aGUgc2FtZSBzZXNzaW9uXG4gICAgICAgICAgICAuc2hhcmUodGhpcy5ydXNlciA/IHRoaXMucnVzZXIuZ2V0Q29va2llcygpIDogbnVsbClcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAucmlucHV0cyhyaW5wdXRzKVxuICAgICAgICAgICAgLnJvdXRwdXRzKHJvdXRwdXRzKSAgICAgICAgICAgIFxuICAgICAgICAgICAgLmdsb2JhbChmYWxzZSk7IC8vIHN1cHJlc3MgZ2xvYmFsIGVycm9yIGV2ZW50cyBmb3IgdGhpcyBgaW9gXG5cbiAgICAgICAgLy8gc2VuZCB0aGUgc2NyaXB0IGV4ZWN1dGlvbiByZXF1ZXN0IGFuZCByZXR1cm4gYSBwcm9taXNlXG4gICAgICAgIHJldHVybiB0aGlzLmlvLnByb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gcmVzLmRlcGxveXIucmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGltZU9uU2VydmVyICAgICA9IHJlcy5leGVjdXRpb24udGltZVRvdGFsLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICAgID0gcmVzLnByb2plY3QucHJvamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkQ29uc29sZSA9IHJlcy5leGVjdXRpb24uY29uc29sZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkUGxvdHMgICA9IHJlcy5leGVjdXRpb24ucmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkRmlsZXMgICA9IHJlcy5leGVjdXRpb24uYXJ0aWZhY3RzLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWRPYmplY3RzID0gcmVzLndvcmtzcGFjZS5vYmplY3RzLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZWRGaWxlcyAgICAgID0gcmVzLnJlcG9zaXRvcnkuZmlsZXM7XG5cbiAgICAgICAgICAgICAgICAvLyByZXNvbHZlIHRoZSBwcm9taXNlIHdoaWNoIGtpY2tzLW9mZiB0aGUgY2FsbGJhY2sgdmFsdWVzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSVGFza1R5cGUuRElTQ1JFVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uQ29kZTogcmVzLmV4ZWN1dGlvbi50aW1lQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPblNlcnZlcjogdGltZU9uU2VydmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uQ2FsbDogKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnJ1cHRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWRDb25zb2xlOiBnZW5lcmF0ZWRDb25zb2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkUGxvdHM6IGdlbmVyYXRlZFBsb3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkRmlsZXM6IGdlbmVyYXRlZEZpbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkT2JqZWN0czogZ2VuZXJhdGVkT2JqZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlZEZpbGVzOiBzdG9yZWRGaWxlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uKGludGVycnVwdCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBATk9URTpcbiAgICAgICAgLy8gVGhlcmUgaXMgbm8gd2F5IHRvIG9idGFpbiBEZXBsb3lSIHJlZmVyZW5jZSwgc3VjaCBhcyBhIHByb2plY3RJZCwgZm9yXG4gICAgICAgIC8vIGFuIHN0YXRlbGVzcyBleGVjdXRpb24gaW4tcHJvZ3Jlc3MsIHNvIGFib3J0aW5nIHRoZSBjdXJyZW50IFJUYXNrIFxuICAgICAgICAvLyBvcGVyYXRpb24gaXMgbm90IHBvc3NpYmxlLiBBdCBiZXN0IHdlIGNhbiBkbyBoZXJlIGlzIGZyZWUtdXAgdGhlIFxuICAgICAgICAvLyBjbGllbnQgY29ubmVjdGlvbiBhbmQgYWJvcnQuXG4gICAgICAgIC8vICAgICAgICBcbiAgICAgICAgaWYgKGludGVycnVwdCAmJiB0aGlzLmlvICYmIHRoaXMuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW8uYWJvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaW8uZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5pbyA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFJUYXNrIHN0aWxsIHBlbmRpbmcgY29uZmlybWF0aW9uIGZyb20gUkJyb2tlciBpZiB0aGVyZSBpcyBub1xuICAgICAgICAgICAgLy8gYHJlc291cmNlVG9rZW5gIGhlbmNlIGNhbiBub3QgYmUgaW50ZXJydXB0ZWQgW29yXSB0aGUgdGFzayBpc1xuICAgICAgICAgICAgLy8gYmVpbmcgd29ya2VkIG9uIGFuZCBhIGZvcmNlZCBgaW50ZXJydXB0YCB3YXMgbm90IGdpdmVuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIEJhc2UgICAgICAgICAgPSByZXF1aXJlKCdzZWxmaXNoJykuQmFzZSxcbiAgICBEICAgICAgICAgICAgID0gcmVxdWlyZSgnZC5qcycpLFxuICAgIG1lcmdlICAgICAgICAgPSByZXF1aXJlKCdtZXJnZScpLFxuICAgIGRlcGxveXIgICAgICAgPSByZXF1aXJlKCdkZXBsb3lyJyksXG4gICAgUlRhc2tUeXBlICAgICA9IHJlcXVpcmUoJy4uL3J0YXNrLXR5cGUnKSxcbiAgICBSQnJva2VyV29ya2VyID0gcmVxdWlyZSgnLi9yYnJva2VyLXdvcmtlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJCcm9rZXJXb3JrZXIuZXh0ZW5kKHtcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICh0YXNrLCBydXNlcikge1xuICAgICAgICBSQnJva2VyV29ya2VyLmluaXRpYWxpemUuY2FsbCh0aGlzLCB0YXNrKTtcbiAgICAgICAgdGhpcy5ydXNlciA9IHJ1c2VyO1xuICAgIH0sXG5cbiAgICB3b3JrOiBmdW5jdGlvbihyZXNvdXJjZVRva2VuKSB7XG4gICAgICAgIHZhciB0YXNrID0gdGhpcy50YXNrLCBcbiAgICAgICAgICAgIGRhdGEgPSBtZXJnZSh7XG4gICAgICAgICAgICAgICAgcHJvamVjdDogcmVzb3VyY2VUb2tlbixcbiAgICAgICAgICAgICAgICBwaGFudG9tOiB0cnVlXG4gICAgICAgICAgICB9LCB0aGlzLnRhc2suc2VyaWFsaXplKCkpLFxuICAgICAgICAgICAgYXBpICAgICAgID0gJy9yL3Byb2plY3QvZXhlY3V0ZS8nICsgKGRhdGEuY29kZSA/ICdjb2RlJyA6ICdzY3JpcHQnKSxcbiAgICAgICAgICAgIHJpbnB1dHMgICA9IGRhdGEucmlucHV0cyB8fCBbXSxcbiAgICAgICAgICAgIHJvdXRwdXRzICA9IGRhdGEucm91dHB1dHMgfHwgW10sXG4gICAgICAgICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBkZWxldGUgZGF0YS5yaW5wdXRzO1xuICAgICAgICBkZWxldGUgZGF0YS5yb3V0cHV0cztcblxuICAgICAgICB0aGlzLnJlc291cmNlVG9rZW4gPSByZXNvdXJjZVRva2VuO1xuXG4gICAgICAgIHJldHVybiBkZXBsb3lyLmlvKGFwaSlcbiAgICAgICAgICAgIC5zaGFyZSh0aGlzLnJ1c2VyLmdldENvb2tpZXMoKSlcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAucmlucHV0cyhyaW5wdXRzKVxuICAgICAgICAgICAgLnJvdXRwdXRzKHJvdXRwdXRzKVxuICAgICAgICAgICAgLmdsb2JhbChmYWxzZSkgLy8gc3VwcmVzcyBnbG9iYWwgZXJyb3IgZXZlbnRzIGZvciB0aGlzIGBpb2AgICAgICAgICAgICBcbiAgICAgICAgICAgIC5wcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5kZXBsb3lyLnJlc3BvbnNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGdlbmVyYXRlZENvbnNvbGUgPSByZXMuZXhlY3V0aW9uLmNvbnNvbGUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZFBsb3RzICAgPSByZXMuZXhlY3V0aW9uLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZEZpbGVzICAgPSByZXMuZXhlY3V0aW9uLmFydGlmYWN0cyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkT2JqZWN0cyA9IHJlcy53b3Jrc3BhY2Uub2JqZWN0cyxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVkRmlsZXMgICAgICA9IHJlcy5yZXBvc2l0b3J5LmZpbGVzO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyByZXNvbHZlIHRoZSBwcm9taXNlIHdoaWNoIGtpY2tzLW9mZiB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXMucHJvamVjdC5wcm9qZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUlRhc2tUeXBlLlBPT0xFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT25Db2RlOiByZXMuZXhlY3V0aW9uLnRpbWVDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uU2VydmVyOiByZXMuZXhlY3V0aW9uLnRpbWVUb3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVPbkNhbGw6IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJydXB0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkQ29uc29sZTogZ2VuZXJhdGVkQ29uc29sZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZFBsb3RzOiBnZW5lcmF0ZWRQbG90cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZEZpbGVzOiBnZW5lcmF0ZWRGaWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZE9iamVjdHM6IGdlbmVyYXRlZE9iamVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWRGaWxlczogc3RvcmVkRmlsZXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgIH0sXG5cbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uKGludGVycnVwdCkge1xuICAgICAgICAvLyB3b3JrIGhhcyBzdGFydGVkIGFuZCBhIGZvcmNlZCBpbnRlcnJ1cHQgZ2l2ZW5cbiAgICAgICAgaWYgKGludGVycnVwdCAmJiB0aGlzLnJlc291cmNlVG9rZW4gJiYgdGhpcy5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5ydXNlci5pbygnL3IvcHJvamVjdC9leGVjdXRlL2ludGVycnVwdCcpXG4gICAgICAgICAgICAgICAgLmRhdGEoeyBwcm9qZWN0OiB0aGlzLnJlc291cmNlVG9rZW4gfSlcbiAgICAgICAgICAgICAgICAuZW5kKCk7ICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBSVGFzayBzdGlsbCBwZW5kaW5nIGNvbmZpcm1hdGlvbiBmcm9tIFJCcm9rZXIgaWYgdGhlcmUgaXMgbm9cbiAgICAgICAgICAgIC8vIGByZXNvdXJjZVRva2VuYCBoZW5jZSBjYW4gbm90IGJlIGludGVycnVwdGVkIFtvcl0gdGhlIHRhc2sgaXNcbiAgICAgICAgICAgIC8vIGJlaW5nIHdvcmtlZCBvbiBhbmQgYSBmb3JjZWQgYGludGVycnVwdGAgd2FzIG5vdCBnaXZlblxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIEJhc2UgPSByZXF1aXJlKCdzZWxmaXNoJykuQmFzZSxcbiAgICBEICAgID0gcmVxdWlyZSgnZC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKHRhc2spIHtcbiAgICAgICAgdGhpcy50YXNrICA9IHRhc2s7XG4gICAgICAgIHRoaXMuZGVmZXIgPSBEKCk7XG4gICAgfSxcblxuICAgIHdvcms6IGZ1bmN0aW9uKHJlc291cmNlVG9rZW4pIHsgLyogb3ZlcnJpZGUgKi8gfSxcblxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24oaW50ZXJydXB0KSB7IC8qIG92ZXJyaWRlICovIH0sXG5cbiAgICBpc1BlbmRpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZlci5wcm9taXNlLmlzUGVuZGluZygpO1xuICAgIH0sXG5cbiAgICByZXNvbHZlOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5kZWZlci5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfSxcblxuICAgIHJlamVjdDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIHRoaXMuZGVmZXIucmVqZWN0KGVycik7XG4gICAgfVxufSk7XG4iLCIiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG59ICgpKVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuKiBhdHRlbXB0IG9mIGEgc2ltcGxlIGRlZmVyL3Byb21pc2UgbGlicmFyeSBmb3IgbW9iaWxlIGRldmVsb3BtZW50XG4qIEBhdXRob3IgSm9uYXRoYW4gR290dGkgPCBqZ290dGkgYXQgamdvdHRpIGRvdCBuZXQ+XG4qIEBzaW5jZSAyMDEyLTEwXG4qIEB2ZXJzaW9uIDAuNi4wXG4qIEBjaGFuZ2Vsb2dcbiogICAgICAgICAgIC0gMjAxMy0xMi0wNyAtIGxhc3QgcHJvbWlzZSAxLjEgc3BlY3MgdGVzdCBwYXNzaW5ncyAodGh4IHRvIHdpemFyZHdlcmRuYSlcbiAqICAgICAgICAgICAgICAgICAgICAgICAtIHJlZHVjZSBwcm9taXNlcyBmb290cHJpbnQgYnkgdW5zY29waW5nIG1ldGhvZHMgdGhhdCBjb3VsZCBiZVxuKiAgICAgICAgICAgLSAyMDEzLTEwLTIzIC0gbWFrZSBpdCB3b3JraWcgYWNyb3NzIG5vZGUtd2Via2l0IGNvbnRleHRzXG4qICAgICAgICAgICAtIDIwMTMtMDctMDMgLSBidWcgY29ycmVjdGlvbiBpbiBwcm9taXhpZnkgbWV0aG9kICh0aHggdG8gYWRyaWVuIGdpYnJhdCApXG4qICAgICAgICAgICAtIDIwMTMtMDYtMjIgLSBidWcgY29ycmVjdGlvbiBpbiBub2RlQ2Fwc3VsZSBtZXRob2RcbiogICAgICAgICAgIC0gMjAxMy0wNi0xNyAtIHJlbW92ZSB1bm5lY2Vzc2FyeSBBcnJheS5pbmRleE9mIG1ldGhvZCBkZXBlbmRlbmN5XG4qICAgICAgICAgICAtIDIwMTMtMDQtMTggLSBhZGQgdHJ5L2NhdGNoIGJsb2NrIGFyb3VuZCBub2RlQ2Fwc3VsZWQgbWV0aG9kc1xuKiAgICAgICAgICAgLSAyMDEzLTA0LTEzIC0gY2hlY2sgcHJvbWlzZXMvQSsgY29uZm9ybWl0eVxuKiAgICAgICAgICAgICAgICAgICAgICAgIC0gbWFrZSBzb21lIG1pbmljYXRpb24gb3B0aW1pc2F0aW9uc1xuKiAgICAgICAgICAgLSAyMDEzLTAzLTI2IC0gYWRkIHJlc29sdmVkLCBmdWxmaWxsZWQgYW5kIHJlamVjdGVkIG1ldGhvZHNcbiogICAgICAgICAgIC0gMjAxMy0wMy0yMSAtIGJyb3dzZXIvbm9kZSBjb21wYXRpYmxlXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBuZXcgbWV0aG9kIG5vZGVDYXBzdWxlXG4qICAgICAgICAgICAgICAgICAgICAgICAgLSBzaW1wbGVyIHByb21peGlmeSB3aXRoIGZ1bGwgYXBpIHN1cHBvcnRcbiogICAgICAgICAgIC0gMjAxMy0wMS0yNSAtIGFkZCByZXRocm93IG1ldGhvZFxuKiAgICAgICAgICAgICAgICAgICAgICAgIC0gbmV4dFRpY2sgb3B0aW1pc2F0aW9uIC0+IGFkZCBzdXBwb3J0IGZvciBwcm9jZXNzLm5leHRUaWNrICsgTWVzc2FnZUNoYW5uZWwgd2hlcmUgYXZhaWxhYmxlXG4qICAgICAgICAgICAtIDIwMTItMTItMjggLSBhZGQgYXBwbHkgbWV0aG9kIHRvIHByb21pc2VcbiogICAgICAgICAgIC0gMjAxMi0xMi0yMCAtIGFkZCBhbHdheXNBc3luYyBwYXJhbWV0ZXJzIGFuZCBwcm9wZXJ0eSBmb3IgZGVmYXVsdCBzZXR0aW5nXG4qL1xuKGZ1bmN0aW9uKHVuZGVmKXtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIG5leHRUaWNrXG5cdFx0LCBpc0Z1bmMgPSBmdW5jdGlvbihmKXsgcmV0dXJuICggdHlwZW9mIGYgPT09ICdmdW5jdGlvbicgKTsgfVxuXHRcdCwgaXNBcnJheSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkoYSkgOiAoYSBpbnN0YW5jZW9mIEFycmF5KTsgfVxuXHRcdCwgaXNPYmpPckZ1bmMgPSBmdW5jdGlvbihvKXsgcmV0dXJuICEhKG8gJiYgKHR5cGVvZiBvKS5tYXRjaCgvZnVuY3Rpb258b2JqZWN0LykpOyB9XG5cdFx0LCBpc05vdFZhbCA9IGZ1bmN0aW9uKHYpeyByZXR1cm4gKHYgPT09IGZhbHNlIHx8IHYgPT09IHVuZGVmIHx8IHYgPT09IG51bGwpOyB9XG5cdFx0LCBzbGljZSA9IGZ1bmN0aW9uKGEsIG9mZnNldCl7IHJldHVybiBbXS5zbGljZS5jYWxsKGEsIG9mZnNldCk7IH1cblx0XHQsIHVuZGVmU3RyID0gJ3VuZGVmaW5lZCdcblx0XHQsIHRFcnIgPSB0eXBlb2YgVHlwZUVycm9yID09PSB1bmRlZlN0ciA/IEVycm9yIDogVHlwZUVycm9yXG5cdDtcblx0aWYgKCAodHlwZW9mIHByb2Nlc3MgIT09IHVuZGVmU3RyKSAmJiBwcm9jZXNzLm5leHRUaWNrICkge1xuXHRcdG5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcblx0fSBlbHNlIGlmICggdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSB1bmRlZlN0ciApIHtcblx0XHR2YXIgbnRpY2tDaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCksIHF1ZXVlID0gW107XG5cdFx0bnRpY2tDaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCl7IHF1ZXVlLmxlbmd0aCAmJiAocXVldWUuc2hpZnQoKSkoKTsgfTtcblx0XHRuZXh0VGljayA9IGZ1bmN0aW9uKGNiKXtcblx0XHRcdHF1ZXVlLnB1c2goY2IpO1xuXHRcdFx0bnRpY2tDaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0bmV4dFRpY2sgPSBmdW5jdGlvbihjYil7IHNldFRpbWVvdXQoY2IsIDApOyB9O1xuXHR9XG5cdGZ1bmN0aW9uIHJldGhyb3coZSl7IG5leHRUaWNrKGZ1bmN0aW9uKCl7IHRocm93IGU7fSk7IH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYgZGVmZXJyZWRcblx0ICogQHByb3BlcnR5IHtwcm9taXNlfSBwcm9taXNlXG5cdCAqIEBtZXRob2QgcmVzb2x2ZVxuXHQgKiBAbWV0aG9kIGZ1bGZpbGxcblx0ICogQG1ldGhvZCByZWplY3Rcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gZnVsZmlsbGVkXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgcHJvbWlzZSByZXNvbHZlZCB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Kn0gbmV4dCBwcm9taXNlIHJlc29sdXRpb24gdmFsdWVcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gZmFpbGVkXG5cdCAqIEBwYXJhbSB7Kn0gcmVhc29uIHByb21pc2UgcmVqZWN0aW9uIHJlYXNvblxuXHQgKiBAcmV0dXJucyB7Kn0gbmV4dCBwcm9taXNlIHJlc29sdXRpb24gdmFsdWUgb3IgcmV0aHJvdyB0aGUgcmVhc29uXG5cdCAqL1xuXG5cdC8vLS0gZGVmaW5pbmcgdW5lbmNsb3NlZCBwcm9taXNlIG1ldGhvZHMgLS0vL1xuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIHdpdGhvdXQgZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2Vfc3VjY2VzcyhmdWxmaWxsZWQpeyByZXR1cm4gdGhpcy50aGVuKGZ1bGZpbGxlZCwgdW5kZWYpOyB9XG5cblx0LyoqXG5cdCAqIHNhbWUgYXMgdGhlbiB3aXRoIG9ubHkgYSBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmYWlsZWR9IGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9lcnJvcihmYWlsZWQpeyByZXR1cm4gdGhpcy50aGVuKHVuZGVmLCBmYWlsZWQpOyB9XG5cblxuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIGJ1dCBmdWxmaWxsZWQgY2FsbGJhY2sgd2lsbCByZWNlaXZlIG11bHRpcGxlIHBhcmFtZXRlcnMgd2hlbiBwcm9taXNlIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIEFycmF5XG5cdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmYWlsZWR9IGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9hcHBseShmdWxmaWxsZWQsIGZhaWxlZCl7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdGZ1bmN0aW9uKGEpe1xuXHRcdFx0XHRyZXR1cm4gaXNGdW5jKGZ1bGZpbGxlZCkgPyBmdWxmaWxsZWQuYXBwbHkobnVsbCwgaXNBcnJheShhKSA/IGEgOiBbYV0pIDogKGRlZmVyLm9ubHlGdW5jcyA/IGEgOiBmdWxmaWxsZWQpO1xuXHRcdFx0fVxuXHRcdFx0LCBmYWlsZWQgfHwgdW5kZWZcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIGNsZWFudXAgbWV0aG9kIHdoaWNoIHdpbGwgYmUgYWx3YXlzIGV4ZWN1dGVkIHJlZ2FyZGxlc3MgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIGEgY2FsbGJhY2sgY2FsbGVkIHJlZ2FyZGxlc3Mgb2YgdGhlIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBvZiB0aGUgcHJvbWlzZSB3aGljaCB3aWxsIGJlIGNhbGxlZFxuXHQgKiAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSBwcm9taXNlIGlzIG5vdCBwZW5kaW5nIGFueW1vcmVcblx0ICogQHJldHVybnMge3Byb21pc2V9IHRoZSBzYW1lIHByb21pc2UgdW50b3VjaGVkXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2Vuc3VyZShjYil7XG5cdFx0ZnVuY3Rpb24gX2NiKCl7IGNiKCk7IH1cblx0XHR0aGlzLnRoZW4oX2NiLCBfY2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRha2UgYSBzaW5nbGUgY2FsbGJhY2sgd2hpY2ggd2FpdCBmb3IgYW4gZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyLiBvdGhlciByZXNvbHV0aW9uIHZhbHVlcyBhcmUgcGFzc2VkIGFzIHdpdGggdGhlIGFwcGx5L3NwcmVhZCBtZXRob2Rcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgYSBjYWxsYmFjayBjYWxsZWQgcmVnYXJkbGVzcyBvZiB0aGUgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHByb21pc2UgaXMgbm90IHBlbmRpbmcgYW55bW9yZSB3aXRoIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlciBpZiBhbnkgYXMgaW4gbm9kZSBzdHlsZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay4gUmVzdCBvZiBwYXJhbWV0ZXJzIHdpbGwgYmUgYXBwbGllZCBhcyB3aXRoIHRoZSBhcHBseSBtZXRob2QuXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX25vZGlmeShjYil7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdGZ1bmN0aW9uKGEpe1xuXHRcdFx0XHRyZXR1cm4gaXNGdW5jKGNiKSA/IGNiLmFwcGx5KG51bGwsIGlzQXJyYXkoYSkgPyBhLnNwbGljZSgwLDAsdW5kZWZpbmVkKSAmJiBhIDogW3VuZGVmaW5lZCxhXSkgOiAoZGVmZXIub25seUZ1bmNzID8gYSA6IGNiKTtcblx0XHRcdH1cblx0XHRcdCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdHJldHVybiBjYihlKTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmYWlsZWRdIHdpdGhvdXQgcGFyYW1ldGVyIHdpbGwgb25seSByZXRocm93IHByb21pc2UgcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIG9mIHRoZSBwcm9taXNlIGxpYnJhcnkgb24gbmV4dCB0aWNrXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHBhc3NlZCBhIGZhaWxlZCBtZXRob2QgdGhlbiB3aWxsIGNhbGwgZmFpbGVkIG9uIHJlamVjdGlvbiBhbmQgdGhyb3cgdGhlIGVycm9yIGFnYWluIGlmIGZhaWxlZCBkaWRuJ3Rcblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfcmV0aHJvdyhmYWlsZWQpe1xuXHRcdHJldHVybiB0aGlzLnRoZW4oXG5cdFx0XHR1bmRlZlxuXHRcdFx0LCBmYWlsZWQgPyBmdW5jdGlvbihlKXsgZmFpbGVkKGUpOyB0aHJvdyBlOyB9IDogcmV0aHJvd1xuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0KiBAcGFyYW0ge2Jvb2xlYW59IFthbHdheXNBc3luY10gaWYgc2V0IGZvcmNlIHRoZSBhc3luYyByZXNvbHV0aW9uIGZvciB0aGlzIHByb21pc2UgaW5kZXBlbmRhbnRseSBvZiB0aGUgRC5hbHdheXNBc3luYyBvcHRpb25cblx0KiBAcmV0dXJucyB7ZGVmZXJyZWR9IGRlZmVyZWQgb2JqZWN0IHdpdGggcHJvcGVydHkgJ3Byb21pc2UnIGFuZCBtZXRob2RzIHJlamVjdCxmdWxmaWxsLHJlc29sdmUgKGZ1bGZpbGwgYmVpbmcgYW4gYWxpYXMgZm9yIHJlc29sdmUpXG5cdCovXG5cdHZhciBkZWZlciA9IGZ1bmN0aW9uIChhbHdheXNBc3luYyl7XG5cdFx0dmFyIGFsd2F5c0FzeW5jRm4gPSAodW5kZWYgIT09IGFsd2F5c0FzeW5jID8gYWx3YXlzQXN5bmMgOiBkZWZlci5hbHdheXNBc3luYykgPyBuZXh0VGljayA6IGZ1bmN0aW9uKGZuKXtmbigpO31cblx0XHRcdCwgc3RhdHVzID0gMCAvLyAtMSBmYWlsZWQgfCAxIGZ1bGZpbGxlZFxuXHRcdFx0LCBwZW5kaW5ncyA9IFtdXG5cdFx0XHQsIHZhbHVlXG5cdFx0XHQvKipcblx0XHRcdCAqIEB0eXBlZGVmIHByb21pc2Vcblx0XHRcdCAqL1xuXHRcdFx0LCBfcHJvbWlzZSAgPSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAcGFyYW0ge2Z1bGZpbGxlZHxmdW5jdGlvbn0gZnVsZmlsbGVkIGNhbGxiYWNrXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZmFpbGVkfGZ1bmN0aW9ufSBmYWlsZWQgY2FsbGJhY2tcblx0XHRcdFx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoZW46IGZ1bmN0aW9uKGZ1bGZpbGxlZCwgZmFpbGVkKXtcblx0XHRcdFx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0XHRcdFx0cGVuZGluZ3MucHVzaChbXG5cdFx0XHRcdFx0XHRmdW5jdGlvbih2YWx1ZSl7XG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRpZiggaXNOb3RWYWwoZnVsZmlsbGVkKSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRkLnJlc29sdmUodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkLnJlc29sdmUoaXNGdW5jKGZ1bGZpbGxlZCkgPyBmdWxmaWxsZWQodmFsdWUpIDogKGRlZmVyLm9ubHlGdW5jcyA/IHZhbHVlIDogZnVsZmlsbGVkKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCwgZnVuY3Rpb24oZXJyKXtcblx0XHRcdFx0XHRcdFx0aWYgKCBpc05vdFZhbChmYWlsZWQpIHx8ICgoIWlzRnVuYyhmYWlsZWQpKSAmJiBkZWZlci5vbmx5RnVuY3MpICkge1xuXHRcdFx0XHRcdFx0XHRcdGQucmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCBmYWlsZWQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJ5eyBkLnJlc29sdmUoaXNGdW5jKGZhaWxlZCkgPyBmYWlsZWQoZXJyKSA6IGZhaWxlZCk7IH1jYXRjaChlKXsgZC5yZWplY3QoZSk7fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0c3RhdHVzICE9PSAwICYmIGFsd2F5c0FzeW5jRm4oZXhlY0NhbGxiYWNrcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCwgc3VjY2VzczogcHJvbWlzZV9zdWNjZXNzXG5cblx0XHRcdFx0LCBlcnJvcjogcHJvbWlzZV9lcnJvclxuXHRcdFx0XHQsIG90aGVyd2lzZTogcHJvbWlzZV9lcnJvclxuXG5cdFx0XHRcdCwgYXBwbHk6IHByb21pc2VfYXBwbHlcblx0XHRcdFx0LCBzcHJlYWQ6IHByb21pc2VfYXBwbHlcblxuXHRcdFx0XHQsIGVuc3VyZTogcHJvbWlzZV9lbnN1cmVcblxuXHRcdFx0XHQsIG5vZGlmeTogcHJvbWlzZV9ub2RpZnlcblxuXHRcdFx0XHQsIHJldGhyb3c6IHByb21pc2VfcmV0aHJvd1xuXG5cdFx0XHRcdCwgaXNQZW5kaW5nOiBmdW5jdGlvbigpeyByZXR1cm4gISEoc3RhdHVzID09PSAwKTsgfVxuXG5cdFx0XHRcdCwgZ2V0U3RhdHVzOiBmdW5jdGlvbigpeyByZXR1cm4gc3RhdHVzOyB9XG5cdFx0XHR9XG5cdFx0O1xuXHRcdF9wcm9taXNlLnRvU291cmNlID0gX3Byb21pc2UudG9TdHJpbmcgPSBfcHJvbWlzZS52YWx1ZU9mID0gZnVuY3Rpb24oKXtyZXR1cm4gdmFsdWUgPT09IHVuZGVmID8gdGhpcyA6IHZhbHVlOyB9O1xuXG5cblx0XHRmdW5jdGlvbiBleGVjQ2FsbGJhY2tzKCl7XG5cdFx0XHRpZiAoIHN0YXR1cyA9PT0gMCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNicyA9IHBlbmRpbmdzLCBpID0gMCwgbCA9IGNicy5sZW5ndGgsIGNiSW5kZXggPSB+c3RhdHVzID8gMCA6IDEsIGNiO1xuXHRcdFx0cGVuZGluZ3MgPSBbXTtcblx0XHRcdGZvciggOyBpIDwgbDsgaSsrICl7XG5cdFx0XHRcdChjYiA9IGNic1tpXVtjYkluZGV4XSkgJiYgY2IodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZ1bGZpbGwgZGVmZXJyZWQgd2l0aCBnaXZlbiB2YWx1ZVxuXHRcdCAqIEBwYXJhbSB7Kn0gdmFsXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVzb2x2ZSh2YWwpe1xuXHRcdFx0dmFyIGRvbmUgPSBmYWxzZTtcblx0XHRcdGZ1bmN0aW9uIG9uY2UoZil7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRpZiAoZG9uZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZih4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHN0YXR1cyApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgdGhlbiA9IGlzT2JqT3JGdW5jKHZhbCkgJiYgdmFsLnRoZW47XG5cdFx0XHRcdGlmICggaXNGdW5jKHRoZW4pICkgeyAvLyBtYW5hZ2luZyBhIHByb21pc2Vcblx0XHRcdFx0XHRpZiggdmFsID09PSBfcHJvbWlzZSApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IHRFcnIoXCJQcm9taXNlIGNhbid0IHJlc29sdmUgaXRzZWxmXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGVuLmNhbGwodmFsLCBvbmNlKF9yZXNvbHZlKSwgb25jZShfcmVqZWN0KSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0b25jZShfcmVqZWN0KShlKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhbHVlID0gdmFsO1xuXHRcdFx0XHRzdGF0dXMgPSAxO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIHJlamVjdCBkZWZlcnJlZCB3aXRoIGdpdmVuIHJlYXNvblxuXHRcdCAqIEBwYXJhbSB7Kn0gRXJyXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVqZWN0KEVycil7XG5cdFx0XHRzdGF0dXMgfHwgYWx3YXlzQXN5bmNGbihmdW5jdGlvbigpe1xuXHRcdFx0XHR0cnl7IHRocm93KEVycik7IH1jYXRjaChlKXsgdmFsdWUgPSBlOyB9XG5cdFx0XHRcdHN0YXR1cyA9IC0xO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gLyoqQHR5cGUgZGVmZXJyZWQgKi8ge1xuXHRcdFx0cHJvbWlzZTpfcHJvbWlzZVxuXHRcdFx0LHJlc29sdmU6X3Jlc29sdmVcblx0XHRcdCxmdWxmaWxsOl9yZXNvbHZlIC8vIGFsaWFzXG5cdFx0XHQscmVqZWN0Ol9yZWplY3Rcblx0XHR9O1xuXHR9O1xuXG5cdGRlZmVyLmRlZmVycmVkID0gZGVmZXIuZGVmZXIgPSBkZWZlcjtcblx0ZGVmZXIubmV4dFRpY2sgPSBuZXh0VGljaztcblx0ZGVmZXIuYWx3YXlzQXN5bmMgPSB0cnVlOyAvLyBzZXR0aW5nIHRoaXMgd2lsbCBjaGFuZ2UgZGVmYXVsdCBiZWhhdmlvdXIuIHVzZSBpdCBvbmx5IGlmIG5lY2Vzc2FyeSBhcyBhc3luY2hyb25pY2l0eSB3aWxsIGZvcmNlIHNvbWUgZGVsYXkgYmV0d2VlbiB5b3VyIHByb21pc2UgcmVzb2x1dGlvbnMgYW5kIGlzIG5vdCBhbHdheXMgd2hhdCB5b3Ugd2FudC5cblx0LyoqXG5cdCogc2V0dGluZyBvbmx5RnVuY3MgdG8gZmFsc2Ugd2lsbCBicmVhayBwcm9taXNlcy9BKyBjb25mb3JtaXR5IGJ5IGFsbG93aW5nIHlvdSB0byBwYXNzIG5vbiB1bmRlZmluZWQvbnVsbCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxsYmFja3Ncblx0KiBpbnN0ZWFkIG9mIGp1c3QgaWdub3JpbmcgYW55IG5vbiBmdW5jdGlvbiBwYXJhbWV0ZXJzIHRvIHRoZW4sc3VjY2VzcyxlcnJvci4uLiBpdCB3aWxsIGFjY2VwdCBub24gbnVsbHx1bmRlZmluZWQgdmFsdWVzLlxuXHQqIHRoaXMgd2lsbCBhbGxvdyB5b3Ugc2hvcnRjdXRzIGxpa2UgcHJvbWlzZS50aGVuKCd2YWwnLCdoYW5kbGVkIGVycm9yJycpXG5cdCogdG8gYmUgZXF1aXZhbGVudCBvZiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKXsgcmV0dXJuICd2YWwnO30sZnVuY3Rpb24oKXsgcmV0dXJuICdoYW5kbGVkIGVycm9yJ30pXG5cdCovXG5cdGRlZmVyLm9ubHlGdW5jcyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIG9mIGdpdmVuIHZhbHVlIChhbHdheXMgYXN5bmMgcmVzb2x1dGlvbilcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnJlc29sdmVkID0gZGVmZXIuZnVsZmlsbGVkID0gZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gZGVmZXIodHJ1ZSkucmVzb2x2ZSh2YWx1ZSkucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSB3aXRoIGdpdmVuIHJlYXNvbiBvZiByZWplY3Rpb24gKGFsd2F5cyBhc3luYyByZWplY3Rpb24pXG5cdCAqIEBwYXJhbSB7Kn0gcmVhc29uXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVqZWN0ZWQgPSBmdW5jdGlvbihyZWFzb24peyByZXR1cm4gZGVmZXIodHJ1ZSkucmVqZWN0KHJlYXNvbikucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSB3aXRoIG5vIHJlc29sdXRpb24gdmFsdWUgd2hpY2ggd2lsbCBiZSByZXNvbHZlZCBpbiB0aW1lIG1zICh1c2luZyBzZXRUaW1lb3V0KVxuXHQgKiBAcGFyYW0ge2ludH0gW3RpbWVdIGluIG1zIGRlZmF1bHQgdG8gMFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLndhaXQgPSBmdW5jdGlvbih0aW1lKXtcblx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0c2V0VGltZW91dChkLnJlc29sdmUsIHRpbWUgfHwgMCk7XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvZiBmdW5jdGlvbiBjYWxsIHdoaWNoIHdpbGwgYmUgZnVsZmlsbGVkIGluIGRlbGF5IG1zIG9yIHJlamVjdGVkIGlmIGdpdmVuIGZuIHRocm93IGFuIGVycm9yXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG5cdCAqIEBwYXJhbSB7aW50fSBbZGVsYXldIGluIG1zIGRlZmF1bHQgdG8gMFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLmRlbGF5ID0gZnVuY3Rpb24oZm4sIGRlbGF5KXtcblx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyB0cnl7IGQucmVzb2x2ZShmbi5hcHBseShudWxsKSk7IH1jYXRjaChlKXsgZC5yZWplY3QoZSk7IH0gfSwgZGVsYXkgfHwgMCk7XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fTtcblxuXHQvKipcblx0ICogaWYgZ2l2ZW4gdmFsdWUgaXMgbm90IGEgcHJvbWlzZSByZXR1cm4gYSBmdWxmaWxsZWQgcHJvbWlzZSByZXNvbHZlZCB0byBnaXZlbiB2YWx1ZVxuXHQgKiBAcGFyYW0geyp9IHByb21pc2UgYSB2YWx1ZSBvciBhIHByb21pc2Vcblx0ICogQHJldHVybnMge3Byb21pc2V9XG5cdCAqL1xuXHRkZWZlci5wcm9taXNpZnkgPSBmdW5jdGlvbihwcm9taXNlKXtcblx0XHRpZiAoIHByb21pc2UgJiYgaXNGdW5jKHByb21pc2UudGhlbikgKSB7IHJldHVybiBwcm9taXNlO31cblx0XHRyZXR1cm4gZGVmZXIucmVzb2x2ZWQocHJvbWlzZSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gbXVsdGlQcm9taXNlUmVzb2x2ZXIoY2FsbGVyQXJndW1lbnRzLCByZXR1cm5Qcm9taXNlcyl7XG5cdFx0dmFyIHByb21pc2VzID0gc2xpY2UoY2FsbGVyQXJndW1lbnRzKTtcblx0XHRpZiAoIHByb21pc2VzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KHByb21pc2VzWzBdKSApIHtcblx0XHRcdGlmKCEgcHJvbWlzZXNbMF0ubGVuZ3RoICl7XG5cdFx0XHRcdHJldHVybiBkZWZlci5mdWxmaWxsZWQoW10pO1xuXHRcdFx0fVxuXHRcdFx0cHJvbWlzZXMgPSBwcm9taXNlc1swXTtcblx0XHR9XG5cdFx0dmFyIGFyZ3MgPSBbXVxuXHRcdFx0LCBkID0gZGVmZXIoKVxuXHRcdFx0LCBjID0gcHJvbWlzZXMubGVuZ3RoXG5cdFx0O1xuXHRcdGlmICggIWMgKSB7XG5cdFx0XHRkLnJlc29sdmUoYXJncyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciByZXNvbHZlciA9IGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRwcm9taXNlc1tpXSA9IGRlZmVyLnByb21pc2lmeShwcm9taXNlc1tpXSk7XG5cdFx0XHRcdHByb21pc2VzW2ldLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24odil7XG5cdFx0XHRcdFx0XHRpZiAoISAoaSBpbiBhcmdzKSApIHsgLy9AdG9kbyBjaGVjayB0aGlzIGlzIHN0aWxsIHJlcXVpcmVkIGFzIHByb21pc2VzIGNhbid0IGJlIHJlc29sdmUgbW9yZSB0aGFuIG9uY2Vcblx0XHRcdFx0XHRcdFx0YXJnc1tpXSA9IHJldHVyblByb21pc2VzID8gcHJvbWlzZXNbaV0gOiB2O1xuXHRcdFx0XHRcdFx0XHQoLS1jKSB8fCBkLnJlc29sdmUoYXJncyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHRpZighIChpIGluIGFyZ3MpICl7XG5cdFx0XHRcdFx0XHRcdGlmKCAhIHJldHVyblByb21pc2VzICl7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0YXJnc1tpXSA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH07XG5cdFx0XHRmb3IoIHZhciBpID0gMCwgbCA9IGM7IGkgPCBsOyBpKysgKXtcblx0XHRcdFx0cmVzb2x2ZXIoaSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkLnByb21pc2U7XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgYWxsIGdpdmVuIHByb21pc2VzIC8gdmFsdWVzLlxuXHQgKiB0aGUgcmV0dXJuZWQgcHJvbWlzZXMgd2lsbCBiZSBmdWxmaWxsZWQgd2l0aCBhIGxpc3Qgb2YgcmVzb2x2ZWQgdmFsdWUuXG5cdCAqIGlmIGFueSBnaXZlbiBwcm9taXNlIGlzIHJlamVjdGVkIHRoZW4gb24gdGhlIGZpcnN0IHJlamVjdGlvbiB0aGUgcmV0dXJuZWQgcHJvbWlzZWQgd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lIHJlYXNvblxuXHQgKiBAcGFyYW0ge2FycmF5fC4uLip9IFtwcm9taXNlXSBjYW4gYmUgYSBzaW5nbGUgYXJyYXkgb2YgcHJvbWlzZS92YWx1ZXMgYXMgZmlyc3QgcGFyYW1ldGVyIG9yIGEgbGlzdCBvZiBkaXJlY3QgcGFyYW1ldGVycyBwcm9taXNlL3ZhbHVlXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBvZiBhIGxpc3Qgb2YgZ2l2ZW4gcHJvbWlzZSByZXNvbHV0aW9uIHZhbHVlXG5cdCAqL1xuXHRkZWZlci5hbGwgPSBmdW5jdGlvbigpeyByZXR1cm4gbXVsdGlQcm9taXNlUmVzb2x2ZXIoYXJndW1lbnRzLGZhbHNlKTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGFuIGFsd2F5cyBmdWxmaWxsZWQgcHJvbWlzZSBvZiBhcnJheTxwcm9taXNlPiBsaXN0IG9mIHByb21pc2VzL3ZhbHVlcyByZWdhcmRsZXNzIHRoZXkgcmVzb2x2ZSBmdWxmaWxsZWQgb3IgcmVqZWN0ZWRcblx0ICogQHBhcmFtIHthcnJheXwuLi4qfSBbcHJvbWlzZV0gY2FuIGJlIGEgc2luZ2xlIGFycmF5IG9mIHByb21pc2UvdmFsdWVzIGFzIGZpcnN0IHBhcmFtZXRlciBvciBhIGxpc3Qgb2YgZGlyZWN0IHBhcmFtZXRlcnMgcHJvbWlzZS92YWx1ZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgIChub24gcHJvbWlzZSB2YWx1ZXMgd2lsbCBiZSBwcm9taXNpZmllZClcblx0ICogQHJldHVybnMge3Byb21pc2V9IG9mIHRoZSBsaXN0IG9mIGdpdmVuIHByb21pc2VzXG5cdCAqL1xuXHRkZWZlci5yZXNvbHZlQWxsID0gZnVuY3Rpb24oKXsgcmV0dXJuIG11bHRpUHJvbWlzZVJlc29sdmVyKGFyZ3VtZW50cyx0cnVlKTsgfTtcblxuXHQvKipcblx0ICogdHJhbnNmb3JtIGEgdHlwaWNhbCBub2RlanMgYXN5bmMgbWV0aG9kIGF3YWl0aW5nIGEgY2FsbGJhY2sgYXMgbGFzdCBwYXJhbWV0ZXIsIHJlY2VpdmluZyBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIgdG8gYSBmdW5jdGlvbiB0aGF0XG5cdCAqIHdpbGwgcmV0dXJuIGEgcHJvbWlzZSBpbnN0ZWFkLiB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCBub3JtYWwgY2FsbGJhY2sgdmFsdWUgbWludXMgdGhlIGZpcnN0IGVycm9yIHBhcmFtZXRlciBvblxuXHQgKiBmdWxmaWxsIGFuZCB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhhdCBlcnJvciBhcyByZWFzb24gaW4gY2FzZSBvZiBlcnJvci5cblx0ICogQHBhcmFtIHtvYmplY3R9IFtzdWJqZWN0XSBvcHRpb25hbCBzdWJqZWN0IG9mIHRoZSBtZXRob2QgdG8gZW5jYXBzdWxhdGVcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gdGhlIGZ1bmN0aW9uIHRvIGVuY2Fwc3VsYXRlIGlmIHRoZSBub3JtYWwgY2FsbGJhY2sgc2hvdWxkIHJlY2VpdmUgbW9yZSB0aGFuIGEgc2luZ2xlIHBhcmFtZXRlciAobWludXMgdGhlIGVycm9yKVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICB0aGUgcHJvbWlzZSB3aWxsIHJlc29sdmUgd2l0aCB0aGUgbGlzdCBvciBwYXJhbWV0ZXJzIGFzIGZ1bGZpbGxtZW50IHZhbHVlLiBJZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgc2VudCB0byB0aGVcblx0ICogICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgdGhlbiBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHJlc29sdXRpb24gdmFsdWUuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn1cblx0ICovXG5cdGRlZmVyLm5vZGVDYXBzdWxlID0gZnVuY3Rpb24oc3ViamVjdCwgZm4pe1xuXHRcdGlmICggIWZuICkge1xuXHRcdFx0Zm4gPSBzdWJqZWN0O1xuXHRcdFx0c3ViamVjdCA9IHZvaWQoMCk7XG5cdFx0fVxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGQgPSBkZWZlcigpLCBhcmdzID0gc2xpY2UoYXJndW1lbnRzKTtcblx0XHRcdGFyZ3MucHVzaChmdW5jdGlvbihlcnIsIHJlcyl7XG5cdFx0XHRcdGVyciA/IGQucmVqZWN0KGVycikgOiBkLnJlc29sdmUoYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBzbGljZShhcmd1bWVudHMsIDEpIDogcmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRmbi5hcHBseShzdWJqZWN0LCBhcmdzKTtcblx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0ZC5yZWplY3QoZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdH07XG5cdH07XG5cblx0dHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZTdHIgJiYgKHdpbmRvdy5EID0gZGVmZXIpO1xuXHR0eXBlb2YgbW9kdWxlICE9PSB1bmRlZlN0ciAmJiBtb2R1bGUuZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSBkZWZlcik7XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCIvci91c2VyL2xvZ2luXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvdXNlci9sb2dvdXRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci91c2VyL2Fib3V0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvdXNlci9hdXRvc2F2ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3VzZXIvcmVsZWFzZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvY3JlYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wb29sXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9yZWN5Y2xlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9waW5nXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9hYm91dFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvYWJvdXQvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9zYXZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9zYXZlYXNcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2Nsb3NlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9ncmFudFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvaW1wb3J0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leHBvcnRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9jb2RlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3NjcmlwdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9pbnRlcnJ1cHRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2V4ZWN1dGUvY29uc29sZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9oaXN0b3J5XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL2ZsdXNoXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3Jlc3VsdC9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9leGVjdXRlL3Jlc3VsdC9kb3dubG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZXhlY3V0ZS9yZXN1bHQvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2UvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL2dldFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3VwbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3RyYW5zZmVyXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC93b3Jrc3BhY2UvcHVzaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL3NhdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9zdG9yZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3Qvd29ya3NwYWNlL2xvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3dvcmtzcGFjZS9kZWxldGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvdXBsb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiLFxuICAgICAgICBcInVwbG9hZFwiOiB0cnVlXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvdHJhbnNmZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L2RpcmVjdG9yeS93cml0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3VwZGF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L3N0b3JlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3Byb2plY3QvZGlyZWN0b3J5L2Rvd25sb2FkXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9kaXJlY3RvcnkvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wYWNrYWdlL2xpc3RcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9wcm9qZWN0L3BhY2thZ2UvYXR0YWNoXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcHJvamVjdC9wYWNrYWdlL2RldGFjaFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3Ivam9iL3N1Ym1pdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9zY2hlZHVsZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9xdWVyeVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL2pvYi9jYW5jZWxcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9qb2IvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2NyZWF0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L3JlbmFtZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2NvcHlcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9tb3ZlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9kaXJlY3RvcnkvdXBkYXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9zY3JpcHQvbGlzdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvc2NyaXB0L2V4ZWN1dGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L3NjcmlwdC9yZW5kZXJcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvc2NyaXB0L2ludGVycnVwdFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2FyY2hpdmVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS91cGxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCIsXG4gICAgICAgIFwidXBsb2FkXCI6IHRydWVcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2RpcmVjdG9yeS9kb3dubG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZGlyZWN0b3J5L2RlbGV0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9saXN0XCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2ZldGNoXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2ZldGNoXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL3VwbG9hZFwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIixcbiAgICAgICAgXCJ1cGxvYWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS90cmFuc2ZlclwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS93cml0ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS91cGRhdGVcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvZGlmZlwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3JlcG9zaXRvcnkvZmlsZS9yZXZlcnRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvZ3JhbnRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvZG93bmxvYWRcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvZGVsZXRlXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgIFwiZm9ybWF0XCI6IFwianNvblwiXG4gICAgfSxcblxuICAgIFwiL3IvcmVwb3NpdG9yeS9maWxlL2NvcHlcIjoge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9LFxuXG4gICAgXCIvci9yZXBvc2l0b3J5L2ZpbGUvbW92ZVwiOiB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImZvcm1hdFwiOiBcImpzb25cIlxuICAgIH0sXG5cbiAgICBcIi9yL3NlcnZlci9pbmZvXCI6IHtcbiAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgXCJmb3JtYXRcIjogXCJqc29uXCJcbiAgICB9XG59XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIHdpbiAgICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSwgICBcbiAgICByZXF1ZXN0ICAgICA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKSxcbiAgICBEICAgICAgICAgICA9IHJlcXVpcmUoJ2QuanMnKSxcbiAgICBmcyAgICAgICAgICA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgYXBpcyAgICAgICAgPSByZXF1aXJlKCcuL2FwaXMuanNvbicpLCBcbiAgICBFdmVudFN0cmVhbSA9IHJlcXVpcmUoJy4vbGliL2VzJyksXG4gICAgdXRpbHMgICAgICAgPSByZXF1aXJlKCcuL2xpYi91dGlscycpLFxuICAgIExhbmcgICAgICAgID0gcmVxdWlyZSgnLi9saWIvbGFuZycpLCAgIFxuICAgIExvZ2dlciAgICAgID0gcmVxdWlyZSgnLi9saWIvbG9nZ2VyJyksICAgXG4gICAgUXVldWUgICAgICAgPSByZXF1aXJlKCcuL2xpYi9xdWV1ZScpLFxuICAgIEVtaXR0ZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW1pdHRlcicpLFxuICAgIGVuY29kZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW5jb2RlcicpLFxuICAgIEJhc2UgICAgICAgID0gcmVxdWlyZSgnLi9saWIvc2VsZmlzaCcpLkJhc2UsXG4gICAgUklucHV0ICAgICAgPSByZXF1aXJlKCcuL2xpYi9yaW5wdXQnKSwgICAgXG4gICAgUklucHV0cyAgICAgPSByZXF1aXJlKCcuL2xpYi9yaW5wdXRzJyksXG4gICAgbWVyZ2UgICAgICAgPSB1dGlscy5tZXJnZTtcblxuLypcbiAqIFR1cm4gZ2xvYmFsIGxvZ2dpbmcgb2ZmIGJ5IGRlZmF1bHRcbiAqL1xuTG9nZ2VyLnNldExldmVsKExvZ2dlci5PRkYpO1xuXG4vKlxuICogR2xvYmFsIG9wdGlvbnMgdGhhdCBwZXJzaXN0IHRocm91Z2ggYWxsIERlcGxveVIgcmVxdWVzdHMuXG4gKi9cbnZhciBnbG9iYWxPcHRpb25zID0geyBcbiAgY29yczogZmFsc2UsXG4gIGxvZ2dpbmc6IGZhbHNlLFxuICBzdGlja3k6IGZhbHNlLFxuICBoZWFkZXJzOiBudWxsLFxuICBob3N0OiAnJyxcbiAgYWxsb3dTZWxmU2lnbmVkU1NMQ2VydDogZmFsc2UsXG4gIG1heFJlcXVlc3RzOiBudWxsLCAvLyBubyBzb2NrZXQgcG9vbGluZyBpbiBodHRwLkFnZW50XG4gIGV2ZW50czp7fSxcbiAgc2V0OiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkgeyBcbiAgICBpZiAocHJvcCAhPT0gJ3NldCcpIHsgXG4gICAgICBpZiAocHJvcCA9PT0gJ2hvc3QnICYmIHZhbHVlKSB7ICAgICAgICAgXG4gICAgICAgICAvLyBCZSBtb3JlIGZvcmdpdmluZyBvbiB0aGUgZW50ZXJlZCBEZXBsb3lSICdlbmRwb2ludCc6XG4gICAgICAgICAvLyAgIC0gaHR0cChzKTovL2Rob3N0OnBvcnRcbiAgICAgICAgIC8vICAgLSBodHRwKHMpOi8vZGhvc3Q6cG9ydC9kZXBsb3lyXG4gICAgICAgICAvLyAgIC0gZGhvc3Q6cG9ydFxuICAgICAgICAgLy8gICAtIGRob3N0OnBvcnQvZGVwbG95ciAgICAgICAgIFxuICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8qJHxcXC8qZGVwbG95clxcLyokLywgJycpO1xuICAgICAgICAgdmFsdWUgPSAobmV3IFJlZ0V4cCgnXihodHRwfGh0dHBzKTovLycsICdpJykpLnRlc3QodmFsdWUpID8gdmFsdWUgOiBcbiAgICAgICAgICAgICdodHRwOi8vJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzW3Byb3BdID0gdmFsdWU7IFxuICAgIH0gXG4gIH1cbn07XG5cbi8qXG4gKiBUaGUgdG9wLWxldmVsIERlcGxveVIgQVBJIHJlc3BvbnNlIGVudGl0aWVzLlxuICovXG52YXIgVE9QTEVWRUxfRU5USVRJRVMgPSBbXG4gICd1c2VyJywgXG4gICdwcm9qZWN0JywgXG4gICd3b3Jrc3BhY2UnLCBcbiAgJ2V4ZWN1dGlvbicsIFxuICAnZGlyZWN0b3J5JywgXG4gICdyZXBvc2l0b3J5JywgXG4gICdwYWNrYWdlcycgXG5dO1xuXG4vKlxuICogSGVhZGVyIHRva2VuIGZvciBDU1JGLlxuICovXG52YXIgWF9YU1JGX1RPS0VOID0gJ3gteHNyZi10b2tlbic7XG5cbi8qXG4gKiBOb3RpZnkgZ2xvYmFsIElPIGVycm9yIGV2ZW50cyBhY2Nlc3NpYmxlIGJ5IGFsbCBzdWJzY3JpYmVycyBhY3Jvc3MgcmVxdWVzdHMuXG4gKi9cbmZ1bmN0aW9uIHJhaXNlR2xvYmFsRXJyb3JzKGFwaSwgcmVzKSB7XG4gIHZhciBjb2RlICAgID0gcmVzLmRlcGxveXIgPyByZXMuZGVwbG95ci5yZXNwb25zZS5lcnJvckNvZGUgOiByZXMuc3RhdHVzLFxuICAgICAgY29udGV4dCA9IHRoaXM7XG5cbiAgLy8gLS0gZ2xvYmFsIGV2ZW50cyBpZiBwcm92aWRlZCAtLVxuICBpZiAoZ2xvYmFsT3B0aW9ucy5ldmVudHMpIHtcbiAgICBpZiAoIXJlcy5kZXBsb3lyKSB7XG4gICAgICByZXMgPSByZXMudGV4dDtcbiAgICB9XG5cbiAgICBjb250ZXh0ID0gZ2xvYmFsT3B0aW9ucy5ldmVudHMuY3R4IHx8IGNvbnRleHQ7XG5cbiAgICAvLyAtLSBnZW5lcmFsIGdsb2JhbCBmYWlsdXJlIC0tXG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuZXZlbnRzLmVycm9yKSB7XG4gICAgICBnbG9iYWxPcHRpb25zLmV2ZW50cy5lcnJvci5hcHBseShjb250ZXh0LCBbYXBpLCByZXNdKTtcbiAgICB9XG5cbiAgICAvLyAtLSBIVFRQIG9yIERlcGxveVIgZ2xvYmFsIGVycm9ycyAtLSAgICBcbiAgICBpZiAoZ2xvYmFsT3B0aW9ucy5ldmVudHNbY29kZV0pIHtcbiAgICAgIGdsb2JhbE9wdGlvbnMuZXZlbnRzW2NvZGVdLmFwcGx5KGNvbnRleHQsIFthcGksIHJlc10pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoZSBgRGVwbG95UmAgcmVxdWVzdCBjbGFzcyBpcyBhIHV0aWxpdHkgdGhhdCBicm9rZXJzIEhUVFAgcmVxdWVzdHMgdGhyb3VnaCBhIFxuICogc2ltcGxpZmllZCBmbHVpZCBpbnRlcmZhY2UgdG8gRGVwbG95Ui5cbiAqXG4gKiBAbW9kdWxlIGRlcGxveXJcbiAqIEBmb3IgZGVwbG95clxuICovXG52YXIgRGVwbG95UiA9IEJhc2UuZXh0ZW5kKEVtaXR0ZXIsIFJJbnB1dHMsIHtcblxuICAvKipcbiAgICogVGhlIGBEZXBsb3lSYCBSZXF1ZXN0IGNsYXNzIGlzIGEgdXRpbGl0eSB0aGF0IGJyb2tlcnMgSFRUUCByZXF1ZXN0cyB0aHJvdWdoIFxuICAgKiBhIHNpbXBsaWZpZWQgZmx1aWQgaW50ZXJmYWNlIHRvIERlcGxveVIuXG4gICAqIFxuICAgKiBAY2xhc3MgXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBEZXBsb3lSIEFQSVxuICAgKiBAcGFyYW0ge09iamVjdH0gbGluayBUaGUgb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyB0aGUgcHJldmlvdXMgcmVxdWVzdC5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKGFwaSwgbGluaykge1xuICAgICBFbWl0dGVyLmluaXRpYWxpemUuY2FsbCh0aGlzLCB7fSk7XG4gIFxuICAgICB2YXIgb3B0cyA9IGdsb2JhbE9wdGlvbnM7XG5cbiAgICAgaWYgKCFhcGlzW2FwaV0pIHsgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFQSSBcIicgKyBhcGkgKyAnXCInKTsgfVxuICAgIFxuICAgICB0aGlzLmFwaSAgICAgICAgPSBtZXJnZSh7ICdjYWxsJzogYXBpIH0sIGFwaXNbYXBpXSk7ICAgIFxuICAgICB0aGlzLmxpbmsgICAgICAgPSBsaW5rIHx8IHt9O1xuICAgICB0aGlzLnEgICAgICAgICAgPSB0aGlzLmxpbmsucXVldWUgfHwgbmV3IFF1ZXVlKCk7XG4gICAgIHRoaXMuZGVmZXJyZWQgICA9IHRoaXMubGluay5kZWZlcnJlZCB8fCBEKCk7XG4gICAgIHRoaXMuaGVhZGVycyAgICA9IHRoaXMubGluay5oZWFkZXJzO1xuICAgICB0aGlzLmxvZ2dlciAgICAgPSBMb2dnZXIuZ2V0KGFwaSwgTG9nZ2VyLk9GRik7IC8vIHRyYW5zYWN0aW9uLWxldmVsIGxvZ2dpbmdcbiAgICAgdGhpcy5wYXJhbXMgICAgID0ge307XG4gICAgIHRoaXMuaW5wdXRzICAgICA9IFtdOyAvLyByaW5wdXRzIGxpc3QgXG4gICAgIHRoaXMub3V0cHV0cyAgICA9IFtdOyAvLyByb3V0cHV0IG9iamVjdCBsaXN0XG4gICAgIHRoaXMucnN0cmVhbSAgICA9IGZhbHNlO1xuICAgICB0aGlzLmRlbGF5ZWQgICAgPSBmYWxzZTtcbiAgICAgdGhpcy5nbG9iYWxFdnRzID0gdHJ1ZTsgLy8gc3VwcHJlc3N8cmFpc2UgZ2xvYmFsIGV2ZW50cyBmb3QgdGhpcyBgaW9gICAgICBcbiAgICAgdGhpcy5maWxlICAgICAgID0gbnVsbDsgXG4gICAgIHRoaXMuZW50aXRpZXMgICA9IG51bGw7IFxuICAgICB0aGlzLmlvRmlsdGVyICAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH07XG5cbiAgICAgLy8gcHJlc2V0IGRlcGxveXIncyBhc3NpZ25lZCByZXNwb25zZSBmb3JtYXQgZm9yIGB0aGlzYCBhcGlcbiAgICAgdGhpcy5kYXRhKHsgZm9ybWF0OiB0aGlzLmFwaS5mb3JtYXQgfSk7XG5cbiAgICAgLy8gd3JhcCBzdXBlcmFnZW50IGZvciB0aGUgaGVhdnkgbGlmdGluZyAgICAgXG4gICAgIHRoaXMucmVxID0gXG4gICAgICAgIHJlcXVlc3RbdGhpcy5hcGkubWV0aG9kLnRvTG93ZXJDYXNlKCldKG9wdHMuaG9zdCArICcvZGVwbG95cicgKyBhcGkpO1xuICAgICB0aGlzLnJlcS50aW1lb3V0KDIwICogNjAgKiAxMDAwKTsgLy8gZGVmYXVsdCB0aW1lb3V0IC0tPiAyMCBtaW51dGVzXG5cbiAgICAgLy8gQWxsIENPUlMgZGVwbG95ciBjYWxscyByZXF1aXJlIHN0aWNreSBzZXNzaW9uc1xuICAgICBpZiAod2luICYmIGdsb2JhbE9wdGlvbnMuY29ycykgeyB0aGlzLnJlcS53aXRoQ3JlZGVudGlhbHMoKTsgfVxuXG4gICAgIC8vIE5vZGUuanMgLSBhY2Nlc3MgYW4gU1NMIGVuZHBvaW50IHdpdGggc2VsZiBzaWduZWQgY2VydHMgZm9yIHRlc3Rpbmd8ZGV2XG4gICAgIGlmICghd2luICYmIGdsb2JhbE9wdGlvbnMuYWxsb3dTZWxmU2lnbmVkU1NMQ2VydCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEID0gJzAnOyAgICAgICAgXG4gICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQmluZHMgdGhlIHNjb3BlIGNvbnRleHQgZm9yIHRoZSBjb25maWd1cmVkIGAuZW5kKClgIGFuZCBgLmVycm9yKClgIGV2ZW50ICAgIFxuICAgKiBoYW5kbGVyIGNhbGxiYWNrcyBvbiB0aGlzIHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgY3R4XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IFRoZSBgdGhpc2Agb2JqZWN0IGZvciB0aGUgY29uZmlndXJlZCBgLmVuZCgpYCBhbmRcbiAgICogYC5lcnJvcigpYCBldmVudCBoYW5kbGVycyBvbiB0aGlzIHJlcXVlc3QuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyBcbiAgY3R4OiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIHRoaXMuc2NvcGUgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogU3VwcHJlc3Mgb3IgcmFpc2UgZ2xvYmFsIGV2ZW50cyBmb3IgdGhpcyBgaW9gIHJlcXVlc3QuXG4gICAqXG4gICAqIEBtZXRob2QgZ2xvYmFsXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmFpc2UgYHRydWVgIHRvIHJhaXNlIGdsb2JhbCBldmVudHMsIGBmYWxzZWAgdG8gc3VwcmVzcyBcbiAgICogZXZlbnQgZmlyaW5nIGdsb2JhbGx5LlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgXG4gIGdsb2JhbDogZnVuY3Rpb24ocmFpc2UpIHtcbiAgICB0aGlzLmdsb2JhbEV2dHMgPSBMYW5nLmlzQm9vbGVhbihyYWlzZSkgPyByYWlzZSA6IHRoaXMuZ2xvYmFsRXZ0cztcblxuICAgIHJldHVybiB0aGlzO1xuICB9LCAgXG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGRldGFpbHMgYWJvdXQgdXNlci5cbiAgICogICBcbiAgICogQG1ldGhvZCBhYm91dFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGRldGFpbHMgYWJvdXQgdXNlciBvdGhlcndpZXMgYG51bGxgLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgYWJvdXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IHRoaXMucmVxLnJlcztcblxuICAgIHJldHVybiB0aGlzLmFwaVsnY2FsbCddID09PSAnL3IvdXNlci9sb2dpbicgJiYgcmVzcG9uc2UgPyBcbiAgICAgICAgICAgcmVzcG9uc2UuYm9keS5nZXQoJ3VzZXInKSA6IG51bGw7XG4gIH0sICBcblxuICAvKipcbiAgICogU2hhcmVzIHRoZSBjb29raWUgYW5kIENTUkYgdG9rZW5zIGZyb20gYSBkaWZmZXJlbiBgLmlvKClgIGFnZW50IHRvIHByZXNlcnZlIFxuICAgKiBzZXNzaW9uIHN0YXRlIGFjcm9zcyBgdGhpc2AgcmVxdWVzdCBhbmQgYWxsIHJlcXVlc3RzIGNoYWluZWQgdG8gaXQuICAgXG4gICAqXG4gICAqIEBtZXRob2Qgc2hhcmVcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gIFxuICBzaGFyZTogZnVuY3Rpb24gKGhlYWRlcnMpIHsgICBcblxuICAgIGlmIChnbG9iYWxPcHRpb25zLnN0aWNreSkgeyAgICAgICBcbiAgICAgIGlmIChnbG9iYWxPcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gZ2xvYmFsT3B0aW9ucy5oZWFkZXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGhlYWRlcnMpIHsgXG4gICAgICAgICAgdGhpcy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgJ0Nvb2tpZSc6IGhlYWRlcnNbJ3NldC1jb29raWUnXSB8fCBoZWFkZXJzWydDb29raWUnXSxcbiAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiBoZWFkZXJzW1hfWFNSRl9UT0tFTl1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGdsb2JhbE9wdGlvbnMuc2V0KCdoZWFkZXJzJywgdGhpcy5oZWFkZXJzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzID8ge1xuICAgICAgICAnQ29va2llJzogaGVhZGVyc1snc2V0LWNvb2tpZSddIHx8IGhlYWRlcnNbJ0Nvb2tpZSddLFxuICAgICAgICAneC14c3JmLXRva2VuJzogaGVhZGVyc1tYX1hTUkZfVE9LRU5dXG4gICAgICB9IDogdGhpcy5oZWFkZXJzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LCAgXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEhUVFAgaGVhZGVycyBpbmNsdWRpbmcgdGhlIGNvb2tpZSBwcmV2aW91c2x5IHNlbnQgYnkgdGhlIHNlcnZlciBcbiAgICogd2l0aCBTZXQtQ29va2llIGluIGFkZGl0aW9uIHRvIHRoZSBYLVhTUkYtVE9LRU4uXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIHBhc3NlZCB0byBgLnNoYXJlKHJ1c2VyLmdldEhlYWRlcnMoKSlgIG9mIGEgZGlmZnJlbnRcbiAgICogYC5pbygpYCBhZ2VudCB0byBwcmVzZXJ2ZSBzZXNzaW9uIHN0YXRlIGFjcm9zcyByZXF1ZXN0cy5cbiAgICpcbiAgICogQG1ldGhvZCBnZXRIZWFkZXJzXG4gICAqIEByZXR1cm4ge0FycmF5fSBUaGUgSFRUUCBjb29raWUgcHJldmlvdXNseSBzZW50IGJ5IHRoZSBzZXJ2ZXIgd2l0aCBcbiAgICogU2V0LUNvb2tpZS5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgZ2V0SGVhZGVyczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRlcnM7XG4gIH0sIFxuXG4gIC8qKlxuICAgKiBQbGVhc2UgdXNlIGBnZXRIZWFkZXJzKClgLlxuICAgKlxuICAgKiBARGVwcmVjYXRlZCBcbiAgICovXG4gIGdldENvb2tpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRIZWFkZXJzKCk7XG4gIH0sICAgICAgXG5cbiAgZGVsYXk6IGZ1bmN0aW9uIChtcykge1xuICAgIC8vIFRPRE86IHN1cHBvcnQgZGVsYXllZCByZXF1ZXN0cyBiYXNlZCBvbiBtcyBmb3Igbm93IHRoaXMgaXMganVzdCBhIHBhdXNlLlxuICAgIHRoaXMuZGVsYXllZCA9ICFpc05hTihwYXJzZUZsb2F0KG1zKSkgJiYgaXNGaW5pdGUobXMpID8gbXMgOiB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICAgXG5cbiAgLyoqXG4gICAqIFVud2luZCB0aGUgcXVldWUgY2hhaW4gY2xlYXJpbmcgcmVxdWVzdHMgdGhhdCBtaWdodCBoYXZlIGRlbGF5cyBhdHRhY2hlZC5cbiAgICpcbiAgICogQG1ldGhvZCBkcmFpblxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2Ugd3JhcHBpbmcgdGhlIHJlc29sdXRpb24gb2YgZWl0aGVyIFwicmVzb2x2ZVwiIG9yXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBkcmFpbjogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgIHRoaXMucS5mbHVzaCgpOyBcblxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkLnByb21pc2U7XG4gIH0sICAgXG5cbiAgLyoqXG4gICAqIFRoZSBgLnByb21pc2UoKWAgbWV0aG9kIHJldHVybnMgYSBkeW5hbWljYWxseSBnZW5lcmF0ZWQgUHJvbWlzZSB0aGF0IGlzIFxuICAgKiByZXNvbHZlZCBvbmNlIGFsbCBEZXBsb3lSIGAuaW8oKWAgcmVxdWVzdHMgaGF2ZSBlbmRlZC5cbiAgICogICBcbiAgICogQG1ldGhvZCBwcm9taXNlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzb2x1dGlvbiBvZiBlaXRoZXIgXCJyZXNvbHZlXCIgb3JcbiAgICogXCJyZWplY3RcIiBjYWxsYmFjay5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovICAgICBcbiAgcHJvbWlzZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZC5wcm9taXNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBYm9ydCB0aGUgRGVwbG95UiByZXF1ZXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGFib3J0ICBcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi8gIFxuICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVxLmFib3J0KCk7XG4gICAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KHRoaXMuX2hhbmRsZUVycm9yKHsgXG4gICAgICAgIHN0YXR1czogJ2Fib3J0JyxcbiAgICAgICAgdGV4dDogJ0RlcGxveVIgcmVxdWVzdCBhYm9ydGVkLidcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuIC8qKlxuICAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gICpcbiAgKiBAbWV0aG9kIHRpbWVvdXQgIFxuICAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAqIEBhcGkgcHVibGljXG4gICovICBcbiAgdGltZW91dDogZnVuY3Rpb24gKG1zKSB7XG4gICAgdGhpcy5yZXEudGltZW91dChtcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuIC8qKlxuICAqIFR1cm4gbG9nZ2luZyBvbiBmb3IgdGhlIHNwZWNpZmljIHRyYW5zYWN0aW9uLlxuICAqXG4gICogQG1ldGhvZCBsb2dcbiAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgKiBAYXBpIHB1YmxpY1xuICAqLyBcbiAgbG9nOiBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICB0aGlzLmxvZ2dlci5zZXRMZXZlbChsZXZlbCB8fCBMb2dnZXIuREVCVUcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgc3VjY2Vzc2Z1bCByZXNwb25zZXMgdG8gY29udGFpbiBvbmx5IGEgdG9wLWxldmVsIERlcGxveVIgQVBJIFxuICAgKiByZXNwb25zZSBlbnRpdGllczpcbiAgICogLSAndXNlcidcbiAgICogLSAncHJvamVjdCdcbiAgICogLSAnd29ya3NwYWNlJyBcbiAgICogLSAnZXhlY3V0aW9uJyBcbiAgICogLSAnZGlyZWN0b3J5JyBcbiAgICogLSAncmVwb3NpdG9yeSdcbiAgICogLSAncGFja2FnZXMnIFxuICAgKiAgIFxuICAgKiBAbWV0aG9kIGVudGl0eVxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGVudGl0eTogZnVuY3Rpb24gKGVudGl0eSkge1xuICAgIHRoaXMuZW50aXRpZXMgPSB1dGlscy5pbkFycmF5KFRPUExFVkVMX0VOVElUSUVTLCBlbnRpdHkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHJlcXVlc3QgZGF0YSBiZWluZyBzZW50IHRvIGEgRGVwbG95UiBBUEkuIFxuICAgKlxuICAgKiBAbWV0aG9kIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIG9iamVjdCBsaXRlcmFsIGNvbmZpZ3VyYXRpb24gaGFzaC4gXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgZGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fTsgICAgXG5cbiAgICAvLyByZW1vdmUgYW55IGlubGluZWQgcmlucHV0KHMpIGFuZCBhdHRhY2ggdGhlbSB0byB0aGUgcmlucHV0KHMpIHByb3BlcnR5XG4gICAgaWYgKGRhdGEucmlucHV0IHx8IGRhdGEucmlucHV0cykge1xuICAgICAgdGhpcy5yaW5wdXQoZGF0YS5yaW5wdXQpO1xuICAgICAgdGhpcy5yaW5wdXRzKGRhdGEucmlucHV0cyk7XG4gICAgfSBcblxuICAgIC8vIHJlbW92ZSBhbnkgYHJlc2VydmVkYCB2YWx1ZXMgdGhhdCBjb3VsZCBoYXZlIGJlZW4gcGFzc2VkIGJ5IG1pc3Rha2VcbiAgICB2YXIgQkxBQ0tMSVNUID0gWydyaW5wdXQnLCAncmlucHV0cycsICdfX2hlYWRlcnNfXyddO1xuICAgIEJMQUNLTElTVC5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7IGRlbGV0ZSBkYXRhW3BhcmFtXTsgfSk7ICBcblxuICAgIHRoaXMucGFyYW1zID0gbWVyZ2UodGhpcy5wYXJhbXMsIGRhdGEpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGEgZmlsZSB0byBiZSB1cGxvYWRlZC4gXG4gICAqXG4gICAqIEBtZXRob2QgYXR0YWNoXG4gICAqIEBwYXJhbSB7RmlsZXxCbG9ifHBhdGh9IGZpbGUgVGhlIGZpbGUgdG8gYmUgYXR0YWNoZWQgZm9yIGFuIHVwbG9hZC4gRm9yIFxuICAgKiBCcm93c2VyIGVudmlyb25tZW50cyB0aGUgSFRNTDUgRmlsZXxCbG9iIGlzIHVzZWQuIEZvciB0aGUgTm9kZS5qcyBcbiAgICogZW52aXJvbm1lbnQsIGEgZmlsZSBwYXRoIGlzIGFjY2VwdGVkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgKG9wdGlvbmFsKSB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byBiZSB1cGxvYWRlZC4gXG4gICAqIFRoaXMgbmFtZSBkb2VzIG5vdCBoYXZlIHRvIG1hdGNoIHRoZSBhY3R1YWwgc291cmNlIGZpbGVuYW1lLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGF0dGFjaDogZnVuY3Rpb24gKGZpbGUsIGZpbGVuYW1lKSB7XG4gICAgaWYgKHRoaXMuYXBpLnVwbG9hZCkge1xuICAgICAgdGhpcy5maWxlID0gZmlsZTtcblxuICAgICAgLy8gb3B0aW9uYWwgZmlsZW5hbWUgaGVyZSBmb3IgY29udmVuaWVuY2VcbiAgICAgIGlmIChmaWxlbmFtZSkgeyB0aGlzLmRhdGEoIHsgZmlsZW5hbWU6IGZpbGVuYW1lIH0gKTsgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdXBwb3J0ZWQgb25seSBpbiBOb2RlLmpzLCB0aGlzIG1ldGhvZCB3b3JrcyBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBcbiAgICogYXR0YWNoIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBmaWxlIHNob3VsZCBiZSByZWFkIGluIGFzIGEgcmVhZGFibGUgXG4gICAqIHN0cmVhbSBkdXJpbmcgYSBmaWxlIHVwbG9hZC5cbiAgICpcbiAgICogQG1ldGhvZCBzdHJlYW1cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgKG9wdGlvbmFsKSB0aGUgUmVhZGFibGUgU3RyZWFtIG9wdGlvbnMgaGFzaC5cbiAgICogIGBgYFxuICAgKiAgICB7IGZsYWdzOiAncicsXG4gICAqICAgICAgZW5jb2Rpbmc6IG51bGwsXG4gICAqICAgICAgZmQ6IG51bGwsXG4gICAqICAgICAgbW9kZTogMDY2NixcbiAgICogICAgICBhdXRvQ2xvc2U6IHRydWVcbiAgICogICAgfVxuICAgKiBgYGBcbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBzdHJlYW06IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJzdHJlYW0gPSAoIXdpbiAmJiB0aGlzLmFwaS51cGxvYWQpOyAvL25vZGVqcyBvbmx5XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGBmaWx0ZXIozrspYCBtZXRob2QgcmVtb3ZlcyB0aGlzIERlcGxveVIgcmVxdWVzdCBmcm9tIHRoZSByZXF1ZXN0IGNoYWluXG4gICAqIGlmIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBkb2VzICpub3QqIHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgaXQuXG4gICAqXG4gICAqIEV4YW1wbGVzOlxuICAgKlxuICAgKiBgYGBcbiAgICogLy8gUmVtb3ZlIGZyb20gdGhlIHJlcXVlc3QgY2hhaW5cbiAgICogLmZpbHRlcihmdW5jdGlvbihhcmdzKSB7XG4gICAqICAgIHJldHVybiA1ID4gMTA7XG4gICAqIH0pXG4gICAqXG4gICAqIC8vIEtlZXAgaW4gdGhlIHJlcXVlc3QgY2hhaW5cbiAgICogLmZpbHRlcihmdW5jdGlvbihhcmdzKSB7XG4gICAqICAgIHJldHVybiAxMCA+IDU7XG4gICAqIH0pICAgXG4gICAqIGBgYFxuICAgKlxuICAgKiBAbWV0aG9kIGZpbHRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSDOuyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgZmlsdGVyOiBmdW5jdGlvbihmbikge1xuICAgIGlmIChmbikge1xuICAgICAgdGhpcy5pb0ZpbHRlciA9IGZ1bmN0aW9uKHByZXZBcmdzKSB7XG4gICAgICAgIHZhciBhcmdzID0ge30sIGtlZXA7XG5cbiAgICAgICAgLy8gY29weSBvdmVyIHByZXZpb3VzIGFyZ3VtZW50cyBhbmQgZmlsdGVyIG91dCBpbnRlcm5hbCBfX2hlYWRlcnNfXyBcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByZXZBcmdzKSB7XG4gICAgICAgICAgIGlmIChrZXkgIT09ICdfX2hlYWRlcnNfXycpIHsgXG4gICAgICAgICAgICAgIGFyZ3Nba2V5XSA9IHByZXZBcmdzW2tleV07XG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGtlZXAgPSBmbihhcmdzKTtcbiAgICAgICAgcmV0dXJuIChrZWVwIHx8IGtlZXAgPT09IGZhbHNlID8ga2VlcCA6IHRydWUpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgIFxuICBcbiAgLyoqXG4gICAqIEFjdHMgYXMgYSBmaW5hbGx5IHN0YXRlbWVudCBhbGxvd2luZyB5b3UgdG8gZXhlY3V0ZSBcImNsZWFudXBcIiB0eXBlIHRhc2tzIFxuICAgKiBpbiBhIHJlcXVlc3QgY2hhaW4uIEl0IGFycmFuZ2VzIGZvciBjbGVhbnVwIHRvIGJlIGNhbGxlZCwgd2l0aCBubyBcbiAgICogYXJndW1lbnRzLCB3aGVuIHRoZSBEZXBsb3lSIHJlcXVlc3QgY2hhaW4gaXMgZWl0aGVyIGNvbXBsZXRlbHkgZnVsZmlsbGVkIFxuICAgKiBvciByZWplY3RlZC5cbiAgICpcbiAgICogQG1ldGhvZCBlbnN1cmVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gzrsgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovICBcbiAgZW5zdXJlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICB0aGlzLmRlZmVycmVkLnByb21pc2UuZW5zdXJlKGZuKTtcblxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkLnByb21pc2U7XG4gIH0sXG4gICAgICBcbiAgLyoqXG4gICAqIFRoZSBnZW5lcmFsIGZhaWx1cmUgY2FsbGJhY2suIElmIGNhbGxlZCwgYWxsIERlcGxveVIgZXJyb3JzIGZvciB0aGlzIFxuICAgKiB0cmFuc2FjdGlvbiB3aWxsIGJlIHJldHVybmVkIGhlcmUgd2hlbiByYWlzZWQuXG4gICAqXG4gICAqIEBtZXRob2QgZXJyb3JcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gzrsgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmdcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGVycm9yOiBmdW5jdGlvbiAoZm4pIHtcbiAgICB0aGlzLm9uKCdlcnJvcicsIGZuKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdHJlYW0gdGhlIERlcGxveVIgcmVzcG9uc2UgaW50byB0aGUgcGlwZS4gSXQgaXMgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCBpZiBcbiAgICogdGhlIGAucGlwZSgpYCBtZXRob2QgaXMgbmV2ZXIgY2FsbGVkIHRoZSByZXF1ZXN0IHdpbGwgbm90IGJlIHNlbnQuXG4gICAqXG4gICAqIFRoZSBgLnBpcGUoKWAgbWV0aG9kIHNob3VsZCBiZSBiZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIHRvIGAuZW5kKClgIGFuZCBcbiAgICogbmV2ZXIgYWxvbmcgc2lkZSBvZiBpdC4gYC5waXBlKClgIGFuZCBgLmVuZCgpYCBhcmUgYW4gZWl0aGVyLW9yLlxuICAgKlxuICAgKiBAbWV0aG9kIHBpcGVcbiAgICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSBBIGRlc3RpbmF0aW9uIFN0cmVhbS5cbiAgICogQHJldHVybiB7U3RyZWFtfSBUaGUgcGFzc2VkIGluIGRlc3RpbmF0aW9uIHN0cmVhbSB0byBiZSB1c2VkIGZvciBhZGRpdGlvbmFsIFxuICAgKiBwaXBpbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBwaXBlOiBmdW5jdGlvbiAoZGVzdCkge1xuICAgIHZhciBxICAgPSB0aGlzLnEsXG4gICAgICAgIGFwaSA9IHRoaXMuYXBpOyAgICAgICAgXG5cbiAgICBxLmFkZChmdW5jdGlvbihyZXNwb25zZUNoYWluLCBlcnJvciwgcHJldkFyZ3MpIHsgICAgXG4gICAgICAvLyBicmFrZSB0aGUgY2FsbCBjaGFpbiBvbiBlcnJvciAgICAgIFxuICAgICAgaWYgKGVycm9yKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QoZXJyb3IpOyAgICAgIFxuICAgICAgICBxLmZsdXNoKHJlc3BvbnNlQ2hhaW4sIGVycm9yLCBwcmV2QXJncyk7IC8vIGRyYWluIHRoZSBxdWV1ZVxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuX3ByZXBSZXF1ZXN0KHJlc3BvbnNlQ2hhaW4sIHByZXZBcmdzKTtcblxuICAgICAgTG9nZ2VyLmluZm8oJ3BpcGUoKScsIGFwaSwgdGhpcy5yZXEpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygncGlwZSgpJywgYXBpLCB0aGlzLnJlcSk7ICAgXG5cbiAgICAgIHZhciBzdHJlYW0gPSB0aGlzLnJlcS5waXBlKGRlc3QpO1xuICAgICAgcS55aWVsZCh0cnVlKTtcbiAgICAgIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbiAoKSB7IH0pOyAgICBcbiAgICAgIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24oKSB7IH0pOyAgICAgXG4gICAgICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbigpIHsgfSk7ICAgICAgXG4gICAgfSwgdGhpcyk7XG4gIFxuICAgIGlmIChxLnNpemUoKSA8PSAxKSB7IHEuZmx1c2goKTsgfVxuXG4gICAgcmV0dXJuIGRlc3Q7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IGlzIHJlYWR5IHRvIGJlIHNlbnQgdG8gRGVwbG95Ui4gSXQgaXMgaW1wb3J0YW50IFxuICAgKiB0byBub3RlIHRoYXQgaWYgdGhlIGAuZW5kKClgIG1ldGhvZCBpcyBuZXZlciBjYWxsZWQgdGhlIHJlcXVlc3Qgd2lsbCBub3QgYmVcbiAgICogc2VudC5cbiAgICpcbiAgICogQG1ldGhvZCBlbmRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gzrsgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyBcbiAgZW5kOiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgc2VsZiAgICAgPSB0aGlzLFxuICAgICAgICBxICAgICAgICA9IHRoaXMucSxcbiAgICAgICAgYXBpICAgICAgPSB0aGlzLmFwaSxcbiAgICAgICAgYXJncyAgICAgPSBudWxsLFxuICAgICAgICBlbnRpdGllcyA9ICB0aGlzLmVudGl0aWVzO1xuXG4gICAgcS5hZGQoZnVuY3Rpb24ocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKSB7XG4gICAgICAvLyBicmVhayB0aGUgY2FsbCBjaGFpbiBvbiBlcnJvciAgICAgIFxuICAgICAgaWYgKGVycm9yKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QoZXJyb3IpOyAgICAgICAgXG4gICAgICAgIHEuZmx1c2gocmVzcG9uc2VDaGFpbiwgZXJyb3IsIHByZXZBcmdzKTsgLy8gZHJhaW4gdGhlIHF1ZXVlXG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZmlsdGVyIG91dCByZXNwb25zZXMgICAgXG4gICAgICBpZiAoIXRoaXMuaW9GaWx0ZXIocHJldkFyZ3MpKSB7XG4gICAgICAgIGlmIChxLnNpemUoKSA9PT0gMCkgeyBcbiAgICAgICAgICB0aGlzLmRlZmVycmVkLnJlc29sdmUocmVzcG9uc2VDaGFpbiB8fCBwcmV2QXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBxLmZsdXNoKHJlc3BvbnNlQ2hhaW4sIGVycm9yLCBwcmV2QXJncyk7IC8vIGRyYWluIHRoZSBxdWV1ZVxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuX3ByZXBSZXF1ZXN0KHJlc3BvbnNlQ2hhaW4sIHByZXZBcmdzKTtcblxuICAgICAgTG9nZ2VyLmluZm8oJ2lvKCknLCBhcGksIHRoaXMucmV4cSk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdpbygpJywgYXBpLCB0aGlzLnJlcSk7ICAgIFxuXG4gICAgICAvLyBzZW5kIG5leHQgcmVxdWVzdFxuICAgICAgdGhpcy5yZXEuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvL1xuICAgICAgICAvLyBCcm93c2VycyB3aWxsIG5vdCBsZXQgeW91IHNldCBjb29raWVzIG9yIGdyYWIgaGVhZGVycyBhcyBpdCBoYW5kbGVzIFxuICAgICAgICAvLyB0aGF0IGZvciB5b3UuIEhlcmUgd2Ugc3RvcmUgdGhlIGBYLVhTUkYtVE9LRU5gIChzaG91bGQgaXQgYmUgXG4gICAgICAgIC8vIGF2YWlsYWJsZSkgZnJvbSB0aGUgQVBJIHJlc3BvbnNlIGZvciBmdXR1cmUgcmVxdWVzdHMgdGhhdCB3aWxsIFxuICAgICAgICAvLyBgc2hhcmVgIHRoZSBzYW1lIGF1dGhlbnRpY2F0aW9uIEhUVFAgc2Vzc2lvbiArIENTUkYgY3JlZHMuXG4gICAgICAgIC8vXG4gICAgICAgIGlmICh3aW4gJiYgIXJlcy5oZWFkZXJzWydzZXQtY29va2llJ10pIHtcbiAgICAgICAgICB2YXIgciA9IChyZXMuYm9keSAmJiByZXMuYm9keS5kZXBsb3lyID8gcmVzLmJvZHkgOiByZXMpOyAgXG4gICAgICAgICAgaWYgKHIgJiYgci5kZXBsb3lyKSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgaGVhZGVyc1tYX1hTUkZfVE9LRU5dID0gci5kZXBsb3lyLnJlc3BvbnNlWydYLVhTUkYtVE9LRU4nXTtcbiAgICAgICAgICAgIGlmIChoZWFkZXJzW1hfWFNSRl9UT0tFTl0pIHtcbiAgICAgICAgICAgICAgc2VsZi5zaGFyZShoZWFkZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnNoYXJlKHNlbGYuaGVhZGVycyB8fCByZXMuaGVhZGVycyk7ICAgICAgIFxuXG4gICAgICAgIC8vIC0tIGxvZyBjb29raWVzICsgQ1NSRiBhY3Jvc3MgcmVxdWVzdHMgLS1cbiAgICAgICAgaWYgKHNlbGYuaGVhZGVycykge1xuICAgICAgICAgIExvZ2dlci5pbmZvKCdDb29raWUnLCBhcGksIHNlbGYuaGVhZGVycy5Db29raWUpOyBcbiAgICAgICAgICBzZWxmLmxvZ2dlci5pbmZvKCdDb29raWUnLCBhcGksIHNlbGYuaGVhZGVycy5Db29raWUpO1xuICAgICAgICAgIExvZ2dlci5pbmZvKFhfWFNSRl9UT0tFTiwgYXBpLCBzZWxmLmhlYWRlcnNbWF9YU1JGX1RPS0VOXSk7XG4gICAgICAgICAgc2VsZi5sb2dnZXIuaW5mbyhYX1hTUkZfVE9LRU4sIGFwaSwgc2VsZi5oZWFkZXJzW1hfWFNSRl9UT0tFTl0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9yID0gc2VsZi5faGFuZGxlRXJyb3IocmVzKTtcbiAgICAgICAgdmFyIGRyZXMgPSAocmVzLmJvZHkgJiYgcmVzLmJvZHkuZGVwbG95ciA/IHJlcy5ib2R5IDogcmVzKTsgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgc2VsZi5pbnB1dHMgPSBbXTtcbiAgICAgICAgc2VsZi5vdXRwdXRzID0gW107XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAvLyAtLSBMb2cgZ2xvYmFsICsgdHJhbnNhY3Rpb24gbG9nIC0tXG4gICAgICAgICAgIExvZ2dlci5pbmZvKCdlbmQoKScsIGFwaSwgZHJlcywgcmVzKTtcbiAgICAgICAgICAgc2VsZi5sb2dnZXIuaW5mbygnZW5kKCknLCBhcGksIGRyZXMsIHJlcyk7XG5cbiAgICAgICAgICAgLy8gLS0gd2FsayByZXNwb25zZSBmb3IgdG9wLWxldmVsIGVudGl0eSByZXNwb25zZSBhc3NpZ25tZW50IC0tICAgICAgICBcbiAgICAgICAgICAgaWYgKGVudGl0aWVzKSB7IGRyZXMgPSBkcmVzLmRlcGxveXIucmVzcG9uc2VbZW50aXRpZXNdIHx8IGRyZXM7IH1cblxuICAgICAgICAgICBkcmVzLmdldCA9IGZ1bmN0aW9uKGtleSkgeyBcbiAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmdldChkcmVzLmRlcGxveXIucmVzcG9uc2UsIGtleSk7IFxuICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRyZXMud29ya3NwYWNlID0gZnVuY3Rpb24obmFtZSkgeyBcbiAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLndvcmtzcGFjZShkcmVzLmRlcGxveXIucmVzcG9uc2UsIG5hbWUpOyBcbiAgICAgICAgICAgfTtcblxuICAgICAgICAgICAvLyAtLSBjYWxsYmFjayAtLVxuICAgICAgICAgICBpZiAoZm4pIHsgYXJncyA9IGZuLmFwcGx5KHNlbGYuc2NvcGUsIFtkcmVzLCByZXNwb25zZUNoYWluXSk7fVxuXG4gICAgICAgICAgIC8vIC0tIG5vdGlmeSB0aGF0IHRoZSBxdWV1ZSBoYXMgYmVlbiBkcmFpbmVkLi4uIC0tXG4gICAgICAgICAgIGlmIChxLnNpemUoKSA9PT0gMCkgeyBcbiAgICAgICAgICAgICBzZWxmLl9jbGVhcigpO1xuICAgICAgICAgICAgIHNlbGYuZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZUNoYWluIHx8IGRyZXMpO1xuICAgICAgICAgICB9ICAgICAgICAgIFxuXG4gICAgICAgICAgIC8vIC0tIGluY2x1ZGUgaGVhZGVycyBpbiBuZXh0IHJlcXVlc3QgaW4gdGhlIHF1ZXVlIC0tXG4gICAgICAgICAgIGFyZ3MgPSBtZXJnZShhcmdzLCB7IF9faGVhZGVyc19fOiBzZWxmLmhlYWRlcnMgfSk7ICAgICAgICAgIFxuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICBxLnlpZWxkKGZhbHNlKTtcbiAgICAgICAgcS5mbHVzaChkcmVzLCBlcnJvciwgYXJncyk7IC8vIHBhc3MgcmVzdWx0fGVycm9yfGFyZ3MgdG8gbmV4dCBcbiAgICAgIH0pO1xuXG4gICAgICBxLnlpZWxkKHRydWUpO1xuICAgIH0sIHRoaXMsIHRoaXMuZGVsYXllZCk7XG4gIFxuICAgIGlmICghdGhpcy5kZWxheWVkICYmIHEuc2l6ZSgpIDw9IDEpIHsgcS5mbHVzaCgpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSwgXG5cbiAgLyoqIFxuICAgKiBBZGQgYW4gYWRkaXRpb25hbCBJTyByZXF1ZXN0IHRvIHRoZSBleHNpc3Rpbmcgc2VxdWVudGlhbCByZXF1ZXN0IGNoYWluLlxuICAgKlxuICAgKiBAbWV0aG9kIGlvXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgT25lIG9mIHRoZSBzdXBwb3J0ZWQgRGVwbG95UiBBUElzLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqLyAgIFxuICBpbzogZnVuY3Rpb24gKGFwaSkgeyAgICBcbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpLCB7IFxuICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCksXG4gICAgICBxdWV1ZTogdGhpcy5xLCBcbiAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqIFxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgYWRkaW5nIGFuIGFkZGl0aW9uYWwgc2NyaXB0IGV4ZWN1dGlvbiB0byB0aGUgXG4gICAqIGV4c2lzdGluZyBzZXF1ZW50aWFsIHJlcXVlc3QgY2hhaW4uXG4gICAqXG4gICAqIEBtZXRob2Qgc2NyaXB0XG4gICAqIEBwYXJhbSB7QXJndW1lbnRzfSBBcmd1bWVudHMgdG8gZGVmaW5lIHRoZSBmdWxseSBxdWFsaWZpZWQgc2NyaXB0IGZvciBcbiAgICogZXhlY3V0aW9uLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBzY3JpcHQ6IGZ1bmN0aW9uKCkge1xuICAgICB2YXIgYXJncyA9IHV0aWxzLnNpZ25hdHVyZShhcmd1bWVudHMpLFxuICAgICAgICAgb3B0cyA9IGFyZ3Mub3B0cyxcbiAgICAgICAgIGFwaSAgPSBhcmdzLmFwaSxcbiAgICAgICAgIGxpbmsgPSB7IFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpLFxuICAgICAgICAgIHF1ZXVlOiB0aGlzLnEsIFxuICAgICAgICAgIGRlZmVycmVkOiB0aGlzLmRlZmVycmVkXG4gICAgICAgIH07ICBcblxuICAgIC8vIGNvbnZlbmllbmNlIC0gaWYgdGhlIHByb2plY3QgaXMgYSBib29sZW4gYHRydWVgIHJhdGhlciB0aGFuIGEgcGlkLCBmaXJzdFxuICAgIC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCB0aGVuIHByZXBhcmUgdGhlIHByb2plY3QgYXBpIGNhbGwgdG8gZXhlY3V0ZVxuICAgIGlmIChhcmdzLmNyZWF0ZSkge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2NyZWF0ZScsIGxpbmspXG4gICAgICAgICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvamVjdDogcmVzLmdldCgncHJvamVjdCcpLnByb2plY3QgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLmlvKGFwaSlcbiAgICAgICAgICAgICAgIC5kYXRhKG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRGVwbG95Ui5uZXcoYXBpLCBsaW5rKS5kYXRhKG9wdHMpO1xuICAgIH0gICAgXG4gIH0sXG5cbiAgLyoqIFxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgZXhlY3V0aW5nIGEgYmxvY2sgb2YgUiBjb2RlIG9uIHRoZSBSIHNlc3Npb24uXG5cbiAgICogRXhhbXBsZTpcbiAgICogIGBgYFxuICAgKiAgLmNvZGUoJ3g8LTUnKVxuICAgKiAgLy8gLS0gb3IgLS1cbiAgICogIC5jb2RlKCd4PC01JywgcHJvamVjdElkKVxuICAgKiAgYGBgXG4gICAqICAgXG4gICAqIEBtZXRob2QgY29kZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gciAtIFRoZSBibG9jayBvZiBSIGNvZGUgdG8gZXhlY3V0ZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3QgLSAob3B0aW9uYWwpIGlmIG9taXR0ZWQgYSBuZXcgcHJvamVjdCB3aWxsIGZpcnN0IGJlIFxuICAgKiBjcmVhdGVkIGFuZCB1c2VkLCBvdGhlcndpc2UgaXQgd2lsbCBleGVjdXRlIG9uIHRoZSBSIHNlc3Npb24gaWRlbnRpZmllZCBieSBcbiAgICogdGhpcyBgcHJvamVjdGAuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvZGU6IGZ1bmN0aW9uKHIsIHByb2plY3QpIHtcbiAgICAgdmFyIGxpbmsgPSB7XG4gICAgICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCksIFxuICAgICAgICAgICAgIHF1ZXVlOiB0aGlzLnEsXG4gICAgICAgICAgICAgZGVmZXJyZWQ6IHRoaXMuZGVmZXJyZWRcbiAgICAgICAgIH0sXG4gICAgICAgICBhcGkgPSAnL3IvcHJvamVjdC9leGVjdXRlL2NvZGUnO1xuXG4gICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICAgcmV0dXJuIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2NyZWF0ZScsIGxpbmspXG4gICAgICAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvamVjdDogcmVzLmdldCgncHJvamVjdCcpLnByb2plY3QgfTtcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5pbyhhcGkpXG4gICAgICAgICAgICAgLmRhdGEoeyBjb2RlOiByIH0pO1xuICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSwgbGluaykuZGF0YSh7IGNvZGU6IHIsIHByb2plY3Q6IHByb2plY3QgfSk7XG4gICAgIH1cbiAgfSxcbiAgXG4gIC8qKiBcbiAgICogUmVsZWFzZSBhbnkgcmVzaWR1YWwgcHJvamVjdCByZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBhcHBsaWNhdGlvbiBcbiAgICogaW5zdGFuY2Ugd2hlbmV2ZXIgYSBjbGllbnQgYXBwbGljYXRpb24gdGVybWluYXRlcy4gVGhpcyBpbmNsdWRlcyBjbG9zaW5nIFxuICAgKiBhbnkgc3VwcGxpZWQgcHJvamVjdHMgZG93biBhbmQgbG9nZ2luZyBvdXQuXG4gICAqXG4gICAqIEBtZXRob2QgcmVsZWFzZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gcHJvamVjdHMgVGhlIHByb2plY3Qgb3IgbGlzdCBvZiBwcm9qZWN0cyB0byBjbG9zZS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBhdXRoIChvcHRpb25hbCkgdG8gcmVtYWluIGF1dGhlbnRpY2F0ZWQuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJlbGVhc2U6IGZ1bmN0aW9uKHByb2plY3RzLCBhdXRoKSB7XG4gICAgIHByb2plY3RzID0gTGFuZy5pc0FycmF5KHByb2plY3RzKSA/IHByb2plY3RzIDogW3Byb2plY3RzXTtcblxuICAgICB2YXIgc2VsZiAgICAgPSB0aGlzLFxuICAgICAgICAgZGVmZXJyZWQgPSBEKCksXG4gICAgICAgICBlbXB0eSAgICA9ICFwcm9qZWN0cyB8fCAhcHJvamVjdHNbMF0sXG4gICAgICAgICBjb3VudCAgICA9IDAsXG4gICAgICAgICBsYXN0ICAgICA9ICFlbXB0eSA/IHByb2plY3RzLmxlbmd0aCAtIDEgOiBjb3VudCxcbiAgICAgICAgIGhlYWRlcnMgID0gdGhpcy5nZXRIZWFkZXJzKCk7ICAgICAgICAgXG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gbGFzdCkge1xuICAgICAgICBpZiAoIWF1dGgpIHtcbiAgICAgICAgICBEZXBsb3lSLm5ldygnL3IvdXNlci9sb2dvdXQnKVxuICAgICAgICAgIC5zaGFyZShoZWFkZXJzKVxuICAgICAgICAgIC5lcnJvcihmdW5jdGlvbigpIHsgICAgICAgICAgXG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pICAgICAgXG4gICAgICAgICAgLmVuZChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVuc3VyZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZGVzdHJveSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgc2VsZi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgfVxuXG4gICAgaWYgKCFlbXB0eSkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIERlcGxveVIubmV3KCcvci9wcm9qZWN0L2Nsb3NlJylcbiAgICAgICAgLmRhdGEoeyBwcm9qZWN0OiBwcm9qZWN0IH0pXG4gICAgICAgIC5zaGFyZShoZWFkZXJzKVxuICAgICAgICAuZW5kKClcbiAgICAgICAgLmVuc3VyZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBsb2dvdXQoY291bnQpO1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7ICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ291dChjb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7ICBcbiAgfSwgIFxuXG4gIC8qKiBcbiAgICogQSBjb252ZW5pZW5jZSBhbHRlcm5hdGl2ZSB0byBtdWx0aXBsZSBgLnJpbnB1dCgpYCBjYWxscy4gRGVmaW5lcyBhIG5hbWUgXG4gICAqIGxpc3Qgb2YgUiBvYmplY3RzIHRoYXQgd2lsbCBiZSByZXR1cm5lZCBhcyBEZXBsb3lSLWVuY29kZWQgUiBvYmplY3RzIG9uIHRoZSBcbiAgICogcmVzcG9uc2UgbWFya3VwLlxuICAgKlxuICAgKiBDYWxsaW5nIHRoaXMgbWV0aG9kIH4ucm91dHB1dHMoWyAuLi4gXSlgIGlzIGVxdWl2YWxlbnQgdG8gaW52b2tpbmcgbXVsdGlwbGUgXG4gICAqIGAucm91dHB1dCguLi4pYCBjYWxscy5cbiAgICpcbiAgICogQG1ldGhvZCByb3V0cHV0c1xuICAgKiBAcGFyYW0ge0FycmF5fSByb2JqZWN0cyBBIG5hbWUgbGlzdCBvZiBSIG9iamVjdHMgdGhhdCB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICByb3V0cHV0czogZnVuY3Rpb24gKHJvdXRwdXRzKSB7XG4gICAgaWYgKHJvdXRwdXRzKSB7IHRoaXMub3V0cHV0cyA9IHRoaXMub3V0cHV0cy5jb25jYXQocm91dHB1dHMpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgXG4gIC8qKiBcbiAgICogRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgUiBvYmplY3QgdGhhdCB3aWxsIGJlIHJldHVybmVkIGFzIGEgRGVwbG95Ui1lbmNvZGVkIFxuICAgKiBSIG9iamVjdCBvbiB0aGUgcmVzcG9uc2UgbWFya3VwLlxuICAgKlxuICAgKiBAbWV0aG9kIHJvdXRwdXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJvYmplY3QgVGhlIG5hbWUgb2YgdGhlIFIgb2JqZWN0IHRoYXQgd2lsbCBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybiB7RGVwbG95Un0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcm91dHB1dDogZnVuY3Rpb24gKHJvdXRwdXQpIHtcbiAgICBpZiAocm91dHB1dCkgeyB0aGlzLnJvdXRwdXRzKFtyb3V0cHV0XSk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKiBcbiAgICogVXNlZCB0byBwYXNzIG11bHRpcGxlIGlucHV0cyBhdCBvbmNlIGZyb20gSmF2YVNjcmlwdCB0byBhbiBSIHNjcmlwdCB1c2luZyBcbiAgICogb25lIG9mIHRoZSBkZWZpbmVkIGBSSW5wdXRgIGZhY3Rvcmllcy5cbiAgICpcbiAgICogQG1ldGhvZCByaW5wdXRzXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJpbnB1dHMgVGhlIGBSSW5wdXRgIGxpc3Qgb2YgRGVwbG95Ui1zcGVjaWZpYyBlbmNvZGVkIFIgXG4gICAqIG9iamVjdCBkYXRhIGZvciB1c2Ugb24gYW4gQVBJIGNhbGwuXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJpbnB1dHM6IGZ1bmN0aW9uIChyaW5wdXRzKSB7XG4gICAgaWYgKHJpbnB1dHMpIHsgdGhpcy5pbnB1dHMgPSB0aGlzLmlucHV0cy5jb25jYXQocmlucHV0cyk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKiBcbiAgICogVXNlZCB0byBwYXNzIG11bHRpcGxlIGlucHV0cyBhdCBvbmNlIGZyb20gSmF2YVNjcmlwdCB0byBhbiBSIHNjcmlwdCB1c2luZyBcbiAgICogb25lIG9mIHRoZSBkZWZpbmVkIGBSSW5wdXRgIGZhY3Rvcmllcy5cbiAgICpcbiAgICogQG1ldGhvZCByaW5wdXRcbiAgICogQHBhcmFtIHtSSW5wdXR9IHJpbnB1dCBUaGUgRGVwbG95Ui1zcGVjaWZpYyBlbmNvZGVkIFIgb2JqZWN0IGRhdGEgZm9yIHVzZSBcbiAgICogb24gYW4gQVBJIGNhbGwuICAgXG4gICAqIEByZXR1cm4ge0RlcGxveVJ9IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHJpbnB1dDogZnVuY3Rpb24gKHJpbnB1dCkge1xuICAgIGlmIChyaW5wdXQpIHsgdGhpcy5pbnB1dHMucHVzaChyaW5wdXQpOyB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRGVzdHJveSBsaWZlY3ljbGUgbWV0aG9kLiBGaXJlcyB0aGUgYGRlc3Ryb3lgIGV2ZW50LCBwcmlvciB0byBpbnZva2luZyBcbiAgICogZGVzdHJ1Y3RvcnMgZm9yIHRoZSBjbGFzcyBoaWVyYXJjaHkuIENhbGxlZCBpbnRlcm5hbGx5IHdoZW4gYC5yZWxlYXNlKClgXG4gICAqIGlzIGNhbGxlZC5cbiAgICpcbiAgICogQG1ldGhvZCBkZXN0cm95XG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScpO1xuICAgICAgdGhpcy5vZmZBbGwoKTtcbiAgICBcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHsgXG4gICAgICAgICAgdGhpc1trZXldID0gbnVsbDsgXG4gICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2goZXJyKSB7fVxuICB9LCAgXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFyOiBmdW5jdGlvbigpIHsgICAgXG4gICAgdGhpcy5wYXJhbXMgICA9IHt9O1xuICAgIHRoaXMuaW5wdXRzICAgPSBbXTtcbiAgICB0aGlzLm91dHB1dHMgID0gW107XG4gICAgdGhpcy5yc3RyZWFtICA9IGZhbHNlO1xuICAgIHRoaXMuZGVsYXllZCAgPSBmYWxzZTtcbiAgICB0aGlzLmFwaSAgICAgID0gbnVsbDsgICAgXG4gICAgdGhpcy5maWxlICAgICA9IG51bGw7ICBcbiAgICB0aGlzLmVudGl0aWVzID0gbnVsbDtcbiAgICB0aGlzLmlvRmlsdGVyID0gbnVsbDtcbiAgfSwgXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX3ByZXBSZXF1ZXN0OiBmdW5jdGlvbiAocmVzcG9uc2VDaGFpbiwgYXJncykge1xuICAgIHZhciByZXEgID0gdGhpcy5yZXEsXG4gICAgICAgIGZpbGUgPSB0aGlzLmZpbGU7XG5cbiAgICAvLyBzZXQgdGhlIHJlcXVlc3QgdHlwZSAgICBcbiAgICBpZiAodGhpcy5hcGkudXBsb2FkKSB7XG4gICAgICAgLy8gSWYgdGhlIGVudiBpcyB0aGUgQnJvd3NlciB0aGVyZSBpcyBubyBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGVcbiAgICAgICAvLyBDb250ZW50LVR5cGUuIFRoZSBicm93c2VyIHdpbGwgYXV0b21hdGljYWxseSBzZXQgdGhlIFxuICAgICAgIC8vIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9Li4uXCIgdmFsdWUuIElmIHRoZSBlbnYgaXMgTm9kZSB3ZSBuZWVkXG4gICAgICAgLy8gdG8gc2V0IGl0IG1hbnVhbGx5LlxuICAgICAgIGlmICghd2luKSB7IHRoaXMucmVxLnR5cGUoJ211bHRpcGFydC9mb3JtLWRhdGEnKTsgfSAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxLnR5cGUoJ2Zvcm0nKTtcbiAgICB9ICAgIFxuXG4gICAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikgeyBcbiAgICAgIGVyciA9IGVyciB8fCB7ICBjb2RlOiAnVU5LTk9XTiBDT0RFJywgdGV4dDogJ1VOS05PV04gRVJST1InIH07XG5cbiAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHsgXG4gICAgICAgIHN0YXR1czogZXJyLmNvZGUgfHwgJ1VOS05PV04gQ09ERScsXG4gICAgICAgIHRleHQ6IGVyclxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTsgICAgXG5cbiAgICB0aGlzLnNoYXJlKGFyZ3MgPyBhcmdzLl9faGVhZGVyc19fIDogbnVsbCk7XG5cbiAgICAvLyBhcmd1bWVudHMgcmV0dXJuZWQgZnJvbSBwcmV2IHJlcXVlc3QncyBpbygpLmVuZChmdW5jdGlvbigpIHsgcmV0dXJuIHg7IH0pXG4gICAgaWYgKGFyZ3MpIHsgXG4gICAgICAgdGhpcy5kYXRhKGFyZ3MpO1xuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pbnB1dHMubGVuZ3RoID4gMCkgeyBcbiAgICAgIHRoaXMuZGF0YSh7IGlucHV0czogZW5jb2Rlci5lbmNvZGUodGhpcy5pbnB1dHMpIH0pOyBcbiAgICB9XG4gIFxuICAgIGlmICh0aGlzLm91dHB1dHMubGVuZ3RoID4gMCkgeyBcbiAgICAgIHRoaXMuZGF0YSh7IHJvYmplY3RzOiB0aGlzLm91dHB1dHMuam9pbigpIH0pOyBcbiAgICB9ICAgIFxuXG4gICAgaWYgKHRoaXMuaGVhZGVycykge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLmhlYWRlcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHsgY29udGludWU7IH1cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyc1twcm9wXSkgeyByZXEuc2V0KHByb3AsIHRoaXMuaGVhZGVyc1twcm9wXSB8fCAnJyk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcGkudXBsb2FkKSB7ICAgIFxuICAgICAgZm9yKHZhciBwIGluIHRoaXMucGFyYW1zKSB7XG4gICAgICAgIHJlcS5maWVsZChwLCAodGhpcy5wYXJhbXNbcF0gfHwgdGhpcy5wYXJhbXNbcF0gPT09IGZhbHNlKSA/IFxuICAgICAgICAgICB0aGlzLnBhcmFtc1twXSArICcnIDogJycpO1xuICAgICAgfSBcbiAgICAgIHJlcS5hdHRhY2goJ2ZpbGUnLCB0aGlzLnJzdHJlYW0gPyBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpIDogZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcVt0aGlzLmFwaS5tZXRob2QgPT09ICdHRVQnID8gJ3F1ZXJ5JyA6ICdzZW5kJ10odGhpcy5wYXJhbXMpO1xuICAgIH0gXG4gIH0sXG5cbiAgLyoqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZUVycm9yOiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIHN0YXQgID0gcmF3LnN0YXR1cyxcbiAgICAgICAgcmVzICAgPSAocmF3LmJvZHkgJiYgcmF3LmJvZHkuZGVwbG95ciA/IHJhdy5ib2R5IDogcmF3KSxcbiAgICAgICAgZXJyb3IgPSAoKHN0YXQgIT09IDIwMCkgfHwgcmVzLmRlcGxveXIgJiYgIXJlcy5kZXBsb3lyLnJlc3BvbnNlLnN1Y2Nlc3MpO1xuXG4gICAgLy8gLS0gSGFuZGxlIGVycm9ycyAtLVxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmVzID0ge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGtleSkgeyBcbiAgICAgICAgICByZXR1cm4gdXRpbHMuZ2V0KHRoaXMuZGVwbG95ci5yZXNwb25zZSwga2V5KTsgXG4gICAgICAgIH0sXG4gICAgICAgIGRlcGxveXI6IHsgICAgICAgICAgXG4gICAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbDogdGhpcy5hcGlbJ2NhbGwnXSxcbiAgICAgICAgICAgIGVycm9yQ29kZTogcmVzLmRlcGxveXIgPyByZXMuZGVwbG95ci5yZXNwb25zZS5lcnJvckNvZGUgOiBzdGF0LFxuICAgICAgICAgICAgZXJyb3I6IHJlcy5kZXBsb3lyID8gcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3IgOiByZXMudGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgTG9nZ2VyLmVycm9yKCdlcnJvcigpJywgdGhpcy5hcGksIHJlcywgcmF3KTtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdlcnJvcigpJywgdGhpcy5hcGksIHJlcywgcmF3KTtcblxuICAgICAgLy8gLS0gbm90aWZ5IGdsb2JhbCBlcnJvcnMgZmlyc3QgKGlmIGFueSkgZm9yIHRoaXMgY2FsbCAtLSAgICAgIFxuICAgICAgaWYgKHRoaXMuZ2xvYmFsRXZ0cykge1xuICAgICAgICByYWlzZUdsb2JhbEVycm9ycyh0aGlzLmFwaVsnY2FsbCddLCByZXMpOyAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIC8vIC0tIHRyYW5hY3Rpb24gbGV2ZWwgSFRUUCBvciBEZXBsb3lSIGVycm9ycyBjb21lIG5leHQgLS0gICAgXG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgcmVzKTtcbiAgICAgIHRoaXMuZW1pdCgnZGVwbG95ci1pbzonICsgcmVzLmRlcGxveXIucmVzcG9uc2UuZXJyb3JDb2RlLCByZXMpO1xuICAgICAgdGhpcy5kZWZlcnJlZC5yZWplY3QocmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogRXhwb3NlIGZvciBhIGNsZWFuZXIgY2xpZW50IGFwaSBpbnRvIERlcGxveVJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIEV4cG9zZXMgdGhlIGBEZXBsb3lSYCBvYmplY3QgZm9yIGV4dGVuZGluZy5cbiAgICpcbiAgICogYGBgdmFyIERlcGxveVIgPSByZXF1aXJlKCdkZXBsb3lyJykuRGVwbG95UjtgYGBcbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBUaGUgYERlcGxveVJgIG9iamVjdC5cbiAgICovICAgXG4gIERlcGxveVI6IERlcGxveVIsXG5cbiAgLyoqXG4gICAqIEV4cG9zZXMgdGhlIHN1cHBvcnRlZCBEZXBsb3lSIEFQSXMuXG4gICAqXG4gICAqIEBtZXRob2QgYXBpc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZsYXQgKG9wdGlvbmFsKSBpZiBgdHJ1ZWAgd2lsbCByZXR1cm4gYW4gYXJyYXkgb2YganVzdCB0aGUgXG4gICAqIEFQSSdzIGVuZHBvaW50IHByb3BlcnRpZXMsIGZvciBleGFtcGxlOiBcbiAgICogYGBgXG4gICAqIFsnL3IvdXNlci9sb2dpbicsICcvci91c2VyL2xvZ291dCcsICcvci91c2VyL2Fib3V0JywgLi4uXVxuICAgKiBgYGBcbiAgICogQHN0YXRpY1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKiBAcmV0dXJuIHtPYmplY3R8QXJyYXl9IFRoZSBIVFRQIHJlcXVlc3QgdG8gdGhlIERlcGxveVIgc2VydmVyLiAgICAgIFxuICAgKi8gIFxuICBhcGlzOiBmdW5jdGlvbihmbGF0KSB7XG4gICAgcmV0dXJuIGZsYXQgPyBPYmplY3Qua2V5cyhhcGlzKSA6IGFwaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBzdGF0aWMgbWV0aG9kIGZvciBjb25maWd1cmluZyBhbGwgRGVwbG95UiByZXF1ZXN0cy4gU2V0dGluZ3MgXG4gICAqIG1hZGUgaGVyZSBhcmUgYXBwbGllZCBnbG9iYWxseSBhY3Jvc3MgZXZlcnkgcmVxdWVzdC5cbiAgICpcbiAgICogQG1ldGhvZCBjb25maWd1cmVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9iamVjdCBsaXRlcmFsIGNvbmZpZ3VyYXRpb24gaGFzaC4gXG4gICAqIEBzdGF0aWNcbiAgICogQGNoYWluYWJsZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uZmlndXJlOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHsgZ2xvYmFsT3B0aW9ucy5zZXQoaSwgb3B0aW9uc1tpXSk7IH1cblxuICAgIC8vIGFzc2VydCBnbG9iYWwgY29va2llcyBhcmUgZW1wdHkgaWYgZ2xvYmFsIGBzdGlja3lgIGpzZXNzaW9uaWQgaXMgb2ZmXG4gICAgaWYgKCFnbG9iYWxPcHRpb25zLnN0aWNreSkgIHsgZ2xvYmFsT3B0aW9ucy5zZXQoJ2hlYWRlcnMnLCBudWxsKTsgfSAgICBcblxuICAgIC8vIHR1cm4gZ2xvYmFsIGxvZ2dpbmcgb258b2ZmIChvZmYgYnkgZGVmYXVsdClcbiAgICBMb2dnZXIuc2V0TGV2ZWwoZ2xvYmFsT3B0aW9ucy5sb2dnaW5nID8gTG9nZ2VyLkRFQlVHIDogTG9nZ2VyLk9GRik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IElPIHJlcXVlc3RzIHRvIGBEZXBsb3lSYC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgICAgXG4gICAqICAgIGRlcGxveXIuaW8oJy9yL3VzZXIvYWJvdXQnKS5lbmQoY2FsbGJhY2spO1xuICAgKiBgYGBcbiAgICpcbiAgICogQG1ldGhvZCBpb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYXBpIE9uZSBvZiB0aGUgc3VwcG9ydGVkIERlcGxveVIgQVBJcy5cbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtEZXBsb3lSfSBUaGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBEZXBsb3lSIHNlcnZlci5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGlvOiBmdW5jdGlvbihhcGkpIHsgIFxuICAgIHJldHVybiBEZXBsb3lSLm5ldyhhcGkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBzaWduIHRoZSB1c2VyIGluIGJ5IGF1dGhlbnRpY2F0aW5nIHRoZSBjcmVkZW50aWFscyBcbiAgICogd2l0aCB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqXG4gICAqIEBtZXRob2QgYXV0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlcm5hbWUgU3BlY2lmaWVzIHRoZSB1c2VybmFtZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhc3N3b3JkIFNwZWNpZmllcyB0aGUgcGFzc3dvcmQuXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgIFxuICBhdXRoOiBmdW5jdGlvbih1biwgcHcpIHtcbiAgICB2YXIgZGF0YSA9IHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfTtcbiAgICByZXR1cm4gRGVwbG95Ui5uZXcoJy9yL3VzZXIvbG9naW4nKS5kYXRhKGRhdGEpLmVuZCgpOyAgICBcbiAgfSxcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gc2lnbiB0aGUgdXNlciBpbiBieSBhdXRoZW50aWNhdGluZyB0aGUgY3JlZGVudGlhbHMgXG4gICAqIHdpdGggdGhlIERlcGxveVIgc2VydmVyLiAgIFxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJy90ZXN0dXNlci9yb290L3JlZHVjZS5SJylcbiAgICogICAgZGVwbG95ci5zY3JpcHQoeyBmaWxlbmFtZTogJ3JlZHVjZS5SJywgYXV0aG9yOiAndGVzdHVzZXInLFxuICAgKiAgICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogJ3Jvb3QnfSlcbiAgICogICAgZGVwbG95ci5zY3JpcHQoJ3JlZHVjZS5SJywgJ3Rlc3R1c2VyJywgJ3Jvb3QnKVxuICAgKiAgICBkZXBsb3lyLnNjcmlwdCgnL3Rlc3R1c2VyL3Jvb3QvcmVkdWNlLlInLCBwcm9qZWN0KSAgICAgXG4gICAqIGBgYCAgIFxuICAgKlxuICAgKiBAbWV0aG9kIHNjcmlwdFxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gYXJndW1lbnRzIEFyZ3VtZW50cyB0byBkZWZpbmUgdGhlIGZ1bGx5IHF1YWxpZmllZCBzY3JpcHQgXG4gICAqIGZvciBleGVjdXRpb24uXG4gICAqIEBzdGF0aWNcbiAgICogQHJldHVybiB7RGVwbG95Un0gVGhlIEhUVFAgcmVxdWVzdCB0byB0aGUgRGVwbG95UiBzZXJ2ZXIuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgICAgXG4gIHNjcmlwdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSB1dGlscy5zaWduYXR1cmUoYXJndW1lbnRzKSxcbiAgICAgICAgb3B0cyA9IGFyZ3Mub3B0cyxcbiAgICAgICAgYXBpICA9IGFyZ3MuYXBpOyAgXG5cbiAgICAvLyBjb252ZW5pZW5jZSAtIGlmIHRoZSBwcm9qZWN0IGlzIGEgYm9vbGVuIGB0cnVlYCByYXRoZXIgdGhhbiBhIHBpZCwgZmlyc3RcbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgdGhlbiBwcmVwYXJlIHRoZSBwcm9qZWN0IGFwaSBjYWxsIHRvIGV4ZWN1dGVcbiAgICBpZiAoYXJncy5jcmVhdGUpIHtcbiAgICAgIHJldHVybiBEZXBsb3lSLm5ldygnL3IvcHJvamVjdC9jcmVhdGUnKVxuICAgICAgICAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2plY3Q6IHJlcy5nZXQoJ3Byb2plY3QnKS5wcm9qZWN0IH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5pbyhhcGkpXG4gICAgICAgICAgICAgICAuZGF0YShvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERlcGxveVIubmV3KGFwaSkuZGF0YShvcHRzKTtcbiAgICB9XG4gIH0sICBcblxuICAvKipcbiAgICogUnVuIGFuIHNlcmllcyBvZiBjaGFpbmVkIERlcGxveVIgcmVxdWVzdHMgaW4gc2VxdWVuY2UgYW5kIHdpdGhvdXQgb3ZlcmxhcC4gICAgICAgXG4gICAqXG4gICAqIEBtZXRob2QgcGlwbGluZVxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrcyBTcGVjaWZpZXMgdGhlIGxpc3Qgb2YgYEZ1bmN0aW9uYCB0YXNrcy5cbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2Ugd3JhcHBpbmcgdGhlIHJlc29sdXRpb24gb2YgZWl0aGVyIFwicmVzb2x2ZVwiIG9yXG4gICAqIFwicmVqZWN0XCIgY2FsbGJhY2suXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBwaXBlbGluZTogZnVuY3Rpb24oY2hhaW5zKSB7ICAgICAgXG4gICAgdmFyIGRlcGxveXIgID0gdGhpcyxcbiAgICAgICAgZGVmZXJyZWQgPSBEKCksXG4gICAgICAgIHEgICAgICAgID0gbmV3IFF1ZXVlKCksXG4gICAgICAgIHJlc3VsdHMgID0gW10sXG4gICAgICAgIGVycm9ycyAgID0gW10sXG4gICAgICAgIE5PT1AgICAgID0gbnVsbCwgLy8gTk9PUCBlcnJvcnN8cmVzdWx0cyBmb3IgW2FdIGJhdGNoIHJlcXVlc3QgY2hhaW5cbiAgICAgICAgb3JpZyAgICAgPSB7XG4gICAgICAgICAgc3RpY2t5OiBnbG9iYWxPcHRpb25zLnN0aWNreSxcbiAgICAgICAgICBoZWFkZXJzOiBnbG9iYWxPcHRpb25zLmhlYWRlcnMgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAvLyBtYWtlIGEgY29weVxuICAgIGNoYWlucyA9IGNoYWlucy5zbGljZSgwKTtcblxuICAgIC8vIHR1cm4gc3RpY2t5IHNlc3Npb24gZm9yIHRoZXNlIHJlcXVlc3QgKGhhY2t5KVxuICAgIGRlcGxveXIuY29uZmlndXJlKCB7IHN0aWNreTogdHJ1ZSB9KTtcblxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHEuYWRkKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgY2hhaW5zLnNoaWZ0KCkuZHJhaW4oKVxuICAgICAgICAudGhlbihmdW5jdGlvbihjaGFpbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChjaGFpbik7ICBcbiAgICAgICAgICBlcnJvcnMucHVzaChOT09QKTsgICAgICAgICAgIFxuICAgICAgICAgIGlmIChxLmlzRW1wdHkoKSkgeyBcbiAgICAgICAgICAgIGRlcGxveXIuY29uZmlndXJlKG9yaWcpOyAvLyByZXNldFxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7IHJlc3VsdHM6IHJlc3VsdHMsIGVycm9yczogZXJyb3JzIH0pOyBcbiAgICAgICAgICB9ICBcblxuICAgICAgICAgIHEudGFrZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHsgICAgICAgICAgXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKE5PT1ApOyBcbiAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgIC8vIHJlamVjdGlvbnMgYXJlIG9ubHkgbWV0IHdoZW4gdGhleSBbYWxsXSBmYWlsXG4gICAgICAgICAgaWYgKHEuaXNFbXB0eSgpICYmIHJlc3VsdHMubGVuZ3RoID09PSAwKSB7IFxuICAgICAgICAgICAgZGVwbG95ci5jb25maWd1cmUob3JpZyk7IC8vIHJlc2V0XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3JzKTsgXG4gICAgICAgICAgfSAgXG4gICAgICAgICAgcS50YWtlKCk7XG4gICAgICAgIH0pOyAgICAgICBcbiAgICAgIH0sIG51bGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIGNvbnZlcnQgdG8gYSBzZXEgcXVldWUgZm9yIGJldHRlciBoYW5kbGluZ1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjaGFpbnMubGVuZ3RoOyBpKyspIHsgYWRkKCk7IH1cblxuICAgIC8vIHN0YXJ0OiBkZXF1ZXVlIGZpcnN0IGl0ZW0gYW5kIHJ1biBpdFxuICAgIHEudGFrZSgpO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBzdHJlYW0gQVBJIGlzIHVuaXF1ZSB3aXRoaW4gdGhlIERlcGxveVIgQVBJIGFzIGl0IHN1cHBvcnRzIHB1c2ggXG4gICAqIG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgRGVwbG95UiBzZXJ2ZXIgdG8gY2xpZW50IGFwcGxpY2F0aW9ucy4gTm90aWZpY2F0aW9ucyBcbiAgICogY29ycmVzcG9uZCB0byBkaXNjcmV0ZSBldmVudHMgdGhhdCBvY2N1ciB3aXRoaW4gdGhlIERlcGxveVIgc2VydmVyLiBUaGVyZSBcbiAgICogYXJlIGZvdXIgZGlzdGluY3QgZXZlbnQgY2F0ZWdvcmllczpcbiAgICogXG4gICAqIC0gU3RyZWFtIExpZmVjeWNsZSBldmVudHNcbiAgICogLSBFeGVjdXRpb24gZXZlbnRzXG4gICAqIC0gSm9iIExpZmVjeWNsZSBldmVudHNcbiAgICogLSBNYW5hZ2VtZW50IGV2ZW50c1xuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGBcbiAgICogZGVwbG95ci5lcyh7IHVzZXJuYW1lOiAndGVzdHVzZXInLCBwYXNzd29yZDogJ3NlY3JldCcgfSlcbiAgICogICAgLy8gLS0gY29ubmVjdGlvbiBjaG9pY2VzIGZvciBldmVudCB0eXBlcyAtLVxuICAgKiAgICAubWFuYWdlbWVudCgpICAvLy5zZXNzaW9uKCkgfCAuYWxsKCkgfCAucHJvamVjdChpZCkgfCAuam9iKGlkKVxuICAgKiAgICAub24oJ2VzOmdyaWRIZWFydGJlYXQnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAqICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpO1xuICAgKiAgICAgICAgY29uc29sZS5sb2coJ2VzOmdyaWRIZWFydGJlYXQnKTtcbiAgICogICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09Jyk7ICAgICAgICAgIFxuICAgKiAgICAgfSlcbiAgICogICAgIC5vcGVuKCk7XG4gICAqIGBgYFxuICAgKiBcbiAgICogQG1ldGhvZCBlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb2JqZWN0IGxpdGVyYWwgY29uZmlndXJhdGlvbiBoYXNoLiBcbiAgICogQHN0YXRpY1xuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gYSBuZXcgYEV2ZW50U3RyZWFtYCBmb3IgYmluZGluZy5cbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgZXM6IGZ1bmN0aW9uKGNyZWRlbnRpYWxzKSB7XG4gICAgdmFyIGF1dGggICA9IChjcmVkZW50aWFscyAmJiBjcmVkZW50aWFscy51c2VybmFtZSAmJiBjcmVkZW50aWFscy5wYXNzd29yZCksXG4gICAgICAgIHN0cmVhbSA9IEV2ZW50U3RyZWFtLm5ldyhnbG9iYWxPcHRpb25zLmhvc3QsIHsgeWllbGQ6IGF1dGggfSk7XG5cbiAgICBpZiAoYXV0aCkge1xuICAgICAgdmFyIHJ1c2VyID0gdGhpcy5hdXRoKGNyZWRlbnRpYWxzLnVzZXJuYW1lLCBjcmVkZW50aWFscy5wYXNzd29yZCk7ICAgICAgXG4gICAgICBydXNlci5lbnN1cmUoZnVuY3Rpb24oKSB7IFxuICAgICAgICBzdHJlYW0uc2hhcmUocnVzZXIuZ2V0SGVhZGVycygpKTtcbiAgICAgICAgc3RyZWFtLmZsdXNoKCk7IFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmVhbTtcbiAgfSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgZmFjdG9yeSBmb3IgY3JlYXRpbmcgYSBEZXBsb3lSLXNwZWNpZmljIGVuY29kZWQgUiBvYmplY3QgdG8gYmUgXG4gICAqIHNlbnQgYXMgaW5wdXQgcGFyYW1ldGVycyB0byBhbiBSIHNjcmlwdC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICogYGBgXG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5sb2dpY2FsKCdsb2dpY2FsX25hbWUnLCB0cnVlKTtcbiAgICogICAgdmFyIHJpbnB1dCA9IGRlcGxveXIuUklucHV0Lm51bWVyaWMoJ251bWVyaWNfbmFtZScsIDEwLjUpO1xuICAgKiAgICB2YXIgcmlucHV0ID0gZGVwbG95ci5SSW5wdXQuaW50ZWdlcignaW50ZWdlcl9uYW1lJywgNSk7XG4gICAqICAgIHZhciByaW5wdXQgPSBkZXBsb3lyLlJJbnB1dC5jaGFyYWN0ZXIoJ2NoYXJhY3Rlcl9uYW1lJywgJ0hlbGxvJyk7XG4gICAqICAgIC8vIGVjdC4uLlxuICAgKiBgYGBcbiAgICogQHByb3BlcnR5IFJJbnB1dFxuICAgKiBAc3RhdGljXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBSSW5wdXQ6IHtcbiAgICBudW1lcmljOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5udW1lcmljKCk7XG4gICAgfSxcblxuICAgIGludGVnZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXIoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkubG9naWNhbCgpO1xuICAgIH0sXG5cbiAgICBjaGFyYWN0ZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmNoYXJhY3RlcigpO1xuICAgIH0sXG5cbiAgICBkYXRlOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRlKCk7XG4gICAgfSxcblxuICAgIHBvc2l4Y3Q6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLnBvc2l4Y3QoKTtcbiAgICB9LCAgXG5cbiAgICBudW1lcmljVmVjdG9yOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWNWZWN0b3IoKTtcbiAgICB9LCBcblxuICAgIGludGVnZXJWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXJWZWN0b3IoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWxWZWN0b3IoKTtcbiAgICB9LFxuXG4gICAgY2hhcmFjdGVyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkuY2hhcmFjdGVyVmVjdG9yKCk7XG4gICAgfSwgIFxuXG4gICAgZGF0ZVZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmRhdGVWZWN0b3IoKTtcbiAgICB9LCAgXG5cbiAgICBwb3NpeGN0VmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG4gICAgICByZXR1cm4gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSkucG9zaXhjdFZlY3RvcigpO1xuICAgIH0sXG5cbiAgICBsaXN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5saXN0KCk7IFxuICAgIH0sXG5cbiAgICBkYXRhZnJhbWU6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5kYXRhZnJhbWUoKTtcbiAgICB9LFxuICBcbiAgICBmYWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgbGV2ZWxzLCBsYWJlbHMpIHtcbiAgICAgIHZhciBvcHRzID0geyBsZXZlbHM6IGxldmVscywgbGFiZWxzOiBsYWJlbHMgfTtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlLCBvcHRzKS5mYWN0b3IoKTtcbiAgICB9LFxuXG4gICAgb3JkZXJlZDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBsZXZlbHMsIGxhYmVscykge1xuICAgICAgdmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUsIG9wdHMpLm9yZGVyZWQoKTtcbiAgICB9LFxuXG4gICAgbnVtZXJpY01hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLm51bWVyaWNNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgaW50ZWdlck1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmludGVnZXJNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgbG9naWNhbE1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFJJbnB1dC5uZXcobmFtZSwgdmFsdWUpLmxvZ2ljYWxNYXRyaXgoKTtcbiAgICB9LFxuXG4gICAgY2hhcmFjdGVyTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBSSW5wdXQubmV3KG5hbWUsIHZhbHVlKS5jaGFyYWN0ZXJNYXRyaXgoKTtcbiAgICB9XG4gIH1cbn07IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZTtcblxuZnVuY3Rpb24gZGVidWcobXNnKSB7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlLmV4dGVuZCh7XG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLnNjb3BlICA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0ZW5lci4gIE11bHRpcGxlIGNhbiBiZSBhZGRlZCBwZXIgbmFtZS4gIEFsaWFzZWQgYXMgYG9uYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtFbWl0dGVyfSBgdGhpc2AgZm9yIGNoYWluaW5nICAgICAgXG4gICAqL1xuICBvbjogZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyB0aGlzLmV2ZW50c1tuYW1lXSA9IFtdOyB9ICAgICAgICBcblxuICAgIHRoaXMuZXZlbnRzW25hbWVdLnB1c2goaGFuZGxlcik7XG4gICAgZGVidWcoJ0VtaXR0ZXIub24oXCInICsgbmFtZSArICdcIiknKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZyAgIFxuICAgKi9cbiAgZW1pdDogZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChuYW1lIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tuYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoJ0ZpcmVkIGV2ZW50OiBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgICB0aGlzLmV2ZW50c1tuYW1lXVtpXS5hcHBseSh0aGlzLnNjb3BlIHx8IHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpOyAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgbWF0Y2hpbmcgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZ1xuICAgKi9cbiAgb2ZmQWxsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBmb3IgKHZhciBlIGluIHRoaXMuZXZlbnRzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tlXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG4gICAgICBkZWxldGUgdGhpcy5ldmVudHNbbmFtZV07ICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGJhc2VkIG9uIGFuIGluZGV4LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZXZlbnQgXG4gICAqL1xuICBvZmZBdDogZnVuY3Rpb24obmFtZSwgaW5kZXgpIHtcbiAgICB2YXIgYXJyYXkgPSB0aGlzLmV2ZW50c1tuYW1lXSxcbiAgICAgICAgcmVzdCAgPSBhcnJheS5zbGljZShpbmRleCArIDEpO1xuXG4gICAgYXJyYXkubGVuZ3RoID0gaW5kZXg7XG4gICAgYXJyYXkucHVzaC5hcHBseShhcnJheSwgcmVzdCk7XG4gICAgdGhpcy5ldmVudHNbbmFtZV0gPSBhcnJheTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGJhc2VkIG9uIHRoZSBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcbiAgICogQHJldHVybiB7RW1pdHRlcn0gYHRoaXNgIGZvciBjaGFpbmluZ1xuICAgKi9cbiAgb2ZmOiBmdW5jdGlvbihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5ldmVudHMgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzOyB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGV2ZW50cyBoYW5kbGVycyBieSB0aGlzIG5hbWVcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLm9mZkFsbChuYW1lKTtcbiAgICB9IGVsc2UgeyAvLyByZW1vdmUgYWxsIGV2ZW50cyBoYW5kbGVycyA9PSAnaGFuZGxlcicgYnkgdGhpcyBuYW1lXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW25hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tuYW1lXVtpXSA9PSBoYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5vZmZBdChuYW1lLCBpKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59KTsgIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cbnZhciBMYW5nICAgID0gcmVxdWlyZSgnLi9sYW5nJyksXG4gICAgUlR5cGVzICA9IHJlcXVpcmUoJy4vcnR5cGVzJyksXG4gICAgUiAgICAgICA9IFJUeXBlcy5yLFxuICAgIERlcGxveVIgPSBSVHlwZXMuZGVwbG95cjtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZXMoZGF0ZXMsIHR5cGUpIHtcbiAgICB2YXIgZm9ybWF0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtYXRzLnB1c2goZm9ybWF0RGF0ZShkYXRlc1tpXSwgdHlwZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXRzO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIHR5cGUpIHsgICAgXG4gICB2YXIgeWVhciAgID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgIG1vbnRoICA9IChkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICBkYXkgICAgPSBkYXRlLmdldERhdGUoKSwgICAgXG4gICAgICAgaG91ciAgID0gZGF0ZS5nZXRIb3VycygpLFxuICAgICAgIG1pbiAgICA9IGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgIHNlYyAgICA9IGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgIHpvbmUgICA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSxcbiAgICAgICBmb3JtYXQgPSAnJztcblxuICAgIG1vbnRoICA9IChtb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aCk7XG4gICAgaG91ciAgID0gKGhvdXIgPCAxMCA/ICcwJyArIGhvdXIgOiBob3VyKTtcbiAgICBtaW4gICAgPSAobWluIDwgMTAgPyAnMCcgKyBtaW4gOiBtaW4pO1xuICAgIHNlYyAgICA9IChzZWMgPCAxMCA/ICcwJyArIHNlYyA6IHNlYyk7ICAgICAgIFxuICAgIGZvcm1hdCA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcblxuICAgIGZ1bmN0aW9uIGxlZnRaZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG5cbiAgICAgICAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICAgICAgICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArIG91dHB1dDtcbiAgICB9XG4gICBcbiAgICBpZiAodHlwZSA9PT0gRGVwbG95Ui5SUE9TSVhfREFURSB8fCB0eXBlID09PSBEZXBsb3lSLlJQT1NJWF9EQVRFX1ZFQ1RPUikge1xuICAgICAgICB2YXIgdGltZSAgPSBob3VyICsgJzonICsgbWluICsgJzonICsgc2VjLFxuICAgICAgICAgICAgYSA9IC16b25lLFxuICAgICAgICAgICAgYiA9IFwiK1wiO1xuXG4gICAgICAgIGlmIChhIDwgMCkge1xuICAgICAgICAgICAgYSA9IC1hO1xuICAgICAgICAgICAgYiA9IFwiLVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgem9uZSA9IGIgKyBsZWZ0WmVyb0ZpbGwoKGEgLyA2MCksIDIpICsgJycgKyBsZWZ0WmVyb0ZpbGwoYSAlIDYwLCAyKTtcbiAgICAgICAgZm9ybWF0ICs9ICgnICcgKyB0aW1lICsgJyAnICsgem9uZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxuZnVuY3Rpb24gZW5jb2RlRW1iZWRkZWREYXRhZnJhbWUob2JqLCByZGYpIHtcbiAgICB2YXIgZGZWYWx1ZSA9IG9iai52YWx1ZTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG4gICAgICAgIGlmIChkZk9iai50eXBlID09PSBEZXBsb3lSLlJEQVRBRlJBTUUpIHtcbiAgICAgICAgICAgIHJkZiA9IGVuY29kZUVtYmVkZGVkRGF0YWZyYW1lKGRmT2JqLCByZGYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZm9ybWF0IGRhdGVzXG4gICAgICAgICAgICBpZiAoUlR5cGVzLmlzRGF0ZShkZk9iai50eXBlKSkge1xuICAgICAgICAgICAgICAgIGlmIChMYW5nLmlzQXJyYXkoZGZPYmoudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRmT2JqLnZhbHVlID0gZm9ybWF0RGF0ZXMoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRmT2JqLnZhbHVlID0gZm9ybWF0RGF0ZShkZk9iai52YWx1ZSwgZGZPYmoudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZk9iai50eXBlID0gUlR5cGVzLmRlcGxveXJUb1IoZGZPYmoudHlwZSk7XG4gICAgICAgICAgICByZGYudmFsdWUucHVzaChkZk9iaik7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gcmRmO1xufTtcblxuZnVuY3Rpb24gZW5jb2RlRGF0YWZyYW1lKG9iaikge1xuICAgIHZhciByZGYgPSB7XG4gICAgICAgICAgICB0eXBlOiBSLkRBVEFGUkFNRSxcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgIG5hbWU6IG9iai5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGRmVmFsdWUgPSBvYmoudmFsdWU7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG5cbiAgICAgICAgaWYgKGRmT2JqLnR5cGUgPT09IERlcGxveVIuUkRBVEFGUkFNRSkge1xuICAgICAgICAgICAgcmRmID0gZW5jb2RlRW1iZWRkZWREYXRhZnJhbWUoZGZPYmosIHJkZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmb3JtYXQgZGF0ZXNcbiAgICAgICAgICAgIGlmIChSVHlwZXMuaXNEYXRlKGRmT2JqLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKExhbmcuaXNBcnJheShkZk9iai52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGZPYmoudmFsdWUgPSBmb3JtYXREYXRlcyhkZk9iai52YWx1ZSwgZGZPYmoudHlwZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGZPYmoudmFsdWUgPSBmb3JtYXREYXRlKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRmT2JqLnR5cGUgPSBSVHlwZXMuZGVwbG95clRvUihkZk9iai50eXBlKTtcbiAgICAgICAgICAgIHJkZi52YWx1ZS5wdXNoKGRmT2JqKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiByZGY7XG59O1xuXG5mdW5jdGlvbiBlbmNvZGVMaXN0KG9iaikge1xuICAgIHZhciBybGlzdCA9IHtcbiAgICAgICAgICAgIHR5cGU6IFIuTElTVCxcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgIG5hbWU6IG9iai5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGRmVmFsdWUgPSBvYmoudmFsdWUsXG4gICAgICAgIHI7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGZWYWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGRmT2JqID0gZGZWYWx1ZVtpbmRleF07XG5cbiAgICAgICAgc3dpdGNoIChkZk9iai50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEFGUkFNRTpcbiAgICAgICAgICAgICAgICByID0gZW5jb2RlRGF0YWZyYW1lKGRmT2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJMSVNUOlxuICAgICAgICAgICAgICAgIHIgPSBlbmNvZGVMaXN0KGRmT2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJOVU1FUklDX01BVFJJWDpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SSU5URUdFUl9NQVRSSVg6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fTUFUUklYOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJTVFJJTkdfTUFUUklYOlxuICAgICAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRmT2JqLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuTUFUUklYLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGZPYmoudmFsdWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEU6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUlBPU0lYX0RBVEU6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5EQVRFLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGRmT2JqLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdERhdGUoZGZPYmoudmFsdWUsIGRmT2JqLnR5cGUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJGQUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUk9SREVSRUQ6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5GQUNUT1IsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWQ6IGRmT2JqLm9yZGVyZWQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogZGZPYmoubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICBsZXZlbHM6IGRmT2JqLmxldmVscyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRmT2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJTVFJJTkc6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU46XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUM6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUklOVEVHRVI6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5QUklNSVRJVkUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZk9iai52YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19WRUNUT1I6XG4gICAgICAgICAgICBjYXNlIERlcGxveVIuUklOVEVHRVJfVkVDVE9SOlxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJCT09MRUFOX1ZFQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkZk9iai5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlZFQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRmT2JqLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJEQVRFX1ZFQ1RPUjpcbiAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURV9WRUNUT1I6XG4gICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGZPYmoubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdERhdGVzKGRmT2JqLnZhbHVlLCBkZk9iai50eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBkZk9iai5mb3JtYXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gUkRhdGFUeXBlIGZvdW5kIGZvciBcIicgKyBkZk9iai50eXBlICsgJ1wiJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBybGlzdC52YWx1ZS5wdXNoKHIpO1xuICAgIH1cbiAgICByZXR1cm4gcmxpc3Q7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qKlxuICAgICAqIEZsYXR0ZW5zIGEgZ2l2ZW4gYFJJbnB1dGAgdHlwZSBpbnRvIGEgSlNPTiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSAgICAgXG4gICAgICogZXhwZWN0ZWQgRGVwbG95UiBpbnB1dCBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGVuY29kZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSByZGF0YSBBbiBBcnJheSBvZiBgUklucHV0YCBPYmplY3RzIHRvIGJlIGZsYXR0ZW5lZC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBmbGF0dGVuZCBgUklucHV0YCBKU09OIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIFxuICAgICAqICAgICAgICAgICAgICAgICAgRGVwbG95UiBpbnB1dCBmb3JtYXQuXG4gICAgICovXG4gICAgZW5jb2RlOiBmdW5jdGlvbihyZGF0YSkge1xuICAgICAgICB2YXIgciA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCByZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSByZGF0YVtpbmRleF07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHsgLy8gLS0gRGVwbG95UiBUeXBlIC0tIC8vXG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEFGUkFNRTpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSBlbmNvZGVEYXRhZnJhbWUob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkxJU1Q6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0gZW5jb2RlTGlzdChvYmopO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19NQVRSSVg6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSX01BVFJJWDpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fTUFUUklYOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX01BVFJJWDpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLk1BVFJJWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEU6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJQT1NJWF9EQVRFOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuREFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogb2JqLmZvcm1hdCwgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXREYXRlKG9iai52YWx1ZSwgb2JqLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJGQUNUT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJPUkRFUkVEOiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLkZBQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyZWQ6IG9iai5vcmRlcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBvYmoubGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxzOiBvYmoubGV2ZWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9iai52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SQk9PTEVBTjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUk5VTUVSSUM6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSOlxuICAgICAgICAgICAgICAgICAgICByW29iai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFIuUFJJTUlUSVZFLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9iai52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5STlVNRVJJQ19WRUNUT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBEZXBsb3lSLlJJTlRFR0VSX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkJPT0xFQU5fVkVDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SU1RSSU5HX1ZFQ1RPUjpcbiAgICAgICAgICAgICAgICAgICAgcltvYmoubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSLlZFQ1RPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIERlcGxveVIuUkRBVEVfVkVDVE9SOlxuICAgICAgICAgICAgICAgIGNhc2UgRGVwbG95Ui5SUE9TSVhfREFURV9WRUNUT1I6XG4gICAgICAgICAgICAgICAgICAgIHJbb2JqLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUi5WRUNUT1IsICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0RGF0ZXMob2JqLnZhbHVlLCBvYmoudHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG9iai5mb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFJEYXRhVHlwZSBmb3VuZCBmb3IgXCInICsgb2JqLnR5cGUgKyAnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKEpTT04uc3RyaW5naWZ5KHIpKTtcbiAgICB9XG59OyIsIiB2YXIgd2luICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSxcbiAgICAgb3B0aW9uYWwgID0gcmVxdWlyZSgnLi9vcHRpb25hbCcpLCAgICAgXG4gICAgIFdlYlNvY2tldCA9IHdpbiA/IHdpbmRvdy5XZWJTb2NrZXQgOiBvcHRpb25hbCgnd3MnKSxcbiAgICAgUXVldWUgICAgID0gcmVxdWlyZSgnLi9xdWV1ZScpLCAgICAgXG4gICAgIEVtaXR0ZXIgICA9IHJlcXVpcmUoJy4vZW1pdHRlcicpLFxuICAgICBCYXNlICAgICAgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgICBtZXJnZSAgICAgPSByZXF1aXJlKCcuL3V0aWxzJykubWVyZ2U7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoRW1pdHRlciwgeyAgIFxuXG4gIC8qKlxuICAgKiBUaGUgYEV2ZW50U3RyZWFtYCBjbGFzcyBhY3RzIGFzIGEgY2xpZW50IGxpc3RlbmVyIGZvciB0aGUgRGVwbG95UiBldmVudCBcbiAgICogc3RyZWFtIEFQSSBgL3IvZXZlbnQvc3RyZWFtYCBub3RpZmljYXRpb25zLiBOb3RpZmljYXRpb25zIGNvcnJlc3BvbmQgdG8gXG4gICAqIGRpc2NyZXRlICBldmVudHMgdGhhdCBvY2N1ciB3aXRoaW4gdGhlIERlcGxveVIgc2VydmVyLiBUaGVyZSBhcmUgZm91ciBcbiAgICogZGlzdGluY3QgZXZlbnQgY2F0ZWdvcmllczpcbiAgICpcbiAgICogLSBTdHJlYW0gTGlmZWN5Y2xlIGV2ZW50c1xuICAgKiAtIEV4ZWN1dGlvbiBldmVudHNcbiAgICogLSBKb2IgTGlmZWN5Y2xlIGV2ZW50c1xuICAgKiAtIE1hbmFnZW1lbnQgZXZlbnRzICAgXG4gICAqIFxuICAgKiBAY2xhc3MgXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnQgVGhlIERlcGxveVIgc2VydmVyIGVuZHBvaW50LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPYmplY3QgbGl0ZXJhbCBoYXNoIG9mIG9wdGlvbnMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShlbmRwb2ludCwgb3B0aW9ucykge1xuICAgIEVtaXR0ZXIuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHt9KTtcbiAgXG4gICAgdGhpcy5hcGkgICAgID0gKGVuZHBvaW50IHx8ICcnKSArICcvZGVwbG95ci9yL2V2ZW50L3N0cmVhbScsXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLndzICAgICAgPSBudWxsO1xuICAgIHRoaXMucSAgICAgICA9IG5ldyBRdWV1ZSgpO1xuICAgIHRoaXMuZmlsdGVyICA9IHt9OyAgXG4gICAgdGhpcy5jb29raWVzID0gdGhpcy5vcHRpb25zLmNvb2tpZXM7XG4gIH0sICBcblxuICAvKipcbiAgICogVGhpcyBjYWxsIGNvbm5lY3RzIHRvIG9uZSBvZiB0aGUgZm9sbG93aW5nIGV2ZW50IHN0cmVhbXM6IGF1dGhlbnRpY2F0ZWQsIFxuICAgKiBhbm9ueW1vdXMsIG9yIG1hbmFnZW1lbnQuXG5cbiAgICogQG1ldGhvZCBvcGVuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9iamVjdCBsaXRlcmFsIGhhc2ggb2Ygc3VwcG9ydGVkIG9wdGlvbnM6XG4gICAqICAtIHlpZWxkOiBmYWxzZSAoZGVmYXVsdCkgLSBcbiAgICogIC0gY29va2llczogbnVsbCAoZGVmYXVsdClcbiAgICogIC0gcHJvamVjdDogbnVsbCAoZGVmYXVsdClcbiAgICogIC0gam9iOiBudWxsIChkZWZhdWx0KVxuICAgKiAgLSBodHRwRXZlbnRPbmx5OiBmYWxzZSAoZGVmYXVsdClcbiAgICogIC0gcmV2b0V2ZW50T25seTogZmFsc2UgKGRlZmF1bHQpXG4gICAqICAtIG1hbmFnZW1lbnRFdmVudE9ubHk6IGZhbHNlIChkZWZhdWx0KVxuICAgKlxuICAgKiBgYGBcbiAgICogIHtcbiAgICogICAgIC8vXG4gICAqICAgICAvLyBXYWl0IGZvciBhdXRoZW50aWNhdGlvbiB0byBjb21wbGV0ZSBiZWZvcmUgZXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24uXG4gICAqICAgICAvLyBcbiAgICogICAgIHlpZWxkOiBmYWxzZSwgXG4gICAqXG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gU2hhcmVkIGNvb2tpZXMgZnJvbSBvdGhlciBhdXRoZW50aWNhdGVkIERlcGxveVIgcmVxdWVzdHNcbiAgICogICAgIC8vXG4gICAqICAgICBjb29raWVzOiBbICdKU0VTU0lPTklEPTA4NjY2OUFCQzIyNkVCNzg7IFBhdGg9L2RlcGxveXIvOyBIdHRwT25seScgXVxuICAgKlxuICAgKiAgICAgLy9cbiAgICogICAgIC8vIEluZGljYXRlIHRoZSBEZXBsb3lSIGV2ZW50IHN0cmVhbSB0byBwdXNoIGV2ZW50cyBvbmx5IGZvciB0aGlzIFxuICAgKiAgICAgLy8gcHJvamVjdC5cbiAgICogICAgIC8vXG4gICAqICAgICBwcm9qZWN0OiAnUFJPSkVDVC1JRCcsXG4gICAqXG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gSW5kaWNhdGUgdGhlIERlcGxveVIgZXZlbnQgc3RyZWFtIHRvIHB1c2ggZXZlbnRzIG9ubHkgZm9yIHRoaXMgam9iLlxuICAgKiAgICAgLy9cbiAgICogICAgIGpvYjogJ0pPQi1JRCcsICAgICAgXG4gICAqICAgXG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gaHR0cEV2ZW50T25seT10cnVlIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgdGhlbiBhbiBhdXRoZW50aWNhdGVkIFxuICAgKiAgICAgLy8gZXZlbnQgc3RyZWFtIHdpbGwgc2VlIG9ubHkgZXhlY3V0aW9uIGV2ZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIFxuICAgKiAgICAgLy8gY3VycmVudCBIVFRQIHNlc3Npb24uXG4gICAqICAgICAvL1xuICAgKiAgICAgaHR0cEV2ZW50T25seTogdHJ1ZSwgICBcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAqICAgICAvL1xuICAgKiAgICAgLy8gcmV2b0V2ZW50T25seT10cnVlLCB0aGVuIGV4ZWN1dGlvbiBleGVjdXRpb25Db25zb2xlRXZlbnQgXG4gICAqICAgICAvLyBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhlIHN0cmVhbVxuICAgKiAgICAgLy9cbiAgICogICAgIHJldm9FdmVudE9ubHk6IHRydWUsICAgICAgIFxuICAgKiAgICAgICAgICAgICAgICAgICBcbiAgICogICAgIC8vIFxuICAgKiAgICAgLy8gbWFuYWdlbWVudEV2ZW50T25seT10cnVlLCB0aGVuIGV2ZW50IHN0cmVhbSBjb25uZWN0aW9uIHR5cGUgaXMgXG4gICAqICAgICAvLyBtYW5hZ2VtZW50ICAgIFxuICAgKiAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgXG4gICAqICAgICBtYW5hZ2VtZW50RXZlbnRPbmx5OiB0cnVlICAgIFxuICAgKiB9XG4gICAqIGBgYCAgIFxuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb3BlbjogZnVuY3Rpb24ob3B0aW9ucykgeyAgICBcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHVybDtcblxuICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSBtZXJnZShvcHRpb25zIHx8IHt9LCB0aGlzLm9wdGlvbnMpOyAgICBcblxuICAgIHRoaXMuY29va2llcyA9ICF0aGlzLmNvb2tpZXMgPyBvcHRpb25zLmNvb2tpZXMgOiB0aGlzLmNvb2tpZXM7XG5cbiAgICAvL1xuICAgIC8vIEFwcGVuZCBldmVudCBmaWx0ZXJzXG4gICAgLy8gIFxuICAgIGlmIChvcHRpb25zLnByb2plY3QpIHsgdGhpcy5wcm9qZWN0KG9wdGlvbnMucHJvamVjdCk7IH1cbiAgICBpZiAob3B0aW9ucy5qb2IpIHsgdGhpcy5qb2Iob3B0aW9ucy5qb2IpOyB9XG4gICAgaWYgKG9wdGlvbnMubWFuYWdlbWVudEV2ZW50T25seSkgeyB0aGlzLm1hbmFnZW1lbnRFdmVudE9ubHkoKTsgfVxuICAgIGlmIChvcHRpb25zLnJldm9FdmVudE9ubHkpIHsgdGhpcy5yZXZvRXZlbnRPbmx5KCk7IH0gXG4gICAgaWYgKG9wdGlvbnMuaHR0cEV2ZW50T25seSkgeyB0aGlzLmh0dHBFdmVudE9ubHkoKTsgfVxuXG4gICAgdXJsID0gdGhpcy5nZXRSZXF1ZXN0VVJMKCk7XG5cbiAgICB0aGlzLnEueWllbGQodHJ1ZSk7XG4gICAgdGhpcy5xLmFkZChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5jb29raWVzID8geyAnQ29va2llJzogdGhpcy5jb29raWVzIH0gOiB7fTtcbiAgICAgIHRoaXMuZW1pdCgnZXM6Y29ubmVjdGluZycsIHsgdXJsOiB1cmwsIGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICAgIC8vIEZvciBCcm93c2VycyB0aGUgdGhyaWQgYXJndW1lbnQgYG9wdHNgIGlzaWdub3JlZFxuICAgICAgdmFyIHdzID0gKHdpbiA/IG5ldyBXZWJTb2NrZXQodXJsKSA6IFxuICAgICAgICBuZXcgV2ViU29ja2V0KHVybCwgJ2h0dHAnLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkpO1xuXG4gICAgICB3cy5vbm9wZW4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBzZWxmLmVtaXQoJ2VzOm9wZW4nLCBtZXNzYWdlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfbWVzc2FnZSA9ICcnO1xuICAgICAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdHJ5IHsgICAgICAgICAgXG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5zcGxpdCgnIXwhJylbMV0pIHtcbiAgICAgICAgICAgIF9tZXNzYWdlID0gX21lc3NhZ2UgKyBtZXNzYWdlLmRhdGEuc3BsaXQoJyF8IScpWzFdO1xuICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UoX21lc3NhZ2UpO1xuICAgICAgICAgICAgX21lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHZhciB0eXBlID0gbWVzc2FnZS5kZXBsb3lyLnJlc3BvbnNlLmV2ZW50LnR5cGU7XG4gICAgICAgICAgICBzZWxmLmVtaXQoJ2VzOicgKyB0eXBlLnJlcGxhY2UoJ0V2ZW50JywgJycpLCBtZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9IFxuICAgICAgfTtcblxuICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5lbWl0KCdlczplcnJvcicsIGVycik7IH07XG4gICAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHsgc2VsZi5lbWl0KCdlczpjbG9zZScsIG1lc3NhZ2UpOyB9O1xuXG4gICAgICB0aGlzLndzID0gd3M7XG4gICAgfSwgdGhpcyk7XG5cbiAgICAvL1xuICAgIC8vIG9wZW4gc29ja2V0IGltbWVkaWF0ZWx5XG4gICAgLy9cbiAgICBpZiAoIW9wdGlvbnMueWllbGQpIHsgdGhpcy5mbHVzaCgpOyB9XG5cbiAgICByZXR1cm4gdGhpczsgICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRlcm1pbmF0ZXMgdGhlIFdlYlNvY2tldCBjbG9zaW5nIGFueSBjb25uZWN0aW9uIHRvIERlcGxveVIncyBldmVudCBzdHJlYW0uXG4gICAqIEBtZXRob2QgY2xvc2VcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy53cykgeyB0aGlzLndzLmNsb3NlKCk7IH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZWNvbnN0cnVjdHMgdGhlIGV2ZW50IHN0cmVhbSBVUkwgdGhlIGNsaWVudCB1c2VzIHRvIG1ha2UgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYFxuICAgKiB3czovL2Rob3N0Ojc0MDAvZGVwbG95ci9yL2V2ZW50L3N0cmVhbT9yZXZvRXZlbnRPbmx5PXRydWUmcHJvamVjdD1QSURcbiAgICogd3M6Ly9kaG9zdDo3NDAwL2RlcGxveXIvci9ldmVudC9zdHJlYW1cbiAgICogYGBgXG4gICAqIEBtZXRob2QgZ2V0UmVxdWVzdFVSTFxuICAgKiBAYXBpIHB1YmxpYyAgICAgXG4gICAqL1xuICBnZXRSZXF1ZXN0VVJMOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdXJsICAgID0gdGhpcy5hcGkucmVwbGFjZSgvXmh0dHAvLCd3cycpLFxuICAgICAgICBmaWx0ZXIgPSB0aGlzLmZpbHRlcjtcblxuICAgIHVybCArPSAoZmlsdGVyLnR5cGUgPyAnPycgKyBmaWx0ZXIudHlwZSA6ICcnKTsgIFxuXG4gICAgaWYgKGZpbHRlci5wcm9qZWN0KSB7IHVybCArPSAnJicgKyBmaWx0ZXIucHJvamVjdDsgfVxuICAgIGlmIChmaWx0ZXIuam9iKSB7IHVybCArPSAnJicgKyBmaWx0ZXIuam9iOyB9XG5cbiAgICByZXR1cm4gIHVybDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSFRUUCBjb29raWUgcHJldmlvdXNseSBzZW50IGJ5IHRoZSBzZXJ2ZXIgd2l0aCBTZXQtQ29va2llLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBwYXNzZWQgdG8gYC5zaGFyZShydXNlci5nZXRDb29raWVzKCkpYCBvZiBhIGRpZmZyZW50XG4gICAqIGAuaW8oKWAgYWdlbnQgdG8gcHJlc2VydmUgc2Vzc2lvbiBzdGF0ZSBhY3Jvc3MgcmVxdWVzdHMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0Q29va2llc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIEhUVFAgY29va2llIHByZXZpb3VzbHkgc2VudCBieSB0aGUgc2VydmVyIHdpdGggXG4gICAqIFNldC1Db29raWUuXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqLyAgXG4gIGdldENvb2tpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jb29raWVzO1xuICB9LCAgIFxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGxpZmVjeWNsZSBtZXRob2QuIEZpcmVzIHRoZSBgZGVzdHJveWAgZXZlbnQsIHByaW9yIHRvIGludm9raW5nIFxuICAgKiBkZXN0cnVjdG9ycyBmb3IgdGhlIGNsYXNzIGhpZXJhcmNoeS4gXG4gICAqXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24gKCkgeyAgICBcbiAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5vZmZBbGwoKTtcblxuICAgIHRoaXMud3MgICAgICA9IG51bGw7XG4gICAgdGhpcy5ob3N0ICAgID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSBudWxsO1xuICAgIHRoaXMud3MgICAgICA9IG51bGw7XG4gICAgdGhpcy5xICAgICAgID0gbnVsbDtcbiAgICB0aGlzLmZpbHRlciAgPSBudWxsOyAgICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIERyYWlucyB0aGUgeWllbGQgcXVldWUgaW4gc2l0dWF0aW9ucyB3aGVyZSBgb3BlbigpYCBpcyB3YWl0aW5nIGZvciBcbiAgICogYXV0aGVudGljYXRpb24gdG8gY29tcGxldGUgYmVmb3JlIGVzdGFibGlzaGluZyBhIGNvbm5lY3Rpb24uXG4gICAqL1xuICBmbHVzaDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5xLnlpZWxkKGZhbHNlKTtcbiAgICB0aGlzLnEuZmx1c2goKTtcbiAgfSxcblxuICAvKipcbiAgICogU2hhcmVzIHRoZSBjb29raWVzIGZyb20gYSBkaWZmZXJlbiBgLmlvKClgIGFnZW50IHRvIHByZXNlcnZlIHNlc3Npb24gc3RhdGVcbiAgICogYWNyb3NzIGB0aGlzYCByZXF1ZXN0IGFuZCBhbGwgcmVxdWVzdHMgY2hhaW5lZCB0byBpdC5cbiAgICpcbiAgICogQG1ldGhvZCBzaGFyZVxuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gZm9yIGNoYWluaW5nLlxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gXG4gIHNoYXJlOiBmdW5jdGlvbihjb29raWVzKSB7XG4gICAgdGhpcy5jb29raWVzID0gY29va2llcztcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZSB0aGUgRGVwbG95UiBldmVudCBzdHJlYW0gdG8gcHVzaCBldmVudHMgb25seSBmb3IgdGhpcyBwcm9qZWN0LlxuICAgKlxuICAgKiBAbWV0aG9kIHByb2plY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3QgVGhlIHByb2plY3QgaWRlbnRpZmllci5cbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovXG4gIHByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICB0aGlzLmZpbHRlci5wcm9qZWN0ID0gJ3Byb2plY3Q9JyArIHByb2plY3Q7IFxuICAgIHRoaXMuZmlsdGVyLmpvYiA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogSW5kaWNhdGUgdGhlIERlcGxveVIgZXZlbnQgc3RyZWFtIHRvIHB1c2ggZXZlbnRzIG9ubHkgZm9yIHRoaXMgam9iLlxuICAgKlxuICAgKiBAbWV0aG9kIHByb2plY3RcbiAgICogQHBhcmFtIHtTdHJpbmd9IGpvYiBUaGUgam9iIGlkZW50aWZpZXIuXG4gICAqIEByZXR1cm4ge0V2ZW50U3RyZWFtfSBmb3IgY2hhaW5pbmcuICAgXG4gICAqIEBhcGkgcHVibGljICAgXG4gICAqL1xuICBqb2I6IGZ1bmN0aW9uKGpvYikge1xuICAgIHRoaXMuZmlsdGVyLmpvYiA9ICdqb2I9JyArICBqb2I7IFxuICAgIHRoaXMuZmlsdGVyLnByb2plY3QgPSBudWxsOyAgICBcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJZiBzcGVjaWZpZWQgdGhlbiBldmVudCBzdHJlYW0gY29ubmVjdGlvbiB0eXBlIGlzIG1hbmFnZW1lbnQuXG4gICAqXG4gICAqIEBtZXRob2QgbWFuYWdlbWVudEV2ZW50T25seVxuICAgKiBAcmV0dXJuIHtFdmVudFN0cmVhbX0gZm9yIGNoYWluaW5nLiAgIFxuICAgKiBAYXBpIHB1YmxpYyAgIFxuICAgKi8gIFxuICBtYW5hZ2VtZW50RXZlbnRPbmx5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZpbHRlciA9IHtcbiAgICAgIHR5cGU6ICdtYW5hZ2VtZW50RXZlbnRPbmx5PXRydWUnLFxuICAgICAgcHJvamVjdDogbnVsbCxcbiAgICAgIGpvYjogbnVsbFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogSWYgc3BlY2lmaWVkIHRoZW4gYW4gYXV0aGVudGljYXRlZCBldmVudCBzdHJlYW0gd2lsbCBzZWUgb25seSBleGVjdXRpb24gXG4gICAqIGV2ZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnQgSFRUUCBzZXNzaW9uLlxuICAgKlxuICAgKiBAbWV0aG9kIGh0dHBFdmVudE9ubHlcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovICBcbiAgaHR0cEV2ZW50T25seTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maWx0ZXIudHlwZSA9ICdodHRwRXZlbnRPbmx5PXRydWUnO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sICBcblxuICAvKipcbiAgICogSWYgc3BlY2lmaWVkIHRoZW4gZXhlY3V0aW9uIGBleGVjdXRpb25Db25zb2xlRXZlbnRgIGV2ZW50cyBhcmUgc3VwcHJlc3NlZFxuICAgKiBvbiB0aGUgZXZlbnQgc3RyZWFtLlxuICAgKlxuICAgKiBAbWV0aG9kIHJldm9FdmVudE9ubHlcbiAgICogQHJldHVybiB7RXZlbnRTdHJlYW19IGZvciBjaGFpbmluZy4gICBcbiAgICogQGFwaSBwdWJsaWMgICBcbiAgICovIFxuICByZXZvRXZlbnRPbmx5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZpbHRlci50eXBlID0gJ3Jldm9FdmVudE9ubHk9dHJ1ZSc7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGFsbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maWx0ZXIgPSB7IHR5cGU6IG51bGwsIHByb2plY3Q6IG51bGwsIGpvYjogbnVsbCB9O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBzZXNzaW9uOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwRXZlbnRPbmx5KCk7XG4gIH0sIFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgbWFuYWdlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWFuYWdlbWVudEV2ZW50T25seSgpO1xuICB9XG59KTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgYSBEZXBsb3lSIHBvcnQgb2YgeXVpLWxhbmcuanMgYnkgWWFob28hXG4gKlxuICogU29mdHdhcmUgTGljZW5zZSBBZ3JlZW1lbnQgKEJTRCBMaWNlbnNlKVxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2Ugb2YgdGhpcyBzb2Z0d2FyZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciBcbiAqIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIFxuICogYXJlIG1ldDpcbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgXG4gKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBcbiAqIGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCBcbiAqIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIFxuICogd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgWWFob28hIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBZVUkncyBjb250cmlidXRvcnMgbWF5IGJlIFxuICogdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBcbiAqIHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBZYWhvbyEgSW5jLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIFxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIFxuICogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIFxuICogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBcbiAqIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFxuICogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIFxuICogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gXG4gKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBcbiAqIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFICBcbiAqIFBPUyBTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIGNvcmUgbGFuZ3VhZ2UgdXRpbGl0ZXMgYW5kIGV4dGVuc2lvbnMgdXNlZCB0aHJvdWdob3V0IERlcGxveVIuXG4gKlxuICogQGNsYXNzIExhbmdcbiAqIEBzdGF0aWNcbiAqL1xudmFyIEwgPSB7fSwgXG5cdFRPU1RSSU5HID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZywgXG5cdFRZUEVTID0ge1x0XG5cdFx0J3VuZGVmaW5lZCcgOiAndW5kZWZpbmVkJyxcblx0XHQnbnVtYmVyJyA6ICdudW1iZXInLFxuXHRcdCdib29sZWFuJyA6ICdib29sZWFuJyxcblx0XHQnc3RyaW5nJyA6ICdzdHJpbmcnLFxuXHRcdCdbb2JqZWN0IEZ1bmN0aW9uXScgOiAnZnVuY3Rpb24nLFxuXHRcdCdbb2JqZWN0IFJlZ0V4cF0nIDogJ3JlZ2V4cCcsXG5cdFx0J1tvYmplY3QgQXJyYXldJyA6ICdhcnJheScsXG5cdFx0J1tvYmplY3QgRGF0ZV0nIDogJ2RhdGUnLFxuXHRcdCdbb2JqZWN0IEVycm9yXScgOiAnZXJyb3InXG5cdH0sIHVuc2FmZU5hdGl2ZXMgPSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIG51bGwuXG4gKiBAbWV0aG9kIGlzTnVsbFxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIG51bGwuXG4gKi9cbkwuaXNOdWxsID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gbyA9PT0gbnVsbDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyB1bmRlZmluZWQuXG4gKiBAbWV0aG9kIGlzVW5kZWZpbmVkXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgdW5kZWZpbmVkLlxuICovXG5MLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICd1bmRlZmluZWQnO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIG9mIHR5cGUgb2JqZWN0XG4gKiBvciBmdW5jdGlvbi4gTm90ZSB0aGF0IGFycmF5cyBhcmUgYWxzbyBvYmplY3RzLCBzb1xuICogPGNvZGU+WS5MYW5nLmlzT2JqZWN0KFtdKSA9PT0gdHJ1ZTwvY29kZT4uXG4gKiBAbWV0aG9kIGlzT2JqZWN0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcGFyYW0gZmFpbGZuIHtib29sZWFufSBmYWlsIGlmIHRoZSBpbnB1dCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGFuIG9iamVjdC5cbiAqIEBzZWUgaXNQbGFpbk9iamVjdFxuICovXG5MLmlzT2JqZWN0ID0gZnVuY3Rpb24obywgZmFpbGZuKSB7XG5cdHZhciB0ID0gdHlwZW9mIG87XG5cdHJldHVybiAobyAmJiAodCA9PT0gJ29iamVjdCcgfHwgKCFmYWlsZm4gJiYgKHQgPT09ICdmdW5jdGlvbicgfHwgTC5pc0Z1bmN0aW9uKG8pKSkpKSB8fCBmYWxzZTtcbn07XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHByb3ZpZGVkIGl0ZW0gaXMgYW4gYXJyYXkuXG4gKlxuICogUmV0dXJucyBgZmFsc2VgIGZvciBhcnJheS1saWtlIGNvbGxlY3Rpb25zIHN1Y2ggYXMgdGhlIGZ1bmN0aW9uIGBhcmd1bWVudHNgXG4gKiBjb2xsZWN0aW9uIG9yIGBIVE1MRWxlbWVudGAgY29sbGVjdGlvbnMuXG4gKlxuICogQG1ldGhvZCBpc0FycmF5XG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgYW4gYXJyYXkuXG4gKiBAc3RhdGljXG4gKi9cbkwuaXNBcnJheSA9ICghdW5zYWZlTmF0aXZlcyAmJiBBcnJheS5pc0FycmF5KSB8fFxuZnVuY3Rpb24obykge1xuXHRyZXR1cm4gTC50eXBlKG8pID09PSAnYXJyYXknO1xufTtcblxuTC5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbkEobykge1xuXHRyZXR1cm4gKHR5cGVvZihvKSA9PT0gXCJmdW5jdGlvblwiKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcHJvdmlkZWQgaXRlbSBpcyBhIGJvb2xlYW4uXG4gKiBAbWV0aG9kIGlzQm9vbGVhblxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgYm9vbGVhbi5cbiAqL1xuTC5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvKSB7XG5cdHJldHVybiB0eXBlb2YgbyA9PT0gJ2Jvb2xlYW4nO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBzdXBwbGllZCBpdGVtIGlzIGEgZGF0ZSBpbnN0YW5jZS5cbiAqIEBtZXRob2QgaXNEYXRlXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gbyBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIG8gaXMgYSBkYXRlLlxuICovXG5MLmlzRGF0ZSA9IGZ1bmN0aW9uKG8pIHtcblx0cmV0dXJuIEwudHlwZShvKSA9PT0gJ2RhdGUnICYmIG8udG9TdHJpbmcoKSAhPT0gJ0ludmFsaWQgRGF0ZScgJiYgIWlzTmFOKG8pO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIGEgbGVnYWwgbnVtYmVyLlxuICogQG1ldGhvZCBpc051bWJlclxuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgbnVtYmVyLlxuICovXG5MLmlzTnVtYmVyID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICdudW1iZXInICYmIGlzRmluaXRlKG8pO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwcm92aWRlZCBpdGVtIGlzIGEgc3RyaW5nLlxuICogQG1ldGhvZCBpc1N0cmluZ1xuICogQHN0YXRpY1xuICogQHBhcmFtIG8gVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvIGlzIGEgc3RyaW5nLlxuICovXG5MLmlzU3RyaW5nID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gdHlwZW9mIG8gPT09ICdzdHJpbmcnO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiB0aGUgaXRlbSBwYXNzZWQgaW4uXG4gKlxuICogQG1ldGhvZCB0eXBlXG4gKiBAcGFyYW0gbyB0aGUgaXRlbSB0byB0ZXN0LlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZGV0ZWN0ZWQgdHlwZS5cbiAqIEBzdGF0aWNcbiAqL1xuTC50eXBlID0gZnVuY3Rpb24obykge1xuXHRyZXR1cm4gVFlQRVNbIHR5cGVvZiBvXSB8fCBUWVBFU1tUT1NUUklORy5jYWxsKG8pXSB8fCAoIG8gPyAnb2JqZWN0JyA6ICdudWxsJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEw7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG4gXG52YXIgTG9nZ2VyID0ge30sXG4gICAgbG9nZ2VyTWFwID0ge30sXG4gICAgZ2xvYmFsTG9nZ2VyO1xuXG4vKipcbiAqIFVuaXZlcnNhbCBzdGRvdXR8c3RkZXJyIHByaW50ZXJcbiAqL1xuZnVuY3Rpb24gbG9nKG1lc3NhZ2VzLCBjb250ZXh0KSB7XHRcblx0aWYgKCFjb25zb2xlKSB7IHJldHVybjsgfVxuXG5cdGZ1bmN0aW9uIHNlcChsZXZlbCkge1xuXHRcdHZhciBzZXAgPSAnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JyArXG5cdFx0ICAgICAgICAgICc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4nLFxuXHRcdCAgICBvZmZzZXQgPSAwO1xuXG5cdFx0aWYgKGxldmVsID09PSBMb2dnZXIuREVCVUcgfHwgbGV2ZWwgPT09IExvZ2dlci5FUlJPUikgb2Zmc2V0ID0gODtcblx0XHRlbHNlIGlmIChsZXZlbCA9PT0gTG9nZ2VyLklORk8gfHwgbGV2ZWwgPT09IExvZ2dlci5XQVJOKSBvZmZzZXQgPSA4O1xuXHRcdGVsc2Ugb2Zmc2V0ID0gNztcblxuXHRcdHJldHVybiB7IHN0YXJ0OiBzZXAuc3Vic3RyaW5nKG9mZnNldCksIGVuZDogc2VwIH07XG5cdH1cblxuXHR2YXIgaGRscixcblx0ICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtZXNzYWdlcywgMCksXG5cdCAgICBuYW1lID0gY29udGV4dC5uYW1lLFxuXHQgICAgZXJyb3IgPSBjb250ZXh0LmxldmVsID09PSBMb2dnZXIuRVJST1IsXG4gIFx0ICAgIGRlbGltID0gc2VwKGNvbnRleHQubGV2ZWwpO1xuXG4gIFx0aWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5XQVJOICYmIGNvbnNvbGUud2Fybikge1xuICBcdFx0aGRsciA9ICd3YXJuJztcbiAgXHR9IGVsc2UgaWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5FUlJPUiAmJiBjb25zb2xlLmVycm9yKSB7XG4gIFx0XHRoZGxyID0gJ2Vycm9yJztcbiAgXHR9IGVsc2UgaWYgKGNvbnRleHQubGV2ZWwgPT09IExvZ2dlci5JTkZPICYmIGNvbnNvbGUuaW5mbykge1xuICBcdFx0aGRsciA9ICdpbmZvJztcbiAgXHR9IGVsc2Uge1xuICBcdFx0aGRsciA9ICdsb2cnO1xuICBcdH1cblxuICBcdC8vIC0tIGN1c3RvbSBmb3JtYXQgbG9nZ2luZyBzdGF0ZW1lbnQgZm9yIGRlcGxveXIgcmVxdWVzdC9yZXNwb25zZS9lcnJvciAtLVxuICBcdGFyZ3MudW5zaGlmdCgnWycgKyAoZXJyb3IgPyBMb2dnZXIuRVJST1IubmFtZSA6IG5hbWUpICsgJ10gJyArIGRlbGltLnN0YXJ0KTtcbiAgXHRhcmdzLnB1c2goZGVsaW0uZW5kKTtcblxuICBcdGNvbnNvbGVbaGRscl0oYXJnc1swXSwgW2FyZ3NbMV0gKyAnIC0tLT4gJyArIGFyZ3NbMl1bJ2NhbGwnXV0pO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7IGNvbnNvbGUubG9nKGFyZ3NbaV0pOyB9ICBcbn1cblxuLyoqXG4gKiBMb2dnaW5nIGNhdGVnb3J5IGJ5IGlkLlxuICovXG5mdW5jdGlvbiBDYXRlZ29yeShpZCwgbGV2ZWwsIGZuKSB7XG5cdHRoaXMuaWQgPSBpZDtcblx0dGhpcy5jb250ZXh0ID0gbGV2ZWwgfHwgTG9nZ2VyLkRFQlVHO1xufVxuXG5DYXRlZ29yeS5wcm90b3R5cGUgPSB7XHRcblx0bG9nOiBmdW5jdGlvbihsZXZlbCwgbXNnQXJncykge1xuXHRcdGlmIChsZXZlbC52YWx1ZSA+PSB0aGlzLmNvbnRleHQudmFsdWUpIHtcdFx0XHRcblx0XHRcdGxvZyhtc2dBcmdzLCB7IFxuXHRcdFx0XHRsZXZlbDogbGV2ZWwsXG5cdFx0XHRcdG5hbWU6IHRoaXMuY29udGV4dC5uYW1lLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5jb250ZXh0LnZhbHVlXG5cdFx0XHR9KTtcdFx0XG5cdFx0fVxuXHR9LFxuXG5cdGRlYnVnOiBmdW5jdGlvbiAoKSB7XHRcdFxuXHRcdHRoaXMubG9nKExvZ2dlci5ERUJVRywgYXJndW1lbnRzKTtcblx0fSxcblxuXHRlcnJvcjogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubG9nKExvZ2dlci5FUlJPUiwgYXJndW1lbnRzKTtcblx0fSxcblxuXHRpbmZvOiBmdW5jdGlvbiAoKSB7XHRcdFxuXHRcdHRoaXMubG9nKExvZ2dlci5JTkZPLCBhcmd1bWVudHMpO1xuXHR9LFxuXG5cdHdhcm46IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmxvZyhMb2dnZXIuV0FSTiwgYXJndW1lbnRzKTtcblx0fSxcblxuXHRzZXRMZXZlbDogZnVuY3Rpb24obGV2ZWwpIHtcblx0XHRpZiAobGV2ZWwgJiYgJ3ZhbHVlJyBpbiBsZXZlbCkge1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gbGV2ZWw7XG5cdFx0fVxuXHR9XG59O1xuXG5Mb2dnZXIuREVCVUcgPSB7IHZhbHVlOiAxLCBuYW1lOiAnREVCVUcnIH07XG5Mb2dnZXIuSU5GTyAgPSB7IHZhbHVlOiAyLCBuYW1lOiAnSU5GTycgfTtcbkxvZ2dlci5XQVJOICA9IHsgdmFsdWU6IDQsIG5hbWU6ICdXQVJOJyB9O1xuTG9nZ2VyLkVSUk9SID0geyB2YWx1ZTogOCwgbmFtZTogJ0VSUk9SJyB9O1xuTG9nZ2VyLk9GRiAgID0geyB2YWx1ZTogOTksIG5hbWU6ICdPRkYnIH07ICAgXHRcdFxuXG5Mb2dnZXIuc2V0TGV2ZWwgPSBmdW5jdGlvbihuZXdMZXZlbCkge1xuXHRnbG9iYWxMb2dnZXIuc2V0TGV2ZWwobmV3TGV2ZWwpO1xufTtcblxuTG9nZ2VyLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIuZGVidWcuYXBwbHkoZ2xvYmFsTG9nZ2VyLCBhcmd1bWVudHMpO1xufTtcblxuTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7XG5cdGdsb2JhbExvZ2dlci5pbmZvLmFwcGx5KGdsb2JhbExvZ2dlciwgYXJndW1lbnRzKTtcbn07XG5cbkxvZ2dlci53YXJuID0gZnVuY3Rpb24gKCkge1xuXHRnbG9iYWxMb2dnZXIud2Fybi5hcHBseShnbG9iYWxMb2dnZXIsIGFyZ3VtZW50cyk7XG59O1xuXG5Mb2dnZXIuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdGdsb2JhbExvZ2dlci5lcnJvci5hcHBseShnbG9iYWxMb2dnZXIsIGFyZ3VtZW50cyk7XG59O1xuXG5Mb2dnZXIuZ2V0ID0gZnVuY3Rpb24gKGlkLCBsZXZlbCwgZm4pIHtcdFxuXHRyZXR1cm4gKGxvZ2dlck1hcFtpZF0gfHwgKGZ1bmN0aW9uKCkge1xuXHRcdGxvZ2dlck1hcFtpZF0gPSBuZXcgQ2F0ZWdvcnkoaWQsIGxldmVsLCBmbik7XG5cdFx0cmV0dXJuIGxvZ2dlck1hcFtpZF07XG5cdH0pKCkpO1xufTtcblxuLy8gLS0tIHNldHVwIHRoZSBnbG9iYWwgbG9nZ2VyIC0tLVxuZ2xvYmFsTG9nZ2VyID0gTG9nZ2VyLmdldCgnZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzIFx0PSBMb2dnZXI7XG4iLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cbiBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlcXVpcmUobW9kdWxlKTtcbiAgfSBjYXRjaCAoZSkge31cbn07IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbmZ1bmN0aW9uIFF1ZXVlKCkge1xuICB0aGlzLmVtcHR5Q2FsbGJhY2sgPSBudWxsO1xuICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICB0aGlzLnlpZWxkZWQgPSBmYWxzZTtcbiAgdGhpcy5yZXNwb25zZSA9IG51bGw7XG4gIHRoaXMucmVzcG9uc2VDaGFpbiA9IFtdOyAgXG59XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcblxuICBhZGQ6IGZ1bmN0aW9uKGZuLCBjdHgsIGRlZmVyKSB7XG4gICAgLy8gY3VycmVudGx5IG5vdCB3YWl0aW5nIGFuZCB0aGVyZSBpcyBubyBkZWZlciBkZWxheSBqdXN0IG1ha2UgY2FsbFxuICAgIGlmICghdGhpcy55aWVsZGVkICYmICFkZWZlcikgeyAgICAgIFxuICAgICAgZm4uYXBwbHkoY3R4IHx8IHRoaXMsIFt0aGlzLnJlc3BvbnNlXSk7XG4gICAgfSBlbHNlIHsgLy8gYWRkIHRvIHF1ZXVlXG4gICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKHsgZm46IGZuLCBjdHg6IGN0eCB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzLmxlbmd0aDtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFja3MubGVuZ3RoID09PSAwO1xuICB9LFxuXG4gIGVtcHR5OiBmdW5jdGlvbihmbiwgY3R4KSB7XG4gICAgdGhpcy5lbXB0eUNhbGxiYWNrID0geyBmbjogZm4sIGN0eDogY3R4IH07XG4gIH0sXG5cbiAgeWllbGQ6IGZ1bmN0aW9uKHlpZWxkKSB7XG4gICAgdGhpcy55aWVsZGVkID0geWllbGQ7XG4gIH0sXG5cbiAgdGFrZTogZnVuY3Rpb24ocmVzcG9uc2UsIGVycm9yLCBhcmdzKSB7IFxuICAgIHZhciBjYjtcblxuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5yZXNwb25zZUNoYWluLnB1c2gocmVzcG9uc2UpO1xuICAgIH1cblxuXG4gICAgaWYgKCF0aGlzLnlpZWxkZWQgJiYgdGhpcy5jYWxsYmFja3NbMF0pIHtcbiAgICAgIGNiID0gdGhpcy5jYWxsYmFja3Muc2hpZnQoKTtcbiAgICAgIGNiLmZuLmFwcGx5KGNiLmN0eCB8fCB0aGlzLCBbdGhpcy5yZXNwb25zZUNoYWluLCBlcnJvciwgYXJnc10pO1xuXG4gICAgICAvLyBub3RpZnkgdGhhdCB0aGUgcXVldWUgaXMgbm93IGVtcHR5ICAgXG4gICAgICBpZiAodGhpcy5jYWxsYmFja3NbMF0gJiYgdGhpcy5lbXB0eUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZW1wdHlDYWxsYmFjay5mbi5jYWxsKHRoaXMuZW1wdHlDYWxsYmFjay5jdHggfHwgdGhpcyk7ICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcbiAgZmx1c2g6IGZ1bmN0aW9uKHJlc3BvbnNlLCBlcnJvciwgYXJncykgeyAgICAgICAgXG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLnJlc3BvbnNlQ2hhaW4ucHVzaChyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLy8gcG9wIGFuZCBjYWxsIG5leHQgaW5saW5lXG4gICAgd2hpbGUgKHRoaXMuY2FsbGJhY2tzWzBdKSB7XG4gICAgICBpZiAodGhpcy55aWVsZGVkKSB7IGJyZWFrOyB9XG4gICAgICB2YXIgY2IgPSB0aGlzLmNhbGxiYWNrcy5zaGlmdCgpO1xuICAgICAgY2IuZm4uYXBwbHkoY2IuY3R4IHx8IHRoaXMsIFt0aGlzLnJlc3BvbnNlQ2hhaW4sIGVycm9yLCBhcmdzXSk7XG5cbiAgICAgIC8vIG5vdGlmeSB0aGF0IHRoZSBxdWV1ZSBpcyBub3cgZW1wdHlcbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrc1swXSAmJiB0aGlzLmVtcHR5Q2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbXB0eUNhbGxiYWNrLmZuLmNhbGwodGhpcy5lbXB0eUNhbGxiYWNrLmN0eCB8fCB0aGlzKTsgICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlICAgPSByZXF1aXJlKCcuL3NlbGZpc2gnKS5CYXNlLFxuICAgIFJUeXBlcyA9IHJlcXVpcmUoJy4vcnR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoUlR5cGVzLCB7XG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHsgIFx0XG5cdFx0dGhpcy5uYW1lICA9IG5hbWU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdH0sXG5cblx0bnVtZXJpYzogZnVuY3Rpb24gKCkge1xuXHRcdC8vIHN1cHBvcnQgYFN0cmluZ2AgbnVtYmVycyAoZS5nLiBcIjEuMlwiKVxuXHRcdHRoaXMudmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHtcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5STlVNRVJJQyxcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7XG5cdH0sXHRcblxuXHRpbnRlZ2VyOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gc3VwcG9ydCBgU3RyaW5nYCBpbnRlZ2VyIChlLmcuIFwiMTVcIilcblx0XHR0aGlzLnZhbHVlID0gcGFyc2VJbnQodGhpcy52YWx1ZSwgMTApO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUklOVEVHRVIsXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGxvZ2ljYWw6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SQk9PTEVBTiwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGNoYXJhY3RlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc2VydCh7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJTVFJJTkcsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkRBVEUsXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRmb3JtYXQ6ICd5eXl5LU1NLWRkJyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdHBvc2l4Y3Q6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SUE9TSVhfREFURSwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRmb3JtYXQ6ICd5eXl5LU1NLWRkIEhIOm1tOnNzIFonLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXHRcblx0XG5cdG51bWVyaWNWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUk5VTUVSSUNfVkVDVE9SLFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRpbnRlZ2VyVmVjdG9yOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUklOVEVHRVJfVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXHRcblx0bG9naWNhbFZlY3RvcjogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SQk9PTEVBTl9WRUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cdFxuXHRjaGFyYWN0ZXJWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlNUUklOR19WRUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sICBcblx0XG5cdGRhdGVWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUkRBVEVfVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdGZvcm1hdDogJ3l5eXktTU0tZGQnLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXHRcblx0XG5cdHBvc2l4Y3RWZWN0b3I6IGZ1bmN0aW9uICgpIHsgXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEVfVkVDVE9SLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdGZvcm1hdDogJ3l5eXktTU0tZGQgSEg6bW06c3MgWicsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGxpc3Q6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5STElTVCwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcblx0XG5cdGRhdGFmcmFtZTogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SREFUQUZSQU1FLCBcblx0XHRcdG5hbWU6IHRoaXMubmFtZSwgXG5cdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdGZhY3RvcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KCB7IFxuXHRcdFx0dHlwZTogdGhpcy5kZXBsb3lyLlJGQUNUT1IsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0b3JkZXJlZDogZmFsc2UsXG5cdFx0XHRsZXZlbHM6IG9wdHMubGV2ZWxzLFxuXHRcdFx0bGFiZWxzOiBvcHRzLmxhYmVscyxcblx0XHRcdHRvU3RyaW5nOiB0aGlzLnRvU3RyaW5nXG5cdFx0fSk7IFxuXHR9LFxuXG5cdG9yZGVyZWQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgb3B0cyA9IHRoaXMub3B0aW9ucztcblxuXHRcdHJldHVybiB0aGlzLmFzc2VydCggeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5ST1JERVJFRCwgXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsIFxuXHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRvcmRlcmVkOiB0cnVlLFxuXHRcdFx0bGV2ZWxzOiBvcHRzLmxldmVscyxcblx0XHRcdGxhYmVsczogb3B0cy5sYWJlbHMsXG5cdFx0XHR0b1N0cmluZzogdGhpcy50b1N0cmluZ1xuXHRcdH0pOyBcblx0fSxcdFx0XG5cblx0bnVtZXJpY01hdHJpeDogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5STlVNRVJJQ19NQVRSSVgsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0aW50ZWdlck1hdHJpeDogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SSU5URUdFUl9NQVRSSVgsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0bG9naWNhbE1hdHJpeDogZnVuY3Rpb24gKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5hc3NlcnQoeyBcblx0XHRcdHR5cGU6IHRoaXMuZGVwbG95ci5SQk9PTEVBTl9NQVRSSVgsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0Y2hhcmFjdGVyTWF0cml4OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXJ0KHsgXG5cdFx0XHR0eXBlOiB0aGlzLmRlcGxveXIuUlNUUklOR19NQVRSSVgsIFxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLCBcblx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0dG9TdHJpbmc6IHRoaXMudG9TdHJpbmdcblx0XHR9KTsgXG5cdH0sXG5cblx0dG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBvcHRzICAgPSB0aGlzLm9wdGlvbnMgfHwge30sXG5cdFx0ICAgIGxldmVscyA9IG9wdHMubGV2ZWxzID8gJ1sgbGV2ZWxzID0gJyArIG9wdHMubGV2ZWxzICsgJ10nIDogJycsXG5cdFx0ICAgIGxhYmVscyA9IG9wdHMubGFiZWxzID8gJ1sgbGFiZWxzID0gJyArIG9wdHMubGFiZWxzICsgJ10nIDogJyc7XG5cblx0XHRyZXR1cm4gJ1sgbmFtZSA9ICcgICsgdGhpcy5uYW1lICsgJyBdICcgK1xuXHRcdCAgICAgICAnWyB2YWx1ZSA9ICcgKyB0aGlzLnZhbHVlICsgJyBdICcgK1xuXHRcdCAgICAgICAnWyB0eXBlID0gJyAgKyB0aGlzLnR5cGUgKyAnIF0gJyArXG5cdFx0ICAgICAgIGxldmVscyArIGxhYmVscztcdFx0ICAgICAgIFxuXHR9XG59KTsiLCIvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxMC0yMDE2LCBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSB0ZXJtcyBvZiBWZXJzaW9uIDIuMCBvZiB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlLiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgV0lUSE9VVFxuICogQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5UWSwgSU5DTFVESU5HIFRIT1NFIE9GIE5PTi1JTkZSSU5HRU1FTlQsXG4gKiBNRVJDSEFOVEFCSUxJVFkgT1IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFBsZWFzZSByZWZlciB0byB0aGVcbiAqIEFwYWNoZSBMaWNlbnNlIDIuMCAoaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wKSBmb3IgbW9yZSBcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIEJhc2UgICA9IHJlcXVpcmUoJy4vc2VsZmlzaCcpLkJhc2UsXG4gICAgUlR5cGVzID0gcmVxdWlyZSgnLi9ydHlwZXMnKSxcbiAgICBMYW5nICAgPSByZXF1aXJlKCcuL2xhbmcnKSxcbiAgICBSSW5wdXQgPSByZXF1aXJlKCcuL3JpbnB1dCcpOyBcblxuZnVuY3Rpb24gY3JlYXRlKHR5cGUsIG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG5cdHZhciByaW5wdXQ7XG5cblx0aWYgKExhbmcuaXNPYmplY3QobmFtZSkpIHtcblx0XHRyaW5wdXQgPSBuYW1lO1xuXHRcdGlmICghcmlucHV0LnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSWxsZWdhbEFyZ3VtZW50RXJyb3I6JyArIFxuXHRcdFx0XHQnRXhwZWN0aW5nIFwiJyArIHR5cGUgKyAnXCIgYnV0IGZvdW5kIFwiJyArIHJpbnB1dC50eXBlICsgJ1wiJyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHQgICAgcmlucHV0ID0gUklucHV0Lm5ldyhuYW1lLCB2YWx1ZSwgb3B0aW9ucylbdHlwZV0oKTtcblx0fSBcblxuXHRyZXR1cm4gcmlucHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2UuZXh0ZW5kKFJUeXBlcywge1x0XG5cdG51bWVyaWM6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5STlVNRVJJQywgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdGludGVnZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SSU5URUdFUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRsb2dpY2FsOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkJPT0xFQU4sIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0Y2hhcmFjdGVyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUlNUUklORywgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRkYXRlOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkRBVEUsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXG5cdHBvc2l4Y3Q6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SUE9TSVhfREFURSwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXHRcblx0XG5cdG51bWVyaWNWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUk5VTUVSSUNfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblx0XG5cdGludGVnZXJWZWN0b3I6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SSU5URUdFUl9WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0bG9naWNhbFZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SQk9PTEVBTl9WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0Y2hhcmFjdGVyVmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJTVFJJTkdfVkVDVE9SLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSwgIFxuXHRcblx0ZGF0ZVZlY3RvcjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SREFURV9WRUNUT1IsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFx0XG5cdFxuXHRwb3NpeGN0VmVjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cdFxuXHRsaXN0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkxJU1QsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXHRcblx0ZGF0YWZyYW1lOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJEQVRBRlJBTUUsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFx0XG5cblx0ZmFjdG9yOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGxldmVscywgbGFiZWxzKSB7XG5cdFx0dmFyIG9wdHMgPSB7IGxldmVsczogbGV2ZWxzLCBsYWJlbHM6IGxhYmVscyB9O1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SRkFDVE9SLCBuYW1lLCB2YWx1ZSwgb3B0cykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdG9yZGVyZWQ6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgbGV2ZWxzLCBsYWJlbHMpIHtcblx0XHR2YXIgb3B0cyA9IHsgbGV2ZWxzOiBsZXZlbHMsIGxhYmVsczogbGFiZWxzIH07XG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJPUkRFUkVELCBuYW1lLCB2YWx1ZSwgb3B0cykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFx0XHRcblxuXHRudW1lcmljTWF0cml4OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHsgXG5cdFx0dGhpcy5pbnB1dHMucHVzaChjcmVhdGUodGhpcy5kZXBsb3lyLlJOVU1FUklDX01BVFJJWCwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpczsgXG5cdH0sXG5cblx0aW50ZWdlck1hdHJpeDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7IFxuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SSU5URUdFUl9NQVRSSVgsIG5hbWUsIHZhbHVlKSk7XG5cdFx0cmV0dXJuIHRoaXM7IFxuXHR9LFxuXG5cdGxvZ2ljYWxNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkgeyBcblx0XHR0aGlzLmlucHV0cy5wdXNoKGNyZWF0ZSh0aGlzLmRlcGxveXIuUkJPT0xFQU5fTUFUUklYLCBuYW1lLCB2YWx1ZSkpO1xuXHRcdHJldHVybiB0aGlzOyBcblx0fSxcblxuXHRjaGFyYWN0ZXJNYXRyaXg6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goY3JlYXRlKHRoaXMuZGVwbG95ci5SU1RSSU5HX01BVFJJWCwgbmFtZSwgdmFsdWUpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmUgXG4gKiBkZXRhaWxzLlxuICovXG5cbnZhciBCYXNlID0gcmVxdWlyZSgnLi9zZWxmaXNoJykuQmFzZSxcbiAgICBMYW5nID0gcmVxdWlyZSgnLi9sYW5nJyksXG4gICAgbWFwICA9IHt9OyAvLyBkZXBsb3lyLT5Uby0+UiBjYXRhbG9nXG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZS5leHRlbmQoe1xuXHRyOiB7XG5cdFx0UFJJTUlUSVZFOiAncHJpbWl0aXZlJyxcblx0XHREQVRBRlJBTUU6ICdkYXRhZnJhbWUnLFxuXHRcdExJU1Q6ICdsaXN0Jyxcblx0XHRNQVRSSVg6ICdtYXRyaXgnLFxuXHRcdERBVEU6ICdkYXRlJyxcblx0XHRGQUNUT1I6ICdmYWN0b3InLFxuXHRcdFZFQ1RPUjogJ3ZlY3Rvcidcblx0fSxcblxuXHRkZXBsb3lyOiB7XG5cdFx0UkJPT0xFQU46ICdsb2dpY2FsJyxcblx0XHRSTlVNRVJJQzogJ251bWVyaWMnLFxuXHRcdFJJTlRFR0VSOiAnaW50ZWdlcicsXG5cdFx0UlNUUklORzogJ2NoYXJhY3RlcicsXG5cdFx0UkRBVEU6ICdkYXRlJyxcblx0XHRSUE9TSVhfREFURTogJ3Bvc2l4Y3QnLFxuXHRcdFJCT09MRUFOX1ZFQ1RPUjogJ2xvZ2ljYWxWZWN0b3InLFxuXHRcdFJOVU1FUklDX1ZFQ1RPUjonbnVtZXJpY1ZlY3RvcicsXG5cdFx0UklOVEVHRVJfVkVDVE9SOiAnaW50ZWdlclZlY3RvcicsXHRcblx0XHRSU1RSSU5HX1ZFQ1RPUjogJ2NoYXJhY3RlclZlY3RvcicsXG5cdFx0UkRBVEVfVkVDVE9SOiAnZGF0ZVZlY3RvcicsXG5cdFx0UlBPU0lYX0RBVEVfVkVDVE9SOiAncG9zaXhjdFZlY3RvcicsXG5cdFx0UkxJU1Q6ICdsaXN0Jyxcblx0XHRSREFUQUZSQU1FOiAnZGF0YWZyYW1lJyxcblx0XHRSRkFDVE9SOiAnZmFjdG9yJyxcblx0XHRST1JERVJFRDogJ29yZGVyZWQnLFx0XHRcblx0XHRSQk9PTEVBTl9NQVRSSVg6ICdsb2dpY2FsTWF0cml4Jyxcblx0XHRSTlVNRVJJQ19NQVRSSVg6ICdudW1lcmljTWF0cml4Jyxcblx0XHRSSU5URUdFUl9NQVRSSVg6ICdpbnRlZ2VyTWF0cml4JyxcdFx0XG5cdFx0UlNUUklOR19NQVRSSVg6ICdjaGFyYWN0ZXJNYXRyaXgnXG5cdH0sXG5cblx0aXNEYXRlOiBmdW5jdGlvbih0eXBlKSB7XG5cdFx0cmV0dXJuICh0eXBlID09PSB0aGlzLmRlcGxveXIuUkRBVEUgfHwgXG5cdFx0ICAgICAgICB0eXBlID09PSB0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEUgfHwgXG5cdFx0ICAgICAgICB0eXBlID09PSB0aGlzLmRlcGxveXIuUkRBVEVfVkVDVE9SIHx8XG5cdFx0ICAgICAgICB0eXBlID09PSB0aGlzLmRlcGxveXIuUlBPU0lYX0RBVEVfVkVDVE9SIHx8XG5cdFx0ICAgICAgICB0eXBlID09PSB0aGlzLnIuREFURSk7XG5cdH0sXG5cblx0ZGVwbG95clRvUjogZnVuY3Rpb24odHlwZSkge1x0XG5cdFx0dmFyIGRlcGxveXIgPSB0aGlzLmRlcGxveXIsXG5cdFx0ICAgIHIgICAgICAgPSB0aGlzLnI7XG5cblx0XHRpZiAoIW1hcFt0eXBlXSkgeyAvLyBidWlsZCBjYXRhbG9nIG9ubHkgb25jZVx0XG5cdFx0XHRtYXBbZGVwbG95ci5SQk9PTEVBTl0gICAgICAgICAgID0gci5QUklNSVRJVkU7XG5cdFx0XHRtYXBbZGVwbG95ci5STlVNRVJJQ10gICAgICAgICAgID0gci5QUklNSVRJVkU7XG5cdFx0XHRtYXBbZGVwbG95ci5SSU5URUdFUl0gICAgICAgICAgID0gci5QUklNSVRJVkU7XG5cdFx0XHRtYXBbZGVwbG95ci5SU1RSSU5HXSAgICAgICAgICAgID0gci5QUklNSVRJVkU7XG5cdFx0XHRtYXBbZGVwbG95ci5SREFURV0gICAgICAgICAgICAgID0gci5EQVRFO1xuXHRcdFx0bWFwW2RlcGxveXIuUlBPU0lYX0RBVEVdICAgICAgICA9IHIuREFURTtcblx0XHRcdG1hcFtkZXBsb3lyLlJCT09MRUFOX1ZFQ1RPUl0gICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUl0gICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJJTlRFR0VSX1ZFQ1RPUl0gICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJTVFJJTkdfVkVDVE9SXSAgICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJEQVRFX1ZFQ1RPUl0gICAgICAgPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUl0gPSByLlZFQ1RPUjtcblx0XHRcdG1hcFtkZXBsb3lyLlJMSVNUXSAgICAgICAgICAgICAgPSByLkxJU1Q7XG5cdFx0XHRtYXBbZGVwbG95ci5SREFUQUZSQU1FXSAgICAgICAgID0gci5EQVRBRlJBTUU7XG5cdFx0XHRtYXBbZGVwbG95ci5SRkFDVE9SXSAgICAgICAgICAgID0gci5GQUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5ST1JERVJFRF0gICAgICAgICAgID0gci5GQUNUT1I7XG5cdFx0XHRtYXBbZGVwbG95ci5SQk9PTEVBTl9NQVRSSVhdICAgID0gci5NQVRSSVg7XG5cdFx0XHRtYXBbZGVwbG95ci5STlVNRVJJQ19NQVRSSVhdICAgID0gci5NQVRSSVg7XG5cdFx0XHRtYXBbZGVwbG95ci5SSU5URUdFUl9NQVRSSVhdICAgID0gci5NQVRSSVg7XG5cdFx0XHRtYXBbZGVwbG95ci5SU1RSSU5HX01BVFJJWF0gICAgID0gci5NQVRSSVg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcFt0eXBlXTtcdFx0XG5cdH0sXG5cblx0LyoqXG5cdCAqIEFzc2VydCB0aGF0IHRoZSBgcmlucHV0YCB2YWx1ZSBpcyB0aGUgY29ycmVjdCBKYXZhU2NyaXB0IERhdGEgVHlwZS5cblx0ICovXG5cdGFzc2VydDogZnVuY3Rpb24gKHJpbnB1dCkge1xuXHRcdHZhciBkZXBsb3lyID0gdGhpcy5kZXBsb3lyLFxuICAgIFx0XHROT09QICAgID0gbnVsbCxcblx0XHQgICAgdmFsdWVzICA9IHJpbnB1dC52YWx1ZSxcblx0XHQgICAgZm47XG5cblx0XHR2YWx1ZXMgPSAhTGFuZy5pc0FycmF5KHZhbHVlcykgPyBbdmFsdWVzXSA6IHZhbHVlcztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSB2YWx1ZXNbaV07XG5cblx0XHRcdHN3aXRjaCAocmlucHV0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBkZXBsb3lyLlJOVU1FUklDIDpcblx0XHRcdFx0Y2FzZSBkZXBsb3lyLlJOVU1FUklDX1ZFQ1RPUiA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJJTlRFR0VSIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUklOVEVHRVJfVkVDVE9SIDpcblx0XHRcdCAgICBmbiA9IExhbmcuaXNOdW1iZXI7XG5cdFx0XHQgICAgYnJlYWs7XG5cblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkJPT0xFQU4gOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SQk9PTEVBTl9WRUNUT1IgOlxuXHRcdFx0ICAgIGZuID0gTGFuZy5pc0Jvb2xlYW47XG5cdFx0XHQgICAgYnJlYWs7XG5cdFx0XHQgICAgXG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJTVFJJTkcgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SU1RSSU5HX1ZFQ1RPUiA6XHRcblx0XHRcdCAgICBmbiA9IExhbmcuaXNTdHJpbmc7XG5cdFx0XHQgICAgYnJlYWs7XG5cblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkRBVEUgOlxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SUE9TSVhfREFURSA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJEQVRFX1ZFQ1RPUiA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJQT1NJWF9EQVRFX1ZFQ1RPUiA6XG5cdFx0XHQgICAgZm4gPSBMYW5nLmlzRGF0ZTtcblx0XHRcdCAgICBicmVhaztcblxuXHRcdFx0ICAgIGNhc2UgZGVwbG95ci5SRkFDVE9SIDpcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUk9SREVSRUQgOlx0XHRcdCAgICBcblx0XHRcdCAgICBjYXNlIGRlcGxveXIuUkRBVEFGUkFNRSA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJJTlRFR0VSX01BVFJJWCA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJCT09MRUFOX01BVFJJWCA6XG5cdFx0XHQgICAgY2FzZSBkZXBsb3lyLlJTVFJJTkdfTUFUUklYIDpcdCAgICBcblx0XHRcdCAgICBmbiA9IE5PT1A7XG5cdFx0XHQgICAgYnJlYWtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuICYmICFmbih2YWx1ZSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdSSW5wdXRGb3JtYXRFcnJvcjogJyArICdcIicgKyB2YWx1ZSArIFxuXHRcdFx0XHRcdCdcIiBpcyBub3QgYSB2YWxpZCBcIicgKyByaW5wdXQudHlwZSArICdcIiB0eXBlIGZvciBpbnB1dCAnICtcblx0XHRcdFx0XHQnXCInICsgcmlucHV0Lm5hbWUgKyAnXCInKTtcdFx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJpbnB1dDtcblx0fVxufSk7IiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vR296YWxhL3NlbGZpc2hcbiAqL1xuXG4vKiB2aW06c2V0IHRzPTIgc3c9MiBzdHM9MiBleHBhbmR0YWIgKi9cbi8qanNoaW50IHVuZGVmOiB0cnVlIGVzNTogdHJ1ZSBub2RlOiB0cnVlIGRldmVsOiB0cnVlIGV2aWw6IHRydWVcbiAgICAgICAgIGZvcmluOiB0cnVlIGxhdGVkZWY6IGZhbHNlIHN1cGVybmV3OiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IHRydWUgKi9cblxuISh0eXBlb2YgZGVmaW5lICE9PSBcImZ1bmN0aW9uXCIgPyBmdW5jdGlvbigkKXsgJChudWxsLCB0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogd2luZG93KTsgfSA6IGRlZmluZSkoZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5CYXNlID0gT2JqZWN0LmZyZWV6ZShPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUsIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBgdGhpc2Agb2JqZWN0IChBbmFsb2cgb2ZcbiAgICogYG5ldyBPYmplY3QoKWApLlxuICAgKiBAZXhhbXBsZXNcbiAgICpcbiAgICogICAgdmFyIERvZyA9IEJhc2UuZXh0ZW5kKHtcbiAgICogICAgICBiYXJrOiBmdW5jdGlvbiBiYXJrKCkge1xuICAgKiAgICAgICAgcmV0dXJuICdSdWZmISBSdWZmISdcbiAgICogICAgICB9XG4gICAqICAgIH0pO1xuICAgKiAgICB2YXIgZG9nID0gRG9nLm5ldygpO1xuICAgKi9cbiAgJ25ldyc6IHsgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICBvYmplY3QuaW5pdGlhbGl6ZS5hcHBseShvYmplY3QsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfX0sXG4gIC8qKlxuICAgKiBXaGVuIG5ldyBpbnN0YW5jZSBvZiB0aGUgdGhpcyBwcm90b3R5cGUgaXMgY3JlYXRlZCBpdCdzIGBpbml0aWFsaXplYFxuICAgKiBtZXRob2QgaXMgY2FsbGVkIHdpdGggYWxsIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBgbmV3YC4gWW91IGNhblxuICAgKiBvdmVycmlkZSBgaW5pdGlhbGl6ZWAgdG8gc2V0IHVwIGFuIGluc3RhbmNlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZTogeyB2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgfX0sXG4gIC8qKlxuICAgKiBNZXJnZXMgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwYXNzZWQgb2JqZWN0cyBpbnRvIGB0aGlzYCBpbnN0YW5jZSAoVGhpc1xuICAgKiBtZXRob2QgY2FuIGJlIHVzZWQgb24gaW5zdGFuY2VzIG9ubHkgYXMgcHJvdG90eXBlIG9iamVjdHMgYXJlIGZyb3plbikuXG4gICAqXG4gICAqIElmIHR3byBvciBtb3JlIGFyZ3VtZW50IG9iamVjdHMgaGF2ZSBvd24gcHJvcGVydGllcyB3aXRoIHRoZSBzYW1lIG5hbWUsXG4gICAqIHRoZSBwcm9wZXJ0eSBpcyBvdmVycmlkZGVuLCB3aXRoIHByZWNlZGVuY2UgZnJvbSByaWdodCB0byBsZWZ0LCBpbXBseWluZyxcbiAgICogdGhhdCBwcm9wZXJ0aWVzIG9mIHRoZSBvYmplY3Qgb24gdGhlIGxlZnQgYXJlIG92ZXJyaWRkZW4gYnkgYSBzYW1lIG5hbWVkXG4gICAqIHByb3BlcnR5IG9mIHRoZSBvYmplY3Qgb24gdGhlIHJpZ2h0LlxuICAgKlxuICAgKiBAZXhhbXBsZXNcbiAgICpcbiAgICogICAgdmFyIFBldCA9IERvZy5leHRlbmQoe1xuICAgKiAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgKiAgICAgICAgLy8gdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIC0+IHdvdWxkIGhhdmUgdGhyb3duIChmcm96ZW4gcHJvdG90eXBlKVxuICAgKiAgICAgICAgdGhpcy5tZXJnZShvcHRpb25zKSAvLyB3aWxsIG92ZXJyaWRlIGFsbCBwcm9wZXJ0aWVzLlxuICAgKiAgICAgIH0sXG4gICAqICAgICAgY2FsbDogZnVuY3Rpb24obmFtZSkge1xuICAgKiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gbmFtZSA/IHRoaXMuYmFyaygpIDogJydcbiAgICogICAgICB9LFxuICAgKiAgICAgIG5hbWU6IG51bGxcbiAgICogICAgfSlcbiAgICogICAgdmFyIHBldCA9IFBldC5uZXcoeyBuYW1lOiAnQmVuenknLCBicmVlZDogJ0xhYnJhZG9yJyB9KVxuICAgKiAgICBwZXQuY2FsbCgnQmVuenknKSAgIC8vICdSdWZmISBSdWZmISdcbiAgICovXG4gIG1lcmdlOiB7IHZhbHVlOiBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHt9O1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGRlc2NyaXB0b3JbbmFtZV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BlcnRpZXMsIG5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgZGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH19LFxuICAvKipcbiAgICogVGFrZXMgYW55IG51bWJlciBvZiBhcmd1bWVudCBvYmplY3RzIGFuZCByZXR1cm5zIGZyb3plbiwgY29tcG9zaXRlIG9iamVjdFxuICAgKiB0aGF0IGluaGVyaXRzIGZyb20gYHRoaXNgIG9iamVjdCBhbmQgY29tYmluZXMgYWxsIG9mIHRoZSBvd24gcHJvcGVydGllcyBvZlxuICAgKiB0aGUgYXJndW1lbnQgb2JqZWN0cy4gKE9iamVjdHMgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbiBhcmUgZnJvemVuIGFzXG4gICAqIHRoZXkgYXJlIGludGVuZGVkIHRvIGJlIHVzZWQgYXMgdHlwZXMpLlxuICAgKlxuICAgKiBJZiB0d28gb3IgbW9yZSBhcmd1bWVudCBvYmplY3RzIGhhdmUgb3duIHByb3BlcnRpZXMgd2l0aCB0aGUgc2FtZSBuYW1lLFxuICAgKiB0aGUgcHJvcGVydHkgaXMgb3ZlcnJpZGRlbiwgd2l0aCBwcmVjZWRlbmNlIGZyb20gcmlnaHQgdG8gbGVmdCwgaW1wbHlpbmcsXG4gICAqIHRoYXQgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IG9uIHRoZSBsZWZ0IGFyZSBvdmVycmlkZGVuIGJ5IGEgc2FtZSBuYW1lZFxuICAgKiBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0IG9uIHRoZSByaWdodC5cbiAgICogQGV4YW1wbGVzXG4gICAqXG4gICAqICAgIC8vICMjIE9iamVjdCBjb21wb3NpdGlvbiAjI1xuICAgKlxuICAgKiAgICB2YXIgSEVYID0gQmFzZS5leHRlbmQoe1xuICAgKiAgICAgIGhleDogZnVuY3Rpb24gaGV4KCkge1xuICAgKiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMuY29sb3I7XG4gICAqICAgICAgfVxuICAgKiAgICB9KVxuICAgKlxuICAgKiAgICB2YXIgUkdCID0gQmFzZS5leHRlbmQoe1xuICAgKiAgICAgIHJlZDogZnVuY3Rpb24gcmVkKCkge1xuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gICAqICAgICAgfSxcbiAgICogICAgICBncmVlbjogZnVuY3Rpb24gZ3JlZW4oKSB7XG4gICAqICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5jb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICogICAgICB9LFxuICAgKiAgICAgIGJsdWU6IGZ1bmN0aW9uIGJsdWUoKSB7XG4gICAqICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5jb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgICogICAgICB9XG4gICAqICAgIH0pXG4gICAqXG4gICAqICAgIHZhciBDTVlLID0gQmFzZS5leHRlbmQoUkdCLCB7XG4gICAqICAgICAgYmxhY2s6IGZ1bmN0aW9uIGJsYWNrKCkge1xuICAgKiAgICAgICAgdmFyIGNvbG9yID0gTWF0aC5tYXgoTWF0aC5tYXgodGhpcy5yZWQoKSwgdGhpcy5ncmVlbigpKSwgdGhpcy5ibHVlKCkpO1xuICAgKiAgICAgICAgcmV0dXJuICgxIC0gY29sb3IgLyAyNTUpLnRvRml4ZWQoNCk7XG4gICAqICAgICAgfSxcbiAgICogICAgICBjeWFuOiBmdW5jdGlvbiBjeWFuKCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMucmVkKCkgLyAyNTUpLnRvRml4ZWQoNCkgLSBLKSAvICgxIC0gSykpLnRvRml4ZWQoNCk7XG4gICAqICAgICAgfSxcbiAgICogICAgICBtYWdlbnRhOiBmdW5jdGlvbiBtYWdlbnRhKCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMuZ3JlZW4oKSAvIDI1NSkudG9GaXhlZCg0KSAtIEspIC8gKDEgLSBLKSkudG9GaXhlZCg0KTtcbiAgICogICAgICB9LFxuICAgKiAgICAgIHllbGxvdzogZnVuY3Rpb24geWVsbG93KCkge1xuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMuYmx1ZSgpIC8gMjU1KS50b0ZpeGVkKDQpIC0gSykgLyAoMSAtIEspKS50b0ZpeGVkKDQpO1xuICAgKiAgICAgIH1cbiAgICogICAgfSlcbiAgICpcbiAgICogICAgdmFyIENvbG9yID0gQmFzZS5leHRlbmQoSEVYLCBSR0IsIENNWUssIHtcbiAgICogICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBDb2xvcihjb2xvcikge1xuICAgKiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgKiAgICAgIH1cbiAgICogICAgfSk7XG4gICAqXG4gICAqICAgIC8vICMjIFByb3RvdHlwYWwgaW5oZXJpdGFuY2UgIyNcbiAgICpcbiAgICogICAgdmFyIFBpeGVsID0gQ29sb3IuZXh0ZW5kKHtcbiAgICogICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBQaXhlbCh4LCB5LCBoZXgpIHtcbiAgICogICAgICAgIENvbG9yLmluaXRpYWxpemUuY2FsbCh0aGlzLCBoZXgpO1xuICAgKiAgICAgICAgdGhpcy54ID0geDtcbiAgICogICAgICAgIHRoaXMueSA9IHk7XG4gICAqICAgICAgfSxcbiAgICogICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAqICAgICAgICByZXR1cm4gdGhpcy54ICsgJzonICsgdGhpcy55ICsgJ0AnICsgdGhpcy5oZXgoKTtcbiAgICogICAgICB9XG4gICAqICAgIH0pO1xuICAgKlxuICAgKiAgICB2YXIgcGl4ZWwgPSBQaXhlbC5uZXcoMTEsIDIzLCAnQ0MzMzk5JylcbiAgICogICAgcGl4ZWwudG9TdHJpbmcoKTsgLy8gMTE6MjNAI0NDMzM5OVxuICAgKlxuICAgKiAgICBwaXhlbC5yZWQoKTsgICAgICAvLyAyMDRcbiAgICogICAgcGl4ZWwuZ3JlZW4oKTsgICAgLy8gNTFcbiAgICogICAgcGl4ZWwuYmx1ZSgpOyAgICAgLy8gMTUzXG4gICAqXG4gICAqICAgIHBpeGVsLmN5YW4oKTsgICAgIC8vIDAuMDAwMFxuICAgKiAgICBwaXhlbC5tYWdlbnRhKCk7ICAvLyAwLjc1MDBcbiAgICogICAgcGl4ZWwueWVsbG93KCk7ICAgLy8gMC4yNTAwXG4gICAqXG4gICAqL1xuICAgZXh0ZW5kOiB7IHZhbHVlOiBmdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpcy5tZXJnZS5hcHBseShPYmplY3QuY3JlYXRlKHRoaXMpLCBhcmd1bWVudHMpKTtcbiAgfX1cbn0pKTtcblxufSk7IiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIExhbmcgPSByZXF1aXJlKCcuL2xhbmcnKTtcblxudmFyIGdldCA9IGV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24ocywga2V5KSB7XG4gICAgZnVuY3Rpb24gdHJhdmVyc2Uob2JqLCBmbiwgcGFyZW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgW2ksIG9ialtpXSwgcGFyZW50XSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9ialtpXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKG9ialtpXSBpbnN0YW5jZW9mIEFycmF5KSkgeyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB0cmF2ZXJzZShvYmpbaV0sIGZuLCBpKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgcHJvcGVydHkpIHtcbiAgICAgICAgdmFyIGFjYyA9IHt9O1xuICAgICAgICB0cmF2ZXJzZShvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUsIHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gcHJvcGVydHkpIHsgIFxuICAgICAgICAgICAgICAgIGFjYyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbXB0eShvYmopIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHsgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgcmV0dXJuIG9iajsgfVxuICAgICAgICByZXR1cm4gIUxhbmcuaXNPYmplY3Qob2JqKSA/IG9iaiA6IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5KGdldFByb3BlcnR5KHMsIGtleSkpO1xufTtcblxudmFyIGluQXJyYXkgPSBleHBvcnRzLmluQXJyYXkgPSBmdW5jdGlvbihoYXlzdGFjaywgbmVlZGxlLCBrZXkpIHtcbiAgICB2YXIgaSwgbWF4ID0gaGF5c3RhY2subGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXVtrZXldID09PSBuZWVkbGUpIHsgcmV0dXJuIGhheXN0YWNrW2ldOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT09IG5lZWRsZSkgeyByZXR1cm4gaGF5c3RhY2tbaV07IH1cbiAgICAgICAgfSAgIFxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbih0bywgZnJvbSkgeyAgICAgICAgXG4gICAgaWYgKCF0byB8fCB0eXBlb2YodG8pICE9PSAnb2JqZWN0JykgeyB0byA9IHt9OyB9XG4gICAgaWYgKCFmcm9tIHx8IHR5cGVvZihmcm9tKSAhPT0gJ29iamVjdCcpIHsgZnJvbSA9IHt9OyB9XG5cbiAgICBmb3IgKHZhciBrIGluIGZyb20pIHsgdG9ba10gPSBmcm9tW2tdOyB9XG5cbiAgICByZXR1cm4gdG87XG59O1xuXG5leHBvcnRzLndvcmtzcGFjZSA9IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgIHZhciB3cyA9IGdldChvYmosICd3b3Jrc3BhY2UnKTtcbiAgICByZXR1cm4gKHdzID8gbmFtZSA/IGluQXJyYXkod3Mub2JqZWN0cywgbmFtZSwgJ25hbWUnKSA6IHdzLm9iamVjdHMgfHwgd3Mub2JqZWN0OiBudWxsKTtcbn07XG5cbmV4cG9ydHMuc2lnbmF0dXJlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50c1snMCddLCAwKSxcbiAgICAgICAgbGVuICAgID0gYXJncy5sZW5ndGgsXG4gICAgICAgIGNyZWF0ZSA9IGZhbHNlLFxuICAgICAgICBvcHRzICAgPSB7fSxcbiAgICAgICAgYXBpO1xuXG4gICAgaWYgKGxlbiA9PT0gMSAmJiBMYW5nLmlzT2JqZWN0KGFyZ3NbMF0pKSB7XG4gICAgICAgIG9wdHMgPSBhcmdzWzBdO1xuICAgICAgICBhcGkgID0gb3B0cy5wcm9qZWN0ID8gJy9yL3Byb2plY3QvZXhlY3V0ZS9zY3JpcHQnIDpcbiAgICAgICAgICAgICcvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlJztcbiAgICB9IGVsc2UgaWYgKGxlbiA9PT0gMSAmJiBMYW5nLmlzU3RyaW5nKGFyZ3NbMF0pKSB7XG4gICAgICAgIGFyZ3MgPSBhcmdzWzBdLnNwbGl0KCdcXC8nKTtcbiAgICAgICAgYXBpICA9ICcvci9yZXBvc2l0b3J5L3NjcmlwdC9leGVjdXRlJ1xuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgYXV0aG9yOiBhcmdzWzFdLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiBhcmdzWzJdLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGFyZ3NbM11cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICAvLyBleDogLnNjcmlwdCgnL3Rlc3R1c2VyL3Jvb3QvRGVwbG95UiAtIEhlbGxvIFdvcmxkLlInLCBwcm9qZWN0KVxuICAgICAgICB2YXIgcHJvamVjdCA9IGFyZ3NbMV07XG4gICAgICAgIGFwaSA9IHByb2plY3QgPyAnL3IvcHJvamVjdC9leGVjdXRlL3NjcmlwdCcgOiAnL3IvcmVwb3NpdG9yeS9zY3JpcHQvZXhlY3V0ZSc7XG5cbiAgICAgICAgYXJncyA9IGFyZ3NbMF0uc3BsaXQoJ1xcLycpO1xuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdCxcbiAgICAgICAgICAgIGF1dGhvcjogYXJnc1sxXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogYXJnc1syXSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhcmdzWzNdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChsZW4gPiAyKSB7XG4gICAgICAgIC8vIGV4OiAuc2NyaXB0KCdEZXBsb3lSIC0gSGVsbG8gV29ybGQuUicsICd0ZXN0dXNlcicsICdyb290JylcbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIGF1dGhvcjogYXJnc1syXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogYXJnc1sxXSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhcmdzWzBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gaW5kaWNhdGUgYSBuZXcgcHJvamVjdCBzaG91bGQgYmUgY3JlYXRlZFxuICAgIGlmIChvcHRzLnByb2plY3QgJiYgTGFuZy5pc0Jvb2xlYW4ob3B0cy5wcm9qZWN0KSkge1xuICAgICAgZGVsZXRlIG9wdHNbJ3Byb2plY3QnXTtcbiAgICAgIGNyZWF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBpOiBhcGksXG4gICAgICAgIG9wdHM6IG9wdHMsXG4gICAgICAgIGNyZWF0ZTogY3JlYXRlXG4gICAgfTtcbn07IiwiLyoqXG4qIGF0dGVtcHQgb2YgYSBzaW1wbGUgZGVmZXIvcHJvbWlzZSBsaWJyYXJ5IGZvciBtb2JpbGUgZGV2ZWxvcG1lbnRcbiogQGF1dGhvciBKb25hdGhhbiBHb3R0aSA8IGpnb3R0aSBhdCBqZ290dGkgZG90IG5ldD5cbiogQHNpbmNlIDIwMTItMTBcbiogQHZlcnNpb24gMC43LjNcbiovXG4oZnVuY3Rpb24odW5kZWYpe1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgbmV4dFRpY2tcblx0XHQsIGlzRnVuYyA9IGZ1bmN0aW9uKGYpeyByZXR1cm4gKCB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyApOyB9XG5cdFx0LCBpc0FycmF5ID0gZnVuY3Rpb24oYSl7IHJldHVybiBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheShhKSA6IChhIGluc3RhbmNlb2YgQXJyYXkpOyB9XG5cdFx0LCBpc09iak9yRnVuYyA9IGZ1bmN0aW9uKG8peyByZXR1cm4gISEobyAmJiAodHlwZW9mIG8pLm1hdGNoKC9mdW5jdGlvbnxvYmplY3QvKSk7IH1cblx0XHQsIGlzTm90VmFsID0gZnVuY3Rpb24odil7IHJldHVybiAodiA9PT0gZmFsc2UgfHwgdiA9PT0gdW5kZWYgfHwgdiA9PT0gbnVsbCk7IH1cblx0XHQsIHNsaWNlID0gZnVuY3Rpb24oYSwgb2Zmc2V0KXsgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYSwgb2Zmc2V0KTsgfVxuXHRcdCwgdW5kZWZTdHIgPSAndW5kZWZpbmVkJ1xuXHRcdCwgdEVyciA9IHR5cGVvZiBUeXBlRXJyb3IgPT09IHVuZGVmU3RyID8gRXJyb3IgOiBUeXBlRXJyb3Jcblx0O1xuXHRpZiAoICh0eXBlb2YgcHJvY2VzcyAhPT0gdW5kZWZTdHIpICYmIHByb2Nlc3MubmV4dFRpY2sgKSB7XG5cdFx0bmV4dFRpY2sgPSBwcm9jZXNzLm5leHRUaWNrO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IHVuZGVmU3RyICkge1xuXHRcdHZhciBudGlja0NoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKSwgcXVldWUgPSBbXTtcblx0XHRudGlja0NoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oKXsgcXVldWUubGVuZ3RoICYmIChxdWV1ZS5zaGlmdCgpKSgpOyB9O1xuXHRcdG5leHRUaWNrID0gZnVuY3Rpb24oY2Ipe1xuXHRcdFx0cXVldWUucHVzaChjYik7XG5cdFx0XHRudGlja0NoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRuZXh0VGljayA9IGZ1bmN0aW9uKGNiKXsgc2V0VGltZW91dChjYiwgMCk7IH07XG5cdH1cblx0ZnVuY3Rpb24gcmV0aHJvdyhlKXsgbmV4dFRpY2soZnVuY3Rpb24oKXsgdGhyb3cgZTt9KTsgfVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiBkZWZlcnJlZFxuXHQgKiBAcHJvcGVydHkge3Byb21pc2V9IHByb21pc2Vcblx0ICogQG1ldGhvZCByZXNvbHZlXG5cdCAqIEBtZXRob2QgZnVsZmlsbFxuXHQgKiBAbWV0aG9kIHJlamVjdFxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmdWxmaWxsZWRcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBwcm9taXNlIHJlc29sdmVkIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZVxuXHQgKi9cblxuXHQvKipcblx0ICogQHR5cGVkZWYge2Z1bmN0aW9ufSBmYWlsZWRcblx0ICogQHBhcmFtIHsqfSByZWFzb24gcHJvbWlzZSByZWplY3Rpb24gcmVhc29uXG5cdCAqIEByZXR1cm5zIHsqfSBuZXh0IHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZSBvciByZXRocm93IHRoZSByZWFzb25cblx0ICovXG5cblx0Ly8tLSBkZWZpbmluZyB1bmVuY2xvc2VkIHByb21pc2UgbWV0aG9kcyAtLS8vXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gd2l0aG91dCBmYWlsZWQgY2FsbGJhY2tcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9zdWNjZXNzKGZ1bGZpbGxlZCl7IHJldHVybiB0aGlzLnRoZW4oZnVsZmlsbGVkLCB1bmRlZik7IH1cblxuXHQvKipcblx0ICogc2FtZSBhcyB0aGVuIHdpdGggb25seSBhIGZhaWxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2Vycm9yKGZhaWxlZCl7IHJldHVybiB0aGlzLnRoZW4odW5kZWYsIGZhaWxlZCk7IH1cblxuXG5cdC8qKlxuXHQgKiBzYW1lIGFzIHRoZW4gYnV0IGZ1bGZpbGxlZCBjYWxsYmFjayB3aWxsIHJlY2VpdmUgbXVsdGlwbGUgcGFyYW1ldGVycyB3aGVuIHByb21pc2UgaXMgZnVsZmlsbGVkIHdpdGggYW4gQXJyYXlcblx0ICogQHBhcmFtIHtmdWxmaWxsZWR9IGZ1bGZpbGxlZCBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge2ZhaWxlZH0gZmFpbGVkIGNhbGxiYWNrXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBhIG5ldyBwcm9taXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBwcm9taXNlX2FwcGx5KGZ1bGZpbGxlZCwgZmFpbGVkKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZC5hcHBseShudWxsLCBpc0FycmF5KGEpID8gYSA6IFthXSkgOiAoZGVmZXIub25seUZ1bmNzID8gYSA6IGZ1bGZpbGxlZCk7XG5cdFx0XHR9XG5cdFx0XHQsIGZhaWxlZCB8fCB1bmRlZlxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogY2xlYW51cCBtZXRob2Qgd2hpY2ggd2lsbCBiZSBhbHdheXMgZXhlY3V0ZWQgcmVnYXJkbGVzcyBmdWxmaWxsbWVudCBvciByZWplY3Rpb25cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgYSBjYWxsYmFjayBjYWxsZWQgcmVnYXJkbGVzcyBvZiB0aGUgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIG9mIHRoZSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIHByb21pc2UgaXMgbm90IHBlbmRpbmcgYW55bW9yZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gdGhlIHNhbWUgcHJvbWlzZSB1bnRvdWNoZWRcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2VfZW5zdXJlKGNiKXtcblx0XHRmdW5jdGlvbiBfY2IoKXsgY2IoKTsgfVxuXHRcdHRoaXMudGhlbihfY2IsIF9jYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogdGFrZSBhIHNpbmdsZSBjYWxsYmFjayB3aGljaCB3YWl0IGZvciBhbiBlcnJvciBhcyBmaXJzdCBwYXJhbWV0ZXIuIG90aGVyIHJlc29sdXRpb24gdmFsdWVzIGFyZSBwYXNzZWQgYXMgd2l0aCB0aGUgYXBwbHkvc3ByZWFkIG1ldGhvZFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBhIGNhbGxiYWNrIGNhbGxlZCByZWdhcmRsZXNzIG9mIHRoZSBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gb2YgdGhlIHByb21pc2Ugd2hpY2ggd2lsbCBiZSBjYWxsZWRcblx0ICogICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgcHJvbWlzZSBpcyBub3QgcGVuZGluZyBhbnltb3JlIHdpdGggZXJyb3IgYXMgZmlyc3QgcGFyYW1ldGVyIGlmIGFueSBhcyBpbiBub2RlIHN0eWxlXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLiBSZXN0IG9mIHBhcmFtZXRlcnMgd2lsbCBiZSBhcHBsaWVkIGFzIHdpdGggdGhlIGFwcGx5IG1ldGhvZC5cblx0ICogQHJldHVybnMge3Byb21pc2V9IGEgbmV3IHByb21pc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByb21pc2Vfbm9kaWZ5KGNiKXtcblx0XHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oYSl7XG5cdFx0XHRcdHJldHVybiBpc0Z1bmMoY2IpID8gY2IuYXBwbHkobnVsbCwgaXNBcnJheShhKSA/IGEuc3BsaWNlKDAsMCx1bmRlZmluZWQpICYmIGEgOiBbdW5kZWZpbmVkLGFdKSA6IChkZWZlci5vbmx5RnVuY3MgPyBhIDogY2IpO1xuXHRcdFx0fVxuXHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0cmV0dXJuIGNiKGUpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZhaWxlZF0gd2l0aG91dCBwYXJhbWV0ZXIgd2lsbCBvbmx5IHJldGhyb3cgcHJvbWlzZSByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgb2YgdGhlIHByb21pc2UgbGlicmFyeSBvbiBuZXh0IHRpY2tcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgcGFzc2VkIGEgZmFpbGVkIG1ldGhvZCB0aGVuIHdpbGwgY2FsbCBmYWlsZWQgb24gcmVqZWN0aW9uIGFuZCB0aHJvdyB0aGUgZXJyb3IgYWdhaW4gaWYgZmFpbGVkIGRpZG4ndFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZV9yZXRocm93KGZhaWxlZCl7XG5cdFx0cmV0dXJuIHRoaXMudGhlbihcblx0XHRcdHVuZGVmXG5cdFx0XHQsIGZhaWxlZCA/IGZ1bmN0aW9uKGUpeyBmYWlsZWQoZSk7IHRocm93IGU7IH0gOiByZXRocm93XG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gW2Fsd2F5c0FzeW5jXSBpZiBzZXQgZm9yY2UgdGhlIGFzeW5jIHJlc29sdXRpb24gZm9yIHRoaXMgcHJvbWlzZSBpbmRlcGVuZGFudGx5IG9mIHRoZSBELmFsd2F5c0FzeW5jIG9wdGlvblxuXHQqIEByZXR1cm5zIHtkZWZlcnJlZH0gZGVmZXJlZCBvYmplY3Qgd2l0aCBwcm9wZXJ0eSAncHJvbWlzZScgYW5kIG1ldGhvZHMgcmVqZWN0LGZ1bGZpbGwscmVzb2x2ZSAoZnVsZmlsbCBiZWluZyBhbiBhbGlhcyBmb3IgcmVzb2x2ZSlcblx0Ki9cblx0dmFyIGRlZmVyID0gZnVuY3Rpb24gKGFsd2F5c0FzeW5jKXtcblx0XHR2YXIgYWx3YXlzQXN5bmNGbiA9ICh1bmRlZiAhPT0gYWx3YXlzQXN5bmMgPyBhbHdheXNBc3luYyA6IGRlZmVyLmFsd2F5c0FzeW5jKSA/IG5leHRUaWNrIDogZnVuY3Rpb24oZm4pe2ZuKCk7fVxuXHRcdFx0LCBzdGF0dXMgPSAwIC8vIC0xIGZhaWxlZCB8IDEgZnVsZmlsbGVkXG5cdFx0XHQsIHBlbmRpbmdzID0gW11cblx0XHRcdCwgdmFsdWVcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGVkZWYgcHJvbWlzZVxuXHRcdFx0ICovXG5cdFx0XHQsIF9wcm9taXNlICA9IHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBwYXJhbSB7ZnVsZmlsbGVkfGZ1bmN0aW9ufSBmdWxmaWxsZWQgY2FsbGJhY2tcblx0XHRcdFx0ICogQHBhcmFtIHtmYWlsZWR8ZnVuY3Rpb259IGZhaWxlZCBjYWxsYmFja1xuXHRcdFx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gYSBuZXcgcHJvbWlzZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oZnVsZmlsbGVkLCBmYWlsZWQpe1xuXHRcdFx0XHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRcdFx0XHRwZW5kaW5ncy5wdXNoKFtcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGlmKCBpc05vdFZhbChmdWxmaWxsZWQpKXtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGQucmVzb2x2ZShpc0Z1bmMoZnVsZmlsbGVkKSA/IGZ1bGZpbGxlZCh2YWx1ZSkgOiAoZGVmZXIub25seUZ1bmNzID8gdmFsdWUgOiBmdWxmaWxsZWQpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1jYXRjaChlKXtcblx0XHRcdFx0XHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LCBmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzTm90VmFsKGZhaWxlZCkgfHwgKCghaXNGdW5jKGZhaWxlZCkpICYmIGRlZmVyLm9ubHlGdW5jcykgKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZC5yZWplY3QoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIGZhaWxlZCApIHtcblx0XHRcdFx0XHRcdFx0XHR0cnl7IGQucmVzb2x2ZShpc0Z1bmMoZmFpbGVkKSA/IGZhaWxlZChlcnIpIDogZmFpbGVkKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTt9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRzdGF0dXMgIT09IDAgJiYgYWx3YXlzQXN5bmNGbihleGVjQ2FsbGJhY2tzKTtcblx0XHRcdFx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LCBzdWNjZXNzOiBwcm9taXNlX3N1Y2Nlc3NcblxuXHRcdFx0XHQsIGVycm9yOiBwcm9taXNlX2Vycm9yXG5cdFx0XHRcdCwgb3RoZXJ3aXNlOiBwcm9taXNlX2Vycm9yXG5cblx0XHRcdFx0LCBhcHBseTogcHJvbWlzZV9hcHBseVxuXHRcdFx0XHQsIHNwcmVhZDogcHJvbWlzZV9hcHBseVxuXG5cdFx0XHRcdCwgZW5zdXJlOiBwcm9taXNlX2Vuc3VyZVxuXG5cdFx0XHRcdCwgbm9kaWZ5OiBwcm9taXNlX25vZGlmeVxuXG5cdFx0XHRcdCwgcmV0aHJvdzogcHJvbWlzZV9yZXRocm93XG5cblx0XHRcdFx0LCBpc1BlbmRpbmc6IGZ1bmN0aW9uKCl7IHJldHVybiBzdGF0dXMgPT09IDA7IH1cblxuXHRcdFx0XHQsIGdldFN0YXR1czogZnVuY3Rpb24oKXsgcmV0dXJuIHN0YXR1czsgfVxuXHRcdFx0fVxuXHRcdDtcblx0XHRfcHJvbWlzZS50b1NvdXJjZSA9IF9wcm9taXNlLnRvU3RyaW5nID0gX3Byb21pc2UudmFsdWVPZiA9IGZ1bmN0aW9uKCl7cmV0dXJuIHZhbHVlID09PSB1bmRlZiA/IHRoaXMgOiB2YWx1ZTsgfTtcblxuXG5cdFx0ZnVuY3Rpb24gZXhlY0NhbGxiYWNrcygpe1xuXHRcdFx0Lypqc2hpbnQgYml0d2lzZTpmYWxzZSovXG5cdFx0XHRpZiAoIHN0YXR1cyA9PT0gMCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNicyA9IHBlbmRpbmdzLCBpID0gMCwgbCA9IGNicy5sZW5ndGgsIGNiSW5kZXggPSB+c3RhdHVzID8gMCA6IDEsIGNiO1xuXHRcdFx0cGVuZGluZ3MgPSBbXTtcblx0XHRcdGZvciggOyBpIDwgbDsgaSsrICl7XG5cdFx0XHRcdChjYiA9IGNic1tpXVtjYkluZGV4XSkgJiYgY2IodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIGZ1bGZpbGwgZGVmZXJyZWQgd2l0aCBnaXZlbiB2YWx1ZVxuXHRcdCAqIEBwYXJhbSB7Kn0gdmFsXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVzb2x2ZSh2YWwpe1xuXHRcdFx0dmFyIGRvbmUgPSBmYWxzZTtcblx0XHRcdGZ1bmN0aW9uIG9uY2UoZil7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih4KXtcblx0XHRcdFx0XHRpZiAoZG9uZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZih4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHN0YXR1cyApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgdGhlbiA9IGlzT2JqT3JGdW5jKHZhbCkgJiYgdmFsLnRoZW47XG5cdFx0XHRcdGlmICggaXNGdW5jKHRoZW4pICkgeyAvLyBtYW5hZ2luZyBhIHByb21pc2Vcblx0XHRcdFx0XHRpZiggdmFsID09PSBfcHJvbWlzZSApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IHRFcnIoXCJQcm9taXNlIGNhbid0IHJlc29sdmUgaXRzZWxmXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGVuLmNhbGwodmFsLCBvbmNlKF9yZXNvbHZlKSwgb25jZShfcmVqZWN0KSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0b25jZShfcmVqZWN0KShlKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRhbHdheXNBc3luY0ZuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhbHVlID0gdmFsO1xuXHRcdFx0XHRzdGF0dXMgPSAxO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIHJlamVjdCBkZWZlcnJlZCB3aXRoIGdpdmVuIHJlYXNvblxuXHRcdCAqIEBwYXJhbSB7Kn0gRXJyXG5cdFx0ICogQHJldHVybnMge2RlZmVycmVkfSB0aGlzIGZvciBtZXRob2QgY2hhaW5pbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBfcmVqZWN0KEVycil7XG5cdFx0XHRzdGF0dXMgfHwgYWx3YXlzQXN5bmNGbihmdW5jdGlvbigpe1xuXHRcdFx0XHR0cnl7IHRocm93KEVycik7IH1jYXRjaChlKXsgdmFsdWUgPSBlOyB9XG5cdFx0XHRcdHN0YXR1cyA9IC0xO1xuXHRcdFx0XHRleGVjQ2FsbGJhY2tzKCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gLyoqQHR5cGUgZGVmZXJyZWQgKi8ge1xuXHRcdFx0cHJvbWlzZTpfcHJvbWlzZVxuXHRcdFx0LHJlc29sdmU6X3Jlc29sdmVcblx0XHRcdCxmdWxmaWxsOl9yZXNvbHZlIC8vIGFsaWFzXG5cdFx0XHQscmVqZWN0Ol9yZWplY3Rcblx0XHR9O1xuXHR9O1xuXG5cdGRlZmVyLmRlZmVycmVkID0gZGVmZXIuZGVmZXIgPSBkZWZlcjtcblx0ZGVmZXIubmV4dFRpY2sgPSBuZXh0VGljaztcblx0ZGVmZXIuYWx3YXlzQXN5bmMgPSB0cnVlOyAvLyBzZXR0aW5nIHRoaXMgd2lsbCBjaGFuZ2UgZGVmYXVsdCBiZWhhdmlvdXIuIHVzZSBpdCBvbmx5IGlmIG5lY2Vzc2FyeSBhcyBhc3luY2hyb25pY2l0eSB3aWxsIGZvcmNlIHNvbWUgZGVsYXkgYmV0d2VlbiB5b3VyIHByb21pc2UgcmVzb2x1dGlvbnMgYW5kIGlzIG5vdCBhbHdheXMgd2hhdCB5b3Ugd2FudC5cblx0LyoqXG5cdCogc2V0dGluZyBvbmx5RnVuY3MgdG8gZmFsc2Ugd2lsbCBicmVhayBwcm9taXNlcy9BKyBjb25mb3JtaXR5IGJ5IGFsbG93aW5nIHlvdSB0byBwYXNzIG5vbiB1bmRlZmluZWQvbnVsbCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxsYmFja3Ncblx0KiBpbnN0ZWFkIG9mIGp1c3QgaWdub3JpbmcgYW55IG5vbiBmdW5jdGlvbiBwYXJhbWV0ZXJzIHRvIHRoZW4sc3VjY2VzcyxlcnJvci4uLiBpdCB3aWxsIGFjY2VwdCBub24gbnVsbHx1bmRlZmluZWQgdmFsdWVzLlxuXHQqIHRoaXMgd2lsbCBhbGxvdyB5b3Ugc2hvcnRjdXRzIGxpa2UgcHJvbWlzZS50aGVuKCd2YWwnLCdoYW5kbGVkIGVycm9yJycpXG5cdCogdG8gYmUgZXF1aXZhbGVudCBvZiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKXsgcmV0dXJuICd2YWwnO30sZnVuY3Rpb24oKXsgcmV0dXJuICdoYW5kbGVkIGVycm9yJ30pXG5cdCovXG5cdGRlZmVyLm9ubHlGdW5jcyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIG9mIGdpdmVuIHZhbHVlIChhbHdheXMgYXN5bmMgcmVzb2x1dGlvbilcblx0ICogQHBhcmFtIHsqfSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnJlc29sdmVkID0gZGVmZXIuZnVsZmlsbGVkID0gZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gZGVmZXIodHJ1ZSkucmVzb2x2ZSh2YWx1ZSkucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSB3aXRoIGdpdmVuIHJlYXNvbiBvZiByZWplY3Rpb24gKGFsd2F5cyBhc3luYyByZWplY3Rpb24pXG5cdCAqIEBwYXJhbSB7Kn0gcmVhc29uXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIucmVqZWN0ZWQgPSBmdW5jdGlvbihyZWFzb24peyByZXR1cm4gZGVmZXIodHJ1ZSkucmVqZWN0KHJlYXNvbikucHJvbWlzZTsgfTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSB3aXRoIG5vIHJlc29sdXRpb24gdmFsdWUgd2hpY2ggd2lsbCBiZSByZXNvbHZlZCBpbiB0aW1lIG1zICh1c2luZyBzZXRUaW1lb3V0KVxuXHQgKiBAcGFyYW0ge2ludH0gW3RpbWVdIGluIG1zIGRlZmF1bHQgdG8gMFxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLndhaXQgPSBmdW5jdGlvbih0aW1lKXtcblx0XHR2YXIgZCA9IGRlZmVyKCk7XG5cdFx0c2V0VGltZW91dChkLnJlc29sdmUsIHRpbWUgfHwgMCk7XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fTtcblxuXHQvKipcblx0ICogcmV0dXJuIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvZiBmdW5jdGlvbiBjYWxsIHdoaWNoIHdpbGwgYmUgZnVsZmlsbGVkIGluIGRlbGF5IG1zIG9yIHJlamVjdGVkIGlmIGdpdmVuIGZuIHRocm93IGFuIGVycm9yXG5cdCAqIEBwYXJhbSB7Kn0gZm4gdG8gZXhlY3V0ZSBvciB2YWx1ZSB0byByZXR1cm4gYWZ0ZXIgZ2l2ZW4gZGVsYXlcblx0ICogQHBhcmFtIHtpbnR9IFtkZWxheV0gaW4gbXMgZGVmYXVsdCB0byAwXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfVxuXHQgKi9cblx0ZGVmZXIuZGVsYXkgPSBmdW5jdGlvbihmbiwgZGVsYXkpe1xuXHRcdHZhciBkID0gZGVmZXIoKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRyeXsgZC5yZXNvbHZlKGlzRnVuYyhmbikgPyBmbi5hcHBseShudWxsKSA6IGZuKTsgfWNhdGNoKGUpeyBkLnJlamVjdChlKTsgfSB9LCBkZWxheSB8fCAwKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBpZiBnaXZlbiB2YWx1ZSBpcyBub3QgYSBwcm9taXNlIHJldHVybiBhIGZ1bGZpbGxlZCBwcm9taXNlIHJlc29sdmVkIHRvIGdpdmVuIHZhbHVlXG5cdCAqIEBwYXJhbSB7Kn0gcHJvbWlzZSBhIHZhbHVlIG9yIGEgcHJvbWlzZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX1cblx0ICovXG5cdGRlZmVyLnByb21pc2lmeSA9IGZ1bmN0aW9uKHByb21pc2Upe1xuXHRcdGlmICggcHJvbWlzZSAmJiBpc0Z1bmMocHJvbWlzZS50aGVuKSApIHsgcmV0dXJuIHByb21pc2U7fVxuXHRcdHJldHVybiBkZWZlci5yZXNvbHZlZChwcm9taXNlKTtcblx0fTtcblxuXHRmdW5jdGlvbiBtdWx0aVByb21pc2VSZXNvbHZlcihjYWxsZXJBcmd1bWVudHMsIHJldHVyblByb21pc2VzKXtcblx0XHR2YXIgcHJvbWlzZXMgPSBzbGljZShjYWxsZXJBcmd1bWVudHMpO1xuXHRcdGlmICggcHJvbWlzZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkocHJvbWlzZXNbMF0pICkge1xuXHRcdFx0aWYoISBwcm9taXNlc1swXS5sZW5ndGggKXtcblx0XHRcdFx0cmV0dXJuIGRlZmVyLmZ1bGZpbGxlZChbXSk7XG5cdFx0XHR9XG5cdFx0XHRwcm9taXNlcyA9IHByb21pc2VzWzBdO1xuXHRcdH1cblx0XHR2YXIgYXJncyA9IFtdXG5cdFx0XHQsIGQgPSBkZWZlcigpXG5cdFx0XHQsIGMgPSBwcm9taXNlcy5sZW5ndGhcblx0XHQ7XG5cdFx0aWYgKCAhYyApIHtcblx0XHRcdGQucmVzb2x2ZShhcmdzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHJlc29sdmVyID0gZnVuY3Rpb24oaSl7XG5cdFx0XHRcdHByb21pc2VzW2ldID0gZGVmZXIucHJvbWlzaWZ5KHByb21pc2VzW2ldKTtcblx0XHRcdFx0cHJvbWlzZXNbaV0udGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbih2KXtcblx0XHRcdFx0XHRcdGFyZ3NbaV0gPSByZXR1cm5Qcm9taXNlcyA/IHByb21pc2VzW2ldIDogdjtcblx0XHRcdFx0XHRcdCgtLWMpIHx8IGQucmVzb2x2ZShhcmdzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdGlmKCAhIHJldHVyblByb21pc2VzICl7XG5cdFx0XHRcdFx0XHRcdGQucmVqZWN0KGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YXJnc1tpXSA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRcdFx0XHQoLS1jKSB8fCBkLnJlc29sdmUoYXJncyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblx0XHRcdGZvciggdmFyIGkgPSAwLCBsID0gYzsgaSA8IGw7IGkrKyApe1xuXHRcdFx0XHRyZXNvbHZlcihpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGQucHJvbWlzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNlcXVlbmNlWmVuaWZpZXIocHJvbWlzZSwgemVuVmFsdWUpe1xuXHRcdHJldHVybiBwcm9taXNlLnRoZW4oaXNGdW5jKHplblZhbHVlKSA/IHplblZhbHVlIDogZnVuY3Rpb24oKXtyZXR1cm4gemVuVmFsdWU7fSk7XG5cdH1cblx0ZnVuY3Rpb24gc2VxdWVuY2VQcm9taXNlUmVzb2x2ZXIoY2FsbGVyQXJndW1lbnRzKXtcblx0XHR2YXIgZnVuY3MgPSBzbGljZShjYWxsZXJBcmd1bWVudHMpO1xuXHRcdGlmICggZnVuY3MubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoZnVuY3NbMF0pICkge1xuXHRcdFx0ZnVuY3MgPSBmdW5jc1swXTtcblx0XHR9XG5cdFx0dmFyIGQgPSBkZWZlcigpLCBpPTAsIGw9ZnVuY3MubGVuZ3RoLCBwcm9taXNlID0gZGVmZXIucmVzb2x2ZWQoKTtcblx0XHRmb3IoOyBpPGw7IGkrKyl7XG5cdFx0XHRwcm9taXNlID0gc2VxdWVuY2VaZW5pZmllcihwcm9taXNlLCBmdW5jc1tpXSk7XG5cdFx0fVxuXHRcdGQucmVzb2x2ZShwcm9taXNlKTtcblx0XHRyZXR1cm4gZC5wcm9taXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybiBhIHByb21pc2UgZm9yIGFsbCBnaXZlbiBwcm9taXNlcyAvIHZhbHVlcy5cblx0ICogdGhlIHJldHVybmVkIHByb21pc2VzIHdpbGwgYmUgZnVsZmlsbGVkIHdpdGggYSBsaXN0IG9mIHJlc29sdmVkIHZhbHVlLlxuXHQgKiBpZiBhbnkgZ2l2ZW4gcHJvbWlzZSBpcyByZWplY3RlZCB0aGVuIG9uIHRoZSBmaXJzdCByZWplY3Rpb24gdGhlIHJldHVybmVkIHByb21pc2VkIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZSByZWFzb25cblx0ICogQHBhcmFtIHthcnJheXwuLi4qfSBbcHJvbWlzZV0gY2FuIGJlIGEgc2luZ2xlIGFycmF5IG9mIHByb21pc2UvdmFsdWVzIGFzIGZpcnN0IHBhcmFtZXRlciBvciBhIGxpc3Qgb2YgZGlyZWN0IHBhcmFtZXRlcnMgcHJvbWlzZS92YWx1ZVxuXHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gb2YgYSBsaXN0IG9mIGdpdmVuIHByb21pc2UgcmVzb2x1dGlvbiB2YWx1ZVxuXHQgKi9cblx0ZGVmZXIuYWxsID0gZnVuY3Rpb24oKXsgcmV0dXJuIG11bHRpUHJvbWlzZVJlc29sdmVyKGFyZ3VtZW50cyxmYWxzZSk7IH07XG5cblx0LyoqXG5cdCAqIHJldHVybiBhbiBhbHdheXMgZnVsZmlsbGVkIHByb21pc2Ugb2YgYXJyYXk8cHJvbWlzZT4gbGlzdCBvZiBwcm9taXNlcy92YWx1ZXMgcmVnYXJkbGVzcyB0aGV5IHJlc29sdmUgZnVsZmlsbGVkIG9yIHJlamVjdGVkXG5cdCAqIEBwYXJhbSB7YXJyYXl8Li4uKn0gW3Byb21pc2VdIGNhbiBiZSBhIHNpbmdsZSBhcnJheSBvZiBwcm9taXNlL3ZhbHVlcyBhcyBmaXJzdCBwYXJhbWV0ZXIgb3IgYSBsaXN0IG9mIGRpcmVjdCBwYXJhbWV0ZXJzIHByb21pc2UvdmFsdWVcblx0ICogICAgICAgICAgICAgICAgICAgICAobm9uIHByb21pc2UgdmFsdWVzIHdpbGwgYmUgcHJvbWlzaWZpZWQpXG5cdCAqIEByZXR1cm5zIHtwcm9taXNlfSBvZiB0aGUgbGlzdCBvZiBnaXZlbiBwcm9taXNlc1xuXHQgKi9cblx0ZGVmZXIucmVzb2x2ZUFsbCA9IGZ1bmN0aW9uKCl7IHJldHVybiBtdWx0aVByb21pc2VSZXNvbHZlcihhcmd1bWVudHMsdHJ1ZSk7IH07XG5cblx0LyoqXG5cdCogZXhlY3V0ZSBnaXZlbiBmdW5jdGlvbiBpbiBzZXF1ZW5jZSBwYXNzaW5nIHRoZWlyIHJldHVybmVkIHZhbHVlcyB0byB0aGUgbmV4dCBvbmUgaW4gc2VxdWVuY2UuXG5cdCogWW91IGNhbiBwYXNzIHZhbHVlcyBvciBwcm9taXNlIGluc3RlYWQgb2YgZnVuY3Rpb25zIHRoZXkgd2lsbCBiZSBwYXNzZWQgaW4gdGhlIHNlcXVlbmNlIGFzIGlmIGEgZnVuY3Rpb24gcmV0dXJuZWQgdGhlbS5cblx0KiBpZiBhbnkgZnVuY3Rpb24gdGhyb3cgYW4gZXJyb3Igb3IgYSByZWplY3RlZCBwcm9taXNlIHRoZSBmaW5hbCByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGF0IHJlYXNvbi5cblx0KiBAcGFyYW0ge2FycmF5fC4uLip9IFtmdW5jdGlvbl0gbGlzdCBvZiBmdW5jdGlvbiB0byBjYWxsIGluIHNlcXVlbmNlIHJlY2VpdmluZyBwcmV2aW91cyBvbmUgYXMgYSBwYXJhbWV0ZXJcblx0KiAgICAgICAgICAgICAgICAgICAgIChub24gZnVuY3Rpb24gdmFsdWVzIHdpbGwgYmUgdHJlYXRlZCBhcyBpZiByZXR1cm5lZCBieSBhIGZ1bmN0aW9uKVxuXHQqIEByZXR1cm5zIHtwcm9taXNlfSBvZiB0aGUgbGlzdCBvZiBnaXZlbiBwcm9taXNlc1xuXHQqL1xuXHRkZWZlci5zZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7IHJldHVybiBzZXF1ZW5jZVByb21pc2VSZXNvbHZlcihhcmd1bWVudHMpOyB9O1xuXG5cdC8qKlxuXHQgKiB0cmFuc2Zvcm0gYSB0eXBpY2FsIG5vZGVqcyBhc3luYyBtZXRob2QgYXdhaXRpbmcgYSBjYWxsYmFjayBhcyBsYXN0IHBhcmFtZXRlciwgcmVjZWl2aW5nIGVycm9yIGFzIGZpcnN0IHBhcmFtZXRlciB0byBhIGZ1bmN0aW9uIHRoYXRcblx0ICogd2lsbCByZXR1cm4gYSBwcm9taXNlIGluc3RlYWQuIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIG5vcm1hbCBjYWxsYmFjayB2YWx1ZSBtaW51cyB0aGUgZmlyc3QgZXJyb3IgcGFyYW1ldGVyIG9uXG5cdCAqIGZ1bGZpbGwgYW5kIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGF0IGVycm9yIGFzIHJlYXNvbiBpbiBjYXNlIG9mIGVycm9yLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW3N1YmplY3RdIG9wdGlvbmFsIHN1YmplY3Qgb2YgdGhlIG1ldGhvZCB0byBlbmNhcHN1bGF0ZVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiB0aGUgZnVuY3Rpb24gdG8gZW5jYXBzdWxhdGUgaWYgdGhlIG5vcm1hbCBjYWxsYmFjayBzaG91bGQgcmVjZWl2ZSBtb3JlIHRoYW4gYSBzaW5nbGUgcGFyYW1ldGVyIChtaW51cyB0aGUgZXJyb3IpXG5cdCAqICAgICAgICAgICAgICAgICAgICAgIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIHRoZSBsaXN0IG9yIHBhcmFtZXRlcnMgYXMgZnVsZmlsbG1lbnQgdmFsdWUuIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBzZW50IHRvIHRoZVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayB0aGVuIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcmVzb2x1dGlvbiB2YWx1ZS5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufVxuXHQgKi9cblx0ZGVmZXIubm9kZUNhcHN1bGUgPSBmdW5jdGlvbihzdWJqZWN0LCBmbil7XG5cdFx0aWYgKCAhZm4gKSB7XG5cdFx0XHRmbiA9IHN1YmplY3Q7XG5cdFx0XHRzdWJqZWN0ID0gdm9pZCgwKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZCA9IGRlZmVyKCksIGFyZ3MgPSBzbGljZShhcmd1bWVudHMpO1xuXHRcdFx0YXJncy5wdXNoKGZ1bmN0aW9uKGVyciwgcmVzKXtcblx0XHRcdFx0ZXJyID8gZC5yZWplY3QoZXJyKSA6IGQucmVzb2x2ZShhcmd1bWVudHMubGVuZ3RoID4gMiA/IHNsaWNlKGFyZ3VtZW50cywgMSkgOiByZXMpO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGZuLmFwcGx5KHN1YmplY3QsIGFyZ3MpO1xuXHRcdFx0fWNhdGNoKGUpe1xuXHRcdFx0XHRkLnJlamVjdChlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkLnByb21pc2U7XG5cdFx0fTtcblx0fTtcblxuXHQvKmdsb2JhbCBkZWZpbmUqL1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcblx0XHRkZWZpbmUoJ0QuanMnLCBbXSwgZnVuY3Rpb24oKXsgcmV0dXJuIGRlZmVyOyB9KTtcblx0fSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSAhPT0gdW5kZWZTdHIgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBkZWZlcjtcblx0fSBlbHNlIGlmICggdHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZTdHIgKSB7XG5cdFx0dmFyIG9sZEQgPSB3aW5kb3cuRDtcblx0XHQvKipcblx0XHQgKiByZXN0b3JlIGdsb2JhbCBEIHZhcmlhYmxlIHRvIGl0cyBwcmV2aW91cyB2YWx1ZSBhbmQgcmV0dXJuIEQgdG8gdGhlIHVzZXJcblx0XHQgKiBAcmV0dXJucyB7RnVuY3Rpb259XG5cdFx0ICovXG5cdFx0ZGVmZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR3aW5kb3cuRCA9IG9sZEQ7XG5cdFx0XHRyZXR1cm4gZGVmZXI7XG5cdFx0fTtcblx0XHR3aW5kb3cuRCA9IGRlZmVyO1xuXHR9XG59KSgpO1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJ3JlZHVjZScpO1xuXG4vKipcbiAqIFJvb3QgcmVmZXJlbmNlIGZvciBpZnJhbWVzLlxuICovXG5cbnZhciByb290ID0gJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHdpbmRvd1xuICA/IHRoaXNcbiAgOiB3aW5kb3c7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5mdW5jdGlvbiBnZXRYSFIoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgJiYgKCdmaWxlOicgIT0gcm9vdC5sb2NhdGlvbi5wcm90b2NvbCB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAobnVsbCAhPSBvYmpba2V5XSkge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbiAvKipcbiAgKiBQYXJzZSB0aGUgZ2l2ZW4geC13d3ctZm9ybS11cmxlbmNvZGVkIGBzdHJgLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAqIEByZXR1cm4ge09iamVjdH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHBhaXI7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBhcnRzID0gcGFpci5zcGxpdCgnPScpO1xuICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAnYXBwbGljYXRpb24veG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZSA9IHtcbiAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG4gfTtcblxuIC8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBsaW5lcy5wb3AoKTsgLy8gdHJhaWxpbmcgQ1JMRlxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW1lIHR5cGUgZm9yIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0eXBlKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhlYWRlciBmaWVsZCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcmFtcyhzdHIpe1xuICByZXR1cm4gcmVkdWNlKHN0ci5zcGxpdCgvICo7ICovKSwgZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKVxuICAgICAgLCBrZXkgPSBwYXJ0cy5zaGlmdCgpXG4gICAgICAsIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIHRoaXMudGV4dCA9IHRoaXMucmVxLm1ldGhvZCAhPSdIRUFEJyBcbiAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHQgXG4gICAgIDogbnVsbDtcbiAgdGhpcy5zZXRTdGF0dXNQcm9wZXJ0aWVzKHRoaXMueGhyLnN0YXR1cyk7XG4gIHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAvLyBnZXRBbGxSZXNwb25zZUhlYWRlcnMgc29tZXRpbWVzIGZhbHNlbHkgcmV0dXJucyBcIlwiIGZvciBDT1JTIHJlcXVlc3RzLCBidXRcbiAgLy8gZ2V0UmVzcG9uc2VIZWFkZXIgc3RpbGwgd29ya3MuIHNvIHdlIGdldCBjb250ZW50LXR5cGUgZXZlbiBpZiBnZXR0aW5nXG4gIC8vIG90aGVyIGhlYWRlcnMgZmFpbHMuXG4gIHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKTtcbiAgdGhpcy5zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcbiAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgID8gdGhpcy5wYXJzZUJvZHkodGhpcy50ZXh0KVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZUJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgc3RyLmxlbmd0aFxuICAgID8gcGFyc2Uoc3RyKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgID8gdGhpcy50b0Vycm9yKClcbiAgICA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXMgfHwgMTIyMyA9PSBzdGF0dXM7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIEVtaXR0ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9O1xuICB0aGlzLl9oZWFkZXIgPSB7fTtcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgZXJyID0gbnVsbDtcbiAgICB2YXIgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7IFxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGU7XG4gICAgfVxuXG4gICAgc2VsZi5jYWxsYmFjayhlcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fdGltZW91dCA9IDA7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuYWJvcnRlZCkgcmV0dXJuO1xuICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhoci5hYm9ydCgpO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3NcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcyl7XG4gIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHN0cik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBmaWxlbmFtZWAuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKG5ldyBCbG9iKFsnPGEgaWQ9XCJhXCI+PGIgaWQ9XCJiXCI+aGV5ITwvYj48L2E+J10sIHsgdHlwZTogXCJ0ZXh0L2h0bWxcIn0pKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtCbG9ifEZpbGV9IGZpbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChmaWVsZCwgZmlsZSwgZmlsZW5hbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZCBgZGF0YWAsIGRlZmF1bHRpbmcgdGhlIGAudHlwZSgpYCB0byBcImpzb25cIiB3aGVuXG4gKiBhbiBvYmplY3QgaXMgZ2l2ZW4uXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gcXVlcnlzdHJpbmdcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvc2VhcmNoJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtdWx0aXBsZSBkYXRhIFwid3JpdGVzXCJcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvc2VhcmNoJylcbiAqICAgICAgICAgLnNlbmQoeyBzZWFyY2g6ICdxdWVyeScgfSlcbiAqICAgICAgICAgLnNlbmQoeyByYW5nZTogJzEuLjUnIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgb3JkZXI6ICdkZXNjJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoJ25hbWU9dGonKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0cyB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICAqICAgICAgICAuc2VuZCgnbmFtZT10b2JpJylcbiAgKiAgICAgICAgLnNlbmQoJ3NwZWNpZXM9ZmVycmV0JylcbiAgKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSl7XG4gIHZhciBvYmogPSBpc09iamVjdChkYXRhKTtcbiAgdmFyIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG5cbiAgLy8gbWVyZ2VcbiAgaWYgKG9iaiAmJiBpc09iamVjdCh0aGlzLl9kYXRhKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBkYXRhKSB7XG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyA9PSB0eXBlKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YVxuICAgICAgICA/IHRoaXMuX2RhdGEgKyAnJicgKyBkYXRhXG4gICAgICAgIDogZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9ICh0aGlzLl9kYXRhIHx8ICcnKSArIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgaWYgKCFvYmopIHJldHVybiB0aGlzO1xuICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnanNvbicpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICBpZiAoMiA9PSBmbi5sZW5ndGgpIHJldHVybiBmbihlcnIsIHJlcyk7XG4gIGlmIChlcnIpIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgZm4ocmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ09yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gZ2V0WEhSKCk7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZGF0YSA9IHRoaXMuX2Zvcm1EYXRhIHx8IHRoaXMuX2RhdGE7XG5cbiAgLy8gc3RvcmUgY2FsbGJhY2tcbiAgdGhpcy5fY2FsbGJhY2sgPSBmbiB8fCBub29wO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIGlmICgwID09IHhoci5zdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLmFib3J0ZWQpIHJldHVybiBzZWxmLnRpbWVvdXRFcnJvcigpO1xuICAgICAgcmV0dXJuIHNlbGYuY3Jvc3NEb21haW5FcnJvcigpO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoJ2VuZCcpO1xuICB9O1xuXG4gIC8vIHByb2dyZXNzXG4gIGlmICh4aHIudXBsb2FkKSB7XG4gICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24oZSl7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRcbiAgaWYgKHRpbWVvdXQgJiYgIXRoaXMuX3RpbWVyKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICAvLyBxdWVyeXN0cmluZ1xuICBpZiAocXVlcnkpIHtcbiAgICBxdWVyeSA9IHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0KHF1ZXJ5KTtcbiAgICB0aGlzLnVybCArPSB+dGhpcy51cmwuaW5kZXhPZignPycpXG4gICAgICA/ICcmJyArIHF1ZXJ5XG4gICAgICA6ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgLy8gaW5pdGlhdGUgcmVxdWVzdFxuICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xuXG4gIC8vIENPUlNcbiAgaWYgKHRoaXMuX3dpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgLy8gYm9keVxuICBpZiAoJ0dFVCcgIT0gdGhpcy5tZXRob2QgJiYgJ0hFQUQnICE9IHRoaXMubWV0aG9kICYmICdzdHJpbmcnICE9IHR5cGVvZiBkYXRhICYmICFpc0hvc3QoZGF0YSkpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICB2YXIgc2VyaWFsaXplID0gcmVxdWVzdC5zZXJpYWxpemVbdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXTtcbiAgICBpZiAoc2VyaWFsaXplKSBkYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgLy8gc2V0IGhlYWRlciBmaWVsZHNcbiAgZm9yICh2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICBpZiAobnVsbCA9PSB0aGlzLmhlYWRlcltmaWVsZF0pIGNvbnRpbnVlO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGZpZWxkLCB0aGlzLmhlYWRlcltmaWVsZF0pO1xuICB9XG5cbiAgLy8gc2VuZCBzdHVmZlxuICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTtcbiAgeGhyLnNlbmQoZGF0YSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogSXNzdWUgYSByZXF1ZXN0OlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgIHJlcXVlc3QoJ0dFVCcsICcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnLCBjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdXJsIG9yIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmdldCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuaGVhZCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnSEVBRCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5kZWwgPSBmdW5jdGlvbih1cmwsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0RFTEVURScsIHVybCk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBBVENIIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUE9TVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQVVQgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xuIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuIiwiXG4vKipcbiAqIFJlZHVjZSBgYXJyYCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFxuICpcbiAqIFRPRE86IGNvbWJhdGlibGUgZXJyb3IgaGFuZGxpbmc/XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGZuLCBpbml0aWFsKXsgIFxuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBjdXJyID0gYXJndW1lbnRzLmxlbmd0aCA9PSAzXG4gICAgPyBpbml0aWFsXG4gICAgOiBhcnJbaWR4KytdO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBjdXJyID0gZm4uY2FsbChudWxsLCBjdXJyLCBhcnJbaWR4XSwgKytpZHgsIGFycik7XG4gIH1cbiAgXG4gIHJldHVybiBjdXJyO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2VudW0nKTsiLCIoZnVuY3Rpb24gKHJvb3QsIG1vZHVsZSwgZ2xvYmFsLCBkZWZpbmUpIHtcblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbiBJdGVtIG9mIGFuIEVudW0uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICBUaGUgRW51bSBrZXkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBUaGUgRW51bSB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIEVudW1JdGVtKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBFbnVtSXRlbS5wcm90b3R5cGUgPSB7XG5cbiAgICAvKmNvbnN0cnVjdG9yIHJlZmVyZW5jZSBzbyB0aGF0LCB0aGlzLmNvbnN0cnVjdG9yPT09RW51bUl0ZW0vLz0+dHJ1ZSAqL1xuICAgIGNvbnN0cnVjdG9yOiBFbnVtSXRlbSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgZmxhZ2dlZCBFbnVtSXRlbSBoYXMgdGhlIHBhc3Npbmcgb2JqZWN0LlxuICAgICAqIEBwYXJhbSAge0VudW1JdGVtIHx8IFN0cmluZyB8fCBOdW1iZXJ9IHZhbHVlIFRoZSBvYmplY3QgdG8gY2hlY2sgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY2hlY2sgcmVzdWx0LlxuICAgICAqL1xuICAgIGhhczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVudW1JdGVtIHx8ICh0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5rZXkgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiB2YWx1ZS52YWx1ZSkgIT09IDA7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleS5pbmRleE9mKHZhbHVlKSA+PSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgdmFsdWUpICE9PSAwO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIEVudW1JdGVtIGlzIHRoZSBzYW1lIGFzIHRoZSBwYXNzaW5nIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gIHtFbnVtSXRlbSB8fCBTdHJpbmcgfHwgTnVtYmVyfSBrZXkgVGhlIG9iamVjdCB0byBjaGVjayB3aXRoLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY2hlY2sgcmVzdWx0LlxuICAgICAqL1xuICAgIGlzOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBFbnVtSXRlbSB8fCAodHlwZW9mKGtleSkgPT09ICdvYmplY3QnICYmIGtleS5rZXkgIT09IHVuZGVmaW5lZCAmJiBrZXkudmFsdWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5ID09PSBrZXkua2V5O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Yoa2V5KSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5ID09PSBrZXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0ga2V5O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEVudW1JdGVtLlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRW51bUl0ZW0uXG4gICAgICovXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMua2V5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIEpTT04gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRW51bUl0ZW0uXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBKU09OIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEVudW1JdGVtLlxuICAgICAqL1xuICAgIHRvSlNPTjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIHRvIGNvbXBhcmUgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB2YWx1ZSB0byBjb21wYXJlIHdpdGguXG4gICAgICovXG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXk7XG4gICAgfVxuXG4gIH07XG5cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbiBFbnVtIHdpdGggZW51bSBpdGVtcy5cbiAgICogQHBhcmFtIHtBcnJheSB8fCBPYmplY3R9ICBtYXAgICAgIFRoaXMgYXJlIHRoZSBlbnVtIGl0ZW1zLlxuICAgKiBAcGFyYW0ge1N0cmluZyB8fCBPYmplY3R9IG9wdGlvbnMgVGhpcyBhcmUgb3B0aW9ucy4gW29wdGlvbmFsXVxuICAgKi9cbiAgZnVuY3Rpb24gRW51bShtYXAsIG9wdGlvbnMpIHtcblxuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZihvcHRpb25zKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSB7IG5hbWU6IG9wdGlvbnMgfTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLl9vcHRpb25zLnNlcGFyYXRvciA9IHRoaXMuX29wdGlvbnMuc2VwYXJhdG9yIHx8ICcgfCAnO1xuXG4gICAgdGhpcy5lbnVtcyA9IFtdO1xuXG4gICAgaWYgKG1hcC5sZW5ndGgpIHtcbiAgICAgIHZhciBhcnJheSA9IG1hcDtcbiAgICAgIG1hcCA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcFthcnJheVtpXV0gPSBNYXRoLnBvdygyLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBtZW1iZXIgaW4gbWFwKSB7XG4gICAgICBpZiAoKHRoaXMuX29wdGlvbnMubmFtZSAmJiBtZW1iZXIgPT09ICduYW1lJykgfHwgbWVtYmVyID09PSAnX29wdGlvbnMnIHx8IG1lbWJlciA9PT0gJ2dldCcgfHwgbWVtYmVyID09PSAnZ2V0S2V5JyB8fCBtZW1iZXIgPT09ICdnZXRWYWx1ZScgfHwgbWVtYmVyID09PSAnZW51bXMnIHx8IG1lbWJlciA9PT0gJ2lzRmxhZ2dhYmxlJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VudW0ga2V5IFwiJyArIG1lbWJlciArICdcIiBpcyBhIHJlc2VydmVkIHdvcmQhJyk7XG4gICAgICB9XG4gICAgICB0aGlzW21lbWJlcl0gPSBuZXcgRW51bUl0ZW0obWVtYmVyLCBtYXBbbWVtYmVyXSk7XG4gICAgICB0aGlzLmVudW1zLnB1c2godGhpc1ttZW1iZXJdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5uYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLl9vcHRpb25zLm5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gaXNGbGFnZ2FibGUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZi5lbnVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgZSA9IHNlbGYuZW51bXNbaV07XG5cbiAgICAgICAgaWYgKCEoKGUudmFsdWUgIT09IDApICYmICEoZS52YWx1ZSAmIChlLnZhbHVlIC0gMSkpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5pc0ZsYWdnYWJsZSA9IGlzRmxhZ2dhYmxlKCk7XG4gICAgdGhpcy5mcmVlemVFbnVtcygpOyAvL3RoaXMgd2lsbCBtYWtlIGluc3RhbmNlcyBvZiBFbnVtIG5vbi1leHRlbnNpYmxlXG4gIH1cblxuICBFbnVtLnByb3RvdHlwZSA9IHtcblxuICAgIC8qY29uc3RydWN0b3IgcmVmZXJlbmNlIHNvIHRoYXQsIHRoaXMuY29uc3RydWN0b3I9PT1FbnVtLy89PnRydWUgKi9cbiAgICBjb25zdHJ1Y3RvcjogRW51bSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIEVudW1JdGVtIGtleS5cbiAgICAgKiBAcGFyYW0gIHtFbnVtSXRlbSB8fCBTdHJpbmcgfHwgTnVtYmVyfSBrZXkgVGhlIG9iamVjdCB0byBnZXQgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGdldCByZXN1bHQuXG4gICAgICovXG4gICAgZ2V0S2V5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldCh2YWx1ZSk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5rZXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1VuZGVmaW5lZCc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIEVudW1JdGVtIHZhbHVlLlxuICAgICAqIEBwYXJhbSAge0VudW1JdGVtIHx8IFN0cmluZyB8fCBOdW1iZXJ9IGtleSBUaGUgb2JqZWN0IHRvIGdldCB3aXRoLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZ2V0IHJlc3VsdC5cbiAgICAgKi9cbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBFbnVtSXRlbS5cbiAgICAgKiBAcGFyYW0gIHtFbnVtSXRlbSB8fCBTdHJpbmcgfHwgTnVtYmVyfSBrZXkgVGhlIG9iamVjdCB0byBnZXQgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtFbnVtSXRlbX0gICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGdldCByZXN1bHQuXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgPT09IG51bGwgfHwga2V5ID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG4gICAgICBpZiAoa2V5IGluc3RhbmNlb2YgRW51bUl0ZW0gfHwgKHR5cGVvZihrZXkpID09PSAnb2JqZWN0JyAmJiBrZXkua2V5ICE9PSB1bmRlZmluZWQgJiYga2V5LnZhbHVlICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIHZhciBmb3VuZEluZGV4ID0gdGhpcy5lbnVtcy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID49IDApIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc0ZsYWdnYWJsZSB8fCAodGhpcy5pc0ZsYWdnYWJsZSAmJiBrZXkua2V5LmluZGV4T2YodGhpcy5fb3B0aW9ucy5zZXBhcmF0b3IpIDwgMCkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5LmtleSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZihrZXkpID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fb3B0aW9ucy5zZXBhcmF0b3IpID4gMCkge1xuICAgICAgICAgIHZhciBwYXJ0cyA9IGtleS5zcGxpdCh0aGlzLl9vcHRpb25zLnNlcGFyYXRvcik7XG5cbiAgICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcblxuICAgICAgICAgICAgdmFsdWUgfD0gdGhpc1twYXJ0XS52YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV3IEVudW1JdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIG0gaW4gdGhpcykge1xuICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KG0pKSB7XG4gICAgICAgICAgICBpZiAodGhpc1ttXS52YWx1ZSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRmxhZ2dhYmxlKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiBpbiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShuKSkge1xuICAgICAgICAgICAgICBpZiAoKGtleSAmIHRoaXNbbl0udmFsdWUpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuX29wdGlvbnMuc2VwYXJhdG9yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IG47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocmVzdWx0IHx8IG51bGwpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgZnJlZXplRW51bXMoKSBhcyBhIHByb3BlcnR5IG9mIHRoZSBwcm90b3R5cGUuXG4gICAgICogbWFrZSBlbnVtZXJhYmxlIGl0ZW1zIG5vbmNvbmZpZ3VyYWJsZSBhbmQgZGVlcCBmcmVlemUgdGhlIHByb3BlcnRpZXMuIFRocm93IEVycm9yIG9uIHByb3BlcnR5IHNldHRlci5cbiAgICAgKi9cbiAgICBmcmVlemVFbnVtczogZnVuY3Rpb24oKSB7XG4gICAgICBmdW5jdGlvbiBmcmVlemVyKG8pIHtcbiAgICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobyk7XG4gICAgICAgIHByb3BzLmZvckVhY2goIGZ1bmN0aW9uKHApe1xuICAgICAgICAgIGlmICghT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLCBwKS5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvLCBwLCB7d3JpdGFibGU6ZmFsc2UsIGNvbmZpZ3VyYWJsZTpmYWxzZX0pO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRlZXBGcmVlemVFbnVtcyhvKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcgfHwgbyA9PT0gbnVsbCB8fCBPYmplY3QuaXNGcm96ZW4obykgfHwgT2JqZWN0LmlzU2VhbGVkKG8pICl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgby5fX2RlZmluZUdldHRlcl9fKGtleSwgZ2V0UHJvcGVydHlWYWx1ZS5iaW5kKG51bGwsIG9ba2V5XSkpO1xuICAgICAgICAgICAgby5fX2RlZmluZVNldHRlcl9fKGtleSwgZnVuY3Rpb24gdGhyb3dQcm9wZXJ0eVNldEVycm9yKHZhbHVlKXt0aHJvdyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVkZWZpbmUgcHJvcGVydHk7IEVudW0gVHlwZSBpcyBub3QgZXh0ZW5zaWJsZS5cIil9KTtcbiAgICAgICAgICAgIGRlZXBGcmVlemVFbnVtcyhvW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgIE9iamVjdC5mcmVlemUobyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJlZXplcihvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZWVwRnJlZXplRW51bXModGhpcyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gIH07XG5cblxuICBpZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBFbnVtO1xuICB9IGVsc2UgaWYgKGRlZmluZSkge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gRW51bTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByb290LkVudW0gPSBFbnVtO1xuICB9XG5cbiAgaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyAmJiBnbG9iYWwpIHtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyB0aGUgRW51bSBUeXBlIGdsb2JhbGx5IGluIG5vZGUuanMuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgR2xvYmFsIHZhcmlhYmxlLiBbb3B0aW9uYWxdXG4gICAgICovXG4gICAgRW51bS5yZWdpc3RlciA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAga2V5ID0ga2V5IHx8ICdFbnVtJztcbiAgICAgIGlmICghZ2xvYmFsW2tleV0pIHtcbiAgICAgICAgZ2xvYmFsW2tleV0gPSBFbnVtO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxufShcbiAgdGhpcyxcbiAgdHlwZW9mKG1vZHVsZSkgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlIDogdW5kZWZpbmVkLFxuICB0eXBlb2YoZ2xvYmFsKSAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB1bmRlZmluZWQsXG4gIHR5cGVvZihkZWZpbmUpICE9PSAndW5kZWZpbmVkJyA/IGRlZmluZSA6IHVuZGVmaW5lZFxuKSk7XG4iLCIvKiFcclxuICogQG5hbWUgSmF2YVNjcmlwdC9Ob2RlSlMgTWVyZ2UgdjEuMi4wXHJcbiAqIEBhdXRob3IgeWVpa29zXHJcbiAqIEByZXBvc2l0b3J5IGh0dHBzOi8vZ2l0aHViLmNvbS95ZWlrb3MvanMubWVyZ2VcclxuXHJcbiAqIENvcHlyaWdodCAyMDE0IHllaWtvcyAtIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20veWVpa29zL2pzLm1lcmdlL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuOyhmdW5jdGlvbihpc05vZGUpIHtcclxuXHJcblx0LyoqXHJcblx0ICogTWVyZ2Ugb25lIG9yIG1vcmUgb2JqZWN0cyBcclxuXHQgKiBAcGFyYW0gYm9vbD8gY2xvbmVcclxuXHQgKiBAcGFyYW0gbWl4ZWQsLi4uIGFyZ3VtZW50c1xyXG5cdCAqIEByZXR1cm4gb2JqZWN0XHJcblx0ICovXHJcblxyXG5cdHZhciBQdWJsaWMgPSBmdW5jdGlvbihjbG9uZSkge1xyXG5cclxuXHRcdHJldHVybiBtZXJnZShjbG9uZSA9PT0gdHJ1ZSwgZmFsc2UsIGFyZ3VtZW50cyk7XHJcblxyXG5cdH0sIHB1YmxpY05hbWUgPSAnbWVyZ2UnO1xyXG5cclxuXHQvKipcclxuXHQgKiBNZXJnZSB0d28gb3IgbW9yZSBvYmplY3RzIHJlY3Vyc2l2ZWx5IFxyXG5cdCAqIEBwYXJhbSBib29sPyBjbG9uZVxyXG5cdCAqIEBwYXJhbSBtaXhlZCwuLi4gYXJndW1lbnRzXHJcblx0ICogQHJldHVybiBvYmplY3RcclxuXHQgKi9cclxuXHJcblx0UHVibGljLnJlY3Vyc2l2ZSA9IGZ1bmN0aW9uKGNsb25lKSB7XHJcblxyXG5cdFx0cmV0dXJuIG1lcmdlKGNsb25lID09PSB0cnVlLCB0cnVlLCBhcmd1bWVudHMpO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDbG9uZSB0aGUgaW5wdXQgcmVtb3ZpbmcgYW55IHJlZmVyZW5jZVxyXG5cdCAqIEBwYXJhbSBtaXhlZCBpbnB1dFxyXG5cdCAqIEByZXR1cm4gbWl4ZWRcclxuXHQgKi9cclxuXHJcblx0UHVibGljLmNsb25lID0gZnVuY3Rpb24oaW5wdXQpIHtcclxuXHJcblx0XHR2YXIgb3V0cHV0ID0gaW5wdXQsXHJcblx0XHRcdHR5cGUgPSB0eXBlT2YoaW5wdXQpLFxyXG5cdFx0XHRpbmRleCwgc2l6ZTtcclxuXHJcblx0XHRpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xyXG5cclxuXHRcdFx0b3V0cHV0ID0gW107XHJcblx0XHRcdHNpemUgPSBpbnB1dC5sZW5ndGg7XHJcblxyXG5cdFx0XHRmb3IgKGluZGV4PTA7aW5kZXg8c2l6ZTsrK2luZGV4KVxyXG5cclxuXHRcdFx0XHRvdXRwdXRbaW5kZXhdID0gUHVibGljLmNsb25lKGlucHV0W2luZGV4XSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xyXG5cclxuXHRcdFx0b3V0cHV0ID0ge307XHJcblxyXG5cdFx0XHRmb3IgKGluZGV4IGluIGlucHV0KVxyXG5cclxuXHRcdFx0XHRvdXRwdXRbaW5kZXhdID0gUHVibGljLmNsb25lKGlucHV0W2luZGV4XSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lcmdlIHR3byBvYmplY3RzIHJlY3Vyc2l2ZWx5XHJcblx0ICogQHBhcmFtIG1peGVkIGlucHV0XHJcblx0ICogQHBhcmFtIG1peGVkIGV4dGVuZFxyXG5cdCAqIEByZXR1cm4gbWl4ZWRcclxuXHQgKi9cclxuXHJcblx0ZnVuY3Rpb24gbWVyZ2VfcmVjdXJzaXZlKGJhc2UsIGV4dGVuZCkge1xyXG5cclxuXHRcdGlmICh0eXBlT2YoYmFzZSkgIT09ICdvYmplY3QnKVxyXG5cclxuXHRcdFx0cmV0dXJuIGV4dGVuZDtcclxuXHJcblx0XHRmb3IgKHZhciBrZXkgaW4gZXh0ZW5kKSB7XHJcblxyXG5cdFx0XHRpZiAodHlwZU9mKGJhc2Vba2V5XSkgPT09ICdvYmplY3QnICYmIHR5cGVPZihleHRlbmRba2V5XSkgPT09ICdvYmplY3QnKSB7XHJcblxyXG5cdFx0XHRcdGJhc2Vba2V5XSA9IG1lcmdlX3JlY3Vyc2l2ZShiYXNlW2tleV0sIGV4dGVuZFtrZXldKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJhc2Vba2V5XSA9IGV4dGVuZFtrZXldO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYmFzZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXJnZSB0d28gb3IgbW9yZSBvYmplY3RzXHJcblx0ICogQHBhcmFtIGJvb2wgY2xvbmVcclxuXHQgKiBAcGFyYW0gYm9vbCByZWN1cnNpdmVcclxuXHQgKiBAcGFyYW0gYXJyYXkgYXJndlxyXG5cdCAqIEByZXR1cm4gb2JqZWN0XHJcblx0ICovXHJcblxyXG5cdGZ1bmN0aW9uIG1lcmdlKGNsb25lLCByZWN1cnNpdmUsIGFyZ3YpIHtcclxuXHJcblx0XHR2YXIgcmVzdWx0ID0gYXJndlswXSxcclxuXHRcdFx0c2l6ZSA9IGFyZ3YubGVuZ3RoO1xyXG5cclxuXHRcdGlmIChjbG9uZSB8fCB0eXBlT2YocmVzdWx0KSAhPT0gJ29iamVjdCcpXHJcblxyXG5cdFx0XHRyZXN1bHQgPSB7fTtcclxuXHJcblx0XHRmb3IgKHZhciBpbmRleD0wO2luZGV4PHNpemU7KytpbmRleCkge1xyXG5cclxuXHRcdFx0dmFyIGl0ZW0gPSBhcmd2W2luZGV4XSxcclxuXHJcblx0XHRcdFx0dHlwZSA9IHR5cGVPZihpdGVtKTtcclxuXHJcblx0XHRcdGlmICh0eXBlICE9PSAnb2JqZWN0JykgY29udGludWU7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gaXRlbSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc2l0ZW0gPSBjbG9uZSA/IFB1YmxpYy5jbG9uZShpdGVtW2tleV0pIDogaXRlbVtrZXldO1xyXG5cclxuXHRcdFx0XHRpZiAocmVjdXJzaXZlKSB7XHJcblxyXG5cdFx0XHRcdFx0cmVzdWx0W2tleV0gPSBtZXJnZV9yZWN1cnNpdmUocmVzdWx0W2tleV0sIHNpdGVtKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHRba2V5XSA9IHNpdGVtO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHR5cGUgb2YgdmFyaWFibGVcclxuXHQgKiBAcGFyYW0gbWl4ZWQgaW5wdXRcclxuXHQgKiBAcmV0dXJuIHN0cmluZ1xyXG5cdCAqXHJcblx0ICogQHNlZSBodHRwOi8vanNwZXJmLmNvbS90eXBlb2Z2YXJcclxuXHQgKi9cclxuXHJcblx0ZnVuY3Rpb24gdHlwZU9mKGlucHV0KSB7XHJcblxyXG5cdFx0cmV0dXJuICh7fSkudG9TdHJpbmcuY2FsbChpbnB1dCkuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGlzTm9kZSkge1xyXG5cclxuXHRcdG1vZHVsZS5leHBvcnRzID0gUHVibGljO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cclxuXHRcdHdpbmRvd1twdWJsaWNOYW1lXSA9IFB1YmxpYztcclxuXHJcblx0fVxyXG5cclxufSkodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpOyIsIi8qIHZpbTpzZXQgdHM9MiBzdz0yIHN0cz0yIGV4cGFuZHRhYiAqL1xyXG4vKmpzaGludCB1bmRlZjogdHJ1ZSBlczU6IHRydWUgbm9kZTogdHJ1ZSBkZXZlbDogdHJ1ZSBldmlsOiB0cnVlXHJcbiAgICAgICAgIGZvcmluOiB0cnVlIGxhdGVkZWY6IGZhbHNlIHN1cGVybmV3OiB0cnVlICovXHJcbi8qZ2xvYmFsIGRlZmluZTogdHJ1ZSAqL1xyXG5cclxuISh0eXBlb2YgZGVmaW5lICE9PSBcImZ1bmN0aW9uXCIgPyBmdW5jdGlvbihfLCAkKXsgJChudWxsLCB0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogd2luZG93KTsgfSA6IGRlZmluZSkoJ3NlbGZpc2gnLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzKSB7XHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuQmFzZSA9IE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShPYmplY3QucHJvdG90eXBlLCB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIGB0aGlzYCBvYmplY3QgKEFuYWxvZyBvZlxyXG4gICAqIGBuZXcgT2JqZWN0KClgKS5cclxuICAgKiBAZXhhbXBsZXNcclxuICAgKlxyXG4gICAqICAgIHZhciBEb2cgPSBCYXNlLmV4dGVuZCh7XHJcbiAgICogICAgICBiYXJrOiBmdW5jdGlvbiBiYXJrKCkge1xyXG4gICAqICAgICAgICByZXR1cm4gJ1J1ZmYhIFJ1ZmYhJ1xyXG4gICAqICAgICAgfVxyXG4gICAqICAgIH0pO1xyXG4gICAqICAgIHZhciBkb2cgPSBEb2cubmV3KCk7XHJcbiAgICovXHJcbiAgJ25ldyc6IHsgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICAgIHZhciBvYmplY3QgPSBPYmplY3QuY3JlYXRlKHRoaXMpO1xyXG4gICAgb2JqZWN0LmluaXRpYWxpemUuYXBwbHkob2JqZWN0LCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIG9iamVjdDtcclxuICB9fSxcclxuICAvKipcclxuICAgKiBXaGVuIG5ldyBpbnN0YW5jZSBvZiB0aGUgdGhpcyBwcm90b3R5cGUgaXMgY3JlYXRlZCBpdCdzIGBpbml0aWFsaXplYFxyXG4gICAqIG1ldGhvZCBpcyBjYWxsZWQgd2l0aCBhbGwgdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGBuZXdgLiBZb3UgY2FuXHJcbiAgICogb3ZlcnJpZGUgYGluaXRpYWxpemVgIHRvIHNldCB1cCBhbiBpbnN0YW5jZS5cclxuICAgKi9cclxuICBpbml0aWFsaXplOiB7IHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIH19LFxyXG4gIC8qKlxyXG4gICAqIE1lcmdlcyBhbGwgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHBhc3NlZCBvYmplY3RzIGludG8gYHRoaXNgIGluc3RhbmNlIChUaGlzXHJcbiAgICogbWV0aG9kIGNhbiBiZSB1c2VkIG9uIGluc3RhbmNlcyBvbmx5IGFzIHByb3RvdHlwZSBvYmplY3RzIGFyZSBmcm96ZW4pLlxyXG4gICAqXHJcbiAgICogSWYgdHdvIG9yIG1vcmUgYXJndW1lbnQgb2JqZWN0cyBoYXZlIG93biBwcm9wZXJ0aWVzIHdpdGggdGhlIHNhbWUgbmFtZSxcclxuICAgKiB0aGUgcHJvcGVydHkgaXMgb3ZlcnJpZGRlbiwgd2l0aCBwcmVjZWRlbmNlIGZyb20gcmlnaHQgdG8gbGVmdCwgaW1wbHlpbmcsXHJcbiAgICogdGhhdCBwcm9wZXJ0aWVzIG9mIHRoZSBvYmplY3Qgb24gdGhlIGxlZnQgYXJlIG92ZXJyaWRkZW4gYnkgYSBzYW1lIG5hbWVkXHJcbiAgICogcHJvcGVydHkgb2YgdGhlIG9iamVjdCBvbiB0aGUgcmlnaHQuXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZXNcclxuICAgKlxyXG4gICAqICAgIHZhciBQZXQgPSBEb2cuZXh0ZW5kKHtcclxuICAgKiAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUob3B0aW9ucykge1xyXG4gICAqICAgICAgICAvLyB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgLT4gd291bGQgaGF2ZSB0aHJvd24gKGZyb3plbiBwcm90b3R5cGUpXHJcbiAgICogICAgICAgIHRoaXMubWVyZ2Uob3B0aW9ucykgLy8gd2lsbCBvdmVycmlkZSBhbGwgcHJvcGVydGllcy5cclxuICAgKiAgICAgIH0sXHJcbiAgICogICAgICBjYWxsOiBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICogICAgICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG5hbWUgPyB0aGlzLmJhcmsoKSA6ICcnXHJcbiAgICogICAgICB9LFxyXG4gICAqICAgICAgbmFtZTogbnVsbFxyXG4gICAqICAgIH0pXHJcbiAgICogICAgdmFyIHBldCA9IFBldC5uZXcoeyBuYW1lOiAnQmVuenknLCBicmVlZDogJ0xhYnJhZG9yJyB9KVxyXG4gICAqICAgIHBldC5jYWxsKCdCZW56eScpICAgLy8gJ1J1ZmYhIFJ1ZmYhJ1xyXG4gICAqL1xyXG4gIG1lcmdlOiB7IHZhbHVlOiBmdW5jdGlvbiBtZXJnZSgpIHtcclxuICAgIHZhciBkZXNjcmlwdG9yID0ge307XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcclxuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgZGVzY3JpcHRvcltuYW1lXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcGVydGllcywgbmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCBkZXNjcmlwdG9yKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH19LFxyXG4gIC8qKlxyXG4gICAqIFRha2VzIGFueSBudW1iZXIgb2YgYXJndW1lbnQgb2JqZWN0cyBhbmQgcmV0dXJucyBmcm96ZW4sIGNvbXBvc2l0ZSBvYmplY3RcclxuICAgKiB0aGF0IGluaGVyaXRzIGZyb20gYHRoaXNgIG9iamVjdCBhbmQgY29tYmluZXMgYWxsIG9mIHRoZSBvd24gcHJvcGVydGllcyBvZlxyXG4gICAqIHRoZSBhcmd1bWVudCBvYmplY3RzLiAoT2JqZWN0cyByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uIGFyZSBmcm96ZW4gYXNcclxuICAgKiB0aGV5IGFyZSBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIHR5cGVzKS5cclxuICAgKlxyXG4gICAqIElmIHR3byBvciBtb3JlIGFyZ3VtZW50IG9iamVjdHMgaGF2ZSBvd24gcHJvcGVydGllcyB3aXRoIHRoZSBzYW1lIG5hbWUsXHJcbiAgICogdGhlIHByb3BlcnR5IGlzIG92ZXJyaWRkZW4sIHdpdGggcHJlY2VkZW5jZSBmcm9tIHJpZ2h0IHRvIGxlZnQsIGltcGx5aW5nLFxyXG4gICAqIHRoYXQgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IG9uIHRoZSBsZWZ0IGFyZSBvdmVycmlkZGVuIGJ5IGEgc2FtZSBuYW1lZFxyXG4gICAqIHByb3BlcnR5IG9mIHRoZSBvYmplY3Qgb24gdGhlIHJpZ2h0LlxyXG4gICAqIEBleGFtcGxlc1xyXG4gICAqXHJcbiAgICogICAgLy8gIyMgT2JqZWN0IGNvbXBvc2l0aW9uICMjXHJcbiAgICpcclxuICAgKiAgICB2YXIgSEVYID0gQmFzZS5leHRlbmQoe1xyXG4gICAqICAgICAgaGV4OiBmdW5jdGlvbiBoZXgoKSB7XHJcbiAgICogICAgICAgIHJldHVybiAnIycgKyB0aGlzLmNvbG9yO1xyXG4gICAqICAgICAgfVxyXG4gICAqICAgIH0pXHJcbiAgICpcclxuICAgKiAgICB2YXIgUkdCID0gQmFzZS5leHRlbmQoe1xyXG4gICAqICAgICAgcmVkOiBmdW5jdGlvbiByZWQoKSB7XHJcbiAgICogICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xyXG4gICAqICAgICAgfSxcclxuICAgKiAgICAgIGdyZWVuOiBmdW5jdGlvbiBncmVlbigpIHtcclxuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XHJcbiAgICogICAgICB9LFxyXG4gICAqICAgICAgYmx1ZTogZnVuY3Rpb24gYmx1ZSgpIHtcclxuICAgKiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XHJcbiAgICogICAgICB9XHJcbiAgICogICAgfSlcclxuICAgKlxyXG4gICAqICAgIHZhciBDTVlLID0gQmFzZS5leHRlbmQoUkdCLCB7XHJcbiAgICogICAgICBibGFjazogZnVuY3Rpb24gYmxhY2soKSB7XHJcbiAgICogICAgICAgIHZhciBjb2xvciA9IE1hdGgubWF4KE1hdGgubWF4KHRoaXMucmVkKCksIHRoaXMuZ3JlZW4oKSksIHRoaXMuYmx1ZSgpKTtcclxuICAgKiAgICAgICAgcmV0dXJuICgxIC0gY29sb3IgLyAyNTUpLnRvRml4ZWQoNCk7XHJcbiAgICogICAgICB9LFxyXG4gICAqICAgICAgY3lhbjogZnVuY3Rpb24gY3lhbigpIHtcclxuICAgKiAgICAgICAgdmFyIEsgPSB0aGlzLmJsYWNrKCk7XHJcbiAgICogICAgICAgIHJldHVybiAoKCgxIC0gdGhpcy5yZWQoKSAvIDI1NSkudG9GaXhlZCg0KSAtIEspIC8gKDEgLSBLKSkudG9GaXhlZCg0KTtcclxuICAgKiAgICAgIH0sXHJcbiAgICogICAgICBtYWdlbnRhOiBmdW5jdGlvbiBtYWdlbnRhKCkge1xyXG4gICAqICAgICAgICB2YXIgSyA9IHRoaXMuYmxhY2soKTtcclxuICAgKiAgICAgICAgcmV0dXJuICgoKDEgLSB0aGlzLmdyZWVuKCkgLyAyNTUpLnRvRml4ZWQoNCkgLSBLKSAvICgxIC0gSykpLnRvRml4ZWQoNCk7XHJcbiAgICogICAgICB9LFxyXG4gICAqICAgICAgeWVsbG93OiBmdW5jdGlvbiB5ZWxsb3coKSB7XHJcbiAgICogICAgICAgIHZhciBLID0gdGhpcy5ibGFjaygpO1xyXG4gICAqICAgICAgICByZXR1cm4gKCgoMSAtIHRoaXMuYmx1ZSgpIC8gMjU1KS50b0ZpeGVkKDQpIC0gSykgLyAoMSAtIEspKS50b0ZpeGVkKDQpO1xyXG4gICAqICAgICAgfVxyXG4gICAqICAgIH0pXHJcbiAgICpcclxuICAgKiAgICB2YXIgQ29sb3IgPSBCYXNlLmV4dGVuZChIRVgsIFJHQiwgQ01ZSywge1xyXG4gICAqICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gQ29sb3IoY29sb3IpIHtcclxuICAgKiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAqICAgICAgfVxyXG4gICAqICAgIH0pO1xyXG4gICAqXHJcbiAgICogICAgLy8gIyMgUHJvdG90eXBhbCBpbmhlcml0YW5jZSAjI1xyXG4gICAqXHJcbiAgICogICAgdmFyIFBpeGVsID0gQ29sb3IuZXh0ZW5kKHtcclxuICAgKiAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIFBpeGVsKHgsIHksIGhleCkge1xyXG4gICAqICAgICAgICBDb2xvci5pbml0aWFsaXplLmNhbGwodGhpcywgaGV4KTtcclxuICAgKiAgICAgICAgdGhpcy54ID0geDtcclxuICAgKiAgICAgICAgdGhpcy55ID0geTtcclxuICAgKiAgICAgIH0sXHJcbiAgICogICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICogICAgICAgIHJldHVybiB0aGlzLnggKyAnOicgKyB0aGlzLnkgKyAnQCcgKyB0aGlzLmhleCgpO1xyXG4gICAqICAgICAgfVxyXG4gICAqICAgIH0pO1xyXG4gICAqXHJcbiAgICogICAgdmFyIHBpeGVsID0gUGl4ZWwubmV3KDExLCAyMywgJ0NDMzM5OScpXHJcbiAgICogICAgcGl4ZWwudG9TdHJpbmcoKTsgLy8gMTE6MjNAI0NDMzM5OVxyXG4gICAqXHJcbiAgICogICAgcGl4ZWwucmVkKCk7ICAgICAgLy8gMjA0XHJcbiAgICogICAgcGl4ZWwuZ3JlZW4oKTsgICAgLy8gNTFcclxuICAgKiAgICBwaXhlbC5ibHVlKCk7ICAgICAvLyAxNTNcclxuICAgKlxyXG4gICAqICAgIHBpeGVsLmN5YW4oKTsgICAgIC8vIDAuMDAwMFxyXG4gICAqICAgIHBpeGVsLm1hZ2VudGEoKTsgIC8vIDAuNzUwMFxyXG4gICAqICAgIHBpeGVsLnllbGxvdygpOyAgIC8vIDAuMjUwMFxyXG4gICAqXHJcbiAgICovXHJcbiAgIGV4dGVuZDogeyB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpcy5tZXJnZS5hcHBseShPYmplY3QuY3JlYXRlKHRoaXMpLCBhcmd1bWVudHMpKTtcclxuICB9fVxyXG59KSk7XHJcblxyXG59KTtcclxuIiwiLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAtMjAxNiwgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgdGVybXMgb2YgVmVyc2lvbiAyLjAgb2YgdGhlXG4gKiBBcGFjaGUgTGljZW5zZS4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIFdJVEhPVVRcbiAqIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVFksIElOQ0xVRElORyBUSE9TRSBPRiBOT04tSU5GUklOR0VNRU5ULFxuICogTUVSQ0hBTlRBQklMSVRZIE9SIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBQbGVhc2UgcmVmZXIgdG8gdGhlXG4gKiBBcGFjaGUgTGljZW5zZSAyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCkgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKi9cblxudmFyIGRlcGxveXIgICAgICAgICAgICAgID0gcmVxdWlyZSgnZGVwbG95cicpLFxuICAgIERpc2NyZXRlVGFzayAgICAgICAgID0gcmVxdWlyZSgnLi9saWIvdGFzay9kaXNjcmVhdGUtdGFzaycpLFxuICAgIFBvb2xlZFRhc2sgICAgICAgICAgID0gcmVxdWlyZSgnLi9saWIvdGFzay9wb29sZWQtdGFzaycpLFxuICAgIEJhY2tncm91bmRUYXNrICAgICAgID0gcmVxdWlyZSgnLi9saWIvdGFzay9iYWNrZ3JvdW5kLXRhc2snKSxcbiAgICBEaXNjcmV0ZVRhc2tCcm9rZXIgICA9IHJlcXVpcmUoJy4vbGliL2VuZ2luZS9kaXNjcmV0ZS10YXNrLWJyb2tlcicpLFxuICAgIFBvb2xlZFRhc2tCcm9rZXIgICAgID0gcmVxdWlyZSgnLi9saWIvZW5naW5lL3Bvb2xlZC10YXNrLWJyb2tlcicpLFxuICAgIEJhY2tncm91bmRUYXNrQnJva2VyID0gcmVxdWlyZSgnLi9saWIvZW5naW5lL2JhY2tncm91bmQtdGFzay1icm9rZXInKTsgICAgXG5cbi8vIC0tIGV4cG9zZSBgZGVwbG95cmAgaW50byB0aGUgZ2xvYmFsIG5hbWVzcGFjZSBmb3IgYnJvd3NlciBjb252ZW5pZW5jZSAtLVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3cuZGVwbG95cikge1xuICAgIHdpbmRvdy5kZXBsb3lyID0gZGVwbG95cjtcbn1cblxuLyoqXG4gKiBUaGUgYHJicm9rZXJgIGdsb2JhbCBuYW1lc3BhY2Ugb2JqZWN0LiBUaGlzIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciB0aGVcbiAqIERlcGxveVIgYFJCcm9rZXJgLiBJdCBpcyB1c2VkIGFzIGEgZmFjdG9yeSB0byBzaW1wbGlmeSB0aGUgY3JlYXRpb24gb2YgbmV3XG4gKiBpbnN0YW5jZXMgb2Y6XG4gKlxuICogLSBEaXNjcmV0ZVRhc2tCcm9rZXJcbiAqIC0gUG9vbGVkVGFza0Jyb2tlclxuICogLSBCYWNrZ3JvdW5kVGFza0Jyb2tlclxuICogLSBEaXNjcmV0ZVRhc2tcbiAqIC0gUG9vbGVkVGFza1xuICogLSBCYWNrZ3JvdW5kVGFza1xuICpcbiAqIEBtb2R1bGUgcmJyb2tlclxuICogQGZvciByYnJva2VyXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qKlxuICAgICAqIEV4cG9zZSBgZGVwbG95cmAgdmlhIHRoZSBgcmJyb2tlcmAgZm9yIGNvbnZlbmllbmNlLiAgICAgXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVwbG95clxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqLyAgICAgXG4gICAgZGVwbG95cjogZGVwbG95cixcblxuICAgLyoqXG4gICAgKiBEZWZpbmVzIHRoZSBmYWN0b3J5IGZvciBjcmVhdGluZyBhIERlcGxveVItc3BlY2lmaWMgZW5jb2RlZCBSIG9iamVjdCB0byBiZSBcbiAgICAqIHNlbnQgYXMgaW5wdXQgcGFyYW1ldGVycyB0byBhbiBSIHNjcmlwdC5cbiAgICAqXG4gICAgKiBFeGFtcGxlOlxuICAgICogYGBgXG4gICAgKiAgICB2YXIgcmlucHV0ID0gcmJyb2tlci5SSW5wdXQubG9naWNhbCgnbG9naWNhbF9uYW1lJywgdHJ1ZSk7XG4gICAgKiAgICB2YXIgcmlucHV0ID0gcmJyb2tlci5SSW5wdXQubnVtZXJpYygnbnVtZXJpY19uYW1lJywgMTAuNSk7XG4gICAgKiAgICB2YXIgcmlucHV0ID0gcmJva2VyLlJJbnB1dC5pbnRlZ2VyKCdpbnRlZ2VyX25hbWUnLCA1KTtcbiAgICAqICAgIHZhciByaW5wdXQgPSByYm9rZXIuUklucHV0LmNoYXJhY3RlcignY2hhcmFjdGVyX25hbWUnLCAnSGVsbG8nKTtcbiAgICAqICAgIC8vIGVjdC4uLlxuICAgICogYGBgXG4gICAgKiBAcHJvcGVydHkgUklucHV0XG4gICAgKiBAc3RhdGljXG4gICAgKiBAYXBpIHB1YmxpY1xuICAgICovXG4gICAgUklucHV0OiBkZXBsb3lyLlJJbnB1dCxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhbiBgRGlzY3JldGVUYXNrQnJva2VyYCB0byBtYW5hZ2UgdGhlIGV4ZWN1dGlvbiBvZlxuICAgICAqIGEgYERpc2NyZXRlVGFza2AuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGRpc2NyZXRlVGFza0Jyb2tlclxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHtSQnJva2VyfSBBIG5ldyBpbnN0YW5jZSBvZiBhIGBEaXNjcmV0ZVRhc2tCcm9rZXJgLlxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgZGlzY3JldGVUYXNrQnJva2VyOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIERpc2NyZXRlVGFza0Jyb2tlci5uZXcoY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIGBQb29sZWRUYXNrQnJva2VyYCB0byBtYW5hZ2UgdGhlIGV4ZWN1dGlvbiBvZlxuICAgICAqIGEgYFBvb2xlZFRhc2tgLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBwb29sZWRUYXNrQnJva2VyXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgICAqIEByZXR1cm4ge1JCcm9rZXJ9IEEgbmV3IGluc3RhbmNlIG9mIGEgYFBvb2xlZFRhc2tCcm9rZXJgLlxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgcG9vbGVkVGFza0Jyb2tlcjogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBQb29sZWRUYXNrQnJva2VyLm5ldyhjb25maWcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYW4gYEJhY2tncm91bmRUYXNrQnJva2VyYCB0byBtYW5hZ2UgdGhlIGV4ZWN1dGlvbiBvZlxuICAgICAqIGEgYEJhY2tncm91bmRUYXNrYC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgYmFja2dyb3VuZFRhc2tCcm9rZXJcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gICAgICogQHJldHVybiB7UkJyb2tlcn0gQSBuZXcgaW5zdGFuY2Ugb2YgYSBgQmFja2dyb3VuZFRhc2tCcm9rZXJgLlxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYmFja2dyb3VuZFRhc2tCcm9rZXI6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gQmFja2dyb3VuZFRhc2tCcm9rZXIubmV3KGNvbmZpZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhIGBEaXNjcmV0ZVRhc2tgIGZvciBhbiBhbmFseXRpY3MgV2ViIHNlcnZpY2UgYmFzZWRcbiAgICAgKiBvbiBlaXRoZXI6XG4gICAgICpcbiAgICAgKiAgMS4gUmVwb3NpdG9yeS1tYW5hZ2VkIFIgc2NyaXB0XG4gICAgICpcbiAgICAgKiAgICBgYGBcbiAgICAgKiAgICB2YXIgcnRhc2sgPSByYnJva2VyLmRpc2NyZXRlVGFzayh7XG4gICAgICogICAgICAgZmlsZW5hbWU6ICdyZWdyZXNzaW9uJyxcbiAgICAgKiAgICAgICBkaXJlY3Rvcnk6ICdkZW1vJyxcbiAgICAgKiAgICAgICBhdXRob3I6ICdnZW9yZ2UnLFxuICAgICAqICAgICAgIHZlcnNpb246IHZlcnNpb25cbiAgICAgKiAgICAgICAvLyBBZGRpdGlvbmFsIERpc2NyZXRlIFRhc2sgT3B0aW9ucy4uLlxuICAgICAqICAgIH0pO1xuICAgICAqICAgIGBgYFxuICAgICAqXG4gICAgICogMi4gVVJMLWFkZHJlc3NhYmxlIFIgc2NyaXB0XG4gICAgICpcbiAgICAgKiAgICBgYGBcbiAgICAgKiAgICB2YXIgcnRhc2sgPSByYnJva2VyLmRpc2NyZXRlVGFzaygge1xuICAgICAqICAgICAgICAgZXh0ZXJuYWxzb3VyY2U6IHJlZ3Jlc3Npb25VUkxcbiAgICAgKiAgICAgICAgIC8vIEFkZGl0aW9uYWwgRGlzY3JldGUgVGFzayBPcHRpb25zLi4uXG4gICAgICogICAgfSk7XG4gICAgICogICAgYGBgXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGRpc2NyZXRlVGFza1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHtSVGFza30gQSBuZXcgaW5zdGFuY2Ugb2YgYSBgRGlzY3JldGVUYXNrYC5cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIGRpc2NyZXRlVGFzazogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBEaXNjcmV0ZVRhc2submV3KGNvbmZpZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhIGBQb29sZWRUYXNrYCBmb3IgYW4gYW5hbHl0aWNzIFdlYiBzZXJ2aWNlIGJhc2VkXG4gICAgICogb24gZWl0aGVyOlxuICAgICAqXG4gICAgICogIDEuIFJlcG9zaXRvcnktbWFuYWdlZCBSIHNjcmlwdFxuICAgICAqXG4gICAgICogICAgYGBgXG4gICAgICogICAgdmFyIHJ0YXNrID0gcmJyb2tlci5wb29sZWRUYXNrKHtcbiAgICAgKiAgICAgICBmaWxlbmFtZTogJ3JlZ3Jlc3Npb24nLFxuICAgICAqICAgICAgIGRpcmVjdG9yeTogJ2RlbW8nLFxuICAgICAqICAgICAgIGF1dGhvcjogJ2dlb3JnZScsXG4gICAgICogICAgICAgdmVyc2lvbjogdmVyc2lvblxuICAgICAqICAgICAgIC8vIEFkZGl0aW9uYWwgUG9vbGVkIFRhc2sgT3B0aW9ucy4uLlxuICAgICAqICAgIH0pO1xuICAgICAqICAgIGBgYFxuICAgICAqXG4gICAgICogMi4gQXJiaXRyYXJ5IGJsb2NrIG9mIFIgY29kZVxuICAgICAqXG4gICAgICogICAgYGBgXG4gICAgICogICAgdmFyIHJ0YXNrID0gcmJyb2tlci5wb29sZWRUYXNrKHtcbiAgICAgKiAgICAgICAgIGNvZGU6IGNvZGVCbG9ja1xuICAgICAqICAgICAgICAgLy8gQWRkaXRpb25hbCBQb29sZWQgVGFzayBPcHRpb25zLi4uXG4gICAgICogICAgfSk7XG4gICAgICogICAgYGBgXG4gICAgICpcbiAgICAgKiAzLiBVUkwtYWRkcmVzc2FibGUgUiBzY3JpcHRcbiAgICAgKlxuICAgICAqICAgIGBgYFxuICAgICAqICAgIHZhciBydGFzayA9IHJicm9rZXIucG9vbGVkVGFzaygge1xuICAgICAqICAgICAgICAgZXh0ZXJuYWxzb3VyY2U6IHJlZ3Jlc3Npb25VUkxcbiAgICAgKiAgICAgICAgIC8vIEFkZGl0aW9uYWwgUG9vbGVkIFRhc2sgT3B0aW9ucy4uLlxuICAgICAqICAgIH0pO1xuICAgICAqICAgIGBgYFxuICAgICAqXG4gICAgICogQG1ldGhvZCBwb29sZWRUYXNrXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgICAqIEByZXR1cm4ge1JUYXNrfSBBIG5ldyBpbnN0YW5jZSBvZiBhIGBQb29sZWRUYXNrYC5cbiAgICAgKiBAYXBpIHB1YmxpY1xuICAgICAqL1xuICAgIHBvb2xlZFRhc2s6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gUG9vbGVkVGFzay5uZXcoY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhIGBCYWNrZ3JvdW5kVGFza2AgZm9yIGFuIGFuYWx5dGljcyBXZWIgc2VydmljZVxuICAgICAqIGJhc2VkIG9uIGVpdGhlcjpcbiAgICAgKlxuICAgICAqICAxLiBSZXBvc2l0b3J5LW1hbmFnZWQgUiBzY3JpcHRcbiAgICAgKlxuICAgICAqICAgIGBgYFxuICAgICAqICAgIHZhciByVGFzayA9IHJicm9rZXIuYmFja2dyb3VuZFRhc2soe1xuICAgICAqICAgICAgIG5hbWU6ICdTYW1wbGUgVGFzaycsXG4gICAgICogICAgICAgZGVzY3I6ICdTYW1wbGUgZGVzY3JpcHRpb24nLFxuICAgICAqICAgICAgIHJzY3JpcHRuYW1lOiAncmVncmVzc2lvbicsXG4gICAgICogICAgICAgcnNjcmlwdGRpcmVjdG9yeTogJ2RlbW8nLFxuICAgICAqICAgICAgIHJzY3JpcHRhdXRob3I6ICdnZW9yZ2UnLFxuICAgICAqICAgICAgIHJzY3JpcHR2ZXJzaW9uOiB2ZXJzaW9uXG4gICAgICogICAgICAgLy8gQWRkaXRpb25hbCBCYWNrZ3JvdW5kIFRhc2sgT3B0aW9ucy4uLlxuICAgICAqICAgIH0pO1xuICAgICAqICAgIGBgYFxuICAgICAqXG4gICAgICogMi4gQXJiaXRyYXJ5IGJsb2NrIG9mIFIgY29kZVxuICAgICAqXG4gICAgICogICAgYGBgXG4gICAgICogICAgdmFyIHJ0YXNrID0gcmJyb2tlci5iYWNrZ3JvdW5kVGFzayh7XG4gICAgICogICAgICAgICBuYW1lOiAnU2FtcGxlIFRhc2snLFxuICAgICAqICAgICAgIGRlc2NyOiAnU2FtcGxlIGRlc2NyaXB0aW9uJyxcbiAgICAgKiAgICAgICAgIGNvZGU6IGNvZGVCbG9ja1xuICAgICAqICAgICAgICAgLy8gQWRkaXRpb25hbCBCYWNrZ3JvdW5kIFRhc2sgT3B0aW9ucy4uLlxuICAgICAqICAgIH0pO1xuICAgICAqICAgIGBgYFxuICAgICAqXG4gICAgICogMy4gVVJMLWFkZHJlc3NhYmxlIFIgc2NyaXB0XG4gICAgICpcbiAgICAgKiAgICBgYGBcbiAgICAgKiAgICB2YXIgcnRhc2sgPSByYnJva2VyLmJhY2tncm91bmRUYXNrKCB7XG4gICAgICogICAgICAgICBuYW1lOiAnU2FtcGxlIFRhc2snLFxuICAgICAqICAgICAgIGRlc2NyOiAnU2FtcGxlIGRlc2NyaXB0aW9uJyxcbiAgICAgKiAgICAgICAgIGV4dGVybmFsc291cmNlOiByZWdyZXNzaW9uVVJMXG4gICAgICogICAgICAgICAvLyBBZGRpdGlvbmFsIEJhY2tncm91bmQgVGFzayBPcHRpb25zLi4uXG4gICAgICogICAgfSk7XG4gICAgICogICAgYGBgXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGJhY2tncm91bmRUYXNrXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgICAqIEByZXR1cm4ge1JUYXNrfSBBIG5ldyBpbnN0YW5jZSBvZiBhbiBgQmFja2dyb3VuZFRhc2tgLlxuICAgICAqIEBhcGkgcHVibGljXG4gICAgICovXG4gICAgYmFja2dyb3VuZFRhc2s6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gQmFja2dyb3VuZFRhc2submV3KGNvbmZpZyk7XG4gICAgfVxufTtcbiJdfQ==
