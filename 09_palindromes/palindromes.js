const palindromes = function (str) {
    let cleanStr = '';

    for (let char of str) {
        if (
            (char >= 'a') && (char <= 'z') ||
            (char >= 'A') && (char <= 'Z') ||
            (char >= '0') && (char <= '9') 
        ) {
            cleanStr += char.toLowerCase();
        }
    }

    //split the string into an array of individual characters, reverse the array, then recombine
    //the array elements into a single, continuous string of characters
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};


// Do not edit below this line
module.exports = palindromes;
