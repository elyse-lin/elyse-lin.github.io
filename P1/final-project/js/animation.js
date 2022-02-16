let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let swimmer = document.getElementById("swimmer");

const IMG_WIDTH = 50;
const IMG_HEIGHT = 50;

function drawImage() {
    ctx.drawImage(swimmer, 0, 250, IMG_WIDTH, IMG_HEIGHT);
}

function refreshPlayer() {
    ctx.clearRect(0, 0, 500, 500);
    drawImage();
}

setInterval(refreshPlayer, 10);