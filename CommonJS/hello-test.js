const hello = require('./hello');

// Instantiating hello
const helloInstance1 = new hello();
// Checking the values for the first time
console.log(helloInstance1.hello(), helloInstance1.world()); // Hello World!

// Just adding gaps between logs
console.log('---');

// Updating the messages by not passing an argument - this will clear the messages
helloInstance1.updateMsgs();
console.log(helloInstance1.hello(), helloInstance1.world()); // empty

// Just adding gaps between logs
console.log('**********************');

// Another instantation of hello,
// to check if previous updates affected the original copy
const helloInstance2 = new hello();
// Checking the values
console.log(helloInstance2.hello(), helloInstance2.world()); // Hello World!

// Just adding gaps between logs
console.log('---');

// Updating the messages with new values
// But instead of using the "updateMsgs" method lets update it manually by accessing the variables
helloInstance2.helloMsg = 'Konnichiwa';
helloInstance2.worldMsg = 'Sekai!';
// Checking the values again
console.log(helloInstance2.hello(), helloInstance2.world()); // Konnichiwa Sekai!

console.log('\n');
