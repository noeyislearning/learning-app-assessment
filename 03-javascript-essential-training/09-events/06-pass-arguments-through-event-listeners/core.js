/**
 * TITLE:
 * Challenge: Build an advance function
 */

/**
 * CHALLENGE:
 * 1. Map through the data array to output an HTML article for each object
 * 2. Append each article to the main element
 */

// Importing Data
import backpackObjectArray from "./data/backpackData.js";

// Lid Toggle Function
const lidToggle = function (button, newArg) {
  console.log(newArg);

  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(({id}) => id === button.parentElement.id);

  // Toggle lidOpen status
  backpackObject.lidOpen = !backpackObject.lidOpen;

  // Toggle button text
  button.innerText = backpackObject.lidOpen ? "Close lid" : "Open lid";

  // Set visible property status text
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText = backpackObject.lidOpen ? " Open" : " Closed";
}

/**
 * Content
 * @param {array} backpackObjectArray
 * @returns {array} content
 */
const content = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
  <figure class="backpack__image">
      <img src=${backpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> Closed</span></li>
    </ul>
    <button class="lid_toggle lid-toggle">Open the Lid</button>
    `;

    // Opening the lid via button
    const button = backpackArticle.querySelector(".lid_toggle");

    // Passing new arg to lidToggle using bind
    const newArg = "This is a new argument";

    // Shorthand for the function
    button.addEventListener("click", () => {
      lidToggle(button, newArg)
    });

    return backpackArticle;
})

/**
 * Main
 */
const main = document.querySelector(".maincontent");

/**
 * Append
 * @param {array} content
 * @returns {array} content
 */
content.forEach((backpack) => {
  main.append(backpack);
});