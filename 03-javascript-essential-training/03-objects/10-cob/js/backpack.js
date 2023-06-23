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
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Properties
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }

  // Methods
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  }

  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap length updated.`);
  }
}

export default Backpack;