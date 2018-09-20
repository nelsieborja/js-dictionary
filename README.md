# JS Dictionary

My sort of JS cheat in one place 😄

---

## 1. Module Pattern

> <font color="#4084a1">Or Module Systems in JavaScript. Where _"modules"_ refers to a small unit of independent, reusable code.</font>

### Importants:

- Maintainability
- Namespacing
- Reusability

### Several ways to create:

- **IFFE** (Immediately-Invoked Function Expression)

  > <b style="color: #663399">[Anonymous Closure]</b> <font color="#9D7CBF">typical `IFFE`</font>

  > <b style="color: #663399">[Global Import]</b> <font color="#9D7CBF">same as `Anonymous closure` but accepts globals as parameter</font>

  > <b style="color: #663399">[Object Interface]</b> <font color="#9D7CBF">self-contained object interface; freedom to define which variables/methods to expose and to keep private</font>

  > <b style="color: #663399">[Revealing Module Pattern]</b> <font color="#9D7CBF">same as `Object Interface` but it ensures all methods/variables are kept private until explicitly exposed</font>

* **CommonJS**
  - Used in Node.js
  - _Server-first_ approach
  - Loads modules synchronously
  ```
  module.exports = { ... }
  ```
* **AMD** (Asynchronous Module Definition)
  - _Browser-first_ approach
  - Loads modules asynchronously
  ```
  define([], function() { ... })
  ```
* **UMD** (Universal Module Definition)
  - Supports both `CommonJS` and `AMD` features
* **ES6 Modules**

  - Compact and declarative syntax, also asynchronous module loading
  - _imports_ are _**live read-only views of the exports**_ (with `CommonJS` _imports_ are copies of _exports_, consequently not alive)

  ```
  // hello.js
  export const HELLO_WORLD = 'Konnichiwa Sekai!';

  // app.js
  import { HELLO_WORLD } from './hello';
  console.log(HELLO_WORLD); // 'Konnichiwa Sekai!'
  ```

---

## 2. Built-in Objects

- Array
- Function
- JSON
- Object
