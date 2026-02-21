var expect = function(val) {
    return {
        // check if the given value is strictly equal to val

        toBe : (value) => {
            if(value === val) {
                return true;
            } else {
                throw "Not Equal";
            }
        },
        // Checks if the given value is NOT strictly equal to val

        notToBe : (value) => {
            if(value !== val) {
                return true;
            } else {
                throw "Equal";
            }
        }
    }
};
// text

try {
    console.log(expect(5).toBe(5));      // true
} catch (error) {
    console.log(error);
}