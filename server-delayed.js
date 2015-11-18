var http = require('http');

var requestListener = function(req, res){
    setTimeout(function(){
        res.end("<h1>HELLO THERE GOOD PEOPLE</h1>");
    })
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT);