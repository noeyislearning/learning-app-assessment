/**
 * TITLE
 * Extend Classes
 */

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

class BookReview extends MovieReview {
    constructor(title, body, author, starRating, bookTitle) {
        super(title, body, author, starRating);
        this.bookTitle = bookTitle;
    }

    // @method: header that returns the title, author, and starRating properties in a string like so: "Book Review: Batman - 5 stars".
    header() {
        return `Book Review: ${this.bookTitle} - ${this.starRating} stars`;
    }
}