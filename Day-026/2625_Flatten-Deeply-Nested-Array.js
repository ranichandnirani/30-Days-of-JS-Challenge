/**
 * Problem understanding:
 * - We are given an array `arr` which may contain nested arrays
 * - We are given a number `n` representing depth
 * - We must flatten the array up to depth `n`
 * - If `n === 0`, return the array as-is (no flattening)
 *
 *  process:
 * - Flattening naturally fits a recursive approach
 * - Each recursive call reduces the depth by 1
 * - Stop flattening when depth becomes 0
 *
 * Approach:
 * - If `n === 0`, return the original array
 * - Create a result array `output`
 * - Iterate through each element in `arr`
 *   - If element is an array and depth > 0:
 *     - Recursively flatten it with `n - 1`
 *     - Spread the result into `output`
 *   - Otherwise, push the element directly
 * - Return the flattened array
 *
 * Time Complexity: O(n)
 * - Each element is visited once
 *
 * Space Complexity: O(n)
 * - Extra space used for the output array
 * - Recursion stack depends on depth
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }

    const output = [];

    arr.forEach((ele) => {
        if (Array.isArray(ele)) {
            output.push(...flat(ele, n - 1));
        } else {
            output.push(ele);
        }
    });

    return output;
};

// Examples

// Example 1
console.log(
  flat(
    [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    0
  )
);
// Output:
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Example 2
console.log(
  flat(
    [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    1
  )
);
// Output:
// [1,2,3,4,5,6,7,8,[9,10,11],12,13,14,15]

// Example 3
console.log(
  flat(
    [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    2
  )
);
// Output:
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
