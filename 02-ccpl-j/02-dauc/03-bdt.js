/**
 * TITLE:
 * Break Down Tasks
 */

// Initliaze a variable
let score;

// Calling functions
init();
addScore();
printScore();

// Initialize a variable via function
function init() {
    score = 1000;
}

// Adding score from the current score
function addScore() {
    score = score + 110;
}

// Print the score
function printScore() {
    console.log("Player score: " + score);
}

// Browser console output
// Player score: 1110