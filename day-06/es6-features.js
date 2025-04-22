// Day 6 - ES6 Features (Arrow Funtions and Destructuring)

// Destructuring an object
cosnt person = {
  name : 'x',
  age : 23
}

// Arrow function that uses destructuring
const greet = ({name}) => `hello, ${name}`;
console.log(greet(person)); // "hello, x"
