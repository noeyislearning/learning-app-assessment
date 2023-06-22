// Import the `collectAnswers` function from the `answers.js` module
const collectAnswers = require("answers.js");

// Define an array of three questions
const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

// Call the `collectAnswers()` function with the array of questions as an argument, which returns an `EventEmitter`
const answerEvents = collectAnswers(questions);

// Listen for the "complete" event on the `EventEmitter` using the `on()` method and log a message to the console indicating that the answers have been collected and the answers themselves
answerEvents.on("complete", answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
});

// Listen for the "complete" event on the `EventEmitter` using the `on()` method and exit the process using the `process.exit()` method
answerEvents.on("complete", () => process.exit());