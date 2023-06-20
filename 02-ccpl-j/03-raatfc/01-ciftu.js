/**
 * TITLE:
 * Capture Input From The User
 */

// Elements
const outputEl = document.getElementById("output");
const entryEl = document.getElementById("entry");
const btnEl = document.getElementById("btn");

// init() function
function init() {
    outputEl.innerHTML = "Enter your name and then click the button.";
}

// Event Listener
btnEl.addEventListener("click", function () {
    let name = entryEl.value;
    if (name == "") {
        name = "Anonymous";
        outputEl.innerHTML = "Hello " + name + "!";
    } else {
        outputEl.innerHTML = "Hello " + name + "!";
    }
});