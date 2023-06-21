# Arrays

## Table of contents

- [What is an array?](#what-is-an-array)
- [Arrays in code](#arrays-in-code)
  - [Accessing via `index` of an array](#accessing-via-index-of-an-array)
  - [Adding item to an array](#adding-item-to-an-array)
  - [Removing item from an array](#removing-item-from-an-array)
  - [Adding item to the beginning of an array](#adding-item-to-the-beginning-of-an-array)
  - [Removing item from the beginning of an array](#removing-item-from-the-beginning-of-an-array)
  - [Adding item to an array at a specific index](#adding-item-to-an-array-at-a-specific-index)
  - [Removing item from an array at a specific index](#removing-item-from-an-array-at-a-specific-index)
  - [Replacing item in an array at a specific index](#replacing-item-in-an-array-at-a-specific-index)
  - [Copying an array](#copying-an-array)
  - [Joining an array](#joining-an-array)
  - [Splitting a string into an array](#splitting-a-string-into-an-array)

## What is an array?

An array is a list of values. An array is declared by surrounding the values with square brackets.

```js
var names = ["Francis", "John", "Jane"];
```

## Arrays in code

### Accessing via `index` of an array

You can access an item in an array by using the index of the item. The index of the first item in an array is 0.

```js
var names = ["Francis", "John", "Jane"];

console.log(names[0]); // Francis
console.log(names[1]); // John
console.log(names[2]); // Jane
```

### Adding item to an array

You can add an item to an array by using the `push` method.

```js
var names = ["Francis", "John", "Jane"];

names.push("Mary");

console.log(names); // ["Francis", "John", "Jane", "Mary"]
```

### Removing item from an array

You can remove an item from an array by using the `pop` method.

```js
var names = ["Francis", "John", "Jane"];

names.pop();

console.log(names); // ["Francis", "John"]
```

### Adding item to the beginning of an array

You can add an item to the beginning of an array by using the `unshift` method.

```js
var names = ["Francis", "John", "Jane"];

names.unshift("Mary");

console.log(names); // ["Mary", "Francis", "John", "Jane"]
```

### Removing item from the beginning of an array

You can remove an item from the beginning of an array by using the `shift` method.

```js
var names = ["Francis", "John", "Jane"];

names.shift();

console.log(names); // ["John", "Jane"]
```

### Adding item to an array at a specific index

You can add an item to an array at a specific index by using the `splice` method.

```js
var names = ["Francis", "John", "Jane"];

names.splice(1, 0, "Mary");

console.log(names); // ["Francis", "Mary", "John", "Jane"]
```

### Removing item from an array at a specific index

You can remove an item from an array at a specific index by using the `splice` method.

```js
var names = ["Francis", "John", "Jane"];

names.splice(1, 1);

console.log(names); // ["Francis", "Jane"]
```

### Replacing item in an array at a specific index

You can replace an item in an array at a specific index by using the `splice` method.

```js
var names = ["Francis", "John", "Jane"];

names.splice(1, 1, "Mary");

console.log(names); // ["Francis", "Mary", "Jane"]
```

### Copying an array

You can copy an array by using the `slice` method.

```js
var names = ["Francis", "John", "Jane"];

var namesCopy = names.slice();

console.log(namesCopy); // ["Francis", "John", "Jane"]
```

### Joining an array

You can join an array by using the `join` method.

```js
var names = ["Francis", "John", "Jane"];

var namesJoined = names.join(", ");

console.log(namesJoined); // "Francis, John, Jane"
```

### Splitting a string into an array

You can split a string into an array by using the `split` method.

```js
var namesJoined = "Francis, John, Jane";

var names = namesJoined.split(", ");

console.log(names); // ["Francis", "John", "Jane"]
```

### Sorting an array

You can sort an array by using the `sort` method. The default sort order is ascending.

```js
var names = ["Francis", "John", "Jane"];

names.sort();

console.log(names); // ["Francis", "Jane", "John"]
```

### Reversing an array

You can reverse an array by using the `reverse` method.

```js
var names = ["Francis", "John", "Jane"];

names.reverse();

console.log(names); // ["Jane", "John", "Francis"]
```

### Checking if an array is empty

You can check if an array is empty by using the `length` property.

```js
var names = ["Francis", "John", "Jane"];

console.log(names.length === 0); // false
```

### Checking if an array is not empty

You can check if an array is not empty by using the `length` property.

```js
var names = ["Francis", "John", "Jane"];

console.log(names.length !== 0); // true
```

### Finding the index of an item in an array

You can find the index of an item in an array by using the `indexOf` method.

```js
var names = ["Francis", "John", "Jane"];

console.log(names.indexOf("Francis")); // 0
console.log(names.indexOf("Mary")); // -1
```

### Checking if an array contains an item

You can check if an array contains an item by using the `includes` method.

```js
var names = ["Francis", "John", "Jane"];

console.log(names.includes("Francis")); // true
console.log(names.includes("Mary")); // false
```

### Getting the length of an array

You can get the length of an array by using the `length` property.

```js
var names = ["Francis", "John", "Jane"];

console.log(names.length); // 3
```

### Looping through an array

You can loop through an array by using the `forEach` method.

```js
var names = ["Francis", "John", "Jane"];

names.forEach(function(name) {
  console.log(name);
});
```