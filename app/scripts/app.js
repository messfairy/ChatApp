'use strict';

angular.module('chatAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/friends', {
      templateUrl: 'views/friends.html',
      controller: 'FriendsCtrl'
    })
    .when('/msg', {
      templateUrl: 'views/msg.html',
      controller: 'MsgCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
