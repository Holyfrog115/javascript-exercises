const fibonacci = function(fNum) {
    if (fNum < 0) return "OOPS";
    else if (fNum == 0) return 0;
    else if (fNum < 3) return 1;
    else {
        let num = 0;
        let previousNums = [1, 1];
        for (let i = 3; i <= fNum; i++) {
            num = previousNums[0] + previousNums[1];
            previousNums.shift();
            previousNums.push(num);
        }
        return num;
    }
};

// Do not edit below this line
module.exports = fibonacci;
