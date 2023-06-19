/* Functions with Parameters */

// 1. Saying Hello + the name function
function sayHello(name) {
    console.log("Hello " + name);
}

// Call the function with a value for the parameter
sayHello("John"); // Hello John

// 3. Calculating the area of a rectangle
function calculateArea(length, width) {
    console.log(length * width);
}

// Call the function with values for the parameters
calculateArea(10, 5); // 50


// 3. Calculating a order total
function calculateTotal(quantity, price, taxRate) {
    console.log(quantity * price * taxRate);
}

// Call the function with values for the parameters
calculateTotal(2, 10, 1.05); // 21