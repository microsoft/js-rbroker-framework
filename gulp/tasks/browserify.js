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
 
var browserify = require('browserify'),
    gulp       = require('gulp'),
    source     = require('vinyl-source-stream'),
    plumber    = require('gulp-plumber'), 
    onError    = require('../util/errors'),    
    config     = require('../config');

/*
 * Task: browserify
 *
 * Runs `browserify` on the `deployr` source.
 */
gulp.task('browserify', function() {		
	return browserify({ debug: true, standalone: config.name, entries: ['./' + config.name + '.js'] })	  
	       .ignore('http')
	       .bundle()	       
	       .pipe(plumber({ errorHandler: onError}))
	       .pipe(source(config.name + '.js'))		
	       .pipe(gulp.dest(config.dist));
});