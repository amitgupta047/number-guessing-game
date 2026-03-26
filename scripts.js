let randomNumber = parseInt(Math.random() * 100 + 1);

const subtmit = document.querySelector('#subt');
const userInput = document.querySelector('#guessNo');
const guessSlot = document.querySelector('.Guesses');
const remaining = document.querySelector('.resultguess');
const startOver = document.querySelector('.resultpara');
const lowOrhi = document.querySelector('.lowOrhi');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    subtmit.addEventListener('click',  function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1){
        alert("Please enter a more than 1")
    }else if(guess > 100){
        alert("Please enter a less than 100")
    }else{
        preGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`The number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`The number is too High`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}   `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrhi.innerHTML = `<h3> ${message} </h3>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h3 class="newGame">Start New Game</h3>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('.newGame')
    newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
    })
}
 







