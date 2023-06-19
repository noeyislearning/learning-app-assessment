/* Making Classes and Objects */

// Movie Review Class and Object

// 1. Create a class called MovieReview with properties for title, body, author, and starRating.
// 2. Create a constructor that takes all four properties and assigns them to the respective properties.
// 3. Create a method called preview that returns the first 50 characters from the body.
// 4. Create a method called header that returns the title, author, and starRating properties in a string like so: "Movie Review: Batman - 5 stars".
// 5. Create a method called toString that returns the result of calling the header, then preview methods, separated by a new line.

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

// 6. Create a new instance of the MovieReview class with whatever movie title, body, author, and starRating you want.
// 7. Call the toString method on your new instance and log the result to the console.

const movieReview = new MovieReview("The Godfather", "This is a great movie about the mafia...", "John Doe", 5);
console.log(movieReview.toString()); // Movie Review: The Godfather - 5 stars