// Import the `child_process` module from the Node.js standard library
const cp = require("child_process");

// Execute the command "node readStream" using the `cp.exec()` method and log the output to the console
cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});

// Execute the command "ls" using the `cp.exec()` method and log the output to the console
cp.exec("ls", (err, data, stderr) => {
  console.log(data);
});

// Execute the command "git version" using the `cp.exec()` method and log the output to the console
cp.exec("git version", (err, data, stderr) => {
  console.log(data);
});