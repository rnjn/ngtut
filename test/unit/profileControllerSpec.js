'use strict';
define('profileControllerSpec', ['app', 'angularMocks'],
  function(app, angularMocks) {
    describe('Profile controller', function() {
      describe('Uses $http to load data', function() {
        var scope, listController, httpBackend, routeParams;
        beforeEach(module('ngtut'));
        var phone = {
          'age': 0,
          'id': 'motorola-xoom-with-wi-fi',
          'name': 'Motorola XOOM'
        };

        beforeEach(inject(function($rootScope, $controller, $httpBackend, $routeParams) {
          scope = $rootScope.$new();
          httpBackend = $httpBackend;
          routeParams = $routeParams;

          routeParams.phoneId = 'motorola-xoom-with-wi-fi';
          httpBackend.expectGET('data/motorola-xoom-with-wi-fi.json').respond(phone);

          listController = $controller('ProfileController', {
            $scope: scope
          });

        }));

        it('should GET phones from data/phones.json', function() {
          expect(scope.phone.name).toBeUndefined();
          httpBackend.flush();
          expect(scope.phone.name).toBe('Motorola XOOM');
        });

      });
    });
  });
