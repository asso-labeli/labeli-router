var hook = require('gith').create(9000);

var execFile = require('child_process').execFile;

hook({repo: 'asso-labeli/labeli-router'}).on('all', function(payload)
{
    if(payload.branch === 'master')
        execFile('./hook.sh');
});

hook;