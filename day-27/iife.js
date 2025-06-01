(() =>{
  let secret = '5324';
  console.log('secret code is:', secret);
})();

// IIFE with named function
(function greet() {
  console.log("Hello from IIFE!");
})();

// IIFE with arrow function
(() => {
  let secret = "hidden";
  console.log("Running secret setup...");
  console.log("Secret:", secret);
})();

// IIFE that returns a value
const result = (function () {
  let x = 10;
  let y = 20;
  return x + y;
})();

console.log("Result from IIFE:", result);

