//Return first character using CPS

//We are passing the first character to the ret function
function firstCharacter(str, ret){
    ret(str.slice(0,1));
}

//Here we are passing the string hello to firstCharacter and we pass it a function that is passed
//the first character. We console.log that character
firstCharacter('hello', function(character){
    console.log(character);
});

//Return the last character of a string

//We are passing the last character to the function ret
function returnLastChar(str, ret){
    ret(str[str.length - 1]);
}
//We are passing a string to returnLastChar and then we are passing it a function that is passed the last character as an argument.
returnLastChar('hello', function(character){
    console.log(character);
})

//First and last characters

function first(str, cb){
    cb(str[0]);
}

function last(str, cb){
    cb(str[str.length -1]);
}

function firstLast(str, cb){
    //We take the first function and in it we call the last one
    first(str, function(res1){
        //In the last function we pass the value of res1 and res2 to cb
        last(str, function(res2){
            //cb = res + res2
            cb(res1 + res2)
        })
    })
}

firstLast('hello', function(res){
    console.log(res)
})


