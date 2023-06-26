// Import the node-localstorage package.
const { LocalStorage } = require("node-localstorage");

// Create two instances of the LocalStorage class, one for each database.
const dbA = new LocalStorage("db-a-m");
const dbB = new LocalStorage("db-n-z");

// Determine which database to use based on the first letter of the user's name.
const whichDB = name => name.match(/^[a-m]|^[A-M]/) ? dbA : dbB;

// Load the list of users from the specified database.
const loadUsers = db => JSON.parse(db.getItem("users") || "[]");

// Check if a user with the specified name exists in either database.
const hasUser = name => {
  // Determine which database to use based on the first letter of the user's name.
  let db = whichDB(name);

  // Load the list of users from the specified database and check if the specified name is in the list.
  return loadUsers(db)
    .map(user => user.name)
    .includes(name);
};

// Export an object containing methods for adding and finding users.
module.exports = {

  // Add a new user to the appropriate database.
  addUser(newUser) {
    // If a user with the same name does not already exist.
    if (!hasUser(newUser.name)) {
      // Determine which database to use based on the first letter of the user's name.
      let db = whichDB(newUser.name);

      // Load the list of users from the specified database.
      let users = loadUsers(db);

      // Convert the age property to a number.
      newUser.age = Number(newUser.age);

      // Add the new user to the list of users and save the updated list to the database.
      users.push(newUser);
      db.setItem("users", JSON.stringify(users, null, 2));
    }
  },

  // Find all users with the specified age.
  findUsersByAge(age) {
    // Convert the age parameter to a number.
    age = Number(age);

    // Load the list of users from both databases and filter it to include only users with the specified age.
    return [
      ...loadUsers(dbA).filter(user => user.age === age),
      ...loadUsers(dbB).filter(user => user.age === age),
    ];
  },

  // Find the user with the specified name.
  findUser(name) {
    // Determine which database to use based on the first letter of the user's name.
    let db = whichDB(name);

    // Load the list of users from the specified database and find the user with the specified name.
    let users = loadUsers(db);
    return users.find(user => user.name === name);
  }
};