// ========================== PROTOTYPES IN JAVASCRIPT ==========================



// ========================== FUNCTION AS OBJECT ==========================

/**
 * In JavaScript:
 *
 * Functions are also objects
 *
 * Meaning:
 * -> Functions can have properties
 * -> Functions can have methods
 */

function multiplyBy5(num){

    return num * 5;
}



// ========================== ADDING PROPERTY TO FUNCTION ==========================

/**
 * Adding custom property
 */

multiplyBy5.power = 2;



// ========================== FUNCTION CALL ==========================

console.log(multiplyBy5(7));



/**
 * Output:
 *
 * 35
 */



// ========================== ACCESS CUSTOM PROPERTY ==========================

console.log(multiplyBy5.power);



/**
 * Output:
 *
 * 2
 */



// ========================== PROTOTYPE PROPERTY ==========================

console.log(multiplyBy5.prototype);



/**
 * Output:
 *
 * {}
 *
 * Every function automatically
 * gets a prototype property
 */



// ========================== CONSTRUCTOR FUNCTION ==========================

function createUser(username, score){

    
    // Assign values
    this.username = username;

    this.score = score;
}



// ========================== ADD METHOD TO PROTOTYPE ==========================

/**
 * prototype
 *
 * Shared among all instances
 *
 * Saves memory because methods
 * are NOT recreated every time
 */

createUser.prototype.increment = function(){

    this.score++;
};



// ========================== ANOTHER PROTOTYPE METHOD ==========================

createUser.prototype.printMe = function(){

    console.log(`price is ${this.score}`);
};



// ========================== CREATE OBJECTS ==========================

/**
 * new keyword creates instances
 */

const chai = new createUser("chai", 25);

const tea = new createUser("tea", 250);



// ========================== CALL METHOD ==========================

chai.printMe();



/**
 * Output:
 *
 * price is 25
 */



// ========================== USING increment METHOD ==========================

chai.increment();

chai.printMe();



/**
 * Output:
 *
 * price is 26
 */



// ========================== HOW PROTOTYPE WORKS ==========================

/**
 * chai object does NOT directly
 * contain increment() or printMe()
 *
 * JavaScript searches:
 *
 * 1. Object itself
 * 2. Prototype object
 * 3. Prototype chain
 */



// ========================== PROTOTYPE CHAIN ==========================

/**
 * Every object in JavaScript
 * has hidden link to prototype
 *
 * This chain continues until:
 *
 * null
 */



// ========================== IMPORTANT CONCEPT ==========================

/**
 * Prototype Inheritance:
 *
 * Objects inherit properties/methods
 * from another object
 */



// ========================== WHAT HAPPENS WITH new KEYWORD ==========================

/*

Here's what happens behind the scenes when the new keyword is used:


1. A new object is created
--------------------------------
The new keyword creates a new empty object.



2. Prototype gets linked
--------------------------------
The new object gets linked to:

ConstructorFunction.prototype

Meaning:
Object can access prototype methods.



3. Constructor function executes
--------------------------------
Constructor runs with:

this -> newly created object



4. Object gets returned
--------------------------------
If constructor does not explicitly
return another object,

JavaScript automatically returns:
the newly created object.

*/



// ========================== VISUAL FLOW ==========================

/**

const chai = new createUser("chai", 25)

Step 1:
new object created

↓

Step 2:
Prototype linked

↓

Step 3:
Constructor called

↓

Step 4:
Properties assigned

↓

Step 5:
Object returned

*/



// ========================== INSTANCE CHECK ==========================

console.log(chai instanceof createUser);



/**
 * Output:
 *
 * true
 */



// ========================== IMPORTANT TERMS ==========================

/**
 * Prototype
 * -> Shared object containing methods
 *
 *
 * Prototype Chain
 * -> Chain of inherited prototypes
 *
 *
 * Constructor Function
 * -> Function used to create objects
 *
 *
 * Instance
 * -> Object created from constructor
 *
 *
 * Inheritance
 * -> Accessing parent properties/methods
 */



// ========================== WHY USE PROTOTYPES? ==========================

/**
 * Without prototype:
 *
 * Every object gets separate copy
 * of methods
 *
 * Higher memory usage
 */



/**
 * With prototype:
 *
 * Methods shared among all objects
 *
 * Better memory efficiency
 */