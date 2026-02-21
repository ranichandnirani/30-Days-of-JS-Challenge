/**
 * Function: createCounter2
 * Creates a counter using closures.
 * Provides three operations:
 *  - increment(): increases value by 1
 *  - decrement(): decreases value by 1
 *  - reset(): resets value to initial input
 *
 
 */

var createCounter = function (init) {
    let currNum = init; // stores current counter value

    return {
        // Increments counter by 1
        increment: () => {
            return ++currNum;
        },

        // Decrements counter by 1
        decrement: () => {
            return --currNum;
        },

        // Resets counter to initial value
        reset: () => {
            currNum = init;
            return currNum;
        }
    };
};

// -------------------- USER INPUT

const readline = require("readline");

// Create input-output interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take initial value from user
rl.question("Enter initial value for counter: ", function (input) {
    const counter = createCounter(Number(input));

    // Demonstrating counter operations
    console.log("Increment:", counter.increment()); // init + 1
    console.log("Reset:", counter.reset());         // init
    console.log("Decrement:", counter.decrement()); // init - 1

    // Close input stream
    rl.close();
});
