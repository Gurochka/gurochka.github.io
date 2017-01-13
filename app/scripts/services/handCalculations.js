Mahjong.factory('handCalculations', [function() {
    var hand, score, text;

    /* ---------------- helpers ----------------- */

    var isEqualBones = function(){
        var bones = _.compact(arguments),
            is_equal_bones = true;

        $.each(bones, function(idx, bone){
            if (bone.type != bones[0].type || bone.value != bones[0].value || bone.opened != bones[0].opened) is_equal_bones = false;
        });
        return bones.length == arguments.length && is_equal_bones;
    };

    var getSameBones = function(bone, bones){
        return _.filter(bones, function(another_bone){
            return isEqualBones(bone, another_bone);
        });
    };

    var isSequenceBones = function(){
        var bones = _.sortBy(_.compact(arguments), 'value'),
            is_sequence_bones = true;

        for (var i = 1; i < bones.length; i++){
            if (bones[i].type != bones[i-1].type || bones[i].value != (bones[i-1].value + 1) || bones[i].opened != bones[i - 1].opened) is_sequence_bones = false;
        }
        return bones.length == arguments.length && is_sequence_bones;
    };

    /* ----------------------------------------------------- */

    var isTypeOfBone = function(type, bone){
        return getTypeOfBone(bone) == type;
    };

    var getTypeOfBone = function(bone){
        var bone_type = 'suit';
        if (bone.type == 'dragon' || bone.type == 'wind') bone_type = 'noble';
        if (bone.value == 1 || bone.value == 9) bone_type = 'terminal';
        return bone_type;
    };

    var addCombinaton = function(combo, bone){
        score.combinations.push({
            type: combo,
            bone: bone
        });
    };

    var addCalculation = function(points, name){
        score.calculations.push({
            name: name,
            points: points
        });
    };

    var addDouble = function(name, count){
        score.doublings.push({
            name: name,
            count: count*2 || 2
        });
    };

    /* ---------------- end of helpers ----------------- */

    var removeBonuses = function(){
        score.bonuses = _.filter(hand.bones, function(bone){
            return bone.type == 'season' || bone.type == 'flower'
        });
        hand.bones = _.difference(hand.bones, score.bonuses);
    };

    /*
    * Usually bones is picked in the row (111, 123, etc.), so we will remove them first
    * BUG - (111 123) it takes like "kong of 1" and "23" separately
    * */
    var removeNearestBones = function(){
        for (var i = 0; i < hand.bones.length; i++){
            var bone = hand.bones[i],
                bone_combo = '';

            var second_bone = hand.bones[i + 1],
                third_bone = hand.bones[i + 2],
                fourth_bone = hand.bones[i + 3];

            if ( isEqualBones(bone, second_bone, third_bone) )  bone_combo = 'pang';
            if ( isEqualBones(bone, second_bone, third_bone, fourth_bone) ) bone_combo = 'kong';
            if ( isSequenceBones(bone, second_bone, third_bone) )  bone_combo = 'chou';

            if (bone_combo){
                addCombinaton (bone_combo, bone);
                hand.bones.splice(i, bone_combo == 'kong' ? 4 : 3);
                i--;
            }
        }
    };

    /*
    *  Next remove all another combinations - not "in the row"
    * */
    var removeAnotherCombinations = function(){
        var i, bone, similar_bones;

        // search pangs and kongs in hand
        for (i = 0; i < hand.bones.length; i++){
            bone = hand.bones[i];
            similar_bones = getSameBones(bone, hand.bones);

            if (similar_bones.length > 2){
                addCombinaton (similar_bones.length == 3 ? 'pang' : 'kong', bone);
                hand.bones = _.difference(hand.bones, similar_bones);
                i--;
            }
        }

        // search sequences
        var grouped_bones = _.groupBy(hand.bones, 'type');
        $.each(grouped_bones, function(bones, type){
            if (_.indexOf(['bamboo', 'pin', 'man'], type) != -1 ){
                bones = _.sortBy(bones, 'value');

                for (i = 0; i < bones.length; i++){
                    bone = bones[i];
                    var second_bone = bones[i + 1],
                        third_bone = bones[i + 2];

                    if (isSequenceBones(bone, second_bone, third_bone)){
                        addCombinaton('chou', bone);
                        bones.splice(i, 3);
                        hand.bones = _.difference(hand.bones, [bone, second_bone, third_bone]);
                        i--;
                    }
                }
            }
        });

        // remove double bones
        for (i = 0; i < hand.bones.length; i++){
            bone = hand.bones[i];
            similar_bones = getSameBones(bone, hand.bones);

            if (similar_bones.length == 2){
                addCombinaton('pair', bone);
                hand.bones = _.difference(hand.bones, similar_bones);
                i--;
            }
        }

        // remove single bones (we need to determine pure suit)
        if (hand.bones.length > 0){
            $.each(hand.bones, function(idx, bone){
                addCombinaton('one', bone);
            });
            hand.bones = [];
        }
    };

    /*
     *  Check if hand contains limited combination. И если содержит, тогда остальные вычисления не производятся.
     * */

     var isLimitedCombinations = function(){
        if (!hand.options.mahjong) return;

        var combs = score.combinations,
            counted_combs = _.countBy(combs, 'type');

        var limited_combinations = {

         // One of each honor/terminal and a pair of honors/terminals.
            'THIRTEEN_ORPHANS':  function(){
                if (_.size(counted_combs) == 2 && counted_combs.one == 12 && counted_combs.pair == 1){
                    return _.filter(combs, function(combo){
                        return isTypeOfBone('terminal', combo.bone) || isTypeOfBone('noble', combo.bone);
                    }).length == combs.length;
                }
            },
        // No chous, all of the same suit, fully concealed hand
            'TREASURE': function(){
                var first_bone = combs[0].bone;
                return _.filter(combs, function(combo){
                    return combo.type != 'chou' && combo.type != 'one' && counted_combs.pair == 1 && combo.bone.opened == false && combo.bone.type == first_bone.type;
                }).length == combs.length;
            },
        // Mahjong with winds and dragons
            'HONOURS': function(){
                return _.filter(combs, function(combo){
                    return (isTypeOfBone('noble', combo.bone) && counted_combs.pair == 1 && !counted_combs.one);
                }).length == combs.length;
            },
        // Pungs/Kongs of Ones and Nines.
            'HEADS_AND_TAILS': function(){
                return _.filter(combs, function(combo){
                    return (combo.type != 'chou' && combo.type != 'one' && isTypeOfBone('terminal', combo.bone) && counted_combs.pair == 1);
                }).length == combs.length;
            },
        // All tiles is green: bamboo 2, 3, 4, 6, 8 and green dragons
            'IMPERIAL_JADE': function(){
                return _.filter(combs, function(combo){
                    return (combo.bone.type == 'dragon' && combo.bone.value == 'green') || (combo.bone.type == 'bamboo' && _.indexOf([2, 3, 4, 6, 8], combo.bone.value) != -1);
                }).length == combs.length;
            },
        // Seven pairs of dragons/winds OR seven pairs of one suit tiles
            'HEAVENLY_TWINS': function(){
                var noble_filtered = _.filter(combs, function(combo){
                        return (combo.type == 'pair' || (combo.type == 'kong' && !combo.bone.opened)) && isTypeOfBone('noble', combo.bone);
                    }),
                    first_bone = combs[0].bone,
                    one_suit = _.filter(combs, function(combo){
                        return (!isTypeOfBone('noble', combo.bone) && (combo.type == 'pair' || (combo.type == 'kong' && !combo.bone.opened)) && combo.bone.type == first_bone.type);
                    });
                return noble_filtered.length == combs.length || one_suit.length == combs.length;
            },
        // Pangs/kongs of all dragons and one pang/kong and pair of one suit
            'GRAND_MASTERS': function(){
                var dragons = _.filter(combs, function(combo){
                    return (combo.type == 'pang' || combo.type == 'kong') && combo.bone.type == 'dragon';
                });
                var anothers = _.difference(combs, dragons),
                    got_to_conditions = _.filter(anothers, function(combo){
                        return combo.bone.type == anothers[0].bone.type && combo.type != 'chou' && combo.type != 'one';
                    });

                return (dragons.length == 3 && anothers.length == 2 && got_to_conditions.length == anothers.length);
            },
        // Pangs/kongs of all winds and pair
            'FOUR_BLESSINGS': function(){
                return _.filter(combs, function(combo){
                    return (combo.type == 'pang' || combo.type == 'kong') && combo.bone.type == 'wind';
                }).length == 4 && counted_combs.pair == 1;
            },
        // Four Kongs and a pair
            'FOURFOLD_PLENTY': function(){
                return counted_combs.kong == 4 && counted_combs.pair == 1;
            },
        // The Moon is the One of Circles. This is made by a player who upon drawing the last tile from the wall finds that it is the Moon which allows the player to go Mah Jong.
            'MOON_IN_THE_SEA': function(){
                return hand.options.before_dead_wall_1_pin;
            },
        // The Plum Blossom is the Five of Circles.  This is made by a player who draws a loose tile (the roof) as a replacement for a Kong, a Flower or a Season and that tile is the Plum Blossom which allows the player to go Mah Jong.
            'GATHERING_BLOSSOM': function(){
                return hand.options.free_bone_5_pin;
            }
        };

        $.each(limited_combinations, function(title, func){
            if (func()) {
                score.limited = text.hand.limited[title];
                addCalculation(500, text.hand.LIMITED_COMBINATION + score.limited);
                return false;
            }
        });

        return score.limited;
    };

    /*
     * Function calculates points for every combination and notes down this calculations for output
     * */
     var calculateCombinations = function(){
        if (!score.combinations.length) return;

        $.each(score.combinations, function(idx, combo){
            var scoring = 0;

            if (combo.type == 'pang' || combo.type == 'kong'){
                scoring = {
                    kong: {
                        terminal: 32,
                        suit: 16,
                        noble: 32
                    },
                    pang: {
                        terminal: 8,
                        suit: 4,
                        noble: 8
                    }
                }[combo.type][getTypeOfBone(combo.bone)];

                if (combo.bone.opened) scoring = scoring / 2;
            }
            if (combo.type == 'pair'){
                if (combo.bone.type == 'dragon') scoring = 2;
                if (combo.bone.type == 'wind' && combo.bone.value == hand.wind) scoring = 2;
                if (combo.bone.type == 'wind' && combo.bone.value == hand.round_wind) scoring += 2;
            }

            if (scoring){

                var score_text = text.hand.scoring,
                    suit = score_text[combo.bone.type.toUpperCase()],
                    names = {
                        pang: (combo.bone.opened ? score_text.OPENED : score_text.CLOSED) + score_text.PANG + suit + ' ' + combo.bone.value,
                        kong: (combo.bone.opened ? score_text.OPENED : score_text.CLOSED) + score_text.KONG + suit + ' ' + combo.bone.value,
                        pair: score_text.PAIR + ' ' + suit
                    };

                addCalculation(scoring, names[combo.type]);
            }
        });

        if (hand.options.last_bone_from_wall){
            addCalculation(2, text.hand.LAST_BONE_FROM_WALL);
        }
        if (hand.options.the_only_possible){
            addCalculation(2, text.hand.THE_ONLY_POSIBLE);
        }
    };

    /*
     * Function searches doublings (separately for all players and those who win mahjong) and notes down this doublings for output
     * */

     var calculateDoublings = function(){
        var combs = score.combinations;

        var doublings = {
        // Triple or quadruple of dragons
            'DRAGONS': function(){
                return _.filter(combs, function(combo){
                    return (combo.type == 'pang' || combo.type == 'kong') && combo.bone.type == 'dragon';
                }).length;
            },
        // Triple or quadruple of own winds
            'PREVAILING_WINDS': function(){
                return _.filter(combs, function(combo){
                    return (combo.type == 'pang' || combo.type == 'kong') && combo.bone.type == 'wind' && combo.bone.value == hand.prevailing_wind;
                }).length;
            },
        // Triple or quadruple of prevailing winds
            'OWN_WINDS': function(){
                return _.filter(combs, function(combo){
                    return (combo.type == 'pang' || combo.type == 'kong') && combo.bone.type == 'wind' && combo.bone.value == hand.wind;
                }).length;
            },
        // Half suite (one suite only + dragons/winds)
            'HALF_SUITE': function(){
                var suits = _.keys(_.groupBy(combs, function(combo){ return combo.bone.type }));
                return _.intersection(suits, ['dragon', 'wind']).length > 0 && _.without(suits, 'dragon', 'wind').length == 1;
            },
        // Full suite (one suite only)
            'FULL_SUITE': function(){
                var suits = _.keys( _.groupBy(combs, function(combo){ return combo.bone.type }));
                return Number(suits.length == 1 && (suits[0] == 'pin' || suits[0] == 'man' || suits[0] == 'bamboo'))*4;
            },
        // Only 1s, 9s, dragons and winds
            'ONLY_19_DRAGONS_WINDS': function(){
                var suits = _.keys( _.groupBy(combs, function(combo){ return combo.bone.type }));
                return _.filter(combs, function(combo){
                    return combo.type != 'chou' && (isTypeOfBone('noble', combo.bone) || isTypeOfBone('terminal', combo.bone));
                }).length == combs.length && _.without(suits, 'dragon', 'wind').length > 0;
            },
         // Only dragons and winds
            'ONLY_DRAGONS_WINDS': function(){
                return Number(_.filter(combs, function(combo){
                    return isTypeOfBone('noble', combo.bone);
                }).length == combs.length)*4;
            },
        // Full set of one type bonuses
            'ONE_SUIT': function(){
                var bonuses_type_count = _.countBy(score.bonuses, 'type'),
                    whole_bonuses_set = (bonuses_type_count.flower && bonuses_type_count.flower == 4) || (bonuses_type_count.season && bonuses_type_count.season == 4);
                return whole_bonuses_set ? 4 : 0;
            },
        // Own or prevailing bonus (season or flower)
            'OWN_PREVAILING_BONUS': function(){
                var bonuses_type_count = _.countBy(score.bonuses, 'type'),
                    whole_bonuses_set = (bonuses_type_count.flower && bonuses_type_count.flower == 4) || (bonuses_type_count.season && bonuses_type_count.season == 4);

                var has_own_bonus = _.find(score.bonuses, function(bonus){
                    var wind_bonus = {
                        east: 1,
                        south: 2,
                        west: 3,
                        north: 4
                    };
                    return wind_bonus[hand.wind] == bonus.value || wind_bonus[hand.prevailing_wind] == bonus.value;
                });
                return has_own_bonus && !whole_bonuses_set;
            }
        };

        $.each(doublings, function(title, func){
            var scoring = Number(func());
            if (scoring) {
                addDouble(text.hand.doublings[title], scoring);
            }
        });

        // doublings for mahjong

        if (hand.options.mahjong){
            var mahjong_doublings = {
                'ONLY_PANGS': function(){
                    var combo_types = _.groupBy(combs, 'type');
                    return combo_types.pang && combo_types.pang.length == 4 && combo_types.pair && combo_types.pair.length == 1;
                },
                'CONCEALED_HAND': function(){
                    return _.filter(combs, function(combo){
                        return !combo.bone.opened;
                    }).length == combs.length;
                },
                'NO_POINTS': function(){
                    return score.calculations.length == 0;
                },
            // Out on a loose tile
                'LOOSE_TILE': function(){
                    return hand.options.free_bone;
                },
            // Out on last tile of wall
                'LAST_TILE': function(){
                    return hand.options.before_dead_wall;
                },
                'ROBBING_KONG': function(){
                    return hand.options.kong_robbery;
                },
                'LITTLE_THREE_WINDS': function(){
                    var winds = _.groupBy(combs, function(combo){ return combo.bone.type }).wind;
                    if (winds && winds.length == 4){
                        winds = _.groupBy(winds, 'type');
                        return (winds.pair && winds.pair.length == 1)*2;
                    }
                    return false;
                },
                'LITTLE_THREE_DRAGONS': function(){
                    var dragons = _.groupBy(combs, function(combo){ return combo.bone.type }).dragon;
                    if (dragons && dragons.length == 3){
                        dragons = _.groupBy(dragons, 'type');
                        return dragons.pair && dragons.pair.length == 1;
                    }
                    return false;
                },
            // "Ready hand" after first discard
                'READY_HAND': function(){
                    return hand.options.ready_hand_from_start;
                },
            // Two or three kongs
                'TWO_THRE_KONGS': function(){
                    var kongs = _.groupBy(combs, 'type').kong;
                    return kongs && kongs.length > 2 && kongs.length < 4;
                }
            };

            $.each(mahjong_doublings, function(title, func){
                var scoring = Number(func());
                if (scoring) {
                    addDouble(text.hand.mahjong_doublings[title], scoring);
                }
            });

            addCalculation(20, text.hand.scoring.MAHJONG);
        }
    };

    /*
     * Function calculates sum of all combinations and doublings, round points to the limit (if it necessary)
     * */
    var calculateFullScore = function(){
        score.full_score = _.reduce(score.calculations, function(memo, calc){
            return memo + calc.points;
        }, 0);

        $.each(score.doublings, function(idx, doubling){
            score.full_score = doubling.count*score.full_score;
        });
        score.score = score.full_score > 500 ? 500 : score.full_score;
        score.score = Math.ceil(score.score/10)*10; // rounding to the tens
    };

    /*
     * Main function
     * */
    var calculate = function(external_hand){
        hand = _.clone(external_hand);
        score = {
            combinations: [],
            calculations: [],
            doublings: []
        };

        removeBonuses();
        removeNearestBones();
        removeAnotherCombinations();

        if (!isLimitedCombinations()){
            calculateCombinations();
            calculateDoublings();

            if (score.bonuses.length > 0) {
                addCalculation(score.bonuses.length* 4, text.hand.scoring.BONUSES);
            }
        }

        calculateFullScore();
        return score;
    };

    return {
        calculate: function(external_hand, translations){
            text = translations;
            return calculate(external_hand);
        }
    };
}]);
