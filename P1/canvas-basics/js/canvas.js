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

ctx.fillRect(0, 0, 200, 100);
ctx.fillStyle = "RebeccaPurple";

//draw lines