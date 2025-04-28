// Array of objects representing products
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 750 },
];

// Use map to extract product names
const productNames = products.map(product => product.name);

// Use reduce to calculate the total price of all products
const totalPrice = products.reduce((acc, current) => acc + current.price, 0);

console.log("Product Names:", productNames);
console.log("Total Price:", totalPrice);
