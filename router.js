var express = require('express');
var vhost = require('vhost');

var app = express();

// Website
try
{
    var website = require('../website/server.js');
    if(website != null)
    {
        app.use(vhost('next.labeli.org',		website));
        app.use(vhost('*.website.labeli.org',   website));
    }
}
catch(e)
{
    console.log("Website couldn't be started");
    console.log(e);
}

// Api
try
{
    var api = require('../api/api.js');
    if(api != null)
    {
        app.use(vhost('api.labeli.org',		api));
        app.use(vhost('*.api.labeli.org',   api));
    }
}
catch(e)
{
    console.log("Api couldn't be started");
    console.log(e);
}

// Router
try
{
    app.use(vhost('hook.labeli.org',		require('./hook.js')));
}
catch(e)
{
    console.log("Router hook couldn't be started");
    console.log(e);
}

app.listen(80);