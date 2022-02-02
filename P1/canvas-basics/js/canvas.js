//console.log("test");

//let's do for loops
//count 1-10
for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
}

//count 10-1
for (let counter1 = 10; counter1 >= 1; counter1--) {
    console.log(counter1);
}
//count 1-10 only odd numbers
for (let counter2 = 1; counter2 <= 11; counter2 += 2) {
    console.log(counter2);
}

//get canvas element
let myCanvas = document.getElementById("my-canvas");
//create canvas object
let ctx = myCanvas.getContext("2d");

ctx.fillStyle = "CornflowerBlue";
ctx.fillRect(0, 0, 200, 100);

//draw lines
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(200, 0);
ctx.stroke();

//draw circle
for (let counter = 1; counter <= 10; counter += 2) {
    ctx.beginPath();
    ctx.arc(100, 50, counter * 5, 0, 2 * Math.PI);
    ctx.strokeStyle = "Red";
    ctx.stroke();
}