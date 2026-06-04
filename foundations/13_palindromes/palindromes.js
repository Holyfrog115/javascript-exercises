const palindromes = function (string) {
    stringLwr = string.toLowerCase().replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "").replaceAll("!", "");
    for (let i = 0; i < stringLwr.length / 2; i++) {
        if (stringLwr.at(i) != stringLwr.at(-i - 1)) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
