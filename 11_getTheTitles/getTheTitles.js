const getTheTitles = function(arr) {
    let titleArr = [];
    for (const obj of arr) {
        titleArr.push(obj.title);
    }
    return titleArr;
};


// Do not edit below this line
module.exports = getTheTitles;
