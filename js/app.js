var api_key, api_url;
api_key = "e657fd23e9a0c5e43513d7f5a2cdc308";
api_url = "http://ec2-54-201-133-12.us-west-2.compute.amazonaws.com";

var siteApp;

siteApp = angular.module('siteApp', [
  'ngRoute',
  'siteControllers'
]);
 
siteApp.filter('drawVideo', function(){
    return function(video_id, video_provider,elementId) {
      if(video_provider==="youtube"){
          $('#' + elementId).html( '<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + video_id + '?autoplay=1&origin=http://15m.in" frameborder="0"/>' );
      }
    }
});


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
