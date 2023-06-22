// Set a wait time of 3 seconds
const waitTime = 3000;

// Log a message to the console indicating the delay time
console.log(`Setting a ${waitTime / 1000} second delay`);

// Define a function to be called when the timer finishes
const timerFinished = () => console.log("Done");

// Set a timer to call the timerFinished function after the specified wait time
setTimeout(timerFinished, waitTime);