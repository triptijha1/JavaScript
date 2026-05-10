// ========================== KEYBOARD EVENT PROJECT ==========================



// ========================== SELECTING ELEMENT ==========================

/**
 * getElementById()
 *
 * -> Selects element using ID
 */

const insert = document.getElementById('insert');



/**
 * insert:
 * Container where keyboard information
 * will be displayed
 */



// ========================== KEYDOWN EVENT ==========================

/**
 * keydown event
 *
 * -> Triggered whenever key is pressed
 */

window.addEventListener('keydown', (e) => {
     // innerHTML -> Replaces HTML content dynamically
     
    insert.innerHTML = `

        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space": e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});



// ========================== EVENT OBJECT PROPERTIES ==========================

/**
 * e.key
 *
 * -> Actual key pressed
 *
 * Example:
 * a
 * A
 * Enter
 * Shift
 */



/**
 * e.keyCode
 *
 * -> Numeric code of key
 *
 * Example:
 * A -> 65
 * Enter -> 13
 *
 * NOTE:
 * Deprecated in modern JavaScript
 */



/**
 * e.code
 *
 * -> Physical keyboard key
 *
 * Example:
 * KeyA
 * Enter
 * Space
 */



// ========================== SPECIAL SPACE KEY HANDLING ==========================

/**
 * If user presses SPACE:
 *
 * e.key gives:
 * " "
 *
 * So ternary operator converts it into:
 * "Space"
 */






// ========================== HOW THIS CODE WORKS ==========================

/**
 * Step 1:
 * User presses keyboard key
 *
 *
 * Step 2:
 * keydown event triggers
 *
 *
 * Step 3:
 * Event object stores key details
 *
 *
 * Step 4:
 * innerHTML dynamically updates table
 *
 *
 * Step 5:
 * Key information displayed on webpage
 */



// ========================== IMPORTANT DOM METHODS ==========================

/**
 * getElementById()
 * -> Select element by ID
 *
 *
 * addEventListener()
 * -> Attach event listener
 *
 *
 * innerHTML
 * -> Update HTML content
 */



// ========================== IMPORTANT JAVASCRIPT CONCEPTS ==========================

/**
 * Event Handling
 * -> Detect keyboard events
 *
 *
 * Template Literals (` `)
 * -> Multi-line dynamic HTML
 *
 *
 * Ternary Operator
 * -> Short condition syntax
 *
 *
 * Keyboard Events
 * -> keydown, keyup, keypress
 */



// ========================== COMMON KEYBOARD EVENTS ==========================

/**
 * keydown
 * -> Triggered when key pressed
 *
 *
 * keyup
 * -> Triggered when key released
 *
 *
 * keypress
 * -> Older event (deprecated)
 */