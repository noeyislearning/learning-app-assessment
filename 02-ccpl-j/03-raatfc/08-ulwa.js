/**
 * TITLE:
 * Use Loops with Arrays
 */

// Create an array
let arr = [
    "Francis", "Noey", "Norraine"
]

// Print the array
for (let i = 0; i < arr.length; i++) {
    console.log(`Hello ${arr[i]}!`); // Hello Francis! Hello Noey! Hello Norraine!
}

// Other method
for (let i in arr) {
    console.log(`Have a nice day, ${arr[i]}!`); // Hello Francis! Hello Noey! Hello Norraine!
}
