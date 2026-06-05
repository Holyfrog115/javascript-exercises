const findTheOldest = function(people) {
    oldestToYoungest = people.sort((a, b) => {
        let currentYear = new Date().getFullYear();
        aAge = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
        bAge = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;

        return bAge - aAge;
    })

    return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
