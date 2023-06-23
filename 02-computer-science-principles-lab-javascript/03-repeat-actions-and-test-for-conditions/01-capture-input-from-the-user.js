// Elements
const outputEl = document.getElementById("output"); // Get the element with the ID "output" and assign it to the outputEl variable
const entryEl = document.getElementById("entry"); // Get the element with the ID "entry" and assign it to the entryEl variable
const btnEl = document.getElementById("btn"); // Get the element with the ID "btn" and assign it to the btnEl variable

// init() function
function init() {
    outputEl.innerHTML = "Enter your name and then click the button."; // Set the innerHTML of the outputEl element to "Enter your name and then click the button."
}

// Event Listener
btnEl.addEventListener("click", function () { // Add an event listener to the btnEl element that listens for a "click" event and executes the following function
    let name = entryEl.value; // Get the value of the entryEl element and assign it to the name variable
    if (name == "") { // If the name variable is empty
        name = "Anonymous"; // Set the name variable to "Anonymous"
        outputEl.innerHTML = "Hello " + name + "!"; // Set the innerHTML of the outputEl element to "Hello Anonymous!"
    } else { // If the name variable is not empty
        outputEl.innerHTML = "Hello " + name + "!"; // Set the innerHTML of the outputEl element to "Hello [name]!"
    }
});