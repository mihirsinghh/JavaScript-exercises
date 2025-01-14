const findTheOldest = function(peopleArr) {
    let oldestPersonAge = 0;
    let eachPersonAge = 0;

    for (const eachPerson of peopleArr) {
        if (eachPerson.yearOfDeath == null) {
            const now = new Date();
            eachPersonAge = now.getFullYear() - eachPerson.yearOfBirth;
        } else {
            eachPersonAge = eachPerson.yearOfDeath - eachPerson.yearOfBirth;
        }

        if (eachPersonAge > oldestPersonAge) {
            oldestPersonAge = eachPersonAge;
        }
    }

    for (const eachPerson of peopleArr) {
        if (eachPerson.yearOfDeath == null) {
            const now = new Date();
            let personAge = now.getFullYear() - eachPerson.yearOfBirth;
            if (personAge === oldestPersonAge) {
                return eachPerson;
            }
        } else {
            let personAge = eachPerson.yearOfDeath - eachPerson.yearOfBirth;
            if (personAge === oldestPersonAge) {
                return eachPerson;
            }
        }
    }
};


// Do not edit below this line
module.exports = findTheOldest;
