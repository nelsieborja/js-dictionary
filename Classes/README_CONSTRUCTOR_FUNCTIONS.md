# Constructor Functions
> It's just a normal function and lets you create an object from it via the `new` keyword. Ideally defined using _`CamelCase`_ format:

```javascript
// I'm actually a class!!!
function JSFramework() {}

// I'm just a normal function I guest..
function wipeOutFrameworks() {}
```

---

## Class Simulation
Taking the [Object Literals](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_OBJECT_LITERALS.md) example and converting it into a constructor function:
```javascript
function JSFramework(bias) {
  // Default property of the class
  this.bias = bias || 'ReactJS';

  // Class method
  // Returns value of property `bias` from the class
  this.getBias = function() {
    return this.bias;
  };

  // Another class method
  // Sets new value for property `bias`
  this.setBias = function(newBias) {
    this.bias = newBias || this.bias;
  };
}
```

> The `this` keyword is used to define _internal_ properties and methods for a constructor function

The _`init()`_ or a custom constructor is not needed in _`Constructor Functions`_ since it has its built-in constructor. You can even then pass in parameters directly while instantiating a new object. Creating now an object of type _`JSFramework`_:
```javascript
// Assigning the new object to variable `frontend1`
var frontend1 = new JSFramework();
console.log(frontend1.getBias());                             // ReactJS

// Creating again another instance of object `JSFramework`
// this time with a parameter
var frontend2 = new JSFramework('ViewJS');
console.log(frontend2.getBias());                             // ViewJS

// Expected output remains intact! :)
console.log(frontend1.bias);                                  // ReactJS
```

With _`Constructor Functions`_ every instance will be unique, updating a property of one instance would not affect the other. That solves the problem with _Object Literals_ however, there's a drawback of this approach: <ins>the properties will be recreated for every instantiation!!</ins>


### `Prototype` to the rescue!
  > Whenever a new function is created, JS engine by default adds a `prototype` property to it which is an object - _"prototype object"_

  ```javascript
  function JSFramework() {}

  // Checking `prototype` properties
  console.log(JSFramework.prototype);
  // {
  //   constructor: ƒ JSFramework()
  //   __proto__: {
  //     constructor: ƒ Object()
  //     hasOwnProperty: ƒ hasOwnProperty()
  //   }
  // }
  ```

  #### Built-in Properties:
  * `constructor`
    > Points back to the function

  * `__proto__`
    > _`Dunder`_ proto, points to the prototype property of the constructor function


  #### Few things to consider before using _`Prototype`_:
  * Properties and methods are shared between all the instances of the constructor function _(not recreated!!)_

  * Hence, all properties of _`reference`_ type are modifiable _(`primitive` properties aren't!!)_. So when an instance of the constructor function modifies those properties, it will be reflected amongst its instances

  #### Example:
  Taking the above example, adding _`getBias()`_ and _`setBias()`_ into the `prototype` property:

  ```javascript
  function JSFramework(bias) {
    this.bias = bias || 'ReactJS';
  }
  JSFramework.prototype.getBias = function() {
    return this.bias;
  };
  JSFramework.prototype.setBias = function(newBias) {
    this.bias = newBias || this.bias;
  };
  ```

  Instantiation would be exactly the same way as in the first definition:

  ```javascript
  var frontend1 = new JSFramework();
  console.log(frontend1.getBias());                           // ReactJS
  ```

  Property difference:
  ```javascript
  // USING "THIS"
  console.log(frontend1);
  // JSFramework {s
  //   bias: "ReactJS"
  //   getBias: ƒ ()
  //   setBias: ƒ (newBias)
  //   __proto__: Object
  // }

  // USING "PROTOTYPE"
  console.log(frontend1);
  // JSFramework {
  //   bias: "ReactJS"
  //   __proto__: Object
  // }
  ```

  Checkout [here](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b) for a more detailed article on prototype.

---

## Descriptions

* ### dunder
  > Comes from python, where variable names bracketed with double underscores (eg: `__proto__`)

* ### primitive values
  > Data types: `null`, `undefined`, `boolean`, `number`, `string` and `symbol`

  > Manipulating this value is working on the actual value stored in the variable. In other words, they are the <ins>Access by Value</ins> values

* ### reference values
  > Data types: those types that aren't mentioned under `primitive`

  > Manipulating this value is working on the reference to that value rather than the actual value. In short, they are the <ins>Access by Reference</ins> values

Learn [here](http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/) the difference between _`prmitive`_ and _`reference`_ values.