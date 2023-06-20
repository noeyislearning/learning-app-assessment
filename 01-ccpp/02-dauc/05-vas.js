/**
 * TITLE:
 * Variables and Scope
 */

/** 
 * SECTION:
 * Variables
 */

// Global Scope
let globalVariable = "This is a global variable";

console.log(globalVariable); // This is a global variable

// Fucntion Scope
function functionScope() {
    let functionVariable = "This is a function variable";

    return functionVariable;
}

console.log(functionScope()); // This is a function variable

// Block Scope
if (true) {
    let blockVariable = "This is a block variable";

    console.log(blockVariable); // This is a block variable
}
