function deepFlatten(arr) {
  const result = [];

  (function flatten(input) {
    input.forEach(item => {
      if (Array.isArray(item)) {
        flatten(item); // recursive call
      } else {
        result.push(item);
      }
    });
  })(arr);

  return result;
}

// Test
const nestedArray = [1, [2, [3, [4, 5]], 6], 7];
console.log("Deep Flattened:", deepFlatten(nestedArray));
