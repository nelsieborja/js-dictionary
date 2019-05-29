# JS Dictionary

My sort of JavaScript cheat in one place 😄

---

## 1. Module Pattern

> Or Module Systems in JavaScript. Where _"modules"_ refers to a small unit of independent, reusable code.

### Importance:

- Maintainability
- Namespacing
- Reusability

### Several ways to create:

- [AMD](https://github.com/nelsieborja/js-dictionary/tree/master/AMD) (Asynchronous Module Definition)

  - <ins>Browser-first</ins> approach
  - Loads modules <ins>asynchronously</ins>

  ```javascript
  define([], function() {
    /* ... */
  });
  ```

- [CommonJS](https://github.com/nelsieborja/js-dictionary/tree/master/CommonJS)

  - Used in Node.js
  - <ins>Server-first</ins> approach
  - Loads modules <ins>synchronously</ins>

  ```javascript
  // module.js
  module.exports = {
    /* ... */
  };

  // app.js
  require('./module');
  ```

- [ES6 Modules](https://github.com/nelsieborja/js-dictionary/tree/master/ES6%20Modules)

  - Compact and declarative syntax, also <ins>asynchronous</ins> module loading
  - **imports** are <ins>live read-only views</ins> of the **exports** _(with `CommonJS` **imports** are copies of **exports**, consequently not alive)_

  ```javascript
  // module.js
  export const HELLO_WORLD = 'Konnichiwa ES6';
  export default {
    /* ... */
  };

  // app.js
  import * as modules from './module';
  ```

- [IIFE](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE) (Immediately-Invoked Function Expression)

  - [Anonymous Closure](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE#anonymous-closure)
  - [Global Import](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE#global-import)
  - [Object Interface](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE#object-interface)
  - [Revealing Module Pattern](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE#revealing-module-pattern)

  ```javascript
  (function() {
    /* ... */
  })();
  ```

- [UMD](https://github.com/nelsieborja/js-dictionary/tree/master/UMD) (Universal Module Definition)
  - Supports both _`CommonJS`_ and _`AMD`_ features

---

## 2. Classes

### Prior simulation of classes

- [Object Literals](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_OBJECT_LITERALS.md)

  ```javascript
  var JSFramework = {
    bias: 'ReactJS'
  };
  ```

- [Constructor Functions](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_CONSTRUCTOR_FUNCTIONS.md)

  ```javascript
  function JSFramework() {
    this.bias = 'ReactJS';
  }

  // Instantiation
  var frontend = new JSFramework();
  ```

### The syntactic sugar over existing prototype-based inheritance

- [Classes](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_CLASSES.md)

  ```javascript
  // CLASS DECLARATION
  class JSFramework {
    constructor() {}
    /* ... */
  }

  // CLASS EXPRESSION
  const JSFramework = class {
    constructor() {}
    /* ... */
  };

  // Instantiation
  var frontend = new JSFramework();
  ```

---

## 3. Built-in Objects

- [Array](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_ARRAY.md)
- [Function](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_FUNCTION.md)
- [JSON](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_JSON.md)
- Object
- [Set](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_SET.md)

---

## 4. Defer vs Async

Proper usage of these features can potentially improve the efficiency of loading the script as well as the loading performance of the page.

The common practice would be to inject the script to the bottom of the page (before the closing `</body>` tag), specially when you need to support older browsers (do not support `async` and `defer`).

#### Both are boolean attributes and usage is similar:

```html
// Async
<script async src="script.js"></script>
// Defer
<script defer src="script.js"></script>
```

> Make sure to inject the script in the head, otherwise putting them in the bottom will make these attributes useless

### Async

Script is fetched asynchronously, once it's ready the HTML parsing is paused to execute the script, then it's resumed. Hence, **`aysnc` blocks the parsing of the page**.

### Defer

Scripts is fetched asynchronously, executed only after the HTML parsing is done. Hence, **`defer` does not block the parsing** and it's overall execution may even finishes well before, because it has been downloaded in parallel with the HTML parsing.

### Comparison

- `defer` is obviously the winning solution in terms of speed
- `defer` in the `head` triggers the faster `domInteractive` event
  > `domInteractive` event happens after the HTML is loaded, parsed and the DOM is built. CSS and images at this point are still to be parsed and loaded. Once this is done, the browser will emit the domComplete event, and then onLoad.
- `async` is executed in casual order, when they become available. While `defer` is executed in the order it appears in the page
- `async` works best with independent script

## 5. Cookie vs Session Storage vs Local Storage

---

## Some Key Points to Remember

- JavaScript is the <ins>third layer</ins> of the layer cake of standard web technologies (`HTML` & `CSS`)
- Its common use is to dynamically modify HTML and CSS
- JavaScript is <ins>case sensitive</ins>
- Ways to add JavaScript to a page:

  - Internal - added in the HTML markup via the `<script>` tag
  - External - script is an external file also added via the `<script>` tag where `src` contains the path to the file

---

## Cool Articles

- [JavaScript Clean Code - Best Practices](https://devinduct.com/blogpost/22/javascript-clean-code-best-practices)
- [ECMAScript Modules in Browsers](https://jakearchibald.com/2017/es-modules-in-browsers/)

## References

- [MDN Web Docs](https://developer.mozilla.org)
- [Node environment with _`Webpack`_ and _`Babel`_](https://dev.to/aurelkurtula/setting-up-a-minimal-node-environment-with-webpack-and-babel--1j04)
- [Function Declaration vs Function Expression](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions)
- [Defer and Async](https://flaviocopes.com/javascript-async-defer/)
