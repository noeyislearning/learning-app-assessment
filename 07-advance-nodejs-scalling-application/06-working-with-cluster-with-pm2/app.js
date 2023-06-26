// Import the built-in Node.js http module
const http = require("http");

// Define a constant variable named PORT and set it to the value of the first command line argument or 3000 if no argument is provided
const PORT = parseInt(process.argv[2]) || 3000;

// Define an array of options to randomly choose from
const options = [
  "Go for it!",
  "Maybe sleep on it.",
  "Do some more research.",
  "I don't know.",
  "I wouldn't."
]

// Create a new HTTP server using the createServer method of the http module
const server = http.createServer((req, res) => {
  // Generate a random option from the options array
  const payload = JSON.stringify({
    PORT,
    pid: process.pid,
    advice: options[Math.floor(Math.random() * options.length)]
  })

  // Set the response header to indicate that the response body is JSON
  res.writeHead(200, { "Content-Type": "application/json" });

  // Write the response body to the response stream
  res.end(payload);
});

// Start the server listening on the specified port
server.listen(PORT, () => {
  // Log a message to the console indicating that the server has started and what process ID it is running under
  console.log(`Started process ${process.pid}.`);
  console.log(`Server listening on port ${PORT}.`)
});