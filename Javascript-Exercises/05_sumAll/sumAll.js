const sumAll = function(number1, number2) {

    if(parametersAreValid(number1,number2))
    {

        var orderedParams = orderParameters(number1, number2);
        var start = orderedParams[0];
        var finish = orderedParams[1];

        var acc = 0;

        for(let i=start-1; i<finish; i++)
        {
            acc += (start+i);
        }

        return acc
    }   

    return "ERROR"
};

const parametersAreValid = function(...args) {

    for(let i=args.length-1; i>=0; i--)
    {
        if(args[i] < 0 || typeof args[i] != typeof 1){
            return false
        }
    }

    return true;
}

const orderParameters = function(...args){

    if(args[0] >= args[1])
    {
        var aux = args[0];
        args[0] = args[1];
        args[1] = aux;
    }

    return args;
}

// Do not edit below this line
module.exports = sumAll;
