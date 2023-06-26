// Import the built-in Node.js http module
const http = require('http');

// Import the built-in Node.js cluster module
const cluster = require('cluster');

// Get the number of CPUs available on the system
const cpus = require('os').cpus().length;

// Check if the current process is the master process
if (cluster.isMaster) {
  // Log a message to the console indicating that this is the master process and what process ID it has
  console.log(`This is the master process: ${process.pid}`);

  // Fork a new process for each CPU available on the system
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  // Create a new HTTP server using the createServer method of the http module
  http.createServer((req, res) => {
    // Generate a message indicating which worker process is handling the request
    const message = `Worker ${process.pid}...`;

    // Log the message to the console
    console.log(message);

    // Write the message to the response stream and end the response
    res.end(message);
  }).listen(3000);
};