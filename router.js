var express = require('express');
var vhost = require('vhost');

var app = express();

// Website
//app.use(vhost('labeli.org',       	require('../website/server.js')));
app.use(vhost('next.labeli.org',		require('../website/server.js')));
app.use(vhost('*.website.labeli.org',   require('../website/server.js')));

// Api
app.use(vhost('api.labeli.org',    		require('../api/api.js')));
app.use(vhost('*.api.labeli.org',  		require('../api/api.js')));

// Router hook
app.use(vhost('hook.labeli.org',		require('./hook.js')));

app.listen(80);