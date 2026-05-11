# JavaScript & OOP 🚀

---

# Does JavaScript Have Classes?

Technically:

❌ JavaScript originally did NOT have classes.

JavaScript is a:
# Prototype-based language

Classes were introduced later in ES6 as:
> Syntactic Sugar

Meaning:
Classes internally still work using:
# Prototypes

---

# OOP (Object Oriented Programming)

OOP is a programming paradigm based on:
# Objects

Objects contain:
- Properties (variables/data)
- Methods (functions)

---

# Object

An object is:
> Collection of properties and methods

---

# Example

```js
const user = {

    username: "Tripti",

    loginCount: 8,

    signedIn: true,

    getUserDetails: function(){

        console.log("User details");
    }
}
```

---

# Real Example

```js
"TRIPTI".toLowerCase()
```

Here:
- `"TRIPTI"` is object
- `toLowerCase()` is method

---

# Why Use OOP?

OOP helps in:

✅ Code reusability  
✅ Better organization  
✅ Easier maintenance  
✅ Scalability  
✅ Real-world modeling  
✅ Data security  

---

# Parts of OOP in JavaScript

---

# 1. Object Literal

Direct way to create object.

```js
const user = {

    name: "Tripti"
}
```

---

# 2. Constructor Function

Used to create multiple objects.

```js
function User(name){

    this.name = name;
}

const userOne = new User("Tripti");
```

---

# 3. Prototypes

Used for inheritance and shared methods.

```js
User.prototype.greet = function(){

    console.log("Hello");
}
```

---

# 4. Classes

Modern syntax introduced in ES6.

```js
class User{

    constructor(name){

        this.name = name;
    }
}
```

---

# 5. Instance

Object created from constructor/class.

```js
const userOne = new User("Tripti");
```

Here:
```js
userOne
```

is instance.

---

# this Keyword

`this` refers to current object.

```js
const user = {

    name: "Tripti",

    greet: function(){

        console.log(this.name);
    }
}
```

---

# new Keyword

Used to create new object instance.

```js
const userOne = new User("Tripti");
```

---

# 4 Pillars of OOP

---

# 1. Abstraction

Hiding unnecessary details and showing only essential features.

---

# Example

```js
car.start()
```

You don't know internal engine logic.

---

# 2. Encapsulation

Wrapping data and methods together.

```js
class User{

    constructor(name){

        this.name = name;
    }
}
```

---

# 3. Inheritance

One class/object acquiring properties of another.

```js
class Teacher extends User{

}
```

---

# 4. Polymorphism

Same method behaves differently.

```js
class Animal{

    sound(){

        console.log("Animal sound");
    }
}

class Dog extends Animal{

    sound(){

        console.log("Bark");
    }
}
```

---

# What is Prototype?

Prototype is:
> Default inheritance mechanism in JavaScript

Every object in JavaScript has hidden prototype connection.

---

# Important Point

Default behavior of JavaScript is:
# Prototype

Access of:
- `new` keyword
- `classes`
- `this`
- `inheritance`

all work because of:
# Prototype System

---

# Prototype Chain

```txt
Object
   ↓
Prototype
   ↓
Prototype
   ↓
null
```

---

# Example

```js
const arr = [1, 2, 3];
```

Array inherits methods from:
```txt
Array.prototype
```

Like:
```js
push()
pop()
map()
filter()
```

---

# How `new` Keyword Works Internally

---

# Step 1

A new empty object is created.

```js
{}
```

---

# Step 2

New object gets linked to:
```js
ConstructorFunction.prototype
```

---

# Step 3

Constructor function executes with:
```js
this
```

pointing to newly created object.

---

# Step 4

Object gets returned automatically.

---

# Internal Flow of `new`

```txt
new User("Tripti")

↓

Create empty object

↓

Link prototype

↓

Bind this

↓

Execute constructor

↓

Return object
```

---

# Example

```js
function User(name){

    this.name = name;
}

const userOne = new User("Tripti");
```

---

# Behind the Scenes

```txt
const userOne = {}

↓

userOne.__proto__ = User.prototype

↓

User.call(userOne, "Tripti")

↓

return userOne
```

---

# Constructor Function vs Class

| Constructor Function | Class |
|---|---|
| Older syntax | Modern syntax |
| Uses prototype manually | Cleaner syntax |
| Functions used | class keyword |

---

# Example of Class

```js
class User{

    constructor(username){

        this.username = username;
    }

    greet(){

        console.log(`Hello ${this.username}`);
    }
}

const userOne = new User("Tripti");
```

---

# Important Terms

| Term | Meaning |
|---|---|
| Object | Collection of properties & methods |
| Method | Function inside object |
| Prototype | Inheritance mechanism |
| Instance | Object created from class/constructor |
| Constructor | Special function to create objects |
| this | Refers to current object |
| new | Creates new object |

---

# Quick Revision 🚀

| Concept | Key Point |
|---|---|
| OOP | Programming using objects |
| Object Literal | Direct object creation |
| Constructor Function | Blueprint for objects |
| Prototype | Shared inheritance system |
| Class | Syntactic sugar over prototypes |
| Instance | Object created from constructor |
| this | Refers to current object |
| new | Creates object instance |
| Abstraction | Hide implementation |
| Encapsulation | Bind data + methods |
| Inheritance | Acquire properties |
| Polymorphism | Multiple behaviors |

---