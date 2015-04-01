JavaScript RBroker Framework for DeployR
========================================

The JavaScript RBroker Framework provides a simple yet powerful API that 
supports the rapid integration of R Analytics inside any browser or Node.js 
based application. Simply define an _RTask_, submit your task to an instance of 
_RBroker_ and then retrieve your task results. It really is that simple.

Links
-----

  * [Download](#downloading)
  * [Tutorial](http://deployr.revolutionanalytics.com/documents/dev/rbroker/)
  * [API Documentation](http://deployr.revolutionanalytics.com/documents/dev/rbroker-jsdoc)    
  * [Simple examples](#examples)
  * [Gulp, for building](#building)
  * [Tests](#tests)
  * [License](#license)

Downloading
============

There are a few diffrent was to obtaining the library depending on your 
environment and intended usage:

- `$ npm install rbroker` dependent on [Node.js](http://nodejs.org/download/)
- `$ git clone https://github.com/deployr/js-rbroker-framework.git`
- [Download Zip](https://github.com/deployr/js-rbroker-framework/archive/master.zip)
- Download specific [release](https://github.com/deployr/js-rbroker-framework/releases)

Environments
============

- Browser and Node.js

We recommend you [download and install](http://nodejs.org/download/) Node.js.
It is __not__ a requirement for the browser however using the JavaScript client 
library from within a server or from the command line in addition to the browser
can be powerful!

Browser
-------

If your environment is the browser the JavaScript client library can be found
here:

```
./rbroker/browser/rbroker.js
./rbroker/browser/rbroker.min.js
```

Node.js
-------

If your environment is Node then the entire root ```./rbroker/``` directory 
represents the JavaScript RBroker Framework as it uses the same source for both 
environments.

Installing
==========

Browser
-------

Using the browser version:

```
./rbroker/browser/rbroker.js
./rbroker/browser/rbroker.min.js
``` 

Include either one on your page in the `<script>` tag:

```html
<!-- Latest compiled raw JavaScript variation -->
<script src="./browser/rbroker.js"></script>

Or

<!-- Latest compiled minified JavaScript variation -->
<script src="./browser/rbroker.min.js"></script>
```

Node.js
-------

1. [Download and install](http://nodejs.org/download/) Node.js, which includes 
npm. npm, which stands for _node packaged modules_, is a way to manage 
development dependencies through Node.js.

2. ```$npm install rbroker```

3. `require` the directory:

```
var rbroker = require('rbroker');
```

Examples
========

The JavaScript RBroker Framework ships with a set of small examples under the 
__./rbroker/examples__ directory that run in both the browser and Node.js 
environments. The intention of the examples are to demonstrate the syntax and 
core areas of the JavaScript API. They are not intended to be a tutorial on how 
to write web applications.

We encourage you to start here and customize these examples and adapt them to 
suit your needs as you explore the API.

__./examples/tutorial:__ Introduces the three RBroker runtimes available. 
These runtimes are identified as:

1. Discrete Task Runtime
2. Pooled Task Runtime
3. Background Task Runtime

R Analytics File Dependencies
-----------------------------

The R scripts and data models used by these example applications are bundled by 
default within the DeployR repository within the tutorial-rbroker directory 
owned by testuser.

However, if for any reason your DeployR repository does not contain
these fiels you can add them using the DeployR Repository Manager as
follows:

1. Log in as testuser into the Repository Manager
2. Create a new directory called tutorial-rbroker
3. Upload each of the files found in the `./examples/analytics` directory
4. Set the access control on 5SecondNoOp.R to Public.

Running
-------

__Browser:__

- Copy the _.html_ files under `./examples` to your webserver
- Copy the `./examples/config.json` file under `./examples` to your webserver
- Set the DeployR endpoint and basic authentication credentials in 
`./examples/config.json`

```
{
	"endpoint": "http://dhost:port",
	"credentials": {
	   "username": "testuser",
	   "password": "changeme"
	}
}	
```

- Open your browser and select an example `.html` file to run. All examples 
simply print to stdout viewable from your browser debug console.

Alternatively, you can run the examples as is without moving them via the 
embedded web server if you have [Node.js](http://nodejs.org/download/) installed:

`$ npm install rbroker`

`$ cd ./rbroker`

`$ npm install`

`$ npm start`

Open your browser to _http://localhost:8080_ and select a example 
`.html` file to run. All examples simply print to stdout viewable from your 
browser debug console.

__Node.js:__

Set the DeployR endpoint and basic authentication credentials in 
`./examples/config.json`

```
{
	"endpoint": "http://dhost:port",
	"credentials": {
	   "username": "testuser",
	   "password": "changeme"
	}
}

```

From the command line run one of the Node.js examples:

```$ node ./examples/PATH_TO_EXAMPLE_FILE.js```

Building
========

This section only pertains to the _Browser_ environment.  

Our dev and release builds are handled by [gulp.js](http://gulpjs.com/).

Installation
------------

1. [Download and install](http://nodejs.org/download/) Node.js
2. `$ npm install rbroker`
3. `$ cd ./rbroker`
4. `$ npm install` This will install the development tools needed to build locally.

Targets
-------

 * `$ npm run build` - Runs a build.
 * `$ npm start` - Runs a build and starts a local webserver with LiveReload 
   on `http://localhost:8080` rebuilding on file changes.

Destination
-----------
The browser build destination is located in the __./browser__ directory.

Tests
=====

The DeployR JavaScript RBroker Framework also ships with a set of unit tests. 
See [here](https://github.com/deployr/js-rbroker-framework/tree/master/test) for
details.

License
=======

Copyright (C) 2010-2015 by Revolution Analytics Inc.

This program is licensed to you under the terms of Version 2.0 of the
Apache License. This program is distributed WITHOUT
ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
details.