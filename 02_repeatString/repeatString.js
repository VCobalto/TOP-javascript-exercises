const repeatString = function(str, times) {
    let repeatedStr = (times < 0) ? 'ERROR' : '';
    for (let i = 0; i < times; i++) {
        repeatedStr += str;
    };
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
