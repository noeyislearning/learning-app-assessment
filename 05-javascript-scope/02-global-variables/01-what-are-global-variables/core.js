"use strict";

// This is a global scope
const person = {
  name: "Francis",
  type: "Trainne",
}

const getPerson = () => {
  
  // This is also a global scope
  person3 = {
    name: "Noey",
    type: "Trainne",
  }
}

/**
 * TRY THIS:
 */
console.log(person, person3); // { name: 'Francis', type: 'Trainne' } { name: 'Noey', type: 'Trainne' }