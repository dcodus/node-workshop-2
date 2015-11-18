var http = require('http');

var requestListener = function(req, res){
    var start = new Date().getTime();
    while (new Date().getTime() - start < 10000);
    res.end("Hello");
// INSERT YOUR res.writeHead / res.end lines after this line
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT);


