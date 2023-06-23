/**
 * SECTION:
 * Classes
 */

/**
 * EXERCISE:
 * 1. Create a class called BookReview that extends the MovieReview class.
 */

// Exercise 1
// Tasks:
// 1. Create a class called BookReview that extends the MovieReview class.

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

// Define a class called `BookReview` that extends the `MovieReview` class.
class BookReview extends MovieReview {
    constructor(title, body, author, starRating, bookTitle) {
        // Call the constructor of the `MovieReview` class and pass in the `title`, `body`, `author`, and `starRating` properties.
        super(title, body, author, starRating);
        // Set the `bookTitle` property.
        this.bookTitle = bookTitle;
    }

    // Override the `header` method to include the `bookTitle` property in the output.
    header() {
        return `Book Review: ${this.bookTitle} - ${this.starRating} stars`;
    }
}