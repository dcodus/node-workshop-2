// AIzaSyCWquekcpZC4Egb-Olx8WqtWhjJvflQfnM -- Key for static map
// AIzaSyBzCi__81f6T97pDZJDwaatlZOnPpZjo_o -- Key for geocode

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
            var lat = (parsedBody.results[0].geometry.location.lat).toString();
            var lng = (parsedBody.results[0].geometry.location.lng).toString();
            res.end("<div><img src='http://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lng+"&zoom=12&size=640x400&key=AIzaSyCWquekcpZC4Egb-Olx8WqtWhjJvflQfnM'></div>");
        })
    }
}

//The actual server
var server = http.createServer(requestListener);
server.listen(process.env.PORT);


