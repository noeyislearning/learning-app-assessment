# Sidebar: Variables and Data Types

## Variables: Containers for everything

### What is a variable?

Variable is a name that refers to a value. The value can be changed anytime. The value can be a number, a string, a list, or any other data type.

## Var

### What is `var`?

`var` is a keyword used to declare a variable. It is followed by the name of the variable and the type of the variable.

```js
var name = "Francis";
```

### What is the type of a variable?

The type of a variable is the kind of data it can hold. The type of a variable is declared after the name of the variable.

```js
var name = "Francis"; // name is a string
var age = 25; // age is a number
```

## Scope

### What is scope?

Scope is the area where a variable is accessible. A variable can be accessible in the global scope or in a local scope.

### What is the global scope?

The global scope is the area where a variable is accessible everywhere in the program.

```js
var name = "Francis";

function sayHello() {
  console.log("Hello " + name);
}

sayHello(); // Hello Francis
```

### What is the block scope?

The block scope is the area where a variable is accessible only in a specific part of the program.

```js
if (true) {
  var name = "Francis";
  console.log("Hello " + name);
}

console.log(name); // Hello Francis
```

### What is a local scope?

A local scope is the area where a variable is accessible only in a specific part of the program.

```js
function sayHello() {
  var name = "Francis";
  console.log("Hello " + name);
}

sayHello(); // Hello Francis
console.log(name); // Error: name is not defined
```

## Let

### What is `let`?

`let` is a keyword used to declare a variable. It is followed by the name of the variable and the type of the variable.

```js
let name = "Francis";
```

### What is the difference between `var` and `let`?

The difference between `var` and `let` is that `var` is accessible in the global scope and `let` is accessible only in the local scope.

```js
var name = "Francis";

function sayHello() {
  console.log("Hello " + name);
}

sayHello(); // Hello Francis
console.log(name); // Francis
```

```js
let name = "Francis";

function sayHello() {
  console.log("Hello " + name);
}

sayHello(); // Hello Francis
console.log(name); // Francis
```

## Const

### What is `const`?

`const` is a keyword used to declare a variable. It is followed by the name of the variable and the type of the variable. This variable cannot be changed.

```js
const name = "Francis";
```

### What is the difference between `var` and `const`?

The difference between `var` and `const` is that `var` can be changed and `const` cannot be changed.

```js
var name = "Francis";

function sayHello() {
  name = "John";
  console.log("Hello " + name);
}

sayHello(); // Hello John
console.log(name); // John
```

```js
const name = "Francis";

function sayHello() {
  name = "John";
  console.log("Hello " + name);
}

sayHello(); // Error: Assignment to constant variable
console.log(name); // Francis
```

## Data Types

### What is a data type?

A data type is a kind of data. There are many different data types. The most common data types are strings, numbers, booleans, arrays, and objects.

### What is a string?

A string is a sequence of characters. A string is declared by surrounding the characters with quotes.

```js
var name = "Francis";
```

### What is a number?

A number is a number. A number is declared by writing the number.

```js
var age = 25;
```

### What is a boolean?

A boolean is a value that can be either true or false. A boolean is declared by writing either true or false.

```js
var isStudent = true;
```

### What is an array?

An array is a list of values. An array is declared by surrounding the values with brackets.

```js
var fruits = ["apple", "banana", "orange"];
```

### What is an object?

An object is a collection of properties. An object is declared by surrounding the properties with braces.

```js
var person = {
  name: "Francis",
  age: 25,
  isStudent: true,
};
```

## Operators

### What is an operator?

An operator is a symbol that performs an operation on one or more values. The most common operators are arithmetic operators, comparison operators, and logical operators.

### What is an arithmetic operator?

An arithmetic operator performs an arithmetic operation on two values. The most common arithmetic operators are addition, subtraction, multiplication, and division.

```js
var sum = 1 + 2; // 3
var difference = 1 - 2; // -1
var product = 1 * 2; // 2
var quotient = 1 / 2; // 0.5
```

### What is a comparison operator?

A comparison operator compares two values. The most common comparison operators are equal, not equal, greater than, less than, greater than or equal, and less than or equal.

```js
var isEqual = 1 == 2; // false
var isNotEqual = 1 != 2; // true
var isGreaterThan = 1 > 2; // false
var isLessThan = 1 < 2; // true
var isGreaterThanOrEqual = 1 >= 2; // false
var isLessThanOrEqual = 1 <= 2; // true
```

### What is a logical operator?

A logical operator combines two or more values. The most common logical operators are and, or, and not.

```js
var isTrue = true && true; // true
var isFalse = true && false; // false
var isTrue = true || false; // true
var isFalse = false || false; // false
var isFalse = !true; // false
```

## Conditionals

### What is a conditional?

A conditional is a statement that is executed only if a condition is true. The most common conditionals are if, else, and else if.

### What is an if statement?

An if statement is a statement that is executed only if a condition is true.

```js
if (true) {
  console.log("Hello");
}
```

### What is an else statement?

An else statement is a statement that is executed only if a condition is false.

```js
if (false) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}
```

### What is an else if statement?

An else if statement is a statement that is executed only if a condition is false and another condition is true.

```js
if (false) {
  console.log("Hello");
} else if (true) {
  console.log("Goodbye");
}
```
