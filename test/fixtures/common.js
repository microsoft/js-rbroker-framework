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

var merge = require('merge'),
    deployr = require('deployr'),
    config = require('../config');

if (config.allowSelfSignedSSLCert) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

function createOptions(good) {
    //
    // Example-Fraud-Score constants.
    //
    var EFS_DIRECTORY = "example-fraud-score",
        EFS_BAD_DIRECTORY = "bad-example-fraud-score",
        EFS_MODEL = "fraudModel.rData",
        EFS_FUNCTION = "ccFraudScore.R",
        EFS_USERNAME = "testuser";

    return {
        //
        // Loading all files found in EFS_DIRECTORY.
        //
        preloadbydirectory: good ? EFS_DIRECTORY : EFS_BAD_DIRECTORY,
        //
        // Loading EFS_FILE found in EFS_DIRECTORY.
        // Note, setting this option is redundant here in practical terms as
        // the preloadByDirectory would have already loaded the EFS_FUNCTION 
        // file from the EFS_DIRECTORY. Howvever, this method is testing the 
        // preload directory mechanism.
        //
        preloadfilename: EFS_FUNCTION,
        preloadfiledirectory: good ? EFS_DIRECTORY : EFS_BAD_DIRECTORY,
        preloadfileauthor: EFS_USERNAME,
        //
        // Loading EFS_MODEL found in EFS_DIRECTORY.
        //
        preloadobjectname: EFS_MODEL,
        preloadobjectdirectory: good ? EFS_DIRECTORY : EFS_BAD_DIRECTORY,
        preloadobjectauthor: EFS_USERNAME,
        //
        // Loading aribtrary R object.
        //
        rinputs: [deployr.RInput.character('arbitrary', 'testme')]
    };
}

module.exports = merge({
    BAD_ENDPOINT: 'http://bad.end.point:999',
    BAD_CREDENTIALS: {
        username: 'bad-username-12321',
        password: 'bad-password-12321'
    },
    BAD_SCRIPT_NAME: 'DoesNotExist.R',
    BAD_DIR_NAME: 'not-a-dir',
    BAD_AUTHOR_NAME: 'notauser',

    good: function() {
        return createOptions(true);
    },

    bad: function() {
        return createOptions(false);
    }
}, config);
