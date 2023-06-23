let name = "Francis"; // Declare a variable named name and assign it the value "Francis"

/**
 * @function names
 * @description Log the value of name to the console
 * @returns (NO RETURN)
 */
const names = () => { // Declare a function named names
  let otherName = "Ignacio" // Declare a variable named otherName and assign it the value "Ignacio"
  return { // Return an object with a method named getName
    getName: () => { // Declare a method named getName
      return console.log(name, otherName) // Log the values of name and otherName to the console
    }
  }
}

// names().getName(); // Log the value of name to the console

const gettingName = names(); // Declare a variable named gettingName and assign it the value returned by calling the names function
gettingName.getName(); // Call the getName method on the object returned by the names function