'use strict';

angular.module('chatAppApp')
    .service('Myservice', function Myservice() {
        console.log('myservice');
// AngularJS will instantiate a singleton by calling "new" on this function
    });
