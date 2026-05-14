/**
 * Program to calculate the total sum of elements in an array.
 * Demonstrates basic array iteration using a for loop.
 */

let marks = [90, 78, 65, 98];
let sum = 0; // Initialize sum accumulator

// Iterate through each element in the array
for (let i = 0; i < marks.length; i++) {
    // Add current array element to the running sum
    sum = sum + marks[i];
}

console.log("The total sum of marks is:", sum);
