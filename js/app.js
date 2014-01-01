var api_key, api_url;
api_key = "e657fd23e9a0c5e43513d7f5a2cdc308";
api_url = "http://ec2-54-201-133-12.us-west-2.compute.amazonaws.com";

var siteApp;

siteApp = angular.module('siteApp', [
  'ngRoute',
  'siteControllers'
]);
 
siteApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/now-playing.html',
        controller: 'NowplayingController'
      }).
      when('/:videoId', {
        templateUrl: 'partials/play.html',
        controller: 'PlayController'
      }).
      otherwise({
        redirectTo: '/error',
        templateUrl: 'partials/error.html'
      });
  }]);
