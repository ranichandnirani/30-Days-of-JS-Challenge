/**
 * Problem understanding:
 * - We are given a number `millis`
 * - It represents time in milliseconds
 * - We must return a promise that resolves after `millis` milliseconds
 *
 *  process:
 * - Create a new Promise
 * - Use `setTimeout` to delay execution
 * - Resolve the promise after `millis` milliseconds
 * - Use `async/await` to make the function clean and readable
 * 
 * Time Complexity:
 * - O(1) (depends only on the timer)
 *
 * Space Complexity:
 * - O(1)
 */

async function sleep(millis) {
    // Await a promise that resolves after `millis` milliseconds
    await new Promise((res) => {
        setTimeout(() => {
            res(); // Resolve after delay
        }, millis);
    });
}


//  Example 1 
let t1 = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t1); // Output: ~100
});

//  Example 2 
let t2 = Date.now();
sleep(200).then(() => {
    console.log(Date.now() - t2); // Output: ~200
});
