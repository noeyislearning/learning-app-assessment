// Require the built-in `fs` module and the built-in `http` module
var fs = require("fs");
var http =  require("http");

// Set the path to the video file
var file = '../assets/powder-day.mp4';

// Create an HTTP server that listens on port 3000
http.createServer((req, res) => {

    // Read the video file asynchronously
    fs.readFile(file, (error, data) => {
        if (error) {
            console.log('Error: ', error);
        }

        // Set the response header to indicate that the response contains a video file
        res.writeHeader(200, { 'Content-Type': 'video/mp4' });

        // Send the video file data in the response
        res.end(data);
    })

}).listen(3000, () => console.log("Buffer at http://localhost:3000"));