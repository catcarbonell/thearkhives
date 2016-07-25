// ANGULAR MVC //

var app = angular.module("theApp", ["ngRoute", "angular-parallax"]);

//var parallax = angular.module("parallax", ["angular-parallax"]);

// The ARKHIVES Main Views
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when("/", {
	templateUrl: "main.htm"
      })
      
	.when("/searchbar", {
	templateUrl: "main.htm#searchbar"
      })
      
      .when("/about", {
	templateUrl: "about.htm"
      })
	
      .when("/jnj", {
	templateUrl: "stories/jnj/index.html"
      })

      .when("/sample", {
	templateUrl: "stories/sample/index.html"
      })

      .otherwise({
	redirectTo: "/"
      });

}]);


// SEARCH FUNCTION w/ ANGULAR //
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