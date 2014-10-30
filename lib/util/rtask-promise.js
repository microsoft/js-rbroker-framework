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
 
var Base = require('selfish').Base,
    when = require('when');

module.exports = Base.extend({
   
    // equivlent to `finally` for non-ES5 environments
    ensure: function (fn) {
      var self = this;
      if (fn) {
        this.defer.promise.ensure(function() {
          fn.call(self, self.resourceToken);
        });
      }

      return this;
    },

    complete: function (fn, efn) {      
      this.defer.promise.done(fn, efn);

      return this;
    },

    error: function (fn) {
      this.defer.promise.otherwise(fn);

      return this;
    },
    
    resolve: function (result) {    
      this.defer.resolve({ task: this.task, result: result });      
    },

    reject: function (err) {
      this.defer.reject(err);
    }
});