const leapYears = function(year) {
    const isLeap = (year % 4 !== 0) ? false :
    (year % 100 !== 0) ? true : 
    (year % 400 === 0) ? true : false;
    return isLeap;
};


// Do not edit below this line
module.exports = leapYears;
