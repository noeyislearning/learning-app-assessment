/**
 * TITLE:
 * Practice: Find an element
 */

/**
 * EXERCISE:
 * 1. Identify specific elements using querySelector() and querySelectorAll()
 * 2. Use the console.log() method to print the element to the console
 * 3. Target specific elements nested within other elements
 * 4. Try advanced CSS query selectors to get specific elements
 */

// Here are the steps to complete the exercise

// 1. Identify specific elements using querySelector() and querySelectorAll()
const main = document.querySelector(".main_content");
console.log(main);

const allItems = document.querySelectorAll(".item");
console.log(allItems);

// 2. Use the console.log() method to print the element to the console
console.log(main);
console.log(allItems);

// 3. Target specific elements nested within other elements
const firstItem = document.querySelector(".item");
console.log(firstItem);

const firstItemH2 = document.querySelector(".item h2");
console.log(firstItemH2);

// 4. Try advanced CSS query selectors to get specific elements
const firstItemH2Span = document.querySelector(".item h2 span");
console.log(firstItemH2Span);

const allItemsH2 = document.querySelectorAll(".item h2");
console.log(allItemsH2);

const allItemsH2Span = document.querySelectorAll(".item h2 span");
console.log(allItemsH2Span);
