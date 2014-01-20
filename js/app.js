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
          onYouTubeIframeAPIReady();
      }
    }
});

siteApp.filter('drawCounter', function(){
    return function(timeslot) {
      
      var next = moment.unix(timeslot).toISOString();
      console.log(timeslot);
      console.log(next);
      $('#countdown').attr("title", next);
      $('#countdown').html(next);

    }
});

siteApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/now-playing.html',
        controller: 'NowplayingController'
      }).
      when('/v/:videoId', {
        templateUrl: 'partials/play.html',
        controller: 'PlayController'
      }).
      when('/expired', {
        templateUrl: 'partials/expired.html'
      }).
      when('/error', {
        templateUrl: 'partials/error.html'
      })
      .otherwise({
        redirectTo: '/error',
        templateUrl: 'partials/error.html'
      });
  }]);
