class Book {
  constructor(
    // Parameters
    title,
    author,
    pages,
    chapters,
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.chapters = chapters;
  }

  // Methods
  readBook() {
    console.log(`You are reading ${this.title} by ${this.author}.`);
  }

  readChapter(chapter) {
    console.log(`You are reading ${this.title} by ${this.author} and you are on chapter ${chapter}.`);
  }
}