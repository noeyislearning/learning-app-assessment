/**
 * SECTION:
 * Classes
 */

/**
 * EXERCISE:
 * 1. Create a class called `Person` with a constructor that takes a `name` and `age` as arguments.
 * 2. Create a class called `Student` that extends `Person` and adds a `grade` property that is set to `0` by default.
 * 3. Create a class called `Teacher` that extends `Person` and adds a `subject` property that is set to `software development` by default.
 */

// Exercise 1
// Tasks:
// 1. Create a class called `Person` with a constructor that takes a `name` and `age` as arguments.

// Define a class called `Person` with a constructor that takes a `name` and `age` as arguments.
class Person {
    constructor(name, age){
        // Set the `name` and `age` properties of the object to the values passed in as arguments.
        this.name = name;
        this.age = age;
    }

    // Define a method called `sayNameAge` that logs a message to the console.
    sayNameAge() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

// Create a new instance of the `Person` class with the name "Francis" and age 23.
const person = new Person("Francis", 23);

// Call the `sayNameAge` method on the `person` object.
person.sayNameAge();

// Define a class called `Student` that extends the `Person` class.
class Student extends Person {
    constructor(name, age, grade) {
        // Call the constructor of the parent class (`Person`) with the `name` and `age` arguments.
        super(name, age);
        // Set the `grade` property of the object to the value passed in as an argument.
        this.grade = grade;
    }

    // Define a method called `sayGrade` that logs a message to the console.
    sayGrade() {
        console.log(`I am in grade ${this.grade}.`);
    }

    // Define a method called `sayNameAgeGrade` that calls the `sayNameAge` and `sayGrade` methods.
    sayNameAgeGrade() {
        this.sayNameAge();
        this.sayGrade();
    }
}

// Create a new instance of the `Student` class with the name "Francis", age 23, and grade 6.
const student = new Student("Francis", 23, 6);

// Call the `sayNameAgeGrade` method on the `student` object.
student.sayNameAgeGrade();

// Define a class called `Teacher` that extends the `Person` class.
class Teacher extends Person {
    constructor(name, age, subject) {
        // Call the constructor of the parent class (`Person`) with the `name` and `age` arguments.
        super(name, age);
        // Set the `subject` property of the object to the value passed in as an argument.
        this.subject = subject;
    }

    // Define a method called `saySubject` that logs a message to the console.
    saySubject() {
        console.log(`I teach ${this.subject}.`);
    }

    // Define a method called `sayNameAgeSubject` that calls the `sayNameAge` and `saySubject` methods.
    sayNameAgeSubject() {
        this.sayNameAge();
        this.saySubject();
    }
}

// Create a new instance of the `Teacher` class with the name "Francis", age 23, and subject "software development".
const teacher = new Teacher("Francis", 23, "software development");

// Call the `sayNameAgeSubject` method on the `teacher` object.
teacher.sayNameAgeSubject();