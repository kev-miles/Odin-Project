const findTheOldest = function(people) {

    var oldestPersonAge = 0;
    var oldestPerson = {};

    for(let i=people.length-1; i>=0; i--)
    {
        var person = validatePersonRecords(people[i])
        var personAge = person["yearOfDeath"] - person["yearOfBirth"];

        if(personAge > oldestPersonAge)
        {
            oldestPersonAge = personAge;
            oldestPerson = people[i];
        }
    }

    return oldestPerson;
};

const validatePersonRecords = function(person) {

    var validatedPerson = person;

    if(!("yearOfDeath" in person))
    {
        validatedPerson["yearOfDeath"] = new Date().getFullYear();
    }

    return validatedPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
