// Require the built-in `fs` module
const fs = require("fs");

// Create a read stream for the video file
const readStream = fs.createReadStream("../assets/powder-day.mp4");

// Listen for the "data" event on the stream and log each chunk to the console
readStream.on("data", (chunk) => {
  console.log(`Reading chunk: ${chunk.length}`);
});

// Listen for the "end" event on the stream and log a message to the console
readStream.on("end", () => console.log("Reading finished!"));

// Listen for the "error" event on the stream and log the error to the console
readStream.on("error", (error) => console.error(`Error: ${error}`));

// Listen for the "data" event on the standard input stream and read from the read stream
process.stdin.on("data", (chunk) => {
  // If the input is "finish", resume the read stream
  if(chunk.toString().trim() === "finish") {
    readStream.resume();
  }
  // Read from the read stream
  readStream.read();
});