Mahjong = angular.module('mahjong', ['ngRoute', 'ui.bootstrap']);

Mahjong.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	//$locationProvider.html5Mode(true);
	
	$routeProvider
	.when("/", {
		templateUrl: "views/landing.html"
	})
	.when("/start", {
		templateUrl: "views/start.html",
		controller: "startCtrl"
	})
	.when("/game", {
		templateUrl: "views/game.html",
		controller: "gameCtrl"
	})
	.otherwise('/');
}]);