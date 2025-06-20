function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1 (new independent closure)
