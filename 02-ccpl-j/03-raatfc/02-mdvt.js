/**
 * TITLE:
 * Manage Different Variable Types
 */

// Define a variable with an integer value
let a = 5;
let message = `The variable a has a value of: ${a} and is a ${typeof a}`;

console.log(message); // The variable a has a value of: 5 and is a number

// Define a variable with a string value
a = a.toString();
message = `The variable a has a value of: ${a} and is a ${typeof a}`;

console.log(message); // The variable a has a value of: 5 and is a string


// Concatenate a string and a number
a = "5";
a += 1;
message = `The variable a has a value of: ${a} and is a ${typeof a}`;

console.log(message); // The variable a has a value of: 51 and is a string

// Function Number()
a = "5";
a = Number(a);
a += 1;
message = `The variable a has a value of: ${a} and is a ${typeof a}`;

console.log(message); // The variable a has a value of: 6 and is a number

// Putting comma on a nubmer
a = Number("5,000");
a += 1;
message = `The variable a has a value of: ${a} and is a ${typeof a}`;

console.log(message); // The variable a has a value of: NaN and is a number