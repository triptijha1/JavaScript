// ========================== PROPERTY DESCRIPTORS IN JAVASCRIPT ==========================



// ========================== getOwnPropertyDescriptor ==========================

/**
 * Object.getOwnPropertyDescriptor()
 *
 * Used to inspect property settings
 *
 * Syntax:
 *
 * Object.getOwnPropertyDescriptor(object, property)
 */

const descripter = Object.getOwnPropertyDescriptor(

    Math,

    "PI"
);



// ========================== DISPLAY DESCRIPTOR ==========================

// console.log(descripter);



/**
 * Output:
 *
 * {
 *   value: 3.141592653589793,
 *   writable: false,
 *   enumerable: false,
 *   configurable: false
 * }
 */



// ========================== Math.PI ==========================

console.log(Math.PI);



/**
 * Output:
 *
 * 3.141592653589793
 */



// ========================== TRY TO MODIFY ==========================

// Math.PI = 5;

// console.log(Math.PI);



/**
 * Output:
 *
 * Still:
 * 3.141592653589793
 */



// ========================== WHY VALUE DOES NOT CHANGE ==========================

/**
 * Because:
 *
 * writable: false
 *
 * Property cannot be modified
 */



// ====================================================================
// ========================== CUSTOM OBJECT ============================
// ====================================================================

const chai = {

    name: 'ginger chai',

    price: 250,

    isAvailable: true,



    orderChai: function(){

        console.log("chai nhi bni");
    }
};



// ========================== CHECK PROPERTY DESCRIPTOR ==========================

console.log(

    Object.getOwnPropertyDescriptor(chai, "name")
);



/**
 * Output:
 *
 * {
 *   value: 'ginger chai',
 *   writable: true,
 *   enumerable: true,
 *   configurable: true
 * }
 */



// ========================== defineProperty ==========================

/**
 * Object.defineProperty()
 *
 * Used to modify property settings
 */

Object.defineProperty(chai, 'name', {


    /**
     * writable
     *
     * true  -> value can change
     * false -> value cannot change
     */

    // writable: false,



    /**
     * enumerable
     *
     * true  -> property visible in loops
     * false -> hidden from loops
     */

    enumerable: true,
});



// ========================== CHECK UPDATED DESCRIPTOR ==========================

console.log(

    Object.getOwnPropertyDescriptor(chai, "name")
);



// ========================== LOOP THROUGH OBJECT ==========================

/**
 * Object.entries()
 *
 * Converts object into array
 *
 * Example:
 *
 * [
 *   [key, value],
 *   [key, value]
 * ]
 */

for (let [key, value] of Object.entries(chai)) {


    /**
     * Skip functions
     */

    if (typeof value !== 'function') {


        console.log(`${key} : ${value}`);
    }
}



/**
 * Output:
 *
 * name : ginger chai
 * price : 250
 * isAvailable : true
 */



// ========================== PROPERTY DESCRIPTOR ATTRIBUTES ==========================

/**
 * value
 * -> Actual stored value
 *
 *
 * writable
 * -> Can value be changed?
 *
 *
 * enumerable
 * -> Visible in loops?
 *
 *
 * configurable
 * -> Can property descriptor change?
 */



// ========================== EXAMPLE OF writable ==========================

Object.defineProperty(chai, 'price', {

    writable: false
});



// chai.price = 500; ❌ Will not change

console.log(chai.price);



/**
 * Output:
 *
 * 250
 */



// ========================== EXAMPLE OF enumerable ==========================

Object.defineProperty(chai, 'isAvailable', {

    enumerable: false
});



/**
 * isAvailable will NOT appear
 * in loops now
 */



// ========================== IMPORTANT METHODS ==========================

/**
 * Object.getOwnPropertyDescriptor()
 * -> Inspect property settings
 *
 *
 * Object.defineProperty()
 * -> Modify property behavior
 *
 *
 * Object.entries()
 * -> Convert object into array
 */



// ========================== IMPORTANT CONCEPTS ==========================

/**
 * Property Descriptor
 * -> Internal property metadata
 *
 *
 * Immutable Property
 * -> Property that cannot change
 *
 *
 * Enumerable Property
 * -> Visible during iteration
 *
 *
 * Configurable Property
 * -> Descriptor can/cannot change
 */



// ========================== REAL WORLD USE CASES ==========================

/**
 * Use cases:
 *
 * ✔ Hide sensitive properties
 * ✔ Create read-only values
 * ✔ Control object iteration
 * ✔ Framework internal behavior
 */



// ========================== KEY LEARNING ==========================

/**
 * Every property in JavaScript
 * has hidden metadata:
 *
 * value
 * writable
 * enumerable
 * configurable
 *
 * These settings control
 * property behavior internally
 */