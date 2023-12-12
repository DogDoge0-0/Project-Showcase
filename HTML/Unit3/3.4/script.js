// Initialization
let heading = document.querySelector("#colorValue"); // SELECT the HTML element with a id of colorValue
let buttons = document.querySelectorAll(".colorButton"); // Select ALL elements with class of colorButton
let answerMessage = document.querySelector('#answer');
let red = 0;
let green = 0;
let blue = 0;
let streakDisplay = document.querySelector("#streak");
let resetButton = document.querySelector("#resetButton")
answerMessage.innerHTML = "<br>";
streakDisplay.innerHTML = "<br>";
let e = 0;
let streak = 0;

// DEFINE FUNCTION that sets background color bast on values for red, green and blue
function setButtonColor(button, red, green, blue) {
  button.setAttribute("style", "background-color: rgb(" + red + ", " + green + " ," + blue + "); filter: brightness(1);");
}

// DEFINE function to gen random number between 0 - 255
function makeColorValue() {
  return Math.round(Math.random() * 255);
}

// Pick one of the random colors  as the correct answer and display its RGB color value
let answerButton = Math.round(Math.random() * (buttons.length - 1));

// Stops the game 
function stopGame() {
  buttons.forEach(button => {
    setTimeout(() => {
      button.style.filter = 'brightness(0.5)';
    }, 500); // delay of 0.5 seconds
  });
  
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Defines the event handler for button clicks
function buttonClickHandler() {
  e++;
  if (this === buttons[answerButton] && e < 3) {
    streak++;
    answerMessage.innerHTML = "Correct!";
    streakDisplay.innerHTML = "Answer Streak: " + streak;
    stopGame();
  }
  else if (e == 1) {
    answerMessage.innerHTML = "Incorrect, give it another go!";
    if (streak != 0) {
      streakDisplay.innerHTML = "Your Answer Streak has been lost!";
      streak = 0;
    }
  }
  else if (e == 2) {
    answerMessage.innerHTML = "Nope, try once more.";
    if (streak != 0) {
      streakDisplay.innerHTML = "Your Answer Streak has been lost!";
      streak = 0;
    }
  }
  else {
    answerMessage.innerHTML = "You ran out of tries! Press 'Reset' to play again!";
    buttons.disabled = true;
    if (streak != 0) {
      streakDisplay.innerHTML = "Your Answer Streak has been lost!";
      streak = 0;
      stopGame();
    }
  }
}

// Generates random values for the colors of all buttons
function startGame() {
  // Reset stuff (not for buttons)
  answerButton = Math.round(Math.random() * (buttons.length - 1));
  answerMessage.innerHTML = "<br>";
  if (streak == 0) {
    streakDisplay.innerHTML = "<br>";
  }
  e = 0;
  
  buttons.forEach(button => {
    button.disabled = false;
  });
  // Add event listeners to each button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener('click', buttonClickHandler); // Remove any previous event listeners
    buttons[i].addEventListener('click', buttonClickHandler); // Add new event listener

    // Reset stuff (for buttons)
    red = makeColorValue();
    green = makeColorValue();
    blue = makeColorValue();
    // buttons[i] represents the individual item in the list for that loop
    setButtonColor(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }
  }
}

// The stuff that starts it all
resetButton.onclick = () => {
  startGame();
}
startGame();