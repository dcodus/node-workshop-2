module.exports = {
    getFortune: function(){
        var request = require('request');
        var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
        var randomQuote;
        request({url: url}, function(error, response, body){
            var parsed = JSON.parse(body);
            randomQuote = parsed.quoteText;
            console.log(randomQuote);
        })
    }
}


