# Set

> Stores __unique__ values of any type into so called _`Set`_ object

```javascript
const random = new Set([1, 2, 'ReactJS']);
console.log(random.has(1));                                      // true
console.log(random.has('ReactJS'));                              // true
// It's case sensitive
console.log(random.has('reactjs'));                              // false

const
```

---

## Syntax
```javascript
new Set([iterable]);
```

`iterable`
> An iterable object, `null` or empty _`Set`_;

---

## Methods

* ### add(value)
  > Appends an element to the _`Set`_ object. Returns the updated _`Set`_ object:
  ```javascript
  const jsFramework = new Set();
  jsFramework.add('reactjs');                                    // Set(1) {"reactjs"}
  ```

* ### clear()
  > Removes all elements from the _`Set`_ object
  ```javascript
  // Using the above "Set" object
  jsFramework.clear();
  console.log(jsFramework);                                      // Set(0) {}
  ```

* ### delete(value)
  > Removes the element associated to the `value`; Returns `true` if element existed in the _`Set`_ object, otherwise `false`:
  ```javascript
  const jsFramework = new Set(['reactjs']);
  jsFramework.delete('reactjs');                                 // true
  console.log(jsFramework);                                      // Set(0) {}
  jsFramework.delete('reactjs');                                 // false
  ```

* ### entries()
  > Returns a new _`Iterator`_ object that contains an array of `[value, value]` for each element in the _`Set`_ object, in insertion order
  ```javascript
  const jsFramework = new Set(['reactjs', 'viewjs']);
  console.log(jsFramework.entries().next().value);               // (2) ["reactjs", "reactjs"]
  ```
  The duplicated value actually represents the _`key`_ and _`value`_ of the element.

* ### forEach(callbackFn[, thisArg])
  > Works similar to Array's `forEach`, calls _`callbackFn`_ once for each value in the _`Set`_ object
  ```javascript
  // Using the above "Set" object
  jsFramework.forEach(item => console.log(item));
  // reactjs
  // viewjs
  ```

* ### has(value)
  > Checks whether the given `value` exists in the _`Set`_ object, returns `true` if it is, otherwise `false`
  ```javascript
  // Using the above "Set" object
  console.log(jsFramework.has('angularjs'));                     // false
  ```

* ### keys() / values()
  > Returns a new _`Iterator`_ object that contains the __values__ for each element in the _`Set`_ object
  ```javascript
  // Using the above "Set" object
  console.log(jsFramework.values().next().value);                // reactjs
  ```

---

## Properties

* ### size
  > Returns the number of __values__ in the _`Set`_ object
  ```javascript
  const jsFramework = new Set(['reactjs', 'viewjs']);
  console.log(jsFramework.size);                                 // 2
  ```
