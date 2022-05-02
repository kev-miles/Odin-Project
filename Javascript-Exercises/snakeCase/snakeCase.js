const snakeCase = function(string) {

    words = getWords(string);

    for(let i= words.length-1; i>=0; i--)
    {
        var word = words[i];
        words[i] = word.toLowerCase();
    }

    return validateString(words.join("_"));
};

function validateString(string) {
   return string.replaceAll("__", "_");;
}

function getWords(string) {
    var words = string.split(" ");
    return (words.length > 1 ? ignorePunctuation(words) : handleJoinedWords(words))
}

function ignorePunctuation(words) {
    for(let i=0; i<words.length; i++)
    {
        words[i] = words[i].replace(/[^\w\s\']|_/g, "");
    }

    return words;
}

function handleJoinedWords(joinedWord) {
    var words = joinedWord[0].split(/[^\w\s\']|_/);
    return (words.length>1 ? replacePunctuation(words) : splitOnCapitalLetter(joinedWord));
}

function replacePunctuation(words) {

    for(let i=0; i<words.length; i++)
    {
        words[i] = words[i].replace(/[^\w\s\']|_/g, "_");
    }

    return words;
}

function splitOnCapitalLetter(joinedWord) {
    return joinedWord[0].split(/(?=[A-Z])/)
}

// Do not edit below this line
module.exports = snakeCase;