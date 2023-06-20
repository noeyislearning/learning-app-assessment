/**
 * TITLE:
 * Variables and Scope
 */

// Variable outside of a function
let a = 5;

// Logging the variables
console.log("Global Scope: " + a); // 5

// Calling the functions
insideFunction();
insideOtherFunction();

// Variable inside of a function
function insideFunction() {

    // Create a variable inside of a function
    let b = 10;
    console.log("***Inside Function (1)***");
    console.log("Outside Function: " + a); // 5
    console.log("Inside Function: " + b); // 10
}

// Other example, variable inside of a function
function insideOtherFunction() {

    console.log("***Inside Function (2)***");
    console.log("Outside Function: " + a); // 5
    console.log("Inside Function: " + b); // undefined
}


