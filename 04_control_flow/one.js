// ========================== CONDITIONAL STATEMENTS IN JAVASCRIPT ==========================



// ========================== IF STATEMENT ==========================

// if statement executes block only when condition is TRUE

// const isUserLoggedIn = true;

// if(isUserLoggedIn){

//     console.log(`User is logged in`);
// }



/**
 * Output:
 * User is logged in
 */



// ========================== == vs === ==========================

/**
 * ==  -> Checks only value
 * === -> Checks value + datatype
 */



// Loose equality
// if(2 == "2"){

//     console.log(`Executed`);
// }



/**
 * Output:
 * Executed
 *
 * Because only values are checked
 */



// Strict equality
// if(2 === "2"){

//     console.log(`Executed`);

// }else{

//     console.log(`Statement is not true`);
// }



/**
 * Output:
 * Statement is not true
 *
 * Because datatype is different
 * number !== string
 */



// ========================== SIMPLE IF CONDITION ==========================

// const temperature = 41;

// if(temperature < 50){

//     console.log(
//         `The current temperature is ${temperature}, it is under control`
//     );
// }



// ========================== BLOCK SCOPE ==========================

const score = 200;

if(score > 100){

    // power exists only inside this block
    const power = "fly";

    console.log(`Player power: ${power}`);
}



// Cannot access outside block
// console.log(`Player power: ${power}`);



/**
 * Output:
 * Player power: fly
 */



// ========================== IF ELSE IF ==========================

const balance = 850;


if(balance < 500){

    console.log(`Less than 500`);

}else if(balance < 750){

    console.log(`Less than 750`);

}else if(balance < 900){

    console.log(`Less than 900`);

}else{

    console.log(`Less than 1200`);
}



/**
 * Output:
 * Less than 900
 */



// ========================== LOGICAL OPERATORS ==========================

const userLoggedIn = true;

const debitCard = true;

const loggedInFromGoogle = false;

const loggedInFromEmail = true;



// ========================== && OPERATOR ==========================

/**
 * AND Operator (&&)
 *
 * Returns TRUE only if all conditions are true
 */

if(userLoggedIn && debitCard){

    console.log(`Allow to buy course`);
}



/**
 * Output:
 * Allow to buy course
 */



// ========================== || OPERATOR ==========================

/**
 * OR Operator (||)
 *
 * Returns TRUE if at least one condition is true
 */

if(loggedInFromGoogle || loggedInFromEmail){

    console.log(`User logged in`);
}



/**
 * Output:
 * User logged in
 */



// ========================== SWITCH CASE ==========================

/**
 * switch statement used for multiple conditions
 *
 * break prevents execution of next cases
 */


// switch(key){

//     case value:
//         break;

//     default:
//         break;
// }



const month = 3;


switch(month){

    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Month does not exist");
        break;
}



/**
 * Output:
 * March
 */



// ========================== FALSY VALUES ==========================

/**
 * Values treated as FALSE in JavaScript:
 *
 * false
 * 0
 * -0
 * 0n (BigInt zero)
 * ""
 * null
 * undefined
 * NaN
 */



// ========================== TRUTHY VALUES ==========================

/**
 * Values treated as TRUE:
 *
 * "0"
 * "false"
 * " "
 * []
 * {}
 * function(){}
 */



// ========================== CHECKING EMPTY OBJECT ==========================

const emptyObj = {};


// Object.keys() returns array of object keys

if(Object.keys(emptyObj).length === 0){

    console.log(`Object is empty`);
}



/**
 * Output:
 * Object is empty
 */



// ========================== NULLISH COALESCING OPERATOR ==========================

/**
 * ?? handles:
 * -> null
 * -> undefined
 *
 * Returns first non-null/non-undefined value
 */

let val1;

let val2;



val1 = 5 ?? 10;

val2 = null ?? 10;


console.log(val1);

console.log(val2);



/**
 * Output:
 * 5
 * 10
 */



// undefined example
var val3;

val3 = undefined ?? 10;

console.log(val3);



/**
 * Output:
 * 10
 */



// Multiple values
var val4;

val4 = null ?? 35 ?? 10;

console.log(val4);



/**
 * Output:
 * 35
 */



// ========================== TERNARY OPERATOR ==========================

/**
 * Short form of if-else
 *
 * condition ? true : false
 */

const num = 78;


// Checking even or odd
num % 2 === 0

    ? console.log(`Even`)

    : console.log(`Odd`);



/**
 * Output:
 * Even
 */