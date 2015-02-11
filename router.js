var express = require('express');
var vhost = require('vhost');

var app = express();
app.use(vhost('labeli.org',                 require('../website/server.js')));
app.use(vhost('www.labeli.org',             require('../website/server.js')));
app.use(vhost('api.labeli.org',             require('../api/api.js')));
app.use(vhost('hook.labeli.org',			require('./hook.js')));
app.listen(80);