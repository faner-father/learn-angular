/**
 * Created by cloud on 8/19/15.
 */

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text-plain'});
}).listen(1025);