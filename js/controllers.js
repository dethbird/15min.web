var siteControllers;

siteControllers = angular.module('siteControllers', []);

siteControllers.controller('NowplayingController', function ($scope, $http) {
	$http.get(api_url + '/nowplaying/?api_key=' + api_key).success(function(data) {
		console.log(data.data);
		$scope.data = data.data;
	});
});

siteControllers.controller('PlayController', function ($scope, $http, $routeParams) {
	console.log(window);
	$http.get(api_url + '/galleries/?api_key=' + api_key + "&id=" + $routeParams.galleryId).success(function(data) {
		$(data[0].contents).each(function(i,content){
			//console.log(content.image_url);
			thumbnail_url = $.url('protocol', content.image_url) + 
							"://" +
							$.url('sub', content.image_url) + 
							"." + 
							$.url('domain', content.image_url) + 
							"/w180-h180" + 
							$.url('path', content.image_url);
			//console.log(thumbnail_url);
			data[0].contents[i].thumbnail_url = thumbnail_url;
		});
		$scope.data = data;
	});
});
