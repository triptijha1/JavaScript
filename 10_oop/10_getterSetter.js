// ========================== GETTERS & SETTERS IN JAVASCRIPT ==========================

// ========================== CLASS ==========================

class User {
    // ========================== CONSTRUCTOR ==========================

    constructor(email, password){
        /**
         * These assignments trigger:
         *
         * set email()
         * set password()
         */

        this.email = email;
        this.password = password;
    }



    // ========================== GETTER FOR EMAIL ==========================

    /**
     * get
     *
     * Used to access/modify value
     * while retrieving property
     */

    get email(){
        //  Returns uppercase email
        return this._email.toUpperCase();
    }



    // ========================== SETTER FOR EMAIL ==========================

    /**
     * set
     *
     * Runs automatically when value assigned
     */

    set email(value){
        /**
         * Store actual value internally
         * _email used to avoid:
         * infinite recursion
         */

        this._email = value;
    }
    // ========================== GETTER FOR PASSWORD ==========================

    get password(){
        /**
         * Modify password during access
         */

        return `${this._password}tripti`;
    }
    // ========================== SETTER FOR PASSWORD ==========================

    set password(value){
        /**
         * Store password internally
         */
        this._password = value;
    }
}

// ========================== CREATE OBJECT ==========================

const tripti = new User(

    "t@tripti.ai",

    "abc"
);



// ========================== ACCESS EMAIL ==========================

console.log(tripti.email);



/**
 * Output:
 *
 * T@TRIPTI.AI
 */



// ========================== ACCESS PASSWORD ==========================

console.log(tripti.password);

/**
 * Output:
 *
 * abctripti
 */

// ========================== WHY _email & _password USED ==========================

/**
 * If you write:
 *
 * set email(value){
 *     this.email = value
 * }
 *
 * ❌ Infinite recursion happens
 *
 * Because:
 * setter calls itself repeatedly
 */



// ========================== INTERNAL FLOW ==========================

/**

const tripti = new User(...)
↓
constructor runs
↓
this.email = email
↓
set email(value) executes
↓
value stored in:
this._email

*/

// ========================== GETTER FLOW ==========================

/**
tripti.email
↓
get email() runs
↓
returns uppercase email
*/

// ========================== IMPORTANT CONCEPT ==========================

/**
 * Getters & Setters:
 *
 * Allow controlled access
 * to object properties
 */

// ========================== BENEFITS ==========================

/**
 * ✔ Data validation
 * ✔ Data formatting
 * ✔ Encapsulation
 * ✔ Security
 * ✔ Controlled access
 */



// ========================== REAL WORLD EXAMPLE ==========================

class BankAccount {
    constructor(balance){
        this.balance = balance;
    }

    get balance(){
        return `₹${this._balance}`;
    }
    set balance(value){
        if(value < 0){
            console.log("Balance cannot be negative");
            return;
        }
        this._balance = value;
    }
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
 * -> Executes when property accessed
 *
 * Setter
 * -> Executes when property assigned
 *
 * Encapsulation
 * -> Controlled data access
 *
 * _property
 * -> Internal/private-like property
 */

// ========================== GETTERS vs METHODS ==========================

/**
 * Getter:
 *
 * Access like property
 *
 * user.email
 */



/**
 * Normal method:
 *
 * Requires parentheses
 *
 * user.getEmail()
 */



// ========================== IMPORTANT RULE ==========================

/**
 * Getter & Setter names
 * must match property name
 *
 * Example:
 *
 * get email()
 * set email()
 */



// ========================== KEY LEARNING ==========================

/**
 * Getters and setters provide:
 *
 * Controlled access to properties
 *
 * while making object usage
 * look simple and clean
 */