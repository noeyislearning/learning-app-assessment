// Import the built-in Node.js HTTP module.
const http = require("http");

// Import the node-localstorage package.
const { LocalStorage } = require("node-localstorage");

// Set the port number to use for the server.
const PORT = process.env.PORT || 3000;

// Create a new instance of the LocalStorage class, using the "./db" directory as the storage location.
const db = new LocalStorage("./db");

// Create an HTTP server to handle incoming requests.
const server = http.createServer((req, res) => {
  // If the client requested the root URL ("/").
  if (req.url === "/") {
    // Get the current value of the "data" key from the local storage.
    let requests = db.getItem("data");

    // Increment the value of the "data" key by 1.
    db.setItem("data", ++requests);

    // Send a JSON response to the client with the current value of the "data" key.
    res.end(JSON.stringify({ message: `Current request ${requests}.` }));
  }
});

// Start the server, listening on the specified port number.
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});