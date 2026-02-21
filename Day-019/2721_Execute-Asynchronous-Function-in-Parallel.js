/**
 * Problem understanding:
 * - Implement a Promise.all-like function
 * - Input: an array of functions that return promises
 * - Output: a single promise that:
 *   - Resolves when all promises resolve (with results in order)
 *   - Rejects immediately if any promise rejects
 *
 *  process:
 * - Keep an array `result` to store resolved values
 * - Keep a counter `count` of unresolved promises
 * - Loop over each function:
 *   - Call the function to get a promise
 *   - On resolve: store value in the correct index, decrement count
 *   - If count reaches 0 → resolve main promise with `result`
 *   - On reject: reject main promise immediately
 */
var promiseAll = function(functions) {
    return new Promise((res, rej) => {
        let result = [];
        let count = functions.length;

        // Edge case: empty array
        if (count === 0) return res(result);

        for (let i = 0; i < count; i++) {
            functions[i]().then((response) => {
                result[i] = response; // store in correct order
                count--;

                if (count === 0) {
                    res(result); // all resolved
                }
            }).catch((e) => {
                rej(e); // reject immediately if any fails
            });
        }
    });
};

// Example 1
let start1 = Date.now();
promiseAll([() => new Promise(resolve => setTimeout(() => resolve(5), 200))]).then(resolved => {
    console.log({
        t: Date.now() - start1,
        resolved
    });
});
//  Output: {"t": ~200, "resolved": [5]}

// Example 2 
let start2 = Date.now();
promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]).then(resolved => {
    console.log({
        t: Date.now() - start2,
        resolved
    });
}).catch(rejected => {
    console.log({
        t: Date.now() - start2,
        rejected
    });
});
//  Output: {"t": ~100, "rejected": "Error"}

// Example 3 
let start3 = Date.now();
promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]).then(resolved => {
    console.log({
        t: Date.now() - start3,
        resolved
    });
});
// Output: {"t": ~150, "resolved": [4, 10, 16]}
