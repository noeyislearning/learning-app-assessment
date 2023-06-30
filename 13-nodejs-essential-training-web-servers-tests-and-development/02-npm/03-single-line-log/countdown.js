// Import the `minimist` module to parse command-line arguments.
const parseArgs = require("minimist");

// Import the `single-line-log` module to log output on a single line.
const { stdout: log } = require("single-line-log")

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

// Convert the `time` argument to a number.
const count = parseInt(time);

// Initialize the `message` variable to an empty string.
let message = "";

// Build the `message` string by adding an asterisk for each second of the countdown.
for (let i; i < count; i++) {
  message += "*";
}

// Log the `message` string on a single line using `single-line-log`.
log(message);

// Set a timeout to overwrite the `message` string after 2 seconds.
setTimeout(() => {
  log("Overwritten message.")
}, 2000)