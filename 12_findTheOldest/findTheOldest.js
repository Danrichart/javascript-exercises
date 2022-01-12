const findTheOldest = function(people) {
    let currOldest = 0

    people.forEach(person => {
        if(!person.yearOfDeath ){
            person.yearOfDeath = new Date().getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth
        if(age > currOldest){
            currOldest = age;
            oldest = person;
        }
    })
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
