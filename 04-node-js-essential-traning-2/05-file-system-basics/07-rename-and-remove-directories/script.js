// Import the `fs` module from the Node.js standard library
const fs = require("fs");

// Loop through each file in the "./storage" directory using the `fs.readdirSync()` method and delete each file using the `fs.unlinkSync()` method
fs.readdirSync("./storage").forEach(fileName => {
  fs.unlinkSync(`./storage/${fileName}`);
});

// Remove the "./storage" directory using the `fs.rmdir()` method
fs.rmdir("./storage", err => {
  // If an error occurs, throw the error
  if (err) {
    throw err;
  }
  // Otherwise, log a message to the console indicating that the directory has been removed
  console.log("./storage directory removed!");
});