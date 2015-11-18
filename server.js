var http = require('http');

//Created the listener
var requestListener = function(req, res){
    //Passing to res the string "hello world"
    res.end("HELLO WORLD!")
}

//The actual server
var server = http.createServer(requestListener);
server.listen(process.env.PORT);