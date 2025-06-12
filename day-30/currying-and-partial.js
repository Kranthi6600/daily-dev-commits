// Day 30: Currying & Partial Application Challenges

// Challenge 1: Simple currying
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log("Challenge 1:", add(1)(2)(3)); // 6

// Challenge 2: Partial application with bind
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}
const sayHello = greet.bind(null, "Hello");
console.log("Challenge 2:", sayHello("Luffy")); // Hello, Luffy!

// Challenge 3: bind with this
const obj = {
  name: "Zoro",
  intro: function () {
    return `My name is ${this.name}`;
  },
};
const introFn = obj.intro;
const boundIntro = introFn.bind(obj);
console.log("Challenge 3:", boundIntro()); // My name is Zoro

// Challenge 4: Method borrowing with bind
const user = {
  name: "Luffy",
  greet: function (greeting) {
    return `${greeting}, I'm ${this.name}`;
  },
};
const anotherUser = { name: "Sanji" };
const borrowedGreet = user.greet.bind(anotherUser, "Yo");
console.log("Challenge 4:", borrowedGreet()); // Yo, I'm Sanji

// Challenge 5: General-purpose curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum);
console.log("Challenge 5.1:", curriedSum(1)(2)(3)); // 6
console.log("Challenge 5.2:", curriedSum(1, 2)(3)); // 6
console.log("Challenge 5.3:", curriedSum(1)(2, 3)); // 6

// Challenge 6: Closure + Logger Factory
function createLogger(level) {
  return function (msg) {
    return `[${level.toUpperCase()}] ${msg}`;
  };
}
const errorLogger = createLogger("error");
console.log("Challenge 6:", errorLogger("Something broke")); // [ERROR] Something broke
