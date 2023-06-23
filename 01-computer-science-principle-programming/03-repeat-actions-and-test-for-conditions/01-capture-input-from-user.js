/**
 * SECTION:
 * Functions
 */

/**
 * EXERCISES:
 * 1. Define a function named `getInput` that takes a parameter named `prompt` and returns the user input.
 * 2. Define a function named `buildMessage` that takes two parameters named `name` and `age` and returns the message "Hello, " plus the `name` parameter and the message "You are " plus the `age` parameter.
 */

// Exercise 1
// Define a function named `getInput` that takes a parameter named `prompt` and returns the user input
function getInput(prompt) {
    // Use the `prompt()` function to display the prompt and get the user input
    return prompt(prompt);
}

// Exercise 2
// Define a function named `buildMessage` that takes two parameters named `name` and `age` and returns the message "Hello, " plus the `name` parameter and the message "You are " plus the `age` parameter
function buildMessage(name, age) {
    return "Hello, " + name + ". You are " + age + ".";
}

// Call the `getInput` function with the argument "What is your name?" and store the result in a variable named `name`
let name = getInput("What is your name?");

// Call the `getInput` function with the argument "What is your age?" and store the result in a variable named `age`
let age = getInput("What is your age?");

// Call the `buildMessage` function with the `name` and `age` variables as arguments and log the result to the console
console.log(buildMessage(name, age));