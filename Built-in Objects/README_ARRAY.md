# Array

> _List-like_ **objects** whose prototype has methods to perform traversal and mutation operations.


## Ways to call an array method, that I know of:

- ### For _array-like_ objects:
  ```javascript
  const $containerDiv = document.querySelectorAll('div.container');
  Array.prototype.forEach.call($containerDiv, elem => { ... });
  ```

- ### Actual array objects:
  ```javascript
  [1, 2, 3].call(elem => { ... })
  ```

---

## Methods

- ### slice <i>vs</i> splice

  > **_slice()_** returns a shallow copy of a portion of the array into a new array object
  ```javascript
  const array = [1, 2, 3, 4, 5];

  // Takes 3 items from index 0 to 3 (3 not included)
  console.log(array.slice(0, 3)); // [1, 2, 3]
  // slice will keep the original copy
  console.log(array); // [1, 2, 3, 4, 5]
  ```

  > **_splice()_** removes element(s) from the array thereby changing its content
  ```javascript
  // Deletes 3 items from index 0; returns deleted items
  console.log(array.splice(0, 3)); // [1, 2, 3]
  // 2 items will remain in the array
  console.log(array); // [4, 5]
  // Deletes 1 item starting from 2nd to the left, and inserts "4"
  console.log(array.splice(-2, 1, 4)) // [4]
  // "5" would be the remaining item plus the inserted "4"
  console.log(array); // [4, 5]
  ```

