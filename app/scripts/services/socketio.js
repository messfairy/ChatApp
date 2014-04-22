angular.module('chatAppApp').service('wsService', function WSService(){
    var socket;
    var msgList = this.msgList = [];
    this.connect = function(url){
        socket = io.connect(url);
    };
    this.sendMsg = function(userName){
        socket&&socket.emit(userName, {data: userName});
    };
    this.acceptMsg = function(userName){
        socket&&socket.on(userName, function(data){
            msgList.add(data.data);
        });
    };
});