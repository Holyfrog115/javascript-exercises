const removeFromArray = function(array, ...removeElements) {
    // let result = [];

    // array.forEach((item) => {
    //     if (!removeElements.includes(item)) {
    //         result.push(item);
    //     }
    // })

    // return result;

    return array.filter((item) => !removeElements.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
