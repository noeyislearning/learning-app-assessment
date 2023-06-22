// Import the `events` module from the Node.js standard library
const events = require("events");

// Import the `rl` readline interface from the `readline.js` module in the `lib` directory
const rl = require("./lib/readline.js");

// Export a function that takes an array of questions to ask and returns an event emitter that emits "answer" events with the user's answers and a "complete" event when all questions have been answered
module.exports = questions => {
  // Create a new event emitter
  const emitter = new events.EventEmitter();

  // Define an array to hold the user's answers
  const answers = [];

  // Define a function to be called when a question is answered
  const questionAnswered = answer => {
    // Add the answer to the array of answers
    answers.push(answer);
    // Emit an "answer" event with the answer
    emitter.emit("answer", answer);
    // If all questions have been answered, emit a "complete" event with the array of answers
    if (answers.length === questions.length) {
      emitter.emit("complete", answers);
    } else {
      // Otherwise, ask the next question
      rl.ask(questions[answers.length], questionAnswered);
    }
  };

  // Ask the first question
  rl.ask(questions[0], questionAnswered);

  // Return the event emitter
  return emitter;
};