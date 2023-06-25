/**
 * TITLE:
 * Typical DOM Events
 */

const containerEl = document.getElementById("container");
const btnEl = document.getElementById("btn");
const pXEl = document.getElementById("pX");
const pYEl = document.getElementById("pY");

// Log when the button is clicked in the console.
btnEl.addEventListener("click", () => {
  btnEl.classList.toggle("active");
  console.log("Button was clicked!");
}, false);

// Display the mouse position in the paragraph elements.
const mousePosition = (e) => {
  pXEl.innerHTML = e.clientX;
  pYEl.innerHTML = e.clientY;
}

window.addEventListener("mousemove", mousePosition, false);

// Change the color of the box when the mouse enters.
containerEl.addEventListener(
  "mouseenter",
  () => {
    containerEl.classList.add("blue");
  },
  false
);

containerEl.addEventListener(
  "mouseleave",
  () => {
    containerEl.classList.remove("blue");
  },
  false
);