function Animal(type) {
  this.type = type;
}

const obj = { type: 'Pet' };
const BoundAnimal = Animal.bind(obj, 'Wild');

const a = new BoundAnimal();

console.log(a);      // { type: 'Wild' }
console.log(obj);    // { type: 'Pet' } ✅ not changed
