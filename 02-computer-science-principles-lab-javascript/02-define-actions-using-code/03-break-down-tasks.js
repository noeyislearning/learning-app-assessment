// Initialize a variable named `score`.
let score;

// Call the `init()`, `addScore()`, and `printScore()` functions.
init();
addScore();
printScore();

// Initialize the `score` variable to `1000` through the `init()` function.
function init() {
    score = 1000;
}

// Add `110` to the `score` variable through the `addScore()` function.
function addScore() {
    score = score + 110;
}

// Print the `score` variable to the console with a message "Player score: ".
function printScore() {
    console.log("Player score: " + score);
}

// Output in the browser console: "Player score: 1110"