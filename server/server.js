/**
 * Module dependencies
 */

var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 9000);
app.set('views', process.cwd() + '/app');
app.set('view engine', 'html');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(process.cwd() + '/app')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
    app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
    // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/views/:name', routes.views);

// JSON API
app.get('/api/friends', api.friends);
app.get('/api/friends/:id', api.getAFriend);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

//io.socket
var io = require('socket.io').listen(7000);
io.sockets.on('connection', function(socket){
    socket.broadcast.emit('a connector');
    socket.on('msg', function(msg){
        socket.emit(msg);
    });
});
/**
 * Start Server
 */

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});