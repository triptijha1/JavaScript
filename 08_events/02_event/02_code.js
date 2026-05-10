// ========================== setTimeout & clearTimeout ==========================



// ========================== SIMPLE FUNCTION ==========================

/**
 * Function expression
 *
 * Stores function inside variable
 */

const sayTripti = function(){

    console.log("Tripti");
};



/**
 * Output when executed:
 *
 * Tripti
 */



// ========================== FUNCTION TO CHANGE TEXT ==========================

/**
 * Changes text of h1 element
 */

const changeText = function(){

    /**
     * querySelector()
     *
     * Selects first matching element
     */

    document.querySelector('h1').innerHTML = "Best resource for JS";
};



/**
 * innerHTML
 *
 * Updates HTML/text content inside element
 */



// ========================== setTimeout ==========================

/**
 * setTimeout(function, delay)
 *
 * -> Executes function after specified time
 *
 * delay:
 * Measured in milliseconds
 *
 * 2000ms = 2 seconds
 */

const stopMe = setTimeout(changeText, 2000);



/**
 * After 2 seconds:
 *
 * h1 text becomes:
 * "Best resource for JS"
 */



// ========================== clearTimeout ==========================

/**
 * clearTimeout(timeoutID)
 *
 * -> Stops scheduled timeout
 */

document.querySelector('#stop').addEventListener(

    'click',

    function(){


        // Cancels timeout
        clearTimeout(stopMe);
    }
);



/**
 * If user clicks button before 2 seconds:
 *
 * -> changeText() will NOT execute
 * -> h1 text remains unchanged
 */



// ========================== HOW THIS CODE WORKS ==========================

/**
 * Step 1:
 * setTimeout schedules changeText()
 *
 *
 * Step 2:
 * Timer starts for 2 seconds
 *
 *
 * Step 3:
 * If user clicks #stop button
 * before 2 seconds:
 *
 * clearTimeout(stopMe)
 * cancels scheduled function
 *
 *
 * Step 4:
 * If timeout not cleared:
 * changeText() executes
 */



// ========================== IMPORTANT DOM METHODS ==========================

/**
 * querySelector()
 * -> Select HTML element
 *
 *
 * addEventListener()
 * -> Attach event listener
 *
 *
 * innerHTML
 * -> Change HTML/text content
 */



// ========================== IMPORTANT JAVASCRIPT METHODS ==========================

/**
 * setTimeout()
 * -> Executes function once after delay
 *
 *
 * clearTimeout()
 * -> Stops scheduled timeout
 */



// ========================== IMPORTANT CONCEPTS ==========================

/**
 * Asynchronous JavaScript
 * -> Timer runs independently
 *
 *
 * Callback Function
 * -> Function passed as argument
 *
 *
 * Event Handling
 * -> Click event listener
 */