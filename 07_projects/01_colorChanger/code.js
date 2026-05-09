// ========================== BACKGROUND COLOR SWITCHER ==========================


// ========================== SELECTING ELEMENTS ==========================

/**
 * querySelectorAll()
 *
 * -> Selects all elements matching selector
 * -> Returns NodeList
 */

const buttons = document.querySelectorAll('.button');



/**
 * querySelector()
 *
 * -> Selects first matching element
 */

const body = document.querySelector("body");



/**
 * IMPORTANT:
 *
 * buttons -> NodeList
 * body    -> Single body element
 */



// ========================== LOOP THROUGH BUTTONS ==========================

/**
 * forEach()
 *
 * -> Iterates through each button
 */

buttons.forEach(function(button){

    // ========================== EVENT LISTENER ==========================

    /**
     * addEventListener()
     *
     * -> Listens for events
     *
     * Here:
     * 'click' event
     */

    button.addEventListener('click', function(e){

        
        /**
         * e = event object
         *
         * e.target
         * -> Element that triggered event
         *
         * e.target.id
         * -> ID of clicked button
         */


        // ========================== GREY BUTTON ==========================

        if(e.target.id === 'grey'){

            body.style.backgroundColor = e.target.id;
        }



        // ========================== WHITE BUTTON ==========================

        if(e.target.id === 'white'){

            body.style.backgroundColor = e.target.id;
        }



        // ========================== BLUE BUTTON ==========================

        if(e.target.id === 'blue'){

            body.style.backgroundColor = e.target.id;
        }



        // ========================== PINK BUTTON ==========================

        if(e.target.id === 'pink'){

            body.style.backgroundColor = e.target.id;
        }

    });

});



// ========================== HOW CODE WORKS ==========================

/**
 * Step 1:
 * Select all buttons
 *
 * Step 2:
 * Loop through each button
 *
 * Step 3:
 * Add click event listener
 *
 * Step 4:
 * Detect clicked button using:
 * e.target.id
 *
 * Step 5:
 * Change body background color
 */



// ========================== EVENT OBJECT ==========================

/**
 * Event object (e):
 *
 * Contains information about event
 *
 * Examples:
 * e.target
 * e.target.id
 * e.type
 * e.clientX
 * e.clientY
 */



// ========================== SHORTER OPTIMIZED VERSION ==========================

/**
 * Same functionality using shorter code
 */

// buttons.forEach((button) => {

//     button.addEventListener('click', (e) => {

//         body.style.backgroundColor = e.target.id;
//     });

// });



/**
 * Why optimized version works?
 *
 * Because:
 * Button IDs already match valid CSS colors
 *
 * grey  -> grey
 * blue  -> blue
 * pink  -> pink
 */



// ========================== IMPORTANT DOM METHODS ==========================

/**
 * querySelector()
 * -> Select first matching element
 *
 *
 * querySelectorAll()
 * -> Select all matching elements
 *
 *
 * addEventListener()
 * -> Attach event to element
 *
 *
 * style.backgroundColor
 * -> Change background color
 */



// ========================== IMPORTANT CONCEPTS ==========================

/**
 * NodeList
 * -> Returned by querySelectorAll()
 * -> Supports forEach()
 *
 *
 * Event Listener
 * -> Waits for user action
 *
 *
 * Event Bubbling
 * -> Events propagate upward in DOM
 */