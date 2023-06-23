// Require the built-in `stream` and `fs` modules and destructure the `Duplex`, `PassThrough`, `createReadStream`, and `createWriteStream` methods
const { Duplex, PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

// Create a read stream for the video file and a write stream for the copy with an empty options object
const readStream = createReadStream("../assets/powder-day.mp4", "UTF-8");
const writeStream = createWriteStream("./copy.mp4", {

});

// Define a custom `Throttle` class that extends `Duplex`
class Throttle extends Duplex {

  constructor(ms) {
    super();
    this.delay = ms;
  }

  // Implement the `_write` method to push chunks to the read stream with a delay
  _write(
    chunk,
    encoding,
    callback
  ) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  // Implement the `_read` method to do nothing
  _read() { }

  // Implement the `_final` method to push a null value to the read stream
  _final() {
    this.push(null);
  }

}

// Create a new `PassThrough` stream to report the number of bytes processed and a new `Throttle` stream with a delay of 1000 ms
const report = new PassThrough();
const throttle = new Throttle(1000);

// Initialize a `total` variable to keep track of the total number of bytes processed and listen for the "data" event on the `report` stream to update the `total` variable and log the number of bytes processed to the console
let total = 0;
report.on("data", (chunk) => {
  total += chunk.length;
  console.log(`Bytes: ${total}`);
});

// Pipe the read stream through the `throttle` stream, the `report` stream, and the write stream
readStream
  .pipe(throttle)
  .pipe(report)
  .pipe(writeStream);