var hook = require('gith').create();

var execFile = require('child_process').execFile;

hook({repo: 'eolhing/labeli-router'}).on('all', function(payload)
{
    if(payload.branch === 'master')
        execFile('./hook.sh');
});

module.exports = hook;