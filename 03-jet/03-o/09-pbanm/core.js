/**
 * TITLE:
 * Practice: Build a new method
 */

/**
 * EXERCISE:
 * 1. Create new methods in this object to change each property
 * 
 * KEY REMINDERS:
 * 1. Pass value to a function inside the parentheses
 * 2. Refer to the current oject with the keyword "this"
 * 3. Assign any value to any property
 */

const person = {
  firstName: "Francis",
  lastName: "Ignacio",
  age: 30,
  address: {
    street: "BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2",
    city: "Mabalacat",
    province: "Pampanga",
    country: "Philippines"
  },
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },
  greet() {
    return "Hello, I'm " + this.getFullName() + "and I'm " + this.age + " years old.";
  }
}

/**
 * Output to the console
 * Manipulation of the object
 */
// Output (Dot Notation)
console.log(person.greet()); // Output: Hello, I'm Francis Ignacio and I'm 30 years old.
console.log(person.firstName); // Output: Francis
console.log(person.lastName); // Output: Ignacio
console.log(person.age); // Output: 30
console.log(person.address); // Output: { street: 'BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2', city: 'Mabalacat', province: 'Pampanga', country: 'Philippines' }
console.log(person.address.street); // Output: BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2
console.log(person.address.city); // Output: Mabalacat
console.log(person.address.province); // Output: Pampanga
console.log(person.address.country); // Output: Philippines

// Output (Bracket Notation)
console.log(person["greet"]()); // Output: Hello, I'm Francis Ignacio and I'm 30 years old.
console.log(person["firstName"]); // Output: Francis
console.log(person["lastName"]); // Output: Ignacio
console.log(person["age"]); // Output: 30
console.log(person["address"]); // Output: { street: 'BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2', city: 'Mabalacat', province: 'Pampanga', country: 'Philippines' }
console.log(person["address"]["street"]); // Output: BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2
console.log(person["address"]["city"]); // Output: Mabalacat
console.log(person["address"]["province"]); // Output: Pampanga
console.log(person["address"]["country"]); // Output: Philippines

// Manipulation (Dot Notation)
person.firstName = "Noey"; // Output: John
person.lastName = "David"; // Output: David
person.age = 25; // Output: 25
person.address.street = "BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2"; // Output: BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2
person.address.city = "Mabalacat"; // Output: Mabalacat
person.address.province = "Pampanga"; // Output: Pampanga
person.address.country = "Philippines"; // Output: Philippines

// Manipulation (Bracket Notation)
person["firstName"] = "Noey"; // Output: John
person["lastName"] = "David"; // Output: David
person["age"] = 25; // Output: 25
person["address"]["street"] = "BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2"; // Output: BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2
person["address"]["city"] = "Mabalacat"; // Output: Mabalacat
person["address"]["province"] = "Pampanga"; // Output: Pampanga
person["address"]["country"] = "Philippines"; // Output: Philippines
