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
        var self = this;

        props = props || {};

        this.type = type;
        this.propKeys = Object.keys(props);
        this.token = null;

        for (var i in props) {
            (function(i) {
                Object.defineProperty(self, i, {
                    get: function() {
                        return props[i];
                    },
                    set: function(value) {
                        props[i] = value;
                    }
                })
            })(i);
        }
    },

    /**
     * A copy of the `RTask` properties as a flat object.
     *
     * @returns {Object} A copy of the `RTask` properties.
     */
    serialize: function() {
        var clone = {};
        for (var keys = this.propKeys, l = keys.length; l; --l) {
            clone[keys[l - 1]] = this[keys[l - 1]];
        }

        return clone;
    },

    toString: function() {
        var out = '',
            keys = this.propKeys;

        for (var o in keys) {
            out += ' [ ' + keys[o] + ' = "' + this[keys[o]] + '" ]';
        }

        if (this.token) {
            out += ' [ token = "' + this.token + '" ]';
        }

        return out;
    },



    toJSONORIG: function() {
        var clone = {};
        for (var keys = Object.keys(this.props), l = keys.length; l; --l) {
            clone[keys[l - 1]] = this.props[keys[l - 1]];
        }

        return clone;
    },

    toStringORIG: function() {
        var out = '';

        for (var o in this.props) {
            out += ' [ ' + o + ' = "' + this.props[o] + '" ]';
        }

        if (this.token) {
            out += ' [ token = "' + this.token + '" ]';
        }

        return out;
    }
});
