# JavaScript 🚀

Code repository for JavaScript concepts and notes.

---

# JavaScript

JavaScript is a **synchronous single-threaded language**

## Meaning

### Single Threaded
- Executes one command at a time
- Has only one call stack

### Synchronous
- Executes code line by line
- Waits for current operation to finish before moving to next

```js
console.log("One");
console.log("Two");
console.log("Three");
```

### Output

```js
One
Two
Three
```

---

# JavaScript Execution Context (GEC)

Execution Context is the environment where JavaScript code executes.

---

# Types of Execution Context

## 1. Global Execution Context (GEC)

- Created whenever JS program runs
- Stored inside `this`

### Browser Environment

```js
this === window
```

👉 In browser, `this` refers to `window object`

---

## 2. Function Execution Context (FEC)

Created whenever a function is called.

```js
function greet(){
    console.log("Hello");
}

greet();
```

Each function gets:
- Its own memory space
- Its own execution context

---

## 3. Eval Execution Context

Created inside `eval()` function.

Rarely used.

---

# JavaScript Runs in 2 Phases

---

# 1. Memory Creation Phase

Memory allocation happens before execution.

## Variables

```js
var a = 10;
```

Initially:

```js
a = undefined
```

---

## Functions

Functions are stored completely in memory.

```js
function demo(){
    return 10;
}
```

Stored as:

```js
demo = function definition
```

---

# 2. Code Execution Phase

Actual code executes line by line.

```js
var a = 10;
```

`undefined` gets replaced with `10`

Functions execute and create new execution contexts.

---

# Example of Execution Context

```js
var n = 2;

function square(num){
    return num * num;
}

var square2 = square(n);
```

---

## Memory Phase

| Variable | Memory |
|---|---|
| n | undefined |
| square | function definition |
| square2 | undefined |

---

## Execution Phase

```js
n = 2
```

Function call:

```js
square(2)
```

New execution context created.

Result:

```js
square2 = 4
```

---

# Call Stack

Call Stack manages execution contexts.

Also known as:
- Execution Stack
- Program Stack
- Runtime Stack
- Control Stack

---

# Example

```js
function one(){
    two();
}

function two(){
    console.log("Hello");
}

one();
```

---

# Flow of Call Stack

```txt
Global Execution Context

↓ one()

↓ two()

↓ console.log()

↓ remove two()

↓ remove one()

↓ remove GEC
```

### Follows:
# LIFO Principle
> Last In First Out

---

# Scope

Scope determines accessibility of variables.

---

# Types of Scope

## 1. Global Scope

Accessible everywhere.

```js
let a = 10;
```

---

## 2. Function Scope

Accessible only inside function.

```js
function demo(){

    let x = 20;
}
```

---

## 3. Block Scope

Created using `{}`

```js
{
    let a = 10;
    const b = 20;
}
```

---

# Lexical Environment

Lexical means:
> Physical placement of code

Lexical Environment consists of:
- Local memory
- Reference to parent lexical environment

---

# Example

```js
function outer(){

    let a = 10;

    function inner(){

        console.log(a);
    }

    inner();
}
```

`inner()` accesses variable from outer scope because of lexical environment.

---

# Scope Chain

When JavaScript cannot find variable:
- Searches parent scope
- Then grandparent scope
- Continues until global scope

This process is called:
# Scope Chain

---

# Example

```js
let a = 100;

function one(){

    let b = 20;

    function two(){

        let c = 30;

        console.log(a, b, c);
    }

    two();
}
```

---

# Temporal Dead Zone (TDZ)

TDZ is the time between:
- Variable declaration
- And initialization

Applies to:
- `let`
- `const`

---

# Example

```js
console.log(a);

let a = 10;
```

### Error

```txt
Cannot access 'a' before initialization
```

Because variable exists inside TDZ.

---

# Blocks

Anything inside `{}` is called block.

```js
{
    let a = 10;
}
```

Blocks combine multiple statements together.

---

# Shadowing

When inner variable hides outer variable.

---

# Example

```js
let a = 100;

{
    let a = 10;

    console.log(a);
}
```

