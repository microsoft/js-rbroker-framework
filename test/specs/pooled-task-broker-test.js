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
    fixtures = require('../fixtures/pool');

console.log('A PooledTaskBroker\n');

/**
 * Test "good" endpoint.
 */
test('should successfully initialize with good endpoint address', function(t) {
    t.plan(2);

    var pBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .error(function(err) {
            t.fail('pBroker initialization failed "' + err.get('error') + '"');
        })
        .ready(function() {
            t.pass('pBroker initialization success');
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });
});

/**
 * Test "bad" endpoint.
 */
test('should fail initialization with bad endpoint address', function(t) {
    t.plan(1);

    var pBroker,
        brokerConfig = {
            host: fixtures.BAD_ENDPOINT,
            credentials: fixtures.credentials,
            logging: false
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .error(function(err) {
            t.pass('pBroker initialization failed "' + err.get('error') + '"');
        })
        .ready(function() {
            pBroker.shutdown().then(function() {}, function(err) {
                    t.fail('pBroker.shutdown failed: ' + err.get('error'));
                })
                .ensure(function() {
                    t.fail('pBroker initialization successful but should not have been');
                });
        });
});

/**
 * Test authenticated PooledBrokerfixtures.
 */
test('should authenticate with `Pooled Broker Config`', function(t) {
    t.plan(3);

    var pBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
        })
        .error(function(err) {
            var msg = err.task ? 'pBroker.submit(rTask) failed: ' :
                'pBroker failed: ';
            t.notOk(true, msg + err.get('error'));
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    pBroker.submit(rbroker.pooledTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }));
});

/**
 * Test authenticated PooBrokerConfig using bad credentials.
 */
test('should not authenticate with `Pooled Broker Config`', function(t) {
    t.plan(1);

    var pBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.BAD_CREDENTIALS,
            logging: false
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .error(function(err) {
            t.pass('rbroker.pooledTaskBroker failed: ' + err.get('error'));
        })
        .ready(function() {
            pBroker.shutdown().then(function() {}, function(err) {
                    t.fail('pBroker.shutdown failed: ' + err.get('error'));
                })
                .ensure(function() {
                    t.fail('authentication successful but should not have been');
                });
        })
});

/**
 * Test PooledBrokerConfig using custom pool size.
 */
test('should successfully execute with `Pooled Broker Config` using custom pool size', function(t) {
    t.plan(3);

    var pBroker,
        MAX_CONCURRENCY = 10,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            maxConcurrentTaskLimit: MAX_CONCURRENCY,
            logging: false
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
        })
        .error(function(err) {
            var msg = err.task ? 'pBroker.submit(rTask) failed: ' :
                'pBroker failed: ';
            t.notOk(true, msg + err.get('error'));
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    pBroker.submit(rbroker.pooledTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }));
});

/**
 * Test PooledBrokerConfig using custom pool creation options.
 */
test('should successfully execute with `Pooled Broker Config` using custom pool creation options', function(t) {
    t.plan(3);

    var pBroker,
        MAX_CONCURRENCY = 10,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            maxConcurrentTaskLimit: MAX_CONCURRENCY,
            pool: fixtures.good()
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
        })
        .error(function(err) {
            console.log(err);
            console.log(err.get('error'));
            var msg = err.task ? 'pBroker.submit(rTask) failed: ' :
                'pBroker failed: ';
            t.notOk(true, msg + err.get('error'));
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    pBroker.submit(rbroker.pooledTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }));
});


/**
 * Test PooledBrokerConfig using "bad" custom pool creation options that can be 
 * relied upon to cause pool initialization failures. 
 */
test('should raise pool initialization failures using "bad" custom pool creation options', function(t) {
    t.plan(1);

    var pBroker,
        MAX_CONCURRENCY = 10,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            maxConcurrentTaskLimit: MAX_CONCURRENCY,
            releaseGridResources: true,
            pool: fixtures.bad()
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .error(function(err) {
            t.pass('pBroker initialization failed "' + err.get('error') + '"');
        })
        .ready(function() {
            pBroker.shutdown().then(function() {}, function(err) {
                    t.fail('pBroker.shutdown failed: ' + err.get('error'));
                })
                .ensure(function() {
                    t.fail('pBroker initialization successful but should not have been');
                });
        });
});

/**
 * Test RTask execution with `execution-token`.
 */
test('should execute RTask successfully with `execution-token`', function(t) {
    t.plan(4);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testTaskExecutionWithTokenStandardQueueGood',
        pBroker, rTask;

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.equal(rTask.token, executionToken, 'execution-token');
        })
        .error(function(err) {
            var msg = err.task ? 'pBroker.submit(rTask) failed: ' :
                'pBroker failed: ';

            t.notOk(false, msg + err.get('error'));
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTask = rbroker.pooledTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    });

    rTask.token = executionToken;

    pBroker.submit(rTask);
});

/**
 * Test PooledBrokerConfig RTask priority execution with execution-token.
 */
test('should execute priority RTask successfully with `execution-token`', function(t) {
    t.plan(4);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testTaskExecutionWithTokenPriorityQueueGood',
        pBroker, rTask;

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
            t.equal(rTask.token, executionToken, 'execution-token');
        })
        .error(function(err) {
            var msg = err.task ? 'pBroker.submit(rTask) failed: ' :
                'pBroker failed: ';

            t.notOk(false, msg + err.get('error'));
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTask = rbroker.pooledTask({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }, true);

    rTask.token = executionToken;

    pBroker.submit(rTask);
});

