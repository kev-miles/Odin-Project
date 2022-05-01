const add = function(...args) {
	
  var acc = 0;

  for(let i=args.length-1; i>=0; i--)
  {
      acc += args[i];
  }

  return acc;
};

const subtract = function(...args) {
	
  var acc = args[0];

  for(let i=1; i<args.length; i++)
  {
      acc -= args[i];
  }

  return acc;
};

const sum = function(array) {
  
  var acc = 0;

  for(let i=array.length-1; i>=0; i--)
  {
      acc = add(acc, array[i]);
  }

  return acc;
};

const multiply = function(numbers) {

  var acc = numbers[0];

  for(let i=1; i<numbers.length; i++)
  {
      acc *= numbers[i];
  }

  return acc;

};

const power = function(base, power) {
  
  var acc = 1;

  for(let i=0; i<power; i++)
  {
      acc *= base;
  }

  return acc;

};

const factorial = function(number) {
	
  if(number === 0)
    return 1;

  //else
  return number *= factorial(number-1);
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
