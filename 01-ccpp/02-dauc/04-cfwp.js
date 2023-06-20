/**
 * TITLE:
 * Custom Functions With Parameters
 */

/** 
 * SECTION:
 * Functions
 */

/** 
 * EXERCISE:
 * 1. Saying Hello + the Name Function
 */
// 1. Define a function named `sayHello` that takes a parameter named `name` and returns a string that says hello to the name that was passed in.
function sayHello(name) {
    return "Hello " + name + "!";
}

sayHello("Francis"); // Hello Francis!

// 2. Calculating the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

calculateArea(10, 5); // 50

// 3. Calculating a total order
function calculateTotal(quantity, price, taxRate) {
    return quantity * price * taxRate;
}

calculateTotal(2, 10, 1.05); // 21

