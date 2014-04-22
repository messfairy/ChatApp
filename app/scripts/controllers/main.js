'use strict';

angular.module('chatAppApp')
  .controller('MainCtrl', function ($timeout, $scope, $location) {
    $timeout(function(){
        $location.path('/msg');
    }, 3000);
  });
