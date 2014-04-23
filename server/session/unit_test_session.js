//session部份的使用方法
var sessionManager = require('./session_mem');
//var sessionManager = require('./session_redis');
 
sessionManager.startSession(
    request,
    response,
    function( request, response ) {
        var session = this;  // must be write this line for clone a session object
        // todo : write something for handle session object
        // session.set('key', 'my value');
        // var value = session.get('key');
    }
);