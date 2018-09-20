// Importing counter module
import * as counter from './counter';

export const hello = () => {
  counter.decrement();
  console.log('[hello]', `Konnichiwa! Counter at ${counter.counter}`);
};
