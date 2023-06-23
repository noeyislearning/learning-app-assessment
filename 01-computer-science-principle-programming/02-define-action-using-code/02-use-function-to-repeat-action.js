/**
 * SECTION:
 * Functions
 */

// 1. Define a function named `sayHello` that takes a parameter named `name` and returns a string that says hello to the name that was passed in.
function sayHello(name) {
    return print("Hello! " + name);
}

// Call the `sayHello()` function with the argument "John"
sayHello("John"); // Hello! John

// 2. Define a function named `add` that takes two parameters named `firstNumber` and `secondNumber` and returns the sum of those two numbers.
function addNum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// Call the `addNum()` function with the arguments 1 and 2
addNum(1, 2); // 3