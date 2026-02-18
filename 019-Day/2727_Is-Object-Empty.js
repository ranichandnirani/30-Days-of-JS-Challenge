/**
 * Problem understanding:
 * - We are given an input `obj`
 * - `obj` can be:
 *   - an object {}
 *   - or an array []
 * - We need to check whether it is empty or not
 * - Empty means:
 *   - Object → no keys
 *   - Array → no elements
 *
 *  process:
 * - Use Object.keys(obj) to get all keys
 * - For arrays, indices are treated as keys ("0", "1", ...)
 * - If length of keys is 0 → empty → return true
 * - Otherwise → not empty → return false
 *
 * Approach:
 * - Get number of keys using Object.keys(obj).length
 * - Compare it with 0
 *
 * Time Complexity: O(n)
 * - n = number of keys/elements
 *
 * Space Complexity: O(n)
 * - Object.keys creates an array of keys
 */
var isEmpty = function(obj) {
    if (Object.keys(obj).length === 0) {
        return true;   // no keys → empty
    } else {
        return false;  // has keys → not empty
    }
};

// Examples

// Example 1
console.log(isEmpty({ "x": 5, "y": 42 }));
// Output: false

// Example 2
console.log(isEmpty({}));
// Output: true

// Example 3
console.log(isEmpty([null, false, 0]));
// Output: false
