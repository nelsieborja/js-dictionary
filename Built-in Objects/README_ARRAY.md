# <font color="#663399">Array</font>

> <font color="#4084a1">_List-like_ objects whose prototype has methods to perform traversal and mutation operations.</font>

## Ways to call an array method, that I know of:

- For _array-like_ objects:
  ```
  const $containerDiv = document.querySelectorAll('div.container');
  Array.prototype.forEach.call($containerDiv, elem => { ... });
  ```
- Actual array objects:
  ```
  [1, 2, 3].call(elem => { ... })
  ```

## Methods

<font color="#663399">

- slice <font color="#9D7CBF"><i>vs</i></font> splice

  > <b>[slice]</b> <font color="#9D7CBF">returns a shallow copy of a portion of the array into a new array object</font>

  ```
  const array = [1, 2, 3, 4, 5];

  // Takes 3 items from index 0 to 3 (3 not included)
  console.log(array.slice(0, 3)); // [1, 2, 3]
  // slice will keep the original copy
  console.log(array); // [1, 2, 3, 4, 5]
  ```

  > <b>[splice]</b> <font color="#9D7CBF">removes element(s) from the array thereby changing its content</font>

  ```
  // Deletes 3 items from index 0; returns deleted items
  console.log(array.splice(0, 3)); // [1, 2, 3]
  // 2 items will remain in the array
  console.log(array); // [4, 5]
  // Deletes 1 item starting from 2nd to the left, and inserts "4"
  console.log(array.splice(-2, 1, 4)) // [4]
  // "5" would be the remaining item plus the inserted "4"
  console.log(array); // [4, 5]
  ```

