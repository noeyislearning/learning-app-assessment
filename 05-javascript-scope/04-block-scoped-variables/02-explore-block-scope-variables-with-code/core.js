function exampleFunctionForBlockScopeVariable() {
  let x = 1; // Declare a block-scoped variable named `x` and assign it the value 1
  if (true) {
    let x = 2; // Declare another block-scoped variable named `x` and assign it the value 2
    console.log(x); // Log the value of `x` to the console (should be 2)
  }
  console.log(x); // Log the value of `x` to the console (should be 1)
}

exampleFunctionForBlockScopeVariable(); // Call the `exampleFunctionForBlockScopeVariable` function