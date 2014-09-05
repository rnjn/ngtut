'use strict';

define('directives/ratingDirective', [], function() {
  var rating = function() {
    return {
      restrict: 'EA', 
      templateUrl: 'partials/rating.html',
      scope: false
    };
  };
  return rating;
});