/**
 * Test multiple "good" RTask executions distributed across the standard and 
 * priority task queues.
 */
test('should execute multiple "good" RTask executions distributed across standard and priority task queues', function(t) {
    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            maxConcurrentTaskLimit: 10,
            logging: false
        },
        executionToken = 'testMultipleTaskExecutionWithMixedPriority',
        pBroker = null,
        rTasks = [],
        priorityTaskTokens = [],
        standardTaskTokens = [],
        rTaskResults = [],
        priorityTask = true,
        multipleTaskTestSize = 10;

    t.plan(4 + multipleTaskTestSize);

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            rTaskResults.push(rTaskResult);
        })
        .error(function(err) {
            var msg = err.task ? 'pBroker.submit(rTask) failed: ' :
                'pBroker failed: ';
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

            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        }); // ideal

    for (var i = 0; i < multipleTaskTestSize; i++) {
        var rTask = rbroker.pooledTask({
                filename: 'Histogram of Auto Sales',
                directory: 'root',
                author: 'testuser'
            }),
            rTaskToken;

        rTasks.push(rTask);
        rTaskToken = pBroker.submit(rTask, priorityTask);

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
    t.plan(5);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testTaskExecutionWithTokenBadScript',
        pBroker, rTask;

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notOk(rTaskResult.success, '!rTaskResult.success');
            t.notEqual(rTaskResult.failure, null, 'rTaskResult.failure');
            t.equal(rTask.token, executionToken, 'execution-token');
        })
        .error(function(err) {
            // 
            // suppress valid task submit errors however non-task execution 
            // errors should fail the test
            //
            if (!err.task) {
                t.fail('pBroker failed: ' + err.get('error'));
            }
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTask = rbroker.pooledTask({
        filename: 'This Script Does Not Exist',
        directory: 'root',
        author: 'testuser'
    });

    rTask.token = executionToken;

    pBroker.submit(rTask);
});

/**
 * Test "bad" code-block based RTask execution with execution-token.
 */
test('should unsuccessfully execute RTask with "bad" code-block and `execution-token`', function(t) {
    t.plan(5);

    var brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials,
            logging: false
        },
        executionToken = 'testTaskExecutionWithTokenBadCode',
        pBroker, rTask;

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notOk(rTaskResult.success, '!rTaskResult.success');
            t.notEqual(rTaskResult.failure, null, 'rTaskResult.failure');
            t.equal(rTask.token, executionToken, 'execution-token');
        })
        .error(function(err) {
            // 
            // suppress valid task submit errors however non-task execution 
            // errors should fail the test
            //
            if (!err.task) {
                t.fail('pBroker failed: ' + err.get('error'));
            }
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTask = rbroker.pooledTask({
        code: 'x y' // invalid R code
    });

    rTask.token = executionToken;

    pBroker.submit(rTask);
});

/**
 * Test RTask execution with "good" task execution options.
 */
test('should successfully execute RTask with "good" task execution options', function(t) {
    t.plan(3);

    var pBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.ok(rTaskResult.success, 'rTaskResult.success');
        })
        .error(function(err) {
            var msg = err.task ? 'pBroker.submit(rTask) failed: ' :
                'pBroker failed: ';
            t.notOk(true, msg + err.get('error'));
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    pBroker.submit(rbroker.pooledTask(merge({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }, fixtures.good())));
});

/**
 * Test RTask execution with "bad" task execution options.
 */
test('should unsuccessfully execute RTask with "bad" task execution options', function(t) {
    t.plan(4);

    var pBroker,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notOk(rTaskResult.success, '!rTaskResult.success');
            t.notEqual(rTaskResult.failure, null, 'rTaskResult.failure');
        })
        .error(function(err) {
            // 
            // suppress valid task submit errors however non-task execution 
            // errors should fail the test
            //
            if (!err.task) {
                t.fail('pBroker failed: ' + err.get('error'));
            }
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    pBroker.submit(rbroker.pooledTask(merge({
        filename: 'Histogram of Auto Sales',
        directory: 'root',
        author: 'testuser'
    }, fixtures.bad())));
});

/**
 * Cancel long running RTask.
 */
test('should successfully cancel long running RTask', function(t) {
    t.plan(3);

    var pBroker, rTaskToken,
        brokerConfig = {
            host: fixtures.endpoint,
            credentials: fixtures.credentials
        };

    pBroker = rbroker.pooledTaskBroker(brokerConfig)
        .complete(function(rTask, rTaskResult) {
            t.notEqual(rTaskResult, null, 'rTaskResult');
            t.notOk(rTaskResult.success, 'rTaskResult.success');
        })
        .error(function(err) {
            // 
            // suppress valid task submit errors however non-task execution 
            // errors should fail the test
            //
            if (!err.task) {
                t.fail('pBroker failed: ' + err.get('error'));
            }
        })
        .start(function(rTask) {            
            //
            // wait 5 seconds for the task submit to get processed on the server
            //
            setTimeout(function() {
                rTaskToken.cancel(true);
            }, 5000);
        })
        .idle(function() {
            pBroker.shutdown().then(function() {
                t.pass('pBroker.shutdown success');
            }, function(err) {
                t.fail('pBroker.shutdown failed: ' + err.get('error'));
            });
        });

    rTaskToken = pBroker.submit(rbroker.pooledTask({
        code: 'Sys.sleep(10)'
    }));
});