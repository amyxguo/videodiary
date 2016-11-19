var app = angular.module('VideoDiary', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/videos', {
      templateUrl: '../templates/videos/index.html',
      controller: 'VideoIndexCtrl'
    })
    .when('/videos/:id', {
      templateUrl: '../templates/videos/show.html',
      controller: 'VideoShowCtrl'
    })
    .otherwise({
      templateUrl: '../templates/home.html',
      controller: 'HomeCtrl'
    });
});
