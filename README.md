# JS Dictionary

My sort of JavaScript cheat in one place 😄

---

## 1. Module Pattern

> Or Module Systems in JavaScript. Where _"modules"_ refers to a small unit of independent, reusable code.

### Importance:

* Maintainability
* Namespacing
* Reusability

### Several ways to create:
* [AMD](https://github.com/nelsieborja/js-dictionary/tree/master/AMD) (Asynchronous Module Definition)
  * _Browser-first_ approach
  * Loads modules asynchronously
  ```javascript
  define([], function() { /* ... */ })
  ```

* [CommonJS](https://github.com/nelsieborja/js-dictionary/tree/master/CommonJS)
  * Used in Node.js
  * _Server-first_ approach
  * Loads modules synchronously
  ```javascript
  // module.js
  module.exports = { /* ... */ }

  // app.js
  require('./module')
  ```

* [ES6 Modules](https://github.com/nelsieborja/js-dictionary/tree/master/ES6%20Modules)

  * Compact and declarative syntax, also asynchronous module loading
  * _imports_ are _**live read-only views of the exports**_ (with `CommonJS` _imports_ are copies of _exports_, consequently not alive)

  ```javascript
  // module.js
  export const HELLO_WORLD = 'Konnichiwa ES6';
  export default { /* ... */ };

  // app.js
  import * as modules from './module';
  ```

* [IIFE](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE) (Immediately-Invoked Function Expression)
  * Anonymous Closure
  * Global Import
  * Object Interface
  * Revealing Module Pattern
  ```javascript
  (function(){ /* ... */ }());
  ```

* [UMD](https://github.com/nelsieborja/js-dictionary/tree/master/UMD) (Universal Module Definition)
  * Supports both `CommonJS` and `AMD` features

---

## 2. Classes

  * Prior simulation of classes
    * [Object Literals](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_OBJECT_LITERALS.md)
    ```javascript
    var JSFramework = { /* ... */ };
    ```

    * [Constructor Functions](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_CONSTRUCTOR_FUNCTIONS.md)
    ```javascript
    function JSFramework() { /* ... */ };

    // Instantiation
    var fan = new JSFramework();
    ```
  * [Classes](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_CLASSES.md) - Syntactic sugar over existing prototype-based inheritance
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
    }

    // Instantiation
    var fe = new JSFramework();
    ```

---

## 3. Built-in Objects

* [Array](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_ARRAY.md)
* [Function](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_FUNCTION.md)
* [JSON](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_JSON.md)
* Object


---

## 4. Cookie vs Session Storage vs Local Storage

---


## Some Key Points to Remember
* JavaScript is the **_third layer_** of the layer cake of standard web technologies (`HTML` & `CSS`)
* It is executed by the browser's JavaScript engine after the HTML and CSS have been put together - to ensure that the structure and styles are already in place by the time the JavaScript starts to run
* Its common use is to dynamically modify HTML and CSS
* JavaScript is **_case sensitive_**
* Ways to add JavaScript to a page:
  * Internal - added in the HTML markup via the `<script>` tag
  * External - script is an external file also added via the `<script>` tag where `src` contains the path to the file

    #### Bypassing Blocking Script problem:

    `async` _(Boolean)_
    > Script is downloaded in parallel with document parsing and gets executed _(this will pause the parsing!!!)_ as soon as it becomes ready after being fetched

    > Works best with independent script

    `defer` _(Boolean)_
    > Script is executed after document has been fully parsed, but before firing `DOMContentLoaded`. It is fetched as soon as possible but browsers with preloader will fetch it similar to a script placed at the end of the document

    > Also runs the scripts in the order they appear in the page

  > NOTES: Using both implies the scripts have to be loaded asynchronously and executed based on an order and after document parsing is completed. They are more important when the `<script>` element is not placed at the very end of the document



---

## References
* [MDN Web Docs](https://developer.mozilla.org)
* [Node environment with `Webpack` and `Babel`](https://dev.to/aurelkurtula/setting-up-a-minimal-node-environment-with-webpack-and-babel--1j04)
* [Function Declaration vs Function Expression](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions)