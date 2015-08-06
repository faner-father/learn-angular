/**
 * Created by cloud on 8/6/15.
 */

'use strict';


var notify_app = angular.module('notify', []);

//explicit inject way 1: use array annotation
notify_app.controller('notifyCtrl', ['$scope', 'notify_service', function($scope, ns){
    $scope.message = 'test';
    $scope.click = ns.click;
}]);

notify_app.factory('notify_service', [function(){
    var click_count = 0;
    return {
        click:function(message){
            click_count += 1;
            if(click_count == 3){
                window.alert(message);
                click_count = 0;
            }
        }
    }
}]);

//explicit inject way 2: use $inject property
var notify2Ctrl = function($scope, notify_service){
    $scope.message = 'test';
    $scope.click = notify_service.click;
};
notify2Ctrl.$inject = ['$scope', 'notify_service'];
notify_app.controller('notify2Ctrl', notify2Ctrl);


//implicit inject way:
notify_app.controller('notify3Ctrl', function($scope, notify_service){
    $scope.message = 'test';
    $scope.click = notify_service.click;
});