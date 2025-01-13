//returns the nth fibonacci number, which is the sum of the (n-1)th and the (n-2)nd fibonacci numbers
const fibonacci = function(n) {
    //accept String inputs
    const num = Number(n);

    //edge cases: negative inputs or string inputs
    if (num < 0) {
        return "OOPS";
    }
    
    //base cases: n = 0 or n = 1
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
};


// Do not edit below this line
module.exports = fibonacci;
