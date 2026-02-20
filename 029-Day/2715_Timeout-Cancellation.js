/**
 * Problem understanding:
 * - We are given a function `fn`
 * - We are given arguments `args`
 * - We delay execution by `t` milliseconds
 * - We must return a function that can cancel execution
 *
 *  process:
 * - `setTimeout` schedules execution
 * - `clearTimeout` cancels scheduled execution
 * - Store the timeout reference
 *
 * Approach:
 * - Schedule fn(...args)
 * - Return a cancel function
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var cancellable = function(fn, args, t) {

    // Schedule function execution
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    // Cancel function
    const cancelFn = () => {
        clearTimeout(timeoutId);
    };

    return cancelFn;
};

// Examples

// Example 1
const cancelFn1 = cancellable(x => console.log(x * 5), [2], 20);
setTimeout(cancelFn1, 50);  
// Runs → cancellation happens after execution

// Example 2
const cancelFn2 = cancellable(x => console.log(x ** 2), [2], 100);
setTimeout(cancelFn2, 50);  
// Cancelled → function never runs

// Example 3
const cancelFn3 = cancellable((x1, x2) => console.log(x1 * x2), [2, 4], 30);
setTimeout(cancelFn3, 100); 
// Runs → cancellation too late
