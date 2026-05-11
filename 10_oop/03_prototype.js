// ========================== PROTOTYPE INHERITANCE IN JAVASCRIPT ==========================



// ========================== EXTRA SPACES EXAMPLE ==========================

// let myName = "tripti     ";

// let mychannel = "triptijha01     ";



/**
 * Problem:
 *
 * String contains extra spaces
 *
 * Need:
 * Actual length without spaces
 */


// console.log(myName.trueLength);



// ========================== ARRAY ==========================

let myHeros = ["thor", "spiderman"];



// ========================== OBJECT ==========================

let heroPower = {

    thor: "hammer",

    spiderman: "sling",



    // ========================== METHOD ==========================

    getSpiderPower: function(){

        console.log(`Spidy power is ${this.spiderman}`);
    }
};



// ========================== ADD METHOD TO OBJECT PROTOTYPE ==========================

/**
 * Object.prototype
 *
 * Every object inherits from Object
 *
 * So this method becomes available
 * in ALL objects
 */

Object.prototype.tripti = function(){

    console.log(`Tripti is present in all objects`);
};



// ========================== ADD METHOD TO ARRAY PROTOTYPE ==========================

/**
 * Array.prototype
 *
 * Method available ONLY for arrays
 */

Array.prototype.heyTripti = function(){

    console.log(`Tripti says hello`);
};



// ========================== CALLING METHODS ==========================

// heroPower is object
heroPower.tripti();



/**
 * Output:
 *
 * Tripti is present in all objects
 */



// myHeros is array
myHeros.tripti();



/**
 * Output:
 *
 * Tripti is present in all objects
 */



// Array specific method
myHeros.heyTripti();



/**
 * Output:
 *
 * Tripti says hello
 */



// ❌ Error because heroPower is object
// heroPower.heyTripti();



/**
 * IMPORTANT:
 *
 * Arrays inherit from:
 *
 * Array -> Object
 *
 * So arrays can access:
 * -> Array methods
 * -> Object methods
 *
 *
 * Objects cannot access:
 * Array specific methods
 */



// ========================== INHERITANCE ==========================

/**
 * Inheritance:
 *
 * One object can access
 * properties/methods of another object
 */



// ========================== BASE OBJECT ==========================

const User = {

    name: "tripti",

    email: "tripti@google.com"
};



// ========================== CHILD OBJECT ==========================

const Teacher = {

    makeVideo: true
};



// ========================== ANOTHER OBJECT ==========================

const TeachingSupport = {

    isAvailable: false
};



// ========================== TA SUPPORT OBJECT ==========================

const TASupport = {

    makeAssignment: 'JS assignment',

    fullTime: true,



    /**
     * __proto__
     *
     * Old way of inheritance
     */

    __proto__: TeachingSupport
};



// ========================== INHERITANCE USING __proto__ ==========================

/**
 * Teacher inherits User
 */

Teacher.__proto__ = User;



/**
 * Teacher can now access:
 *
 * name
 * email
 */



// ========================== MODERN INHERITANCE ==========================

/**
 * Object.setPrototypeOf(child, parent)
 *
 * Modern syntax
 */

Object.setPrototypeOf(TeachingSupport, Teacher);



/**
 * TeachingSupport can access:
 *
 * makeVideo
 */



// ========================== STRING EXAMPLE ==========================

let anotherUsername = "triptijha     ";



// ========================== CUSTOM STRING METHOD ==========================

/**
 * Adding custom method to String prototype
 */

String.prototype.trueLength = function(){


    /**
     * this
     *
     * Refers to current string
     */

    console.log(`${this}`);



    /**
     * trim()
     *
     * Removes extra spaces
     */

    console.log(`True length is: ${this.trim().length}`);
};



// ========================== CALLING CUSTOM METHOD ==========================

anotherUsername.trueLength();



/**
 * Output:
 *
 * triptijha
 * True length is: 9
 */



"triptijha   ".trueLength();



/**
 * Output:
 *
 * triptijha
 * True length is: 9
 */



"iceTea".trueLength();



/**
 * Output:
 *
 * iceTea
 * True length is: 6
 */



// ========================== HOW PROTOTYPE CHAIN WORKS ==========================

/**
 * Example:
 *
 * myHeros.heyTripti()
 *
 * Step 1:
 * JS searches inside myHeros
 *
 * Step 2:
 * Searches Array.prototype
 *
 * Step 3:
 * Finds heyTripti()
 *
 * Step 4:
 * Executes function
 */



// ========================== PROTOTYPE CHAIN ==========================

/**
 * Array
 *   ↓
 * Array.prototype
 *   ↓
 * Object.prototype
 *   ↓
 * null
 */



// ========================== IMPORTANT TERMS ==========================

/**
 * Prototype
 * -> Shared object containing methods
 *
 *
 * Inheritance
 * -> Accessing parent properties/methods
 *
 *
 * Prototype Chain
 * -> Chain of inherited prototypes
 *
 *
 * Object.prototype
 * -> Parent of most objects
 *
 *
 * Array.prototype
 * -> Parent of arrays
 *
 *
 * String.prototype
 * -> Parent of strings
 */



// ========================== IMPORTANT METHODS ==========================

/**
 * trim()
 * -> Removes extra spaces
 *
 *
 * Object.setPrototypeOf()
 * -> Sets inheritance
 *
 *
 * __proto__
 * -> Older inheritance syntax
 */



// ========================== KEY LEARNING ==========================

/**
 * JavaScript supports:
 *
 * Prototype-based inheritance
 *
 * Objects can inherit directly
 * from other objects
 *
 * Everything in JavaScript
 * is connected through prototypes
 */