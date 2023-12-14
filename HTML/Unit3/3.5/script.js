//lock is the state in which the level select buttons are locked, and cannot be clicked on 
let level1 = document.querySelector('#level1');
let level2 = document.querySelector('#level2');
let level3 = document.querySelector('#level3');
let level4 = document.querySelector('#level4');
let level2Lock = document.querySelector('#level2Lock');
let level3Lock = document.querySelector('#level3Lock');
let level4Lock = document.querySelector('#level4Lock');
//back button in the modal menus 
let backs = document.querySelectorAll('.back');
//display's the score 
let displayScore = document.querySelector('#score');
//displays lives 
let displayLives = document.querySelector('#lives');
//displays which level you are playing on
let levelNowDisplay = document.querySelector('#levelNowDisplay');
//starts off the "levelNow" counter at zero, to be incrimented for every level you load
let levelNow = 0;
//allows for advancment to the next level 
let nextLevel = document.querySelector('#nextLevel');
//restarts the level
let restart = document.querySelector('#restart');
//restarts the whole game 
let restartFull = document.querySelector('#restartFull');
//shows the various popups in the gmae
let popupShow = document.querySelector("#popupShow");
//varable for popups
let i = 1;

//event listener for changing states of the how to popup 
popupShow.addEventListener("change", function() {
  i++;
  if (i % 2 == 0) {
    localStorage.setItem('popupShow', true);
    console.log('Hide');
  }
  else {
    localStorage.setItem('popupShow', false);
    console.log('Show');
  }
});

//various popups for the pregame and postgame senarios 
let popupWin = new bootstrap.Modal(document.querySelector('#popupWin'), {});
let popupLose = new bootstrap.Modal(document.querySelector('#popupLose'), {});
let popupPregame = new bootstrap.Modal(document.querySelector('#popupPregame'), {});
var brickBreak = document.querySelector('#brickBreak');

setInterval(() => {
  if (localStorage.getItem("levelsPassed") == 0 || localStorage.getItem("levelsPassed") == null) { // No levels passed
    level2.disabled = true;
    level2.setAttribute('class', 'buttonDisabled');
    level2Lock.classList.remove('hidden');
    level3.disabled = true;
    level3.setAttribute('class', 'buttonDisabled');
    level3Lock.classList.remove('hidden');
    level4.disabled = true;
    level4.setAttribute('class', 'buttonDisabled')
    level4Lock.classList.remove('hidden');
  }
  else if (localStorage.getItem("levelsPassed") == 1) { // One level passed
    level2.disabled = false;
    level2.setAttribute('class', 'button');
    level2Lock.classList.add('hidden');
    level3.disabled = true;
    level3.setAttribute('class', 'buttonDisabled');
    level3Lock.classList.remove('hidden');
    level4.disabled = true;
    level4.setAttribute('class', 'buttonDisabled')
    level4Lock.classList.remove('hidden');
  }
  else if (localStorage.getItem("levelsPassed") == 2) { // Two levels passed
    level2.disabled = false;
    level2.setAttribute('class', 'button');
    level2Lock.classList.add('hidden');
    level3.disabled = false;
    level3.setAttribute('class', 'button');
    level3Lock.classList.add('hidden');
    level4.disabled = true;
    level4.setAttribute('class', 'buttonDisabled');
    level4Lock.classList.remove('hidden');
  }
  else if (localStorage.getItem("levelsPassed") >= 3) { // Threelevels passed
    level2.disabled = false;
    level2.setAttribute('class', 'button')
    level2Lock.classList.add('hidden');
    level3.disabled = false;
    level3.setAttribute('class', 'button')
    level3Lock.classList.add('hidden');
    level4.disabled = false;
    level4.setAttribute('class', 'button')
    level4Lock.classList.add('hidden');
  }
  //issue with loading level from local storage
  else {
    alert('Oop, we have run into an error, please tell us of the following error message:\nFatal storage error: unable to parse levelsPassed input');
  }
}, 5);

//this block calls apon html to have some of the fancy UI stuff work
let progressClearConfirm = document.querySelector('#progressClearConfirm');
let progressClear = document.querySelector('#progressClear');
let pause = document.querySelector('#pause');
let play = document.querySelector('#play');
let levelSelect = document.querySelector('#levelSelect')
let credit = document.querySelector('#credit')
let canvas, ctx;
canvas = document.getElementById("gameCanvas");
ctx = canvas.getContext("2d");

