const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  if(array.length >= 1) {
    return array.reduce((total, prop) => total + prop);
  } else {
    return 0;
  }
};


const multiply = function(array) {
  return array.reduce((total, prop) => total * prop);
}; 

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
  let total = []
  if(num == 0) {
    return 1;
  } else {
	for (let i = (num); i >= 0.5; i--) {
    total.unshift(i);
  }
  let factor = total.reduce(function(acc, cur) {
    return acc * cur;
  });
  return factor;
  }
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
