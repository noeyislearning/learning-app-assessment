process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");

// Define a variable called `questions` that is an array of questions
const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
]

/**
 * Ask the user a question
 * @param {*} i 
 */
const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

// Call the `ask` function
ask();

// Define a variable called `answers` that is an array of answers
const answer = [];

// Listen for the `data` event on `process.stdin`
process.stdin.on("data", data => {
  answer.push(data.toString().trim());

  if (answer.length < questions.length) {
    ask(answer.length);
  } else {
    process.exit();
  }
});

// Listen for the `exit` event on `process`
process.on("exit", () => {
  const [name, activity, lang] = answer;
  console.log(`
    Thank you for your answers.
    Go ${activity} ${name} you can write ${lang} code later!!!
  `);
});
