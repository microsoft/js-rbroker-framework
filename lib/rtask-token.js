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