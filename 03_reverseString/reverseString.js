const reverseString = function(input) {
    let characters = input.split(""); //if input = 'hello', characters = ['h', 'e', 'l', 'l', 'o']
    let returnString = '';

    for (let i = characters.length - 1; i >= 0; i--) {
        returnString += characters[i];
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;