- ### pop <i>vs</i> push

  > **_pop()_** removes the _last inserted_ item from the array
  ```javascript
  const array = [1, 2, 3, 4, 5];

  // Returns the removed item "5"
  console.log(array.pop()); // 5
  // Array length is updated
  console.log(array); // [1, 2, 3, 4]
  ```

  > **_push()_** adds element(s) to the end of the array
  ```javascript
  // Returns the new length of the array
  console.log(array.push(5)); // 5
  // Adding multiple items to the array
  console.log(array.push(6, 7, 8, 9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

- ### shift <i>vs</i> unshift

  > **_shift()_** removes the _first inserted_ element from the array
  ```javascript
  const array = [1, 2, 3, 4, 5];

  // Returns the removed element
  console.log(array.shift()); // 1
  // Array length is updated
  console.log(array); // [2, 3, 4, 5]
  ```

  > **_unshift()_** adds element(s) to the beginning of the array
  ```javascript
  // Adding "0,1"; Returns the new length of the array
  console.log(array.unshift(0, 1)); // 6
  console.log(array); [0, 1, 2, 3, 4, 5]
  ```

- ### keys <i>vs</i> values <i>vs</i> entries - ~~IE support~~

  > **_keys()_** returns a new `Array Iterator` object that contains the **_keys_** of the element(s)
  ```javascript
  console.log(['a', 'b'].keys().next()); // { value: 0, done: false }
  ```

  > **_values()_** same as `keys()` but contains the **_values_**
  ```javascript
  console.log(['a', 'b'].values().next()); // { value: 'a', done: false }
  ```

  > **_entries()_** same as `keys()` and `values()` but contains the **_key/value pairs_** for each index of the array
  ```javascript
  console.log(['a', 'b'].entries().next()); // [0, 'a']
  ```

- ### every <i>vs</i> some <i>vs</i> includes

  > **_every()_** checks whether all elements in the array pass the provided condition
  ```javascript
  // Not all the elements are greater than 3, so it will return "false"
  console.log([1, 2, 3, 4, 5].every(currentValue => currentValue > 3)); // false
  ```

  > **_some()_** same as `every()` but checks if provided condition is met for at least one element
  ```javascript
  // 2 items are greater 3, so it gives "true"
  console.log([1, 2, 3, 4, 5].every(currentValue => currentValue > 3)); // true
  ```

  > **_includes()_** determines whether the array includes a certain element
  >> ~~IE support~~
  ```javascript
  // Checking if array contains "2"
  console.log([1, 2, 3].includes(2)); // true
  // Array doesn't contain 4
  console.log([1, 2, 3].includes(4)); // false
  ```

  > Unlike `every()` and `some()` it takes an element instead of a function

- ### reverse <i>vs</i> sort

  > **_reverse()_** reverses an array
  ```javascript
  // Returns the reversed array
  console.log(['Jan', 'Feb', 'Mar'].reverse()); // ['Mar', 'Feb', 'Jan']
  ```

  > **_sort()_** sorts the elements of the array; default is according to string Unicode code points
  ```javascript
  // Returns the sorted array
  console.log(['Jan', 'Feb', 'Mar'].sort()); // ['Feb', 'Jan', 'Mar']
  ```

  ```javascript
  // Sorting numbers
  const numbers = [40, 2, 5, 3];
  // Numbers are converted into string using the default
  console.log(numbers.sort()); // [2, 3, 40, 5]
  // Sort using "Compare Function"
  console.log(numbers.sort((a, b) => a - b)); // [2, 3, 5, 40]
  ```

- ### join <i>vs</i> concat

  > **_join()_** join all elements of the array into a string
  ```javascript
  const feels = ['love', 'hate', 'respect'];

  console.log(feels.join()); // "love,hate,respect"
  console.log(feels.join('')); // "lovehaterespect"
  console.log(feels.join(' + ')); // "love + hate + respect"
  ```

  > **_concat()_** merges 2 or more arrays
  ```javascript
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  // Returns a new array
  console.log(array1.concat(array2)); // [1, 2, 3, 4, 5, 6]
  // Existing array remains the same
  console.log(array1); //[1, 2, 3]
  ```

- ### forEach <i>vs</i> filter <i>vs</i> map <i>vs</i> reduce/reduceRight

  > **_forEach()_** executes the provided function once for each element of the array
  ```javascript
  ['love', 'hate', 'respect'].forEach(
    (feel) => console.log(`Do you feel ${feel}?`)
  );
  // "Do you feel love?"
  // "Do you feel hate?"
  // "Do you feel respect?"
  ```

  > **_filter()_** executes the provided function on every element of the the array and returns a new filtered array
  ```javascript
  console.log(['love', 'hate', 'respect'].filter(
    (feel) => feel !== 'hate'
  )); // ['love', 'respect']
  ```

  > The main difference between `forEach` and `filter` is that `forEach` just loop over the array and executes the function while `filter` also checks the return value of the function which will determine whether to keep(_true_)/remove(_false_) the element from the _resulting array_

  > **_map()_** similar to `forEach` and `filter`, takes a function and run it against every element on the array. Except it will generate a new array based on the calling array

  > We can see this method being used a lot in every ReactJS codebase ^\_^

  ```javascript
  console.log(['love', 'hate', 'respect'].map(
    (feel) => `I ${feel === 'hate' ? 'don\'t ' : ''}feel ${feel}`
  )); // ["I feel love", "I don't feel hate", "I feel respect"]
  ```

  > **_reduce()_** reduce the array into one single value; same goes to `reduceRight` but in _right-to-left_ direction
  ```javascript
  console.log([1, 2, 3].reduce(
    (sum, currentValue) => sum + currentValue)
  ); // 6
  ```

  > Also takes a function but it gets 2 arguments **sum**_(last returned value of the function)_ & **currentValue**_(current element in the iteration)_

- ### find/findIndex <i>vs</i> indexOf/lastIndexOf

  > **_find()_** returns the **_value_** of the _first element_ in the array _that satisfies the provided function_
  >> ~~IE support~~
  ```javascript
  console.log([1, 2, 3].find(num => num < 4)); // 1
  console.log([1, 2, 3].find(num => num > 4)); // undefined
  ```

  > **_findIndex()_** similar to `find()` but returns **_index_** instead of **_value_**
  >> ~~IE support~~
  ```javascript
  console.log([1, 2, 3].findIndex(num => num > 1)); // 1
  // None of the items satisfies the function
  console.log([1, 2, 3].findIndex(num => num > 4)); // -1
  ```

  > **_indexOf()_** returns the **_first index_** at which _given element can be found_ in the array; "-1" if it's not present
  ```javascript
  console.log(['love', 'hate', 'love', 'respect'].indexOf('love')); // 0
  // Start searching from index "1"
  console.log(['love', 'hate', 'love', 'respect'].indexOf('love', 1)); // 2
  ```

  > **_lastIndexOf()_** similar to `indexOf()` but the array is searched backwards
  ```javascript
  console.log(['love', 'hate', 'love', 'respect'].lastIndexOf('love')); // 2
  console.log(['love', 'hate', 'love', 'respect'].lastIndexOf('love', 1)); // 0
  ```

---

## Special Methods / Properties

- ### from()
  > converts _array-like_ objects into a new, shallow-copied `Array` instance.

  ```javascript
  console.log(Array.from('love')); // ['l', 'o', 'v', 'e']
  ```

  > ~~IE support~~

- ### isArray()
  > determines whether the passed value is an `Array`

  ```javascript
  console.log(Array.isArray([1, 2, 3])); // true
  console.log(Array.isArray('love')); // false
  ```

- ### length
  > returns the number of elements in the array

  ```javascript
  console.log([1, 2, 3].length); // 3
  ```

---

## Descriptions

* ### array-like objects
  > objects with a `length` property and indexed elements, or they are iterable objects