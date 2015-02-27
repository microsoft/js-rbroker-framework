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
 * Start the `Connect` HTTP server for viewing ./examples HTML samples.
 *
gulp.task('connect', ['examples-watch'], function(){
	var SEP = '\n============================================================\n',
  	    app = connect()
		//.use(connect.logger('dev'))
		.use(connect.static(config.root));

	http.createServer(app).listen(config.port);

	setTimeout(function() {
		gutil.log('\n' + SEP + 'The "examples" webserver is listening on port: '  +
			gutil.colors.green(config.port) + '\n\n' +
			'http://localhost:' + config.port + '/examples/tutorial/PATH_TO_EXAMPLE.html' +
			SEP);
	}, 1000);
});
*/

console.log(config.d)
/*
 * Task: connect
 *
 * Run a webserver for viewing ./examples HTML samples (with LiveReload)
 */
gulp.task('connect', function() {
    connect.server({
        root: [config.root +'/examples/', config.d],
        port: config.port,
        livereload: true
    });
    
    // Watch JS
    gulp.watch([config.name + '.js', './lib/**/*.js'], ['build']);

    // Watch Examples that use HTML and livereload
    gulp.watch('./examples/**/*.html', ['html']);
});
