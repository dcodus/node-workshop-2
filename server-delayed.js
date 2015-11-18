var http = require('http');

var requestListener = function(req, res){
    console.log(req.url);
    setTimeout(function(){
        res.end("<h1>HELLO THERE GOOD PEOPLE</h1>");
    },10000)
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT);