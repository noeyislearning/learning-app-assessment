/**
 * Function:
 * Backpack
 */
function Backpack(
  name,
  volume,
  color,
  pocketNum,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;

  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  }

  this.newStrapLength = function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap length updated.`);
  }
}

export default Backpack;