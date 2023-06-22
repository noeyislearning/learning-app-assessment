// Import the `collectAnswers` function from the `answers.js` module in the `lib` directory
const collectAnswers = require("./lib/answers.js");

// Define an array of questions to ask the user
const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

// Call the `collectAnswers` function with the array of questions and a callback function to be called when all questions have been answered
collectAnswers(questions, answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});