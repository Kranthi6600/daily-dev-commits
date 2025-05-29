Function.prototype.myApply = function(context, args) {
  context = context || globalThis;      // fallback to global object
  context._temp = this;                  // temporarily assign function to context
  
  let result;
  if (!args) {                          // if args is null or undefined
    result = context._temp();           // call without args
  } else {
    result = context._temp(...args);    // spread args array
  }
  
  delete context._temp;                  // clean up
  return result;                        // return function result
};

function introduce(lang1, lang2) {
  console.log(`Hi, I am ${this.name} and I speak ${lang1} and ${lang2}.`);
}

const person = { name: "Luffy" };

introduce.myApply(person, ["Japanese", "English"]);
