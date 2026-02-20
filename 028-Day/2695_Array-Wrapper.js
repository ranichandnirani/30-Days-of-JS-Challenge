/**
 * Problem understanding:
 * - We are given a class `ArrayWrapper`
 * - It wraps an array of numbers
 * - Two operations are required:
 *   1. Addition using `+`
 *   2. String conversion using `String(obj)`
 *
 *  process:
 * - JavaScript uses `valueOf()` during arithmetic operations
 * - JavaScript uses `toString()` during string conversion
 * - By overriding these methods, we control the behavior
 *
 * Approach:
 * - Store the array inside the class
 * - Implement `valueOf()` to return the sum of the array
 * - Implement `toString()` to return array in "[a,b,c]" format
 *
 * Time Complexity:
 * - valueOf(): O(n)
 * - toString(): O(n)
 *
 * Space Complexity:
 * - O(1) extra space
 */

class ArrayWrapper {
    nums = [];

    constructor(nums) {
        this.nums = nums;
    }

    // Used automatically when arithmetic operation is performed
    valueOf() {
        return this.nums.reduce((acc, curr) => acc + curr, 0);
    }

    // Used automatically when converting to string
    toString() {
        return `[${this.nums.join(",")}]`;
    }
}

// Examples

// Example 1
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); 
// Output: 10

// Example 2
const obj3 = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj3)); 
// Output: "[23,98,42,70]"

// Example 3
const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
console.log(obj4 + obj5); 
// Output: 0
