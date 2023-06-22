// Console log the process id
console.log(
  `The process id is ${process.pid}`
);

// Console log the process version
console.log(
  `The process version is ${process.versions.node}`
);

// Console log the process arguments
console.log(
  `The process arguments are ${process.argv}`
);

// Destructure the process arguments
const [, , firstName, lastName] = process.argv;

// Console log the process arguments
console.log(
  `Your name is ${firstName} ${lastName}`
);


// Define a function called `grab` that takes a single parameter called `flag`
const grab = flag => {
  // Find the index of the `flag` parameter in the `process.argv` array and add 1 to get the index of the value that comes after the flag
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  // Return the value at the index that comes after the flag
  return process.argv[indexAfterFlag];
}

// Define a variable called `greeting` that calls the `grab` function with the `--greeting` flag
const greeting = grab("--greeting");

// Define a variable called `user` that calls the `grab` function with the `--user` flag
const user = grab("--user");

// Console log the `greeting` and `user` variables
console.log(`${greeting} ${user}`);