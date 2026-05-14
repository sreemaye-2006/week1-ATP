/**
 * Program to find the largest number among three given numbers.
 * Demonstrates the use of logical AND (&&) in conditional statements.
 */

let a = 10;
let b = 20;
let c = 30;

// Check if a is greater than both b and c
if (a > b && a > c) {
    console.log("a is greater");
} 
// Check if b is greater than both a and c
else if (b > a && b > c) {
    console.log("b is greater");
} 
// If neither a nor b is the largest, c must be the largest
else {
    console.log("c is greater");
}