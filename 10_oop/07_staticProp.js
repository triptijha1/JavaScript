// ========================== STATIC METHODS IN JAVASCRIPT ==========================



// ========================== BASE CLASS ==========================

class User {


    // ========================== CONSTRUCTOR ==========================

    constructor(username){

        this.username = username;
    }

    // ========================== NORMAL METHOD ==========================

    /**
     * Instance method
     *
     * Accessible through object instances
     */

    logMe(){

        console.log(`Username: ${this.username}`);
    }

    // ========================== STATIC METHOD ==========================

    /**
     * static
     *
     * Method belongs to CLASS itself
     *
     * NOT available to object instances
     */

    static createId(){

        return `123`;
    }
}


// ========================== CREATE OBJECT ==========================

const tripti = new User("tripti");



// ========================== CALL NORMAL METHOD ==========================

tripti.logMe();

/**
 * Output:
 *
 * Username: tripti
 */

// ========================== CALL STATIC METHOD ==========================

// console.log(tripti.createId());

/**
 * ❌ ERROR
 *
 * tripti.createId is not a function
 *
 * Because:
 * createId() is static
 */



// ========================== CORRECT WAY ==========================

console.log(User.createId());

/**
 * Output:
 *
 * 123
 */



// ========================== CHILD CLASS ==========================

class Teacher extends User {


    constructor(username, email){


        /**
         * super()
         *
         * Calls parent constructor
         */

        super(username);

        this.email = email;
    }
}



// ========================== CREATE CHILD OBJECT ==========================

const iphone = new Teacher(

    "iphone",

    "i@phone.com"
);



// ========================== ACCESS STATIC METHOD ==========================

console.log(iphone.createId());



/**
 * ❌ ERROR
 *
 * iphone.createId is not a function
 */



// ========================== WHY ERROR OCCURS ==========================

/**
 * Static methods:
 *
 * Belong to CLASS
 *
 * NOT object instances
 *
 * So:
 *
 * ✔ User.createId()
 * ✔ Teacher.createId()
 *
 * ❌ iphone.createId()
 */



// ========================== STATIC METHOD INHERITANCE ==========================

/**
 * Static methods CAN be inherited by classes
 */

console.log(Teacher.createId());



/**
 * Output:
 *
 * 123
 */



// ========================== NORMAL METHOD vs STATIC METHOD ==========================

/**
 * Normal Method
 * -> Accessible through object instance
 *
 * Example:
 * tripti.logMe()
 */



/**
 * Static Method
 * -> Accessible through class only
 *
 * Example:
 * User.createId()
 */



// ========================== INTERNAL CONCEPT ==========================

/**

Static methods are attached directly to class:

User.createId()

NOT to:

User.prototype

*/



// ========================== MEMORY STRUCTURE ==========================

/**

User Class
--------------------------------

User.createId()        ✔ Static

User.prototype.logMe() ✔ Instance Method

*/



// ========================== IMPORTANT TERMS ==========================

/**
 * static
 * -> Class-only method
 *
 *
 * Instance Method
 * -> Accessible through object
 *
 *
 * super()
 * -> Calls parent constructor
 *
 *
 * extends
 * -> Inheritance keyword
 */



// ========================== WHEN TO USE STATIC METHODS ==========================

/**
 * Use static methods when:
 *
 * Method does NOT depend on object data
 *
 * Examples:
 * ✔ Utility functions
 * ✔ Helper methods
 * ✔ ID generators
 * ✔ Validation methods
 */



// ========================== REAL WORLD EXAMPLE ==========================

class MathUtility {


    static add(a, b){

        return a + b;
    }
}



// No object needed
console.log(MathUtility.add(2, 3));



/**
 * Output:
 *
 * 5
 */



// ========================== KEY LEARNING ==========================

/**
 * Static methods:
 *
 * ✔ Belong to class
 * ✔ Shared utility methods
 * ✔ Cannot be accessed by instances
 *
 *
 * Instances only access:
 * prototype methods
 */