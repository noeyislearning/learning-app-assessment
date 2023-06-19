/* Everything is a class */

// 1. Create a class called `Person` with a constructor that takes a `name` and `age` as arguments.
// 2. Create a class called `Student` that extends `Person` and adds a `grade` property that is set to `0` by default.
// 3. Create a class called `Teacher` that extends `Person` and adds a `subject` property that is set to `software development` by default.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    sayAge() {
        console.log(`I am ${this.age} years old.`);
    }

    sayNameAndAge() {
        this.sayHello();
        this.sayAge();
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age); // Call the constructor of the parent class
        this.grade = 95; // Set the default value
    }

    sayGrade() {
        console.log(`I am in grade ${this.grade}.`);
    }

    sayNameAgeAndGrade() {
        this.sayNameAndAge();
        this.sayGrade();
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age); // Call the constructor of the parent class
        this.subject = "Software Development"; // Set the default value
    }

    saySubject() {
        console.log(`I teach ${this.subject}.`);
    }

    sayNameAgeAndSubject() {
        this.sayNameAndAge();
        this.saySubject();
    }
}

const person = new Person("John", 30); // Hello, my name is John. I am 30 years old.
const student = new Student("Jane", 20); // Hello, my name is Jane. I am 20 years old. I am in grade 95.
const teacher = new Teacher("Jack", 45); // Hello, my name is Jack. I am 45 years old. I teach Software Development.
