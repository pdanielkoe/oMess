angular.module('starter.services', [])

    .factory("Messages", function ($firebaseArray) {
        var itemsRef = new Firebase("https://omess-dev.firebaseio.com/world_mess");

        return {
            all: function () {
                return $firebaseArray(itemsRef);
            },
            latest:function(para){
                return $firebaseArray(itemsRef.limitToLast(para));
            }
        };
    })

;
