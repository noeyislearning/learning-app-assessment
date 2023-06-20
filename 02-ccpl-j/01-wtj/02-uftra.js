/**
 * TITLE:
 * Use Functions to Repeat Actions
 */

// Create a variable
// let myScore = 1000;
let myScore; // undefined

// Calling functions
init();
myScore = addScore(myScore, 100);
console.log("Player score: " + myScore); // 1100

// Manipulate the variable
// myScore = myScore + 100; // 1100

// Log the variable
// console.log("Player score: " + myScore); // 1100

// Initialize a variable through a function
function init() {
    myScore = 1000;
}

// Function to add a score to the current score
function addScore(currentScore, amount) {
    currentScore = currentScore + amount;
    return currentScore;
}