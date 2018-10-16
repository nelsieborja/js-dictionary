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
    * <ins>Browser-first</ins> approach
    * Loads modules <ins>asynchronously</ins>
    ```javascript
    define([], function() { /* ... */ })
    ```

  * [CommonJS](https://github.com/nelsieborja/js-dictionary/tree/master/CommonJS)
    * Used in Node.js
    * <ins>Server-first</ins> approach
    * Loads modules <ins>synchronously</ins>
    ```javascript
    // module.js
    module.exports = { /* ... */ }

    // app.js
    require('./module')
    ```

  * [ES6 Modules](https://github.com/nelsieborja/js-dictionary/tree/master/ES6%20Modules)

    * Compact and declarative syntax, also <ins>asynchronous</ins> module loading
    * __imports__ are <ins>live read-only views</ins> of the __exports__ _(with `CommonJS` __imports__ are copies of __exports__, consequently not alive)_

    ```javascript
    // module.js
    export const HELLO_WORLD = 'Konnichiwa ES6';
    export default { /* ... */ };

    // app.js
    import * as modules from './module';
    ```

  * [IIFE](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE) (Immediately-Invoked Function Expression)
    * [Anonymous Closure](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE#anonymous-closure)
    * [Global Import](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE#global-import)
    * [Object Interface](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE#object-interface)
    * [Revealing Module Pattern](https://github.com/nelsieborja/js-dictionary/tree/master/IIFE#revealing-module-pattern)
    ```javascript
    (function(){ /* ... */ }());
    ```

  * [UMD](https://github.com/nelsieborja/js-dictionary/tree/master/UMD) (Universal Module Definition)
    * Supports both _`CommonJS`_ and _`AMD`_ features

---

## 2. Classes

  ### Prior simulation of classes

  * [Object Literals](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_OBJECT_LITERALS.md)
    ```javascript
    var JSFramework = {
      bias: 'ReactJS'
    };
    ```

  * [Constructor Functions](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_CONSTRUCTOR_FUNCTIONS.md)
    ```javascript
    function JSFramework() {
      this.bias = 'ReactJS';
    };

    // Instantiation
    var frontend = new JSFramework();
    ```
  ### The syntactic sugar over existing prototype-based inheritance
  * [Classes](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_CLASSES.md)
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
    var frontend = new JSFramework();
    ```

---

## 3. Built-in Objects

  * [Array](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_ARRAY.md)
  * [Function](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_FUNCTION.md)
  * [JSON](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_JSON.md)
  * Object
  * [Set](https://github.com/nelsieborja/js-dictionary/blob/master/Built-in%20Objects/README_SET.md)


---

## 4. Cookie vs Session Storage vs Local Storage

---


## Some Key Points to Remember
  * JavaScript is the <ins>third layer</ins> of the layer cake of standard web technologies (`HTML` & `CSS`)
  * ~~It is executed by the browser's JavaScript engine after the HTML and CSS have been put together - to ensure that the structure and styles are already in place by the time the JavaScript starts to run~~
  * Its common use is to dynamically modify HTML and CSS
  * JavaScript is <ins>case sensitive</ins>
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

    Using both implies the scripts have to be loaded asynchronously and executed based on an order and after document parsing is completed. They are <ins>more important when the `<script>` element is not placed at the very end of the document</ins>



---

## References
  * [MDN Web Docs](https://developer.mozilla.org)
  * [Node environment with _`Webpack`_ and _`Babel`_](https://dev.to/aurelkurtula/setting-up-a-minimal-node-environment-with-webpack-and-babel--1j04)
  * [Function Declaration vs Function Expression](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions)