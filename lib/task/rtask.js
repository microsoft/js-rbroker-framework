/*!
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
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