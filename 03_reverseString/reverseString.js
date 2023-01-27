// //first solution:
// const reverseString = function(str) {
//     let reversedStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     };
//     return reversedStr;
// };

// using string and array methods:
const reverseString = function(str) {
    return str.split('').reverse().join('');
};
    


// Do not edit below this line

module.exports = reverseString;
