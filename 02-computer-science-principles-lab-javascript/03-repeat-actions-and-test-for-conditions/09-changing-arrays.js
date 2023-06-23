// Create an array
let arr = [
    "Francis", "Noey", "Norraine"
]

// Add an element to the end of array
arr.push("Mon"); 
console.log(arr); // [ 'Francis', 'Noey', 'Norraine', 'Mon' ]

// Remove an element from the end of array
arr.pop();
console.log(arr); // [ 'Francis', 'Noey', 'Norraine' ]

// Add an element to the beginning of array
arr.unshift("Mon");
console.log(arr); // [ 'Mon', 'Francis', 'Noey', 'Norraine' ]

// Remove an element from the beginning of array
arr.shift();
console.log(arr); // [ 'Francis', 'Noey', 'Norraine' ]

// Remove an element from the middle of array
arr.splice(1, 1);
console.log(arr); // [ 'Francis', 'Norraine' ]

// Add an element to the middle of array
arr.splice(1, 0, "Noey");
console.log(arr); // [ 'Francis', 'Noey', 'Norraine' ]

// Replace an element from the middle of array
arr.splice(1, 1, "Mon");
console.log(arr); // [ 'Francis', 'Mon', 'Norraine' ]