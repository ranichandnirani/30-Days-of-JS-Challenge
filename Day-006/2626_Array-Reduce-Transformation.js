/**
 * Problem understanding:
 * - We are given an array `nums`
 * - A reducer function `fn(accumulator, currentValue)`
 * - An initial value `init`
 * - We must combine all elements into a single value using `fn`
 *
 *  process:
 * - Start with `init` as the accumulator
 * - Traverse the array one by one
 * - Update the accumulator by applying `fn`
 * - If the array is empty, directly return `init`
 *
 *  Time Complexity: O(n) — iterates through the array once
 *  Space Complexity: O(1) — constant extra space
 */

var reduce = function(nums, fn, init) {
    // Initialize accumulator with the initial value
    let val = init;

    // Edge case:
    // If the input array is empty, return init directly
    // (matches Example 3 behavior)
    if (nums.length === 0) {
        return init;
    }

    // Iterate over each element in the array
    // Apply the reducer function step by step
    nums.forEach((num) => {
        // Update accumulator using the reducer logic
        // Example 1: val + num
        // Example 2: val + num * num
        val = fn(val, num);
    });

    // Return the final accumulated value
    return val;
};



//  Example 1 
// nums = [1,2,3,4], init = 0
// 0 -> 1 -> 3 -> 6 -> 10
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0)); // Output: 10

// Example 2
// nums = [1,2,3,4], init = 100
// Each element is squared before being added.
// The reducer logic controls how values are combined.
// 100 -> 101 -> 105 -> 114 -> 130
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr * curr, 100)); // Output: 130

//Example 3 
// Empty array -> return init
console.log(reduce([], (acc, curr) => 0, 25)); // Output: 25
