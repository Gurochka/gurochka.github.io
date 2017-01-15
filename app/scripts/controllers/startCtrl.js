Mahjong.controller('startCtrl', ['$scope', 'storage', '$location', function($scope, storage, $location) {
	$scope.players = {};
	$scope.settings = {
		betting: 2000,
		rounds: "1"
	};

	storage.remove('players');
	storage.remove('settings');

	$scope.next = function(){
		storage.set('players', $scope.players);
		storage.set('settings', $scope.settings);
		$location.path('game');
	};

}]);