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

// Define an asynchronous function named `doStuffSequentially` that executes a series of promises sequentially
const doStuffSequentially = async () => {
  console.log("Starting..."); // Log "Starting..." to the console
  await delay(1); // Wait for 1 second using the `delay` function
  console.log("Waiting..."); // Log "Waiting..." to the console
  try {
    await writeFile("file.txt", "This is sample text."); // Create a new file named "file.txt" with the contents "This is sample text." using the `writeFile` function
    beep(); // Write a beep character to the console using the `beep` function
  } catch (error) {
    console.error(error); // Log any errors to the console
  }
  console.log("file.txt has sucessfully created."); // Log "file.txt has sucessfully created." to the console
  await delay(3); // Wait for 3 seconds using the `delay` function
  try {
    await unlink("file.txt"); // Remove the "file.txt" file using the `unlink` function
    beep(); // Write a beep character to the console using the `beep` function
  } catch (error) {
    console.error(error); // Log any errors to the console
  }
  console.log("file.txt has successfuly removed."); // Log "file.txt has successfuly removed." to the console
  
  return Promise.resolve(); // Return a resolved promise
}

doStuffSequentially(); // Call the `doStuffSequentially` function to execute the promises sequentially

// Define an asynchronous function named `start` that reads the contents of the current directory and logs them to the console
async function start() {
  try {
    const files = await readdir(__dirname); // Read the contents of the current directory using the `readdir` function
    console.log(files); // Log the contents of the current directory to the console
  } catch (error) {
    console.error(error); // Log any errors to the console
  }
}

start(); // Call the `start` function to read the contents of the current directory and log them to the console