# Classes

> The `class` construct is used to define prototype-based classes with a clean, nice-looking syntax

---

## The class syntax
  * ### Class Declaration
    ```Javascript
    class JSFramework {
      constructor(bias = 'ReactJS') {
        this.bias = bias;
      }
    }
    ```

  * ### Class Expression
    ```Javascript
    // Unnamed class expression
    const JSFramework = class {
      constructor(bias = 'ReactJS') {
        this.bias = bias;
      }
    }
    console.log(JSFramework.name);                                     // JSFramework

    // Named class expression
    const JSFrameworkNamed = class JSFramework_ {
      constructor(bias = 'ReactJS') {
        this.bias = bias;
        console.log(JSFramework_.name);
      }
    }
    console.log(JSFrameworkNamed.name);                                // JSFramework_
    new JSFramework_();                                                // JSFramework_
    ```

    Just like _`functions`_, _`classes`_ can be defined inside another expression, passed around, returned etc.


## Digging into the class:
  ```Javascript
  class JSFramework {
    constructor(bias = 'ReactJS') {
      this.bias = bias;
    }

    setBias(newBias = this.bias) {
      this.bias = newBias;
    }
  }

  // Checking the `prototype` properties
  console.log(JSFramework.prototype);
  // {
  //   constructor: class JSFramework
  //   setBias: ƒ setBias()
  //   __proto__: Object
  // }
  ```

  As expected, it has the exact same [built-in properties](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_CONSTRUCTOR_FUNCTIONS.md#prototype-to-the-rescue) as _`Constructor Functions`_ has, as well as the overall composition:

  1. Declares a variable that references the function name `constructor`
      ```Javascript
      // Checking if "JSFramework" is the `constructor` function
      console.log(JSFramework === JSFramework.prototype.constructor);  // Output: true
      ```
  2. Puts methods listed in the definition into `User.prototype`
      ```Javascript
      // Checking the methods in its prototype
      console.log(Object.getOwnPropertyNames(JSFramework.prototype));
      //  Output: (2) ["constructor", "setBias"]
      ```


  ### Few things to know about Classes:
  * Similar to _`Constructor Functions`_, it cannot be invoked without `new`:
    ```Javascript
    class JSFramework {
      constructor() {}
    }
    console.log(typeof JSFramework);                                   // function
    JSFramework();                                                     // Uncaught TypeError
    ```

  * Class methods are non-enumerable:
    ```Javascript
    class JSFramework {
      constructor(bias = 'ReactJS') {
        this.bias = bias;
      }

      setBias(newBias = this.bias) {
        this.bias = newBias;
      }
    }
    const fe = new JSFramework();
    console.log(fe);                                                   // {bias: "ReactJS"}
    ```

  * Classes have a default _`constructor()`_ method
    ```Javascript
    class JSFramework {}

    // `constructor(){}` is added automatically into the definition!!
    console.log(JSFramework.prototype);
    // {
    //   constructor: class JSFramework
    //   __proto__: Object
    // }
    ```

  * _`ClassBody`_ is always executed in "strict mode" ~ `'use strict';`

  * Custom `getters/setters`:
    ```Javascript
    class JSFramework {
      constructor(bias = '') {
        this.bias = bias;
      }

      get bias() {
        return this._bias;
      }

      set bias(value) {
        if (value.length < 1) {
          alert('Provide your Framework please...');
          return;
        }

        this._bias = value;
      }

      get biasWrecker() {
        return 'ViewJS';
      }
    }

    console.log(new JSFramework('ReactJS').bias);                      // "ReactJS"
    console.log(new JSFramework('ReactJS').biasWrecker);               // "ViewJS"
    ```

  * Classes can only have methods, unlike _`Object Literals`_ which allows `propert:value` assignment

    If there's a need to put a _non-function_ value into the prototype, you have to alter `prototype` manually:
    ```Javascript
    class JSFramework {}
    JSFramework.prototype.bias = 'ReactJS';

    // Accessing `prototype` property "bias"
    console.log(new JSFramework().bias);                               // "ReactJS"
    ```

  * <ins>Instance properties</ins> must be defined inside of _`class`_ methods:
    ```Javascript
    class JSFramework {
      constructor(bias, biasWrecker) {
        // Instance properties
        this.bias = bias;
        this.biasWrecker = biasWrecker;
      }
    }
    ```

    While <ins>static class-side properties</ins> and <ins>prototype data properties</ins> _(as mentioned above)_ must be defined outside of _`ClassBody`_.

    * Static class-side property __(as of ES6)__
      ```Javascript
      JSFramework.staticBias = 'EmberJS';
      ```
      _It be accessed similar to a [Static method](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_CLASSES.md#static-methods):_

      ```Javascript
      console.log(JSFramework.staticBias);                             // EmberJS
      ```

    * Prototype data property
      ```Javascript
      JSFramework.prototype.prototypeBias = 'AngularJS';
      ```

      _Instantiation is required in order to use the property:_
      ```Javascript
      var fe = new JSFramework();
      console.log(fe.prototypeBias);                                   // AngularJS
      ```

  * Boxing with prototype and static methods

    Indirect access to a static/prototype method of _`Classes`_ will return `this` as `undefined`:

    ```Javascript
    class JSFramework {
      classFunc() {
        return this;
      }
      static staticFunc() {
        return this;
      }
    }

    const obj = new JSFramework();
    console.log(obj.classFunc());                                      // JSFramework {}
    const classFunc = obj.classFunc;
    console.log(classFunc());                                          // undefined

    console.log(JSFramework.staticFunc());                             // class JSFramework
    const staticFunc = JSFramework.staticFunc;
    console.log(staticFunc());                                         // undefined
    ```

    While with _`Constructor Functions`_ it will return the _**global scope**_:
    ```Javascript
    function JSFramework() {}
    JSFramework.prototype.classFunc = function() {
      return this;
    };
    JSFramework.staticFunc = function() {
      return this;
    };

    const obj = new JSFramework();
    console.log(obj.classFunc());                                      // JSFramework {}
    const classFunc = obj.classFunc;
    console.log(classFunc());                                          // Window {}

    console.log(JSFramework.staticFunc());                             // ƒ JSFramework() {}
    const staticFunc = JSFramework.staticFunc;
    console.log(staticFunc());                                         // Window {}
    ```


  ## Static Methods in Class
  > Methods assigned to the class function, not to its `prototype`. The `static` keyword must be appended before the method name:

  ```Javascript
  class JSFramework {
    static biasRating(value) {
      switch (value.toLowerCase()) {
        case 'reactjs':
          return 'Ultimate Bias';
        default:
          return 'Bias Wrecker';
      }
    }
  }
  ```

  * The above code does the same as in function property assignment:
    ```Javascript
    function JSFramework() {}
    JSFramework.biasRating = function() {
      // ...
    };
    ```
  * They are called without instantiating their class and **cannot** be called through a class instance:
    ```Javascript
    // Accessing static method `biasRating()`
    console.log(JSFramework.biasRating('ReactJS'));                    // Ultimate Bias
    // Accessing through an instance
    new JSFramework('AngularJS').biasRating();                         // Uncaught TypeError
    ```

  * The value of `this` inside the method is their class constructor itself
    ```Javascript
    class JSFramework {
      static checkConstructor() {
        console.log(this);
      }
    }
    console.log(JSFramework.checkConstructor());                       // class JSFramework {}
    ```

  * Often used to implement functions that belong to the class, not to any particular object of it

    ```Javascript
    class JSFramework {
      constructor(bias) {
        const { count, label } = JSFramework.biasRating(bias);

        this.bias = bias;
        this.count = count;
        this.label = label;
      }

      static biasRating(value) {
        switch (value.toLowerCase()) {
          case 'reactjs':
            return { count: 1000, label: 'Ultimate Bias' };
          case 'angularjs':
            return { count: 999, label: 'Bias Wrecker' };
          default:
            return { count: 100, label: 'Bias' };
        }
      }

      static biasSort(bias1, bias2) {
        return bias2.count - bias1.count
      }
    }

    const jsframeworks = [
      new JSFramework('AngularJS'),
      new JSFramework('ViewJS'),
      new JSFramework('ReactJS')
    ];

    // Sorting frameworks based on bias count
    console.log(jsframeworks.sort(JSFramework.biasSort));
    // [
    //   {bias: "ReactJS", count: 1000, label: "Ultimate Bias"},
    //   {bias: "AngularJS", count: 999, label: "Bias Wrecker"},
    //   {bias: "ViewJS", count: 100, label: "Bias"},
    // ]
    ```

  ## Inheritance

  ### Class gives simple inheritance with the keyword `extends`:

  * Creating a child class of another _Class Declarations/Expression_

    ```Javascript
    class JSFramework {
      constructor({ bias, say }) {
        this.bias = bias;
        this.say = say;
      }
      comment() {
        console.log(`${this.bias} is ${this.say}`);
      }
    }
    class ReactJS extends JSFramework {
      constructor(say) {
        // Call the super class constructor and pass in the params
        super({ bias: 'ReactJS', say });
      }
      comment() {
        console.log(`${this.bias} is hella ${this.say}`);
      }
    }

    const fe = new ReactJS('cool!!');
    console.log(fe.comment());                                         // ReactJS is hella cool!!
    ```

    > If a `constructor` is present in the subclass, `super()` needs to be called first before using `this`


  * Extending traditional _Function-based Class_
    ```Javascript
    function JSFramework(bias) {
      this.bias = bias;
    }
    JSFramework.prototype.getBias = function() {
      console.log(`Bias ${this.bias}`);
    };
    class ReactJS extends JSFramework {
      getBias() {
        console.log(`Your bias is ${this.bias}`);
      }
    }

    const fe = new ReactJS('ReactJS');
    console.log(fe.getBias());                                         // Your bias is ReactJS
    ```


  * Extending _Regular (non-constructible) Objects_
    > This is possible by using `Object.setPrototypeOf()`

    ```Javascript
    const JSFramework = {
      getBias() {
        console.log(`Your bias is ${this.bias}`);
      }
    }
    class ReactJS {
      constructor(bias = 'ReactJS') {
        this.bias = bias;
      }
    }

    var fe = new ReactJS();
    // `getBias()` doesn't exist in the Class
    fe.getBias();                                                      // Uncaught TypeError

    // Set `JSFramework` as prototype of `ReactJS`
    // Will dig into `Object.setPrototypeOf()` deeper later and
    // its comparison with `Object.assign()` once working on `Object`
    Object.setPrototypeOf(ReactJS.prototype, JSFramework);             // { constructor: f }
    // Trying again...
    fe.getBias();                                                      // Your bias is ReactJS
    ```

  ### Accessing respective parent functions via `super`:
  > This keyword is used to call corresponding methods of super class

  ```Javascript
  class JSFramework {
    constructor({ bias, say }) {
      this.bias = bias;
      this.say = say;
    }
    comment() {
      console.log(`${this.bias} is ${this.say}`);
    }
  }
  class ReactJS extends JSFramework {
    constructor(say) {
      // Call the super class constructor and pass in the params
      super({ bias: 'ReactJS', say });
    }
    comment() {
      super.comment();
      console.log(`${this.bias} is hella ${this.say}`);
    }
  }

  const fe = new ReactJS('cool!!');
  console.log(fe.comment());
  // ReactJS is cool!!
  // ReactJS is hella cool!!
  ```


  ## Mixins
  Might explore onto it separately. Seen some examples and they look similar to extending regular objects


---
## ES2016 (also known as ES7) Updates

  ### Static Class Properties

  Static methods on classes exists as part of ES6. In ES7, declaring static class properties can now also be achieved by using the `static` keyword the same way you declare a static class methods.

  ```Javascript
  class JSFramework {
    static bias = 'ReactJS'
  }
  console.log(JSFramework.bias);                                       // ReactJS
  ```

  ### Class Instance Properties

  The approach is equivalent to assigning these properties in the `constructor` function.

  ```Javascript
  class JSFramework {
    bias = 'ReactJS'
    rating = {
      rank: 1,
      recommendations: '10k'
    }

    constructor() {
      console.log(this.bias, this.rating.rank, this.rating.recommendations);
    }
  }
  new JSFramework();                                                   // "ReactJS" 1 "10k"
  ```

  ### Bound Instance Methods

  As mentioned above the `this` becomes `undefined` when the class method is accessed indirectly. Before ES7, you might bind the method to the class instance in the `constructor` method:

  ```Javascript
  class JSFramework {
    constructor() {
      this.bias = 'ReactJS';
      this.getBias = this.getBias.bind(this);
    }

    getBias() {
      console.log(this.bias)
    }
  }
  const fe = new JSFramework();
  const _getBias = fe.getBias;
  _getBias();                                                          // ReactJS
  ```

  With ES7, the _`arrow function`_ can be used that will bound the method to the class instance at construction:

  ```Javascript
  class JSFramework {
    constructor() {
      this.bias = 'ReactJS';
    }

    getBias = () => {
      console.log(this.bias)
    }
  }
  const fe = new JSFramework();
  const _getBias = fe.getBias;
  _getBias();                                                          // ReactJS
  ```

