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

  it('should read static primitives on model', function() {
    expect(scope.ultimateAnswerToLife).toBe(42);
  });

  it('should read static data on model', function(){
    expect(scope.phones.length).toBe(2);
  });

  
});
