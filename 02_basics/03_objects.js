// ===================== SINGLETON & OBJECT LITERALS =====================

// Singleton object using constructor
// const obj = new Object();

// Object literal (most commonly used)
const mySym = Symbol("key1");

// Creating object
const user = {
    name: "Tripti",

    // Key with spaces must be accessed using []
    "full name": "Tripti Jha",

    // Symbol used as object key
    [mySym]: "key1",

    age: 24,
    location: "Kolkata",
    email: "triptijha@gmail.com",
    isLoggedIn: false,

    // Array inside object
    lastLoginDays: ["Monday", "Saturday"]
};


// ===================== ACCESSING OBJECT VALUES =====================

// Dot notation
console.log(user.email);

// Bracket notation
console.log(user["email"]);

// Accessing key with spaces
console.log(user["full name"]);

// Accessing symbol
console.log(user[mySym]);


// ===================== MODIFYING OBJECT VALUES =====================

// Updating value
user.email = "tripti@gmail.com";


// ===================== FREEZING OBJECT =====================

// Prevents modification
// Object.freeze(user);

// This won't work after freeze
// user.age = 22;

console.log(user);


// ===================== ADDING FUNCTIONS IN OBJECT =====================

// Function inside object
user.greeting = function(){
    console.log("Hello JS user");
};


// Function using 'this' keyword
user.greeting2 = function(){

    // 'this' refers to current object
    console.log(`Hello JS user, ${this.name}`);
};


// ===================== FUNCTION CALLS =====================

console.log(user.greeting());

console.log(user.greeting2());