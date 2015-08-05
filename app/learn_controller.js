/**
 * Created by cloud on 8/5/15.
 */
'use strict';

var scope_inheritance_app = angular.module('scope_inheritance_app', []);
scope_inheritance_app.controller('main_scope_ctrl', ['$scope', function($scope){
    $scope.name = 'main_name';
}]);
scope_inheritance_app.controller('child_scope_ctrl', ['$scope', function($scope){
    $scope.say = 'child say';
}]);