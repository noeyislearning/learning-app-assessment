// Require the built-in `fs` module and destructure the `createReadStream` and `createWriteStream` methods
const { createReadStream, createWriteStream } = require("fs");

// Create a read stream for the video file and a write stream for the copy
const readStream = createReadStream("../assets/powder-day.mp4", "UTF-8");
const writeStream = createWriteStream("./copy.mp4");

// Listen for the "data" event on the read stream and write each chunk to the write stream
readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

// Listen for the "error" event on the read stream and log the error to the console
readStream.on("error", (error) => {
  console.error(`Error: ${error}`);
});

// Listen for the "end" event on the read stream and end the write stream
readStream.on("end", () => {
  writeStream.end();
});

// Listen for the "close" event on the write stream and log a message to the console
writeStream.on("close", () => {
  process.stdout.write("File copied!\n");
});
