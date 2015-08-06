/**
 * Created by cloud on 8/4/15.
 */
'use strict';

angular.module('invoice1', [])
    .controller('InvoiceCtrl', function(){
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.usdToForeignRates = {
            USD: 1,
            EUR: 0.64,
            CNY: 6.07
        };

        this.currencies = ['EUR', 'USD', 'CNY'];

        this.usdToForeignRates = {
            USD: 1,
            EUR: 0.64,
            CNY: 6.07
        };

        this.convertCurrency = function convertCurrency(amount, inCurr, outCurr){
            return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
        };

        this.total = function(outCurr){
            return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
        };

        this.pay = function(){window.alert('pay');};
    });

angular.module('invoice2', ['finance2', 'common_utils']).config
    .controller('invoice2Ctrl', function($scope, currencyConverter, common_utils_service){
        var x = {
            qty: 1,
            cost: 2,
            inCurr: 'USD',
            total: function(outCurr){
                return currencyConverter.convertCurrency($scope.qty * $scope.cost, $scope.inCurr, outCurr);
            },
            pay: function(){
                window.alert('pay...');
            },
            currencies: currencyConverter.currencies
        };
        common_utils_service.copyAttributes(x, $scope);
    });

angular.module('invoice3', ['finance_service_3', 'common_utils'])
    .controller('invoice3Ctrl', function($scope, finance_service_3_ctrl, common_utils_service){
        var $ = {
            qty: 1,
            cost: 2,
            inCurr: 'USD',
            currencies: finance_service_3_ctrl.currencies,
            total: function(outCurr){
                return finance_service_3_ctrl.convert($scope.qty * $scope.cost, $scope.inCurr, outCurr);
            },
            pay: function(){
                window.alert('pay!!!');
            },
            refresh:finance_service_3_ctrl.refresh
        };
        common_utils_service.copyAttributes($, $scope)
    });

var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyCtrl', ['$scope', function($scope){
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);
angular.bootstrap(document.getElementById("app-invoice2"), ['invoice2']);
angular.bootstrap(document.getElementById('app-invoice3'), ['invoice3']);
angular.bootstrap(document.getElementById('app-spicyApp1'), ['spicyApp1']);