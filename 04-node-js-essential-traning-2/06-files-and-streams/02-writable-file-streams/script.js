// Import the `fs` module from the Node.js standard library
const fs = require("fs");

// Create a write stream using the `fs.createWriteStream()` method to write to the file "./assets/file.txt" with the encoding "UTF-8"
const writeStream = fs.createWriteStream("./assets/file.txt", "UTF-8");

// Create a read stream using the `fs.createReadStream()` method to read the file "./assets/lorum-ipsum.md" with the encoding "UTF-8"
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// Pipe the read stream to the write stream using the `readStream.pipe()` method
readStream.pipe(writeStream);

// Log a message to the console indicating that the file has been fully written
console.log("Finished writing file!");