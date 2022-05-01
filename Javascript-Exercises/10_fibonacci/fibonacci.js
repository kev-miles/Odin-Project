const fibonacci = function(input) {

    var number = (typeof input === typeof "" ? Number(input) : input);

    if(numberIsValid(number))
    {
        return calculateResult(number);
    }

    return "OOPS";
};

const calculateResult = function(number) {

    if(number === 0 )
        return 0;
    else if(number === 1)
        return 1;

    return (calculateResult(number-1)+calculateResult(number-2));
};

const numberIsValid = function(number){

    return (number > 0 ? true : false);
};

// Do not edit below this line
module.exports = fibonacci;
