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
 
var DiscreteTask         = require('./lib/task/discreate-task'),
    PooledTask           = require('./lib/task/pooled-task'),
    BackgroundTask       = require('./lib/task/background-task'),
    DiscreteTaskBroker   = require('./lib/engine/discrete-task-broker'),
    PooledTaskBroker     = require('./lib/engine/pooled-task-broker'),
    BackgroundTaskBroker = require('./lib/engine/background-task-broker');

// -- expose `deployr` into the global namespace for browser convenience --
if (typeof window !== 'undefined' && !window.deployr) {
  window.deployr = require('deployr');
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
	 * Create an instance of an `DiscreteTaskBroker` to manage the execution of
	 * a `DiscreteTask`.
     *
     * @method discreteTaskBroker
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RBroker} A new instance of a `DiscreteTaskBroker`.
     * @api public
     */
	discreteTaskBroker: function (config) {
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
	pooledTaskBroker: function (config) {
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
	backgroundTaskBroker: function (config) {
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
     *	     externalsource: regressionURL 
     *	     // Additional Discrete Task Options...
     *    });
     *    ```
     *
     * @method discreteTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of a `DiscreteTask`.
     * @api public
     */
	discreteTask: function (config) {
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
     *	     code: codeBlock
     *	     // Additional Pooled Task Options...
     *    });
     *    ```
     *
     * 3. URL-addressable R script
     *
     *    ```
     *    var rtask = rbroker.pooledTask( {	
     *	     externalsource: regressionURL 
     *	     // Additional Pooled Task Options...
     *    });
     *    ```
     *
     * @method pooledTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of a `PooledTask`.
     * @api public
     */
	pooledTask: function (config) {
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
     *	     name: 'Sample Task',
     *       descr: 'Sample description',
     *	     code: codeBlock
     *	     // Additional Background Task Options...
     *    });
     *    ```
     *
     * 3. URL-addressable R script
     *
     *    ```
     *    var rtask = rbroker.backgroundTask( {	
     *	     name: 'Sample Task',
     *       descr: 'Sample description',     	
     *	     externalsource: regressionURL 
     *	     // Additional Background Task Options...
     *    });
     *    ```
     *
     * @method backgroundTask
     * @static
     * @param {Object} [options] Configuration options.
     * @return {RTask} A new instance of an `BackgroundTask`.
     * @api public
     */
	backgroundTask: function (config) {
		return BackgroundTask.new(config);
	}
};