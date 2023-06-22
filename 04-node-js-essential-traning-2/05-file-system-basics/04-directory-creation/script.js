// Import the `fs` module from the Node.js standard library
const fs = require("fs");

// Check if the "files" directory exists using the `fs.existsSync()` method
if (fs.existsSync("files")) {
  // If the directory exists, log a message to the console indicating that it is already there
  console.log("Already there");
} else {
  // Otherwise, create the "storage-files" directory using the `fs.mkdir()` method
  fs.mkdir("files", err => {
    // If an error occurs, throw the error
    if (err) {
      throw err;
    }
    // Otherwise, log a message to the console indicating that the directory has been created
    console.log("Directory created!");
  });
}