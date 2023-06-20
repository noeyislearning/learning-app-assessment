/**
 * TITLE:
 * Create Conditional Tests/Statements
 */

// Create a variable boolean
let isAlive = true;

// Logging
console.log("Is alive? " + isAlive); // true

if (isAlive) {
    console.log("I'm alive!");
} else {
    console.log("I'm dead!");
}

// One liner if statement
if (isAlive) console.log("I'm alive!"); // I'm alive!

// Ternary operator
let message = isAlive ? "I'm alive!" : "I'm dead!";
console.log(message); // I'm alive!

// Create a variable number
let a = 5;

if (a > 0) {
    console.log("a is positive"); // a is positive
} else if (a < 0) {
    console.log("a is negative"); // a is negative
} else if (a <= 0) {
    console.log("a is zero"); // a is zero
} else {
    console.log("a is not a number"); // a is not a number
}