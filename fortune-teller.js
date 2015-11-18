var fortune = require('./library/fortune').getFortune;

process.argv.forEach(function(val, index, array) {
  if(index === 2){
      console.log("You have requested " + val + " fortunes.")
      //Ask how to call fortune() different
  }
});