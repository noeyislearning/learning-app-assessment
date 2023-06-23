/**
 * SECTION:
 * Functions
 */

// Define a function named `addNum` that takes two arguments and returns the sum of those arguments
function addNum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// Call the `addNum` function with the arguments 1 and 2 and log the result to the console
console.log(addNum(1, 2)); // 3

/**
 * BONUS:
 * Storing Values
 */

// Literal
"John";

// Variable
let myName = "John";

// Define a function named `sayHello` that takes a parameter named `name` and returns a string that says hello to the name that was passed in
function sayHello(name) {
    return "Hello " + name;
}

// Call the `sayHello` function with the argument "John" and log the result to the console
console.log(sayHello("John")); // Hello John