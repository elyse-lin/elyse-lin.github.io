//get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

//get paragraph items
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

//player position and movement
let playerX = 250;
let playerY = 250;
let playerSpeed = 2;
let playerXDir = 0;
let playerYDir = 0;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

//ball position and movement
let ballX = 50;
let ballY = 100;
let ballXDir = 2.5;
let ballYDir = 2;
const BALL_RADIUS = 15;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, 100, 20);
}

function movePlayer() {
    playerX += playerSpeed * playerXDir;
    playerY += playerSpeed * playerYDir;

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 500 - PADDLE_WIDTH) {
        playerX = 500 - PADDLE_WIDTH;
    }
}


function refreshPlayer() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    //animate ball
    checkBallCollision();
    moveBall();
    drawBall();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}

function checkBallCollision() {
    //check vertical wall
    if ((ballY > 500 - BALL_RADIUS) || (ballY < 0 + BALL_RADIUS)) {
        ballYDir = ballYDir * -1;
    }
    if ((ballX > 500 - BALL_RADIUS) || (ballX < 0 + BALL_RADIUS)) {
        ballXDir = ballXDir * -1;
    }
}
//when key is pressed
function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "key down code: " + key;

    //move player
    if (key === 37) {
        playerXDir = -1;
    } else if (key === 39) {
        playerXDir = 1;
    }
    if (key === 38) {
        playerYDir = -1;
    } else if (key === 40) {
        playerYDir = 1;

    }
}
//when key is released
function keyReleased(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keyupOutput.innerHTML = "key up code: " + key;

    if (key === 37) {
        playerXDir = 0;
    } else if (key === 39) {
        playerXDir = 0;
    }
    if (key === 38) {
        playerYDir = 0;
    } else if (key === 40) {
        playerYDir = 0;

    }
}

//object position
let xPosition = 0;
let yPosition = 0;
let speed = 1;


//rect moving horizontally
function moveHorizontal() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);
    //draw rect at current position
    ctx.fillRect(xPosition, 0, 20, 20);
    //move the x position over by x pixels
    xPosition += 1;
    //did I hit the wall? if so wrap around
    if (xPosition >= 500) {
        xPosition = 0;
    }
}
//setInterval(moveHorizontal, 10);

//#1 rect moving vertically then wrapping around
function moveVertical() {
    ctx.clearRect(0, 0, 500, 500);
    //draw rect at current position
    ctx.fillRect(0, yPosition, 20, 20);
    //move the x position over by x pixels
    yPosition += 1;
    //did I hit the wall? if so wrap around
    if (yPosition >= 500) {
        yPosition = 0;
    }
}
//setInterval(moveVertical, 10);

//#2 rect bouncing horizontally
function rectBounce() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);
    //draw rect at current position
    ctx.fillRect(xPosition, 0, 20, 20);
    //move the x position over by x pixels
    xPosition += speed;
    //did I hit the wall? if so wrap around
    if (xPosition >= 490) {
        speed = -1;
    } else if (xPosition === 0) {
        speed = 1;
    }
}

//setInterval(rectBounce, 10);
setInterval(refreshPlayer, 10);

//#3 ball bouncing horizontally