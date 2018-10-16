# Array

> _List-like_ **objects** whose prototype has methods to perform traversal and mutation operations


## Ways to call an array method:

- ### For _array-like_ objects:
  ```javascript
  const $containerDiv = document.querySelectorAll('div.container');
  Array.prototype.forEach.call($containerDiv, elem => { ... });
  ```

- ### Actual array objects:
  ```javascript
  [1, 2, 3].forEach(elem => { ... });
  ```

---

## Methods

- ### slice <i>vs</i> splice

  > **_slice()_** returns a shallow copy of a portion of the array into a new array object; original array is kept
  ```javascript
  const array = [1, 2, 3, 4, 5];

  // Takes 3 items from index 0 to 3 (3 not included)
  console.log(array.slice(0, 3));                                 // (3) [1, 2, 3]
  // Original copy is unchanged
  console.log(array);                                             // (5) [1, 2, 3, 4, 5]
  ```

  > **_splice()_** removes element(s) from the array; updates original array
  ```javascript
  // Deletes 3 items from index 0; returns deleted items
  console.log(array.splice(0, 3));                                // (3) [1, 2, 3]
  // 2 items will remain in the array
  console.log(array);                                             // (2) [4, 5]
  // Deletes 1 item starting from 2nd to the left, and inserts "4"
  console.log(array.splice(-2, 1, 4))                             // [4]
  // "5" would be the remaining item plus the inserted "4"
  console.log(array);                                             // (2) [4, 5]
  ```

- ### pop <i>vs</i> push

  > **_pop()_** removes the _last inserted_ item from the array; updates original array
  ```javascript
  const feels = ['LOVE', 'JOY'];

  // Pops out "JOY" from the array; Returns the removed item
  console.log(feels.pop());                                       // "JOY"
  // Array length is updated
  console.log(feels);                                             // ["LOVE"]
  ```

  > **_push()_** adds element(s) to the end of the array; updates original array
  ```javascript
  // Adds "JOY" into the array; Returns the new length of the array
  console.log(array.push('JOY'));                                 // 2 (array length)
  // Adds multiple items into the array
  console.log(array.push('HAPPY', 'PEACE'));                      // 4 (array length)
  ```

- ### shift <i>vs</i> unshift

  > **_shift()_** removes the _first inserted_ element from the array; updates original array
  ```javascript
  const feels = ['LOVE', 'JOY', 'HAPPY'];

  // Retrieves "LOVE" from the array; Returns the removed element
  console.log(array.shift());                                     // "LOVE"
  // Array length is updated
  console.log(array);                                             // (2) ["JOY", "HAPPY"]
  ```

  > **_unshift()_** adds element(s) to the beginning of the array; updates original array
  ```javascript
  // Adds "LOVE" & "PEACE" into the array
  // Returns the new length of the array
  console.log(array.unshift('LOVE', 'PEACE'));                    // 4 (array length)
  // "LOVE" & "PEACE" took front spots
  console.log(array);                                             // (4) ["LOVE", "PEACE", "JOY", "HAPPY"]
  ```

- ### keys <i>vs</i> values <i>vs</i> entries - ~~IE support~~

  > **_keys()_** returns a new _`Array Iterator`_ object that contains the **_keys_** of the element(s)
  ```javascript
  console.log(['LOVE', 'JOY'].keys().next());                     // { value: 0, done: false }
  ```

  > **_values()_** same as _`keys()`_ but contains the **_values_**
  ```javascript
  console.log(['LOVE', 'JOY'].values().next());                   // { value: 'LOVE', done: false }
  ```

  > **_entries()_** same as _`keys()`_ and _`values()`_ but contains the <ins>key/value pairs</ins> for each index of the array
  ```javascript
  console.log(['LOVE', 'JOY'].entries().next());                  // [0, 'LOVE']
  ```

- ### every <i>vs</i> some <i>vs</i> includes

  > **_every()_** checks whether all elements in the array pass the provided condition
  ```javascript
  // OBJECTIVE: Check if all elements in the array are greater than 3
  const count = [1, 2, 3, 4, 5];
  console.log(count.every(currentValue => currentValue > 3));     // false
  ```

  > **_some()_** same as _`every()`_ but checks if provided condition is met for at least one element
  ```javascript
  // OBJECTIVE: Check if some elements in the array are greater than 3
  console.log(array.some(currentValue => currentValue > 3));      // true
  ```

  > **_includes()_** determines whether the array includes a certain element
  >> ~~IE support~~
  ```javascript
  // OBJECTIVE: Check if array contains "LOVE"
  console.log(['LOVE', 'JOY'].includes('LOVE'));                  // true
  // OBJECTIVE: Check if array contains "HATE"
  console.log(['LOVE', 'JOY'].includes('HATE'));                  // false
  ```

  > Unlike _`every()`_ and _`some()`_ it takes an element instead of a function

- ### reverse <i>vs</i> sort

  > **_reverse()_** reverses an array
  ```javascript
  // Returns the reversed array
  console.log(['Jan', 'Feb', 'Mar'].reverse());                   // (3) ['Mar', 'Feb', 'Jan']
  ```

  > **_sort()_** sorts the elements of the array; default is according to string Unicode code points
  ```javascript
  // Returns the sorted array
  console.log(['Jan', 'Feb', 'Mar'].sort());                      // (3) ['Feb', 'Jan', 'Mar']
  ```

  ```javascript
  // Sorting numbers
  const numbers = [40, 2, 5, 3];
  // Numbers are converted into string using the default
  console.log(numbers.sort());                                    // (4) [2, 3, 40, 5]
  // Sorts using "Compare Function"
  console.log(numbers.sort((a, b) => a - b));                     // (4) [2, 3, 5, 40]
  ```

