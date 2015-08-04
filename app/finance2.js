/**
 * Created by cloud on 8/4/15.
 */
'use strict';

angular.module('finance2', [])
    .factory('currencyConverter', function(){

        var currencies = ['EUR', 'USD', 'CNY'];

        var usdToForeignRates = {
            USD: 1,
            EUR: 0.64,
            CNY: 6.07
        };

        var convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
            //for(var e in arguments)log(arguments[e]);
            return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
        };
        return {
            currencies: currencies,
            convertCurrency: convertCurrency
        }
    });