/**
 * Challenge:
 * 1. Create a function that logs local and global variables.
 * 2. Use numbers
 * 3. Function's method is to multiply both variables.
 * 4. Test with console.log to demonstrate the function works.
 */

/**
 * @function multiplyPeople
 * @description Multiplies the number of people and cars and logs the result to the console
 * @param {number} numberOfPeople - The number of people
 * @returns {number} The product of numberOfPeople and numberOfCars
 */
const multiplyPeople = function (numberOfPeople) {
  const numberOfCars = 2; // Declare a variable named `numberOfCars` and assign it the value 2
  return numberOfPeople * numberOfCars; // Return the product of `numberOfPeople` and `numberOfCars`
}

const numberOfPeople = 5; // Declare a variable named `numberOfPeople` and assign it the value 5

console.log(multiplyPeople(numberOfPeople)); // Log the result of calling `multiplyPeople` with `numberOfPeople` as an argument to the console

/**
 * Output:
 * 10
 */