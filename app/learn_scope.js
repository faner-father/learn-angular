/**
 * Created by cloud on 8/6/15.
 */
'use strict';

var ee = angular.module('eventExample', []);
ee.controller('eventCtrl', ['$scope', '$window', function($scope, $window){
    $scope.count = 0;
    $scope.$on('MyEvent', function(){
        $scope.count += 1;
    });
    $scope.$on('ResetEvent', function(){
        $scope.count = 0;
    });
    $scope.echo = function(){
        window.alert('echo--');
    }
}]);