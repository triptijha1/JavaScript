// ========================== THIS KEYWORD IN JAVASCRIPT ==========================

/**
 * this keyword:
 *
 * -> Refers to the CURRENT CONTEXT (current object)
 * -> Value of 'this' depends on where it is used
 */



// ========================== OBJECT WITH METHOD ==========================

const user = {

    username: "Tripti",
    price: 599,


    // Method inside object
    welcomeMsg: function(){

        console.log(`${this.username}, welcome to website`);

        
        // 'this' refers to current object
        console.log(this);
    }
};



// Function call
 user.welcomeMsg();



/**
 * Output:
 *
 * Tripti, welcome to website
 *
 * {
 *   username: 'Tripti',
 *   price: 599,
 *   welcomeMsg: [Function]
 * }
 */



// ========================== CHANGING OBJECT VALUE ==========================

// Updating object property

user.username = "sam";


// Calling again after update
user.welcomeMsg();



/**
 * Output:
 * sam, welcome to website
 */



// ========================== THIS IN GLOBAL SCOPE ==========================

// In Node.js environment
// global 'this' refers to empty object {}

console.log(this);



/**
 * Output:
 * {}
 */



// ========================== THIS INSIDE NORMAL FUNCTION ==========================

function one(){

    let num = 99;


    // Shows large global object in normal function
    // console.log(this);


    // this.num is undefined
    // because 'num' is local variable
    console.log(this.num);
}

one();



/**
 * Output:
 * undefined
 */



// ========================== ARROW FUNCTION ==========================

/**
 * Arrow functions do NOT have their own 'this'
 *
 * They inherit 'this' from surrounding scope
 */

const two = () => {

    let number = 69;


    // Undefined because arrow functions
    // don't bind their own 'this'
    console.log(this.number);
};


// Function call
two();



/**
 * Output:
 * undefined
 */



// ========================== ARROW FUNCTION WITH EXPLICIT RETURN ==========================

// Explicit return means using return keyword

const addTwo = (num1, num2) => {

    return num1 + num2;
};


console.log(addTwo(59, 39));



/**
 * Output:
 * 98
 */



// ========================== IMPLICIT RETURN ==========================

/**
 * If function has single expression,
 * we can skip:
 * -> return keyword
 * -> curly braces {}
 */

const subTwo = (num1, num2) => (num1 - num2);

console.log(subTwo(59, 39));

/**
 * Output:
 * 20
 */



// ========================== RETURNING OBJECT FROM ARROW FUNCTION ==========================

/**
 * Object must be wrapped inside ()
 * otherwise JS treats {} as function body
 */

const userDetails = () => ({

    username: "tripti",
    age: 24
});

console.log(userDetails());

/**
 * Output:
 * {
 *   username: 'tripti',
 *   age: 24
 * }
 */



// ========================== IMPORTANT DIFFERENCE ==========================

/**
 * Normal Function:
 * -> Has its own 'this'
 *
 * Arrow Function:
 * -> Does NOT have its own 'this'
 * -> Uses surrounding lexical scope
 */



// ========================== ARROW FUNCTION SYNTAX ==========================

/**
 * 1. Explicit Return
 */

const demo1 = (a, b) => {

    return a + b;
};


/**
 * 2. Implicit Return
 */

const demo2 = (a, b) => (a + b);


/**
 * 3. Returning Object
 */

const demo3 = () => ({

    name: "Tripti"
});