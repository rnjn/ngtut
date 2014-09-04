'use strict';

define('app', ['angular','RouteConfig', 'ListController', 'ProfileController', 'directives/rating'],
  function(angular, config, listController, profileController, rating) {
    var ngtut = angular.module('ngtut', ['ngRoute']);
    ngtut.config(['$routeProvider', config.routes]);
    ngtut.controller('ListController', ['$scope', '$http', listController]);
    ngtut.controller('ProfileController', ['$scope', '$http', '$routeParams', profileController]);
    ngtut.directive('rating', rating);

    return ngtut;
  });
