// Require the built-in `fs` module and destructure the `createWriteStream` method
const { createWriteStream } = require("fs");

// Create a write stream for the file and set the options object to an empty object
const writeStream = createWriteStream("./file.txt", {

});

// Pipe the standard input stream to the write stream
process.stdin.pipe(writeStream);