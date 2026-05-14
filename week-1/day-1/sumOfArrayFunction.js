/**
 * Function that receives an array as an argument and returns the sum of its elements.
 * Demonstrates passing arrays into functions and using return values.
 * 
 * @param {number[]} arr - The array of numbers to sum
 * @returns {number} The calculated sum
 */

// Initialize a global sum variable (Note: it's better to keep this inside the function scope)
let sum = 0;

function arrayFun(arr) {
    // Reset sum to 0 in case the function is called multiple times
    sum = 0; 
    
    // Iterate over the elements of the array
    for (let i = 0; i < arr.length; i++) {
        // Accumulate the sum
        sum = sum + arr[i];
    }
    
    return sum;
}

// Call the function with an array of numbers
arrayFun([10, 20, 30, 40]);

// Log the globally updated sum
console.log("Sum of array elements is:", sum);
