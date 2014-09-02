'use strict';
var listController = function($scope, $http) {
  $scope.phones = [];
  $http.get('data/phones.json').success(function(data) {
    $scope.phones = data;
  });
};

ngtut.controller('ListController', ['$scope', '$http', listController]);