### Output

```js
10
```

Inner `a` shadows outer `a`.

---

# Closures

Closure is created when:
> Function remembers variables from outer lexical scope even after outer function execution is completed.

---

# Example

```js
function outer(){

    let count = 0;

    function inner(){

        count++;

        console.log(count);
    }

    return inner;
}

const close = outer();

close();
close();
```

### Output

```js
1
2
```

`inner()` remembers variable `count`.

---

# Advantages of Closures

✅ Data hiding  
✅ Encapsulation  
✅ Function currying  
✅ Memoization  
✅ Maintain state  
✅ Used in callbacks  
✅ Used in event handlers  

---

# Disadvantages of Closures

❌ Increased memory usage  
❌ Memory leaks possible  
❌ Variables remain in memory longer  

---

# Function Statement / Function Declaration

```js
function add(a, b){

    return a + b;
}
```

### Features
- Hoisted completely
- Can call before declaration

---

# Function Expression

Function stored inside variable.

```js
const add = function(a, b){

    return a + b;
}
```

### Features
- Not fully hoisted
- Cannot call before declaration

---

# Difference Between Function Statement & Function Expression

| Function Statement | Function Expression |
|---|---|
| Fully hoisted | Not fully hoisted |
| Callable before declaration | Cannot call before declaration |
| Independent function | Stored inside variable |

---

# Anonymous Function

Function without name.

```js
function(){

}
```

Used in:
- Callbacks
- Function expressions
- IIFE

---

# Named Function Expression

Function expression with function name.

```js
const demo = function xyz(){

    console.log("Hello");
}
```

### Important
`xyz` accessible only inside function.

---

# First Class Function

Functions behave like variables.

Functions can:
- Be stored inside variable
- Be passed as argument
- Be returned from another function

---

# Example

```js
function greet(){

    return function(){

        console.log("Hello");
    }
}
```

---

# Arrow Function

Short syntax introduced in ES6.

```js
const add = (a, b) => {

    return a + b;
}
```

---

# Implicit Return

```js
const add = (a, b) => a + b;
```

---

# Important Points About Arrow Function

- Does not have its own `this`
- Lexically binds `this`
- Cannot be used as constructor
- Cleaner and shorter syntax

---

# IIFE (Immediately Invoked Function Expression)

Function that executes immediately after creation.

---

# Syntax

```js
(function(){

})();
```

---

# Example

```js
(function DB(){

    console.log("DB Connected");

})();
```

---

# Arrow Function IIFE

```js
((name) => {

    console.log(`Hello ${name}`);

})("Tripti");
```

---

# Why Use IIFE?

✅ Avoid global scope pollution  
✅ Create private scope  
✅ Immediate execution  

---

# Hoisting

Hoisting means:
> Variables and function declarations are moved to top during memory creation phase.

---

# Variable Hoisting

```js
console.log(a);

var a = 10;
```

### Output

```js
undefined
```

---

# Function Hoisting

```js
greet();

function greet(){

    console.log("Hello");
}
```

### Output

```js
Hello
```

---

# this Keyword

`this` refers to current execution context.

---

# Inside Object

```js
const user = {

    name: "Tripti",

    greet: function(){

        console.log(this.name);
    }
}
```

### Output

```js
Tripti
```

---

# Inside Arrow Function

Arrow functions do NOT have their own `this`.

```js
const demo = () => {

    console.log(this);
}
```

---

# Array Basics

```js
const arr = [1, 2, 3];
```

---

# Common Array Methods

| Method | Description |
|---|---|
| push() | Add at end |
| pop() | Remove from end |
| unshift() | Add at beginning |
| shift() | Remove from beginning |
| includes() | Checks value exists |
| indexOf() | Returns index |
| join() | Converts array to string |
| slice() | Returns portion without modifying original |
| splice() | Modifies original array |

---

# slice vs splice

| slice() | splice() |
|---|---|
| Does not modify original array | Modifies original array |
| End index excluded | End range included |

---

# Object Basics

```js
const user = {

    name: "Tripti",
    age: 24
}
```

---

