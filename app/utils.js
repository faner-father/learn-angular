/**
 * Created by cloud on 8/4/15.
 */
'use strict';

angular.module('common_utils', [])
    .factory('common_utils_service', function(){
        var log = function(msg){
            try{
                console.log(msg);
            }catch(err){
                //ignore log
            }
        };

        function parse_literal(v){
            switch(typeof v){
                case 'string':
                    return ['"', v, '"'].join('');
                //case 'object':
                //    return
                default:
                    return v;
            }
        }

        function setAttribute(obj, k, v){
            var es = ['obj', '["', k, '"]', ' = ', 'v'].join('');
            eval(es);
        }

        function copyAttributes(src, dest){
            if(src == null || src == undefined || dest == null || dest == undefined)
                throw 'src or dest is null or undefined!my!';
            for(var k in src)setAttribute(dest, k, src[k]);
        }

        return {
            log:log,
            copyAttributes:copyAttributes
        };
    });