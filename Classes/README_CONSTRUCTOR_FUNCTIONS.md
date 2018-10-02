# Constructor Functions
> It's just a normal function and lets you create an object out of it via the `new` keyword. Usually defined using `CamelCase` format:

```javascript
// I'm actually a class!!!
function JSFramework() {}

// I'm just a normal function I guest..
function wipeOutFrameworks() {}
```

---

## Class Simulation
Taking the [Object Literal](https://github.com/nelsieborja/js-dictionary/blob/master/Classes/README_OBJECT_LITERALS.md) class example and converting it into a constructor function:
```javascript
function JSFramework(bias) {
  // Default property of the class
  this.bias = bias || 'ReactJS';

  // Class' method
  // Returns value of property `bias` from the class
  this.getBias = function() {
    return this.bias;
  };

  // Another class' method
  // Sets new value for property `bias`
  this.setBias = function(newBias) {
    this.bias = newBias || this.bias;
  };
}
```

> The `this` keyword is used to define properties and methods for a constructor function

The `init()` or a custom constructor is not needed in _Constructor Functions_ since it has its built-in constructor, you can even then pass in parameters directly while instantiating a new object. Creating now an object of type `JSFramework`:
```javascript
// Assigning the new object to variable `frontend1`
const frontend1 = new JSFramework();
console.log(frontend1.getBias());                             // ReactJS

// Creating again another instance of object `JSFramework`
// this time with a parameter
const frontend2 = new JSFramework('ViewJS');
console.log(frontend2.getBias());                             // ViewJS

// Expected output remains intact! :)
console.log(frontend1.bias);                                  // ReactJS
```

Unlike _Object Literals_, with _Constructor Functions_ every instance will be unique, hence a property update within an instance won't have any effect with the rest of the instances.

But the problem with this approach is that, the properties will be recreated for every new instance....