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
(function(global) {

    var taskType = {
        DISCRETE: 'DISCRETE',
        POOLED: 'POOLED',
        BACKGROUND: 'BACKGROUND'
    };

    /*
     * RBroker runtime summary statistics (print) helper class.
     */
    var printHelper = {

        /**
         * Prints RBroker Runtime Stats to console output.
         */
        stats: function(stats) {
            var displayAvgTimeOnCode = 0,
                displaySAvgTimeOnServer = 0,
                displayAvgTimeOnCall = 0,
                maxConcurrency = stats.maxConcurrency;

            console.log('[progress]-----------------------------------------');
            console.log('RBroker Activity Summary');
            console.log('RBroker: Max Concurrency [ ' + maxConcurrency + ' ]');
            console.log('RBroker: Total Tasks Run [ ' +
                stats.totalTasksRun + ' ]');
            console.log('RBroker: Tasks Ok [ ' +
                stats.totalTasksRunToSuccess + ' ] Fail [ ' +
                stats.totalTasksRunToFailure + ' ]');

            if (stats.totalTasksRunToSuccess > 0) {
                displayAvgTimeOnCode =
                    stats.totalTimeTasksOnCode / stats.totalTasksRunToSuccess;
                displayAvgTimeOnServer =
                    stats.totalTimeTasksOnServer / stats.totalTasksRunToSuccess;
                displayAvgTimeOnCall =
                    stats.totalTimeTasksOnCall / stats.totalTasksRunToSuccess;
            }

            console.log('RBroker: Task Average Time On Code [ ' +
                displayAvgTimeOnCode + ' ]');
            console.log('RBroker: Task Average Time On Server [ ' +
                displayAvgTimeOnServer + ' ]');
            console.log('RBroker: Task Average Time On Call   [ ' +
                displayAvgTimeOnCall + ' ]\n');

            console.log('---------------------------------------------------');
        },

        /**
         * Prints errors to console output.
         */
        error: function(err) {
            console.log('[error]--------------------------------------------');
            console.log('Status[fail]: cause= ' + err);
            console.log('---------------------------------------------------');
        },

        /**
         * Prints RTaskResult to console output.
         */
        results: function(task, result) {
            console.log('[completed]----------------------------------------');
            console.log('Task: ' + task);

            switch (result.type) {

                case taskType.DISCRETE:
                    if (result.success) {
                        console.log('Status[ok]: [ code : ' +
                            result.timeOnCode + ' , server : ' +
                            result.timeOnServer + ' , call : ' +
                            result.timeOnCall + ' ]');
                    } else {
                        console.log('Status[fail]: cause=' + result.failure);
                    }
                    break;

                case taskType.POOLED:
                    if (result.success) {
                        console.log('Status[ok]: [ code : ' +
                            result.timeOnCode + ' , server : ' +
                            result.timeOnServer + ' , call : ' +
                            result.timeOnCall + ' ]');
                    } else {
                        console.log('Status[fail]: cause=' + result.failure);
                    }
                    break;

                case taskType.BACKGROUND:
                    if (result.success) {
                        console.log('Status[ok]: [ server : ' +
                            result.timeOnServer + ' , call : ' +
                            result.timeOnCall + ' ]');
                    } else {
                        console.log('Status[fail]: cause=' + result.failure);
                    }
                    break;
            }
            console.log('---------------------------------------------------');
        }
    };

    // -- export for both Browser|Node.js so we can reuse for both envs. --
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports =  printHelper;
        }
        exports.printHelper = printHelper;
    } else {
        global.printHelper = printHelper;
    }

})(typeof window === 'undefined' ? this : window);
