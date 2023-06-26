// Import the db module from the "./db" file.
const db = require("./db");

// Add several users to the database.
db.addUser({ name: "John", age: 30 });
db.addUser({ name: "Jane", age: 25 });
db.addUser({ name: "Bob", age: 27 });
db.addUser({ name: "Alice", age: 28 });
db.addUser({ name: "Tom", age: 29 });
db.addUser({ name: "Sam", age: 25 });
db.addUser({ name: "Ben", age: 24 });
db.addUser({ name: "Tim", age: 31 });
db.addUser({ name: "Mike", age: 32 });

// Find all users with age 25.
let users = db.findUsersByAge(25);

// Find the user with name "Alice".
let user = db.findUser("Alice");

// Log the number of users with age 25 and the name of the user with name "Alice".
console.log(`Users with age 25: ${users.length}`);
console.log(`User with name Alice: ${user.name}`);