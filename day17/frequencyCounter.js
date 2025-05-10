const data = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Count frequency of each item using reduce
const frequency = data.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log("Original Data:", data);
console.log("Frequency Count:", frequency);
