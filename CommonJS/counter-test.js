// This copy is now disconnected from the original module
const counter = require('./counter');

// Checking variable counter value
console.log(counter.counter); // 1

// Trying to increment the counter by 1
counter.increment();
// It didnt increment the counter
// Bec the counter variable here is a disconnected copy of the counter variable from the module
// Though, this will increment the counter in the module
console.log(counter.counter);

// Modifying the copied version manually
counter.counter = 100;
// Checking variable counter value again; it works!!
console.log(counter.counter); // 100
