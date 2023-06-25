/**
 * Create a backpack object,
 * Populaate some HTML to display its properties
 */

/**
 * Importing the backpack object
 */
import backpack from "./js/backpack.js";

/**
 * Component:
 * Markup 
 * @param {*} backpack 
 * @returns
 */
const markup = (backpack) => {
  return `
  <div>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
      <li>Strap length: L: ${backpack.strapLength.left}, R: ${backpack.strapLength.right}</li>
      <li>Top Lid ${backpack.lidOpen ? "Open" : "Closed"}</li>
    <ul>
  </div>
  `
}

/**
 * Update the page
 */
const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);

/**
 * Outputs (console.log),
 * Manipulation of the backpack object
 */
// Outputs
console.log("Backpack object: ", backpack); // Output: Backpack object:  {name: "Everyday Backpack", volume: 30, color: "grey", pocketNum: 15, strapLength: {…}, …}
console.log("The backpack has ", backpack.pocketNum, " pockets in it!"); // Output: The backpack has 15 pockets in it!
console.log("Left strap length: ", backpack.strapLength.left); // Output: Left strap length:  26
console.log("Right strap length: ", backpack.strapLength.right); // Output: Right strap length:  26

// Manipulation
backpack.newStrapLength(10, 15); // Output: Strap length updated.
backpack.toggleLid(true); // Output: Lid status changed.