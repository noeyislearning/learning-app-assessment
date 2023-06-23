let delay = (seconds) => new Promise ((resolves) => {
  setTimeout(resolves, seconds * 1000)
});

let tasks = [
  delay(4),
  delay(3),
  delay(2),
  delay(1)
];

class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.todo = promises;
    this.running = [];
    this.complete = [];
  }

  get runAnother() {
    return (this.running.length < this.concurrent) && this.todo.length;
  }

  graphTasks() {
    let { todo, running, complete } = this;
    console.log(`
      In progress: ${running.length}
      Queued: ${todo.length}
      Completed: ${complete.length}
    `);
  }

  run() {
    while (this.runAnother) {
      let promise = this.todo.shift();
      promise.then(() => {
        this.complete.push(this.running.shift());
        this.graphTasks();
        this.run();
      });
      this.running.push(promise);
      this.graphTasks();
    }
  }

  
};

let delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();