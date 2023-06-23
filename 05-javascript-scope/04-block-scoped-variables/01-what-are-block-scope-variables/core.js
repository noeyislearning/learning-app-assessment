/**
 * Difference between var, let and const
 * `var` - is mutable
 * `let` - is mutable
 * `const` - is immutable
 */

// Declare a variable named `firstName` using the `let` keyword and assign it the value "Francis"
let firstName = "Francis";

// Declare a variable named `lastName` using the `const` keyword and assign it the value "Ignacio"
const lastName = "Ignacio";

// Log the values of `firstName` and `lastName` to the console
console.log(firstName, lastName); // Output: Francis Ignacio

// Reassign the value of `firstName` to "Ignacio"
firstName = "Ignacio";

// Log the value of `firstName` to the console
console.log(firstName); // Output: Ignacio

// Declare a function named `gettingMoreNames`
function gettingMoreNames() {
  // Declare a variable named `firstName1` using the `let` keyword and assign it the value "Noey"
  let firstName1 = "Noey";
  if (lastName == "Ignacio") {
    // Declare a variable named `firstName2` using the `let` keyword and assign it the value "Emmanuel"
    let firstName2 = "Emmanuel"
    // Log the values of `firstName2` and `lastName` to the console
    console.log(firstName2, lastName); // Output: Emmanuel Ignacio
  }

  // Log the values of `firstName1` and `lastName` to the console
  console.log(firstName1, lastName); // Output: Noey Ignacio
}

// Call the `gettingMoreNames` function
gettingMoreNames();