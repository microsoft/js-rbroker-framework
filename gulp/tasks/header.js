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
    header = require('gulp-header'),
    config = require('../config.js'),
    pkg    = config.pkg,
    banner = [
	'/*!',
	' * `<%= pkg.name %>` The DeployR RBroker Library v<%= pkg.version %>',
    ' * <%= pkg.homepage %>',
    ' *',
    ' * Includes:', 
    ' *   - when: https://www.npmjs.org/package/when',
    ' *   - enum: https://www.npmjs.org/package/enum',
    ' *   - selfish: https://www.npmjs.org/package/selfish',
    ' *   - merge: https://www.npmjs.org/package/merge',    
    ' *',
    ' * Copyright (C) 2010-2014 by Revolution Analytics Inc.',
    ' * Released under the Apache License 2.0',
    ' * http://www.apache.org/licenses/LICENSE-2.0',
    ' * Date: <%= date.today %>',
    '*/',	
  ''].join('\n');  


function today() {
	var today = new Date(),
	    dd    = today.getDate(),
	    mm    = today.getMonth() + 1, // January is 0
	    yyyy  = today.getFullYear();

	if(dd < 10) { dd = '0' + dd; } 
	if(mm < 10) { mm = '0' + mm; } 

	return  yyyy + '-' + mm + '-' + dd;
}  

/*
 * Task: header
 *
 * Prefix the copyright information at the top.
 */
gulp.task('header', ['uglifyjs'], function() {
	return gulp.src(config.dist + '/*.js')
 	      .pipe(header(banner, { pkg : config.pkg, date: { today: today() } } ))
 	      .pipe(gulp.dest(config.dist));
});