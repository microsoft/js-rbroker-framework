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

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    rename  = require("gulp-rename"),
    onError = require('../util/errors'),      
    config  = require('../config');

/*
 * Task: uglifyjs
 */
gulp.task('uglify', ['browserify'], function() {
	return gulp.src(['./browser/' + config.name + '.js'])
	       .pipe(plumber({ errorHandler: onError }))
	       .pipe(uglify())
           .pipe(rename({
              extname: '.min.js'
           }))
	       .pipe(gulp.dest('./browser/'));	       
});