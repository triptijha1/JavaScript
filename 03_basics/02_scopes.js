// ========================== SCOPE IN JAVASCRIPT ==========================

// Global scope variable
// Accessible everywhere

// let a = 300;



// ========================== BLOCK SCOPE ==========================

// Variables declared inside {} are block scoped

if(true){

    let a = 10;      // Block scope
    const b = 20;    // Block scope
    var c = 30;      // NOT block scope

    console.log("Inner: ", a);

}



// let & const cannot be accessed outside block
// console.log(a);
// console.log(b);


// var ignores block scope
// Accessible outside block
console.log(c);



/**
 * IMPORTANT:
 *
 * let   -> Block scope
 * const -> Block scope
 * var   -> Function scope / global scope
 */



// ========================== NESTED FUNCTIONS ==========================

// Inner functions can access outer function variables
// This is called Lexical Scope

function one(){

    const username = "Tripti";


    function two(){

        const website = "github";

        // Inner function accessing outer variable
        console.log(username);
    }


    // Outer function CANNOT access inner variables
    // console.log(website);


    two();
}


// Function call
one();



/**
 * Output:
 * Tripti
 */



// ========================== NESTED IF BLOCKS ==========================

if(true){

    const username = "tripti";

    if(username === "tripti"){

        const website = " github";

        console.log(username + website);
    }

    // website only exists inside inner block
    // console.log(website);
}

// username only exists inside outer block
// console.log(username);



/**
 * Output:
 * tripti github
 */



// ========================== HOISTING ==========================

// Hoisting means:
// Function declarations can be used BEFORE declaration

console.log(addone(5));

function addone(num){

    return num + 1;
}

/**
 * Output:
 * 6
 */



// ========================== FUNCTION EXPRESSION ==========================

// Function stored inside variable

// Cannot access before initialization
// console.log(addTwo(6)); // Error



const addTwo = function(num){

    return num + 2;
};

console.log(addTwo(6));

/**
 * Output:
 * 8
 */



// ========================== IMPORTANT DIFFERENCE ==========================

/**
 * Function Declaration
 *
 * -> Hoisted completely
 * -> Can call before declaration
 */

function demo(num){

    return num;
}



/**
 * Function Expression
 *
 * -> Stored inside variable
 * -> NOT fully hoisted
 * -> Cannot call before declaration
 */

const demo2 = function(num){

    return num;
};

// ========================== CLOSURE IN JAVASCRIPT ==========================

/**
 * Closure:
 *
 * A closure is created when a function remembers
 * variables from its outer lexical scope even after
 * the outer function has finished execution.
 */



function outest(){

    // Variable inside outest()
    var c = 200;



    // Outer function
    function outer(b){


        // Inner function
        function inner(){

            // Accessing variables from different scopes
            console.log(a, b, c);
        }


        // Block scoped variable
        let a = 10;


        // Returning inner function
        // NOT calling it immediately
        return inner;
    }


    // Returning outer function
    return outer;
}



// Global variable
let a = 100;

var close = (outest())("Hii, Tripti");

// Calling outest()
// outest() returns outer function

// Then passing argument to outer()
// outer("Hii, Tripti") returns inner function



// Executing returned inner function
close();



/**
 * Output:
 * 10 "Hii, Tripti" 200
 */



// ========================== FLOW OF EXECUTION ==========================

/**
 * Step 1:
 * outest() executes
 *
 * c = 200
 *
 * Returns outer function
 */



/**
 * Step 2:
 * outer("Hii, Tripti") executes
 *
 * b = "Hii, Tripti"
 * a = 10
 *
 * Returns inner function
 */



/**
 * Step 3:
 * close() executes inner function
 *
 * inner() remembers:
 * -> a from outer()
 * -> b from outer(b)
 * -> c from outest()
 *
 * This memory preservation is called Closure
 */



// ========================== IMPORTANT NOTE ==========================

/**
 * Why output is NOT:
 * 100 "Hii, Tripti" 200
 *
 * Because:
 * inner() first searches for variable 'a'
 * in its nearest lexical scope.
 *
 * It finds:
 * let a = 10;
 *
 * So local scope value is used instead of global value.
 */



// ========================== LEXICAL SCOPE CHAIN ==========================

/**
 * inner() searches variables in this order:
 *
 * 1. Its own scope
 * 2. Parent function scope
 * 3. Grandparent scope
 * 4. Global scope
 */