/* For Loops */

// 1. Create a for loop that logs "Hi" 3 times to the console.
// 2. Create a for loop that logs the numbers 0 through 4 to the console.
// 3. Create a for loop that logs the numbers 1 through 5 to the console.

// Define the functions
function createForLoops() {
    // Create a for loop that logs "Hi" 3 times to the console.
    for (let i = 0; i < 3; i++) {
        console.log("Hi");
    }
};

createForLoops(); // Hi Hi Hi

// Nested For Loop Example

// Define the functions
function createNestedForLoops() {
    for (let i = 0; i < 3; i++) {
        console.log("Hi");
        for (let j = 0; j < 3; j++) {
            console.log("Hello");
        }
    }
}

createNestedForLoops(); // Hi Hello Hello Hello Hi Hello Hello Hello Hi Hello Hello