'use strict';

describe('List controller', function() {
  var scope, listController;
  beforeEach(module('ngtut'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    listController = $controller('ListController',{
      $scope: scope
    });
  }));

  it('should read static values on model', function() {
    expect(scope.ultimateAnswerToLife).toBe(42);
  });
});
