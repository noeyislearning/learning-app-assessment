// Require the built-in `http`, `fs`, and `util` modules and destructure the `createServer`, `stat`, `createReadStream`, `createWriteStream`, and `promisify` methods
const { createServer } = require("http");
const { stat, createReadStream, createWriteStream } = require("fs");
const { promisify } = require("util");

// Set the `file` variable to the path of the video file
const file = "../assets/powder-day.mp4";

// Promisify the `stat` method of the `fs` module using the `promisify` method of the `util` module
const info = promisify(stat);

// Define an `async` function called `respondWithVideo` that takes two parameters: `req` (the request object) and `res` (the response object)
const respondWithVideo = async (req, res) => {
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
}

// Create a new HTTP server using the `createServer` method of the `http` module
createServer((req, res) => {
  // If the request method is `POST`, pipe the request stream to the response stream, the standard output stream, and a write stream for the uploaded file
  if(req.method === "POST") {
    req.pipe(res);
    req.pipe(process.stdout);
    req.pipe(createWriteStream("../assets/uploaded-file.txt")); 
  }

  // If the request URL is `/video`, call the `respondWithVideo` function with the `req` and `res` parameters
  if(req.url === "/video") {
    respondWithVideo(req, res);
  } else {
    // Set the response headers for an HTML response
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    // Send an HTML form to the response stream
    res.end(`
      <form enctype="multipart/form-data" method="POST" action="/">
        <input type="file" name="upload-file" />
        <button>Upload File</button>
      </form>
    `);
  }
})
  // Listen for incoming requests on port 3000 and log a message to the console when the server is running
  .listen(3000, () => console.log("server running - localhost:3000"));