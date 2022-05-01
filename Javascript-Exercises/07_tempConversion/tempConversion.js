const ftoc = function(temperature) {
  return roundNumber((temperature - 32) * (5/9));
};

const ctof = function(temperature) {
  return roundNumber(temperature * 9/5 + 32);
};


const roundNumber = function(number){
  return Math.round(number * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
