// Import the `fs` module from the Node.js standard library
const fs = require("fs");

// Define a markdown string
const md = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

// Write the markdown string to a file named "notes.md" in the "assets" directory using the `fs.writeFile()` method
fs.writeFile("./assets/notes.md", md.trim(), err => {
  // If an error occurs, throw the error
  if (err) {
    throw err;
  }
  // Otherwise, log a message to the console indicating that the file has been saved
  console.log("file saved");
});
