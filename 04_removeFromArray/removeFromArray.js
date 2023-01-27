const removeFromArray = function(givenArray, ...elementsToRemove) {
    return givenArray.filter(arrayElement => !elementsToRemove.includes(arrayElement));
};

// Do not edit below this line
module.exports = removeFromArray;
