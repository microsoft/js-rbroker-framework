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

var test = require('tape'),
    when = require('when'),
    merge = require('merge'),
    rbroker = require('../../rbroker'),
    fixtures = require('../fixtures/job');

console.log('A BackgroundTaskBroker\n');

/**
 * Teardown job tests
 */
function teardown(t, bgBroker, jobIDs) {
    var promises = [];

    jobIDs.forEach(function(jobID) {
        promises.push(fixtures.deleteJobArtifacts(bgBroker.owner(), jobID));
    });

    when.all(promises).then()
        .ensure(function() {
            bgBroker.shutdown().then(function() {
                t.pass('bgBroker.shutdown success');
            }, function(err) {
                t.fail('bgBroker.shutdown failed: ' + err.get('error'));
            });
        });
}

/**
 * Test "good" endpoint.
 */
test('should successfully initialize with good endpoint address', function(t) {
    t.plan(1);

    var bgBroker = null,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials
        };

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .error(function(err) {
            t.fail('bgBroker initialization failed "' + err.get('error') + '"');
        })
        .ready(function() {
            t.pass('bgBroker initialization success');
            bgBroker.shutdown().then(function() {}, function(err) {
                t.fail('bgBroker.shutdown failed: ' + err.get('error'));
            });
        });
});

/**
 * Test "bad" endpoint.
 */
test('should fail initialization with bad endpoint address', function(t) {
    t.plan(1);

    var bgBroker = null,
        brokerConfig = {
            host: fixtures.BAD_ENDPOINT,
            credentials: fixtures.credentials
        };

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .error(function(err) {
            t.pass('bgBroker initialization failed "' + err.get('error') + '"');
        })
        .ready(function() {
            t.pass('bgBroker initialization success but should have failed');
            bgBroker.shutdown().then(function() {}, function(err) {
                t.fail('bgBroker.shutdown failed: ' + err.get('error'));
            });
        });
});

/**
 * Test authenticated BackgroundBrokerfixtures.
 */
test('should authenticate with `Background Broker Config`', function(t) {
    t.plan(5);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        jobID = null,
        bgBroker = null,
        rTask = null;

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            jobID = rTaskResult.id;

            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.notEqual(jobID, null, 'jobID');

            fixtures.verifyJobExitStatus(bgBroker.owner(), jobID, 'Completed')
                .then(function() {
                    t.pass('jobCompleted');
                }, function(err) {
                    t.fail('jobCompleted: ' + err);
                })
                .ensure(function() {
                    bgBroker.shutdown().then(function() {
                        t.pass('bgBroker.shutdown success');
                    }, function(err) {
                        t.fail('bgBroker.shutdown failed: ' + err.get('error'));
                    });
                });
        })
        .error(function(err) {
            var msg = err.task ? 'bgBroker.submit(rTask) failed: ' :
                'bgBroker failed: ';

            t.notOk(false, msg + err.get('error'));
        });

    bgBroker.submit(rbroker.backgroundTask({
        name: 'testConfigAuthenticationGoodCredentials',
        descr: 'Background Task',
        rscriptname: 'Histogram of Auto Sales',
        rscriptdirectory: 'root',
        rscriptauthor: 'testuser'
    }));
});

/**
 * Test authenticated BackgroundBrokerConfig using bad credentials.
 */
test('should not authenticate with `Background Broker Config`', function(t) {
    t.plan(1);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.BAD_CREDENTIALS,
            logging: false
        },
        bgBroker = null;

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .ready(function() {
            bgBroker.shutdown().then(function() {}, function(err) {
                    t.fail('bgBroker.shutdown failed: ' + err.get('error'));
                })
                .ensure(function() {
                    t.fail('authentication successful but should not have been');
                });
        })
        .error(function(err) {
            t.pass('rbroker.backgroundTaskBroker failed: ' + err.get('error'));
        });
});

/**
 * Test RTask execution with `execution-token`.
 */
test('should execute RTask successfully with `execution-token`', function(t) {
    t.plan(6);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testTaskExecutionWithTokenStandardQueueGood',
        jobID = null,
        bgBroker = null,
        rTask = null;

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            jobID = rTaskResult.id;

            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.equal(rTask.token, executionToken, 'execution-token');
            t.notEqual(jobID, null, 'jobID');

            fixtures.verifyJobExitStatus(bgBroker.owner(), jobID, 'Completed')
                .then(function() {
                    t.pass('jobCompleted');
                }, function(err) {
                    t.fail('jobCompleted: ' + err);
                })
                .ensure(function() {
                    teardown(t, bgBroker, [jobID]);
                });
        })
        .error(function(err) {
            var msg = err.task ? 'bgBroker.submit(rTask) failed: ' :
                'bgBroker failed: ';

            t.notOk(false, msg + err.get('error'));
        });

    rTask = rbroker.backgroundTask({
        name: executionToken,
        descr: 'Background Task',
        rscriptname: 'Histogram of Auto Sales',
        rscriptdirectory: 'root',
        rscriptauthor: 'testuser'
    });

    rTask.token = executionToken;

    bgBroker.submit(rTask);
});

