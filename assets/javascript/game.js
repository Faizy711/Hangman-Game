
var wordArr = ["aristotle","plato","socrates","pythagoras","hippocrates","parmenides"];
var numGuess = 6;
var guessArr = [];
var guessBool = true;
var repeat = false;
var correctGuess = 0;

var numRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrNum = numRandom(0,5);

var letterArr = wordArr[arrNum].split('');

console.log(letterArr);

var guesSpan = document.querySelector("#numGuess");
var lettSpan = document.querySelector("#lettGuess");
var wordSpan = document.querySelector("#currWord");

guesSpan.innerHTML = numGuess;
lettSpan.innerHTML = guessArr;
// wordSpan.innerHTML = letterArr;

var blankspace = [];

for(var i = 0; i < letterArr.length; i++){
    blankspace[i] = "_ ";
}

document.querySelector("#currWord").innerHTML = blankspace.join("");


var keyPress = function(event){
    console.log(event.key);
    
    for(var i = 0; i < guessArr.length; i++){
        if(event.key === guessArr[i]){
            console.log("Already guessed this letter, please try again");
            alert("Already guessed this letter, please try again.");
            repeat = true;
            break;
        }
        else{
            repeat = false;
        }
    }

    if(repeat === false){
        var guesCount = 0;
        for(var i = 0; i < letterArr.length; i++){
            

            var element = document.querySelector("#currWord")
            if(event.key === letterArr[i]){
                
                console.log("Letter " + event.key + " is correct!");
                blankspace[i] = letterArr[i];
                guesCount++;
            }
        }

        if(guesCount === 0){
            guessBool = false;
        }
        else if(guesCount > 0){
            guessBool = true;
        }
    
        guessArr.push(String.fromCharCode(event.keyCode));
    
        if(guessBool === true){
            console.log("correct guess please guess again!");
            
            console.log(numGuess);
            correctGuess = correctGuess + 1;
        }
        else if(guessBool === false){
            console.log("incorrect answer lose a life!");
            numGuess = numGuess - 1; 
            console.log(numGuess);
        }
    
        console.log(guessArr);
    }
    else{
        // console.log("Already guessed this letter, please try again");
        // alert("Already guessed this letter, please try again.");
        repeat = true;

        
    }

    if(correctGuess === letterArr.length){
        alert("Yayyy you won!!");
        window.location.reload(false);
    }
    else if(numGuess === 0){
        alert("YOU LOSE!!!");
        window.location.reload(false);
    }

    var guesSpan = document.querySelector("#numGuess");
    var lettSpan = document.querySelector("#lettGuess");
    guesSpan.innerHTML = numGuess;
    lettSpan.innerHTML = guessArr;

    document.querySelector("#currWord").innerHTML = blankspace.join("");
}

addEventListener("keypress",keyPress);
