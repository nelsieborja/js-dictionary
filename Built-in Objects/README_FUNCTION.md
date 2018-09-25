# Function

> **`Function` constructor** creates a new `Function` object. It works similar to `eval`

```javascript
var sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6)); // 8
```

---
## Syntax
```javascript
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

`arg1, arg2, ... argN`
> Argument names of the function, they must be a string that corresponds to a valid JavaScript identifier (`"a", "b"`) or a list of such strings separated with a comma (`"a, b"`)

`functionBody`
> A string containing the JavaScript statements comprising the function definition.


### Omitting the `new` operator:
> Invoking the `Function` constructor as a function has the same effect as invoking it as a constructor. That's 4 bytes smaller! Running the same above code but without the `new` operator would give the same output:

```javascript
var sum = Function('a', 'b', 'return a + b');
console.log(sum(2, 6)); // 8
```

### Difference between `Function` constructor and function declaration:
```javascript
var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this "x" refers global "x"
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // this "x" refers local "x" above
    }
    return f;
}

var f1 = createFunction1();
var f2 = createFunction2();
console.log(f1()); // 10
console.log(f2()); // 20
```

> Since `Function` constructor don't create closure to their creation contexts and are created in the global scope, they will only be able to access their own local variables and global ones. Unlike function declaration where they can also access those variables within the scope in which they were created.

---

## Methods

- ### apply()
  > calls a function with a given `this` value and `arguments` provided as an array

  ```javascript
  console.log(Math.max.apply(null, [5, 6, 2, 3, 7])); // 7
  ```

  * #### Syntax
    ```javascript
    function.apply(thisArg, [argsArray])
    ```

    `thisArg`
    > Optional. Usually `this` (context) or `null` (eg: used with built-ins)

    `argsArray`
    > Optional. Array object

    :: _Return value is the result of calling the function with the specified `this` value and arguments_

  * #### Examples

    Using `apply` to append an array to another:
    ```javascript
    var goodFeels = ['LOVE', 'JOY'];
    var badFeels = ['HATE', 'SAD'];

    // Using "push" directly will push the array as single element
    console.log(goodFeels.push(badFeels));                      // 3 (length of the array)
    console.log(goodFeels);                                     // (3) ["LOVE", "JOY", ["HATE", "SAD"]]

    // Using "concat" will create and return a new array
    console.log(goodFeels.concat(badFeels));                    // (4) ["LOVE", "JOY", "HATE", "SAD"]
    // Original array is kept
    console.log(goodFeels);                                     // (2) ["LOVE", "JOY"]

    // "apply" to the rescue!
    console.log(goodFeels.push.apply(goodFeels, badFeels));     // 4 (length of the array)
    console.log(goodFeels);                                     // (4) ["LOVE", "JOY", "HATE", "SAD"]
    ```

    Using `apply` with built-in function:
    ```javascript
    var numbers = [5, 6, 2, 3, 7];
    console.log(Math.max.apply(null, numbers));                  // 7

    // This about equal to Math.max(numbers[0], ...)
    console.log(Math.max(5, 6, 2, 3, 7));                        // 7
    ```

    Using `apply` to chain constructors:
    ```javascript
    // Defining a custom "Function" method
    Function.prototype.customMethod = function () {
      // Chain it with the callee which is a constructor function
      const args =  Array.prototype.slice.apply(arguments);
      this.apply(null, [ args ]);
    }

    // Creating a construtor function
    function ConstructorFunction(args) {
      console.log(args)
    }

    ConstructorFunction.customMethod(1, 2, 3);                    // (3) [1, 2, 3]
    ```

- ### bind()
  > creates a new **bound function (BF)** that wraps the original function object. Calling a **BF** generally results in the execution of its **wrapped function**

  * #### Syntax
    ```javascript
    function.bind(thisArg[, arg1[, arg2[, ...]]])
    ```

    `thisArg`
    > Function context - usually it's the `this` parameter

    `arg1, arg2, ...`
    > Arguments to be prepended - usually as initial arguments

    :: _Return value is a copy of the given function with the specified `this` value and initial arguments_

  * #### Examples

    Creating a `bound` function:
    ```javascript
    this.feels = 'LOVE'; // "this" refers to global "window" object

    var feelsModule = {
      feels: 'HATE',
      getFeels: function() {
        return this.feels;
      }
    };

    console.log(feelsModule.getFeels());                          // HATE

    // Extracting a method from the object for later call
    var myFeels = feelsModule.getFeels;
    // The function gets invoked at the global scope
    console.log(myFeels());                                       // LOVE

    // Create a new function with "this" bound to "feelsModule"
    var boundMyFeels = myFeels.bind(feelsModule);
    console.log(boundMyFeels());                                  // HATE
    ```

    Partially applied functions:
    ```javascript
    function feelsList() {
      return Array.prototype.slice.call(arguments);
    }

    var leadingLoveFeelsList = feelsList.bind(null, 'LOVE');
    console.log(leadingLoveFeelsList());                          // ["LOVE"]
    console.log(leadingLoveFeelsList('PEACE', 'JOY'));            // ["LOVE", "PEACE", "JOY"]
    ```

- ### call()
  > calls a function with a given `this` value and arguments provided individually

  * #### Syntax
    ```javascript
    function.call(thisArg, arg1, arg2, ...)
    ```

    `thisArg`
    > Optional. Usually `this` (context) or `null` (eg: used with built-ins)

    `argsArray`
    > Optional. Arguments for the function

    :: _Return value would be similar to `apply()`_

  * #### Examples

    Using `call` to change constractors for an object:
    ```javascript
    // Creating a constructor function with 2 parameters
    function Feels(feel, level) {
      // Initialising the properties
      this.feel = feel;
      this.level = level + '%';
    }

    // Creating another constructor function
    function GoodFeels(feel, level) {
      // Invoking Feels function and initializing the properties into its context
      Feels.call(this, feel, level);
      // Initializing additional property
      this.type = 'GOOD';
    }

    // Creating yet another constructor function
    function BadFeels(feel, level) {
      // Invoking Feels function and initializing the properties into its context
      Feels.call(this, feel, level);
      // Initializing extra property
      this.type = 'BAD';
    }

    console.log(new GoodFeels('LOVE', 100));  // GoodFeels {feel: "LOVE", level: "100%", type: "GOOD"}
    console.log(new BadFeels('SAD', 50));     // BadFeels {feel: "SAD", level: "50%", type: "BAD"}
    ```

    Using `call` with IIFE:
    ```javascript
    var feels = [
      { feel: 'LOVE', level: 100 },
      { feel: 'JOY', level: 90 },
      { feel: 'SAD', level: 10 }
    ];

    // Traversing through the "feels" array
    feels.forEach((feel, i) => {
      // IIFE using "call" to invoke it
      (function(i) {
        //  Adding "print" function to every object in the array
        this.print = () => console.log(`#${i} xx Feeling ${this.feel} at ${this.level}% level`);
        // Printing the object elements
        this.print();

      // Passing 2 arguments into the call method:
      // [feel] as the "this" argument, which is the current object in the iteration
      // [i] as the argument for the IIFE, which is the current index in the iteration
      }).call(feel, i);
    });

    // Output: #0 xx Feeling LOVE at 100% level
    // Output: #1 xx Feeling JOY at 90% level
    // Output: #2 xx Feeling SAD at 10% level
    ```

    Using `call` to specify the context for `this` of a function:
    ```javascript
    function feels() {
      console.log(`I feel ${this.feel} towards ${this.whom}`);
    }

    var obj = {
      feel: 'unsure',
      whom: 'JavaScript'
    };
    // The value for "this" inside the function will be bound to "obj"
    feels.call(obj);

    // Output: I feel unsure towards JavaScript
    ```

    Using `call` without specifying the first argument:
    ```javascript
    var feel = 'unsure';

    function feels() {
      // The value of "this" is bound to the global object
      console.log(`I feel ${this.feel} towards JavaScript`);
    }
    feels.call();

    // Output: I feel unsure towards JavaScript
    ```
    > This will not work in _strict mode_ as the value of `this` will be `undefined`


> `apply()` and `call()` syntax is almost identical, the fundamental difference is that `call()` accepts an **argument list** while `apply()` accepts a **single array of arguments**

---

## Properties

- ### length
  > returns the number of arguments expected by the function
  ```javascript
  (function() {}).length          // 0
  (function(a, b, c) {}).length   // 3
  ```

- ### name
  > returns the name of the function
  ```javascript
  var aaa = function() {};
  aaa.name;                        // aaa
  var bbb = function bbb_() {};
  bbb.name;                        // bbb_
  function ccc() {}
  ccc.name;                        // ccc
  ```

- ### Function.prototype
  > represents the `Function` prototype object
  ```javascript
  // Using `Function.prototype` to define custom `Function` method "feels"
  Function.prototype.feels = function() {
    console.log('Here have some feels!!!');
  }

  function numb() {}
  // Calling custom method
  numb.feels();                     // Here have some feels!!!
  ```