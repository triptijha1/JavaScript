// ========================== GETTERS & SETTERS USING defineProperty ==========================



// ========================== CONSTRUCTOR FUNCTION ==========================

function User(email, password){


    // ========================== INTERNAL PROPERTIES ==========================

    /**
     * Internal/private-like properties
     */

    this._email = email;

    this._password = password;



    // ========================== DEFINE email PROPERTY ==========================

    /**
     * Object.defineProperty()
     *
     * Used to create custom:
     * getters & setters
     */

    Object.defineProperty(this, 'email', {


        // ========================== GETTER ==========================

        get: function(){


            /**
             * Returns uppercase email
             */

            return this._email.toUpperCase();
        },



        // ========================== SETTER ==========================

        set: function(value){


            /**
             * Updates internal value
             */

            this._email = value;
        }
    });



    // ========================== DEFINE password PROPERTY ==========================

    Object.defineProperty(this, 'password', {


        // ========================== GETTER ==========================

        get: function(){


            /**
             * Returns uppercase password
             */

            return this._password.toUpperCase();
        },



        // ========================== SETTER ==========================

        set: function(value){


            /**
             * Updates internal password
             */

            this._password = value;
        }
    });

}



// ========================== CREATE OBJECT ==========================

const chai = new User(

    "chai@chai.com",

    "chai"
);



// ========================== ACCESS EMAIL ==========================

console.log(chai.email);



/**
 * Output:
 *
 * CHAI@CHAI.COM
 */



// ========================== ACCESS PASSWORD ==========================

console.log(chai.password);



/**
 * Output:
 *
 * CHAI
 */



// ========================== UPDATE VALUES ==========================

chai.email = "tripti@gmail.com";

console.log(chai.email);



/**
 * Output:
 *
 * TRIPTI@GMAIL.COM
 */



// ========================== HOW GETTER WORKS ==========================

/**

chai.email

↓

Getter runs automatically

↓

return this._email.toUpperCase()

↓

Uppercase email returned

*/



// ========================== HOW SETTER WORKS ==========================

/**

chai.email = "abc@gmail.com"

↓

Setter runs automatically

↓

this._email updated

*/



// ========================== WHY _email USED ==========================

/**
 * Using:
 *
 * this.email
 *
 * inside getter/setter
 * causes infinite recursion
 */



// ❌ Wrong Example

/*

set: function(value){

    this.email = value
}

*/


/**
 * Why?
 *
 * Setter keeps calling itself forever
 */



// ========================== Object.defineProperty() ==========================

/**
 * Syntax:
 *
 * Object.defineProperty(
 *      object,
 *      propertyName,
 *      descriptor
 * )
 */



// ========================== PROPERTY DESCRIPTOR ==========================

/**
 * Descriptor can contain:
 *
 * get
 * set
 * value
 * writable
 * enumerable
 * configurable
 */



// ========================== DIFFERENCE ==========================

/**
 * ES6 Getter/Setter Syntax
 *
 * Cleaner modern syntax
 */



/**
 * Object.defineProperty()
 *
 * Older/manual approach
 * More control
 */



// ========================== REAL WORLD USE CASE ==========================

/**
 * Used for:
 *
 * ✔ Validation
 * ✔ Formatting
 * ✔ Encapsulation
 * ✔ Secure property handling
 * ✔ Framework internals
 */



// ========================== EXAMPLE VALIDATION ==========================

function BankAccount(balance){

    this._balance = balance;



    Object.defineProperty(this, 'balance', {

        get: function(){

            return `₹${this._balance}`;
        },

        set: function(value){

            if(value < 0){

                console.log("Balance cannot be negative");

                return;
            }

            this._balance = value;
        }
    });
}



const account = new BankAccount(5000);

console.log(account.balance);



/**
 * Output:
 *
 * ₹5000
 */



// ========================== IMPORTANT TERMS ==========================

/**
 * Getter
 * -> Executes during property access
 *
 *
 * Setter
 * -> Executes during property assignment
 *
 *
 * Encapsulation
 * -> Controlled data access
 *
 *
 * Property Descriptor
 * -> Internal property configuration
 */



// ========================== IMPORTANT CONCEPT ==========================

/**
 * JavaScript properties are NOT
 * just simple variables.
 *
 * They can have:
 *
 * ✔ Custom behavior
 * ✔ Validation
 * ✔ Transformation
 * ✔ Access control
 */



// ========================== KEY LEARNING ==========================

/**
 * Object.defineProperty()
 * allows complete control
 * over object properties
 * using:
 *
 * getters
 * setters
 * property descriptors
 */