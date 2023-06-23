// Create a variable boolean
let isAlive = true;

// Logging
console.log("Is alive? " + isAlive); // true

// Check if isAlive is true
if (isAlive) {
    console.log("I'm alive!"); // If true, log "I'm alive!"
} else {
    console.log("I'm dead!"); // If false, log "I'm dead!"
}

// One liner if statement
if (isAlive) console.log("I'm alive!"); // If true, log "I'm alive!" in one line

// Ternary operator
let message = isAlive ? "I'm alive!" : "I'm dead!"; // If true, set message to "I'm alive!", else set it to "I'm dead!"
console.log(message); // Log the message

// Create a variable number
let a = 5;

// Check if a is positive
if (a > 0) {
    console.log("a is positive"); // If true, log "a is positive"
} else if (a < 0) { // Check if a is negative
    console.log("a is negative"); // If true, log "a is negative"
} else if (a <= 0) { // Check if a is zero or negative
    console.log("a is zero"); // If true, log "a is zero"
} else {
    console.log("a is not a number"); // If none of the above, log "a is not a number"
}