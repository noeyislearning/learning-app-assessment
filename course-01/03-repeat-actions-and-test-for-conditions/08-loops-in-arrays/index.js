/* Loops in Array */

// 1. Create a for loop that logs each item in the array to the console.
// 2. Create a for loop that logs each item in the array to the console in reverse order.

// Define the functions
function createLoopsInArrays() {
    // Create an array named `fruits` and assign it a value of `["Apple", "Banana", "Orange"]`.
    let fruits = ["Apple", "Banana", "Orange"];

    // Create a for loop that logs each item in the array to the console.
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    // Create a for loop that logs each item in the array to the console in reverse order.
    for (let i = fruits.length - 1; i >= 0; i--) {
        console.log(fruits[i]);
    }
}