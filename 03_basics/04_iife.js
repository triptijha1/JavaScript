// ========================== IIFE IN JAVASCRIPT ==========================

/**
 * IIFE = Immediately Invoked Function Expression
 *
 * Meaning:
 * -> Function executes immediately after creation
 *
 * Syntax:
 * (function definition)();
 *
 * WHY USE IIFE?
 * -> Avoid global scope pollution
 * -> Create private scope
 * -> Execute code immediately
 */



// ========================== NAMED IIFE ==========================

/**
 * Named IIFE:
 * -> Function has a name
 * -> Useful for debugging
 */

(function DB(){

    console.log(`DB connected`);

})(); // Semicolon is IMPORTANT



/**
 * Output:
 * DB connected
 */



// ========================== IMPORTANT NOTE ==========================

/**
 * Why semicolon (;) is needed?
 *
 * Because IIFE executes immediately.
 *
 * Without semicolon,
 * JavaScript may not understand
 * where previous IIFE ended.
 */



// ========================== ARROW FUNCTION IIFE ==========================

/**
 * Arrow Function IIFE
 *
 * -> Anonymous arrow function
 * -> Executes immediately
 */

((name) => {

    console.log(`DB connected successfully, ${name}`);

})('Tripti');



/**
 * Output:
 * DB connected successfully, Tripti
 */



// ========================== HOW IIFE WORKS ==========================

/**
 * Step 1:
 * Function wrapped inside ()
 *
 * This converts function into EXPRESSION
 *
 * Example:
 * (function(){})
 *
 *
 * Step 2:
 * Another () executes function immediately
 *
 * Example:
 * (function(){})();
 */



// ========================== TYPES OF IIFE ==========================

/**
 * 1. Named IIFE
 */

(function hello(){

    console.log("Hello");

})();



/**
 * 2. Anonymous IIFE
 */

(function(){

    console.log("Anonymous");

})();



/**
 * 3. Arrow Function IIFE
 */

(() => {

    console.log("Arrow IIFE");

})();



/**
 * 4. IIFE WITH PARAMETERS
 */

((username) => {

    console.log(`Welcome ${username}`);

})("Tripti");



// ========================== IMPORTANT INTERVIEW POINT ==========================

/**
 * Difference:
 *
 * Normal Function
 * -> Declared first
 * -> Called later
 *
 * IIFE
 * -> Declared and executed immediately
 */

