'use strict';

define('ListController', function() {

  var listController = function($scope, $http) {
    $scope.phones = [];
    $http.get('data/phones.json').success(function(data) {
      $scope.phones = data;
    });
    
    $scope.getRating = function(phone){
      return phone.rating ? phone.rating.toString() : '';
    };
  };

  return listController;
});
