/* Variables and Scope */

// Global Scope
var globalVariable = 'This is a global variable';

console.log(globalVariable); // This is a global variable

// Function Scope
function functionScope() {
    var functionVariable = 'This is a function variable';

    console.log(functionVariable); // This is a function variable
}

functionScope();

// Block Scope
if (true) {
    var blockVariable = 'This is a block variable';

    console.log(blockVariable); // This is a block variable
}

console.log(blockVariable); // This is a block variable