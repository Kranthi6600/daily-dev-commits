function reverseString(str) {
  return str.split('').reverse().join('');
}

const originalString = "hello world";
const reversedString = reverseString(originalString);

console.log("Reversed String:", reversedString);
