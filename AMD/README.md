# AMD

Stands for **_Asynchronous Module Definition_**, will load modules asynchronously.

Loading modules using `AMD` looks something like this:

```javascript
define(['module1', 'module2'], function(module1, module2) {
  console.log(module1.hello());
});
```

`define` function takes as its first argument an array of each of the module’s dependencies. These dependencies are loaded in the background (in a non-blocking manner), and once loaded define calls the callback function it was given.

Second argument is a callback function, with the dependencies that were loaded as arguments, allowing the function to use these dependecies. The dependencies themselves must also be defined using the `define` keyword.

```javascript
define([], function() {
  return {
    hello: function() {
      console.log('hello');
    },
    goodbye: function() {
      console.log('goodbye');
    }
  };
});
```

> **NOTE:** Unlike `CommonJS`, AMD takes a _browser-first_ approach alongside asynchronous behaviour to get the job done.

Aside from asynchonousity, another benefit of `AMD` is that the modules can be objects, functions, constructors, strings, JSON and many other types, while `CommonJS` only supports objects as modules.

`AMD` isn't compatible with IO, filesystem, and other server-oriented features available via `CommonJS`, and the function wrapping syntax is a bit verbose.
