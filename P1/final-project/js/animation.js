let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let swimmer = document.getElementById("swimmer");
let gem1 = document.getElementById("gem1");
let gem2 = document.getElementById("gem2");
let gem3 = document.getElementById("gem3");
let monster = document.getElementById("monster");
let wave = document.getElementById("wave");
let flag = document.getElementById("flag");

let gemexists = true;
let gemexists2 = true;
let gemexists3 = true;
let isAlive = true;

let timer = 15;
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
let gem1X = 250;
let gem1Y = 60;
let gem2X = 450;
let gem2Y = 100;
let gem3X = 800;
let gem3Y = 150;
let monsterX = 600;
let monsterY = 175;
let monsterXdir = 1.5;
let monsterYdir = 1.5;

let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");
let playerPoints = document.getElementById("points");

function refreshUI() {
    let timerMeter = document.getElementById("timer")
    timerMeter.value = timer;
    let timerParagraph = document.getElementById("timer-paragraph");
    timerParagraph.innerHTML = timer;

}

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
    ctx.drawImage(gem1, gem1X, gem1Y, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(gem2, gem2X, gem2Y, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(monster, monsterX, monsterY, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(gem3, gem3X, gem3Y, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(flag, 925, 50, 100, 200);
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

function moveMonster() {
    monsterY += monsterYdir;
    monsterX += monsterXdir;
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
    //monster bounce
    if ((monsterY > 250 - GEM_HEIGHT) || (monsterY < 50)) {
        monsterYdir = monsterYdir * -1;
    }
    //check horizontal wall
    if ((monsterX > 1000 - GEM_WIDTH) || (monsterX < 0)) {
        monsterXdir = monsterXdir * -1;
    }

    // gem and monster collision
    if (gem1X + GEM_WIDTH >= playerX && gem1X <= playerX + SWIMMER_WIDTH && gem1Y + GEM_HEIGHT >= playerY && playerY <= gem1Y + GEM_HEIGHT) {
        ctx.clearRect(gem1X, gem1Y, GEM_WIDTH, GEM_HEIGHT);
        if (gemexists === true) {
            points += 1;
        }
        gemexists = false;
    }
    if (gem2X + GEM_WIDTH >= playerX && gem2X <= playerX + SWIMMER_WIDTH && gem2Y + GEM_HEIGHT >= playerY && playerY <= gem2Y + GEM_HEIGHT) {
        ctx.clearRect(gem2X, gem2Y, GEM_WIDTH, GEM_HEIGHT);
        if (gemexists2 === true) {
            points += 1;
        }
        gemexists2 = false;
    }
    if (gem3X + GEM_WIDTH >= playerX && gem3X <= playerX + SWIMMER_WIDTH && gem3Y + GEM_HEIGHT >= playerY && playerY <= gem3Y + GEM_HEIGHT) {
        ctx.clearRect(gem3X, gem3Y, GEM_WIDTH, GEM_HEIGHT);
        if (gemexists3 === true) {
            points += 1;
        }
        gemexists3 = false;
    }
    if (monsterX + GEM_WIDTH >= playerX && monsterX <= playerX + GEM_WIDTH && playerY + SWIMMER_HEIGHT >= monsterY && playerY <= monsterY + GEM_HEIGHT) {
        alert("sorry, your swimmer was eaten by the sea monster. please refresh the page to start again!")
        isAlive = false;
    }
    if (playerX >= 920 && points === 1) {
        alert("your swimmer made it to the finish line, but only got one point and got last place :(. refresh the page to play again!")
        isAlive = false;
    } else if (playerX >= 920 && points === 2) {
        alert("your swimmer made it to the finish line, but only got two points and got 2nd place. refresh the page to play again!")
        isAlive = false;
    } else if (playerX >= 920 && points === 3) {
        alert("your swimmer made it to the finish line, and got the most points. they are the winner! refresh the page to play again!")
        isAlive = false;
    }
    if (timer === 0) {
        alert("sorry, your swimmer ran out of time and automatically disqualified in the race. please refresh the page to start again!")
        isAlive = false;
    }

}

function clearGems() {
    if (gemexists === false) {
        ctx.clearRect(gem1X, gem1Y, GEM_WIDTH, GEM_HEIGHT);
    }
    if (gemexists2 === false) {
        ctx.clearRect(gem2X, gem2Y, GEM_WIDTH, GEM_HEIGHT);
    }
    if (gemexists3 === false) {
        ctx.clearRect(gem3X, gem3Y, GEM_WIDTH, GEM_HEIGHT);
    }

}

function keyReleased(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keyupOutput.innerHTML = "key right code: " + key;

    if (key === 68) {
        playerXDir = 0;
    }
    if (key === 87) {
        playerYDir = 0;
    } else if (key === 88) {
        playerYDir = 0;
    }
    while (isAlive === false) {
        return;
    }
}

function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "key left code: " + key;

    //move player

    if (key === 68) {
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
    refreshUI();
    drawImage();
    drawLine();
    drawLine2();
    movePlayer();
    moveMonster();
    drawPlayer();
    checkSwimmerCollision();
    pointsDisplay();
    clearGems();
}

setInterval(refreshPlayer, 10);
setInterval(function decrease() {
    if (timer > 0) {
        timer -= 1;
        while (isAlive === false) {
            return;
        }
    }
    refreshUI();
}, 1000)