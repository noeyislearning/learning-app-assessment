/* Changing Arrays */

let nubmers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Add a number to the end of an array
numbers.push(11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Add a number to the beginning of an array
numbers.unshift(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Remove a number from the end of an array
numbers.pop(); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Remove a nubmer from the start of an array
numbers.shift(); // [2, 3, 4, 5, 6, 7, 8, 9, 10]

// Remove a number by index position
numbers.splice(4, 1); // [2, 3, 4, 5, 7, 8, 9, 10] 

// Add a number by index position
numbers.splice(2, 3, 4, 4, 7); // [2, 3, 4, 4, 7, 8, 9, 10]