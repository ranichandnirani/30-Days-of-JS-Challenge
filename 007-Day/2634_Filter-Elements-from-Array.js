/**
 * Problem understanding:
 * - We are given an array `arr`
 * - A callback function `fn(value, index)`
 * - The callback returns a truthy or falsy value
 * - We must return a new array containing only those elements
 *   for which the callback returns a truthy value
 *
 * Thought process:
 * - Create a new empty array to store filtered elements
 * - Traverse the array element by element
 * - Call `fn` with the current value and index
 * - If `fn` returns a truthy value, add the element to the new array
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var filter = function(arr, fn) {
    // Array to store elements that satisfy the condition
    let newArr = [];

    // Loop through each element of the array with its index
    arr.forEach((value, index) => {
        // Apply callback function
        // Keep the element only if fn returns a truthy value
        if (fn(value, index)) {
            newArr.push(value);
        }
    });

    // Return the filtered array
    return newArr;
};


//  Example 1
// Filters values greater than 10
console.log(filter([0, 10, 20, 30], (n) => n > 10)); // Output: [20, 30]

//  Example 2
// Keeps only the element at index 0
console.log(filter([1, 2, 3], (n, i) => i === 0)); // Output: [1]

//  Example 3 
// Keeps elements where (n + 1) is truthy
// Falsy values (like 0) are removed
console.log(filter([-2, -1, 0, 1, 2], (n) => n + 1)); // Output: [-2, 0, 1, 2]
