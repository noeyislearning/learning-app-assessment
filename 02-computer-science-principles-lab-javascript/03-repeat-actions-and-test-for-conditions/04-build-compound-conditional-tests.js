// Create variables for the maximum and minimum limits and a value to test
let maxLimit = 20;
let minLimit = 5;
let value = 6;

// Check if the value is between the limits
if (value < maxLimit && value > minLimit) {
    console.log("Value is between the limits"); // If true, log "Value is between the limits"
} else {
    console.log("Value is not between the limits"); // If false, log "Value is not between the limits"
}

// NOT operator
if (!(value < maxLimit && value > minLimit)) {
    console.log("Value is between the limits"); // If false, log "Value is between the limits"
} else {
    console.log("Value is not between the limits"); // If true, log "Value is not between the limits"
}