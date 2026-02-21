/**
 * Problem understanding:
 * - We are extending the Array prototype
 * - Add a method called `last()`
 * - It should return:
 *   - the last element of the array if it exists
 *   - otherwise return -1 for an empty array
 *
 *  process:
 * - Check if the array has at least one element
 * - If length > 0 → return element at index length - 1
 * - If length === 0 → return -1
 *
 * Approach:
 * - Use `this.length` to check array size
 * - Access last element using `this[this.length - 1]`
 *
 * Time Complexity: O(1)
 * - Constant time access
 *
 * Space Complexity: O(1)
 * - No extra space used
 */
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};

// Examples

// Example 1
console.log([null, {}, 3].last());
// Output: 3

// Example 2
console.log([].last());
// Output: -1
