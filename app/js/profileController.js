'use strict';
define('ProfileController', function() {

  var profileController = function($scope, $http, $routeParams) {
    $scope.phone = {};
    $http.get('data/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  };
  return profileController;
});
