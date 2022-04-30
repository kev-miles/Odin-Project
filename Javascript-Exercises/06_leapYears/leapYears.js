const leapYears = function(year) {

    if(yearIsValid(year))
    {
        if(isPosibleLeapYear(year))
            return validateLeapYear(year);
    }
    
    //else
    return false;
};

const yearIsValid = function(year){
    if(typeof year != typeof 1 || year < 0){
        return false
    }

    //else
    return true;
}

const isPosibleLeapYear = function(year){

    if(year % 4 === 0)
        return true;
        
    //else
    return false;
}

const validateLeapYear = function(year){
    if(year % 100 != 0)
        return true;
    else if(year % 400 === 0)
        return true;
    
    //else
    return false;
}

// Do not edit below this line
module.exports = leapYears;
