/**
 * TITLE:
 * Capute Input from the User
 */

/** 
 * SECTION:
 * Functions 
 */

/**
 * EXERCISES:
 * 1. Define a function named `getInput` that takes a parameter named `prompt` and returns the user input.
 * 2. Define a function named `buildMessage` that takes two parameters named `name` and `age` and returns the message "Hello, " plus the `name` parameter and the message "You are " plus the `age` parameter.
 */

// Exericse 1
function getInput(prompt) {
    return prompt;
}

// Exercise 2
function buildMessage(name, age) {
    return "Hello, " + name + " You are " + age;
}

buildMessage(getInput("What is your name?"), getInput("What is your age?"));

