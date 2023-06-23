// Require the built-in `http`, `fs`, and `util` modules and destructure the `createServer`, `stat`, `createReadStream`, and `promisify` methods
const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");

// Set the `file` variable to the path of the video file
const file = "../assets/powder-day.mp4";

// Promisify the `stat` method of the `fs` module using the `promisify` method of the `util` module
const info = promisify(stat);

// Create a new HTTP server using the `createServer` method of the `http` module
createServer( async (req, res) => {
  // Get the `size` property of the file using the `info` method and destructuring
  const { size } = await info(file);
  // Set the response headers using the `writeHead` method of the `res` object
  res.writeHead(200, { 
    "Content-Length": size,
    "Content-Type": "video/mp4" 
  });
  // Create a read stream for the file using the `createReadStream` method of the `fs` module and pipe it to the response stream using the `pipe` method
  createReadStream(file).pipe(res);
})
  // Listen for incoming requests on port 3000 and log a message to the console when the server is running
  .listen(3000, () => console.log("server running - localhost:3000"));