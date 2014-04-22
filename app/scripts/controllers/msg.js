'use strict';

angular.module('chatAppApp')
  .controller('MsgCtrl', ['$scope', 'wsService',function ($scope, wsService) {
        $scope.msgList = wsService.msgList;
        wsService.connect('http://message.me:7000');
        wsService.acceptMsg($scope.acceptor);
        $scope.submit = function(){
            wsService.sendMsg($scope.sender);
        }
    }]);
