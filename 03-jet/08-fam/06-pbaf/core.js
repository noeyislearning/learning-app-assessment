/**
 * TITLE:
 * Practice: Build a function
 */

/**
 * EXERCISE:
 * 1. Find an element
 * 2. Make a change to it
 * 3. Call the function
 * 4. Confirm that is works
 * 5. Repeat with an arrow function
 */

// Solution
// 1. Find an element
const title = document.querySelector("h1");

// 2. Make a change to it
function changeTitleF() {
  title.textContent = "Hello World!";
}

// 3. Call the function
changeTitleF(); // Output: "Hello World!"

// 4. Confirm that is works

// 5. Repeat with an arrow function
const changeTitleA = () => {
  title.textContent = "Hello World 2!";
}

changeTitleA(); // Output: "Hello World 2!"
