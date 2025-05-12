const user = {
  name: "John",
  age: 25
};

const userValidator = {
  set(target, property, value) {
    if (property === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (property === "name" && value.length < 3) {
      throw new Error("Name must be at least 3 characters");
    }
    target[property] = value;
    return true;
  }
};

const validatedUser = new Proxy(user, userValidator);

// Valid operations
validatedUser.name = "Kranthi";
validatedUser.age = 30;

// Invalid operations (will throw errors)
// validatedUser.name = "Al";    // Too short
// validatedUser.age = "Thirty"; // Not a number

console.log(validatedUser);
