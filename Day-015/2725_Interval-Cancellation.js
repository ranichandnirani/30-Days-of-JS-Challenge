/**
 * Problem understanding:
 * - Execute fn immediately (time = 0)
 * - Then execute every `t` milliseconds
 * - Return a cancel function
 *
 *  process:
 * - First call is manual → fn(...args)
 * - Repeated calls → setInterval
 * - Cancellation → clearInterval
 *
 * Approach:
 * - Call fn once
 * - Start interval
 * - Return cancel function
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var cancellable = function(fn, args, t) {

    // First execution (immediate)
    fn(...args);

    // Repeated execution
    var intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Cancel function
    var cancelFn = () => {
        clearInterval(intervalId);
    };

    return cancelFn;
};

// Example

// Example
const cancelFn = cancellable(x => console.log(x * 2), [4], 35);

// Cancel after 190ms
setTimeout(cancelFn, 190);
