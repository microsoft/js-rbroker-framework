#!/usr/bin/env node

/*
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

/*
 * usage: $ node background-basics.js
 * output: Task execution lifecycle logged to stdout
 *
 * Example using a BackgroundTaskBroker.
 */

var rbroker = require('../../../rbroker'),
    config  = require('../../config');

/*
 * 1. Create RBroker instance using RBrokerFactory.
 *
 * This example creates a BackgroundTaskBroker.
 */
var brokerConfig = {
    host: config.host,
    credentials: config.credentials
};

/*
 * Register a `listener` for asynchronous notifications on RTask completion.
 * 
 * .complete|.error|.progress|.idel are aliases for: 
 * -------------------------------------------------------
 * .on('complete', fn)
 * .on('error', fn);
 * .on('progress', fn)
 * .on('idel'), fn)
 */
var bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
    .complete(function (rTask, rTaskResult) {
        console.log('[completed]-----------------------------------------');
        console.log(rTask);
        console.log(rTaskResult);
        console.log('----------------------------------------------------');
    })
    .error(function (err) {
        console.log('[error]---------------------------------------------');
        console.log(err);
        console.log('----------------------------------------------------');
    })
    .progress(function (status) {
        console.log('[progress]------------------------------------------');
        console.log(status + '');
        console.log('----------------------------------------------------');
    })
    .idle(function () { // nothing pending             
        bgBroker.shutdown()
            .then(function () {
                console.log('Background Task: RBroker shutdown `successful`.');
            }, function () {
                console.log('Background Task: RBroker has shutdown `failure`.');
            });
    });

/*
 * 2. Define RTask
 *
 * This example creates a BackgroundTask that will execute an artibrary block 
 * of R code.
 */
var props = {
    name: 'Example Background RTask',
    descr: 'Example Background RTask.',
    code: 'x <- rnorm(100)'
};

var rTask = rbroker.backgroundTask(props);

/*
 * 3. Submit RTask to RBroker for execution.
 *
 * The RTaskToken is returned immediately. You can use the token to track the 
 * progress of RTask and/or block while waiting for a result. However, in this 
 * example we are going to allow the RTaskListener handle the result so there is
 * nothing further for us to do here after we submit the RTask.
 */
bgBroker.submit(rTask);

console.log('Submitted ' + rTask + ' for execution on RBroker.');
