let water = 5;
let sun = 5;
let fertilization = 2;

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
}


setInterval(function decreasePet() {
    if (water > 0) {
        water -= .25;
    }
    if (sun > 0) {
        sun -= .25;
    }
    if (fertilization > 0) {
        fertilization -= .25;
    }

    refreshUI();
}, 1000)