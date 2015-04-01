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
    ' * Copyright (C) 2010-2015 by Revolution Analytics Inc.',
    ' * Released under the Apache License 2.0',
    ' * http://www.apache.org/licenses/LICENSE-2.0',    
    ' *',
    ' * Includes:', 
    ' *   - D.js: http://malko.github.io/D.js',
    ' *   - enum: https://www.npmjs.org/package/enum',
    ' *   - merge: https://www.npmjs.org/package/merge',
    ' *   - selfish: https://www.npmjs.org/package/selfish',    
    ' *',
    ' * D',
    ' *',
    ' * Copyright (C) 2013 Jonathan Gotti <jgotti at jgotti dot net>', 
    ' * Open Source Initiative OSI - The MIT License',
    ' *',    
    ' * Permission is hereby granted, free of charge, to any person obtaining',
    ' * a copy of this software and associated documentation files (the,',        
    ' * "Software"), to deal in the Software without restriction, including',
    ' * without limitation the rights to use, copy, modify, merge, publish,', 
    ' * distribute, sublicense, and/or sell copies of the Software, and to',
    ' * permit persons to whom the Software is furnished to do so, subject to',
    ' * the following conditions:',
    ' *',
    ' * The above copyright notice and this permission notice shall be',
    ' * included in all copies or substantial portions of the Software.',
    ' *',
    ' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND',
    ' * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF',
    ' * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND',
    ' * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE',
    ' * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION',
    ' * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION',
    ' * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    ' *',
    ' * enum',
    ' *',
    ' * Copyright (c) 2015 Adriano Raiano',
    ' * Open Source Initiative OSI - The MIT License',
    ' *',
    ' * Permission is hereby granted, free of charge, to any person obtaining ',
    ' * a copy of this software and associated documentation files ',
    ' * (the "Software"), to deal in the Software without restriction, ',
    ' * including without limitation the rights to use, copy, modify, merge', 
    ' * publish, distribute, sublicense, and/or sell copies of the Software, ',
    ' * and to permit persons to whom the Software is furnished to do so, ',
    ' * subject to the following conditions:',
    ' *',
    ' * The above copyright notice and this permission notice shall be ',
    ' * included in all copies or substantial portions of the Software.',
    ' *',
    ' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, ',
    ' * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF ',
    ' * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.',
    ' * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY ',
    ' * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, ',
    ' * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE ',
    ' * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    ' *',
    ' * merge',
    ' *',
    ' * Copyright (c) 2014 yeikos - http://www.yeikos.com', 
    ' * Open Source Initiative OSI - The MIT License',
    ' *',    
    ' * Permission is hereby granted, free of charge, to any person obtaining',
    ' * a copy of this software and associated documentation files (the,',        
    ' * "Software"), to deal in the Software without restriction, including',
    ' * without limitation the rights to use, copy, modify, merge, publish,', 
    ' * distribute, sublicense, and/or sell copies of the Software, and to',
    ' * permit persons to whom the Software is furnished to do so, subject to',
    ' * the following conditions:',
    ' *',
    ' * The above copyright notice and this permission notice shall be',
    ' * included in all copies or substantial portions of the Software.',
    ' *',
    ' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND',
    ' * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF',
    ' * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND',
    ' * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE',
    ' * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION',
    ' * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION',
    ' * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    ' *',
    ' * selfish',
    ' *',
    ' * Copyright 2011 Irakli Gozalishvili. All rights reserved',
    ' * Open Source Initiative OSI - The MIT License',
    ' *',
    ' * Permission is hereby granted, free of charge, to any person obtaining',
    ' * a copy of this software and associated documentation files (the,',        
    ' * "Software"), to deal in the Software without restriction, including',
    ' * without limitation the rights to use, copy, modify, merge, publish,', 
    ' * distribute, sublicense, and/or sell copies of the Software, and to',
    ' * permit persons to whom the Software is furnished to do so, subject to',
    ' * the following conditions:',
    ' *',
    ' * The above copyright notice and this permission notice shall be',
    ' * included in all copies or substantial portions of the Software.',
    ' *',
    ' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND',
    ' * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF',
    ' * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND',
    ' * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE',
    ' * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION',
    ' * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION',
    ' * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    ' *',
    ' * Date: <%= date.today %>',
    ' */',	
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