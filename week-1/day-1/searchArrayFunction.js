/**
 * Function that searches for a specific element in an array and logs its index.
 * It will log "not found" if the element does not exist in the array.
 * 
 * @param {number} key - The value to search for in the array
 */
function search(key) {
    // Array of marks to search within
    let marks = [90, 78, 89, 45];
    
    // Iterate over the array elements
    for (let index = 0; index < marks.length; index++) {
        // If the current element matches the search key
        if (marks[index] == key) {
            console.log("The index of the search element is:", index);
            // Exit the function early since we found the element
            return;
        }
    }
    
    // If the loop finishes without returning, the element was not found
    console.log("not found");
}

// Test the function by searching for 90
search(90);