//defining the size of the various game peices 
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 16;
var paddleWidth = 84;
var paddleX = (canvas.width - paddleWidth) / 2;
//for the key listener, set to false so the paddle doesn't move randomly 
var rightPressed = false;
var leftPressed = false;
let brickRowCount = 13;
var brickColumnCount;

// What level is this?
// Priority processing is given to the buttons that select different levels
if (parseInt(localStorage.getItem("levelsPassed")) >= 3 && localStorage.getItem('Level4Button') == 'true') {
  brickColumnCount = 6;
  levelsPassedNow = 3;
  levelNow = 4;
}
else if (parseInt(localStorage.getItem("levelsPassed")) >= 2 && localStorage.getItem('Level3Button') == 'true') {
  brickColumnCount = 5;
  levelsPassedNow = 2;
  levelNow = 3;
}
else if (parseInt(localStorage.getItem("levelsPassed")) >= 1 && localStorage.getItem('Level2Button') == 'true') {
  brickColumnCount = 4;
  levelsPassedNow = 1;
  levelNow = 2;
}
else if (parseInt(localStorage.getItem("levelsPassed")) >= 0 && localStorage.getItem('Level1Button') == 'true') {
  brickColumnCount = 3;
  levelsPassedNow = 0;
  levelNow = 1;
}
else if (parseInt(localStorage.getItem("levelsPassed")) == 3) {
  brickColumnCount = 6;
  levelsPassedNow = 3;
  levelNow = 4;
}
else if (parseInt(localStorage.getItem("levelsPassed")) == 2) {
  brickColumnCount = 5;
  levelsPassedNow = 2;
  levelNow = 3;
}
else if (parseInt(localStorage.getItem("levelsPassed")) == 1) {
  brickColumnCount = 4;
  levelsPassedNow = 1;
  levelNow = 2;
}
else if (parseInt(localStorage.getItem("levelsPassed")) == 0 || parseInt(localStorage.getItem("levelsPassed")) == null) {
  brickColumnCount = 3;
  levelsPassedNow = 0;
  levelNow = 1;
}
else { // Else fallback
  brickColumnCount = 3;
  levelsPassedNow = 0;
  levelNow = 1;
}
//local storage for the levels
localStorage.setItem('Level1Button', false);
localStorage.setItem('Level2Button', false);
localStorage.setItem('Level3Button', false);
localStorage.setItem('Level4Button', false);

//setting size and layout of the bricks 
var brickWidth = 64;
var brickHeight = 18;
var brickPadding = 9;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
let lives;
if (localStorage.getItem('lives')) {
  if (localStorage.getItem('lives') <= 0) {
    lives = 3;
  }
  else {
    lives = localStorage.getItem('lives');
  }
}
else {
  lives = 3;
}
var isPaused = false;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
//handles key input 
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("keydown", pauseKeyHandler);


function keyDownHandler(e) {
  if (!isPaused) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
    }
  }
}

function keyUpHandler(e) {
  if (!isPaused) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
    }
  }
}
// All of the button stuff
//in the level select tab, 
function level1But() {
  localStorage.setItem('Level1Button', true);
  document.location.reload();
}

function level2But() {
  localStorage.setItem('Level2Button', true);
  document.location.reload();
}

function level3But() {
  localStorage.setItem('Level3Button', true);
  document.location.reload();
}

function level4But() {
  localStorage.setItem('Level4Button', true);
  document.location.reload();
}

function mouseMoveHandler(e) {
  if (!isPaused) { // Check if the game is not paused
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth / 2;
    }
  }
}

function resetLevel() {
  localStorage.clear();
  document.location.reload();
}

