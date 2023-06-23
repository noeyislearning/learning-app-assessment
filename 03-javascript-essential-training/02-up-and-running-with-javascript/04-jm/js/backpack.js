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

export default backpack;