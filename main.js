const isEven = num => num % 2 === 0;
const increaseNum = 1;
const num = 6;
const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;

console.log(result);
