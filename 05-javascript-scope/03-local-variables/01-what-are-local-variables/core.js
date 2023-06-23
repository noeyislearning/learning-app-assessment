/**
 * @function person
 * @description Returns an object with a method named `getName` that logs two name objects to the console
 * @returns {Object} An object with a method named `getName`
 */
const person = () => {
  // Declare a variable named `name` and assign it an object with two properties: `firstName` and `lastName`
  let name = {
    firstName: "Francis",
    lastName: "Ignacio",
  };
  // Declare a variable named `name2` and assign it an object with two properties: `firstName` and `lastName`
  let name2 = {
    firstName: "Noey",
    lastName: "Ignacio",
  }
  return {
    // Declare a method named `getName` that logs the values of `name` and `name2` to the console
    getName: () => {
      return console.log(name, name2);
    }
  }
}

// Declare a variable named `gettingName` and assign it the value returned by calling the `person` function
const gettingName = person();

// Call the `getName` method on the object returned by the `person` function
gettingName.getName(); // { firstName: 'Francis', lastName: 'Ignacio' } { firstName: 'Noey', lastName: 'Ignacio' }