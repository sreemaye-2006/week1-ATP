/**
 * Function that receives 3 numbers as arguments and logs the largest number.
 * Demonstrates the use of functions and logical operators.
 * 
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {number} c - Third number
 */
function big(a, b, c) {
    // Compare a with b and c
    if (a > b && a > c) {
        console.log("a is greater");
    } 
    // Compare b with a and c
    else if (b > a && b > c) {
        console.log("b is greater");
    } 
    // If a and b are not the greatest, c must be
    else {
        console.log("c is greater");
    }
    
    // Note: returning multiple comma-separated values like this only returns the last one (c)
    return a, b, c;
}

// Test the function
big(10, 40, 30);
