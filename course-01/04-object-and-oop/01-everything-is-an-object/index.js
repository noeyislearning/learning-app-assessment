/* Everything is an object */

const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello! My name is " + this.name + " and I am " + this.age + " years old.");
    }
}

person.greet(); // Hello! My name is John and I am 30 years old.