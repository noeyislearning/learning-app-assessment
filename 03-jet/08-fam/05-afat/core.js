/**
 * TITLE: 
 * Arrow function and "this"
 */

// Defaults
window.volume = 20;

// Object
const greenPack = {
  name: "Green Pack",
  color: "green",
  volume: 30,
  pocketNum: 5,
  newVolume: function (volume) {
    console.log("`this.volume` in the method " + this.volume);
    this.volume = volume;
    console.log("`this.volume` after update " + this.volume);

    (function () {
      console.log("`this.volume` in nested function ", this.volume);
    })();
    (() => {
      console.log("`this.volume` in nested arrow function ", this.volume);
    });
  },
};

console.log(greenPack.newVolume(5)); // 5 