let name = "Francis"; // Declare a variable named name and assign it the value "Francis"

/**
 * @function names
 * @description Log the value of name to the console
 * @returns (NO RETURN)
 */
const names = () => {
  let otherName = "Ignacio"
  console.log(name, otherName);
}

names(); // Log the value of name to the console

console.log(name, otherName); // OUTPUT: ReferenceError: otherName is not defined

/**
 * WARNING:
 * There's an error,
 * because the variable otherName is declared inside the function names,
 * so it's only accessible inside the function names.
 */