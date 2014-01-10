var siteControllers;

siteControllers = angular.module('siteControllers', []);

siteControllers.controller('NowplayingController', function ($scope, $http) {
	$http.get(api_url + '/nowplaying/?api_key=' + api_key).success(function(data) {
		$scope.data = data.data;
	});
});

siteControllers.controller('PlayController', function ($scope, $http, $routeParams, $location) {
	
	$http.get(api_url + '/playnow/' + $routeParams.videoId + '?api_key=' + api_key)
	.success(function(data) {
		$scope.data = data.data;
	}).error(function(data) {
		$.each(data.errors, function(e){
			alert(e);
			if(e = "programs.playnow.extension_expired"){
				$location.path( "/expired" );
			} else if (e = "programs.playnow.not_current_program"){
				$location.path( "/expired" );
			} else if (e = "programs.playnow.no_results"){
				$location.path( "/error" );
			} else if (e = "programs.playnow.in_future"){
				$location.path( "/error" );
			}
		});
	});
});
