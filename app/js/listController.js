'use strict';

define('ListController', function() {

  var listController = function($scope, $http) {
    $scope.phones = [];
    $http.get('data/phones.json').success(function(data) {
      $scope.phones = data;
    });
  };

  return listController;
});
