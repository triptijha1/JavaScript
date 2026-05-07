// ========================== ITERATION LOOPS IN JAVASCRIPT ==========================



// ========================== FOR...OF LOOP ==========================

/**
 * for...of loop:
 *
 * -> Used to iterate over iterable objects
 * -> Works with:
 *      Arrays
 *      Strings
 *      Maps
 *      Sets
 */



// ========================== FOR...OF WITH ARRAY ==========================

const arr = [1, 2, 3, 4, 5];


// Iterating array values directly
for(const num of arr){

    console.log(num);
}



/**
 * Output:
 *
 * 1
 * 2
 * 3
 * 4
 * 5
 */



// ========================== FOR...OF WITH STRING ==========================

const greetings = "Hello Tripti!";


// Iterating through each character
for(const greet of greetings){

    
    // Skip spaces
    if(greet === " "){

        continue;
    }

    
    console.log(`Each char is ${greet}`);
}



/**
 * Output:
 *
 * Each char is H
 * Each char is e
 * Each char is l
 * Each char is l
 * Each char is o
 * Each char is T
 * Each char is r
 * Each char is i
 * Each char is p
 * Each char is t
 * Each char is i
 * Each char is !
 */



// ========================== MAP IN JAVASCRIPT ==========================

/**
 * Map:
 *
 * -> Stores key-value pairs
 * -> Maintains insertion order
 * -> Stores UNIQUE keys
 */

const map = new Map();


// Adding values into map
map.set('IN', "India");

map.set('USA', "United State of America");

map.set('Fr', "France");


// Duplicate key ignored
map.set('IN', "India");



// ========================== ITERATING MAP ==========================

// Destructuring key and value
for(const [key, value] of map){

    console.log(key, ':-', value);
}



/**
 * Output:
 *
 * IN :- India
 * USA :- United State of America
 * Fr :- France
 */



// ========================== OBJECTS ARE NOT ITERABLE ==========================

/**
 * Normal objects cannot use for...of loop
 */


// const myObject = {

//     game1: "NFS",
//     game2: "Spiderman"
// };


// ❌ Error
// for(const [key, value] of myObject){

//     console.log(key, value);
// }



// ========================== FOR...IN LOOP ==========================

/**
 * for...in loop:
 *
 * -> Mostly used for objects
 * -> Returns KEYS / INDEXES
 */



const myObject = {

    js: 'JavaScript',

    cpp: 'C++',

    rb: "Ruby",

    swift: "Swift by apple"
};



// Iterating object keys
for(const key in myObject){

    console.log(`${key} shortcut is for ${myObject[key]}`);
}



/**
 * Output:
 *
 * js shortcut is for JavaScript
 * cpp shortcut is for C++
 * rb shortcut is for Ruby
 * swift shortcut is for Swift by apple
 */



// ========================== FOR...IN WITH ARRAY ==========================

const languages = ["js", "cpp", "java", "py", "rb"];


// for...in returns indexes in array
for(const lan in languages){

    
    // lan gives indexes:
    // 0, 1, 2, 3, 4

    // console.log(lan);


    // Accessing actual values using index
    console.log(`The programming language is ${languages[lan]}`);
}



/**
 * Output:
 *
 * The programming language is js
 * The programming language is cpp
 * The programming language is java
 * The programming language is py
 * The programming language is rb
 */



// ========================== FOREACH LOOP ==========================

/**
 * forEach():
 *
 * -> Array method
 * -> Executes callback function for each element
 */

const codes = ["js", "cpp", "java", "py", "rb"];



// ========================== FOREACH WITH NORMAL FUNCTION ==========================

codes.forEach(function(item){

    console.log(`The programming language is ${item}`);
});



// ========================== FOREACH WITH ARROW FUNCTION ==========================

codes.forEach((val) => {

    console.log(`The programming language is ${val}`);
});



// ========================== PASSING FUNCTION REFERENCE ==========================

function printMe(item){

    console.log(item);
}


// Passing function reference
codes.forEach(printMe);



// ========================== FOREACH PARAMETERS ==========================

codes.forEach((item, index, arr) => {

    console.log(item, index, arr);
});



/**
 * Parameters:
 *
 * item  -> Current value
 * index -> Current index
 * arr   -> Complete array
 */



// ========================== ARRAY OF OBJECTS ==========================

const myCoding = [

    {
        languageName: "Java",
        fileName: "java"
    },

    {
        languageName: "JavaScript",
        fileName: "js"
    },

    {
        languageName: "Python",
        fileName: "py"
    },

    {
        languageName: "C++",
        fileName: "cpp"
    },

    {
        languageName: "TypeScript",
        fileName: "ts"
    }
];



// Accessing object values inside array
myCoding.forEach((item) => {

    console.log(item.languageName);
});



/**
 * Output:
 *
 * Java
 * JavaScript
 * Python
 * C++
 * TypeScript
 */



// ========================== IMPORTANT DIFFERENCES ==========================

/**
 * for...of
 * -> Gives VALUES
 * -> Works on iterable objects
 */



/**
 * for...in
 * -> Gives KEYS / INDEXES
 * -> Mostly used for objects
 */



/**
 * forEach
 * -> Array method
 * -> Cleaner syntax for arrays
 * -> Cannot use break/continue directly
 */