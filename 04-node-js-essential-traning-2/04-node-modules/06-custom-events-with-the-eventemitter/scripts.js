// Import the `events` module from the Node.js standard library
const events = require("events");

// Create a new event emitter
const emitter = new events.EventEmitter();

// Define a listener function to be called when the "customEvent" event is emitted
emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// Listen for data events on the standard input stream
process.stdin.on("data", data => {
  // Convert the data to a string and remove any leading or trailing whitespace
  const input = data.toString().trim();
  // If the input is "exit", emit a "customEvent" event with the message "Goodbye!" and the user "process", and exit the Node.js process
  if (input === "exit") {
    emitter.emit("customEvent", "Goodbye!", "process");
    process.exit();
  }
  // Otherwise, emit a "customEvent" event with the input message and the user "terminal"
  emitter.emit("customEvent", input, "terminal");
});