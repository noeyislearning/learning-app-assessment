/* Working with Class and Object */

// 1. Create a class called Person with two properties called firstName and lastName. Add a constructor that takes both a firstName and lastName as parameters and sets them to the respective properties. Finally add a method called displayFullName that returns the firstName and lastName separated by a space.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// 2. Create a class called Pet with two properties called name and animalType. Create a constructor that takes both a name and animalType as parameters and set them to the properties. Finally create a method called getPetInfo that returns a string like My pet is called Steve and is a dog.

class Pet {
    constructor(name, animalType) {
        this.name = name;
        this.animalType = animalType;
    }

    getPetInfo() {
        return `My pet is called ${this.name} and is a ${this.animalType}`;
    }
}

// Class and Instance

// 1. Create a class called Square with a single property, sideLength and create a constructor that assigns that value.
// 2. Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength).
// 3. Create a setter for area that sets the sideLength for the given area.

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    get area() {
        return this.sideLength * this.sideLength;
    }

    set area(value) {
        this.sideLength = Math.sqrt(value);
    }
}

// How to instantiate a class

// 1. Create a new instance of the Square class called square1. Assign sideLength a value of 5.
// 2. Call the getter area on square1 (i.e. square.area) and store the result in a variable called result.
// 3. Log out the value of result (should be 25).

const square1 = new Square(5);
const result = square1.area;
console.log(result); // 25
