'use strict';

var ngtut = angular.module('ngtut', ['ngRoute']);

ngtut.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileController'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
