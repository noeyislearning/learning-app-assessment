// Declare a variable named `person` and assign it the value "Francis"
person = "Francis"; 

// Declare a variable named `person3` and assign it the value "Noey"
person3 = "Noey";

// Declare a function named `persons` that returns an object with a method named `getPersons`
const persons = () => { 
  // Declare a variable named `person2` and assign it the value "Ignacio"
  let person2 = "Ignacio" 
  return { 
    // Declare a method named `getPersons` that logs the values of `person`, `person2`, and `person3` to the console
    getPersons: () => { 
      return console.log(person, person2, person3) 
      /**
       * ERRORS:
       * 1. ReferenceError: person3 is not defined
       * 2. ReferenceError: cannot access 'person' before initialization
       */
    }
  }
}

// Declare a variable named `gettingPersons` and assign it the value returned by calling the `persons` function
const gettingPersons = persons(); 

// Call the `getPersons` method on the object returned by the `persons` function
gettingPersons.getPersons(); 

/**
 * So what is hoisting?
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 */

// Declare a variable named `person`
var person;

// Declare a variable named `person3`
var person3;

/**
 * NOTE:
 * I changed `let` to `var` because let can't do hoisting.
 */