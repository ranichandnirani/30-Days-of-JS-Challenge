/**
 * Problem understanding:
 * - We are extending the Array prototype with a method `groupBy`
 * - Input:
 *   - A callback function `fn`
 * - For each element in the array:
 *   - `fn(element)` returns a key
 * - Elements with the same key should be grouped together
 * - Final output should be an object where:
 *   - keys are returned by `fn`
 *   - values are arrays of grouped elements
 *
 *  process:
 * - Create an empty object to store groups
 * - Traverse the array element by element
 * - For each element:
 *   - Compute the grouping key using `fn`
 *   - If the key already exists, push the element
 *   - Otherwise, create a new array with that element
 *
 * Approach:
 * - Use a `for` loop to iterate over the array
 * - Use object key lookup to check existing groups
 *
 * Time Complexity: O(n)
 * - n = number of elements in the array
 *
 * Space Complexity: O(n)
 * - Extra space used to store grouped elements
 */
Array.prototype.groupBy = function(fn) {
    const res = {}; // object to store grouped values

    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]); // generate group key

        if (res[key]) {
            res[key].push(this[i]); // add to existing group
        } else {
            res[key] = [this[i]]; // create new group
        }
    }

    return res; // return grouped result
};

// Examples

// Example 1
console.log(
    [
        {"id":"1"},
        {"id":"1"},
        {"id":"2"}
    ].groupBy(item => item.id)
);
// Output:
// {
//   "1": [{"id":"1"}, {"id":"1"}],
//   "2": [{"id":"2"}]
// }

// Example 2
console.log(
    [
        [1, 2, 3],
        [1, 3, 5],
        [1, 5, 9]
    ].groupBy(list => String(list[0]))
);
// Output:
// {
//   "1": [[1,2,3], [1,3,5], [1,5,9]]
// }

// Example 3
console.log(
    [1,2,3,4,5,6,7,8,9,10].groupBy(n => String(n > 5))
);
// Output:
// {
//   "true": [6,7,8,9,10],
//   "false": [1,2,3,4,5]
// }
