/**
 * Problem understanding:
 * - We are given two promises: `promise1` and `promise2`
 * - Each promise resolves to a numeric value
 * - We must return a new promise that resolves to the sum
 *   of the resolved values of both promises
 *
 *  process:
 * - Use `async` function to handle promises cleanly
 * - Await the resolution of both promises
 * - Store their resolved values
 * - Return the sum of those values
 * 
 * Time Complexity:
 * - O(1) (depends on promise resolution time, not computation)
 *
 * Space Complexity:
 * - O(1)
 */

var addTwoPromises = async function(promise1, promise2) {
    // Wait for the first promise to resolve
    const val1 = await promise1;

    // Wait for the second promise to resolve
    const val2 = await promise2;

    // Return the sum of resolved values
    return val1 + val2;
};


//  Example 1 
addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(2), 20)),
    new Promise(resolve => setTimeout(() => resolve(5), 60))
).then(result => {
    console.log(result); // Output: 7
});

//  Example 2 
addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(10), 50)),
    new Promise(resolve => setTimeout(() => resolve(-12), 30))
).then(result => {
    console.log(result); // Output: -2
});