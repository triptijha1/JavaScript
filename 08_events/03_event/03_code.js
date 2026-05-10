// ========================== setInterval & RANDOM COLOR GENERATOR ==========================



// ========================== setInterval EXAMPLE ==========================

/**
 * setInterval(function, delay)
 *
 * -> Executes function repeatedly
 * -> Runs after every given interval
 */


// const sayDate = function(str){

//     console.log(str, Date.now());
// };



/**
 * Runs every 1 second
 */

// const intervalId = setInterval(sayDate, 1000, "hi");



/**
 * Output:
 *
 * hi 1712345678901
 * hi 1712345679901
 * hi 1712345680901
 * ...
 */



// ========================== clearInterval ==========================

/**
 * clearInterval(intervalId)
 *
 * -> Stops repeating interval
 */


// clearInterval(intervalId);



// ========================== RANDOM COLOR GENERATOR ==========================

/**
 * Function generates random HEX color
 *
 * Example:
 * #A3F4B1
 */

const randomColor = function(){


    /**
     * Possible HEX characters
     */

    const hex = "0123456789ABCDEF";


    // Starting color symbol
    let color = '#';



    /**
     * Loop runs 6 times
     * because HEX color contains 6 digits
     */

    for(let i = 0; i < 6; i++){


        /**
         * Math.random()
         * -> Generates decimal number
         *
         * * 16
         * -> Range 0 - 15
         *
         * Math.floor()
         * -> Converts into integer
         */

        color += hex[Math.floor(Math.random() * 16)];
    }


    return color;
};



// ========================== EXAMPLE OUTPUT ==========================

/**
 * Possible outputs:
 *
 * #12AF9C
 * #FF00AB
 * #A1B2C3
 */



// ========================== INTERVAL VARIABLE ==========================

/**
 * Stores interval ID
 */

let intervalId;



// ========================== START CHANGING COLOR ==========================

const startChangingColor = function(){


    /**
     * Prevents multiple intervals
     *
     * If interval already running,
     * don't create another one
     */

    if(!intervalId){


        /**
         * setInterval()
         *
         * Executes function every 1 second
         */

        intervalId = setInterval(changeBgColor, 1000);
    }



    // ========================== CHANGE BACKGROUND ==========================

    function changeBgColor(){


        /**
         * Changes body background color
         */

        document.body.style.backgroundColor = randomColor();
    }
};



// ========================== STOP CHANGING COLOR ==========================

const stopChangingColor = function(){


    /**
     * Stops interval
     */

    clearInterval(intervalId);



    /**
     * Reset interval variable
     */

    intervalId = null;
};



// ========================== EVENT LISTENERS ==========================

/**
 * Start button click
 */

document.querySelector('#start').addEventListener(

    'click',

    startChangingColor
);




/**
 * Stop button click
 */

document.querySelector('#stop').addEventListener(

    'click',

    stopChangingColor
);



// ========================== HOW THIS CODE WORKS ==========================

/**
 * Step 1:
 * User clicks START button
 *
 *
 * Step 2:
 * setInterval starts running
 *
 *
 * Step 3:
 * Every 1 second:
 * randomColor() generates new color
 *
 *
 * Step 4:
 * Background color changes continuously
 *
 *
 * Step 5:
 * User clicks STOP button
 *
 *
 * Step 6:
 * clearInterval stops color changing
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
 * style.backgroundColor
 * -> Change background color
 */



// ========================== IMPORTANT JAVASCRIPT METHODS ==========================

/**
 * setInterval()
 * -> Repeats function continuously
 *
 *
 * clearInterval()
 * -> Stops interval
 *
 *
 * Math.random()
 * -> Random decimal number
 *
 *
 * Math.floor()
 * -> Rounds down number
 */



// ========================== IMPORTANT CONCEPTS ==========================

/**
 * Asynchronous JavaScript
 * -> Interval runs independently
 *
 *
 * Callback Function
 * -> Function passed into setInterval
 *
 *
 * Event Handling
 * -> Start & stop button clicks
 *
 *
 * HEX Color
 * -> 6 digit hexadecimal color code
 */