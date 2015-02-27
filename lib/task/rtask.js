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
    initialize: function initialize(props) {
        this.props = props || {};
        this.token = null;
    },

    /**
     * A copy of the `RTask` properties as a flat object.
     *
     * @returns {Object} A copy of the `RTask` properties.
     */
    toJSON: function() {
        var clone = {};
        for (var keys = Object.keys(this.props), l = keys.length; l; --l) {
            clone[keys[l - 1]] = this.props[keys[l - 1]];
        }

        return clone;
    }
});
