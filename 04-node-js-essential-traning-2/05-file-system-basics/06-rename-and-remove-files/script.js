// Import the `fs` module from the Node.js standard library
const fs = require("fs");

// Rename the file "./assets/colors.json" to "./assets/colorData.json" using the `fs.renameSync()` method
fs.renameSync("./assets/colors.json", "./assets/colorData.json");
console.log("colors.json has been renamed to colorData.json");

// Rename the file "./assets/notes.md" to "./files/notes.md" using the `fs.rename()` method
fs.rename("./assets/notes.md", "./files/notes.md", err => {
  // If an error occurs, throw the error
  if (err) {
    throw err;
  }
  console.log("notes.md has been moved to the files directory");
});

// Set a timeout of 4 seconds using the `setTimeout()` method
setTimeout(() => {
  // Delete the file "./assets/alex.jpg" using the `fs.unlinkSync()` method
  fs.unlinkSync("./assets/alex.jpg");
  console.log("alex.jpg has been deleted");
}, 4000);