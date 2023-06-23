/**
 * SECTION:
 * Compound/Complex Conditional Tests/Statements
 */

/**
 * EXERCISE:
 * 1. Compound Conditional Tests
 * 2. Compound Conditional Tests with OR
 * 3. Compound Conditional Tests with AND
 */

// Exercise 1
// Tasks:
// 1. Create a variable named `age` and assign it a value of `21`.
// 2. Create an `if` statement that checks if the `age` is greater than or equal to `21` and less than or equal to `65`.
// 3. If the condition evaluates to `true`, display a message that says `"You may enter."`.
// 4. Create an `else if` statement that checks if the `age` is equal to `18`.
// 5. If the condition evaluates to `true`, display a message that says `"You may enter with a parent."`.
// 6. Create an `else` statement that checks if the `age` is less than `18`.
// 7. If the condition evaluates to `true`, display a message that says `"You may not enter."`.

function ageCheckerCoumpundConditionalTest() {
    // Initialize the variable `age` and assign it a value of `21`.
    let age = 21;

    // Create an `if` statement that checks if the `age` is greater than or equal to `21` and less than or equal to `65`.
    if (age >= 21 && age <= 65) {
        // If the condition evaluates to `true`, display a message that says `"You may enter."`.
        console.log("You may enter.");
    } else if (age === 18) {
        // Create an `else if` statement that checks if the `age` is equal to `18`.
        // If the condition evaluates to `true`, display a message that says `"You may enter with a parent."`.
        console.log("You may enter with a parent.");
    } else {
        // Create an `else` statement that checks if the `age` is less than `18`.
        // If the condition evaluates to `true`, display a message that says `"You may not enter."`.
        console.log("You may not enter.");
    }
}

ageCheckerCoumpundConditionalTest(); // Output: You may enter.

// Exercise 2
// Tasks:
// 1. Create a variable named `age` and assign it a value of `21`.
// 2. Create a variable named `country` and assign it a value of `USA`.
// 3. Create an `if` statement that checks if the person's age is greater than or equal to `21` OR the person's country is equal to `USA`.
// 4. If both conditions evaluate to `true`, display a message that says `"You may enter."`.
// 5. Otherwise, display a message that says `"You may not enter."`.

function ageCheckerCoumpundConditionalTestWithOR() {
    // Initialize the variable `age` and assign it a value of `21`.
    let age = 21;
    // Initialize the variable `country` and assign it a value of `USA`.
    let country = "USA";

    // Create an `if` statement that checks if the person's age is greater than or equal to `21` OR the person's country is equal to `USA`.
    if (age >= 21 || country === "USA") {
        // If both conditions evaluate to `true`, display a message that says `"You may enter."`.
        console.log("You may enter.");
    } else {
        // Otherwise, display a message that says `"You may not enter."`.
        console.log("You may not enter.");
    }
}

ageCheckerCoumpundConditionalTestWithOR(); // Output: You may enter.

// Exercise 3
// Tasks:
// 1. Create a variable named `age` and assign it a value of `21`.
// 2. Create a variable named `country` and assign it a value of `USA`.
// 3. Create an `if` statement that checks if the person's age is greater than or equal to `21` AND the person's country is equal to `USA`.
// 4. If both conditions evaluate to `true`, display a message that says `"You may enter."`.
// 5. Otherwise, display a message that says `"You may not enter."`.

function ageCheckerCoumpundConditionalTestWithAND() {
    // Initialize the variable `age` and assign it a value of `20`.
    let age = 20;
    // Initialize the variable `country` and assign it a value of `USA`.
    let country = "USA";

    // Create an `if` statement that checks if the person's age is greater than or equal to `21` AND the person's country is equal to `USA`.
    if (age >= 21 && country === "USA") {
        // If both conditions evaluate to `true`, display a message that says `"You may enter."`.
        console.log("You may enter.");
    } else {
        // Otherwise, display a message that says `"You may not enter."`.
        console.log("You may not enter.");
    }
}

ageCheckerCoumpundConditionalTestWithAND(); // Output: You may not enter.