# Accessing Object Values

## Dot Notation

```js
user.name
```

## Bracket Notation

```js
user["name"]
```

---

# Object Methods

| Method | Description |
|---|---|
| Object.keys() | Returns keys |
| Object.values() | Returns values |
| Object.entries() | Returns key-value pairs |
| Object.freeze() | Prevents modification |

---

# Destructuring

```js
const course = {

    name: "JS",
    price: 999
}

const {price} = course;
```

---

# Rest Operator

```js
function total(...nums){

    return nums;
}
```

Collects multiple values into array.

---

# Spread Operator

```js
const arr3 = [...arr1, ...arr2];
```

Expands elements individually.

---

# DOM (Document Object Model)

DOM represents webpage structure as tree.

---

# DOM Structure

```txt
                                  Window
                                    |
                                  Document
                                    |
                                   HTML
                                    |
                  |                                |
                head                              body
        |                 |                        |
      title              meta              div- attribute
        |                  |            |                 |
    text node           attribute       h1- attribute     p- textnode
                                            text node
```

---

# DOM Selectors

---

# querySelector()

Selects first matching element.

```js
document.querySelector('.class')
```

---

# querySelectorAll()

Returns all matching elements.

```js
document.querySelectorAll('li')
```

---

# innerText

Returns only visible text.

```js
element.innerText
```

---

# textContent

Returns all text content.

```js
element.textContent
```

---

# innerHTML

Returns complete HTML content.

```js
element.innerHTML
```

---

# Difference Between innerText, textContent & innerHTML

| Property | Description |
|---|---|
| innerText | Visible text only |
| textContent | All text including hidden |
| innerHTML | Full HTML inside element |

---

# NodeList

Returned by:
```js
querySelectorAll()
```

### Features
- Looks like array
- Not actual array
- Supports `forEach()`
- Does NOT support `map()`

---

# HTMLCollection

Returned by:
```js
getElementsByClassName()
```

### Features
- Collection of HTML elements
- No direct looping methods
- Convert to array first

---

# Convert HTMLCollection to Array

```js
Array.from(collection)
```

---

# Creating Elements in DOM

```js
const div = document.createElement('div');
```

---

# Adding Text

```js
const text = document.createTextNode("Hello");
```

---

# Adding Elements

```js
parent.appendChild(child);
```

---

# Editing Elements

```js
element.textContent = "Updated";
```

---

# Replacing Elements

```js
oldElement.replaceWith(newElement);
```

---

# Removing Elements

```js
element.remove();
```

---

# DOM Traversal

| Property | Description |
|---|---|
| parentElement | Access parent |
| children | Access child elements |
| firstElementChild | First child |
| lastElementChild | Last child |
| nextElementSibling | Next sibling |

---

# childNodes vs children

| childNodes | children |
|---|---|
| Includes text nodes | Only HTML elements |
| Includes spaces/comments | Only elements |

---

# Loops in JavaScript

---

# for Loop

```js
for(let i = 0; i < 5; i++){

    console.log(i);
}
```

---

# while Loop

```js
while(condition){

}
```

---

# do while Loop

```js
do{

}while(condition)
```

---

# for...of Loop

Used for iterable values.

```js
for(const value of arr){

}
```

---

# for...in Loop

Used for object keys.

```js
for(const key in obj){

}
```

---

# Quick Revision Table 🚀

| Topic | Key Point |
|---|---|
| Execution Context | Environment where JS executes |
| Call Stack | Manages execution order |
| Scope | Variable accessibility |
| Lexical Environment | Local memory + parent reference |
| Scope Chain | Variable search chain |
| TDZ | Zone before initialization |
| Closure | Function remembers outer scope |
| Hoisting | Variables/functions moved to top |
| Arrow Function | Short syntax function |
| First Class Function | Functions behave like variables |
| IIFE | Function executes immediately |
| this | Refers to current context |
| DOM | Tree structure of webpage |
| NodeList | Supports forEach |
| HTMLCollection | Convert to array first |
| map() | Returns transformed array |
| filter() | Returns filtered array |
| reduce() | Returns single value |

---