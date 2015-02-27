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
 * Represents a high-level programming model for building DeployR-enabled
 * client applications. By using RBroker an application developer can focus
 * entirely on integrating R Analytics, while offloading the complexity of
 * managing client-side API task queues and server-side R session lifecycles.
 *
 * The basic programming model for working with RBroker is as follows:
 *
 * 1. Decide if the R Analytics tasks for your application should execute as:
 *    - Discrete tasks: authentication optional, grid resources allocated at
 *      runtime, results returned immediately, no persistence. Good for
 *      prototyping and public facing production deployments.
 *    - Pooled tasks: authentication required, grid resources pre-allocated,
 *      results returned immediately, optional persistence to repository. Good
 *      for enterprise production deployments, consistent runtime,
 *      high-throughput environments.
 *    - Background tasks: authentication required, grid resources allocated at
 *      runtime, results persisted for later retrieval. Good for periodic,
 *      scheduled or batch processing.
 * 2. Use the factories defined in rbroker to create an appropriate instance of
 *    `RBroke`r.
 * 3. Define the R Analytics tasks for your application as one or more `RTask`.
 * 4. Submit your `RTask` to `RBroker` for execution.
 * 5. Integrate the results of your `RTask` found within `.complete()`
 *
 * @module task
 * @for rbroker
 */
module.exports = Base.extend({

    /**
     * Represents a high-level programming model for building DeployR-enabled
     * client applications.
     *
     * @class
     * @constructor
     * @param {Object} [options] Configuration options.
     */
    initialize: function initialize(props) {
        this.props = props || {};
        this.token = null;
    },

    toJSON: function() {
        var clone = {};
        for (var keys = Object.keys(this.props), l = keys.length; l; --l) {
            clone[keys[l - 1]] = this.props[keys[l - 1]];
        }

        return clone;
    }
});
