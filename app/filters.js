/**
 * Created by cloud on 8/17/15.
 */
;
(function () {
    angular.module('filters_mod', [])
        .filter('filter2', function () {
            return function (input) {
                return (input || '') + '-----';
            }
        })
        .filter('test_filter', function(){
            return function(input){
                return (input || '') + '|||' ;
            }
        })
        .controller('ctrl1', function($scope){
            $scope.name = 'ctrl1';
        });

    angular.module('mod2', [])
        .filter('f2', function(){
            return function(input){
                return (input || '') + '~~~' ;
            }
        });

    angular.module('test_filter_app', ['mod2', 'filters_mod'])
        .filter('test_filter1', function () {
            return function (input) {
                return (input || '') + '====';
            }
        })
        .controller('test_filter_ctrl', function () {
        });
})();