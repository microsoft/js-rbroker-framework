/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more
 * details.
 */

var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    config  = require('../config');

/*
 * Task: connect
 *
 * Run a webserver for viewing ./examples HTML samples (with LiveReload)
 */
gulp.task('connect', ['build'], function() {
    connect.server({
        root: [config.root +'/examples/', config.dist],
        port: config.port,
        livereload: true
    });

    // Watch JS
    gulp.watch([config.name + '.js', './lib/**/*.js'], ['build']);

    // Watch Examples that use HTML and livereload
    gulp.watch('./examples/**/*.html', ['build']);
});
