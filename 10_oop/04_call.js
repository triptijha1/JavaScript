// ========================== CALL METHOD IN JAVASCRIPT ==========================



// ========================== FIRST FUNCTION ==========================

function SetUsername(username){

  // Simulating: Complex DB operations
    
    // Store username in current object
    this.username = username;
    console.log("called");
}


// ========================== SECOND FUNCTION ==========================

/**
 * Constructor function
 */

function createUser(username, email, password){

    // ========================== USING call() ==========================

    /**
     * call()
     *
     * Calls another function
     * with custom this value
     *
     * Syntax:
     *
     * function.call(thisArg, arg1, arg2...)
     */


    SetUsername.call(this, username);


    /**
     * Why call(this)?
     *
     * Without call():
     *
     * this inside SetUsername()
     * would refer to its own execution context
     *
     *
     * Using:
     * call(this)
     *
     * ensures:
     * current object's this is shared
     */


    // Add more properties
    this.email = email;
    this.password = password;
}



// ========================== CREATE OBJECT ==========================

/**
 * new keyword:
 * Creates new instance/object
 */

const user = new createUser("Tripti", "tripti@fb.com","123");
console.log(user);



/**
 * Output:
 *
 * called
 *
 * createUser {
 *   username: 'Tripti',
 *   email: 'tripti@fb.com',
 *   password: '123'
 * }
 */



// ========================== WHAT HAPPENS WITHOUT call() ==========================

/*

If you write:

SetUsername(username)

instead of:

SetUsername.call(this, username)


Then:

this.username = username

will NOT attach username
to createUser object properly.

Because:
SetUsername gets its own this context.

*/



// ========================== HOW call() WORKS ==========================

/**
 * call():
 *
 * Immediately invokes function
 * with specified this value
 */



// ========================== FLOW OF EXECUTION ==========================

/**

const user = new createUser(...)

Step 1:
new keyword creates empty object

↓

Step 2:
this refers to new object

↓

Step 3:
SetUsername.call(this, username)

↓

Step 4:
username added to current object

↓

Step 5:
email & password added

↓

Step 6:
Object returned

*/



// ========================== call() SYNTAX ==========================

/**
 * function.call(thisArg, arg1, arg2...)
 */



// ========================== SIMPLE EXAMPLE ==========================

const person = {

    fullName: function(city){

        console.log(`${this.name} from ${city}`);
    }
};

const userOne = {

    name: "Tripti"
};


// Borrowing function using call()
person.fullName.call(userOne, "Kolkata");



/**
 * Output:
 *
 * Tripti from Kolkata
 */



// ========================== DIFFERENCE ==========================

/**
 * call()
 * -> Executes immediately
 * -> Arguments passed separately
 */



/**
 * apply()
 * -> Similar to call()
 * -> Arguments passed as array
 */



/**
 * bind()
 * -> Returns new function
 * -> Does NOT execute immediately
 */



// ========================== IMPORTANT CONCEPTS ==========================

/**
 * this
 * -> Refers to current object
 *
 *
 * call()
 * -> Function borrowing
 *
 *
 * Constructor Function
 * -> Creates objects
 *
 *
 * new keyword
 * -> Creates new instance
 */



// ========================== KEY LEARNING ==========================

/**
 * call(this)
 *
 * allows one function
 * to use another function's logic
 * while sharing the same object context
 */