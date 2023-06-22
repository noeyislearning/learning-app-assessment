// Import the `readline` module from the Node.js standard library
const readline = require("readline");

// Import the `EventEmitter` class from the `events` module
const { EventEmitter } = require("events");

// Create a new `readline.Interface` instance using the `readline.createInterface()` method with `process.stdin` as the input and `process.stdout` as the output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Export a function that takes an array of questions and an optional `done` callback function as arguments
module.exports = (questions, done = f => f) => {
  // Define an empty array to hold the answers
  const answers = [];

  // Destructure the first question from the array of questions
  const [firstQuestion] = questions;

  // Create a new `EventEmitter` instance
  const emitter = new EventEmitter();

  // Define a function to handle a question being answered
  const questionAnswered = answer => {
    // Emit an "answer" event on the `EventEmitter` with the answer as the argument
    emitter.emit("answer", answer);

    // Push the answer to the `answers` array
    answers.push(answer);

    // If there are more questions to ask, emit an "ask" event on the `EventEmitter` with the next question as the argument and ask the question using the `rl.question()` method
    if (answers.length < questions.length) {
      emitter.emit("ask", questions[answers.length]);
      rl.question(questions[answers.length], questionAnswered);
    } else {
      // If there are no more questions to ask, emit a "complete" event on the `EventEmitter` with the `answers` array as the argument and call the `done` callback function with the `answers` array as the argument
      emitter.emit("complete", answers);
      done(answers);
    }
  };

  // Call the `rl.question()` method with the first question and the `questionAnswered` function as the callback
  process.nextTick(() => {
    emitter.emit("ask", firstQuestion);
    rl.question(firstQuestion, questionAnswered);
  });

  // Return the `EventEmitter`
  return emitter;
};