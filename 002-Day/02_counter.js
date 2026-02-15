// createCounter using closure
var createCounter = function (n) {
    return function () {

        // Return current value, then increment it
        return n++;
    };
};

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for starting number
rl.question("Enter starting number: ", function (input) {
    const counter = createCounter(Number(input));

    // Calling counter function multiple times
    console.log(counter()); // 1st call -> start
    console.log(counter()); // 2nd call -> increamented
    console.log(counter()); // 3rd call -> increamented

    rl.close();
});
