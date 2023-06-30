// Import the `minimist` module to parse command-line arguments.
const parseArgs = require("minimist");

// Parse the command-line arguments using `minimist`.
const { time } = parseArgs(process.argv);

// Throw an error if the `time` argument is not provided.
if (!time) {
  throw new Error("Time is required.");
}

// Throw an error if the `time` argument is not a number.
if (!parseInt(time)) {
  throw new Error("Time must be a number.");
}

// Log the `time` argument to the console.
console.log(time);