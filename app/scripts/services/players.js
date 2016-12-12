Mahjong.service('players', ['storage', function(storage) {
    var players = storage.get('players') || [{wind: 'east'},{wind: 'south'},{wind: 'west'},{wind: 'north'}];

    return {
        get: function(){
            return players;
        },

        newGame: function(){
            var winds = ['east', 'south', 'west', 'north'];

            $.each(players, function(idx, player){
                player.name = player.name || ('player ' + (idx + 1));
                player.wind = winds[idx];
                player.score = 0;
                player.coins = 2000;
            });
            storage.set('players', players);
            return players;
        },

        updateScore: function(last_game, getNextWind){
            var last_round = _.last(last_game.rounds),
                score = last_round.score;

            $.each(players, function(idx, player){
                player.score += score[idx];

                // count coins:
                if (last_round.mahjong_idx == idx){ // if player won last round
                    player.coins += score[idx]*(player.wind == 'east' ? 6 : 4);
                }
                else { // if player lost last round

                    $.each(players, function(another_player_idx, another_player){
                        if (another_player_idx == idx) return;

                        if (last_round.mahjong_idx == another_player_idx){
                            player.coins -= score[another_player_idx]*( (another_player.wind == 'east' || player.wind == 'east') ? 2 : 1);
                        } else {
                            // if player's score is less than another player's score, then player must pay difference between scores. If player is East then he must pay in double
                            if (score[another_player_idx] > score[idx]){
                                player.coins -= (score[another_player_idx] -score[idx])*(player.wind == 'east' ? 2 : 1);
                            }
                            // if player's score is more, then another player must pay difference between scores to player. If another player is East then he must pay in double
                            if (score[another_player_idx] < score[idx]){
                                player.coins += (score[idx] - score[another_player_idx])*(another_player.wind == 'east' ? 2 : 1);
                            }
                        }
                    });
                }
            });

            var wind_win = players[last_round.mahjong_idx].wind;
            console.log('wind_win', wind_win, players);

            if (wind_win != 'east'){
                // shift winds counterclockwise
                $.each(players, function(idx, player){
                    console.log(idx, player);
                    console.log('player', player.name, 'score:', player.score, 'wind: ', player.wind);
                    player.wind = getNextWind(player.wind, true);
                    console.log('new wind: ', player.wind);
                });
            }
            console.log('players', players);

            storage.set('players', players);

            return players;
        }
    };
}]);