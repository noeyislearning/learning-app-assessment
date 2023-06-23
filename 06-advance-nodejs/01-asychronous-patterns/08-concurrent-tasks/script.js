// Define a function named `delay` that takes a number of seconds and returns a promise that resolves after the specified number of seconds
let delay = (seconds) => new Promise ((resolves) => {
  setTimeout(resolves, seconds * 1000)
});

// Define an array named `tasks` that contains four promises returned by the `delay` function with different delay times
let tasks = [
  delay(4),
  delay(3),
  delay(2),
  delay(1)
];

// Define a class named `PromiseQueue` that takes an array of promises and a number of concurrent promises to run
class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrent = concurrentCount; // Set the number of concurrent promises to run
    this.total = promises.length; // Set the total number of promises
    this.todo = promises; // Set the array of promises to run
    this.running = []; // Set the array of running promises
    this.complete = []; // Set the array of completed promises
  }

  // Define a getter named `runAnother` that returns a boolean indicating whether another promise can be run
  get runAnother() {
    return (this.running.length < this.concurrent) && this.todo.length;
  }

  // Define a method named `run` that runs the promises
  run() {
    while (this.runAnother) { // While another promise can be run
      let promise = this.todo.shift(); // Remove the first promise from the array of promises to run
      promise.then(() => { // When the promise resolves
        this.complete.push(this.running.shift()); // Remove the first promise from the array of running promises and add it to the array of completed promises
        this.graphTasks(); // Call the `graphTasks` method to log the current state of the `PromiseQueue` instance
        this.run(); // Call the `run` method to run another promise
      });
      this.running.push(promise); // Add the promise to the array of running promises
      this.graphTasks(); // Call the `graphTasks` method to log the current state of the `PromiseQueue` instance
    }
  }

  // Define a method named `graphTasks` that logs the current state of the `PromiseQueue` instance
  graphTasks() {
    let { todo, running, complete } = this;
    console.log(`
      In progress: ${running.length}
      Queued: ${todo.length}
      Completed: ${complete.length}
    `);
  }
};

// Create a new `PromiseQueue` instance named `delayQueue` with the `tasks` array and a concurrent count of 2
let delayQueue = new PromiseQueue(tasks, 2);

// Call the `run` method of the `delayQueue` instance to run the promises
delayQueue.run();