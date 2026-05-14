/**
 * Program to find the smallest element in an array.
 * Demonstrates array iteration and comparison tracking.
 */

let marks = [90, 78, 65, 98];

// Assume the first element is the smallest initially
let small = marks[0];

// Iterate through the array to compare each element
for (let i = 0; i < marks.length; i++) {
    // If current element is smaller than the tracked minimum, update the minimum
    if (marks[i] < small) {
        small = marks[i];
    }
}

console.log("The smallest mark is:", small);