const numbers = [1,3,5,6,7,8,12];

const firstEven = numbers.find(num => num % 2 === 0); //find is used
const lastEven = numbers.findLast(num => num % 2 === 0); //findLast is used

console.log('First even number in the array is: ',firstEven); //output = 6
console.log('Last even number in the array is: ',lastEven); //output = 12
