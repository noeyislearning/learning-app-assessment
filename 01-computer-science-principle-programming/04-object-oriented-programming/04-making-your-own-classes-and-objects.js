/**
 * SECTION:
 * Classes and Objects
 */

/**
 * EXERCISE:
 * 1. Create a class called MovieReview with properties for `title`, `rating`, and `review`.
 */

// Exercise 1
// Tasks:
// 1. Create a class called MovieReview with properties for `title`, `rating`, and `review`.

// Define a class called `MovieReview` with properties for `title`, `body`, `author`, and `starRating`.
class MovieReview {
    constructor(title, body, author, starRating) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.starRating = starRating;
    }

    // Define a method called `preview` that returns the first 50 characters of the `body` property.
    preview() {
        return this.body.substring(0, 50);
    }

    // Define a method called `header` that returns a string with the `title`, `author`, and `starRating` properties.
    header() {
        return `Movie Review: ${this.title} - ${this.starRating} stars`;
    }

    // Define a method called `toString` that returns a string with the result of calling the `header` and `preview` methods.
    toString() {
        return `${this.header()}\n${this.preview()}`;
    }

    // Define a getter and setter for the `starRating` property.
    get starRating() {
        return this._starRating;
    }

    set starRating(value) {
        // If the value is less than 1, set it to 1.
        if (value < 1) {
            this._starRating = 1;
        // If the value is greater than 5, set it to 5.
        } else if (value > 5) {
            this._starRating = 5;
        // Otherwise, set it to the value passed in.
        } else {
            this._starRating = value;
        }
    }
}

// Create a new instance of the `MovieReview` class with the title "The Godfather", body "This is a great movie about the mafia...", author "John Doe", and starRating 5.
const movieReview = new MovieReview("The Godfather", "This is a great movie about the mafia...", "John Doe", 5);

// Call the `toString` method on the `movieReview` object and output the result to the console.
console.log(movieReview.toString()); // Output: Movie Review: The Godfather - 5 stars