function pauseGame() {
  isPaused = true;
  pause.classList.add('hidden');
  play.classList.remove('hidden');
  cancelAnimationFrame(animationId);
}
//plays the games and does not do your taxes 
function playGame() {
  isPaused = false;
  play.classList.add('hidden');
  pause.classList.remove('hidden');
  animationId = requestAnimationFrame(draw);
}
//advances you to the next level 
function nextLevelFinder() {
  if (levelNow == 1) {
    level2But();
  }
  else if (levelNow == 2) {
    level3But();
  }
  else if (levelNow == 3) {
    level4But();
  }
}
//allows for the current level to be restarted 
function restartLevel() {
  if (levelNow == 1) {
    level1But();
  }
  else if (levelNow == 2) {
    level2But();
  }
  else if (levelNow == 3) {
    level3But();
  }
  else if (levelNow == 4) {
    level4But();
  }
}
//different than the other ones becuase you cannot advance past level 4 (outside the function)
if (levelNow == 4) {
  nextLevel.disabled = true;
  nextLevel.setAttribute('title', 'You have completed the entire game, congratulations!');
  nextLevel.classList.add('buttonDisabled');
  nextLevel.classList.remove('button');
}

//listeners for any of the events that could happen inbetween the player and the game, levels, pause, reseting etc 
nextLevel.addEventListener("click", nextLevelFinder)
level1.addEventListener("click", level1But);
level2.addEventListener("click", level2But);
level3.addEventListener("click", level3But);
level4.addEventListener("click", level4But);
progressClearConfirm.addEventListener("click", resetLevel);
levelSelect.addEventListener('click', pauseGame);
credit.addEventListener('click', pauseGame);
pause.addEventListener('click', pauseGame);
play.addEventListener('click', playGame);
backs.forEach(back => {
  back.addEventListener('click', playGame);
});
restart.addEventListener('click', restartLevel);
restartFull.addEventListener('click', resetLevel);
document.addEventListener("keydown", keyDownHandler);


// Pause stuff
function pauseKeyHandler(e) {
  if (e.key === "Escape" || e.key === " ") {
    isPaused = !isPaused; // Toggle the pause state when the Escape key or 'pause' button is pressed
    if (isPaused) {
      pauseGame();
    } else {
      playGame();
    }
  }
  else if (e.target.onclick === playGame) {
    playGame();
  }
}
//improved collision detection, alllows for more angles. I have no clue what any of the variables mean becasue ChatGPT wrote it and it works. 
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        // Collision detection for bricks
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy; // Reverse the ball's vertical direction
          b.status = 0;
          score++;
          brickBreak.play();
          if (score == brickRowCount * brickColumnCount) {
            // Handle level completion logic
          }

          // Randomize the ball's horizontal direction
          dx = Math.random() > 0.5 ? -dx : dx;
        }
      }
    }
  }

  // Check collision with the paddle
  if (x + ballRadius > paddleX && x - ballRadius < paddleX + paddleWidth && y + ballRadius > canvas.height - paddleHeight) {
    var collisionPoint = x - (paddleX + paddleWidth / 2);
    collisionPoint = collisionPoint / (paddleWidth / 2);
    var angle = collisionPoint * Math.PI / 3;

    // Calculate the new ball's horizontal direction randomly
    dx = Math.sin(angle) * 3;
    dx = Math.random() > 0.5 ? -dx : dx;

    dy = -Math.cos(angle) * 3; // Reverse the ball's vertical direction
  }

  // Check collision with the canvas borders
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx; // Reverse the ball's horizontal direction
  }
  if (y + dy < ballRadius) {
    dy = -dy; // Reverse the ball's vertical direction
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy; // Reverse the ball's vertical direction if it hits the paddle
    } else {
      // Collision detection for non-red bricks
      if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
        dy = -dy;
        b.status = 0;
        score++;
        brickBreak.play();
        //allows for the advancment of levels, when you beat one level, writes to local storage allowing you to advance to the next level 
        if (score == brickRowCount * brickColumnCount) {
          if (levelsPassedNow == 3) {
            localStorage.setItem("levelsPassed", 4);
            levelsPassedNow = 4;
            popupWin.show();
            pauseGame();
          }
          else if (levelsPassedNow == 2) {
            localStorage.setItem("levelsPassed", 3);
            levelsPassedNow = 3;
            popupWin.show();
            pauseGame();
          }
          if (levelsPassedNow == 1) {
            localStorage.setItem("levelsPassed", 2);
            levelsPassedNow = 2;
            popupWin.show();
            pauseGame();
          }
          else if (levelsPassedNow == 0) {
            localStorage.setItem("levelsPassed", 1);
            levelsPassedNow = 1;
            popupWin.show();
            pauseGame();
          }
        }
      }
    }
  }

  // Check collision with the paddle
  if (x + ballRadius > paddleX && x - ballRadius < paddleX + paddleWidth && y + ballRadius > canvas.height - paddleHeight) {
    var collisionPoint = x - (paddleX + paddleWidth / 2);
    collisionPoint = collisionPoint / (paddleWidth / 2);
    var angle = collisionPoint * Math.PI / 3; // Adjust the angle to change the ball's trajectory

    dx = Math.sin(angle) * 3;
    dy = -Math.cos(angle) * 3;
  }
}


