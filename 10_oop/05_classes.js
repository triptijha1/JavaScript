// ========================== CLASSES IN JAVASCRIPT (ES6) ==========================



// ========================== CLASS SYNTAX ==========================

/**
 * ES6 introduced:
 *
 * class keyword
 *
 * Classes are:
 * Syntactic sugar over prototypes
 */

class User {


    // ========================== CONSTRUCTOR ==========================

    /**
     * constructor()
     *
     * Special method
     * Automatically runs when object created
     */

    constructor(username, email, password){

        this.username = username;

        this.email = email;

        this.password = password;
    }



    // ========================== METHOD ==========================

    /**
     * Class methods automatically
     * stored inside prototype
     */

    encryptPassword(){

        return `${this.password}abc`;
    }



    // ========================== ANOTHER METHOD ==========================

    changeUsername(){

        return `${this.username.toUpperCase()}`;
    }

}



// ========================== CREATE OBJECT ==========================

/**
 * new keyword creates instance
 */

const user = new User(

    "tripti",

    "tripti@gmail.com",

    "123"
);



// ========================== CALL METHODS ==========================

console.log(user.encryptPassword());



/**
 * Output:
 *
 * 123abc
 */



console.log(user.changeUsername());



/**
 * Output:
 *
 * TRIPTI
 */



// ====================================================================
// ========================== BEHIND THE SCENES ========================
// ====================================================================

/**
 * Classes internally work using:
 *
 * Constructor Functions + Prototypes
 */



// ========================== CONSTRUCTOR FUNCTION ==========================

function User(username, email, password){

    
    // Add properties
    this.username = username;

    this.email = email;

    this.password = password;
}



// ========================== PROTOTYPE METHODS ==========================

/**
 * Methods shared among all objects
 */

User.prototype.encryptPassword = function(){

    return `${this.password}abc`;
};



User.prototype.changeUsername = function(){

    return `${this.username.toUpperCase()}`;
};



// ========================== CREATE INSTANCE ==========================

const tea = new User(

    "tea",

    "tea@gmail.com",

    "123"
);



// ========================== CALL METHODS ==========================

console.log(tea.encryptPassword());



/**
 * Output:
 *
 * 123abc
 */



console.log(tea.changeUsername());



/**
 * Output:
 *
 * TEA
 */



// ========================== IMPORTANT CONCEPT ==========================

/**
 * THIS:
 *
 * class User {}
 *
 * is internally converted into:
 *
 * function User(){}
 *
 * + prototype methods
 */



// ========================== CLASS vs FUNCTION ==========================

/**
 * Class Syntax:
 *
 * Cleaner
 * Easier to read
 * Modern syntax
 */



/**
 * Constructor Function:
 *
 * Older syntax
 * Manual prototype handling
 */



// ========================== HOW CLASS WORKS INTERNALLY ==========================

/**

class User{

    constructor(name){

        this.name = name;
    }

    greet(){

        console.log("Hello");
    }
}


Internally becomes:

function User(name){

    this.name = name;
}

User.prototype.greet = function(){

    console.log("Hello");
}

*/



// ========================== PROTOTYPE LINK ==========================

/**
 * Methods are NOT copied
 * into every object
 *
 * Instead:
 * Objects access methods
 * through prototype chain
 */



// ========================== MEMORY EFFICIENCY ==========================

/**
 * Using prototypes:
 *
 * One copy of method shared
 * among all objects
 *
 * Better memory optimization
 */



// ========================== IMPORTANT TERMS ==========================

/**
 * Class
 * -> Blueprint for objects
 *
 *
 * Constructor
 * -> Initializes object
 *
 *
 * Method
 * -> Function inside class
 *
 *
 * Instance
 * -> Object created from class
 *
 *
 * Prototype
 * -> Shared inheritance object
 *
 *
 * new keyword
 * -> Creates new instance
 */



// ========================== INSTANCE CHECK ==========================

console.log(user instanceof User);



/**
 * Output:
 *
 * true
 */



// ========================== KEY LEARNING ==========================

/**
 * JavaScript classes are NOT like
 * traditional OOP languages internally.
 *
 * They are built on:
 *
 * Prototype-based inheritance
 */