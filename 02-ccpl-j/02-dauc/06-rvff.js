/**
 * TITLE
 * Return Values from Functions
 */ 

// Initialize varaibles
let US_TAX = 0.07;
let PH_TAX = 0.12;
let CN_TAX = 0.05;

// Calling the functions
printTotal(100, "CN");

// Calculate the tax
function calculateTax(price, country) {
    let tax = 0.00;
    if (country === "US") {
        tax = price * US_TAX;
    } else if (country === "PH") {
        tax = price * PH_TAX;
    } else if (country === "CN") {
        tax = price * CN_TAX;
    } else {
        console.log("ERROR: Invalid country");
    }
    return tax;
}

// Calculate the total
function calculateTotal(price, country) {
    let total = price + calculateTax(price, country);
    return total;
}

// Print the total
function printTotal(price, country) {
    let total = calculateTotal(price, country);
    // If the country is invalid, add "Total Price is not accurate, please enter your valid country" to the total
    if (total === price) {
        total = total + " Total Price is not accurate, please enter your valid country";
    } else {
        total = total + ` You're in ${country} and your Total Price is accurate, you can proceed to checkout`;
    }
    console.log("Total price: " + total);
}