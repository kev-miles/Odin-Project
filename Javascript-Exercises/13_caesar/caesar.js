const caesar = function(text, shift) {

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var result = "";

    for(let i=0; i<text.length; i++)
    {
        var char = text.charAt(i);

        if(notPunctuationOrSpace(char))
        {
            var index = getCharIndex(alphabet.indexOf(char.toLowerCase()), shift, alphabet.length-1);
            char = (isUpperCase(char) ? alphabet[index].toUpperCase() : alphabet[index]);
        }
        
        result += char;
    }
    
    return result;
};

const notPunctuationOrSpace = function(char){

    var punctuation = ',.?! '.split('');

    return !punctuation.includes(char);
};

const isUpperCase = function(char)
{
    return (char != char.toLowerCase() ? true : false);
};

const getCharIndex = function(index, shift, extent) {

    var validatedShift = validateShift(shift, extent);
    var charPosition = index + validatedShift;

    if(charPosition < 0) 
    {
        return charPosition = (extent + (index + validatedShift))+1;
    }
    else if(charPosition > extent)
    {
        return charPosition = ((index + validatedShift) - extent)-1;
    }

    return charPosition;
};

const validateShift = function(shift, extent)
{
    var aux = Math.trunc(shift / extent);
    return (shift > extent ? (shift - extent * aux) - aux : shift);
};

// Do not edit below this line
module.exports = caesar;
