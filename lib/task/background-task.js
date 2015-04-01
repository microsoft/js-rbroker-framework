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

var Base      = require('selfish').Base,
    RTaskType = require('../rtask-type'),
    RTask     = require('./rtask');

module.exports = Base.extend(RTask, {

    initialize: function(props) {
        RTask.initialize.call(this, props, RTaskType.BACKGROUND);
    },

    toString: function() {
        return 'BackgroundTask: ' + RTask.toString.call(this);
    }
});