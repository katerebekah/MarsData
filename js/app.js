var app = angular.module('MarsData', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
        templateUrl: 'views/index',
        controller: 'indexCtrl'
    }).
    when('/mars', {
        templateUrl: 'views/mars.html',
        controller: 'marsCtrl'
    }).
    when('/spaceData', {
        templateUrl: 'views/spaceData.html',
        controller: 'spaceDataCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
});
