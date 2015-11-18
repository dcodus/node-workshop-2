var fortune = require('./library/fortune').getFortune;

var http = require('http');

//Created the listener
var requestListener = function(req, res){
    fortune(function(quote){
       res.end(quote); 
    })
}

//The actual server
var server = http.createServer(requestListener);
server.listen(process.env.PORT);