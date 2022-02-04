//get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

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

setInterval(rectBounce, 10);
//#3 ball bouncing horizontally