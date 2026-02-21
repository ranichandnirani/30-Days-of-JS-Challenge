/**
 * Problem understanding:
 * - We are given an async function `fn` and a time limit `t` (in milliseconds)
 * - We must return a new function that:
 *   - Executes `fn` with provided arguments
 *   - Rejects with `"Time Limit Exceeded"` if `fn` does not finish within `t` ms
 * - If `fn` resolves or rejects before `t`, return that result/error
 *
 *  process:
 * - Call the original function `fn(...args)` to get its promise
 * - Create another promise that rejects after `t` milliseconds
 * - Use `Promise.race()` to race both promises
 * - Whichever settles first (resolve/reject) will be the final result
 * 
 *  Time Complexity:
 * - O(1) (depends on promise resolution, not input size)
 *
 * Space Complexity:
 * - O(1)
 */

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // Call the original function (returns a promise)
        const onSuccess = fn(...args);

        // Create a timeout promise that rejects after t milliseconds
        const result = new Promise((res, rej) => {
            setTimeout(() => {
                rej("Time Limit Exceeded");
            }, t);
        });

        // Race the function promise and timeout promise
        return Promise.race([onSuccess, result]);
    };
};

// Example 1 
const fn1 = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
};

const limited1 = timeLimit(fn1, 50);
limited1(5).catch(err => console.log(err)); 
// Output: "Time Limit Exceeded"

//  Example 2 
const limited2 = timeLimit(fn1, 150);
limited2(5).then(res => console.log(res)); 
// Output: 25

//  Example 3 
const fn3 = async (a, b) => {
    await new Promise(res => setTimeout(res, 120));
    return a + b;
};

const limited3 = timeLimit(fn3, 150);
limited3(5, 10).then(res => console.log(res)); 
// Output: 15

//  Example 4 
const fn4 = async () => {
    throw "Error";
};

const limited4 = timeLimit(fn4, 1000);
limited4().catch(err => console.log(err)); 
// Output: "Error"
