const fibonacci = function(number) {
	if(number < 1) {
        return "OOPS";
    } else {
    let fib = [1, 1, 2, 3]
	for (let i = 3; i <= number; i++) {
  	let nextNum = fib[i - 1] + fib[i];
    fib.push(nextNum);
    }
  return fib[number - 1];
  }
};











//create an array that start with (1, 1, 2, 3)
//make the loop
//create a loop that adds the array.slice(0,-1) and array.slice(0,-2)
//input that value into the array.push()


// Do not edit below this line
module.exports = fibonacci;
