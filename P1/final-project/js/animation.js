let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let swimmer = document.getElementById("swimmer");
let gem1 = document.getElementById("gem1");
let gem2 = document.getElementById("gem2");
let gem3 = document.getElementById("gem3");
let monster = document.getElementById("monster");
let wave = document.getElementById("wave");


let playerX = 0;
let playerY = 125;
let playerSpeed = 2;
let playerXDir = 0;
let playerYDir = 0;
const SWIMMER_WIDTH = 70;
const SWIMMER_HEIGHT = 50;
const IMG_WIDTH = 70;
const IMG_HEIGHT = 50;
const GEM_WIDTH = 40;
const GEM_HEIGHT = 40;
let points = 0;
let newgem1;

let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");
let playerPoints = document.getElementById("points");

function drawLine() {
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(1000, 50);
    ctx.stroke();

}

function drawLine2() {
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(1000, 250);
    ctx.stroke();

}

function drawImage() {
    newgem1 = ctx.drawImage(gem1, 250, 50, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(gem2, 450, 100, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(monster, 600, 180, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(gem3, 800, 150, GEM_WIDTH, GEM_HEIGHT);
    //ctx.drawImage(wave, 750, 100, IMG_WIDTH, IMG_HEIGHT);
    //ctx.drawImage(wave, 250, 400, IMG_WIDTH, IMG_HEIGHT);
    //ctx.drawImage(wave, 100, 50, IMG_WIDTH, IMG_HEIGHT);

}

function drawPlayer() {
    ctx.drawImage(swimmer, playerX, playerY, SWIMMER_WIDTH, SWIMMER_HEIGHT);
}

function movePlayer() {
    playerX += playerSpeed * playerXDir;
    playerY += playerSpeed * playerYDir;

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 1000 - SWIMMER_WIDTH) {
        playerX = 1000 - SWIMMER_WIDTH;
    }
}

function checkSwimmerCollision() {
    //check vertical wall
    if (playerY > 250 - SWIMMER_HEIGHT) {
        playerY = 250 - SWIMMER_HEIGHT;
    } else if (playerY < 50) {
        playerY = 50;
    }
    //check horizontal wall
    if (playerX > 1000 - SWIMMER_WIDTH) {
        playerX = 1000 - SWIMMER_WIDTH
    } else if (playerX < 0) {
        playerX = 0;
    }

    // gem and monster collision
    if (newgem1 + GEM_WIDTH >= playerX && newgem1 <= playerX + SWIMMER_WIDTH && newgem1 + GEM_HEIGHT >= playerY && playerY <= newgem1 + GEM_HEIGHT) {
        newgem1.style.display = 'none';
        points += 1;
    }
}

function keyReleased(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keyupOutput.innerHTML = "key right code: " + key;

    if (key === 65) {
        playerXDir = 0;
    } else if (key === 68) {
        playerXDir = 0;
    }
    if (key === 87) {
        playerYDir = 0;
    } else if (key === 88) {
        playerYDir = 0;
    }
}

function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "key left code: " + key;

    //move player
    if (key === 65) {
        playerXDir = playerXDir - 1;
    } else if (key === 68) {
        playerXDir = playerXDir + 1;
    }
    if (key === 87) {
        playerYDir = playerXDir - 1;
    } else if (key === 88) {
        playerYDir = playerXDir + 1;
    }
}

function pointsDisplay() {
    playerPoints.innerHTML = "Points: " + points;
}

function refreshPlayer() {
    ctx.clearRect(0, 0, 1000, 300);
    drawImage();
    drawLine();
    drawLine2();
    movePlayer();
    drawPlayer();
    checkSwimmerCollision();
    pointsDisplay();
}

setInterval(refreshPlayer, 10);