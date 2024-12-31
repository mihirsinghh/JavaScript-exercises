const repeatString = function(string, num) {
    let returnVal = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            returnVal += string;
        }
        return returnVal;
    }
};

// Do not edit below this line
module.exports = repeatString;
