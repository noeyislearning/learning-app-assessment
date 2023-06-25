/**
 * PRACTICE:
 * Build a new object
 */

/**
 * EXERCISE:
 * 1. Give each object an identifiable name.
 * 2. Create properties to describe the objects and set their values.
 * 3. Find an object that has another object inside of it to create a nested object.
 * 4. Test your objects in the browser console by accessing the entire objecet and its specific properties.
 */

const person = {
  firstName: "Francis",
  lastName: "Ignacio",
  age: 23,
  address: {
    street: "BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2",
    city: "Mabalacat City",
    state: "Pampanga",
    country: "Philippines",
  }
}

// Via dot notation
console.log(person.firstName); // Output: Francis
console.log(person.lastName); // Output: Ignacio
console.log(person.address.street); // Output: BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2
console.log(person.address.city); // Output: Mabalacat City
console.log(person.address.state); // Output: Pampanga
console.log(person.address.country); // Output: Philippines

// Via bracket notation
console.log(person["firstName"]); // Output: Francis
console.log(person["lastName"]); // Output: Ignacio
console.log(person["address"]["street"]); // Output: BLK 62, Lot 26, David St., Brgy. Camachiles Phase 2
console.log(person["address"]["city"]); // Output: Mabalacat City
console.log(person["address"]["state"]); // Output: Pampanga
console.log(person["address"]["country"]); // Output: Philippines