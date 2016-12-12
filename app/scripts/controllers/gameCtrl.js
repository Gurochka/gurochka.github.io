Mahjong.controller('gameCtrl', ['$scope', '$http', 'players', 'game', 'storage', function($scope, $http, players, game, storage) {

    var init = function(){
        $scope.$watch('lang', function(){
            $http.get('scripts/translations/translation_' + $scope.lang + '.json')
                .success(function(response) {
                    $scope.text = response;
                });
        });
        $scope.lang = 'ru';

        $scope.show_result = true;
        $scope.$on('handCalculated', onHandCalculated);

        $scope.players = players.get();
        $scope.games = game.get();
        console.log($scope.players, $scope.games);
        if (!$.isEmptyObject($scope.games)){
            $scope.game_started = true;
        }

    };

    /* ------------ helpers ---------------- */

    $scope.getWindName = function(wind, adjective){
        var wind_names = {
            east:  ['EAST', 'EASTERN'],
            south: ['SOUTH', 'SOUTHERN'],
            west:  ['WEST', 'WESTERN'],
            north: ['NORTH', 'NORTHERN']
        }[wind];
        if ($scope.text) return adjective ? $scope.text[wind_names[1]] : $scope.text[wind_names[0]];
    };

    var getPlayerIdx = function(wind){
        var player = _.findWhere($scope.players, {wind: wind});
        return _.indexOf($scope.players, player);
    };

    var getNextWind = function(wind, clockwise){
        var winds = ['east', 'south', 'west', 'north'],
            index = _.indexOf(winds, wind);

        var next_wind = winds[index + 1] || winds[0];
        if (clockwise){
            next_wind = winds[index - 1] || _.last(winds);
        }
        return next_wind;
    };

    /* ------------ end of helpers ---------------- */

    $scope.changeLang = function(lang){
        $scope.lang = lang;
    };

    $scope.startNewGame = function(){
        $scope.players = players.newGame();
        $scope.games = game.create();
        $scope.game_started = true;
    };

    $scope.openHandScore = function(wind){
        $scope.$broadcast('handOpened', wind);
    };

    var onHandCalculated = function(event, hand, score){
        var last_game = _.last($scope.games);

        $scope.games = game.updatePlayerScore(hand, score, getPlayerIdx(hand.wind));

        if (game.isNewRound()){
            alert($scope.text.ROUND_IS_DONE);

            $scope.players = players.updateScore(last_game, getNextWind);
            $scope.games = game.updateRounds(getNextWind);
        }
        $scope.$digest();
    };

    init();

}]);
