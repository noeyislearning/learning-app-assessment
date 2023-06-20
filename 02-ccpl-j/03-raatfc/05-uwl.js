/**
 * TITLE:
 * Use While Loops
 */

// Create a variable
let count = 0;

// While Loop
while (count < 100) {
    
    // All numbers divisible by 9
    if (count % 9 == 0) {
        console.log(count);
    }

    count++;
}

// Do While Loop
let otherCount = 0;
do {
    console.log(otherCount);
    otherCount++;
}
while (otherCount < 10);