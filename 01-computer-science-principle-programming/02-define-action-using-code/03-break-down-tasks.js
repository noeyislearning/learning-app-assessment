/**
 * SECTION:
 * Functions
 */

/**
 * EXERCISE:
 * TAKING OUT THE TRASH
 */

// Define a function named `takeOutTheTrash` that calls the `getTheTrashCan` function
function takeOutTheTrash() {
    getTheTrashCan();
}

// Define a function named `getTheTrashCan` that calls the `openTheTrashCan` function
function getTheTrashCan() {
    openTheTrashCan();
}

// Define a function named `openTheTrashCan` that calls the `putTheTrashInTheTrashCan` function
function openTheTrashCan() {
    putTheTrashInTheTrashCan();
}

// Define a function named `putTheTrashInTheTrashCan` that calls the `closeTheTrashCan` function
function putTheTrashInTheTrashCan() {
    closeTheTrashCan();
}

// Define a function named `closeTheTrashCan` that returns nothing, indicating that the task is complete
function closeTheTrashCan() {
    return; // Done!
}