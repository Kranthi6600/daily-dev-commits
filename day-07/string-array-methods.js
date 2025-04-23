// Day 7 - String Methods and Array Operations

const words = ['hello', 'world', 'javascript', 'is', 'awesome'];

// Map through the array and convert each string to uppercase
const uppercasedWords = words.map(word => word.toUpperCase());

// Join the array elements into a single string
const sentence = uppercasedWords.join(' ');

console.log(sentence); // Output: "HELLO WORLD JAVASCRIPT IS AWESOME"
