// SEARCH FUNCTION w/ ANGULAR //
// This binds to SEARCH.HTML

var app = angular.module('searchApp', []);

//Service to connect to the "storiesdb" JSON file
app.service("storiesService", function ($http, $q)
	{
		var deferred = $q.defer();
		$http.get('js/storiesdb.json').then(function (data)
		{
			deferred.resolve(data); 
		});

		this.getStories = function ()
		{
			return deferred.promise; 
		}
	})

//Controller to display the data inside storiesdb.json
.controller("MainCtrl", function ($scope, storiesService)
	{
		var promise = storiesService.getStories();
		promise.then(function (data)
			{
				$scope.stories = data.data;

			});

	})