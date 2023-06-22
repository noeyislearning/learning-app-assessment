// Import the `fs` module from the Node.js standard library
const fs = require("fs");

// Read the contents of the `./assets` directory using the `fs.readdir()` method
fs.readdir("./assets", (err, files) => {
  // If an error occurs, throw the error
  if (err) {
    throw err;
  }
  // Otherwise, log a message to the console indicating that the operation is complete and log the array of file names
  console.log("complete");
  console.log(files);
});

// Log a message to the console indicating that the operation has started
console.log("started reading files");