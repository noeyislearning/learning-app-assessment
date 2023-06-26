// Import the built-in Node.js HTTP module.
const http = require("http");

// Import the built-in Node.js cluster module.
const cluster = require("cluster");

// Get the number of CPUs available on the system.
const cpus = require("os").cpus().length;

// Check if the current process is the master process.
if (cluster.isMaster) {
  // If this is the master process, log its process ID to the console.
  console.log(`This is the master process: ${process.pid}.`);

  // Fork a worker process for each CPU available on the system.
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  // Listen for the "exit" event on worker processes.
  cluster.on("exit", (worker, code, signal) => {
    // Log a message to the console indicating which worker process has died.
    console.log(`Worker ${worker.process.pid} has died.`);

    // Start a new worker process to replace the one that died.
    console.log(`Starting a new worker.`)
    cluster.fork();
    
    // If there are no more worker processes running, exit the master process.
    if (Object.keys(cluster.workers).length === 0) {
      console.log("All workers are dead.");
      process.exit();
    }
  });

// If this is a worker process, not the master process.
} else {
  // Log the process ID of the worker process to the console.
  console.log(`Started worker process: ${process.pid}.`);

  // Create an HTTP server to handle incoming requests.
  http.createServer((req, res) => {
    // Send a response to the client with the process ID of the worker process.
    res.end(`Process: ${process.pid}.`)

    // If the client requested to kill the process, exit the worker process.
    if (req.url === "/kill") {
      process.exit();
    } else if (req.url === "/") { 
      // If the client requested the root URL, log a message to the console.
      console.log(`Serving from ${process.pid}.`)
    }
  }).listen(3000);
};