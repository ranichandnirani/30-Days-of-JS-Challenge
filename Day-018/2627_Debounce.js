/**
 * Problem understanding:
 * - Debounce delays the execution of a function `fn` until after `t` milliseconds
 *   have passed since the last time the debounced function was called.
 * - If the debounced function is called again before `t` ms, the previous call is cancelled.
 *
 *  process:
 * - Keep a timerId to track the currently scheduled execution
 * - When the debounced function is called:
 *   - Clear the previous timer (if it exists)
 *   - Set a new timer to call `fn` after `t` milliseconds
 * - Use `...args` to forward arguments to `fn`
 */

var debounce = function(fn, t) {
    let timerId = undefined; // holds the current timeout ID

    return function(...args) {
        // Cancel previous timer if function was called within the delay
        clearTimeout(timerId);

        // Schedule a new execution after t milliseconds
        timerId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

//Example 1 
let start1 = Date.now();
function log1(...inputs) { 
    console.log([Date.now() - start1, inputs]);
}
const dlog1 = debounce(log1, 50);
setTimeout(() => dlog1(1), 50);  // call at 50ms
setTimeout(() => dlog1(2), 75);  // call at 75ms, cancels previous

// Output: [{"t": 125, inputs: [2]}]

// Example 2 
let start2 = Date.now();
function log2(...inputs) { 
    console.log([Date.now() - start2, inputs]);
}
const dlog2 = debounce(log2, 20);
setTimeout(() => dlog2(1), 50);  // call at 50ms
setTimeout(() => dlog2(2), 100); // call at 100ms

// Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]

// Example 3 
let start3 = Date.now();
function log3(...inputs) { 
    console.log([Date.now() - start3, inputs]);
}
const dlog3 = debounce(log3, 150);
setTimeout(() => dlog3(1,2), 50);  // call at 50ms
setTimeout(() => dlog3(3,4), 300); // call at 300ms
setTimeout(() => dlog3(5,6), 300); // call at 300ms, cancels previous

// Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5,6]}]
