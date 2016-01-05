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
    merge = require('merge'),
    rbroker = require('../../rbroker'),
    fixtures = require('../fixtures/discrete');

console.log('A DiscreteTaskBroker\n');

/**
 * Test "good" endpoint.
 */
test('should successfully initialize with good endpoint address', function(t) {
    t.plan(1);

    var dBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .error(function(err) {
            t.fail('dBroker initialization failed "' + err.get('error') + '"');
        })
        .ready(function() {
            t.pass('dBroker initialization success');
            dBroker.shutdown().then(function() {}, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });
});

/**
 * Test "bad" endpoint.
 */
test('should fail initialization with bad endpoint address', function(t) {
    t.plan(1);

    var dBroker,
        brokerConfig = {
            host: fixtures.BAD_ENDPOINT,
            credentials: fixtures.credentials,
            logging: false
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .error(function(err) {
            t.pass('dBroker initialization failed "' + err.get('error') + '"');
        })
        .ready(function() {
            t.pass('dBroker initialization success but should have failed');
            dBroker.shutdown().then(function() {}, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });
});

/**
 * Test anonymous DiscreteBrokerfixtures.
 */
test('should successfully execute using an anonymous `Discrete Task Broker`', function(t) {
    t.plan(3);

    var dBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            logging: false
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
        })
        .error(function(err) {
            var msg = err.task ? 'dBroker.submit(rTask) failed: ' :
                'dBroker failed: ';

            t.fail(msg + err.get('error'));
        })
        .idle(function() {
            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });

    dBroker.submit(rbroker.discreteTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }));
});

/**
 * Test authenticated DiscreteBrokerfixtures.
 */
test('should successfully execute using authenticated `Discrete Task Broker`', function(t) {
    t.plan(3);

    var dBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
        })
        .error(function(err) {
            var msg = err.task ? 'dBroker.submit(rTask) failed: ' :
                'dBroker failed: ';

            t.notOk(true, msg + err.get('error'));
        })
        .idle(function() {
            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });

    dBroker.submit(rbroker.discreteTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }));
});

/**
 * Test authenticated DiscreteBrokerConfig using bad credentials.
 */
test('should not authenticate with bad credentials for `Discrete Task Broker`', function(t) {
    t.plan(1);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.BAD_CREDENTIALS,
            logging: false
        },
        dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .ready(function() {
            dBroker.shutdown().then(function() {}, function(err) {
                    t.fail('dBroker.shutdown failed: ' + err.get('error'));
                })
                .ensure(function() {
                    t.fail('authentication successful but should not have been');
                });
        })
        .error(function(err) {
            t.equal(err.get('errorCode'), 940, err.get('error'));
        });
});

/**
 * Test DiscreteBrokerConfig using non-default max concurrency.
 */
test('should successfully execute `Discrete Task Broker` using non-default max concurrency', function(t) {
    t.plan(3);

    var dBroker,
        MAX_CONCURRENCY = 10,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            maxConcurrentTaskLimit: MAX_CONCURRENCY,
            logging: false
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
        })
        .error(function(err) {
            var msg = err.task ? 'dBroker.submit(rTask) failed: ' :
                'dBroker failed: ';

            t.notOk(true, msg + err.get('error'));
        })
        .idle(function() {
            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });

    dBroker.submit(rbroker.discreteTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }));
});

/**
 * Test "good" RTask execution with execution-token.
 */
test('should successfully execute `RTask` using `execution-token`', function(t) {
    t.plan(4);

    var dBroker, rTask,
        executionToken = 'testTaskExecutionWithTokenStandardQueueGood',
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.equal(rTask.token, executionToken, 'execution-token');
        })
        .error(function(err) {
            t.fail(err.task ? 'dBroker.submit(rTask) failed: ' :
                'dBroker failed: ');
        })
        .idle(function() {
            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTask = rbroker.discreteTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    });

    rTask.token = executionToken;

    dBroker.submit(rTask);
});

/**
 * Test "good" RTask priority execution with execution-token.
 */
