/**
 * Problem understanding:
 * - We are given an object or array `obj`
 * - We must remove all falsy values:
 *   false, 0, null, undefined, "", NaN
 * - The structure (arrays / objects) must be preserved
 * - The operation must work recursively
 *
 *  process:
 * - If a value is falsy, it should be removed
 * - If the value is a primitive (not an object), return it directly
 * - Arrays and objects need recursive cleanup
 *
 * Approach:
 * - If the value is falsy, return undefined
 * - If the value is not an object, return it
 * - If the value is an array:
 *   - Recursively clean each element
 *   - Remove undefined values
 * - If the value is an object:
 *   - Recursively clean each key
 *   - Only keep keys with valid values
 *
 * Time Complexity: O(n)
 * - Each element is visited once
 *
 * Space Complexity: O(n)
 * - New object/array is created
 * - Recursion stack depends on nesting depth
 */
var compactObject = function(obj) {
    // Remove falsy values
    if (!Boolean(obj)) {
        return undefined;
    }

    // Return primitive values directly
    if (typeof obj !== "object") {
        return obj;
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        return obj
            .map(item => compactObject(item))
            .filter(item => item !== undefined);
    }

    // Handle objects
    const output = {};

    for (const key in obj) {
        const value = compactObject(obj[key]);

        if (value !== undefined) {
            output[key] = value;
        }
    }

    return output;
};

// Examples

// Example 1
console.log(compactObject([null, 0, false, 1]));
// Output: [1]

// Example 2
console.log(compactObject({ a: null, b: [false, 1] }));
// Output: { b: [1] }

// Example 3
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
// Output: [5, [], [16]]
