function magicAlgorithm(numLikes, comment) {
    let rank = 0;

    //magic!
    if (numLikes >= 10000 && comment.includes("dog")) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("cat")) {
        rank = 100;
    } else {
        rank = 1000;

    }
    return rank;
}

function magicAlgorithm2(numShares, content) {
    let rank = 0;

    if (numShares >= 10000 && content.includes("dancing")) {
        rank = 1;
    } else if (numShares >= 500 && content.includes("comedy")) {
        rank = 100;
    } else {
        rank = 1000;
    }
    return rank;
}

function sumOfNumbers(p1, p2) {
    let result = p1 + p2;
    return result;
}

alert("Welcome to Tiktok! Imagine I'm showing you a tiktok video right now");
let likeCount = Number(prompt("How many likes did this Tiktok video get?"));
let comment = prompt("What is the most recent comment on this Tiktok video?");
let shareCount = Number(prompt("How many shares did this Tiktok video get?"));
let content = prompt("What is being shown in the video? ('dancing/comedy/other')")

//using the two inputs above, pass that into the magic function and return result
let rankResult = magicAlgorithm(likeCount, comment);
let rankResult2 = magicAlgorithm2(shareCount, content);
let resultCombo = sumOfNumbers(rankResult, rankResult2);
let resultString = "Based off of the magic algorithm, this video's rank is: " + resultCombo;

alert(resultString);