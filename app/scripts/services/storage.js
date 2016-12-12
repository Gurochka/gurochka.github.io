Mahjong.service('storage', [function() {
    return {
        set: function(key, value){
            localStorage[key] = angular.toJson(value);
        },
        get: function(key){
            return angular.fromJson(localStorage[key]);
        }
    }
}]);