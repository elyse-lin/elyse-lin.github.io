alert("Hello traveler!")
let gameContinue = "y";
while (gameContinue === "y") {
    //printing welcome message
    let welcomeMsg = "Welcome to Candyland. In front of you lies an entrance to two different realms. One realm is evil candyland, and the other is winter wonderland candyland. Good luck!";
    alert(welcomeMsg);
    //get player input
    let playerChoice = Number(prompt("Which realm do you choose (1 or 2)?"));
    //generate random number for realm
    //random number 1 or 2
    let evilCandyland = math.floor(math.random() * 2) + 1;
    let outputMsg = " ";
    if playerChoice === evilCandyland {

    }
}