var http = require("http");
var request = require("request");

var requestListener = function(req, res){
    var wordRequested = req.url.substr(1).toLowerCase();
    var apiUrl = "http://words.bighugelabs.com/api/2/9cd0de86d1b597bb6246458626ff7c06/"+wordRequested+"/json";
    if(wordRequested !== 'favicon.ico'){
        request({url:apiUrl}, function(err, response, body){
            var parsedWord = JSON.parse(body);
            res.end("Here are the synonyms of the word '" +wordRequested+"': " + parsedWord.noun.syn.join(", "));
        })
    }
}
var server = http.createServer(requestListener);
server.listen(process.env.PORT);
