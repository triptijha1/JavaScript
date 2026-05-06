"use strict" // treat all JS code as newer version

// alert("Hello, Tripti"); // we are using node.js, not browser

let name = "Tripti"
let age = 24
let isLoggedIn = false

console.log(typeof isLoggedIn);


/*
            DataTypes
                number
                bigint
                boolean
                string
                null => standalone value, empty
                undefined => value not assigned
                symbol => unique
            Objects
*/


/**
    
    Primitive Data types - call by value...creates copy
        String
        Number
        Boolean
        Null
        Undefined
        Symbol
        BigInt

    Reference (Non primitive data type)
        Array
        Objects
        Functions
 */

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const heros = ["Superman", "Batman", "Marvel"];
let myObj = {
    name : "Tripti",
    age : 24,
}

const myFunction = function (){
    console.log("Hii");
}