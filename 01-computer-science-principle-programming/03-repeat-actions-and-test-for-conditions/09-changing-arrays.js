/** 
 * SECTION:
 * Arrays
 */

/**
 * EXERCISE:
 * 
 * TASKS:
 * 1. Add a number to the end of an array.
 * 2. Add a number to the beginning of an array.
 * 3. Remove a number from the end of an array.
 * 4. Remove a number from the start of an array.
 * 5. Remove a number by index position.
 * 6. Add a number by index position.
 * 7. Replace a number by index position.
 */


// Variables
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exercise 1
// Tasks:
// 1. Add a number to the end of an array.

// Add a number to the end of an array.
numbers.push(11);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]

// Exercise 2
// Tasks:
// 1. Add a number to the beginning of an array.

// Add a number to the beginning of an array.
numbers.unshift(0);
console.log(numbers); // Output: [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]

// Exercise 3
// Tasks:
// 1. Remove a number from the end of an array.

// Remove a number from the end of an array.
numbers.pop();
console.log(numbers); // Output: [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Exercise 4
// Tasks:
// 1. Remove a number from the start of an array.

// Remove a number from the start of an array.
numbers.shift();
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Exercise 5
// Tasks:
// 1. Remove a number by index position.

// Remove a number by index position.
numbers.splice(4, 1);
console.log(numbers); // Output: [1, 2, 3, 4, 6, 7, 8, 9, 10]

// Exercise 6
// Tasks:
// 1. Add a number by index position.

// Add a number by index position.
numbers.splice(2, 0, 4, 5);
console.log(numbers); // Output: [1, 2, 4, 5, 3, 4, 6, 7, 8, 9, 10]

// Exercise 7
// Tasks:
// 1. Replace a number by index position.

// Replace a number by index position.
numbers.splice(2, 1, 3);
console.log(numbers); // Output: [1, 2, 3, 5, 3, 4, 6, 7, 8, 9, 10]