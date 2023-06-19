/* Using Polymorphism */

// 1. Create a class named `Animal` that includes name, color, and age properties and also includes a interface like for dog and cat, they can walk. 
// 2. Create a class named `Dog` that extends from `Animal` and includes a method called `speak` that returns `Dog barks`.
// 3. Create a class named `Cat` that extends from `Animal` and includes a method called `speak` that returns `Cat meows`.
// 4. Create a class named `Fish` that extends from `Animal` and includes a method called `speak` that returns `Fish bubbles`.


class Animal {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    walk() {
        console.log(`${this.name} walks.`);
    }
}

class Dog extends Animal {
    constructor(name, color, age) {
        super(name, color, age);
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    constructor(name, color, age) {
        super(name, color, age);
    }

    speak() {
        console.log(`${this.name} meows.`);
    }
}

class Fish extends Animal {
    constructor(name, color, age) {
        super(name, color, age);
    }

    speak() {
        console.log(`${this.name} bubbles.`);
    }
}

const dog = new Dog("Snoopy", "white", 5);
dog.walk(); // Snoopy walks.

const cat = new Cat("Garfield", "orange", 3);
cat.walk(); // Garfield walks.

const fish = new Fish("Nemo", "orange", 1);
fish.walk(); // Nemo walks.