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

angular.module('invoice2', ['finance2'])
    .controller('invoice2Ctrl', function($scope, currencyConverter){
        var x = {
            qty: 1,
            cost: 2,
            inCurr: 'EUR',
            total: function(outCurr){
                return currencyConverter.convertCurrency($scope.qty * $scope.cost, $scope.inCurr, outCurr);
            },
            pay: function(){
                window.alert('pay...');
            },
            currencies: currencyConverter.currencies
        };
        copyAttributes(x, $scope);
    });

angular.module('invoice3', [])
    .controller('invoice3Ctrl', function($scope){
        var $ = {
            qty: 1,
            cost: 2,
            inCurr: 'EUR',
            total: function(outCurr){
                window.alert('to be inplemented!' + outCurr)
            },
            pay: function(){
                window.alert('pay!!!');
            }
        };
        copyAttributes($, $scope)
    });

angular.bootstrap(document.getElementById("app-invoice2"), ['invoice2']);
angular.bootstrap(document.getElementById('app-invoice3'), ['invoice3'])
//angular.module('invoice2', ['finance2'])
//    .controller('invoice2Ctrl', function($scope, currencyConverter){
//        $scope.qty = 1;
//        $scope.currencies = currencyConverter.currencies ;
//    });