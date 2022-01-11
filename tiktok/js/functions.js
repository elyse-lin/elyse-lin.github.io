console.log("hello world!")

//simple function, no parameters
function hello() {
    console.log("Hi Rami!");
}

function hello2(name) {
    console.log("Hi " + name);
}

function annoyingGreet(name) {
    console.log("Hi " + name);
    console.log("Hi " + name);
    console.log("Hi " + name);
    console.log("Hi " + name);
    console.log("Hi " + name);
    console.log("Hi " + name);
    console.log("Hi " + name);
    console.log("Hi " + name);
    console.log("Hi " + name);

    /*another way to write it:
    let counter = 0;
   
    while (counter < 10) {
        hello2(name);
        counter++;
    */

}

function sumOfNumbers(p1, p2) {
    let result = p1 + p2;
    return result;
}

let answer = sumOfNumbers(1, 2);
console.log(answer);

function square(p1) {
    let result = p1 * p1;
    return result;
}

let answer2 = square(2);
console.log(answer2);

function sumOfSquares(num1, num2) {
    let result = sumOfNumbers(square(num1), square(num2));
    return result;
}

let answer3 = sumOfSquares(5, 6);
console.log(answer3);

hello();
hello2("Akilesh");
hello2("Jack");
hello2("Elyse");
annoyingGreet("Elyse");