/**
 * Test BackgroundBrokerConfig RTask priority execution with `execution-token`.
 */
test('should execute priority RTask successfully with `execution-token`', function(t) {
    t.plan(6);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testTaskExecutionWithTokenPriorityQueueGood',
        jobID = null,
        bgBroker = null,
        rTask = null;

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            jobID = rTaskResult.id;

            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.equal(rTask.token, executionToken, 'execution-token');
            t.notEqual(jobID, null, 'jobID');

            fixtures.verifyJobExitStatus(bgBroker.owner(), jobID, 'Completed')
                .then(function() {
                    t.pass('jobCompleted');
                }, function(err) {
                    t.fail('jobCompleted: ' + err);
                })
                .ensure(function() {
                    teardown(t, bgBroker, [jobID]);
                });
        })
        .error(function(err) {
            if (err.task) {
                t.fail('bgBroker.submit(rTask) failed: ' + err.get('error'));
            }
        });

    rTask = rbroker.backgroundTask({
        name: executionToken,
        descr: 'Background Task',
        rscriptname: 'Histogram of Auto Sales',
        rscriptdirectory: 'root',
        rscriptauthor: 'testuser'
    }, true);

    rTask.token = executionToken;

    bgBroker.submit(rTask);
});

/**
 * Test multiple "good" RTask executions distributed across the standard and
 * priority task queues.
 */
test('should execute multiple "good" RTask executions distributed across standard and priority task queues', function(t) {
    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testMultipleTaskExecutionWithMixedPriority',
        jobID = null,
        bgBroker = null,
        rTasks = [],
        priorityTaskTokens = [],
        standardTaskTokens = [],
        rTaskResults = [],
        jobResults = [],
        priorityTask = true,
        multipleTaskTestSize = 10;

    t.plan(4 + (multipleTaskTestSize * 2));

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            rTaskResults.push(rTaskResult);
        })
        .error(function(err, rTask) {
            if (rTask) {
                t.fail('bgBroker.submit(rTask) failed: ' + err.get('error'));
            }
        })
        .idle(function() {
            var promises = [],
                jobIDs = [];

            rTaskResults.forEach(function(result, i) {
                var jobID = result.id;
                jobIDs.push(result.id);
                promises.push(fixtures.verifyJobExitStatus(bgBroker.owner(),
                    jobID, 'Completed'));
            });

            when.all(promises).then(function(results) {
                    jobResults = jobResults.concat(results);
                })
                .ensure(function() {
                    t.equal(rTasks.length, multipleTaskTestSize,
                        'rTasks and multipleTaskTestSize are the same size');
                    t.equal(standardTaskTokens.length + priorityTaskTokens.length,
                        multipleTaskTestSize, 'standardTaskTokens and ' +
                        'priorityTaskTokens are the same size');
                    t.equal(rTaskResults.length, multipleTaskTestSize,
                        'rTaskResults and multipleTaskTestSize are the same size');
                    rTaskResults.forEach(function(result) {
                        t.ok(result.success, 'rTask ran to success');
                    });
                    jobResults.forEach(function(result) {
                        t.ok(result.status, 'job exit status success');
                    });

                    teardown(t, bgBroker, jobIDs);
                });
        }); // ideal

    for (var i = 0; i < multipleTaskTestSize; i++) {
        var rTask = rbroker.backgroundTask({
                name: executionToken,
                descr: 'Background Task',
                rscriptname: 'Histogram of Auto Sales',
                rscriptdirectory: 'root',
                rscriptauthor: 'testuser'
            }),
            rTaskToken = null;

        rTasks.push(rTask);
        rTaskToken = bgBroker.submit(rTask, priorityTask);

        if (priorityTask) {
            priorityTaskTokens.push(rTaskToken);
        } else {
            standardTaskTokens.push(rTaskToken);
        }

        // Flip priority flag to altenate task type.
        priorityTask = !priorityTask;
    }
});

/**
 * Test "bad" repository-managed script based RTask execution with an
 * `execution-token`.
 */
test('should execute "bad" repository-managed script based RTask execution unsuccessfully with `execution-token`', function(t) {
    t.plan(4);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testTaskExecutionWithTokenBadScript',
        jobID = null,
        bgBroker = null,
        rTask = null;

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            jobID = rTaskResult.id;

            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notEqual(jobID, null, 'jobID');

            fixtures.verifyJobExitStatus(bgBroker.owner(), jobID, 'Failed')
                .then(function(result) {
                    t.ok(result.status, 'job should fail');
                })
                .ensure(function() {
                    teardown(t, bgBroker, [jobID]);
                });
        })
        .error(function(err) {
            if (err.task) {
                t.fail('bgBroker.submit(rTask) failed: ' + err.get('error'));
            }
        });

    rTask = rbroker.backgroundTask({
        name: executionToken,
        descr: 'Background Task',
        rscriptname: 'This Script Does Not Exist',
        rscriptdirectory: 'root',
        rscriptauthor: 'testuser'
    });

    rTask.token = executionToken;

    bgBroker.submit(rTask);
});

