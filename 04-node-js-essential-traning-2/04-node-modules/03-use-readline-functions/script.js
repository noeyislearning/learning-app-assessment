const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is your name? ",
  "What would you rather be doing? ",
  "What is your preferred programming language? "
]

const collectAnswers = (questions, done) => {
  const answers = [];
  let currentQuestion = 0;

  const questionAnswered = answer => {
    answers.push(answer);
    currentQuestion++;
    if(currentQuestion < questions.length) {
      rl.question(questions[currentQuestion], questionAnswered);
    } else {
      done(answers);
    }
  }; 

  rl.question(questions[currentQuestion], questionAnswered);
};

collectAnswers(questions, answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});