/**
 * TITLE:
 * Use the For Loop 
 */

/**
 * SECTION:
 * For Loop
 */

/** 
 * EXERCISE:
 * 1. Create a loop that logs "Hi" 3 times to the console.
 * 2. Create a fizzbuzz loop that logs the numbers 1 to 100 to the console.
 * 3. Create a loop that logs the numbers 1 to 100 to the console.
 * 4. Create a loop that logs the numbers 100 to 1 to the console.
 */

// Exercise 1
// Tasks:
// 1. Create a for loop that logs "Hi" 3 times to the console.
function createForLoops() {
    for (let i = 0; i < 3; i++) {
        console.log("Hi");
    }
}

createForLoops(); // Output: Hi Hi Hi

// Exercise 2
// Tasks:
// 1. Create a fizzbuzz loop that logs the numbers 1 to 100 to the console.
function createFizzBuzzLoops() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

createFizzBuzzLoops(); // Output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ...

// Exercise 3
// Tasks:
// 1. Create a loop that logs the numbers 1 to 100 to the console.
function createOneToHundredLoops() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

createOneToHundredLoops(); // Output: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 ...

// Exercise 4
// Tasks:
// 1. Create a loop that logs the numbers 100 to 1 to the console.
function createHundredToOneLoops() {
    for (let i = 100; i >= 1; i--) {
        console.log(i);
    }
}

createHundredToOneLoops(); // Output: 100 99 98 97 96 95 94 93 92 91 90 89 88 87 ...