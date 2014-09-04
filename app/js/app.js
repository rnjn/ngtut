'use strict';

define('app', ['angular','RouteConfig', 'ListController', 'ProfileController'],
  function(angular, config, listController, profileController) {
    var ngtut = angular.module('ngtut', ['ngRoute']);
    ngtut.config(['$routeProvider', config.routes]);
    ngtut.controller('ListController', ['$scope', '$http', listController]);
    ngtut.controller('ProfileController', ['$scope', '$http', '$routeParams', profileController]);

    return ngtut;
  });
