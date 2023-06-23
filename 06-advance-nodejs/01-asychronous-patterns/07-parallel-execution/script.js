// Import the `fs` module and the `promisify` function from the `util` module
const fs = require("fs");
const { promisify } = require("util");

// Use the `promisify` function to convert the `fs.writeFile` function to a promise-based function named `writeFile`
let writeFile = promisify(fs.writeFile);

// Use the `promisify` function to convert the `fs.unlink` function to a promise-based function named `unlink`
let unlink = promisify(fs.unlink);

// Use the `promisify` function to convert the `fs.readdir` function to a promise-based function named `readdir`
let readdir = promisify(fs.readdir);

// Define a function named `beep` that writes a beep character to the console
const beep = () => process.stdout.write("\x07");

// Define a function named `delay` that takes a number of seconds and returns a promise that resolves after the specified number of seconds
let delay = (seconds) => new Promise((resolves) => {
  setTimeout(resolves, seconds * 1000);
});

// Use `Promise.all` to execute an array of promises in parallel
Promise.all([
  writeFile("readme.md", "Hello World"), // Create a new file named "readme.md" with the contents "Hello World" using the `writeFile` function
  writeFile("readme.txt", "Hello World"), // Create a new file named "readme.txt" with the contents "Hello World" using the `writeFile` function
  writeFile("readme.json", "{ \"hello\": \"world\" }"), // Create a new file named "readme.json" with the contents "{ \"hello\": \"world\" }" using the `writeFile` function
  console.log("All the files have been created."), // Log "All the files have been created." to the console
  delay(3), // Wait for 3 seconds using the `delay` function
  unlink("readme.md"), // Remove the "readme.md" file using the `unlink` function
  unlink("readme.txt"), // Remove the "readme.txt" file using the `unlink` function
  unlink("readme.json"), // Remove the "readme.json" file using the `unlink` function
  console.log("All the files have been removed."), // Log "All the files have been removed." to the console
  delay(2), // Wait for 2 seconds using the `delay` function
])
  .then(() => readdir(__dirname)) // Read the contents of the current directory using the `readdir` function
  .then(console.log) // Log the contents of the current directory to the console

// Use `Promise.race` to execute an array of promises and return the result of the first promise that resolves or rejects
Promise.race([
  writeFile("readme.md", "Hello World"), // Create a new file named "readme.md" with the contents "Hello World" using the `writeFile` function
  writeFile("readme.txt", "Hello World"), // Create a new file named "readme.txt" with the contents "Hello World" using the `writeFile` function
  writeFile("readme.json", "{ \"hello\": \"world\" }"), // Create a new file named "readme.json" with the contents "{ \"hello\": \"world\" }" using the `writeFile` function
  console.log("All the files have been created."), // Log "All the files have been created." to the console
  delay(3), // Wait for 3 seconds using the `delay` function
  unlink("readme.md"), // Remove the "readme.md" file using the `unlink` function
  unlink("readme.txt"), // Remove the "readme.txt" file using the `unlink` function
  unlink("readme.json"), // Remove the "readme.json" file using the `unlink` function
  console.log("All the files have been removed."), // Log "All the files have been removed." to the console
  delay(2), // Wait for 2 seconds using the `delay` function
])
  .then(() => readdir(__dirname)) // Read the contents of the current directory using the `readdir` function
  .then(console.log) // Log the contents of the current directory to the console