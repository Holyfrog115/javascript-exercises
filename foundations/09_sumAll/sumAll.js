const sumAll = function(intA, intB) {
    let sum = 0;
    let start = 0;
    let end = 0;

    if (Number.isInteger(intA) && Number.isInteger(intB) && intA > 0 && intB > 0) {
        if (intA < intB) {
            start = intA;
            end = intB;
        }
        else {
            start = intB;
            end = intA;
        }
    }
    else {
        return "ERROR";
    }
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
