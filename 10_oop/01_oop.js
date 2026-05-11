// ========================== OBJECTS & CONSTRUCTOR FUNCTIONS ==========================



// ========================== OBJECT LITERAL ==========================

/**
 * Object Literal:
 *
 * -> Direct way to create objects
 * -> Stores data in key-value pairs
 */

const user = {

    
    // ========================== PROPERTIES ==========================

    userName: "Tripti",

    loginCount: 9,

    signedIn: true,



    // ========================== METHOD ==========================

    /**
     * Function inside object
     * is called method
     */

    getUserDetails: function(){

        console.log("Got user details from DB");


        /**
         * this
         *
         * Refers to current object
         */

        console.log(`Username is ${this.userName}`);
    }
};



// ========================== ACCESS OBJECT PROPERTIES ==========================

/**
 * Dot notation
 */

console.log(user.userName);



/**
 * Output:
 *
 * Tripti
 */



// ========================== CALL OBJECT METHOD ==========================

console.log(user.getUserDetails());



/**
 * Output:
 *
 * Got user details from DB
 * Username is Tripti
 * undefined
 */


/**
 * Why undefined?
 *
 * Because:
 * getUserDetails() only prints values
 * but does NOT return anything
 */



// ========================== CONSTRUCTOR FUNCTION ==========================

/**
 * Constructor Function:
 *
 * -> Used to create multiple objects
 * -> Blueprint/template for objects
 *
 * Naming convention:
 * First letter capital
 */

function User(username, loginCount, isLoggedIn){


    // ========================== this KEYWORD ==========================

    /**
     * this refers to new object
     * created using new keyword
     */

    this.username = username;

    this.loginCount = loginCount;

    this.isLoggedIn = isLoggedIn;



    // ========================== METHOD ==========================

    this.greeting = function(){

        console.log(`Welcome ${this.username}`);
    };



    /**
     * return this
     *
     * Implicitly happens automatically
     * when using new keyword
     */

    return this;
}



// ========================== WITHOUT new KEYWORD ==========================

/**
 * ❌ Problem:
 *
 * Objects override each other
 */


// const userOne = User("tripti", 7, true);

// const userTwo = User("sam", 12, true);



/**
 * userTwo overrides userOne
 *
 * Because:
 * Function called normally
 * not as constructor
 */



// ========================== USING new KEYWORD ==========================

/**
 * ✅ Correct way
 */

const userOne = new User("tripti", 7, true);

const userTwo = new User("sam", 12, true);



// ========================== DISPLAY OBJECTS ==========================

console.log(userOne);

console.log(userTwo);



/**
 * Output:
 *
 * User {
 *   username: 'tripti',
 *   loginCount: 7,
 *   isLoggedIn: true,
 *   greeting: [Function]
 * }
 *
 *
 * User {
 *   username: 'sam',
 *   loginCount: 12,
 *   isLoggedIn: true,
 *   greeting: [Function]
 * }
 */



// ========================== HOW new KEYWORD WORKS ==========================

/**
 * Step 1:
 * Creates new empty object
 *
 *
 * Step 2:
 * Constructor function called
 *
 *
 * Step 3:
 * this binds to new object
 *
 *
 * Step 4:
 * Properties added to object
 *
 *
 * Step 5:
 * Returns newly created object
 */



// ========================== INSTANCE CHECK ==========================

/**
 * instanceof
 *
 * Checks whether object
 * belongs to constructor
 */

console.log(userOne instanceof User);



/**
 * Output:
 *
 * true
 */



// ========================== IMPORTANT CONCEPTS ==========================

/**
 * Object Literal
 * -> Direct object creation
 *
 *
 * Constructor Function
 * -> Creates multiple objects
 *
 *
 * this
 * -> Refers to current object
 *
 *
 * new keyword
 * -> Creates new instance/object
 *
 *
 * Method
 * -> Function inside object
 */



// ========================== OBJECT LITERAL vs CONSTRUCTOR ==========================

/**
 * Object Literal
 * -> Best for single object
 *
 *
 * Constructor Function
 * -> Best for creating multiple objects
 */