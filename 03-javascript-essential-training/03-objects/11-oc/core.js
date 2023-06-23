/**
 * Create a backpack object,
 * Populaate some HTML to display its properties
 */

/**
 * Importing the backpack object
 */
import Backpack from "./js/backpack.js";

const newBackpack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
)

// Output the newly imported object
console.log("The new backpack object:", newBackpack); // Output: Backpack {name: "Everyday Backpack", volume: 30, color: "grey", pocketNum: 15, strapLength: {…}, …}
console.log("My new backpack has", newBackpack.pocketNum, "pockets on it!"); // Output: My new backpack has 15 pockets on it!


