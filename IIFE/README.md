# IIFE (Immediately-Invoked Function Expression)

## Few fundamental concepts around JS functions

* ### Function Definition
  > Comes in various names - _function definition, function declaration, function statement_

  ```javascript {.line-numbers}
  function jsFramework() {
    alert('ReactJS');
  }
  jsFramework(); // alerts 'ReactJS'
  ```

* ### Function Expression
  > Functions on the _`right-hand`_ side of the assignment operator (`=`)

  ```javascript {.line-numbers}
  // Assigning a function to variable jsFramework
  const jsFramework = function() {
    alert('ReactJS');
  };
  jsFramework(); // alerts 'ReactJS'
  ```

  * #### Anonymous Function Expression
    > They are anonymous because they don't have name following the `function` keyword. The above code is an _`Anonymous Function Expression`_

  * #### Named Function Expression
    > One of the explained usage of these _`Named Function Expression`_ is with recursion

    ```javascript {.line-numbers}
    const jsFramework = function jsFramework_() {
      alert('ReactJS');
      jsFramework_(); // pops endless alert
    };
    jsFramework(); // alerts 'ReactJS'
    ```

> Functions are most likely any other values in JS, they can be on the _`right-hand`_ side of an assignment operator or can be passed as argument to other function

A widely discussed topic in JavaScript is the difference between _`Function Definition`_ and _`Function Expression`_. Apart from the syntax, function declarations during the first pass reading _(JS file is run in a `2-pass read`)_ are moved _(`hoisted`)_ to the top of their scope. Though _`Variable Declarations`_ _(function expressions are considered as such)_ get _`hoisted`_ but their _`Assignment Expressions`_ don't, unlike _`Function Definitions`_ where its entire function body is lifted with it. Checkout [here](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/) for a more detailed explanation.

#### Function Definition simulation:
```javascript {.line-numbers}
// Original code
function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}
alert(foo()); // alerts '8'


// Simulated processing sequence; "entire definition" is moved to the top
function foo() {
  // define bar once
  function bar() {
    return 3;
  }
  // redefine it
  function bar() {
    return 8;
  }
  // return its invocation
  return bar();
}
alert(foo()); // alerts '8'
```

#### Function Expression simulation:
```javascript {.line-numbers}
// Original code
function foo() {
  var bar = function() {
    return 3;
  };
  return bar();
  var bar = function() {
    return 8;
  };
}
alert(foo());


// Simulated processing sequence; "bar" gets declared upfront but with "undefined" value
function foo() {
  // a declaration for each function expression
  var bar = undefined;
  var bar = undefined;
  // first Function Expression is executed
  bar = function() {
    return 3;
  };
  // Function created by first Function Expression is invoked
  return bar();
  // second Function Expression unreachable
}
alert(foo()); // alerts '3'
```

---

## IIFE in a few stylistic variations
```javascript {.line-numbers}
!function() {
  alert('Hello from IIFE!');
}();
// alerts 'Hello from IIFE!' once
```

### Understanding the syntax:

1. As _`Function Definition`_ always starts with the `function` keyword, in order to convert this into an expression, **_"!"_** is prefixed in front of the `function` keyword. This basically enforces JavaScript to treat whatever that’s coming after "`!`" as an expression.
2. On line 3, the function is invoked immediately.

The above stylistic variation can be used by replacing "`!`" with "`+, -, ~`" as well. Basically any unary operator can be used. Even `void` keyword can be used:

```javascript {.line-numbers}
void function() {
  alert('Hello from IIFE!');
}();
// alerts 'Hello from IIFE!'
```

> The above patterns are useful when not interested in the return value from IIFE


### Classical IIFE style:
```javascript {.line-numbers}
// Variation 1 - entire expression is wrapped inside a parenthesis/()
(function() {
  alert('Hello from IIFE!');
}());
// Variation 2 - invoke expression is outside the wrapping parenthesis
- (function() {
  alert('Hello from IIFE!');
})();
```

