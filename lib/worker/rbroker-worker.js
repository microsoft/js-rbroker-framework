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
    when         = require('when'),
    RTaskPromise = require('../util/rtask-promise');

module.exports =  Base.extend(RTaskPromise, {
  initialize: function initialize(task) {
    var self   = this;
    this.task  = task;
    this.defer = when.defer();
    this.done  = false;
    this.defer.promise.done(function() { self.done = true; });
  },

  isDone: function () {
    return this.done;
  },

  getTask: function () {
    return this.task;
  }
});
