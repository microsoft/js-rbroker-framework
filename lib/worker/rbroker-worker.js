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
