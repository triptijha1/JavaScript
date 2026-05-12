// ========================== INHERITANCE IN JAVASCRIPT ==========================



// ========================== PARENT CLASS ==========================

/**
 * Base / Parent class
 */

class User {


    // ========================== CONSTRUCTOR ==========================

    constructor(username){

        this.username = username;
    }



    // ========================== METHOD ==========================

    logMe(){

        console.log(`USERNAME is ${this.username}`);
    }
}



// ========================== CHILD CLASS ==========================

/**
 * extends
 *
 * Used for inheritance
 *
 * Teacher inherits User class
 */

class Teacher extends User {


    // ========================== CONSTRUCTOR ==========================

    constructor(username, email, password){


        /**
         * super()
         *
         * Calls parent class constructor
         *
         * Equivalent to:
         * User.call(this, username)
         */

        super(username);


        // Add new properties
        this.email = email;

        this.password = password;
    }



    // ========================== CHILD METHOD ==========================

    addCourse(){

        console.log(
            `A new course was added by ${this.username}`
        );
    }
}



// ========================== CREATE CHILD OBJECT ==========================

const user = new Teacher(

    "tripti",

    "tripti@teacher.com",

    "123"
);



// ========================== ACCESS PARENT METHOD ==========================

/**
 * Child class inherits:
 * logMe()
 */

user.logMe();



/**
 * Output:
 *
 * USERNAME is tripti
 */



// ========================== CREATE PARENT OBJECT ==========================

const masalaChai = new User("masalaChai");



// ========================== CALL METHOD ==========================

masalaChai.logMe();



/**
 * Output:
 *
 * USERNAME is masalaChai
 */



// ========================== instanceof ==========================

/**
 * instanceof
 *
 * Checks inheritance relationship
 */

console.log(user instanceof User);



/**
 * Output:
 *
 * true
 */



// ========================== WHY TRUE? ==========================

/**
 * Because:
 *
 * Teacher inherits User
 *
 * So:
 * user object belongs to:
 *
 * Teacher
 * AND
 * User
 */



// ========================== ACCESS CHILD METHOD ==========================

user.addCourse();



/**
 * Output:
 *
 * A new course was added by tripti
 */



// ========================== INHERITANCE FLOW ==========================

/**

Teacher
   ↓
inherits
   ↓
User


Teacher object can access:
--------------------------------

✔ User properties
✔ User methods
✔ Teacher methods

*/



// ========================== HOW super() WORKS ==========================

/**
 * super()
 *
 * Calls parent constructor
 *
 * Without super():
 * this cannot be used in child class
 */



// ❌ Error Example

/*

class Teacher extends User{

    constructor(username){

        this.username = username; ❌ Error
    }
}

*/



// ========================== INTERNAL WORKING ==========================

/**

class Teacher extends User{

}

Internally:

Teacher.prototype.__proto__ = User.prototype

*/



// ========================== PROTOTYPE CHAIN ==========================

/**

user
 ↓
Teacher.prototype
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null

*/



// ========================== IMPORTANT TERMS ==========================

/**
 * Inheritance
 * -> Child acquires parent properties
 *
 *
 * extends
 * -> Used to inherit class
 *
 *
 * super()
 * -> Calls parent constructor
 *
 *
 * Parent Class
 * -> Base class
 *
 *
 * Child Class
 * -> Derived class
 *
 *
 * instanceof
 * -> Checks inheritance relation
 */



// ========================== 4 PILLARS OF OOP ==========================

/**
 * This example demonstrates:
 *
 * ✔ Inheritance
 * ✔ Encapsulation
 */



// ========================== KEY LEARNING ==========================

/**
 * JavaScript inheritance works using:
 *
 * Prototype inheritance
 *
 * Classes are just cleaner syntax
 * over prototype chaining
 */