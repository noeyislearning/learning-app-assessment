// Require the built-in `fs` module and the built-in `http` module
const fs = require("fs");
const http = require("http");

// Set the path to the video file
let file = "../assets/powder-day.mp4";

// Create an HTTP server that listens on port 3000
http.createServer((req, res) => {

  // Set the response header to indicate that the response contains a video file
  res.writeHeader(200, { "Content-Type": "video/mp4" });

  // Create a read stream for the video file and pipe it to the response
  fs.createReadStream(file)
    .pipe(res)
    .on("error", console.error);

}).listen(3000, () => console.log("Buffering video..."));