/**
 * Array of Employee objects.
 * Demonstrates updating, deleting, and modifying nested array data using JavaScript array methods.
 */
const employees = [
  { eno: 101, name: "Ravi", marks: [78, 82, 91] },
  { eno: 102, name: "Bhanu", marks: [65, 70, 68] },
  { eno: 103, name: "Sneha", marks: [88, 92, 95] },
  { eno: 104, name: "Kiran", marks: [55, 60, 58] },
  { eno: 105, name: "Anitha", marks: [90, 85, 87] },
];

// 1. Update an employee object at index 2 (Sneha)
// Removes 1 element starting at index 2, and inserts a new employee object.
employees.splice(2, 1, { eno: 100, name: "siri", marks: [40, 50, 60] });
console.log("After replacing index 2:");
console.log(employees);

// 2. Delete an employee object at index 3 (Kiran)
// Removes 1 element starting at index 3.
employees.splice(3, 1);
console.log("\nAfter deleting index 3:");
console.log(employees);

// 3. Update marks inside nested arrays
// Iterates through each employee and updates the 3rd mark (index 2) to 75.
for (let em of employees) {
    // Removes 1 element at index 2 of the marks array, and inserts 75
    em.marks.splice(2, 1, 75);
}

console.log("\nAfter modifying nested marks arrays:");
console.log(employees);
