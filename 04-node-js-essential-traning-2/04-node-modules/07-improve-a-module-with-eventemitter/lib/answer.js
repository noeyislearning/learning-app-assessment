// Import the `readline` module from the Node.js standard library
const readline = require("readline");

// Import the `EventEmitter` class from the `events` module in the Node.js standard library
const { EventEmitter } = require("events");

// Create a readline interface using the standard input and output streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Export a function that takes an array of questions to ask and a callback function to be called when all questions have been answered
module.exports = (questions, done = f => f) => {
  // Define an array to hold the user's answers
  const answers = [];

  // Destructure the first question from the array of questions
  const [firstQuestion] = questions;

  // Create a new event emitter
  const emitter = new EventEmitter();

  // Define a function to be called when a question is answered
  const questionAnswered = answer => {
    // Add the answer to the array of answers
    answers.push(answer);
    // Emit an "answer" event with the answer
    emitter.emit("answer", answer);
    // If all questions have been answered, emit a "complete" event with the array of answers and call the callback function with the array of answers
    if (answers.length === questions.length) {
      emitter.emit("complete", answers);
      done(answers);
    } else {
      // Otherwise, ask the next question
      rl.question(questions[answers.length], questionAnswered);
    }
  };

  // Ask the first question
  rl.question(firstQuestion, questionAnswered);

  // Return the event emitter
  return emitter;
};