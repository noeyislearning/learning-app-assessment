/**
 * Create a backpack object,
 * Populaate some HTML to display its properties
 */

/**
 * Method to update the DOM with backpack object properties.
 * @param {*} update 
 */
const updateBackpack = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
  console.info(update);
}

/**
 * Object:
 * Backpack
 */
const backpack = {
  /**
   * Properties
   */
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  /**
   * Methods
   * @param {*} lidStatus 
   */
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack("Lid status changed.");
  },
  /**
   * 
   * @param {*} lengthLeft 
   * @param {*} lengthRight 
   */
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack("Strap length updated.");
  }
};

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