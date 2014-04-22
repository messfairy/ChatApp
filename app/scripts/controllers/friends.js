'use strict';

angular.module('chatAppApp')
  .controller('FriendsCtrl', ['$scope', '$resource',function ($scope, $resource) {
        var friendsList = $resource('/api/friends');
        var friends = friendsList.query(function(){
            console.log('success accquired!');
        });
        $scope.friends = friends;
    }]);
