// Require the built-in `stream` module and destructure the `Transform` method
const { Transform } = require("stream");

// Define a custom `ReplaceText` class that extends `Transform`
class ReplaceText extends Transform {

  constructor(char) {
    // Call the constructor of the `Transform` class using the `super` keyword
    super();
    // Set the `replaceChar` property to the value of the `char` parameter
    this.replaceChar = char;
  }

  // Implement the `_transform` method to replace all alphanumeric characters in the chunk with the `replaceChar` property
  _transform(
    chunk,
    encoding,
    callback
  ) {
    // Convert the chunk to a string and replace all alphanumeric characters with the `replaceChar` property
    const transformChunk = chunk.toString()
      .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);
    // Push the transformed chunk to the stream using the `push` method
    this.push(transformChunk);
    // Call the `callback` function to signal that the transformation is complete
    callback();
  }

  // Implement the `_flush` method to push a final message to the stream
  _flush(callback) {
    // Push the final message to the stream using the `push` method
    this.push("More stuff is being passed...");
    // Call the `callback` function to signal that the flush is complete
    callback();
  }
}

// Create a new `ReplaceText` stream with the `replaceChar` property set to "x"
let xStream = new ReplaceText("x");

// Pipe the standard input stream through the `xStream` stream and then to the standard output stream
process.stdin
  .pipe(xStream)
  .pipe(process.stdout);