// Create an array
let arr = [
    "Francis", "Noey", "Norraine"
]

// Print the array using a for loop
for (let i = 0; i < arr.length; i++) {
    console.log(`Hello ${arr[i]}!`); // Log a greeting for each element in the array
}

// Print the array using another for loop
for (let i in arr) {
    console.log(`Have a nice day, ${arr[i]}!`); // Log a farewell for each element in the array
}