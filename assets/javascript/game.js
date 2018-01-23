var wordArr = ["aristotle","plato","galileo"];
var numGuess = 6;
var guessArr = [];
var guessBool = true;
var repeat = false

if(numGuess === 0){
    prompt("YOU LOSE!!!");
}

var numRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrNum = numRandom(0,2);

var letterArr = wordArr[arrNum].split('');

console.log(letterArr);

var keyPress = function(event){
    console.log(event.key);
    for(var i = 0; i < guessArr.length; i++){
        if(event.key === guessArr[i]){
            console.log("Already guessed this letter, please try again");
            repeat = true;
        }
        else{
            repeat = false;
        }
    }

    if(repeat === false){
        for(var i = 0; i < letterArr.length; i++){
            if(event.key === letterArr[i]){
                
                console.log("Letter " + event.key + " is correct!");
                guessBool = true;
                break;
            }
            else{
                
                console.log("Letter " + event.key + " is incorrect!");
                guessBool = false;
                
            }
        }
    
        guessArr.push(String.fromCharCode(event.keyCode));
    
        if(guessBool === true){
            console.log("correct guess please guess again!");
            console.log(numGuess);
        }
    
        else if(guessBool === false){
            console.log("incorrect answer lose a life!");
            numGuess = numGuess - 1; 
            console.log(numGuess);
        }
    
        console.log(guessArr);
    }
    
}

addEventListener("keypress",keyPress);

console.log(guessArr);