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