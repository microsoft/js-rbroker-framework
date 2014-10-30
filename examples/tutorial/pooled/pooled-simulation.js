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
 * usage: $ node pooled-simulation.js
 * output: Task execution lifecycle logged to stdout
 *
 * Example using a PooledTaskBroker.
 *
 * 1. Prepare 'Pooled Broker Configuration' instance.
 *
 * This example creates an authenticated `PooledTaskBroker`
 * to act as our scoring engine.
 *
 * The following steps initialize the pool of
 * R sessions dedicated to our scoring engine.
 *
 * In this example, we pre-initialize the workspace
 * for each R session in the pool to contain the
 * R model used when scoring customer requests.
 *
 * The R model, insurModel.rData, is loaded from
 * the DeployR repository into each workspace at
 * startup time. Preloading the R model at startup
 * reduces runtime overhead and improves overall
 * response times in the application.
 */

 var deployr = require('deployr'),
     rbroker = require('../../../rbroker'),
     config  = require('../../config'),
     ScoringEngineSimulation = require('../simulations/nodejs/scoring-engine-simulation');

var DEMO6_TARGET_POOL_SIZE = 10;

var brokerConfig = {
   maxConcurrentTaskLimit: DEMO6_TARGET_POOL_SIZE,
   host: config.host,
   cors: config.cors,
   credentials: config.credentials,
   releaseGridResources: false,
   logging: false,
   // --- pool options ---
   // For all `pool` option parameters:
   // @see http://deployr.revolutionanalytics.com/documents/dev/api-doc/guide/workingprojects.html#projectpool
   pool: {
      preloadobjectname: config.constants.TUTORIAL_INSURANCE_MODEL,
      preloadobjectauthor: config.constants.TUTORIAL_REPO_OWNER,
      preloadobjectdirectory: config.constants.TUTORIAL_REPO_DIRECTORY
   }
};

/*
 * 2. Create RBroker instance.
 *
 * The application designer, in conjunction with the
 * DeployR administrator who provisions and sets
 * limits on DeployR grid resources, need to decide how
 * many R sessions will be reserved for the `PooledRBroker`
 * used by our scoring engine application.
 */

console.log('About to create pooledTaskBroker.');

var pBroker = rbroker.pooledTaskBroker(brokerConfig);

console.log('R session pool size, requested: ' +
   DEMO6_TARGET_POOL_SIZE + ' , actual: ' +
   pBroker.maxConcurrency() + '\n');

/*
 * 3. Create an `RTaskAppSimulator`. It will drive
 * sample customer data scoring requests through the
 * RBroker.
 */

var simulation = new ScoringEngineSimulation(config);

/*
 * 4. Launch RTaskAppSimulator simulation.
 */
pBroker.simulateApp(simulation);
