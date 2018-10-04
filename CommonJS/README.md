# CommonJS

A _`CommonJS`_ module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to require in their programs. <ins>If you’ve programmed in Node.js, you’ll be very familiar with this format</ins>.

With _`CommonJS`_, each JavaScript file stores modules in its own unique module context _(just like wrapping it in a closure)_.

Here's how to expose a module using `module.exports` object:

```javascript
// helloWorld.js
const helloWorld = () => {
  return 'Hello World!';
};
module.exports = helloWorld;
```

To use _`helloWorld`_ module, import it using `require`

```javascript
// index.js
const helloWorld = require('./helloWorld');
console.log(helloWorld());
```

Under the hood, _`helloWorld.js`_ is wrapped by _`Node.js`_ this way:

```javascript
(function (exports, require, module, __filename, __dirname) {
  const helloWorld = () => {
    return 'Hello World!';
  };

  module.exports = helloWorld
})
```

This is why you can access the _`global-like`_ variables like `require` and `module`. This also means variables are scoped within the module rather than the global object.

One more thing, required module will be a disconnected copy, hence update of values will take place in the module but not in the copied version. To update the copy manually:

```javascript
// counter.js
module.exports = {
  counter: 1
}

// index.js
const counter = require('./counter');
counter.counter = 100;
```

> _`CommonJS`_ takes a <ins>server-first</ins> approach and synchronously loads modules.
