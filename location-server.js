var apiKey = "AIzaSyBzCi__81f6T97pDZJDwaatlZOnPpZjo_o";

var request = require("request");
var http = require('http');


//Created the listener
var requestListener = function(req, res){
    //Passing to res the string "hello world"
    if(req.url.substr(1) !== 'favicon.ico'){
        var location = req.url.substr(1).toLowerCase();
        var urlLoc = "https://maps.googleapis.com/maps/api/geocode/json?address="+ encodeURIComponent(location)+"?key=AIzaSyBzCi__81f6T97pDZJDwaatlZOnPpZjo_o";
        request({url: urlLoc}, function(err, response, body){
            var parsedBody = JSON.parse(body);
            var lat = parsedBody.results[0].geometry.location.lat;
            var lng = parsedBody.results[0].geometry.location.lng;
            var location = "Based on your input, you are locate at a latitude of " + lat.toString()+ " and a longitude of " +lng.toString()+ "."; 
            res.end(location);
        })
    }
}

//The actual server
var server = http.createServer(requestListener);
server.listen(process.env.PORT);