# Object Literals
> Literals are shorter way to define objects

### To immediately create an object:
```javascript
const JSFramework = {
  bias: 'ReactJS'
};
console.log(JSFramework.bias);                                 // ReactJS
```

### Instead of the normal way:
```javascript
const JSFramework = new Object({
  bias: 'ReactJS'
});
console.log(JSFramework.bias);                                 // ReactJS
```

---

## Class Simulation
```javascript
const JSFramework = {
  // key-value pair property
  bias: 'ReactJS',

  // Custom initialisation method
  init: function(bias) {
    this.setBias(bias);
  },

  // function property
  // Returns value of property `bias` from the class
  getBias: function() {
    return this.bias;
  },

  // Another function property
  // Sets new value for property `bias`
  setBias: function(newBias) {
    this.bias = newBias || this.bias;
  }
}
```

The above class is ready for use, no need for instantiation. Unlike _Constructor Functions_ where you have to first instantiate an object _(via the `new` keyword)_ before you can start using it. However, with _Object Literals_ you cannot create an instance from it because the class itself is already an instance.

### Using the above class:

```javascript
console.log(JSFramework.bias);                                 // ReactJS
console.log(JSFramework.getBias());                            // ReactJS

// Creating a "fake" instantiation
const frontend1 = JSFramework;
// Invoking the class "custom" initialisation method
frontend1.init();
console.log(frontend1.getBias());                              // ReactJS

// Assigning the class again to a new variable
const frontend2 = JSFramework;
// Invoking the initialisation method with a parameter
frontend2.init('ViewJS');
console.log(frontend2.getBias());                              // ViewJS

// Expected output is "ReactJS" but it got overwritten :(
console.log(frontend1.bias);                                   // ViewJS
```

Above snippet reveals an important note: with _Object Literals_ you **always deal with the original class/object**, even if you define a new variable with the object as value. After setting the value of `frontend2.bias` to _"ViewJS"_ the value of `frontend1.bias` instead of _"ReactJS"_ became _"ViewJS"_ too!


---

> _Object Literal_ is considered as `Singleton` since it can only deliver one single instance at a time, and you cannot create more objects from it