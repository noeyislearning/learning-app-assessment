/* Extending Classes */

// 1. Create a class called BookReview that extends the MovieReview class.
// 2. Create a constructor that takes all four properties and assigns them to the respective properties.
// 3. Create a method called header that returns the title, author, and starRating properties in a string like so: "Book Review: The Great Gatsby - 5 stars".

// Just import the MovieReview class from the previous exercise
class MovieReview {
    constructor(title, body, author, starRating) {
        this.title = title;
        this.body = body;
        this.author = author;
        if (starRating < 1) {
            this._starRating = 1;
        } else if (starRating > 5) {
            this._starRating = 5;
        } else {
            this._starRating = starRating;
        }
    }

    preview() {
        return this.body.substring(0, 50);
    }

    header() {
        return `Movie Review: ${this.title} - ${this._starRating} stars`;
    }

    toString() {
        return `${this.header()}\n${this.preview()}`;
    }

    get starRating() {
        return this._starRating;
    } 

    set starRating(value) {
        if (value < 1) {
            this._starRating = 1;
        } else if (value > 5) {
            this._starRating = 5;
        } else {
            this._starRating = value;
        }
    }
}

class BookReview extends MovieReview {
    constructor(title, body, author, starRating) {
        super(title, body, author, starRating);
    }

    header() {
        return `Book Review: ${this.title} - ${this.starRating} stars`;
    }
}

// 4. Create a new instance of the BookReview class with whatever book title, body, author, and starRating you want.
// 5. Call the toString method on your new instance and log the result to the console.

const bookReview = new BookReview("The Great Gatsby", "This is a great book about the roaring 20s...", "John Doe", 5);
console.log(bookReview.toString()); // Book Review: The Great Gatsby - 5 stars

/** ----- */

// Create a class called Animal with properties for name, color, and age.

class Animal {
    constructor(name) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    eat() {
        console.log(`${this.name} eats food.`);
    }

    sleep() {
        console.log(`${this.name} sleeps.`);
    }
}

// Cat

class Cat extends Animal {
    constructor(name, color, age) {
        super(name, color, age);
    }

    speak() {
        console.log(`${this.name} meows.`);
    }

    purr() {
        console.log(`${this.name} purrs.`);
    }
}

// Fish

class Fish extends Animal {
    constructor(name, color, age) {
        super(name, color, age);
    }

    speak() {
        console.log(`${this.name} bubbles.`);
    }

    swim() {
        console.log(`${this.name} swims.`);
    }
}

const cat = new Cat("Garfield", "orange", 3);
cat.speak(); // Garfield meows.

const fish = new Fish("Nemo", "orange", 1);
fish.speak(); // Nemo bubbles.