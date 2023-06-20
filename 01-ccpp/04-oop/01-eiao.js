/**
 * TITLE:
 * Everything is an Object
 */

/**
 * SECTION:
 * Objects
 */

/**
 * EXERCISE:
 * 1. Create an object named `person` with a `name` property and a `greet` method.
 */

// Exercise 1
// Tasks:
// 1. Create an object named `person` with a `name` property and a `greet` method.

const person = {
    name: "Francis",
    age: 23,
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.")
    }
}

person.greet(); // Hello, my name is Francis and I am 23 years old.