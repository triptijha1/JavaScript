// ========================== EVENTS IN JAVASCRIPT ==========================



// ========================== onclick EVENT ==========================

/**
 * onclick
 *
 * -> Executes function when element is clicked
 *
 * NOTE:
 * Modern approach is addEventListener()
 */

document.getElementById('owl').onclick = function(){

    alert("owl clicked");
};



/**
 * Output:
 *
 * Alert box:
 * "owl clicked"
 */



// ========================== OLDER EVENT METHODS ==========================

/**
 * attachEvent()
 * -> Older Internet Explorer method
 *
 *
 * jQuery:
 * -> .on()
 */



// ========================== EVENT OBJECT PROPERTIES ==========================

/**
 * Common event properties:
 *
 * type
 * -> Type of event
 *
 *
 * timestamp
 * -> Time when event occurred
 *
 *
 * defaultPrevented
 * -> Checks whether default action prevented
 *
 *
 * target
 * -> Element that triggered event
 *
 *
 * currentTarget
 * -> Element where event listener attached
 *
 *
 * clientX / clientY
 * -> Mouse position inside browser window
 *
 *
 * screenX / screenY
 * -> Mouse position relative to screen
 *
 *
 * altKey / ctrlKey / shiftKey
 * -> Detect special keys
 *
 *
 * keyCode
 * -> Keyboard key code
 */



// ========================== EVENT BUBBLING ==========================

/**
 * Event Bubbling:
 *
 * Event moves:
 *
 * Child -> Parent -> Grandparent
 *
 * Default behavior:
 * false
 */



// ========================== CLICK EVENT ON UL ==========================

document.getElementById('images').addEventListener(

    'click',

    function(e){

        console.log("clicked inside the ul");
    },

    false
);



/**
 * Output when image clicked:
 *
 * clicked inside the ul
 */



// ========================== CLICK EVENT ON IMAGE ==========================

document.getElementById('owl').addEventListener(

    'click',

    function(e){

        console.log("owl clicked");


        /**
         * stopPropagation()
         *
         * Prevents bubbling to parent
         */

        e.stopPropagation();
    },

    false
);



/**
 * Output:
 *
 * owl clicked
 *
 * Parent UL event will NOT execute
 */



// ========================== PREVENT DEFAULT ACTION ==========================

document.getElementById('google').addEventListener(

    'click',

    function(e){

        
        /**
         * preventDefault()
         *
         * Stops default browser action
         *
         * Example:
         * Prevent link navigation
         */

        e.preventDefault();


        // Stop bubbling
        e.stopPropagation();


        console.log("google clicked");
    },

    false
);



/**
 * Output:
 *
 * google clicked
 *
 * Google link will NOT open
 */



// ========================== EVENT DELEGATION ==========================

/**
 * Event Delegation:
 *
 * Instead of adding listener to every image,
 * add one listener to parent element
 */

document.querySelector('#images').addEventListener(

    'click',

    function(e){

        
        /**
         * e.target
         *
         * Element actually clicked
         */

        console.log(e.target.tagName);



        /**
         * Check if clicked element is IMG
         */

        if(e.target.tagName === 'IMG'){


            // Access parent <li>
            let removeIt = e.target.parentNode;



            // ========================== REMOVE ELEMENT ==========================

            /**
             * remove()
             *
             * Removes selected element
             */

            removeIt.remove();



            // ========================== OLDER METHOD ==========================

            /**
             * Older remove method:
             */

            // removeIt.parentNode.removeChild(removeIt)
        }
    },

    false
);



// ========================== HOW REMOVE WORKS ==========================

/**
 * Suppose structure:
 *
 * <li>
 *      <img>
 * </li>
 *
 * e.target
 * -> img
 *
 * e.target.parentNode
 * -> li
 *
 * remove()
 * -> removes complete li
 */



// ========================== EVENT FLOW ==========================

/**
 * Two phases:
 *
 * 1. Capturing Phase
 *    Parent -> Child
 *
 * 2. Bubbling Phase
 *    Child -> Parent
 *
 *
 * Default:
 * Bubbling phase
 */



// ========================== true vs false ==========================

/**
 * false
 * -> Bubbling phase (default)
 *
 *
 * true
 * -> Capturing phase
 */



// ========================== IMPORTANT EVENT METHODS ==========================

/**
 * addEventListener()
 * -> Attach event
 *
 *
 * preventDefault()
 * -> Stop default browser behavior
 *
 *
 * stopPropagation()
 * -> Stop event bubbling
 *
 *
 * remove()
 * -> Remove element
 */



// ========================== IMPORTANT CONCEPTS ==========================

/**
 * Event Bubbling
 * -> Event travels upward
 *
 *
 * Event Delegation
 * -> Attach listener to parent
 *
 *
 * Event Object
 * -> Contains event information
 *
 *
 * DOM Traversal
 * -> parentNode used to access parent
 */