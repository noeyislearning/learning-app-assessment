/* Capture Input from the User */

// 1. Use the prompt() method to capture input from the user and store it in a variable named name.
// 2. Use the alert() method to display the message "Hello, " plus the name variable.
// 3. Use the prompt() method to capture input from the user and store it in a variable named age.

// Define steps you wanna perform
// 1. Capture input from the user
// 2. Display the message "Hello, " plus the name variable

// Define the functions
function captureInput() {
    // Capture input from the user
    var name = prompt("What is your name?");
    // Display the message "Hello, " plus the name variable
    alert("Hello, " + name);
    // Capture input from the user
    var age = prompt("What is your age?");
    // Display the message "You are " plus the age variable
    alert("You are " + age);
}

captureInput();

// Sychronous Input Example
var name = prompt("What is your name?");

// Asychronous Input Example
var userName;
prompt("What is your name?", function(input) {
    userName = input;
});