/*function drawObst() { //dont work b/c ran out of time and very hard it would have drawn a indistructible object
  if (levelNow == 3) {
    console.log('Checks out');
    var obst = [
      { x: 100, y: 200, image: "brick/brick6.png" },
      { x: 300, y: 150, image: "brick/brick6.png" },
      // Add more obstacles with their respective x, y coordinates and image paths
    ];

    for (var i = 0; i < obst.length; i++) {
      var obstObj = obst[i];
      var brickObstImage = new Image();
      brickObstImage.src = obstObj.image;

      brickObstImage.onload = function() {
        ctx.drawImage(
          brickObstImage,
          obstObj.x,
          obstObj.y,
          brickWidth,
          brickHeight
        );
      };
      console.log('renderin');
      // Draw the obstacle image immediately without waiting for the image to load
      ctx.drawImage(
        brickObstImage,
        obstObj.x,
        obstObj.y,
        brickWidth,
        brickHeight
      );
    }
  }
}
*/



//draws the ball 
function drawBall() {
  var ballImage = new Image();
  ballImage.src = "ball_image.png";
  ctx.beginPath();
  ctx.drawImage(ballImage, x - ballRadius, y - ballRadius, ballRadius * 2, ballRadius * 2);
  ctx.closePath();
}
//draws the paddle 
function drawPaddle() {
  var paddleImage = new Image();
  paddleImage.src = "paddles_image.png";

  ctx.drawImage(paddleImage, paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
}
//draws the bricks 
function drawBricks() {
  //images are for the various types of bricks (one brick type per row)
  var images = [
    "brick/brick1.png",
    "brick/brick2.png",
    "brick/brick3.png",
    "brick/brick4.png",
    "brick/brick5.png",
    "brick/brick6.png",
  ];

  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;

        var imageIndex = c % images.length; // Choose image based on row index
        var brickImage = new Image();
        brickImage.src = images[imageIndex];

        brickImage.onload = function() {
          ctx.drawImage(brickImage, brickX, brickY, brickWidth, brickHeight);
        };

        // Draw the brick image immediately without waiting for the image to load
        ctx.drawImage(brickImage, brickX, brickY, brickWidth, brickHeight);
      }
    }
  }
}

//these 3 functions draw the text at the top of the playable area
function drawScore() {
  displayScore.textContent = "Score: " + score;
}
function drawLives() {
  displayLives.textContent = "Lives: " + lives;
}
function drawLevel() {
  levelNowDisplay.textContent = levelNow;
}

//part of the code that is responsible for redering everything 
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  // drawObst();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  drawLevel();
  collisionDetection();
  //puased game logic
  if (!isPaused) {
    // Only update ball position if the game is not paused
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if (y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        lives--;
        localStorage.setItem('lives', lives);

        if (!lives) {
          // Game over logic

          // Play audio (when you loose)
          var audio = document.querySelector('#audio');
          audio.play();

          popupLose.show();
          pauseGame();
        } else {
          x = canvas.width / 2;
          y = canvas.height - 30;
          dx = 3;
          dy = -3;
          paddleX = (canvas.width - paddleWidth) / 2;
        }
      }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }

    x += dx;
    y += dy;
  }

  requestAnimationFrame(draw);
}
draw();

// How to play Popup + detect if it should show up
if (localStorage.getItem('popupShow') == 'false' || !localStorage.getItem('popupShow')) {
  popupPregame.show();
  pauseGame();
}

// Dev Extra Stuff
// Type 'allLevelPass()' into console to activate
function allLevelPass() {
  levelsPassedNow = 3;
  progressClear.classList.remove('buttonDisabled');
  progressClear.classList.add('button');
  progressClear.disabled = false;
  localStorage.setItem('levelsPassed', 3);
  console.log('Levels Bypassed!');
}
