
// LeetCode Problem: Create Hello World Function
// Difficulty: Easy
// Concept: Closures (Function returning another function)
// Problem Link: https://leetcode.com/problems/create-hello-world-function/

/*
  This function returns another function.
  The returned function ignores all input
  and always returns "Hello World".
*/

var createHelloWorld = function () {
    return function (...args) {
        // args = input values (not used in this problem)
        return "Hello World";
    };
};


// creating the function
const f = createHelloWorld();

// test inputs
console.log(f());              // Output: "Hello World"
console.log(f(1, 2, 3));       // Output: "Hello World"
console.log(f("abc", true));   // Output: "Hello World"
