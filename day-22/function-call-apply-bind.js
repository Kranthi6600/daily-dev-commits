const car = {
  brand: "Tesla",
  getBrand(speed, type) {
    console.log(`${this.brand} is going ${speed}km/h as a ${type}`);
  },
};

const bike = { brand: "Yamaha" };

// 1. Use call
car.getBrand.call(bike, 120, "racing bike");

// 2. Use apply
car.getBrand.apply(bike, [80, "sports bike"]);

// 3. Use bind and invoke after 2 seconds
const boundFunc = car.getBrand.bind(bike, 100, "cruiser");
setTimeout(boundFunc, 2000);
