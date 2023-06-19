/* Create Conditional Tests */

// 1. Create a variable named `age` and assign it a value of `21`.
// 2. Create an `if` statement that checks if the `age` is greater than or equal to `21`.
// 3. If the condition evaluates to `true`, display a message that says `"You may enter."`.
// 4. Create an `else if` statement that checks if the `age` is equal to `18`.
// 5. If the condition evaluates to `true`, display a message that says `"You may enter with a parent."`.
// 6. Create an `else` statement that checks if the `age` is less than `18`.
// 7. If the condition evaluates to `true`, display a message that says `"You may not enter."`.


// Define the functions
function createConditionalTests() {
    // Create a variable named `age` and assign it a value of `21`.
    var age = 21;
    // Create an `if` statement that checks if the `age` is greater than or equal to `21`.
    if (age >= 21) {
        // If the condition evaluates to `true`, display a message that says `"You may enter."`.
        alert("You may enter.");
    }
    // Create an `else if` statement that checks if the `age` is equal to `18`.
    else if (age === 18) {
        // If the condition evaluates to `true`, display a message that says `"You may enter with a parent."`.
        alert("You may enter with a parent.");
    }
    // Create an `else` statement that checks if the `age` is less than `18`.
    else {
        // If the condition evaluates to `true`, display a message that says `"You may not enter."`.
        alert("You may not enter.");
    }
}

createConditionalTests();

// ** Equality Operators
// == Equal to
// === Equal value and equal type
// != Not equal
// !== Not equal value or not equal type
// > Greater than
// >= Greater than or equal to
// < Less than
// <= Less than or equal to
