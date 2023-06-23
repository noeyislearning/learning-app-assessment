// Import the `fs` module and the `promisify` function from the `util` module
const fs = require("fs");
const { promisify } = require("util");

// Use the `promisify` function to convert the `fs.writeFile` function to a promise-based function named `writeFile`
let writeFile = promisify(fs.writeFile);

// Use the `promisify` function to convert the `fs.unlink` function to a promise-based function named `unlink`
let unlink = promisify(fs.unlink);

// Define a function named `beep` that writes a beep character to the console
const beep = () => process.stdout.write("\x07");

// Define a function named `delay` that takes a number of seconds and returns a promise that resolves after the specified number of seconds
let delay = (seconds) => new Promise((resolves) => {
  setTimeout(resolves, seconds * 1000);
});

// Define a function named `doStuffSequentially` that executes a series of promises sequentially
const doStuffSequentially = () => Promise.resolve()
  .then(() => console.log("Starting"))
  .then(() => delay(1))
  .then(() => "Waiting")
  .then(console.log)
  .then(() => delay(2))
  .then(() => writeFile("file.txt", "This is sample text."))
  .then(beep)
  .then(() => "file.txt has sucessfully created.")
  .then(console.log)
  .then(() => delay(3))
  .then(() => unlink("file.txt"))
  .then(beep)
  .then(() => "file.txt has successfuly removed.")
  .then(console.log)
  .then(() => delay(2))
  .then(() => "Sequential execution complete.")
  .then(console.log)
  .catch(console.error);

// Call the `doStuffSequentially` function to execute the promises sequentially
doStuffSequentially();