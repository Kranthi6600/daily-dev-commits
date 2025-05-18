function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(`Count incremented to: ${count}`);
    },
    getCount() {
      console.log(`Current count is: ${count}`);
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.getCount();  // Count: 2
