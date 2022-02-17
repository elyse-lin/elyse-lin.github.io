let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let swimmer = document.getElementById("swimmer");
let gem1 = document.getElementById("gem1");
let gem2 = document.getElementById("gem2");
let gem3 = document.getElementById("gem3");
let monster = document.getElementById("monster");
let wave = document.getElementById("wave");

const IMG_WIDTH = 70;
const IMG_HEIGHT = 50;
const GEM_WIDTH = 40;
const GEM_HEIGHT = 40;

function drawLine() {
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, 167);
    ctx.lineTo(1000, 167);
    ctx.stroke();

}

function drawLine2() {
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, 333);
    ctx.lineTo(1000, 333);
    ctx.stroke();

}

function drawImage() {
    ctx.drawImage(swimmer, 0, 250, IMG_WIDTH, IMG_HEIGHT);
    ctx.drawImage(gem1, 200, 250, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(gem2, 450, 280, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(monster, 600, 180, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(gem3, 800, 250, GEM_WIDTH, GEM_HEIGHT);
    ctx.drawImage(wave, 750, 100, IMG_WIDTH, IMG_HEIGHT);
    ctx.drawImage(wave, 250, 400, IMG_WIDTH, IMG_HEIGHT);
    ctx.drawImage(wave, 100, 50, IMG_WIDTH, IMG_HEIGHT);

}

function refreshPlayer() {
    ctx.clearRect(0, 0, 500, 500);
    drawImage();
    drawLine();
    drawLine2();
}

setInterval(refreshPlayer, 10);