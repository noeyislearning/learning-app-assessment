// Define a variable with an integer value
let a = 5;

// Define a message variable that displays the value and type of the `a` variable
let message = `The variable a has a value of: ${a} and is a ${typeof a}`;

// Log the message to the console
console.log(message); // The variable a has a value of: 5 and is a number

// Convert the `a` variable to a string and update the message variable to display the new value and type of `a`
a = a.toString();
message = `The variable a has a value of: ${a} and is a ${typeof a}`;

// Log the updated message to the console
console.log(message); // The variable a has a value of: 5 and is a string

// Concatenate a string and a number and update the message variable to display the new value and type of `a`
a = "5";
a += 1;
message = `The variable a has a value of: ${a} and is a ${typeof a}`;

// Log the updated message to the console
console.log(message); // The variable a has a value of: 51 and is a string

// Convert the `a` variable to a number and add 1 to it. Update the message variable to display the new value and type of `a`
a = "5";
a = Number(a);
a += 1;
message = `The variable a has a value of: ${a} and is a ${typeof a}`;

// Log the updated message to the console
console.log(message); // The variable a has a value of: 6 and is a number

// Attempt to convert a string with a comma to a number. Update the message variable to display the new value and type of `a`
a = Number("5,000");
a += 1;
message = `The variable a has a value of: ${a} and is a ${typeof a}`;

// Log the updated message to the console
console.log(message); // The variable a has a value of: NaN and is a number