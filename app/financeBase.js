/**
 * Created by cloud on 8/4/15.
 */

'use strict';

angular.module('finance_base', [])
    .factory('finance_base_service', function(){
        var currencies = ['EUR', 'CNY', 'USD'];
        var inCurr = 'USD';
        var usdToForeignRates = {
            USD: 1,
            EUR: 0.61,
            CNY: 6.0
        };

        function is_curr_valid(curr, error){
            if(currencies.indexOf(curr) < 0){
                if(error == undefined || error == null){
                    return false;
                }else{
                    throw error;
                }
            }
        }

        var convert = function(amount, inCurr, outCurr){
            if(amount == undefined || amount == null || isNaN(amount))
                throw 'amount is not valid!' + amount;
            is_curr_valid(inCurr, 'inCurr not valid ' + inCurr);
            is_curr_valid(outCurr, 'outCurr not valid ' + outCurr);
            return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
        }

        return {
            currencies: currencies,
            convert: convert
        };
    });

