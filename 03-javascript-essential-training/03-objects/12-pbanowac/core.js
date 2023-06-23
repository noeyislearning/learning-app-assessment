/**
 * TITLE:
 * Practice: Build a new object with a constructor
 */

/**
 * EXERCISE:
 * 1. Create a new class based on one of more of the previous created objects. (Separate file)
 */

import Backpack from "./Backpack.js";
import Shoes from "./Shoes.js";

const newBackpack = new Backpack(
  "New Backpack",
  30,
  "blue",
  15,
)

const newShoes = new Shoes(
  "New Shoes",
  10,
  "red",
)

/**
 * Output:
 * Backpack
 */
console.log("My new backpack:", newBackpack); // Output: Backpack {name: "New Backpack", volume: 30, color: "blue", pocketNum: 15}
console.log("My new backpack's pocket number:", newBackpack.pocketNum); // Output: 15
console.log("My new backpack's color:", newBackpack.color); // Output: blue
console.log("My new backpack's volume:", newBackpack.volume); // Output: 30
console.log("My new backpack's name:", newBackpack.name); // Output: New Backpack
newBackpack.packBackpack(); // Output: I'm packing my backpack with the essentials.

/**
 * Output:
 * Shoes
 */
console.log("My new shoes:", newShoes); // Output: Shoes {name: "New Shoes", volume: 10, color: "red"}
console.log("My new shoes's color:", newShoes.color); // Output: red
console.log("My new shoes's volume:", newShoes.volume); // Output: 10
console.log("My new shoes's name:", newShoes.name); // Output: New Shoes
newShoes.packShoes(); // Output: I'm packing my shoes with the essentials.