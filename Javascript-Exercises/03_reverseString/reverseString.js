const reverseString = function(string) {

    var strResult = ""

    for(let i=string.length; i>0; i--)
    {
        strResult += string.charAt(i-1);
    }

    return strResult;
};

// Do not edit below this line
module.exports = reverseString;
