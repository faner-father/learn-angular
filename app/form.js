/**
 * Created by cloud on 8/6/15.
 */
'use strict';

angular.module('form', [])
    .controller('formCtrl', ['$scope', function($scope){
        $scope.master = {};

        $scope.reset = function(){
            $scope.master = $scope.user = {};
        }

        $scope.update = function(user){
            $scope.master = user;
        }
    }])