'use strict';

define('directives/rating', [], function() {
  var rating = function() {
    return {
      restrict: 'EA', //E = element, A = attribute, C = class, M = comment  
      templateUrl: 'partials/rating.html',
      transclude : true,
      scope: false, //directive uses parent scope.
      link: function($scope, element, attributes) {
        console.log(element.children()[0].value);
      }
    };
  };
  return rating;
});
