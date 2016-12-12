Mahjong.controller('handCtrl', ['$scope', 'handCalculations', function($scope, handCalculations) {

    var init = function(){
        setDefaultHand();

        $('#countPoints').on('hidden.bs.modal', onCloseDialog);

        $scope.$on('handOpened', function(event, wind){
            $scope.hand.wind = wind;
        });
    };

    $scope.addBone = function(type, value){
        // limit the maximum number of bones - 4, for flowers and seasons - 1
        var same_bones = _.filter($scope.hand.bones, function(bone){
            return bone.type == type && bone.value == value;
        });
        if ( ((type == 'flower' || type == 'season') && same_bones.length)
            || same_bones.length > 3) return;

        // maximum number of bones is limited also - 14 + bonuses + 1 for every kong (4 kongs is the maximum for one hand)
        var bonuses = _.filter($scope.hand.bones, function(bone){
            return bone.type == 'flower' || bone.type == 'season';
        });
        if ($scope.hand.bones.length >= (18 + bonuses.length)) return;

        $scope.hand.bones.push({
            type: type,
            value: value,
            opened: false
        });
    };

    $scope.removeBone = function(bone, index){
        $scope.hand.bones.splice(index, 1);
    };

    $scope.boneClicked = function(bone, index){
        if ($scope.hand.mode == 'picking hand'){
            $scope.removeBone(bone, index);
        }
        // open up all three (or four) tiles if they are in the row
        if ($scope.hand.mode == 'picking options'){
            var bones = $scope.hand.bones;

            bone.opened = !bone.opened;

            if (isSameBone(bone, bones[index + 1]) && isSameBone(bone, bones[index + 2])){
                bones[index + 1].opened = bone.opened;
                bones[index + 2].opened = bone.opened;
                if (isSameBone(bone, bones[index + 3])){
                    bones[index + 3].opened = bone.opened;
                }
            }
        }
    };

    $scope.calculate = function(){
        $scope.hand.mode = 'calculation';
        $scope.score = handCalculations.calculate($scope.hand, $scope.$parent.$parent.text);
    };

    // --------------- private ------------------------

    var isSameBone = function(first_bone, second_bone){
        return (first_bone && second_bone && first_bone.value == second_bone.value && first_bone.type == second_bone.type);
    };

    var onCloseDialog = function(){
        if (!$scope.score) return;
        $scope.$emit('handCalculated', $scope.hand, $scope.score.score);

        setDefaultHand();
        $scope.$digest();
    };

    var setDefaultHand = function(){
        var games = $scope.$parent.games;

        $scope.hand = {
            mode: 'picking hand',
            bones: [],
            prevailing_wind: (games && games.length && _.last(games).prevailing_wind) || 'east',
            options: {}
        };
    };

    init();

}]);