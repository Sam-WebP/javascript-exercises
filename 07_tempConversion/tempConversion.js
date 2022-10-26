const ftoc = function(f) {
let celsius
  if(f <= -1) {
  celsius = (f + -32) / 1.8
  return Math.round(celsius * 10) / 10
} else 
  celsius = (f - 32) / 1.8
  return Math.round(celsius * 10) / 10

};

const ctof = function(c) {

let fahrenheit = c * 1.8 + 32
return Math.round(fahrenheit * 10) / 10

};

ctof(0)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
