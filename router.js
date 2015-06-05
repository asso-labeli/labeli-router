var httpProxy = require('http-proxy');
var http = require('http');

var proxy = httpProxy.createProxyServer({});

var routes = {
    // Router
    'hook.labeli.org' : 'http://localhost:9000',
    // Api
    'api.labeli.org' : 'http://localhost:9010',
    'hook.api.labeli.org' : 'http://localhost:9011',
    // Website
    'next.labeli.org' : 'http://localhost:9020',
    'hook.next.labeli.org' : 'http://localhost:9021',
};

function getRouteFor(host){
    if (routes[host] == undefined)
        return "http://localhost:9020";

    return routes[host];
}

var router = http.createServer(function(req, res)
{
    proxy.web(req, res, {target : getRouteFor(req.headers.host)});
});

router.listen(80);
