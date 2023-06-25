/**
 * TITLE:
 * Loop through content
 */

// Array of Stuff
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method
stuff.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  stuffList.append(listItem);
});

// map() array method
const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

stuffItems.forEach((item) => {
  stuffList.append(item);
});

console.log("stuffList: ", stuffList); // Output: <ul> element
console.log("stuffItems: ", stuffItems); // Output: Array of <li> elements

article.append(stuffList);