/**
 * Problem understanding:
 * - We are given an array `arr`
 * - We are given a number `size`
 * - We need to split the array into subarrays (chunks)
 * - Each chunk should have at most `size` elements
 *
 *  process:
 * - Create an empty result array to store chunks
 * - While the original array still has elements:
 *   - Remove `size` elements from the start
 *   - Push them as a new subarray into result
 *
 * Approach:
 * - Use a `while` loop until `arr` becomes empty
 * - Use `splice(0, size)` to extract chunks
 *
 * Important note:
 * - `splice` modifies the original array
 *
 * Time Complexity: O(n)
 * - Every element is moved once
 *
 * Space Complexity: O(n)
 * - Extra space for the result array
 */
var chunk = function(arr, size) {
    const res = []; // store final chunks

    // Keep removing chunks until array is empty
    while (arr.length > 0) {
        res.push(arr.splice(0, size)); // take first `size` elements
    }

    return res; // return chunked array
}; 

// Example 1
console.log(chunk([1,2,3,4,5], 1));
// Output: [[1],[2],[3],[4],[5]]

// Example 2
console.log(chunk([1,9,6,3,2], 3));
// Output: [[1,9,6],[3,2]]

// Example 3
console.log(chunk([8,5,3,2,6], 6));
// Output: [[8,5,3,2,6]]

// Example 4
console.log(chunk([], 1));
// Output: []
