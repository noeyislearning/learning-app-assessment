/**
 * TITLE
 * Making Your Own Classes and Objects
 */

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

class MovieReview {
    constructor(title, body, author, starRating) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.starRating = starRating;
    }

    // @method: preview that returns the first 50 characters from the body.
    preview() {
        return this.body.substring(0, 50);
    }

    // @method: header that returns the title, author, and starRating properties in a string like so: "Movie Review: Batman - 5 stars".
    header() {
        return `Movie Review: ${this.title} - ${this.starRating} stars`;
    }

    // @method: toString that returns the result of calling the header, then preview methods, separated by a new line.
    toString() {
        return `${this.header()}\n${this.preview()}`;
    }

    // @method: Getting the value of starRating and setting the value of starRating, and having a condition that if the value is less than 1, it will be 1, and if the value is more than 5, it will be 5.
    // @getter: starRating
    get starRating() {
        return this._starRating;
    }

    // @setter: starRating
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

const movieReview = new MovieReview("The Godfather", "This is a great movie about the mafia...", "John Doe", 5);
console.log(movieReview.toString()); // Movie Review: The Godfather - 5 stars
