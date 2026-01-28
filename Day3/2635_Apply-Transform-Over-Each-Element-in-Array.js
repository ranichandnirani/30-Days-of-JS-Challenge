var map = function(arr, fn) {
    let newArr = [];
    arr.forEach((value, index) => {
        newArr.push(fn(value, index));
    });
    return newArr;
};
// Test case 1
console.log(
    map([1, 2, 3], (value, index) => value + index)
); 
// Expected output: [1, 3, 5]

// Test case 2
console.log(
    map([10, 20, 30], value => value * 2)
); 
// Expected output: [20, 40, 60]
