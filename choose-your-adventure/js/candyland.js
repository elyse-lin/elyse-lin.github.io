alert("Hello traveler!")
let gameContinue = "y";
while (gameContinue === "y") {
    //printing welcome message
    let welcomeMsg = "Welcome to Candyland. In front of you lies an entrance to two different realms. One realm is evil candyland, and the other is winter wonderland candyland. Good luck!";
    alert(welcomeMsg);
    //get player input
    let playerChoice = prompt("Which realm do you enter (1 or 2)?");
    //generate random number for realm

    if (playerChoice === evilCandyland) {
        alert("you enter the evil candyland and fall in the pit of lava. sorry you die!");
    } else if (playerChoice === "2") {
        alert("you are lucky and enter the winter wonderland candyland!");
    } else {
        alert("sorry that realm does not exist!");
    }

}