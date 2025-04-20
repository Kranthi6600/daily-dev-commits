// Day 4 - Array Methods (map and filter)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evenNumbers); // [2, 4]
