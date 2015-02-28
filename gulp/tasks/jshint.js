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

var gulp   = require('gulp'),
    jshint = require("gulp-jshint"),    
    config = require('../config');
    
/*
 * Task: jshist
 *
 * Lint's the entire `deployr` source.
 */
gulp.task('jshint', function () {
    return gulp.src([config.name + '.js', './lib*.js'])
           .pipe(jshint({lookup: true}))
           .pipe(jshint.reporter('default'));
});
