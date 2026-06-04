const palindromes = function (string) {
    const alphanumerical = "qwertyuiopasdfghjklzxcvbnm1234567890";

    const cleanedString = string
                        .toLowerCase()
                        .split('')
                        .filter((character) => alphanumerical.includes(character))
                        .join('');
    
    const reversedString = cleanedString
                        .split('')
                        .reverse()
                        .join('');
    
    console.log(cleanedString);
    console.log(reversedString);

    if (cleanedString === reversedString) {
        return true;
    }
    else {
        return false;
    }
                        
};

// Do not edit below this line
module.exports = palindromes;
