// Create a variable
// let myScore = 1000;
let myScore; // undefined

// Call the `init()` function to initialize the `myScore` variable to `1000`.
init();

// Call the `addScore()` function to add `100` to the `myScore` variable and assign the result to the `myScore` variable.
myScore = addScore(myScore, 100);

// Log the `myScore` variable to the console with a message "Player score: ".
console.log("Player score: " + myScore); // 1100

// Manipulate the variable directly (commented out)
// myScore = myScore + 100; // 1100

// Log the variable directly (commented out)
// console.log("Player score: " + myScore); // 1100

// Initialize the `myScore` variable to `1000` through the `init()` function.
function init() {
    myScore = 1000;
}

// Function to add a score to the current score
function addScore(currentScore, amount) {
    currentScore = currentScore + amount;
    return currentScore;
}