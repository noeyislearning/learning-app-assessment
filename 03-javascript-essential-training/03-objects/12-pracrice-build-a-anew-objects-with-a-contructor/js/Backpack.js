/**
 * Class:
 * Backpack
 */

class Backpack {
  constructor(
    // Parameters
    name,
    volume,
    color,
    pocketNum,
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
  }

  // Methods
  packBackpack() {
    console.log("I'm packing my backpack with the essentials.");
  }
}