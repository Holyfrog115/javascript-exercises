const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((acc, number) => acc + number, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, number) => acc * number, 1);
};

const power = function(num, pow) {
  let result = 1;
	for (let i = 0; i < pow; i++) {
    result *= num;
  }
  
  return result;
};

const factorial = function() {
	
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
