// Import the fork method from the built-in Node.js child_process module
const { fork } = require('child_process');

// Create an array of child processes by forking the app.js script with different port numbers as command line arguments
const processes = [
  fork('./app', [3000]),
  fork('./app', [3001]),
  fork('./app', [3002]),
]

// Log a message to the console indicating how many child processes were started
console.log(`Started ${processes.length} processes.`);