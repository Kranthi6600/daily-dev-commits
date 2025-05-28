function greet(language) {
    console.log(`${language}: Hello, I am ${this.name}`);
}

const user = { name: 'Luffy' };

// ✅ Native call
greet.call(user, 'Japanese');

// 🔧 Our Custom Call Polyfill
Function.prototype.myCall = function (context, ...args) {
    // 1. If context is null or undefined, use globalThis
    context = context || globalThis;

    // 2. Attach the function to context
    context._tempFn = this;

    // 3. Call it with the provided arguments
    const result = context._tempFn(...args);

    // 4. Clean up
    delete context._tempFn;

    // 5. Return result
    return result;
};

// ✅ Custom myCall
greet.myCall(user, 'English');
