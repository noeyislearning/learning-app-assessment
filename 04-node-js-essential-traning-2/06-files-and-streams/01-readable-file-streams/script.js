// Import the `fs` module from the Node.js standard library
const fs = require("fs");

// Create a read stream using the `fs.createReadStream()` method to read the file "./assets/lorum-ipsum.md" with the encoding "UTF-8"
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// Initialize an empty string variable to store the file contents
let fileTxt = "";

// Log a message to the console prompting the user to type something
console.log("Type something...");

// Listen for the "data" event on the read stream and append the data to the `fileTxt` variable
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data;
});

// Listen for the "data" event on the read stream and log the first chunk of data to the console
readStream.once("data", data => {
  console.log(data);
});

// Listen for the "end" event on the read stream and log a message to the console indicating that the file has been fully read and the total number of characters read
readStream.on("end", () => {
  console.log("Finished reading file!");
  console.log(`In total I read ${fileTxt.length - 1} characters of text.`);
});