- pop <font color="#9D7CBF"><i>vs</i></font> push

  > <b>[pop]</b> <font color="#9D7CBF">removes the _last inserted_ item from the array</font>

  ```
  const array = [1, 2, 3, 4, 5];

  // Returns the removed item "5"
  console.log(array.pop()); // 5
  // Array length is updated
  console.log(array); // [1, 2, 3, 4]
  ```

  > <b>[push]</b> <font color="#9D7CBF">adds element(s) to the end of the array</font>

  ```
  // Returns the new length of the array
  console.log(array.push(5)); // 5
  // Adding multiple items to the array
  console.log(array.push(6, 7, 8, 9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

- shift <font color="#9D7CBF"><i>vs</i></font> unshift

  > <b>[shift]</b> <font color="#9D7CBF">removes the _first inserted_ element from the array</font>

  ```
  const array = [1, 2, 3, 4, 5];

  // Returns the removed element
  console.log(array.shift()); // 1
  // Array length is updated
  console.log(array); // [2, 3, 4, 5]
  ```

  > <b>[unshift]</b> <font color="#9D7CBF">adds element(s) to the beginning of the array</font>

  ```
  // Adding "0,1"; Returns the new length of the array
  console.log(array.unshift(0, 1)); // 6
  console.log(array); [0, 1, 2, 3, 4, 5]
  ```

- keys <font color="#9D7CBF"><i>vs</i></font> values <font color="#9D7CBF"><i>vs</i></font> entries

  > <b>[keys]</b> <font color="#9D7CBF">returns a new `Array Iterator` object that contains the **_keys_** of the element(s)</font>

  ```
  console.log(['a', 'b'].keys().next()); // { value: 0, done: false }
  ```

  > <b>[values]</b> <font color="#9D7CBF">same as `keys()` but contains the **_values_**</font>

  ```
  console.log(['a', 'b'].values().next()); // { value: 'a', done: false }
  ```

  > <b>[entries]</b> <font color="#9D7CBF">same as `keys()` and `values()` but contains the **_key/value pairs_** for each index of the array</font>

  ```
  console.log(['a', 'b'].entries().next()); // [0, 'a']
  ```

- every <font color="#9D7CBF"><i>vs</i></font> some <font color="#9D7CBF"><i>vs</i></font> includes

  > <b>[every]</b> <font color="#9D7CBF">checks whether all elements in the array pass the provided condition</font>

  ```
  // Not all the elements are greater than 3, so it will return "false"
  console.log([1, 2, 3, 4, 5].every(currentValue => currentValue > 3)); // false
  ```

  > <b>[some]</b> <font color="#9D7CBF">same as `every()` but checks if provided condition is met for at least one element</font>

  ```
  // 2 items are greater 3, so it gives "true"
  console.log([1, 2, 3, 4, 5].every(currentValue => currentValue > 3)); // true
  ```

  > <b>[includes]</b> <font color="#9D7CBF">determines whether the array includes a certain element</font>

  ```
  // Checking if array contains "2"
  console.log([1, 2, 3].includes(2)); // true
  // Array doesn't contain 4
  console.log([1, 2, 3].includes(4)); // false
  ```

  > <font color="#4084a1">Unlike `every()` and `some()` it takes an element instead of a function</font>

- reverse <font color="#9D7CBF"><i>vs</i></font> sort

  > <b>[reverse]</b> <font color="#9D7CBF">reverses an array</font>

  ```
  // Returns the reversed array
  console.log(['Jan', 'Feb', 'Mar'].reverse()); // ['Mar', 'Feb', 'Jan']
  ```

  > <b>[sort]</b> <font color="#9D7CBF">sorts the elements of the array; default is according to string Unicode code points</font>

  ```
  // Returns the sorted array
  console.log(['Jan', 'Feb', 'Mar'].sort()); // ['Feb', 'Jan', 'Mar']
  ```

  ```
  // Sorting numbers
  const numbers = [40, 2, 5, 3];
  // Numbers are converted into string using the default
  console.log(numbers.sort()); // [2, 3, 40, 5]
  // Sort using "Compare Function"
  console.log(numbers.sort((a, b) => a - b)); // [2, 3, 5, 40]
  ```

- join <font color="#9D7CBF"><i>vs</i></font> concat

  > <b>[join]</b> <font color="#9D7CBF">join all elements of the array into a string</font>

  ```
  const feels = ['love', 'hate', 'respect'];

  console.log(feels.join()); // "love,hate,respect"
  console.log(feels.join('')); // "lovehaterespect"
  console.log(feels.join(' + ')); // "love + hate + respect"
  ```

  > <b>[concat]</b> <font color="#9D7CBF">merges 2 or more arrays</font>

  ```
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  // Returns a new array
  console.log(array1.concat(array2)); // [1, 2, 3, 4, 5, 6]
  // Existing array remains the same
  console.log(array1); //[1, 2, 3]
  ```

- forEach <font color="#9D7CBF"><i>vs</i></font> filter <font color="#9D7CBF"><i>vs</i></font> map <font color="#9D7CBF"><i>vs</i></font> reduce

  > <b>[forEach]</b> <font color="#9D7CBF">executes the provided function once for each element of the array</font>

  ```
  ['love', 'hate', 'respect'].forEach(
    (feel) => console.log(`Do you feel ${feel}?`)
  );
  // "Do you feel love?"
  // "Do you feel hate?"
  // "Do you feel respect?"
  ```

  > <b>[filter]</b> <font color="#9D7CBF">executes the provided function on every element of the the array and returns a new filtered array</font>

  ```
  console.log(['love', 'hate', 'respect'].filter(
    (feel) => feel !== 'hate'
  )); // ['love', 'respect']
  ```

  > <font color="#4084a1">The main difference between `forEach` and `filter` is that `forEach` just loop over the array and executes the function while `filter` also checks the return value of the function which will determine whether to keep(_true_)/remove(_false_) the element from the _resulting array_</font>

  > <b>[map]</b> <font color="#9D7CBF">same as `forEach` and `filter`, takes a function and run it against every element on the array. Except it will generate a new array based on the calling array</font>

  > <font color="#4084a1">We can see this method being used a lot in every ReactJS codebase ^\_^</font>

  ```
  console.log(['love', 'hate', 'respect'].map(
    (feel) => `I ${feel === 'hate' ? 'don\'t ' : ''}feel ${feel}`
  )); // ["I feel love", "I don't feel hate", "I feel respect"]
  ```

  > <b>[reduce]</b> <font color="#9D7CBF">reduce the array into one single value; same goes to `reduceRight` but in _right-to-left_ direction</font>

  ```
  console.log([1, 2, 3].reduce(
    (sum, currentValue) => sum + currentValue)
  ); // 6
  ```

  > <font color="#4084a1">Also takes a function but it gets 2 arguments **sum**_(last returned value of the function)_ & **currentValue**_(current element in the iteration)_</font>

- find/findIndex <font color="#9D7CBF"><i>vs</i></font> indexOf/lastIndexOf

  > <b>[find]</b> <font color="#9D7CBF">returns the **_value_** of the _first element_ in the array that satisfies the provided function</font>

  ```
  console.log([1, 2, 3].find(num => num < 4)); // 1
  console.log([1, 2, 3].find(num => num > 4)); // undefined
  ```

  > <b>[findIndex]</b> <font color="#9D7CBF">same as `find()` but returns **_index_** instead of **_value_**</font>

  ```
  console.log([1, 2, 3].findIndex(num => num > 1)); // 1
  // None of the items satisfies the function
  console.log([1, 2, 3].findIndex(num => num > 4)); // -1
  ```

  > <b>[indexOf]</b> <font color="#9D7CBF">returns the **_first index_** at which given element can be found in the array; "-1" if it's not present</font>

  ```
  console.log(['love', 'hate', 'love', 'respect'].indexOf('love')); // 0
  // Start searching from index "1"
  console.log(['love', 'hate', 'love', 'respect'].indexOf('love', 1)); // 2
  ```

  > <b>[lastIndexOf]</b> <font color="#9D7CBF">same as `indexOf()` but the array is searched backwards</font>

  ```
  console.log(['love', 'hate', 'love', 'respect'].lastIndexOf('love')); // 2
  console.log(['love', 'hate', 'love', 'respect'].lastIndexOf('love', 1)); // 0
  ```

  </font>

## Special Methods / Properties

<font color="#663399">

- <b>from()</b> - <font color="#9D7CBF">converts _array-like_ objects into a new, shallow-copied `Array` instance</font>

  ```
  console.log(Array.from('love')); // ['l', 'o', 'v', 'e']
  ```

- <b>isArray()</b> - <font color="#9D7CBF">determines whether the passed value is an `Array`</font>

  ```
  console.log(Array.isArray([1, 2, 3])); // true
  console.log(Array.isArray('love')); // false
  ```

- <b>length</b> - <font color="#9D7CBF">returns the number of elements in the array</font>

  ```
  console.log([1, 2, 3].length); // 3
  ```

  </font>
