var apiKey = "AIzaSyBzCi__81f6T97pDZJDwaatlZOnPpZjo_o";

var request = require("request");
var http = require('http');
var cached = {};

//Created the listener
var requestListener = function(req, res){
    //Passing to res the string "hello world"
    if(req.url.substr(1) !== 'favicon.ico'){
        var location = req.url.substr(1).toLowerCase();
        //IMPORTANT Here we use an object to store the data. When we dont know the name of the key we use [] instead of the .
            if(!cached[location]){
                var urlLoc = "https://maps.googleapis.com/maps/api/geocode/json?address="+ encodeURIComponent(location)+"?key=AIzaSyBzCi__81f6T97pDZJDwaatlZOnPpZjo_o";
                request({url: urlLoc}, function(err, response, body){
                    var parsedBody = JSON.parse(body);
                    var lat = parsedBody.results[0].geometry.location.lat;
                    var lng = parsedBody.results[0].geometry.location.lng;
                    var locationOutput = "Based on your input, you are located at a latitude of " + lat.toString()+ " and a longitude of " +lng.toString()+ ".";
                    //When we want to create a object but dont know the name we use the [] instead of the .
                    cached[location] = {lat: lat, lng: lng}
                    res.end(locationOutput);
                })
            } else {
                var cachedCity = "Based on your input, you are located at a latitude of " +cached[location].lat+ " and a longitude of " +cached[location].lng+ ". This result is a cached one.";
                res.end(cachedCity);
            }
    }
}

//The actual server
var server = http.createServer(requestListener);
server.listen(process.env.PORT);