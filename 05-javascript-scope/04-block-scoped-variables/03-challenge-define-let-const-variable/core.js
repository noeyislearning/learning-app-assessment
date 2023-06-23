/**
 * Challenge:
 * 1. Use only `let` and `const` to declare variables
 * 2. Create an immutable array of names
 * 3. Write a function that uses an if statement to check if a given name is in the array and returns a string indicating whether or not it was found
 * 4. Validate the variable names
 */

// Declare a variable named `nameOfPerson` using the `let` keyword and assign it the value "Francis"
let nameOfPerson = "Francis";

// Declare a constant named `nameArr` and assign it an array of names
const nameArr = [
  "Francis",
  "Richard",
  "Thomas",
  "Harold",
];

// Declare a function named `validateName` that takes a `name` parameter
const validateName = (name) => {
  // Use an if statement to check if `name` is in the `nameArr` array
  if (nameArr.includes(name)) {
    // If `name` is in the array, return a string indicating that it was found
    return `There's a person named ${name} in the array.`;
  } else {
    // If `name` is not in the array, return a string indicating that it was not found
    return "There's no such name in the array.";
  }
};

// Log the result of calling `validateName` with `nameOfPerson` as an argument to the console
console.log(validateName(nameOfPerson));
