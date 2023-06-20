/**
 * TITLE:
 * Everything is a Class
 */

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

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayNameAge() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const person = new Person("Francis", 23); // Hello, my name is Francis and I am 23 years old.
person.sayNameAge(); // Hello, my name is Francis and I am 23 years old.

// Exercise 2
// Tasks:
// 1. Create a class called `Student` that extends `Person` and adds a `grade` property that is set to `0` by default.

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the constructor of the parent class
        this.grade = grade;
    }

    sayGrade() {
        console.log(`I am in grade ${this.grade}.`);
    }

    sayNameAgeGrade() {
        this.sayNameAge();
        this.sayGrade();
    }
}

const student = new Student("Francis", 23, 6); // Hello, my name is Francis and I am 23 years old. I am in grade 6.
student.sayNameAgeGrade(); // Hello, my name is Francis and I am 23 years old. I am in grade 6.

// Exercise 3
// Tasks:
// 1. Create a class called `Teacher` that extends `Person` and adds a `subject` property that is set to `software development` by default.

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // Call the constructor of the parent class
        this.subject = subject;
    }

    saySubject() {
        console.log(`I teach ${this.subject}.`);
    }

    sayNameAgeSubject() {
        this.sayNameAge();
        this.saySubject();
    }
}

const teacher = new Teacher("Francis", 23, "software development"); // Hello, my name is Francis and I am 23 years old. I teach software development.
teacher.sayNameAgeSubject(); // Hello, my name is Francis and I am 23 years old. I teach software development.