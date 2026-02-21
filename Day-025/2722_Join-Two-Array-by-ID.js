/**
 * Problem understanding:
 * - We are given two arrays `arr1` and `arr2`
 * - Each array contains objects with a unique `id`
 * - Objects with the same `id` must be merged
 * - If the same key exists, values from `arr2` override `arr1`
 * - Final result must be sorted by `id` in ascending order
 *
 *  process:
 * - Direct nested loops would be inefficient
 * - A Map allows O(1) lookup by `id`
 * - We must avoid mutating original objects
 *
 * Approach:
 * - Create a Map with `id` as key
 * - Insert all objects from `arr1` into the map
 * - Iterate through `arr2`
 *   - If `id` exists, merge objects using `Object.assign`
 *   - Otherwise, insert new object
 * - Convert Map values to array and sort by `id`
 *
 * Time Complexity: O(n log n)
 * - Map operations are O(n)
 * - Sorting dominates the complexity
 *
 * Space Complexity: O(n)
 * - Extra space used by Map
 */
var join = function(arr1, arr2) {
    const map = new Map();

    // Insert objects from arr1
    for (const obj of arr1) {
        map.set(obj.id, { ...obj });
    }

    // Merge objects from arr2
    for (const obj of arr2) {
        const exist = map.get(obj.id);

        if (exist) {
            // Override values from arr1 with arr2
            Object.assign(exist, obj);
        } else {
            map.set(obj.id, { ...obj });
        }
    }

    // Convert to array and sort by id
    return [...map.values()].sort((a, b) => a.id - b.id);
};

//Examples

// Example 1
console.log(
  join(
    [{ id: 1, x: 1 }, { id: 2, x: 9 }],
    [{ id: 3, x: 5 }]
  )
);
// Output: [{id:1,x:1},{id:2,x:9},{id:3,x:5}]

// Example 2
console.log(
  join(
    [{ id: 1, x: 2, y: 3 }, { id: 2, x: 3, y: 6 }],
    [{ id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }]
  )
);
// Output:
// [{id:1,x:2,y:3},{id:2,x:10,y:20},{id:3,x:0,y:0}]

// Example 3
console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }]
  )
);
// Output:
// [{id:1,b:{c:84},v:[1,3],y:48}]
