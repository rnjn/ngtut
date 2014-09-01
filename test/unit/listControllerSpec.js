'use strict';

describe('List controller', function() {
  var scope, createController;
  beforeEach(module('ngtut'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    createController = function(controller) {
      return $controller(controller, {
        '$scope': scope
      });
    };
  }));

  it('should read static scope', function() {
    var listController = createController('ListController');
    expect(scope.ultimateAnswerToLife).toBe(42);
  });
});
