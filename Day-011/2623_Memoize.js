/**
 * Problem understanding:
 * - We are given a function `fn`
 * - We must return a new function that memoizes `fn`
 * - Memoization means:
 *   - If the function is called with the same arguments again,
 *     return the cached result
 *   - Do NOT re-execute the original function
 * - Only new, unseen inputs should trigger a real function call
 *
 *  process:
 * - Create an object to store cached results
 * - Use the function arguments as a key
 * - On each call:
 *   - If result exists in cache → return it
 *   - Otherwise → compute result, store it, and return it
 * 
 * Time Complexity:
 * - First call for unique arguments: depends on fn
 * - Repeated calls: O(1)
 *
 * Space Complexity:
 * - O(n), where n is number of unique argument combinations
 */

function memoize(fn) {
    // Object to store cached results
    const cachedVal = {};
    
    return function (...args) {
        // Use arguments array as key (converted to string internally)
        const val = args;

        // If result already exists in cache
        if (val in cachedVal) {
            return cachedVal[val];
        } 
        // If result does not exist, compute and store it
        else {
            const res = fn(...args);
            cachedVal[val] = res;
            return res;
        }
    };
}


// Example 1 
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // call -> computes sum -> 4
console.log(memoizedSum(2, 2)); // call -> cached result -> 4
// getCallCount would be 1
console.log(memoizedSum(1, 2)); // call --> computes sum --> 3
// getCallCount would be 2

// Example 2 
const factorial = (n) => (n <= 1) ? 1 : n * factorial(n - 1);
const memoFactorial = memoize(factorial);

console.log(memoFactorial(2)); // call -> 2
console.log(memoFactorial(3)); // call -> 6
console.log(memoFactorial(2)); // cached -> 2
// getCallCount would be 2
console.log(memoFactorial(3)); // cached -> 6
// getCallCount would still be 2

// Example 3
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const memoFib = memoize(fib);

console.log(memoFib(5)); // call -> 8
// getCallCount would be 1
