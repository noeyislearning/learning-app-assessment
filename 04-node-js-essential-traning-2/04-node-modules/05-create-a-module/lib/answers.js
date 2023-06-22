// Import the `readline` module from the Node.js standard library
const readline = require("readline");

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

  // Define a function to be called when a question is answered
  const questionAnswered = answer => {
    // Add the answer to the array of answers
    answers.push(answer);
    // If there are more questions to ask, ask the next question
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      // If all questions have been answered, call the callback function with the array of answers
      done(answers);
    }
  };

  // Ask the first question
  rl.question(firstQuestion, questionAnswered);
};