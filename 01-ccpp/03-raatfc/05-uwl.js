/**
 * TITLE:
 * Use the While Loop & Do While Loop
 */

/** 
 * SECTION:
 * While Loop
*/

/** 
 * EXERCISE:
 * 1. Create a loop that logs "Hi" 3 times to the console.
 * 2. Create a fizzbuzz loop that logs the numbers 1 to 100 to the console.
 */

// Exercise 1
// Tasks:
// 1. Create a while loop that logs "Hi" 3 times to the console.

function createWhileLoops() {
    let i = 0;
    while (i < 3) {
        console.log("Hi");
        i++;
    }
}

createWhileLoops(); // Output: Hi Hi Hi

// Exercise 2
// Tasks:
// 1. Create a fizzbuzz loop that logs the numbers 1 to 100 to the console.

function createFizzBuzzLoops() {
    let i = 1;
    while (i <= 100) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
        i++;
    }
}

/** 
 * SECTION:
 * Do While Loop
*/

/**
 * EXERCISE:
 * 1. Create a loop that logs "Hi" 3 times to the console.
 * 2. Create a fizzbuzz loop that logs the numbers 1 to 100 to the console.
 */

// Exercise 1
// Tasks:
// 1. Create a do while loop that logs "Hi" 3 times to the console.

function createDoWhileLoops() {
    let i = 0;
    do {
        console.log("Hi");
        i++;
    } while (i < 3);
}