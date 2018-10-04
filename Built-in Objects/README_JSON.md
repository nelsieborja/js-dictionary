# JSON
> Contains methods for parsing [JSON](https://json.org/) _(JavaScript Object Notation)_ and converting values to JSON. Can't be called or constructed and has no functionality of its own

```javascript
{
  name: 'Anonymous',
  position: 'Frontend Engineer'
}
```

---

## Methods

- ### JSON.parse()
  > Parses a JSON string and construct the object as per the string definition

  - #### Syntax
    ```javascript
    JSON.parse(text[, reviver])
    ```

    `text`
    > The string to parse as JSON

    `reviver` _(optional)_
    > Works like a _`middleware`_, it transforms the parsed value before the value is being returned

  * #### Return value
    > The `object` corresponding to the given JSON `text`

  * #### Examples

    ```javascript
    JSON.parse('{}');                                 // {}
    JSON.parse('true');                               // true
    JSON.parse('"foo"');                              // "foo"
    JSON.parse('[1, 5, "false"]');                    // (3) [1, 5, "false"]
    JSON.parse('null');                               // null
    ```

    ```javascript
    const pets = '{"dogs":3, "cats":0, "owner":"Asia"}';
    // Converts into JSON object
    const parsedPets = JSON.parse(pets);
    console.log(parsedPets);                          // {dogs: 3, cats: 0, owner: "Asia"}
    // Takes specific value from parsed output
    console.log(parsedPets.owner);                    // Asia
    ```

    Using the _`reviver`_ parameter:
    ```javascript
    // OBJECTIVE: Double any value with a type of number
    JSON.parse('{"dogs": 3, "cats": 1, "owner": "Asia"}', (key, value) =>
      typeof value === 'number'
        ? value * 2   // return value * 2 for numbers
        : value       // return everything else unchanged
    );
    // {dogs: 6, cats: 2, owner: "Asia"}
    ```

    ```javascript
    // OBJECTIVE: Log the iteration process
    JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
      console.log(key, value);
      return value;   // return the unchanged property value.
    });
    // 1 1
    // 2 2
    // 4 4
    // 6 6
    // 5 {6: 6}
    // 3 {4: 4, 5: {…}}
    // '' {1: 1, 2: 2, 3: {…}} (last iteration is the final output having no index)
    ```

- ### JSON.stringify()
  > Converts a JavaScript value to a JSON string

  - #### Syntax
    ```javascript
    JSON.stringify(value[, replacer[, space]])
    ```

    `value`
    > The value to convert to a JSON string

    `replacer` _(optional)_
    > Similar to parameter _`reviver`_ of _`JSON.parse()`_ except it accepts not only a function but also an array

    `space` _(optional)_
    > any `String` or `Number` that will be used to insert a white space into the output for readability purposes. If `Number` is provided this will become the equivalent number of white spaces added

  * #### Return value
    > A JSON string representing the given value

  * #### Examples
    ```javascript
    JSON.stringify({});                                 // "{}"
    JSON.stringify(true);                               // "true"
    JSON.stringify('foo');                              // ""foo""
    JSON.stringify([1, 'false', false]);                // "[1,"false",false]"
    ```

    Using the _`replacer`_ parameter, as a function:
    ```javascript
    // OBJECTIVE: Get rid of properties having value with a type of string
    function replacer(key, value) {
      // Filtering out properties
      if (typeof value === 'string') {
        return undefined;
      }
      return value;
    }

    JSON.stringify({ dogs: 3, cats: 0, owner: "Asia" }, replacer);
    // "{"dogs":3,"cats":0}"
    ```

     Using the _`replacer`_ parameter, as an array:
    ```javascript
    // OBJECTIVE: Get only the properties having key of either "dogs" or "owner"
    JSON.stringify({ dogs: 3, cats: 0, owner: "Asia" }, ['dogs', 'owner']);
    // "{"dogs":3,"owner":"Asia"}"
    ```

    Using the _`space`_ parameter:
    ```javascript
    JSON.stringify({ dogs: 3, cats: 0, owner: "Asia" }, null, '\t');
    // "{
    //   "dogs": 3,
    //   "cats": 0,
    //   "owner": "Asia"
    // }"
    ```

    ```javascript
    JSON.stringify({ dogs: 3, cats: 0, owner: "Asia" }, null, '----');
    // "{
    // ----"dogs": 3,
    // ----"cats": 0,
    // ----"owner": "Asia"
    // }"
    ```
