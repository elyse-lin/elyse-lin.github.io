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

    refreshUI1();
}

function fertilePlant() {
    console.log("Fertilizing plant...");
    if (fertilization < 5) {
        fertilization += 1;
    }
    console.log("fertilization: " + fertilization);

    refreshUI2();
}

function refreshUI() {
    let waterMeter = document.getElementById("water-meter");
    waterMeter.value = water;

    let waterParagraph = document.getElementById("water-paragraph");
    waterParagraph.innerHTML = water;

}

function refreshUI1() {
    let sunMeter = document.getElementById("sun-meter");
    sunMeter.value = sun;

    let sunParagraph = document.getElementById("sun-paragraph");
    sunParagraph.innerHTML = sun;
}

function refreshUI2() {
    let fertilizationMeter = document.getElementById("fertilization-meter");
    fertilizationMeter.value = fertilization;

    let fertilizationParagraph = document.getElementById("fertilization-paragraph");
    fertilizationParagraph.innerHTML = fertilization;
}

setInterval(function decreasePet() {
    if (sun > 0) {
        sun -= .25;
    }
    console.log("sun: " + sun);

    refreshUI1();
}, 1000)

setInterval(function decreasePet1() {
    if (water > 0) {
        water -= .25;
    }
    console.log("water: " + water);

    refreshUI();
}, 1000)

setInterval(function decreasePet2() {
    if (fertilization > 0) {
        fertilization -= .25;
    }
    console.log("fertilization: " + fertilization);

    refreshUI2();
}, 1000)