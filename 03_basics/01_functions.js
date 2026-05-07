// ========================== FUNCTIONS IN JAVASCRIPT ==========================



// ========================== SIMPLE FUNCTION ==========================

// Function declaration

function sayMyName(){

    console.log("T");
    console.log("r");
    console.log("i");
    console.log("p");
    console.log("t");
    console.log("i");
}



//Function call / execution
sayMyName();



// ========================== FUNCTION WITH PARAMETERS ==========================

// Parameters -> Variables written while creating function

// function add_2_num(num1, num2){

//     console.log(num1 + num2);
// }


// Calling function with arguments
// Arguments -> Actual values passed during function call

// add_2_num(3, 5);
// add_2_num(3, "6");
// add_2_num(7, "a");



// ========================== RETURN KEYWORD ==========================

// return sends value back from function

function add_2_num(num1, num2){

    return num1 + num2;
}


// Storing returned value
const result = add_2_num(3, 5);

console.log("Result", result);



/**
 * Output:
 * Result 8
 */



// ========================== FUNCTION WITH CONDITION ==========================

function loginUserMessage(username){

    // Checking if username is undefined or empty

    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }

    
    // Shorter way to check undefined, null, empty string, false etc.
    if(!username){

        console.log("Please enter a username");

        return;
    }

    
    return `${username} just logged in`;
}



// Passing value
console.log(loginUserMessage("Tripti"));

/**
 * Output:
 * Tripti just logged in
 */



// Without passing argument
console.log(loginUserMessage());

/**
 * Output:
 * Please enter a username
 * undefined
 */



// ========================== REST OPERATOR ==========================

// Rest operator (...) collects multiple values into array

function calculateCartPrice(...num){

    return num;
}


console.log(calculateCartPrice(200, 400, 599, 2000));



/**
 * Output:
 * [200, 400, 599, 2000]
 */



// ========================== OBJECTS IN FUNCTIONS ==========================

// Creating object
const user = {

    username: "Tripti",
    price: 199
};


// Function receiving object as parameter
function handleObject(anyObject){

    console.log(
        `Username is ${anyObject.username} & price is ${anyObject.price}`
    );
}



// Passing object variable
handleObject(user);



/**
 * Output:
 * Username is Tripti & price is 199
 */



// Passing object directly
handleObject({

    username: "sam",
    price: 1000
});



/**
 * Output:
 * Username is sam & price is 1000
 */



// ========================== ARRAYS IN FUNCTIONS ==========================

// Creating array
const myNewArray = [200, 499, 350, 590, 690];



// Function receiving array as parameter
function returnSecondValue(getArray){

    return getArray[1];
}



// Passing array variable
console.log(returnSecondValue(myNewArray));

/**
 * Output:
 * 499
 */



// Passing array directly
console.log(returnSecondValue([300, 899, 500, 240, 150]));



/**
 * Output:
 * 899
 */