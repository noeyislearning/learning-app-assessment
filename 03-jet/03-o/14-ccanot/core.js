/**
 * TITLE:
 * Challenge: Create a new object type
 */

/**
 * Instructions:
 * 1. Create a new object type called "Book"
 * 2. Use Class, objet constructor function, or individual objects
 * 3. Add properties and methods
 * 4. Add at least 5 book objects
 */

// Import the Book class from the Book.js file
import Book from "./js/Book.js";

// Create 5 book objects
const book1 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  310,
  19
);

const book2 = new Book(
  "The Fellowship of the Ring",
  "J.R.R. Tolkien",
  423,
  24
);

const book3 = new Book(
  "The Two Towers",
  "J.R.R. Tolkien",
  352,
  22
);

const book4 = new Book(
  "The Return of the King",
  "J.R.R. Tolkien",
  416,
  24
);

const book5 = new Book(
  "The Silmarillion",
  "J.R.R. Tolkien",
  480,
  24
);

/**
 * Output:
 * Use console.log() to output the book objects
 */
// Book 1
console.log(book1); // Output: Book {title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, chapters: 19}
console.log(book1.title); // Output: The Hobbit
console.log(book1.author); // Output: J.R.R. Tolkien
console.log(book1.pages); // Output: 310
console.log(book1.chapters); // Output: 19
book1.readBook(); // Output: You are reading The Hobbit by J.R.R. Tolkien.

// Book 2
console.log(book2); // Output: Book {title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: 423, chapters: 24}
console.log(book2.title); // Output: The Fellowship of the Ring
console.log(book2.author); // Output: J.R.R. Tolkien
console.log(book2.pages); // Output: 423
console.log(book2.chapters); // Output: 24
book2.readBook(); // Output: You are reading The Fellowship of the Ring by J.R.R. Tolkien.

// Book 3
console.log(book3); // Output: Book {title: "The Two Towers", author: "J.R.R. Tolkien", pages: 352, chapters: 22}
console.log(book3.title); // Output: The Two Towers
console.log(book3.author); // Output: J.R.R. Tolkien
console.log(book3.pages); // Output: 352
console.log(book3.chapters); // Output: 22
book3.readBook(); // Output: You are reading The Two Towers by J.R.R. Tolkien.

// Book 4
console.log(book4); // Output: Book {title: "The Return of the King", author: "J.R.R. Tolkien", pages: 416, chapters: 24}
console.log(book4.title); // Output: The Return of the King
console.log(book4.author); // Output: J.R.R. Tolkien
console.log(book4.pages); // Output: 416
console.log(book4.chapters); // Output: 24
book4.readBook(); // Output: You are reading The Return of the King by J.R.R. Tolkien.

// Book 5
console.log(book5); // Output: Book {title: "The Silmarillion", author: "J.R.R. Tolkien", pages: 480, chapters: 24}
console.log(book5.title); // Output: The Silmarillion
console.log(book5.author); // Output: J.R.R. Tolkien
console.log(book5.pages); // Output: 480
console.log(book5.chapters); // Output: 24
book5.readBook(); // Output: You are reading The Silmarillion by J.R.R. Tolkien.