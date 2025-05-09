const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = numbers
.map(num => num * 2)
.filter(num => num > 10)
.reduce((acc, curr) => acc + curr, 0);

console.log('Final Result: ', result); // output: 80