/**
 * Test "bad" code-block based RTask execution with execution-token.
 */
test('should execute "bad" code-block based RTask execution unsuccessfully with `execution-token`', function(t) {
    t.plan(4);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testTaskExecutionWithTokenBadCode',
        jobID = null,
        bgBroker = null,
        rTask = null;

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            jobID = rTaskResult.id;

            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notEqual(jobID, null, 'jobID');

            fixtures.verifyJobExitStatus(bgBroker.owner(), jobID, 'Failed')
                .then(function(result) {
                    t.ok(result.status, 'job should fail');
                })
                .ensure(function() {
                    teardown(t, bgBroker, [jobID]);
                });
        })
        .error(function(err) {
            if (err.task) {
                t.fail('bgBroker.submit(rTask) failed: ' + err.get('error'));
            }
        });

    rTask = rbroker.backgroundTask({
        name: executionToken,
        descr: 'Background Task',
        code: 'x y' // invalid R code
    });

    rTask.token = executionToken;

    bgBroker.submit(rTask);
});

/**
 * Test RTask execution with "good" task execution options.
 */
test('should successfully execute RTask with "good" task execution options', function(t) {
    t.plan(5);

    var jobID, bgBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        };

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            jobID = rTaskResult.id;

            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.notEqual(jobID, null, 'jobID');

            fixtures.verifyJobExitStatus(bgBroker.owner(), jobID, 'Completed')
                .then(function(result) {
                    t.ok(result.status, 'job should complete');
                })
                .ensure(function() {
                    teardown(t, bgBroker, [jobID]);
                });
        })
        .error(function(err) {
            if (err.task) {
                t.fail('bgBroker.submit(rTask) failed: ' + err.get('error'));
            }
        });

    bgBroker.submit(rbroker.backgroundTask(merge({
        name: 'testTaskExecutionWithGoodOptions',
        descr: 'Background Task',
        rscriptname: 'Histogram of Auto Sales',
        rscriptdirectory: 'root',
        rscriptauthor: 'testuser'
    }, fixtures.good())));
});

/**
 * Test RTask execution with "bad" task execution options.
 */
test('should unsuccessfully execute RTask with "bad" task execution options', function(t) {
    t.plan(4);

    var bgBroker, jobID,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        };

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            jobID = rTaskResult.id;

            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notEqual(jobID, null, 'jobID');

            fixtures.verifyJobExitStatus(bgBroker.owner(), jobID, 'Aborted')
                .then(function(result) {
                    t.notOk(result.status, 'job should fail');
                })
                .ensure(function() {
                    teardown(t, bgBroker, [jobID]);
                });
        })
        .error(function(err) {
            // 
            // Suppress all errors other than 400: Project param not specified 
            // on projectDelete call. All other errors should fail the test.
            //
            if (!err.task && err.get('errorCode') !== 400) {
                t.fail('bgBroker failed: ' + err.get('error'));
            }
        });

    bgBroker.submit(rbroker.backgroundTask(merge({
        name: 'testTaskExecutionWithBadOptions',
        descr: 'Background Task',
        rscriptname: 'Histogram of Auto Sales',
        rscriptdirectory: 'root',
        rscriptauthor: 'testuser'
    }, fixtures.bad())));
});

/**
 * Cancel long running RTask.
 */
test('should successfully cancel long running RTask', function(t) {
    t.plan(5);

    var bgBroker, rTaskToken,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials
        };

    bgBroker = rbroker.backgroundTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            jobID = rTaskResult.id;

            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.notEqual(jobID, null, 'jobID');

            rTaskToken.cancel(true);

            // wait 5 seconds for /r/job/cancel to take place
            setTimeout(function() {
                fixtures.verifyJobExitStatus(bgBroker.owner(), jobID, 'Cancelled')
                    .then(function(result) {
                        t.ok(result.status, 'jobCancelled');
                    })
                    .ensure(function() {
                        bgBroker.shutdown().then(function() {
                            t.pass('bgBroker.shutdown success');
                        }, function(err) {
                            t.fail('bgBroker.shutdown failed: ' + err.get('error'));
                        });
                    });
            }, 5000);
        })
        .error(function(err) {
            t.fail('bgBroker failed: ' + err.get('error'));
        });

    rTaskToken = bgBroker.submit(rbroker.backgroundTask({
        name: 'testJobCancel',
        descr: 'Background Task',
        code: 'Sys.sleep(10)' // sleep 10 seconds so we can cancel it
    }));
});