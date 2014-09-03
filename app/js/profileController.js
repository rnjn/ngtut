'use strict';
var profileController = function($scope, $http, $routeParams) {
  $scope.phone = {};
  $http.get('data/' + $routeParams.phoneId +'.json').success(function(data) {
    $scope.phone = data;
  });
};

ngtut.controller('ProfileController', ['$scope', '$http', '$routeParams', profileController]);
