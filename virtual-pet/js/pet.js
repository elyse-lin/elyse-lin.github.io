let water = 5;
let sun = 5;
let fertilization = 2;
let isAlive = true;


function waterPlant() {
    console.log("Watering plant...");
    //water = water + 1
    if (water < 10) {
        water += 1;
    }
    console.log("water: " + water);

    refreshUI();
}

function sunPlant() {
    console.log("Giving plant sun...");
    if (sun < 10) {
        sun += 1;
    }
    console.log("sun: " + sun);

    refreshUI();
}

function fertilePlant() {
    console.log("Fertilizing plant...");
    if (fertilization < 5) {
        fertilization += 1;
    }
    console.log("fertilization: " + fertilization);

    refreshUI();
}

function refreshUI() {
    let waterMeter = document.getElementById("water-meter");
    waterMeter.value = water;

    let waterParagraph = document.getElementById("water-paragraph");
    waterParagraph.innerHTML = water;

    let sunMeter = document.getElementById("sun-meter");
    sunMeter.value = sun;

    let sunParagraph = document.getElementById("sun-paragraph");
    sunParagraph.innerHTML = sun;

    let fertilizationMeter = document.getElementById("fertilization-meter");
    fertilizationMeter.value = fertilization;

    let fertilizationParagraph = document.getElementById("fertilization-paragraph");
    fertilizationParagraph.innerHTML = fertilization;

    //update pet image and paragraph
    let petImg = document.getElementById("pet-img");
    let petParagraph = document.getElementById("pet-condition");
    if (water <= 3 && sun <= 3 && fertilization <= 1 && isAlive) {
        petImg.src = "images/deadcactus.jpg"
        petParagraph.innerHTML = "i'm dead"
        alert("sorry, your plant died. please refresh the page to start again!");
        isAlive = false;

    } else if (water < 1 && isAlive) {
        petImg.src = "images/deadcactus.jpg"
        petParagraph.innerHTML = "i'm dead"
        alert("sorry, your plant died. please refresh the page to start again!");
        isAlive = false;
    } else if (sun < 1 && isAlive) {
        petImg.src = "images/deadcactus.jpg"
        petParagraph.innerHTML = "i'm dead"
        alert("sorry, your plant died. please refresh the page to start again!");
        isAlive = false;
    } else if (fertilization === 0 && isAlive) {
        petImg.src = "images/deadcactus.jpg"
        petParagraph.innerHTML = "i'm dead"
        alert("sorry, your plant died. please refresh the page to start again!")
        isAlive = false;
    } else if (water <= 3 && sun <= 3 && fertilization <= 5 && isAlive) {
        petImg.src = "images/unhealthycactus.jpg"
        petParagraph.innerHTML = "i'm unhealthy, quick save me!"
    } else if (water <= 7 && sun <= 7 && fertilization <= 2 && isAlive) {
        petImg.src = "images/unhealthycactus.jpg"
        petParagraph.innerHTML = "i'm unhealthy, quick save me!"
    } else if (water <= 7 && sun <= 3 && fertilization <= 4 && isAlive) {
        petImg.src = "images/unhealthycactus.jpg"
        petParagraph.innerHTML = "i'm unhealthy, quick save me!"
    } else if (water <= 3 && sun <= 7 && fertilization <= 4 && isAlive) {
        petImg.src = "images/unhealthycactus.jpg"
        petParagraph.innerHTML = "i'm unhealthy, quick save me!"
    } else if (water <= 8 && sun <= 8 && fertilization <= 3 && isAlive) {
        petImg.src = "images/healthycactus.jpg"
        petParagraph.innerHTML = "i'm healthy, good job!"
    } else if (water <= 6 && sun <= 3 && fertilization <= 5 && isAlive) {
        petImg.src = "images/unhealthycactus.jpg"
        petParagraph.innerHTML = "i'm unhealthy, quick save me!"
    } else if (water <= 4 && sun <= 10 && fertilization <= 2 && isAlive) {
        petImg.src = "images/dry cactus.jpg"
        petParagraph.innerHTML = "i'm dry, quick save me!"
    } else if (water <= 10 && sun <= 2 && fertilization <= 2 && isAlive) {
        petImg.src = "images/deadcactus.jpg"
        petParagraph.innerHTML = "i'm dead"
        alert("sorry, your plant died. please refresh the page to start again!")
        isAlive = false;
    } else if (water > 7 && sun > 7 && fertilization > 3 && isAlive) {
        petImg.src = "images/blossomingcactus.jpg"
        petParagraph.innerHTML = "i blossomed. yay"
    }
}



setInterval(function decreasePet() {
    if (water > 0) {
        water -= .25;
        if (isAlive === false) {
            return;
        }
    }
    if (sun > 0) {
        sun -= .25;
        if (isAlive === false) {
            return;
        }
    }
    if (fertilization > 0) {
        fertilization -= .25;
        if (isAlive === false) {
            return;
        }
    }

    refreshUI();
}, 1000)