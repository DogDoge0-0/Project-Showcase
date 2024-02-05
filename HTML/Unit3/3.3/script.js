// Initialization
let cpuCalc = false;
let min = 1;
let max = 100;
let html = document.querySelector("html")
let reverseBut = document.querySelector("#reverse");
let reverse = 1;
let ranNum = Math.floor(Math.random() * 100) + 1; //Math.floor() rounds DOWN to nearest whole number
let guessCount = 1;
let buttonResetGame = document.querySelector("#newGame");
let reset = false;
let info = document.querySelector("#info");
let headerMain = document.querySelector("#headerMain");
let buttonReset = document.querySelector("#buttonReset")
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessBefore = document.querySelector('#guess');
let buttonSubmit = document.querySelector('#submit');
let title = document.title;
let cpuGuess = Math.floor((min + max) / 2);
let cpuGuessCount = 0;
let cpuLastNum = 0;
let intervalID;
let block = false;
if (reset == true) {
  buttonResetGame.setAttribute("class", "button show");
}
else {
  buttonResetGame.setAttribute("class", "button hide");
}

function checkGuess() {

  const userGuess = Number(guessField.value);
  // If guessCount is exactly equal to 1, then they are on the first guess.

  if (guessCount === 1) {
    reverseBut.disabled = true;
    block = true;
    // On first turn, add text "previous guesses" to theat part of the HTML document, only happens once 
    guesses.textContent = 'Previous guesses: ';
    guesses.textContent += userGuess;
  }

  // Add on the user's guessed number to the area on the page that lists the user's guesses 
  if (guessCount > 1) {
    guesses.textContent += `, ${userGuess}`;
  }

  // Entire game 

  // Compare user's guess ot the computer's number to determine if the user has guessed correctly 
  if (userGuess === ranNum) {
    lastResult.textContent = "Congratulations! You got it right! The number was: " + ranNum;
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ''; // Clears element 
    setGameOver(); // Calls function that ends the game 
    reset = true;
    block = false;
  }

  // End game if on final turn 
  else if (guessCount === 10) {
    // Update page to indicate that user ran out of turns 
    lastResult.textContent = 'GAME OVER! You ran out of tries!';
    lowOrHi.textContent = '';
    setGameOver();
    reset = true;
    block = false;
  }

  // Othewise compare users guess to the computer's number 
  else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    // Check if guesses are lower than the number
    if (userGuess < ranNum) {
      lowOrHi.textContent = 'Last guess was too low!';
    }
    // Check if guesses are higher than the number
    else if (userGuess > ranNum) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  // Set up for next guess
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

// DEFINE FUNCTION that ends the gamplay (can this be legally defined as gamplay?)

function setGameOver() {
  // Stops user from doing something dumb
  guessField.disabled = true;
  guessSubmit.disabled = true;
  // The reset thingamabob
  if (reset == true) {
    buttonResetGame.setAttribute("class", "button show");
  }
  else {
    buttonResetGame.setAttribute("class", "button hide");
  }
  buttonReset.append(buttonResetGame);
  buttonResetGame.addEventListener('click', resetGame);
}
// DEFINE FUNCTION that gets page ready to play again
function resetGame() {
  guessCount = 1;
  cpuGuessCount = 0;
  guessSubmit.disabled = false;
  reverseBut.disabled = false;
  cpuCalc = false;

  // Grabs all of the <p> tags in the div
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  reset = false;
  min = 1;
  max = 100;
  // Hides the stuff in the <p> tags
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guesses.value = '';
  lowOrHi.value = '';
  lastResult.value = '';
  guessField.focus();

  // More hiding
  lastResult.style.backgroundColor = '';

  // New Number
  ranNum = Math.floor(Math.random() * 100) + 1;
  cpuGuess = Math.floor((min + max) / 2);
}

// Reverse Stuff
reverseBut.onclick = () => {
  reverse++;
  if (reverse % 2 == 0) {
    reverseBut.disabled = true;
    guessSubmit.disabled = true;
    if (window.self === window.top) {
      html.classList.add('inverseAnim');
    }
    else {
      html.classList.add('inverseAnimFrame');
    }

    setTimeout(() => {
      document.title = "Number Generating Game"
      headerMain.textContent = "🎯 Number Generating Game 🔢"
      info.textContent = "You will select a random number between 1 and 100. The computer will attempt to guess it in 10 tries. Just like you, the computer will know if the number was too high or too low."
      guessBefore.innerHTML = "ENTER A NUMBER:&nbsp;&nbsp;"
      buttonSubmit.setAttribute("value", "Submit Number");
      guessField.value = '';
      guessField.focus();
      resetGame();
    }, 1000);
    setTimeout(() => {
      if (window.self === window.top) {
        html.setAttribute("class", "inverse");
      } else {
        html.setAttribute("class", "inverseFrame");
      }
    }, 1980);
    setTimeout(() => {
      reverseBut.disabled = false;
      guessSubmit.disabled = false;
    }, 2100);
  }
  else {
    reverseBut.disabled = true;
    guessSubmit.disabled = true;
    if (window.self === window.top) {
      html.classList.add('inverseAnimReverse');
      html.classList.remove('inverse');
    }
    else {
      html.classList.add('inverseAnimReverseFrame');
      html.classList.remove('inverseFrame');
    }

    setTimeout(() => {
      document.title = "Number Guessing Game"
      headerMain.textContent = "🔢 Number Guessing Game 🎯"
      info.textContent = "A random number between 1 and 100 has been selected. See if you can guess it in 10 turns or fewer. If your guess was too high or too low, you will know."
      guessBefore.innerHTML = "ENTER A GUESS:&nbsp;&nbsp;"
      buttonSubmit.setAttribute("value", "Submit Guess");
      guessField.value = '';
      guessField.focus();
      resetGame();
    }, 1000);
    setTimeout(() => {
      html.setAttribute("class", "")
    }, 1980);
    setTimeout(() => {
      reverseBut.disabled = false;
    }, 2100);
  }
}

// Reverse Guess Stuff
function numberGen() {
  // Get Number
  const userNumber = Number(guessField.value);
  guessSubmit.disabled = true;
  reverseBut.disabled = true;
  cpuCalc = true;


  // Add on the user's guessed number to the area on the page that lists the cpu's guesses 
  // Checker
  intervalID = setInterval(() => {
    block = true;
    // Guess
    cpuGuess = Math.floor((min + max) / 2);
    if (cpuGuess === userNumber) { // Has the number been guessed correctly
      lastResult.textContent = "I got it correct! I guessed your number in " + cpuGuessCount + " tries!";
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = ''; // Clears element 
      setGameOver(); // Calls function that ends the game 
      reset = true;
      clearInterval(intervalID);
      block = false;
    }
    else if (cpuGuessCount === 10) {
      lastResult.textContent = 'I ran out of tries!';
      lastResult.style.backgroundColor = 'red';
      setGameOver(); // Reset game
      reset = true;
      clearInterval(intervalID);
      block = false;
    }
    else {

      // Check if the guess is correct
      if (cpuGuess > userNumber) {
        max = cpuGuess - 1;
        lowOrHi.textContent = 'My last guess was too high!';
        if (cpuGuess === userNumber) { // Has the number been guessed correctly
          lastResult.textContent = "I got it correct! I guessed your number in " + cpuGuessCount + " tries!";
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = ''; // Clears element 
          setGameOver(); // Calls function that ends the game 
          reset = true;
          clearInterval(intervalID);
          block = false;
        }
        else if (cpuGuessCount === 10) {
          lastResult.textContent = 'I ran out of tries!';
          lastResult.style.backgroundColor = 'red';
          setGameOver(); // Reset game
          reset = true;
          clearInterval(intervalID);
          block = false;
        }
      }
      else {
        min = cpuGuess + 1;
        lowOrHi.textContent = 'My last guess was too low!';
        if (cpuGuess === userNumber) { // Has the number been guessed correctly
          lastResult.textContent = "I got it correct! I guessed your number in " + cpuGuessCount + " tries!";
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = ''; // Clears element 
          setGameOver(); // Calls function that ends the game 
          reset = true;
          clearInterval(intervalID);
          block = false;
        }
        else if (cpuGuessCount === 10) {
          lastResult.textContent = 'I ran out of tries!';
          lastResult.style.backgroundColor = 'red';
          setGameOver(); // Reset game
          reset = true;
          clearInterval(intervalID);
          block = false;
        }
      }

      // Increment the guess count
      cpuGuessCount++;
    }
    if (cpuGuessCount === 1) { // Note previous guesses

      // On first turn, add text "previous guesses" to part of the HMTL document, only happens once 
      guesses.textContent = 'Previous guesses: ';
      guesses.textContent += `${cpuGuess}`;
    }
    else {
      guesses.textContent += `, ${cpuGuess}`;
    }
  }, 1000);
}
// The Click That Starts It All
guessSubmit.onclick = () => {
  const guessValue = parseInt(guessField.value);
  if (guessValue >= 1 && guessValue <= 100) {
    if (reverse % 2 == 0) {
      numberGen();
    }
    else {
      checkGuess();
    }
  }
  else {
    guessSubmit.disabled = true;
    guessSubmit.setAttribute("title", "Please put an acceptable number");
  }
}
// Stuff that needs to be checked constantly
setInterval(() => {
  const guessValue = parseInt(guessField.value);
  
  if ((!isNaN(guessValue) && guessValue >= 1 && guessValue <= 100) && (!(reverse % 2 == 0) || cpuCalc == false)) {
    guessSubmit.disabled = false;
    guessSubmit.setAttribute("title", "");
  }
  else {
    guessSubmit.disabled = true;
    guessSubmit.setAttribute("title", "Please put an acceptable number");
    guessSubmit.setAttribute("class", "buttonNoHover");
  }
  
  if (block == true) {
    reverseBut.disabled = true;
    reverseBut.setAttribute("title", "Please finish this game before switching to the other mode.");
    reverseBut.classList.remove("button");
    reverseBut.classList.add("buttonNoHover");
  }
  else {
    reverseBut.disabled = false;
    reverseBut.setAttribute("title", "")
    reverseBut.classList.remove("buttonNoHover");
    reverseBut.classList.add("button");
  }
  
  if (reset == true) {
    buttonResetGame.setAttribute("class", "button show");
  }
  else {
    buttonResetGame.setAttribute("class", "button hide");
    buttonResetGame.setAttribute("title", "");
  }
}, 100);
