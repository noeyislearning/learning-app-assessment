// For Loop
for (let i = 0; i < 10; i++) {
    console.log(`The square of ${i} is ${Math.pow(i, 2)}`); // Log the square of i
}

/**
 * ROW Example
 * 1 2 3 4 5 6 7 8 9 10
 * 2 4 6 8 10 12 14 16 18 20
 */

// Nested For Loop
for (let i = 1; i <= 10; i++) {
    let row = ""; // Create an empty string
    for (let j = 1; j <= 10; j++) {
        row += `${i * j} `; // Add the product of i and j to the row string
    }
    console.log(row); // Log the row string
}