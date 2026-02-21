/**
 * Problem understanding:
 * - We are given a `Calculator` class
 * - It starts with an initial value
 * - Supports chained operations:
 *   add, subtract, multiply, divide, power
 * - Final result is returned using `getResult()`
 *
 *  process:
 * - Method chaining requires each method to return `this`
 * - The calculator maintains a running result in `output`
 * - Division by zero must throw an error
 *
 * Approach:
 * - Store the current result in `this.output`
 * - Update `output` in each operation
 * - Return `this` after every operation to allow chaining
 * - Throw an error if division by zero is attempted
 *
 * Time Complexity:
 * - Each operation: O(1)
 *
 * Space Complexity:
 * - O(1)
 */

class Calculator {
    output = 0;

    
    constructor(value) {
        this.output = value;
    }

    
    add(value) {
        this.output += value;
        return this;
    }

    
    subtract(value) {
        this.output -= value;
        return this;
    }

    
    multiply(value) {
        this.output *= value;
        return this;
    }

    
    divide(value) {
        if (value === 0) {
            throw "Division by zero is not allowed";
        }
        this.output /= value;
        return this;
    }

    
    power(value) {
        this.output **= value;
        return this;
    }

    
    getResult() {
        return this.output;
    }
}

// Examples

// Example 1
console.log(
    new Calculator(10).add(5).subtract(7).getResult()
);
// Output: 8

// Example 2
console.log(
    new Calculator(2).multiply(5).power(2).getResult()
);
// Output: 100

// Example 3
try {
    console.log(
        new Calculator(20).divide(0).getResult()
    );
} catch (e) {
    console.log(e);
}
// Output: "Division by zero is not allowed"
