/**
 * TITLE:
 * Pass data to a function with parameters
 */

// Function
const calculator = (sum, percent) => {
  let tip = sum * percent;
  let total = sum + tip;

  console.log(`
    Sum: ${sum}
    Percent: ${percent}
    Tip: ${tip}
    Total: ${total}
  `);
}

// Output
calculator(5, .2); // Output: 6