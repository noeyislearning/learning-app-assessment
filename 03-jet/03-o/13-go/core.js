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
  false,
  "March 22, 2023 00:17:00 PST"
)

// Output the newly imported object
console.log("The new backpack object:", newBackpack); // Output: Backpack {name: "Everyday Backpack", volume: 30, color: "grey", pocketNum: 15, strapLength: {…}, …}
console.log("My new backpack has", newBackpack.pocketNum, "pockets on it!"); // Output: My new backpack has 15 pockets on it!

// Date acquired
console.log("The backpack is", newBackpack.backpackAge(), "days old."); // Output (will change): The backpack is  0 days old.


