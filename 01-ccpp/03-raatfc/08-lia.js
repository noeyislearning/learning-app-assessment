/**
 * TITLE:
 * Loops in Arrays
 */

/**
 * SECTION:
 * Arrays
 */

/**
 * EXERCISE:
 * 1. Create a for loop that logs each item in the array to the console.
 * 2. Create a for loop that logs each item in the array to the console in reverse order.
 */

// Exercise 1
// Tasks:
// 1. Create an array named `fruits` and assign it a value of `["Apple", "Banana", "Orange"]`.
// 2. Create a for loop that logs each item in the array to the console.
let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Exercise 2
// Tasks:
// 1. Create a for loop that logs each item in the array to the console in reverse order.

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}



