/**
 * TITLE:
 * Create Conditional Tests/Statements
 */

/**
 * SECTION:
 * Conditional Tests/Statements
 */

/**
 * EXERCISE:
 * 1. Age Checker
 */


// Exercise 1
// Tasks:
// 1. Create a variable named `age` and assign it a value of `21`.
// 2. Create an `if` statement that checks if the `age` is greater than or equal to `21`.
// 3. If the condition evaluates to `true`, display a message that says `"You may enter."`.
// 4. Create an `else if` statement that checks if the `age` is equal to `18`.
// 5. If the condition evaluates to `true`, display a message that says `"You may enter with a parent."`.
// 6. Create an `else` statement that checks if the `age` is less than `18`.
// 7. If the condition evaluates to `true`, display a message that says `"You may not enter."`.

function ageChecker() {
    // Initialize the variable `age` and assign it a value of `21`.
    let age = 21;

    // Create an `if` statement that checks if the `age` is greater than or equal to `21`.
    if (age >= 21) {
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
};

ageChecker();

/**
 * BONUS:
 * Equality Operators
 */

// `==` -> Equal to
// `===` -> Equal value and equal type
// `!=` -> Not equal
// `!==` -> Not equal value or not equal type
// `>` -> Greater than
// `>=` -> Greater than or equal to
// `<` -> Less than
// `<=` -> Less than or equal to

