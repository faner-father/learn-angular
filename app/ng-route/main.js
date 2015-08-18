/**
 * Created by cloud on 8/18/15.
 */

;
(function () {
    angular.module('main', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/posts', {
                    templateUrl: "list.html",
                    controller: 'ListCtrl'
                })
                .when('/posts/:id', {
                    templateUrl: "detail.html",
                    controller: "DetailCtrl"
                })
                .otherwise({
                    redirectTo: "/posts"
                })
        }])
        .controller('ListCtrl', ['$scope', function ($scope) {

        }])
        .controller('DetailCtrl', ['$scope', '$routeParams',
            function ($scope, $routeParams) {
                $scope.id = $routeParams.id;
            }])
})();

