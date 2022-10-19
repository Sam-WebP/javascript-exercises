const reverseString = function(string) {
  let stringArray = [];
for (let i = string.length; i >= 0; i--) {
  stringArray.push(string.charAt(i))
}
let reversed = stringArray.join("")
return reversed
};


// Do not edit below this line
module.exports = reverseString;
