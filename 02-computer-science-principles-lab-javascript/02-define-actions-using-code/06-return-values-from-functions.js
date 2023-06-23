// Initialize varaibles
let US_TAX = 0.07; // Initialize the tax rate for the United States
let PH_TAX = 0.12; // Initialize the tax rate for the Philippines
let CN_TAX = 0.05; // Initialize the tax rate for China

// Calling the functions
printTotal(100, "CN"); // Call the printTotal() function with a price of 100 and a country of "CN"

// Calculate the tax
function calculateTax(price, country) {
    let tax = 0.00; // Initialize the tax variable to 0
    if (country === "US") { // If the country is the United States
        tax = price * US_TAX; // Calculate the tax based on the US tax rate
    } else if (country === "PH") { // If the country is the Philippines
        tax = price * PH_TAX; // Calculate the tax based on the PH tax rate
    } else if (country === "CN") { // If the country is China
        tax = price * CN_TAX; // Calculate the tax based on the CN tax rate
    } else { // If the country is not valid
        console.log("ERROR: Invalid country"); // Log an error message to the console
    }
    return tax; // Return the calculated tax
}

// Calculate the total
function calculateTotal(price, country) {
    let total = price + calculateTax(price, country); // Calculate the total price by adding the price and the tax
    return total; // Return the calculated total
}

// Print the total
function printTotal(price, country) {
    let total = calculateTotal(price, country); // Calculate the total price
    if (total === price) { // If the country is not valid
        total = total + " Total Price is not accurate, please enter your valid country"; // Add an error message to the total
    } else { // If the country is valid
        total = total + ` You're in ${country} and your Total Price is accurate, you can proceed to checkout`; // Add a success message to the total
    }
    console.log("Total price: " + total); // Log the total price to the console
}