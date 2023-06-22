// Import the `path` module from the Node.js standard library
const path = require("path");

// Import the `log` function from the `util` module in the Node.js standard library
const { log } = require("util");

// Import the `getHeapStatistics` function from the `v8` module in the Node.js standard library
const { getHeapStatistics } = require("v8");

// Define a variable called `dirUploads` that contains the path to a directory called "uploads" inside a directory called "files" inside a directory called "www" in the current directory
// const dirUploads = path.join(__dirname, "www", "files", "uploads");

// Log the value of `dirUploads` to the console
// console.log(dirUploads);

// Log the name of the current file to the console using the `log` function from the `util` module
// util.log(path.basename(__filename));
// util.log("^ The name of the current file");

// Log heap statistics to the console using the `log` function from the `util` module and the `getHeapStatistics` function from the `v8` module
// util.log(v8.getHeapStatistics());
log(getHeapStatistics());