- ### join <i>vs</i> concat

  > **_join()_** join all elements of the array into a string
  ```javascript
  const feels = ['LOVE', 'JOY', 'PEACE'];

  console.log(feels.join());                                      // "LOVE,JOY,PEACE"
  console.log(feels.join(''));                                    // "LOVEJOYPEACE"
  console.log(feels.join(' + '));                                 // "LOVE + JOY + PEACE"
  ```

  > **_concat()_** merges 2 or more arrays; original arrays are kept
  ```javascript
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  // Merges array1 with array2; Returns a new array
  console.log(array1.concat(array2));                             // (6) [1, 2, 3, 4, 5, 6]
  // Existing array remains the same
  console.log(array1, array2);                                    // (3) [1, 2, 3] (3) [4, 5, 6]
  ```

- ### forEach <i>vs</i> filter <i>vs</i> map <i>vs</i> reduce/reduceRight

  > **_forEach()_** executes the provided function once for each element of the array
  ```javascript
  // OBJECTIVE: Log each item from the array and concat it with a string
  ['LOVE', 'JOY', 'PEACE'].forEach(
    feel => console.log(`Do you feel ${feel}?`)
  );
  // "Do you feel LOVE?"
  // "Do you feel JOY?"
  // "Do you feel PEACE?"
  ```

  > **_filter()_** executes the provided function on every element of the the array and returns a new filtered array
  ```javascript
  // OBJECTIVE: Get rid of "HATE" from the array
  console.log(
    ['LOVE', 'JOY', 'PEACE', 'HATE'].filter(
      feel => feel.toUpperCase() !== 'HATE'
    )
  );
  // (3) ["LOVE", "JOY", "PEACE"]
  ```

  > The main difference between `forEach` and `filter` is that `forEach` just loop over the array and executes the function while `filter` also checks the return value of the function which will determine whether to keep(_`true`_)/remove(_`false`_) the element from the _resulting array_

  > **_map()_** similar to `forEach` and `filter`, takes a function and run it against every element on the array. Except it will generate a new array based on the calling array

  > We can see this method being used a lot in every _`ReactJS`_ codebase ^\_^

  ```javascript
  // OBJECTIVE: Convert each element in the array into a short sentence
  console.log(
    ['LOVE', 'JOY', 'PEACE', 'HATE'].map(
      feel => `I ${feel.toUpperCase() === 'HATE' ? 'don\'t ' : ''}feel ${feel}`
    )
  );
  // (4) ["I feel LOVE", "I feel JOY", "I feel PEACE", "I don't feel HATE"]
  ```

  > **_reduce()_** reduce the array into one single value; same goes to _`reduceRight()`_ but in <ins>right-to-left</ins> direction
  ```javascript
  // OBJECTIVE: Get the total sum of all the elements in the array
  console.log(
    [1, 2, 3].reduce(
      (sum, currentValue) => sum + currentValue
    )
  );
  // 6
  ```

  > Also takes a function but it gets 2 arguments _`sum` (last returned value of the function)_ & _`currentValue` (current element in the iteration)_

- ### find/findIndex <i>vs</i> indexOf/lastIndexOf

  > **_find()_** returns the _`value`_ of the <ins>first element</ins> in the array <ins>that satisfies the provided function</ins>, otherwise it returns `undefined`
  >> ~~IE support~~
  ```javascript
  // Gives the first element that is less than "4"
  console.log([1, 2, 3].find(num => num < 4));                    // 1
  // Now with greater than "4"
  console.log([1, 2, 3].find(num => num > 4));                    // undefined
  ```

  > **_findIndex()_** similar to _`find()`_ but returns <ins>_index_</ins> instead of <ins>_value_</ins>. Returns `-1` if no occurence found
  >> ~~IE support~~
  ```javascript
  // Gives the `index` of the first element that is greater than "1"
  console.log([1, 2, 3].findIndex(num => num > 1));               // 1
  // Now with greater than "4"
  console.log([1, 2, 3].findIndex(num => num > 4));               // -1
  ```

  > **_indexOf()_** returns the **_first index_** at which <ins>given element can be found</ins> in the array; `-1` if it's not present
  ```javascript
  const feels = ['LOVE', 'JOY', 'PEACE', 'LOVE'];
  // Gives the index of first element "LOVE"
  console.log(feels.indexOf('LOVE'));                             // 0
  // Start searching from index "1"
  console.log(feels.indexOf('LOVE', 1));                          // 3
  ```

  > **_lastIndexOf()_** similar to _`indexOf()`_ but the array is searched backwards
  ```javascript
  // Gives the index of last element "LOVE"
  console.log(feels.lastIndexOf('LOVE'));                         // 3
  console.log(feels.lastIndexOf('LOVE', 1));                      // 0
  ```

---

## Special Methods / Properties

- ### from() ~~IE support~~
  > Converts _array-like_ objects into a new, shallow-copied _`Array`_ instance.

  ```javascript
  // Converts 'LOVE' into array
  console.log(Array.from('LOVE'));                                // (4) ["L", "O", "V", "E"]
  ```

- ### isArray()
  > Determines whether the passed value is an _`Array`_

  ```javascript
  // actual array
  console.log(Array.isArray(['LOVE', 'JOY', 'PEACE']));           // true
  // `array-like` but not actually array
  console.log(Array.isArray('LOVE'));                             // false
  ```

- ### length
  > Returns the number of elements in the array

  ```javascript
  // Gives the count of items in an array
  console.log(['LOVE', 'JOY', 'PEACE'].length);                   // 3 (array length)
  ```

---

## Descriptions

* ### array-like objects
  > Objects with a `length` property and indexed elements, or they are iterable objects; but they are not `Array`