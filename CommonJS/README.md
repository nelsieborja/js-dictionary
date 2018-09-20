# CommonJS

A `CommonJS` module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to require in their programs. **_If you’ve programmed in Node.js, you’ll be very familiar with this format_**.

With `CommonJS`, each JavaScript file stores modules in its own unique module context _(just like wrapping it in a closure)_.

Here's how to expose a module using `module.exports` object:

```
// helloWorld.js
const helloWorld = () => {
  return 'Hello World!';
};
module.exports = helloWorld;
```

To use _helloWorld_ module, import it using `require`

```
// index.js
const helloWorld = require('./helloWorld');
console.log(helloWorld());
```

Under the hood, `helloWorld.js` is wrapped by `Node.js` this way:

```
(function (exports, require, module, __filename, __dirname) {
  const helloWorld = () => {
    return 'Hello World!';
  };

  module.exports = helloWorld
})
```

This is why you can access the _global-like_ variables like `require` and `module`. This also means variables are scoped within the module rather than the global object.

One more thing, required module will be a disconnected copy, hence update of values will take place in the module but not in the copied version. To update the copy manually:

```
// counter.js
module.exports = {
  counter: 1
}

// index.js
const counter = require('./counter');
counter.counter = 100;
```

> **NOTE:** `CommonJS` takes a _server-first_ approach and synchronously loads modules.
