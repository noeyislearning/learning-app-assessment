// Import the `child_process` module from the Node.js standard library
const cp = require("child_process");

// Spawn a new process running the `node` command with the `questions.js` script as an argument
const questionApp = cp.spawn("node", ["questions.js"]);

// Write three strings to the standard input of the spawned process using the `stdin.write()` method
questionApp.stdin.write("Francis \n");
questionApp.stdin.write("Philippines \n");
questionApp.stdin.write("Change the world! \n");

// Listen for the "data" event on the standard output of the spawned process using the `stdout.on()` method and log the output to the console
questionApp.stdout.on("data", data => {
  console.log(`From the question app: ${data}.`);
});

// Listen for the "close" event on the spawned process using the `on()` method and log a message to the console indicating that the process has exited
questionApp.on("close", () => {
  console.log(`QuestionApp process exited.`);
});