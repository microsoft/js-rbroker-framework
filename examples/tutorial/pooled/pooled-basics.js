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

/*!
 * usage: $ node pooled-basics.js
 * output: Task execution lifecycle logged to stdout
 *
 * Example using a PooledTaskBroker.
 */
var rbroker = require('../../../rbroker'),
    config  = require('../../config'),
    consts   = config.constants;

/*
 * 1. Create RBroker instance using RBrokerFactory.
 *
 * This example creates a PooledTaskBroker.
 */
var brokerConfig = {
    maxConcurrentTaskLimit: 10,
    host: config.host,
    credentials: config.credentials,
    releaseGridResources: false,
    logging: false,
    // --- pool options ---
    // For all `pool` option parameters:
    // @see http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingprojects html#projectpool    
    pool: { /* optional pooled parameters go here... */ }
};

/*
 * .complete|.error|.progress|.idel are aliases for: 
 * -------------------------------------------------------
 * .on('complete', fn)
 * .on('error', fn);
 * .on('progress', fn)
 * .on('idel'), fn)
 */
var pBroker = rbroker.pooledTaskBroker(brokerConfig)
    .complete(function (rTask, rTaskResult) {
        console.log('[completed]----------------------------------------');
        console.log(rTask);
        console.log(rTaskResult);
        console.log('---------------------------------------------------');
    })
    .error(function (err) {
        console.log('[error]--------------------------------------------');
        console.log(err);
        console.log('---------------------------------------------------');
    })
    .progress(function (status) {
        console.log('[progress]-----------------------------------------');
        console.log(status);
        console.log('---------------------------------------------------');
    })
    .idle(function () { // nothing pending 

        var shutdown = {
            start: function () {
                console.log('Pooled Task: rBroker shutdown `started`.');
                return pBroker.shutdown();
            },
            success: function () {
                console.log('Pooled Task: rBroker shutdown `successful`.');
            },
            failure: function () {
                console.log('Pooled Task: rBroker shutdown `failure`.');
            }
        };

        // -- refresh then shutdown then print shutdown status --
        //        
        // @NOTE - A `refresh` is not needed here it simply demonstrates a
        //         the proper state to call `refresh` which is when we are idel
        pBroker.refresh()
            .then(shutdown.start)
            .then(shutdown.success, shutdown.failure);

    });

/*
 * 2. Define RTask
 *
 * This example creates 7 PooledTasks that will execute the same R script,
 * `testuser/root/DeployR - Hello World.R`
 */
var props = {
    // You can use `code` | `filename` for a script        
    filename: consts.TUTORIAL_NOOP_SCRIPT,
    //code: 'x<-5 \n print(x)',    
    directory: consts.TUTORIAL_REPO_DIRECTORY,
    author: consts.TUTORIAL_REPO_OWNER
};

var rTask1 = rbroker.pooledTask(props);
var rTask2 = rbroker.pooledTask(props);
var rTask3 = rbroker.pooledTask(props);
var rTask4 = rbroker.pooledTask(props);
var rTask5 = rbroker.pooledTask(props);
var rTask6 = rbroker.pooledTask(props);
var rTask7 = rbroker.pooledTask(props);

/*
 *
 * 3. Submit RTasks to RBroker for execution.
 *
 * The `Task Worker` is returned immediately. You can use the returned token to
 * bind to it's task lifecycle (complete|error|ensure), an example of this is
 * the rTask7 task submittal.
 */
pBroker.submit(rTask1, false);
pBroker.submit(rTask2, false);
pBroker.submit(rTask3, false);
pBroker.submit(rTask4, false);
pBroker.submit(rTask5, false);
pBroker.submit(rTask6, false);
pBroker.submit(rTask7, false)
    .promise()
    .then(function (res) {
        var rTask       = res.task,
            rTaskResult = res.result;

        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~ Individual TASK completed');
        console.log(rTask);
        console.log(rTaskResult);
        console.log('---------------------------------------------------');
    })
    .error(function (err) {
        console.log(err);
    })
    .ensure(function () {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Individual TASK ensure');
        console.log(rTask7);
        console.log('----------------------------------------------------');
    });

// Print
console.log('Pooled Task: submitted ' + rTask1 + ' for execution on RBroker.');
console.log('Pooled Task: submitted ' + rTask2 + ' for execution on RBroker.');
console.log('Pooled Task: submitted ' + rTask3 + ' for execution on RBroker.');
console.log('Pooled Task: submitted ' + rTask4 + ' for execution on RBroker.');
console.log('Pooled Task: submitted ' + rTask5 + ' for execution on RBroker.');
console.log('Pooled Task: submitted ' + rTask6 + ' for execution on RBroker.');
console.log('Pooled Task: submitted ' + rTask7 + ' for execution on RBroker.');
