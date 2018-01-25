
var wordArr = ["yoshi","mario","fox","falco","pikachu","samus","link","zelda","shiek","captainfalcon","jigglypuff","mewtwo","marth","roy"];
var numGuess = 7;
var guessArr = [];
var guessBool = true;
var repeat = false;
var correctGuess = 0;
var arrayCount = 0;

var numRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrNum = numRandom(0,13);

var letterArr = wordArr[arrNum].split('');

console.log(letterArr);

// var guesSpan = document.querySelector("#numGuess"); //for numbered hangman
var lettSpan = document.querySelector("#lettGuess");
var wordSpan = document.querySelector("#currWord");

// guesSpan.innerHTML = numGuess; //for numbered hangman
lettSpan.innerHTML = guessArr;
// wordSpan.innerHTML = letterArr; //used for debugging and seeing my array display

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
                arrayCount= arrayCount+1;
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
        console.log(guesCount);
        console.log(arrayCount);

        console.log(correctGuess);
        console.log(letterArr.length);
        console.log(guessArr);
    }
    else if(repeat === true){
        // console.log("Already guessed this letter, please try again");
        // alert("Already guessed this letter, please try again.");
    }

    if(arrayCount === ((letterArr.length))){
        alert("Yayyy you won!! Click okay to start over.");
        window.location.reload(false);
    }
   
    // var guesSpan = document.querySelector("#numGuess");
    
    var lettSpan = document.querySelector("#lettGuess");
    
    // guesSpan.innerHTML = numGuess;
    lettSpan.innerHTML = guessArr.join(' ');

    document.querySelector("#currWord").innerHTML = blankspace.join("");


    if(numGuess === 6){
        var newImg = document.querySelector("#numGuess");
        newImg.src = 'assets/images/man1.png';
    }
    else if(numGuess === 5){
        var newImg = document.querySelector("#numGuess");
        newImg.src = 'assets/images/man2.png';
    }
    else if(numGuess === 4){
        var newImg = document.querySelector("#numGuess");
        newImg.src = 'assets/images/man3.png';
    }
    else if(numGuess === 3){
        var newImg = document.querySelector("#numGuess");
        newImg.src = 'assets/images/man4.png';
    }
    else if(numGuess === 2){
        var newImg = document.querySelector("#numGuess");
        newImg.src = 'assets/images/man5.png';
    }
    else if(numGuess === 1){
        var newImg = document.querySelector("#numGuess");
        newImg.src = 'assets/images/man6.png';
    }
    else if(numGuess === 0){
        var newImg = document.querySelector("#numGuess");
        newImg.src = 'assets/images/man7.png';
        alert("YOU LOSE!!! Click okay to start over.");
        window.location.reload(false);
    }

    
}

addEventListener("keypress",keyPress);

