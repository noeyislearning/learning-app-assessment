/* Compound Conditional Tests */

// Build a compound conditional test that meets the following requirements:
// 1. Create a variable named `age` and assign it a value of `21`.
// 2. Create a variable named `country` and assign it a value of `USA`.
// 3. Create an `if` statement that checks if the person's age is greater than or equal to `21` and the person's country is equal to `USA`.
// 4. If both conditions evaluate to `true`, display a message that says `"You may enter."`.
// 5. Otherwise, display a message that says `"You may not enter."`.

// Define the functions
function createCompoundConditionalTests() {
    // Create a variable named `age` and assign it a value of `21`.
    var age = 21;
    // Create a variable named `country` and assign it a value of `USA`.
    var country = "USA";
    // Create an `if` statement that checks if the person's age is greater than or equal to `21` and the person's country is equal to `USA`.
    if (age >= 21 && country === "USA") {
        // If both conditions evaluate to `true`, display a message that says `"You may enter."`.
        alert("You may enter.");
    }
    // Otherwise, display a message that says `"You may not enter."`.
    else {
        alert("You may not enter.");
    }
}

createCompoundConditionalTests();


// OR Operator Example
// Define the functions with an OR operator example
function createCompoundConditionalTestsWithOR() {
    // Create a variable named `age` and assign it a value of `21`.
    var age = 21;
    // Create a variable named `country` and assign it a value of `USA`.
    var country = "USA";
    // Create an `if` statement that checks if the person's age is greater than or equal to `21` OR the person's country is equal to `USA`.
    if (age >= 21 || country === "USA") {
        // If both conditions evaluate to `true`, display a message that says `"You may enter."`.
        alert("You may enter.");
    }
    // Otherwise, display a message that says `"You may not enter."`.
    else {
        alert("You may not enter.");
    }
}

createCompoundConditionalTestsWithOR();

// AND Operator Example
// Define the functions with an AND operator example
function createCompoundConditionalTestsWithAND() {
    // Create a variable named `age` and assign it a value of `21`.
    var age = 21;
    // Create a variable named `country` and assign it a value of `USA`.
    var country = "USA";
    // Create an `if` statement that checks if the person's age is greater than or equal to `21` AND the person's country is equal to `USA`.
    if (age >= 21 && country === "USA") {
        // If both conditions evaluate to `true`, display a message that says `"You may enter."`.
        alert("You may enter.");
    }
    // Otherwise, display a message that says `"You may not enter."`.
    else {
        alert("You may not enter.");
    }
}

createCompoundConditionalTestsWithAND();

// NOT Operator Example
// Define the functions with a NOT operator example
function createCompoundConditionalTestsWithNOT() {
    // Create a variable named `age` and assign it a value of `21`.
    var age = 21;
    // Create a variable named `country` and assign it a value of `USA`.
    var country = "USA";
    // Create an `if` statement that checks if the person's age is NOT equal to `21`.
    if (age !== 21) {
        // If the condition evaluates to `true`, display a message that says `"You may enter."`.
        alert("You may enter.");
    }
    // Otherwise, display a message that says `"You may not enter."`.
    else {
        alert("You may not enter.");
    }
}