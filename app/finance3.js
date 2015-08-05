/**
 * Created by cloud on 8/4/15.
 */
'use strict';

angular.module('finance_service_3', ['finance_base', 'common_utils'])
    .factory('finance_service_3_ctrl', ['finance_base_service', '$http', 'common_utils_service',
        function(finance_base_service, req, common_utils_service){
            var YAHOO_FINANCE_URL_PATTERN =
                    'http://query.yahooapis.com/v1/public/yql?q=select * from '+
                    'yahoo.finance.xchange where pair in ("PARIS")&format=json&'+
                    'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
            var currencies = finance_base_service.currencies;
            var usdToForeignRates = {};
            refresh();
            function refresh(){
                var url = YAHOO_FINANCE_URL_PATTERN.replace('PARIS', 'USD' + currencies.join('","USD'));
                common_utils_service.log(url);
                return req.jsonp(url).success(function(data){
                    common_utils_service.log('request success!');
                    var newUsdToForeignRates = {};
                    angular.forEach(data.query.results.rate, function(rate){
                        var currency = rate.id.substring(3, 6);
                        newUsdToForeignRates[currency] = window.parseFloat(rate.Rate);
                    });
                    common_utils_service.log(newUsdToForeignRates);
                    usdToForeignRates = newUsdToForeignRates;
                });
            };

            var convert = function(amount, inCurr, outCurr){
                if(amount == undefined || amount == null || isNaN(amount))
                    throw 'amount is not valid!' + amount;
                //is_curr_valid(inCurr, 'inCurr not valid ' + inCurr);
                //is_curr_valid(outCurr, 'outCurr not valid ' + outCurr);
                return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
            }
            return function(){
                var ret = {};
                common_utils_service.copyAttributes(finance_base_service, ret);
                ret.refresh = refresh;
                ret.convert = convert;
                return ret;
            }();
    }]);