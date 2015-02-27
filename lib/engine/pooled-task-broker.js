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

var deployr = require('deployr');

var when             = require('when'),
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
  initialize: function initialize(config) {
    RBrokerEngine.initialize.call(this, config);  

    if (!config.credentials) {
      throw new Error('Broker failed to initialize, user credentials required.');
    }

    var self     = this,
        poolSize = config.maxConcurrentTaskLimit,
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
        self.emit('ready');
        self.httpKeepAlive.start(self.ruser);      
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
      var defer = when.defer();
      defer.reject(new Error('RBroker is not idle,  refresh not permitted.'));
      return defer.promise;
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
    var self  = this,
        defer = when.defer();

    this.httpKeepAlive.stop();
    this.flush();

    this.ruser.release(this.resourceTokenPool.q)
      .then(function() {        
        defer.resolve(true);
      }, function(err) {
        self.emit('error', err);           
        defer.reject(new Error(err));
      });

    this.resourceTokenPool.q = [];

    return defer.promise;    
  },

  /**
   * @override
   * @api private
   */
  createWorker: function (task) {
    return PooledTaskWorker.new(task, this.ruser);
  }  
});
