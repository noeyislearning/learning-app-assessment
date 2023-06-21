/**
 * TITLE:
 * Add DOM Elements
 */

// Import Backpack class
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
  "Jan 15, 2023 15:00:00 PST",
  "../_assets/img/defbp.svg"
)

// Template
const content = 
`
  <figure class="backpack_image">
    <img src=${newBackpack.image} alt=""/>
  </figure>
  <h1 class="backpack_name">
    ${newBackpack.name}
  </h1>
  <ul class="backpack_features">
    <li class="packprop backpack_volume">
      Volume: <span>${newBackpack.volume}l</span>
    </li>
    <li class="packprop backpack_color">
      Color: <span>${newBackpack.color}</span>
    </li>
    <li class="packprop backpack_pockets">
      Number of pockets: <span>${newBackpack.pocketNum}</span>
    </li>
    <li class="packprop backpack_strap">
      Strap length: <span>${newBackpack.strapLength.left} inches (left) / ${newBackpack.strapLength.right} inches (right)</span>
    </li>
    <li class="packprop backpack_lid">
      Lid status: <span>${newBackpack.lidOpen ? "Open" : "Closed"}</span>
    </li>
  </ul>
`

// Access main element
const main = document.querySelector(".main_content");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "backpack");
newArticle.innerHTML = content;

main.append(newArticle);