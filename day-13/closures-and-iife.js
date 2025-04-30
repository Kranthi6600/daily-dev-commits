// Closure example
function outerFunction() {
  let counter = 0;
  
  return function innerFunction() {
    counter++;
    console.log(counter);
  };
}

const increment = outerFunction();
increment(); // Output: 1
increment(); // Output: 2

// IIFE example
(function() {
  console.log("This function runs immediately after being defined.");
})();
