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
var Base         = require('selfish').Base,
    RTaskPromise = require('./util/rtask-promise');
/**
 * Represents a handle to an `RTask` live on an `RBroker`.
 *
 * @module rtask-token
 * @for rbroker
 */
module.exports = Base.extend(RTaskPromise, {

   /**
    * Represents a handle to an `RTask` live on an `RBroker`.
    *
    * @class 
    * @constructor
    * @param {RTask} The task worker.
    */
   initialize: function initialize(worker) {
      this.defer = worker.defer;
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
      this.cancelled = true;
      this.worker.terminate(interrupt);

      return this;
   },

   /**    
    * Returns the `RTask` associated with this `RTaskToken`.
    *
    * @method getTask
    * @return {RTaskToken} for chaining.
    * @api public
    */
   getTask: function() {
      return this.worker.getTask();
   },

   /**    
    * Defines if `this` task has ran to completion.
    *
    * @method isDone
    * @return {Boolean} If `this` task is completed.
    * @api public
    */
   isDone: function() {
      return this.worker.isDone();
   },

   /**    
    * Defines if `this` task is currently cancelled. 
    *
    * @method isCancelled
    * @return {Boolean} If `this` task is currently cancelled.
    * @api public
    */
   isCancelled: function() {
      return this.cancelled;
   }
});