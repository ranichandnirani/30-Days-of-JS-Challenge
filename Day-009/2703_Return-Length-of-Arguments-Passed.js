/**
 * Problem understanding:
 * - We are given a function that can receive any number of arguments
 * - The arguments can be of any type (number, object, null, string, etc.)
 * - We must return how many arguments were passed to the function
 *
 * process:
 * - Use the rest parameter `...args` to collect all arguments into an array
 * - The length of this array represents the number of arguments passed
 * - Return `args.length` as the final answer
 * 
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var argumentsLength = function(...args) {
    // The rest parameter stores all arguments in an array
    // Return the number of elements in that array

    return args.length;
};

// Example 1
// One argument is passed

console.log(argumentsLength(5)); // Output: 1

// Example 2
// Three arguments of different types are passed

console.log(argumentsLength({}, null, "3")); // Output: 3
