/**
 * TITLE:
 Practice: Modifying classes and attributes, and styles
 */

/**
 * EXERCISE:
 * 1. Find an element and add two different classes
 * 2. Remove only one of the new classes
 * 3. Add a new attributes to an element
 * 4. Request the value of an attribute
 * 5. Change the value of an attribute
 * 6. Add inline styles to an element
 * 7. Query the style property of an element
 */

// Here are the steps to complete the exercise

// 1. Find an element and add two different classes
const main = document.querySelector(".main_content");
main.classList.add("backpack");
main.classList.add("new-class");

// 2. Remove only one of the new classes
main.classList.remove("new-class");

// 3. Add a new attributes to an element
main.setAttribute("id", "backpack");

// 4. Request the value of an attribute
console.log(main.getAttribute("id"));

// 5. Change the value of an attribute
main.setAttribute("id", "new-backpack");

// 6. Add inline styles to an element
main.style.backgroundColor = "blue";
main.style.color = "white";

// 7. Query the style property of an element
console.log(main.style.backgroundColor);
console.log(main.style.color);