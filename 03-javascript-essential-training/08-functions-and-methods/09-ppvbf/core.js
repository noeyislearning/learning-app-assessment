/**
 * TITLE:
 * Practice: Pass values between functions
 */

/**
 * EXERCISE:
 * 1. Create two functions that are dependent on the other to output some data from a custom object
 * 
 * Main Function
 * 1. Create a new article element
 * 2. Populate with content from the object properties
 * 3. Return the new element
 * 
 * Secondary Function
 * 1. Create new figure element
 * 2. Populate with content from the object properties
 * 3. Add <figcaption> with the image description
 * 4. Return the whole figure element
 * 
 * Practices
 * 1. Use querySelector() and append the method
 * 2. Pass the object to the man function
 * 3. Pass it to the figure function
 * 4. Return everything to the main function
 */


/**
 * SOLUTION:
 */

// Import Class Artwork
import Artwork from "./js/Artwork.js";

// Object
const artwork = new Artwork(
  // Title, Image, Description
  "The Persistence of Memory",
  "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg",
  "The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and is one of his most recognizable works. First shown at the Julien Levy Gallery in 1932, since 1934 the painting has been in the collection of the Museum of Modern Art (MoMA) in New York City, which received it from an anonymous donor. It is widely recognized and frequently referenced in popular culture, and sometimes referred to by more descriptive (though incorrect) titles, such as 'Melting Clocks', 'The Soft Watches' or 'The Melting Watches'. The well-known surrealist piece introduced the image of the soft melting pocket watch. It epitomizes Dalí's theory of 'softness' and 'hardness', which was central to his thinking at the time. As Dawn Ades wrote, 'The soft watches are an unconscious symbol of the relativity of space and time, a Surrealist meditation on the collapse of our notions of a fixed cosmic order'."
)

/**
 * newArticle()
 * @param {*} currentObject 
 * @returns the new article element
 */
const newArticle = (currentObject) => {
  // Create new article element
  const article = document.createElement("article");
  // Populate with content from the object properties
  article.innerHTML = `
    <h1>${currentObject.title}</h1>
    <figure>
      <img src="${currentObject.image}" alt="${currentObject.alt}">
      <figcaption>${currentObject.description}</figcaption>
    </figure>
  `;

  // Return the new element
  return article;
}

/**
 * newFigure()
 * @param {*} currentObject 
 * @returns the whole figure element
 */
const newFigure = (currentObject) => {
  // Create new figure element
  const figure = document.createElement("figure");
  // Populate with content from the object properties
  figure.innerHTML = `
    <img src="${currentObject.image}" alt="${currentObject.alt}">
    <figcaption>${currentObject.description}</figcaption>
  `;

  // Return the whole figure element
  return figure;
}

// Use querySelector() and append the method
const main = document.querySelector(".main");
// Append the methods
main.append(newArticle(artwork));
main.append(newFigure(artwork));