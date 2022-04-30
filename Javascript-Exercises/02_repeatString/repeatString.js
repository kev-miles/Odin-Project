const repeatString = function(string, number) {

    if(number < 0)
        return "ERROR";

    var acc = "";

    for(let i=number; i>0; i--)
    {
        acc += string;
    }

    return acc;
};

// Do not edit below this line
module.exports = repeatString;
