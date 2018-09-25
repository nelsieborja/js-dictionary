# JS Dictionary

My sort of JS cheat in one place 😄

---

## 1. Module Pattern

> Or Module Systems in JavaScript. Where _"modules"_ refers to a small unit of independent, reusable code.

### Importants:

- Maintainability
- Namespacing
- Reusability

### Several ways to create:

* [IIFE](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE) (Immediately-Invoked Function Expression)
  * Anonymous Closure
  * Global Import
  * Object Interface
  * Revealing Module Pattern

* [CommonJS](https://github.com/nelsieborja/js-dictionary/tree/master/CommonJS)
  - Used in Node.js
  - _Server-first_ approach
  - Loads modules synchronously
  ```javascript
  module.exports = { ... }
  ```
* [AMD](https://github.com/nelsieborja/js-dictionary/tree/master/AMD) (Asynchronous Module Definition)
  - _Browser-first_ approach
  - Loads modules asynchronously
  ```javascript
  define([], function() { ... })
  ```
* [UMD](https://github.com/nelsieborja/js-dictionary/tree/master/UMD) (Universal Module Definition)
  - Supports both `CommonJS` and `AMD` features
* [ES6 Modules](https://github.com/nelsieborja/js-dictionary/tree/master/ES6%20Modules)

  - Compact and declarative syntax, also asynchronous module loading
  - _imports_ are _**live read-only views of the exports**_ (with `CommonJS` _imports_ are copies of _exports_, consequently not alive)

  ```javascript
  // hello.js
  export const HELLO_WORLD = 'Konnichiwa Sekai!';

  // app.js
  import { HELLO_WORLD } from './hello';
  console.log(HELLO_WORLD); // 'Konnichiwa Sekai!'
  ```

---

## 2. Built-in Objects

- [Array](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_ARRAY.md)
- [Function](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_FUNCTION.md)
- JSON
- Object
