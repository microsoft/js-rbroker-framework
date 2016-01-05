#!/usr/bin/env node

/*
 * Copyright (C) 2010-2016, Microsoft Corporation
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

/*!
 * usage: $ node discrete-basics.js
 * output: Task execution lifecycle logged to stdout
 *
 * Example using a DiscreteTaskBroker.
 */

var rbroker = require('../../../rbroker'),
    config  = require('../../config'),
    consts  = config.constants;

/*
 * 1. Create RBroker instance using RBrokerFactory.
 *
 * This example creates a DiscreteTaskBroker.
 */
var brokerConfig = {
    maxConcurrentTaskLimit: 10,
    host: config.host,
    credentials: config.credentials
};

// 
// .complete|.error|.progress|.idel are aliases for: 
// -------------------------------------------------------
// .on('complete', fn)
// .on('error', fn);
// .on('progress', fn)
// .on('idel'), fn)
//
var dBroker = rbroker.discreteTaskBroker(brokerConfig)
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
        dBroker.shutdown()
        .then(function () {
            console.log('Discrete: RBroker shutdown `successful`.');
        }, function () {
            console.log('Discrete: RBroker has shutdown `failure`.');
        });
    });

/*
 * 2. Define RTask(2)
 *
 * This example creates 7 DiscreteTasks that will execute an R script:
 * /testuser/root/DeployR - Hello World.R
 */
var props = {
    filename: consts.TUTORIAL_NOOP_SCRIPT,
    directory: consts.TUTORIAL_REPO_DIRECTORY,
    author: consts.TUTORIAL_REPO_OWNER
};

var rTask1 = rbroker.discreteTask(props);
var rTask2 = rbroker.discreteTask(props);
var rTask3 = rbroker.discreteTask(props);
var rTask4 = rbroker.discreteTask(props);
var rTask5 = rbroker.discreteTask(props);
var rTask6 = rbroker.discreteTask(props);
var rTask7 = rbroker.discreteTask(props);

/*
 *
 * 3. Submit RTasks to RBroker for execution.
 *
 * The RTaskToken is returned immediately. You can use the returned token to 
 * bind to it's task lifecycle (complete|error|ensure), an example of this is 
 * the rTask7 task.
 */
dBroker.submit(rTask1, false);
dBroker.submit(rTask2, false);
dBroker.submit(rTask3, false);
dBroker.submit(rTask4, false);
dBroker.submit(rTask5, false);
dBroker.submit(rTask6, false);
// -- Listen for indifidual task --
dBroker.submit(rTask7, false)
    .promise()
    .then(function (res) {
       var rTask       = res.task,
           rTaskResult = res.result;

        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~ Individual TASK completed');
        console.log(rTask);
        console.log(rTaskResult);
        console.log('----------------------------------------------------');
    })
    .error(function (err) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Individual TASK error');
        console.log(err);
        console.log('----------------------------------------------------');
    })
    .ensure(function () {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Individual TASK ensure');
        console.log(rTask7);
        console.log('----------------------------------------------------');
    });    

// Print
console.log('Discrete Task: submitted ' + rTask1 + ' for execution on RBroker');
console.log('Discrete Task: submitted ' + rTask2 + ' for execution on RBroker');
console.log('Discrete Task: submitted ' + rTask3 + ' for execution on RBroker');
console.log('Discrete Task: submitted ' + rTask4 + ' for execution on RBroker');
console.log('Discrete Task: submitted ' + rTask5 + ' for execution on RBroker');
console.log('Discrete Task: submitted ' + rTask6 + ' for execution on RBroker');
console.log('Discrete Task: submitted ' + rTask7 + ' for execution on RBroker');