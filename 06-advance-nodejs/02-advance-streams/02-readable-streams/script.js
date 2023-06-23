// Require the built-in `stream` module
const { Readable } = require("stream");

// Define an array of mountain peaks
const mountainPeaks = [
  "Tallac",
  "Ralston",
  "Rubicon",
  "Freel",
]

// Define a custom Readable stream that reads from an array
class StreamFromArray extends Readable {

  constructor(array) {
    // Call the constructor of the Readable class and pass in an options object
    super({ objectMode: true });
    // Store the array and initialize the index
    this.array = array;
    this.index = 0;
  }

  // Implement the `_read` method required by the Readable class
  _read() {
    // If the index is less than or equal to the length of the array
    if(this.index <= this.array.length) {
      // Create a chunk object with the current element and index
      const chunk = {
        data: this.array[this.index],
        index: this.index
      }
      // Push the chunk onto the stream
      this.push(chunk);
      // Increment the index
      this.index += 1;
    } else {
      // If the index is greater than the length of the array, push null to signal the end of the stream
      this.push(null);  
    }
  }

}

// Create a new instance of the custom stream and pass in the array of mountain peaks
const peakStream = new StreamFromArray(mountainPeaks);

// Listen for the "data" event on the stream and log each chunk to the console
peakStream.on("data", (chunk) => console.log(chunk));

// Listen for the "end" event on the stream and log a message to the console
peakStream.on("end", () => console.log("Stream done!"));