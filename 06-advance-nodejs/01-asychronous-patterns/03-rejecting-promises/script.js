/**
 * @function delayPromise
 * @description Returns a promise that resolves after a specified number of seconds
 * @param {number} seconds - The number of seconds to delay the resolution of the promise
 * @returns {Promise} - A promise that resolves after the specified number of seconds
 */
let delayPromise = (seconds) => new Promise((resolves, rejects) => {
  // If the number of seconds is greater than 3, reject the promise with an error message
  if (seconds > 3) {
    rejects(new Error(`${seconds} is too long!`));
  }
  // Use the setTimeout function to resolve the promise after the specified number of seconds
  setTimeout(() => {
    resolves("The long delay has ended.");
  }, seconds * 1000);
});

// Call the `delayPromise` function with a delay of 3 seconds and log the resolved value to the console
delayPromise(3)
  .then(console.log) // Use the `then` method to log the resolved value to the console
  .then(() => {
    const number = 3; // Declare a variable named `number` and assign it the value 3
    console.log(`Hello World, ${number} seconds later.`); // Log a message to the console with the value of `number`
  })
  .catch((error) => console.log(`Error: ${error.message}`)); // Use the `catch` method to log any errors to the console

// Log "End of program." to the console
console.log("End of program.");