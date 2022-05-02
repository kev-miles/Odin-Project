function pigLatin(string) {

    var words = string.split(" ");

    for(let i=words.length-1; i>=0; i--)
    {
        var word = (startsWithVowel(words[i]) ? words[i] + "ay" : findConsonants(words[i]) + "ay")
        words[i] = word;
    }

    return words.join(" ");
};

function startsWithVowel(string)
{
    var vowels = 'aeiou'.split('');
    return vowels.includes(string.charAt(0));
};

function findConsonants(string)
{
    var word = string;
    var suffix = "";
    var consonants = 'bcdfghjklmnpqrstvwxyz'.split('');

    for(let i=0; i<string.length; i++)
    {
        if(!consonants.includes(string.charAt(i)) && isNotSpecialCase(string, i))
            break;
            
        suffix += string.charAt(i);
        word = word.substring(1);
    }

    return word += suffix;
};
  
function isNotSpecialCase(string, index)
{
    if(index > 0)
        return (string.charAt(index-1) === "q" && string.charAt(index) === 'u' ? false : true);
    
    //esle
    return false;
}

// Do not edit below this line
module.exports = pigLatin;