---

## IIFEs and private variables
Anything declared inside the IIFE are scoped, hence they cannot be accessed outside.

```javascript {.line-numbers}
(function pets() {
  // Private variables
  let dogs;
  let cats;

  init();

  // Private function
  function init() {
    // The private variables can also be accessed inside the function
    dogs = 2;
    cats = 1;
  }
}());
```

> To avoid polluting the global scope, might be a good practice to wrap in an IIFE those definitions that aren't being used globally. Also a safe way to shield the code from accidental changes.

---

## IIFE with a return value
```javascript {.line-numbers}
const result = (function() {
    return 'From IIFE';
}());

alert(result); // alerts 'From IIFE'
```
The return value from IIFE is assigned to the **_result_** variable.

---

## IIFEs with parameters
```javascript {.line-numbers}
(function IIFE(msg, times, document) {
    for (let i = 1; i <= times; i++) {
        console.log(msg);
    }
}('IIFE', 5, document)); // logs 'IIFE' 5 times
```

### Some advantages of passing Globals to IIFE:
1. JavaScript always does scope lookups from the current function's scope and keeps searching in higher scopes until it finds an identifier. When `document` is passed in on line 5, that's the only time it does scope lookup beyond local scope for the `document`.
2. Also, minifiers can safely minify the parameter names declared in a function. Which means direct references to `document` within the function will not get minified as they are outside the scope.

---

## IIFE Module Patterns
* ### Anonymous Closure
  > Classical IIFE

  ```javascript {.line-numbers}
  // Global variable
  const global = 'global';

  (function (){
    // Private variable
    const nums = [1, 2, 3, 4, 5, 6];

    // Private function
    const getEvenNums = () => nums.filter(num => num % 2 === 0);

    console.log(getEvenNums());

    // Can access global variable
    console.log(global);
  }());
  // [2, 4, 6]
  // 'global'
  ```

* ### Global Import
  > Similar to _`Anonymous Closure`_ but accepts globals as parameter

  ```javascript {.line-numbers}
  (function(namespace) {
    const privateFunction = () => {
      console.log('I\'m private!!!');
    };

    namespace.getEven = (collection) => {
      return collection.filter(item => item % 2 === 0);
    };

    namespace.getOdd = (collection) => {
      return collection.filter(item => item % 2 !== 0);
    };

  }(namespace));
  ```

* ### Object Interface
  > Self-contained object interface; freedom to define which variables/methods to expose and to keep private

  ```javascript {.line-numbers}
  const numIdentifier = (function() {
    // Private variable
    const nums = [1, 2, 3, 4, 5, 6];

    return {
      getEven(collection = nums) {
        console.log(collection.filter(item => item % 2 === 0));
      },
      getOdd(collection = nums) {
        console.log(collection.filter(item => item % 2 !== 0));
      }
    };
  }());

  numIdentifier.getEven(); // [2, 4, 6]
  numIdentifier.getOdd(); // [1, 3, 5]
  ```

* ### Revealing Module Pattern
  > Similar to _`Object Interface`_ but it ensures all methods/variables are kept private until explicitly exposed

  ```javascript {.line-numbers}
  const numIdentifier = (function() {
    // Private variable
    const nums = [1, 2, 3, 4, 5, 6];
    // Private functions
    const privateFunction = () => {
      console.log('I\'m private!!!');
    };
    const getEven = (collection = nums) => {
      console.log(collection.filter(item => item % 2 === 0));
    };
    const getOdd = (collection = nums) => {
      console.log(collection.filter(item => item % 2 !== 0));
    };

    return {
      getEven,
      getOdd
    };
  }());

  numIdentifier.getEven(); // [2, 4, 6]
  numIdentifier.getOdd(); // [1, 3, 5]
  numIdentifier.privateFunction(); // Uncaught TypeError
  ```
