/**
 * Problem understanding:
 * - We are given a function `fn`
 * - We must return a new function that allows `fn` to be called only once
 * - On the first call, the function should execute `fn` and return its result
 * - On every subsequent call, it should return `undefined`
 *
 * process:
 * - Use a boolean flag to track whether the function has already been called
 * - Initially, the flag is set to false
 * - When the returned function is called the first time:
 *   - Execute `fn` with the provided arguments
 *   - Set the flag to true
 * - For all later calls:
 *   - Do not execute `fn`
 *   - Return `undefined`
 * Time Complexity:
 * - O(1) per function call
 *
 * Space Complexity:
 * - O(1), uses a single flag variable
 */

var once = function(fn) {
    // Flag to track if the function has already been called
    let flag = false;
    
    return function(...args) {
        // If function has not been called yet
        if (flag === false) {
            flag = true;          // Mark as called
            return fn(...args);   // Execute and return result
        } else {
            // Subsequent calls return undefined
            return undefined;
        }
    };
};

// Example 
const fn = (a, b) => a + b;
const onceFn = once(fn);

console.log(onceFn(2, 3)); // Output: 5
console.log(onceFn(4, 5)); // Output: undefined
