/**
 * TITLE:
 * Customize Function with Parameters
 */

// Initliaze a variable
let score;

// Functions
// Initialize new score
init(1020);

// Adding multiple scores
addScore(10);
addScore(50);
addScore(-100);

// Print the score
printScore("Total player score: ");

// Initialize a variable via function
function init(newScore) {
    // Initliaze score
    console.log("Initliaze score: " + newScore)
    score = newScore;
}

// Adding score from the current score
function addScore(addScore) {

    // Add score
    console.log("Adding score: " + addScore)
    score = score + addScore;
}

// Print the score
function printScore(message) {
    console.log(message + score);
}

// Browser console output
// Player score: 1030