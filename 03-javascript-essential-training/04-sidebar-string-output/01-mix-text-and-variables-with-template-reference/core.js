/**
 * TITLE:
 * Mix Texts and Variables with Template Literals
 */

// Import the Backpack class from the Backpack.js file
import Backpack from "./js/Backpack.js";

// Create a new object using the Backpack class
const newBackpack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "Jan 15, 2023 15:00:00 PST"
)

/**
 * Method:
 * Determine Lid Status if Open or Closed
 * Translating from false to Closed and true to Open
 */
const lidStatus = newBackpack.lidOpen ? "Open" : "Closed";

// Template
const template = `
  <main>
    <article>
      <h1>Backpack Name: ${newBackpack.name}</h1>
      <ul>
        <li>Volume: ${newBackpack.volume}</li>
        <li>Color: ${newBackpack.color}</li>
        <li>Age: ${newBackpack.dateAcquired}</li>
        <li>Number of Pockets: ${newBackpack.pocketNum}</li>
        <li>Left strap lenght: ${newBackpack.strapLength.left}</li>
        <li>Right strap lenght: ${newBackpack.strapLength.right}</li>
        <li>Lid Status: ${lidStatus}</li>
      </ul>
    </article>
  </main>
`

document.body.innerHTML = template;