'use strict';
var listController = function($scope){
  $scope.ultimateAnswerToLife = 42;
  $scope.phones = [
  {
        'age': 0,
        'id': 'motorola-xoom-with-wi-fi',
        'imageUrl': 'img/phones/motorola-xoom-with-wi-fi.0.jpg',
        'name': 'Motorola XOOM\u2122 with Wi-Fi',
        'snippet': 'The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the worlds first tablet powered by Android 3.0 (Honeycomb).'
    },
    {
        'age': 6,
        'carrier': 'Best Buy',
        'id': 'nexus-s',
        'imageUrl': 'img/phones/nexus-s.0.jpg',
        'name': 'Nexus S',
        'snippet': 'Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet.'
    }
  ];
};

ngtut.controller('ListController', ['$scope', listController]);
