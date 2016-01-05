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

/*
 * This ScoringEngineSimulation is a simple extension
 * to the SampleAppSimulation class used by PooledSimulation.
 *
 * The addition of the SIMULATE_TASK_RATE_PER_MINUTE parameter
 * allows the app simulation to mimick more "real world"
 * workloads by adjusting the rate at which RTask are
 * submitted to the RBroker for execution.
 *
 * Note, this simulation also demonstrates how input values
 * can be passed to each RTask and how output values can
 * be retrieved following the execution of each task.
 *
 * In this example, a "customerid" input value is passed on
 * each RTask. While this example passes a simple index
 * value for "customerid" a "real world" app would like pass
 * a database record id along with additional customer specific
 * data parameters.
 *
 * In this example, the value of the "score" is returned as a
 * DeployR-encoded R object and made available on the result
 * for the RTask.
 */
(function(global) {

   function ScoringEngineSimulation(config) {
      this.consts = config.constants;
   }

   ScoringEngineSimulation.prototype = {

      /**
       * @IMPORTANT - The `simulateApp(broker)` method must be implemented.
       */
      simulateApp: function(pBroker) {
         var SIMULATE_TOTAL_TASK_COUNT = 10,
            SIMULATE_TASK_RATE_PER_MINUTE = 0,
            simulationStartTime = 0,
            sleep = 0,
            consts = this.consts,
            RIn = deployr.RInput;

         /*
          * The following logic controls the simulated rate of
          * RTasks being submitted to the RBroker, essentially
          * controlling the simulated workload.
          */
         function staggeredLoad(tasksPushedToBroker, sleep) {
            /*
             * Prepare RTask for real-time scoring.
             *
             * In this example, we pass along a unique customer ID
             * with each RTask. In a real-world application, the input
             * parameters on each RTask will vary depending on need,
             * such as customer database record keys and supplementary
             * parameter data to facilitate the scoring.
             */
            setTimeout(function() {

               var rTask = rbroker.pooledTask({
                  filename: consts.TUTORIAL_RTSCORE_SCRIPT,
                  directory: consts.TUTORIAL_REPO_DIRECTORY,
                  author: consts.TUTORIAL_REPO_OWNER,
                  rinputs: [RIn.numeric('customerid', tasksPushedToBroker)],
                  routputs: ['score']
               });

               pBroker.submit(rTask, false);
               console.log('Submitted task ' + rTask + '\n');
            }, sleep);
         }

         /*
          * Listen for the RTask events.
          *
          * .complete|.error|.progress|.idel are aliases for:
          * -------------------------------------------------------
          * .on('complete', fn)
          * .on('error', fn);
          * .on('progress', fn)
          * .on('idel'), fn)
          */
         pBroker.complete(function(rTask, rTaskResult) {
               printHelper.results(rTask, rTaskResult);
            })
            .error(function(err) {
               printHelper.error(err);
            })
            .progress(function(status) {
               printHelper.stats(status);
            })
            .idle(function() {
               pBroker.shutdown()
                  .then(function() {
                     console.log('Pooled: RBroker shutdown `successful`.');
                  }, function() {
                     console.log('Pooled: RBroker has shutdown `failure`.');
                  });
            });

         /*
          * Submit task(s) to RBroker for execution.
          */

         console.log('About to simulate ' +
            SIMULATE_TOTAL_TASK_COUNT + ' tasks at a rate of ' +
            SIMULATE_TASK_RATE_PER_MINUTE + ' tasks per minutes.');

         simulationStartTime = new Date().getTime();

         for (var tasksPushedToBroker = 0; 
              tasksPushedToBroker < SIMULATE_TOTAL_TASK_COUNT; 
              tasksPushedToBroker++) {

            /*
             * The following logic controls the simulated rate of
             * RTasks being submitted to the RBroker, essentially
             * controlling the simulated workload.
             */
            if (tasksPushedToBroker < (SIMULATE_TOTAL_TASK_COUNT)) {
               if (SIMULATE_TASK_RATE_PER_MINUTE !== 0) {
                  var staggerLoadInterval = 60 / SIMULATE_TASK_RATE_PER_MINUTE;
                  sleep += (staggerLoadInterval * 1000);
               }
               staggeredLoad(tasksPushedToBroker, sleep);
            }
         }
      }
   };
   
   global.ScoringEngineSimulation = ScoringEngineSimulation;

})(window);