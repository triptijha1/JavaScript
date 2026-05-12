// ========================== OBJECT.create() & GETTERS/SETTERS ==========================



// ========================== BASE OBJECT ==========================

const User = {
    // ========================== INTERNAL PROPERTIES ==========================

    _email: 'h@hc.com',
    _password: "abc",

    // ========================== GETTER ==========================
    /**
     * Getter:Executes automatically  when property accessed0
    
     */

    get email(){
        /**
         * Returns uppercase email
         */
        return this._email.toUpperCase();
    },
    // ========================== SETTER ==========================

    /**
     * Setter:Executes automatically when property assigned
     */

    set email(value){
        /**
         * Updates internal property
         */

        this._email = value;
    }
};

// ========================== OBJECT.create() ==========================

/**
 * Object.create() -> Creates new object using another object as prototype
 */

const tea = Object.create(User);
console.log(tea.email);



/**
 * Output:
 *
 * H@HC.COM
 */



// ========================== WHY IT WORKS ==========================

/**
 * tea object does NOT directly contain: 
 * 
 * JavaScript searches: tea
 *   ↓
 * User (prototype)
 *
 * Getter found in User object
 */



// ========================== PROTOTYPE LINK ==========================

/**

tea
 ↓
User
 ↓
Object.prototype
 ↓
null

*/



// ========================== HOW Object.create() WORKS ==========================

/**
 * Object.create(User)
 *
 * Creates empty object:
 *
 * {}
 *
 * and sets:
 *
 * object's prototype = User
 */



// ========================== PROPERTY ACCESS FLOW ==========================

/**

tea.email
↓
Search inside tea object
↓
Not found
↓
Search inside User prototype
↓
Getter found
↓
Getter executes
↓
Returns uppercase email

*/



// ========================== UPDATE EMAIL ==========================

tea.email = "tripti@gmail.com";
console.log(tea.email);

/**
 * Output:
 *
 * TRIPTI@GMAIL.COM
 */



// ========================== IMPORTANT OBSERVATION ==========================

console.log(tea._email);



/**
 * Output:
 *
 * tripti@gmail.com
 */



// ========================== WHY THIS HAPPENS ==========================

/**
 * Setter stores updated value
 * directly inside:
 *
 * tea object
 *
 * NOT inside User object
 */



// ========================== CHECK OWN PROPERTY ==========================

console.log(tea.hasOwnProperty('_email'));



/**
 * Output:
 *
 * true
 */



// ========================== CHECK PROTOTYPE ==========================

console.log(Object.getPrototypeOf(tea));



/**
 * Output:
 *
 * User object
 */



// ========================== OBJECT.create() vs CLASS ==========================

/**
 * Object.create()
 *
 * Direct prototype inheritance
 */



/**
 * class
 *
 * Cleaner abstraction over prototypes
 */



// ========================== IMPORTANT TERMS ==========================

/**
 * Prototype
 * -> Parent object
 *
 *
 * Getter
 * -> Executes on property access
 *
 *
 * Setter
 * -> Executes on property assignment
 *
 *
 * Inheritance
 * -> Access parent properties/methods
 *
 *
 * Object.create()
 * -> Creates object with custom prototype
 */



// ========================== KEY LEARNING ==========================

/**
 * JavaScript inheritance works
 * through prototypes.
 *
 * Object.create()
 * directly links objects
 * using prototype chaining.
 */