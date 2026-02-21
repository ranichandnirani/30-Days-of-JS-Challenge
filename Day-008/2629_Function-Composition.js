/**
 * Problem understanding:
 * - We are given an array of functions `functions`
 * - Each function takes a single argument and returns a value
 * - We must return a new function that applies all functions
 *   from right to left on an input `x`
 * - If the array is empty, return the input value unchanged
 *
 * Thought process:
 * - Return a new function that accepts input `x`
 * - Initialize result with `x`
 * - Traverse the functions array from right to left
 * - Apply each function to the current result
 * - Return the final computed value
 * 
 * Time Complexity:
 * - O(n), where n is the number of functions
 *
 * Space Complexity:
 * - O(1), no extra space used
 */


var compose = function(functions) {
    
    // Return a function that applies the composition
    return function(x) {
        // Start with the initial input value
        let res = x;

        // Apply functions from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            res = functions[i](res);
        }

        // Return the final result
        return res;
    };
};

// Example 1
// functions = [x => x + 1, x => x * x, x => 2 * x]
// Right to left

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4)); // Output: 65

// Example 2
// Right to Left 
// functions = [x => 10 * x, x => 10 * x, x => 10 * x]
console.log(compose([x => 10 * x, x => 10 * x, x => 10 * x])(1)); // Output: 1000

//  Example 3
// Empty functions array -> identity function
console.log(compose([])(42)); // Output: 42
