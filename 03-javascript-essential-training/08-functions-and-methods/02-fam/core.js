/**
 * TITLE:
 * Functions andd Methods
 */

/**
 * Functions
 */
// Add
function add(num1, num2) {
  return num1 + num2;
}

// Subtract
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiply
function multiply(num1, num2) {
  return num1 * num2
}

// Divide
function divide(num1, num2) {
  return num1 / num2;
}

//Outputs
console.log(add(1, 2)); // Output: 3
console.log(subtract(1, 2)); // Output: -1
console.log(multiply(1, 2)); // Output: 2
console.log(divide(1, 2)); // Output: 0.5

/**
 * Functions with default parameters
 */
// Add
function addDef(num1 = 2, num2 = 0) {
  return num1 + num2;
}

// Outputs
console.log(addDef()); // Output: 2

/**
 * IIFE (Immediately Invoked Function Expression)
 */
// Add
(function addIIFE(num1, num2) {
  return num1 + num2;
  
}) (1, 2); // Output: 3