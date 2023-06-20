/**
 * TITLE:
 * Build Compound Conditional Tests
 */

// Create a variable number
let maxLimit = 20;
let minLimit = 5;
let value = 6;

if (value < maxLimit && value > minLimit) {
    console.log("Value is between the limits"); // Value is between the limits
} else {
    console.log("Value is not between the limits"); // Value is not between the limits
}

// NOT operator
if (!(value < maxLimit && value > minLimit)) {
    console.log("Value is between the limits"); // Value is between the limits
} else {
    console.log("Value is not between the limits"); // Value is not between the limits
}