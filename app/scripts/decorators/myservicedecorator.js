'use strict';

angular.module('chatAppApp')
  .config(function ($provide) {
    $provide.decorator('Myservice', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
