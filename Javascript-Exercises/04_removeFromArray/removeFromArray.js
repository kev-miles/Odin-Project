const removeFromArray = function(array, ...args) {

    for(let i=array.length-1; i>=0; i--)
    {
        for(let t=args.length-1; t>=0; t--)
        {
            if(args[t] === array[i])
                array.splice(i,1);   
        }
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
