'use strict';

describe('List controller', function() {
  describe('Uses $http to load data', function() {
    var scope, listController, httpBackend;
    beforeEach(module('ngtut'));
    var phones = [{
      'age': 0,
      'id': 'motorola-xoom-with-wi-fi',
      'name': 'Motorola XOOM',
    }, {
      'age': 6,
      'carrier': 'Best Buy',
      'id': 'nexus-s',
      'name': 'Nexus S',
    }];
    beforeEach(inject(function($rootScope, $controller, $httpBackend) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;

      $httpBackend.expectGET('data/phones.json').respond(phones);
      listController = $controller('ListController', {
        $scope: scope
      });
    }));

    it('should GET phones from data/phones.json', function() {
      expect(scope.phones.length).toBe(0);
      httpBackend.flush();
      expect(scope.phones.length).toBe(2);
    });
  });
});
