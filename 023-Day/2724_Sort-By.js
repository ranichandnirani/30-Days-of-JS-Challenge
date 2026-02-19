/**
 * Problem understanding:
 * - We are given an array `arr`
 * - We are given a function `fn`
 * - `fn(element)` returns a value used for sorting
 * - We must sort the array in ascending order based on that value
 *
 * t process:
 * -  `sort()` modifies the original array
 * - To avoid mutation, first create a copy of the array
 * - Use the returned value from `fn` to compare two elements
 *
 * Approach:
 * - Use `slice()` to create a shallow copy of `arr`
 * - Use `sort()` with a custom comparator
 * - Compare using: fn(a) - fn(b)
 *
 * Time Complexity: O(n log n)
 * - Sorting dominates the time complexity
 *
 * Space Complexity: O(n)
 * - Extra space due to array copy
 */
var sortBy = function(arr, fn) {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
};

// Examples

// Example 1
console.log(sortBy([5, 4, 1, 2, 3], x => x));
// Output: [1, 2, 3, 4, 5]

// Example 2
console.log(sortBy([{x:1}, {x:0}, {x:-1}], d => d.x));
// Output: [{x:-1}, {x:0}, {x:1}]

// Example 3
console.log(sortBy([[3,4], [5,2], [10,1]], x => x[1]));
// Output: [[10,1], [5,2], [3,4]]
