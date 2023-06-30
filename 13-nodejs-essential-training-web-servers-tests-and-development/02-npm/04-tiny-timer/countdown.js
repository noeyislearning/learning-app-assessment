// Import the `minimist` module to parse command-line arguments.
const parseArgs = require("minimist");

// Import the `single-line-log` module to log output on a single line.
const { stdout: log } = require("single-line-log")

// Import the `tiny-timer` module to create a timer.
const Timer = require("tiny-timer");

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

// Create a new `Timer` instance with an interval of 1000ms (1 second).
const timer = new Timer({ interval: 1000 });

// Set up a `tick` event listener for the timer.
timer.on("tick", () => {
  // Log the `message` string on a single line using `single-line-log`.
  log(message);
  // Remove the last character from the `message` string.
  message = message.slice(0, -1);
})

// Start the timer with a duration of `count` seconds.
timer.start(count * 1000);