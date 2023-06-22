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