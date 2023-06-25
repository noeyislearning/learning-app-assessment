/**
 * TITLE: 
 * The arrow function
 */

// Object

const greenPack = {
  name: "Green Pack",
  color: "green",
  volume: 30,
  pocketNum: 5,
}

// Function
const addPack = (currentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;

  return newArticle;
}

const main = document.querySelector(".main");
main.append(addPack(greenPack));