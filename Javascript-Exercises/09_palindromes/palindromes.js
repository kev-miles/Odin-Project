const palindromes = function (string) {

    var input = removePunctuationAndSpaces(string.toLowerCase());
    var reversedString = reverseString(input);

    for(let i=0; i<input.length; i++)
    {
        if(input.charAt(i) != reversedString.charAt(i))
            return false;
    }

    return true;
};

const removePunctuationAndSpaces = function(string){

    var resultString = ""
    var punctuation = [",",".","?","!"," "];

    for(let i=0; i<string.length; i++)
    {
        if(punctuation.includes(string.charAt(i)))
            continue;

        resultString += string.charAt(i);
    }

    return resultString;
}

const reverseString = function(string)
{
    var resultString = "";

    for(let i=string.length-1; i>=0; i--)
    {
        resultString += string.charAt(i);
    }

    return resultString;
}

// Do not edit below this line
module.exports = palindromes;
