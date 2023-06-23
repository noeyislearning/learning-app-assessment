/**
 * @function hideString
 * @description Replaces all alphabetic characters in a string with 'X'
 * @param {string} str - The string to be hidden
 * @param {function} done - A callback function to be called when the hiding is done
 * @returns (NO RETURN)
 */
function hideString(str, done) {
  process.nextTick(() => {
    done(str.replace(/[a-zA-Z]/g, 'X'));
  });
}

// Call the `hideString` function with the string "Hello World" and a callback function that logs the hidden string to the console
hidden = hideString("Hello World", (hidden) => {
  console.log(hidden); // Output: XXXXX XXXXX
});

// Log "End of program." to the console
console.log("End of program.");

/**
 * @function delay
 * @description Delays the execution of a callback function by a specified number of seconds
 * @param {number} seconds - The number of seconds to delay the execution of the callback function
 * @param {function} callback - The callback function to be executed after the delay
 * @returns (NO RETURN)
 */
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

// Call the `delay` function with a delay of 2 seconds and a callback function that logs "Two seconds" to the console
delay(2, () => {
  console.log("Two seconds");
  // Call the `delay` function with a delay of 1 second and a callback function that logs "Three seconds" to the console
  delay(1, () => {
    console.log("Three seconds");
    // Call the `delay` function with a delay of 1 second and a callback function that logs "Four seconds" to the console
    delay(1, () => {
      console.log("Four seconds\n");
      console.log("End of program.");
    });
  });
});