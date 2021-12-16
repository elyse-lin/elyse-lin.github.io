alert("Hello traveler!")
let gameContinue = "y";
while (gameContinue === "y") {
    //printing welcome message
    let welcomeMsg = "Welcome to Candyland. In front of you lies an entrance to two different realms. One realm is evil candyland, and the other is winter wonderland candyland. Good luck!";
    alert(welcomeMsg);
    //get player input
    let playerChoice = prompt("Which realm do you enter (1 or 2)?");
    //generate random number for realm

    if (playerChoice === "1") {
        let playerAge = Number(prompt("How old are you?"));
        if (playerAge < 13) {
            alert("too young. you accidentally walk into the evil candyland and disappear into the chocolate river");
        } else if (playerAge >= 14 && playerAge <= 17) {
            alert("rebellious age. you enter the evil candyland and get eaten by a candy monster ")
        } else {
            alert("you enter the evil candyland and fall in the pit of lava. sorry you die!");
        }
    } else if (playerChoice === "2") {
        alert("you are lucky and enter the winter wonderland candyland!");
    } else {
        alert("sorry that realm does not exist!");
    }
}