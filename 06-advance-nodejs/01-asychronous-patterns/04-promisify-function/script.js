// Import the `fs` module and the `promisify` function from the `util` module
let fs = require("fs");
let { promisify } = require("util"); 

// Define a function named `delay` that takes a number of seconds and a callback function as parameters
let delay = (seconds, callback) => {
  // If the number of seconds is greater than 3, call the callback function with an error message
  if (seconds > 3) {
    callback(new Error(`${seconds} is too long!`));
  } else {
    // Use the `setTimeout` function to delay the callback function by the specified number of seconds
    setTimeout(() => {
      callback(null, `The ${seconds} second delay is over.`);
    }, seconds * 1000);
  }
};

// Use the `promisify` function to convert the `delay` function to a promise-based function named `promiseDelay`
let promiseDelay = promisify(delay);

// Call the `promiseDelay` function with a delay of 3 seconds and log the resolved value to the console using the `then` method
promiseDelay(3)
  .then(console.log)
  .catch((error) => console.log(`Error: ${error.message}`));

// Use the `promisify` function to convert the `fs.writeFile` function to a promise-based function named `writeFile`
let writeFile = promisify(fs.writeFile);

// Call the `writeFile` function to create a new file named "sample.txt" with the contents "This is a sample text."
writeFile("sample.txt", "This is a sample text.")
  .then(() => console.log("File successfully created!"))
  .catch((error) => console.log(`Error: ${error.message}`));