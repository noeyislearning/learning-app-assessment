/**
 * TITLE:
 * Challenge: Build and modify an array
 */

/**
 * CHALLENGE:
 * 1. Create an array with several items
 * 2. Remove the last item
 * 3. Move the last item to the first position
 * 4. Sort the items alphabetically
 * 5. Find a specific item in the array
 * 6. Remove an item with specific content form the array
 */

// Solution
// 1. Create an array with several items
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// 2. Remove the last item
items.pop(); // Output: Gum

// 3. Move the last item to the first position
items.unshift(items.pop()); // Output: Gum

// 4. Sort the items alphabetically
items.sort(); // Output: Gum, Notebook, Pencil

// 5. Find a specific item in the array
items.indexOf('Notebook'); // Output: 1

// 6. Remove an item with specific content form the array
items.splice(items.indexOf('Notebook'), 1); // Output: Notebook