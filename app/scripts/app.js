Mahjong = angular.module('mahjong', ['ngRoute']);

Mahjong.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "views/landing.html",
		controller: "landingCtrl"
	})
	.when("/game", {
		templateUrl: "views/game.html",
		controller: "gameCtrl"
	})
	.otherwise('/');
}]);