alert("Hello traveler!")
let gameContinue = "y";
let gameEnd = "n";
/*
//practice code for while loops
//1. using while loop from 0 to 10
let number = 0;
while (number <= 10) {
    console.log(number);
    number = number + 1;
    // number ++; (shorter version of code above)
}
//2. using a while loop count from 10 to 0
let numbers = 10;
while (number >= 0) {
    console.log(numbers);
    numbers = numbers - 1;
}
//3. extra challenge- count from 0 to 50, but only odd numbers
let numbered = 1;
while (numbered <= 50) {
    console.log(numbered);
    numbered = numbered + 2;
}
*/

while (gameContinue === "y") {
    //printing welcome message
    let welcomeMsg = "Welcome to Candyland. In front of you lies an entrance to two different realms. One realm is evil candyland, and the other is winter wonderland candyland. Good luck!";
    alert(welcomeMsg);
    //get player input
    let playerChoice = Number(prompt("Which realm do you enter (1 or 2)?"));
    //generate random number for realm

    let dieRealm = Math.floor(Math.random() * 2) + 1;

    //

    if (playerChoice === dieRealm) {
        let playerAge = Number(prompt("How old are you?"));
        if (playerAge < 13) {
            alert("too young. you accidentally walk into the evil candyland and disappear into the chocolate river");
        } else if (playerAge >= 14 && playerAge <= 17) {
            alert("rebellious age. you enter the evil candyland and get eaten by a candy monster ")
        } else {
            alert("you enter the evil candyland and fall in the pit of lava. sorry you die!");
        }
        gameContinue = prompt("Would you like to play again (y/n)?");

    } else {
        alert("you are lucky and enter the winter wonderland candyland!");
        let playerChoice2 = Number(prompt("There are two paths that appear in winter wonderland. Which path do you choose (1 or 2)?"));
        let dieRealm2 = Math.floor(Math.random() * 2) + 1;
        if (playerChoice2 === dieRealm2) {
            alert("you walk into a licorice forest and get lost, dying of starvation. you die")
        } else {
            alert("you finally meet the fairy sugar queen. you have completed your adventure!")
        }
        gameContinue = prompt("Would you like to play again (y/n)?");
    }
}