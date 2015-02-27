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