/**
 * TITLE:
 * Practice: Play with event listeners
 */

/**
 * EXERCISE:
 * 1. Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * 2. Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * 3. Add an event listener to each grid cell to change its background color when it is clicked.
 * 4. Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


/**
 * SOLUTION
 */
// 1. Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.

// Elements
const gridEl = document.getElementById("grid");
const cellEl = document.querySelectorAll(".cell");
const bodyEl = document.querySelector("body");

// Once hover, it will draw a hightlight around the entire grid
gridEl.addEventListener("mouseover", () => {
  gridEl.style.backgroundColor = "gray";
});

// Once hover, it will draw a hightlight a specific cell
cellEl.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "#000";
  });
});

// Once click, it will change the background color of a specific cell
cellEl.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = "#fff";
  });
});

// Add an event listener to the document to listen for keydown events
document.addEventListener("keydown", (event) => {
  // Check if the key pressed is the space bar
  if (event.code === "Space") {
    // Check the current background color
    if (document.body.style.backgroundColor === "rgb(0, 0, 0)") {
      // Change the background color to white (#fff) if it's currently black
      document.body.style.backgroundColor = "#fff";
    } else {
      // Change the background color to black (#000) if it's currently white or unset
      document.body.style.backgroundColor = "#000";
    }
  }
});

