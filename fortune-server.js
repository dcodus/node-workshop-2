var fortune = require('./library/fortune').getFortune;

var http = require('http');

//Created the listener
var requestListener = function(req, res){
    res.end("The shoe that fits one person pinches another; there is no recipe for living that suits all cases.")
}

//The actual server
var server = http.createServer(requestListener);
server.listen(process.env.PORT);