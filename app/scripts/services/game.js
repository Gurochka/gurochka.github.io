Mahjong.service('game', ['storage', function(storage) {
    var games = storage.get('games') || [];

    return {
        get: function(){
            return games;
        },

        create: function(){
            games = [{
                prevailing_wind: 'east',
                rounds: [{ score: Array(4) }]
            }];
            storage.set('games', games);
            return games;
        },

        updatePlayerScore: function(hand, score, player_idx){
            var last_game = _.last(games),
                last_round = _.last(last_game.rounds);

            last_round.score[player_idx] = score;

            if (hand.options.mahjong){
                last_round.mahjong_idx = player_idx;
            }
            storage.set('games', games);
            return games;
        },

        updateRounds: function(getNextWind){
            var last_game = _.last(games),
                last_round = _.last(last_game.rounds);

            if (last_game.rounds.length == 2){ // after two rounds - new game and new prevailing wind
                games.push({
                    prevailing_wind: getNextWind(last_game.prevailing_wind),
                    rounds: [ {score: Array(4)} ]
                });
            } else {
                last_game.rounds.push( {score: Array(4)} );
            }
            storage.set('games', games);
            return games;
        },

        isNewRound: function(){
            var last_game = _.last(games),
                last_round = _.last(last_game.rounds);
            console.log('last round: ', last_round);
            var    emptied_score = _.filter(last_round.score, function(val){ return (val !== undefined && val !== null); });

            return emptied_score.length == 4;
        }
    };
}]);