test('should successfully execute priority `RTask` using `execution-token`', function(t) {
    t.plan(4);

    var dBroker, rTask,
        executionToken = 'testTaskExecutionWithTokenPriorityQueueGood',
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.equal(rTask.token, executionToken, 'execution-token');
        })
        .error(function(err) {
            t.fail(err.task ? 'dBroker.submit(rTask) failed: ' :
                'dBroker failed: ');
        })
        .idle(function() {
            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTask = rbroker.discreteTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    });

    rTask.token = executionToken;

    dBroker.submit(rTask, true);
});

/**
 * Test multiple "good" RTask executions distributed across the standard and 
 * priority task queues.
 */

test('should execute multiple "good" RTask executions distributed across standard and priority task queues', function(t) {
    var dBroker,
        executionToken = 'testMultipleTaskExecutionWithMixedPriority',
        rTasks = [],
        priorityTaskTokens = [],
        standardTaskTokens = [],
        rTaskResults = [],
        priorityTask = true,
        multipleTaskTestSize = 10,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            maxConcurrentTaskLimit: 10,
            logging: false
        };

    t.plan(4 + multipleTaskTestSize);

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            rTaskResults.push(rTaskResult);
        })
        .error(function(err) {
            var msg = err.task ? 'dBroker.submit(rTask) failed: ' :
                'dBroker failed: ';
            t.fail(msg + err.get('error'));
        })
        .idle(function() {
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

            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        }); // ideal

    for (var i = 0; i < multipleTaskTestSize; i++) {
        var rTask = rbroker.discreteTask({
                filename: 'Histogram of Auto Sales',
                directory: 'root',
                author: 'testuser'
            }),
            rTaskToken;

        rTasks.push(rTask);
        rTaskToken = dBroker.submit(rTask, priorityTask);

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
 * Test "bad" RTask execution with execution-token.
 */
test('should unsuccessfully execute RTask with execution-token using "bad" values', function(t) {
    t.plan(4);

    var dBroker, rTask,
        executionToken = 'testTaskExecutionWithTokenBadScript',
        MAX_CONCURRENCY = 10,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            maxConcurrentTaskLimit: MAX_CONCURRENCY,
            logging: false
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notOk(rTaskResult.success, '!rTaskResult.success');
            t.equal(rTask.token, executionToken, 'execution-token');
        })
        .error(function(err) {
            // 
            // suppress valid task submit errors however non-task execution 
            // errors should fail the test
            //
            if (!err.task) {
                t.fail('dBroker failed: ' + err.get('error'));
            }
        })
        .idle(function() {
            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTask = rbroker.discreteTask({
        filename: fixtures.BAD_SCRIPT_NAME,
        directory: fixtures.BAD_DIR_NAME,
        author: fixtures.BAD_AUTHOR_NAME
    });

    rTask.token = executionToken;

    dBroker.submit(rTask);
});

/**
 * Test RTask execution with "good" task execution options.
 */
test('should successfully execute RTask with "good" task execution options', function(t) {
    t.plan(4);

    var dBroker, rTask,
        executionToken = 'testTaskExecutionWithToken',
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.equal(rTask.token, executionToken, 'execution-token');
        })
        .error(function(err) {
            var msg = err.task ? 'dBroker.submit(rTask) failed: ' :
                'dBroker failed: ';
            t.fail(msg + err.get('error'));
        })
        .idle(function() {
            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTask = rbroker.discreteTask(merge({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }, fixtures.good()));

    rTask.token = executionToken;

    dBroker.submit(rTask);
});

/**
 * Test RTask execution with "bad" task execution options.
 */
test('should unsuccessfully execute RTask with "bad" task execution options', function(t) {
    t.plan(3);

    var dBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials
        };

    dBroker = rbroker.discreteTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notOk(rTaskResult.success, '!rTaskResult.success');
        })
        .error(function(err) {
            // 
            // suppress valid task submit errors however non-task execution 
            // errors should fail the test
            //
            if (!err.task) {
                t.fail('dBroker failed: ' + err.get('error'));
            }
        })
        .idle(function() {
            dBroker.shutdown().then(function() {
                t.pass('dBroker.shutdown success');
            }, function(err) {
                t.fail('dBroker.shutdown failed: ' + err.get('error'));
            });
        });

    dBroker.submit(rbroker.discreteTask(merge({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }, fixtures.bad())));
});
