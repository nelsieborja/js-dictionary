// Importing "counter" module
import * as counter from './counter';
// Importing specific method from "hello" module
import { hello } from './hello';

// Checking counter value for the first time
console.log('[app]', counter.counter); // 1

// Trying to increment the counter value by 1
counter.increment();

// It keeps the live value as expected
console.log('[app]', counter.counter); // 2

// Checking counter value via "hello" module
// Value is decremented by 1
hello(); // 1

// Checking the value again
console.log('[app]', counter.counter); // 1
