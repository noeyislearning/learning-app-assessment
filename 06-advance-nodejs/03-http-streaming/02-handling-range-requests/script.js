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
  // Get the `range` header from the request object
  const range = req.headers.range;
  if (range) {
    // Parse the `start` and `end` values from the `range` header
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;
    // Set the response headers for a partial content response
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": (end - start) + 1,
      "Content-Type": "video/mp4"
    });
    // Create a read stream for the file with the specified range and pipe it to the response stream using the `pipe` method
    createReadStream(file, { start, end }).pipe(res);
  } else {
    // Set the response headers for a full content response
    res.writeHead(200, { 
      "Content-Length": size,
      "Content-Type": "video/mp4" 
    });
    // Create a read stream for the file and pipe it to the response stream using the `pipe` method
    createReadStream(file).pipe(res);
  }
})
  // Listen for incoming requests on port 3000 and log a message to the console when the server is running
  .listen(3000, () => console.log("server running - localhost:3000"));