/**
 * @function delayPromise
 * @description Returns a promise that resolves after a specified number of seconds
 * @param {number} seconds - The number of seconds to delay the resolution of the promise
 * @returns {Promise} - A promise that resolves after the specified number of seconds
 */
let delayPromise = (seconds) => new Promise((resolves, rejects) => {
  setTimeout(() => {
    resolves("The long delay has ended.");
  }, seconds * 1000);
});

// Call the `delayPromise` function with a delay of 4 seconds and log the resolved value to the console
delayPromise(4)
  .then(console.log)
  // Return the value 30
  .then(() => 30)
  // Log a message to the console with the value returned from the previous `then` block
  .then((number) => {
    console.log(`Hello World, ${number} seconds later.`);
  })

// Log "End of program." to the console
console.log("End of program.");