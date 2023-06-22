const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

// Define a function to increment the currentTime variable
const incrementTime = () => {
  currentTime += waitInterval;
  console.log(`Waiting ${currentTime / 1000} seconds,`);
};

// Log a message to the console indicating the delay time
console.log(`Setting a ${waitTime / 1000} second delay.\n`);

// Define a function to be called when the timer finishes
const timerFinished = () => {
  // Clear the interval
  clearInterval(interval);
  // Log a message to the console indicating the timer is done
  console.log("Done")
  // Exit the process
  process.exit();
};

// Set a timer to call the incTime function every 500 milliseconds
const interval = setInterval(incrementTime, waitInterval);
// Set a timer to call the timerFinished function after the specified wait time
setTimeout(timerFinished, waitTime);