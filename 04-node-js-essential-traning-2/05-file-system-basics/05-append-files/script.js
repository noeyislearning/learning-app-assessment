// Import the `fs` module from the Node.js standard library
const fs = require("fs");

// Import the `colors.json` file
const colorData = require("./assets/colors.json");

// Loop through each color in the `colorList` array and append it to a file named "colors.md" in the "files" directory using the `fs.appendFile()` method
colorData.colorList.forEach(c => {
  fs.appendFile("./files/colors.md", `${c.color}: ${c.hex} \n`, err => {
    // If an error occurs, throw the error
    if (err) {
      throw err;
    }
    // Otherwise, log a message to the console indicating that the file has been appended
    console.log("File appended!");
  });
});