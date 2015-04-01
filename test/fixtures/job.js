/*!
 * Copyright (C) 2010-2015 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var deployr = require('deployr'),
    when = require('when'),
    merge = require('merge'),
    config = require('../config');

var JOB_DONE_STATES = {
    COMPLETED: 'Completed',
    CANCELLED: 'Cancelled',
    INTERRUPTED: 'Interrupted',
    FAILED: 'Failed',
    ABORTED: 'Aborted'
};

function queryJob(ruser, jobID) {
    return deployr.io('/r/job/query')
        .data({
            job: jobID
        })
        .share(ruser.getCookies())
        .promise();
};

module.exports = merge({

    /*
     * Following a unit test all artifacts assocated with an
     * RJob should be removed from the DeployR database. This
     * implementation removes the RJob and the associated
     * RProject if one was generated as a result of the RJob.
     *
     * Note, this method will not throw any Exceptions.
     */
    deleteJobArtifacts: function(ruser, jobID) {
        //
        // This runs in parrell to the below        
        // 1. /r/job/query
        // 2. /r/project/delete
        //
        deployr.io('/r/job/query')
            .data({
                job: jobID
            })
            .share(ruser.getCookies())
            .end(function(res) {
                return {
                    project: res.get('project')
                }
            })
            .io('/r/project/delete')
            .end();

        //
        // This runs in parrell to the above
        // 1. /r/job/cancel
        // 2. /r/job/delete
        // They are slipt up to ensure `/r/job/cancel` and `/r/job/delete`
        // get invoked
        //
        return deployr.io('/r/job/cancel')
            .data({
                job: jobID
            })
            .share(ruser.getCookies())
            .end()
            .io('/r/job/delete')
            .data({
                job: jobID
            })
            .promise();
    },

    /*
     * Test and verify that a Job has reached a given "status".
     * This implementation will busy-wait for up to 2 minutes
     * for the Job to complete, otherwise it returns failure.
     */
    verifyJobExitStatus: function(ruser, jobID, status) {
        var statusCheck = {
            id: null,
            PING_INTERVAL: 1000,
            TWO_MINUTES: 120000,

            start: function() {
                var self = this,
                    time = 0,
                    TWO_MINUTES = this.TWO_MINUTES,
                    PING_INTERVAL = this.PING_INTERVAL,
                    stop = function(res) {
                        self.stop(res);
                    };

                clearInterval(this.id);

                this.id = setInterval(function() {
                    time = time + PING_INTERVAL;

                    if (time >= TWO_MINUTES) {
                        stop();
                    }

                    queryJob(ruser, jobID).then(stop, stop);

                }, PING_INTERVAL);

                queryJob(ruser, jobID).then(stop, stop);

                this.defer = when.defer();

                return this.defer.promise;
            },

            stop: function(res) {
                if (res) {
                    if (!res.get('success')) {
                        clearInterval(this.id);
                        this.defer.resolve({
                            status: false,
                            cause: res.get('error')
                        });
                    } else {
                        if (res.get('status') === status) {
                            //
                            // status matches status to be 
                            // verified, break.
                            //
                            clearInterval(this.id);
                            this.defer.resolve({
                                status: true,
                                cause: status
                            });
                        } else if (JOB_DONE_STATES[res.get('status').toUpperCase()]) {
                            //
                            // JobDetails.status matches a "done"
                            // state that is not the state to be
                            // verified, so break.
                            //
                            clearInterval(this.id);
                            this.defer.resolve({
                                status: false,
                                cause: 'status matches a "done" state ' +
                                    'that is not the state to be verified.'
                            });
                            //this.defer.reject('status matches a "done" state ' +
                            //   'that is not the state to be verified.');                            
                        } else { /* continue job status checks */ }
                    }
                } else {
                    clearInterval(this.id);
                    this.defer.resolve({
                        status: false,
                        cause: 'timeout after 2 minutes.'
                    });
                }
            }
        };

        return statusCheck.start();
    }
}, require('./common'));
