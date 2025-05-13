// Step 1: Simulating an asynchronous operation with a promise
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Step 2: Using .then() to handle promise resolution
delay(2000).then(() => console.log('Executed after 2 seconds using .then()'));

// Step 3: Using async/await to handle promises
async function asyncFunction() {
  await delay(2000);
  console.log('Executed after 2 seconds using async/await');
}

asyncFunction();
