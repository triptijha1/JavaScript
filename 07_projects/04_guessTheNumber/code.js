// ========================== NUMBER GUESSING GAME ==========================



// ========================== GENERATE RANDOM NUMBER ==========================

/**
 * Math.random()
 * -> Generates random decimal number between 0 and 1
 *
 * * 100
 * -> Expands range to 0 - 99
 *
 * + 1
 * -> Makes range 1 - 100
 *
 * parseInt()
 * -> Converts decimal into integer
 */

let randomNumber = parseInt(Math.random() * 100 + 1);



// ========================== SELECTING DOM ELEMENTS ==========================

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');



// ========================== CREATE PARAGRAPH ELEMENT ==========================

/**
 * Used later for:
 * Start New Game button
 */

const p = document.createElement('p');



// ========================== GAME VARIABLES ==========================

// Stores previous guesses
let prevGuess = [];


// Tracks number of guesses
let numGuess = 1;


// Controls whether game is active
let playGame = true;



// ========================== START GAME ==========================

if(playGame){

    
    /**
     * addEventListener()
     *
     * -> Waits for click event
     */

    submit.addEventListener('click', function(e){

        
        /**
         * preventDefault()
         *
         * Prevents form submission/reload
         */

        e.preventDefault();


        // Convert input value into number
        const guess = parseInt(userInput.value);


        // Validate user input
        validateGuess(guess);
    });
}



// ========================== VALIDATE USER INPUT ==========================

function validateGuess(guess){

    
    // Check if input is NOT a number
    if(isNaN(guess)){

        alert('Please enter a valid number');
    }


    // Number less than 1
    else if(guess < 1){

        alert('Please enter a number greater than 1');
    }


    // Valid input
    else{

        
        // Store guess
        prevGuess.push(guess);


        /**
         * Game over after 10 attempts
         */

        if(numGuess === 11){

            displayGuess(guess);

            displayMessage(
                `Game over. Random number was ${randomNumber}`
            );

            endGame();

        }else{

            displayGuess(guess);

            checkGuess(guess);
        }
    }
}



// ========================== CHECK USER GUESS ==========================

function checkGuess(guess){

    
    // Correct guess
    if(guess === randomNumber){

        displayMessage(`You guessed it right`);

        endGame();
    }


    // Guess too low
    else if(guess < randomNumber){

        displayMessage(`Number is too low`);
    }


    // Guess too high
    else if(guess > randomNumber){

        displayMessage(`Number is too high`);
    }
}



// ========================== DISPLAY GUESSES ==========================

function displayGuess(guess){

    
    // Clear input box
    userInput.value = '';


    // Show guessed numbers
    guessSlot.innerHTML += `${guess} `;


    // Increase guess count
    numGuess++;


    // Show remaining guesses
    remaining.innerHTML = `${11 - numGuess}`;
}



// ========================== DISPLAY MESSAGE ==========================

function displayMessage(message){

    
    /**
     * innerHTML
     *
     * Displays result message
     */

    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}



// ========================== END GAME ==========================

function endGame(){

    
    // Clear input field
    userInput.value = '';


    // Disable input field
    userInput.setAttribute('disabled', '');


    // Add class
    p.classList.add('button');


    // Add new game button
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;


    // Append button to page
    startOver.appendChild(p);


    // Stop current game
    playGame = false;


    // Start new game option
    newGame();
}



// ========================== NEW GAME FUNCTION ==========================

function newGame(){

    
    // Select new game button
    const newGameButton = document.querySelector('#newGame');



    // Add click event
    newGameButton.addEventListener('click', function(e){

        
        // Generate new random number
        randomNumber = parseInt(Math.random() * 100 + 1);


        // Reset guesses array
        prevGuess = [];


        // Reset guess count
        numGuess = 1;


        // Clear displayed guesses
        guessSlot.innerHTML = '';


        // Reset remaining guesses
        remaining.innerHTML = `${11 - numGuess}`;


        // Enable input field again
        userInput.removeAttribute('disabled');


        // Remove start new game button
        startOver.removeChild(p);


        // Restart game
        playGame = true;
    });
}



// ========================== GAME FLOW ==========================

/**
 * Step 1:
 * Generate random number
 *
 * Step 2:
 * User enters guess
 *
 * Step 3:
 * Validate input
 *
 * Step 4:
 * Compare with random number
 *
 * Step 5:
 * Display:
 * -> Correct
 * -> Too high
 * -> Too low
 *
 * Step 6:
 * End game after:
 * -> Correct guess
 * -> 10 attempts
 *
 * Step 7:
 * Allow user to restart game
 */



// ========================== IMPORTANT DOM METHODS ==========================

/**
 * querySelector()
 * -> Select HTML element
 *
 *
 * addEventListener()
 * -> Attach event
 *
 *
 * createElement()
 * -> Create new element
 *
 *
 * appendChild()
 * -> Add element to DOM
 *
 *
 * setAttribute()
 * -> Add attribute
 *
 *
 * removeAttribute()
 * -> Remove attribute
 *
 *
 * classList.add()
 * -> Add CSS class
 *
 *
 * removeChild()
 * -> Remove child element
 */



// ========================== IMPORTANT JAVASCRIPT CONCEPTS ==========================

/**
 * Math.random()
 * -> Generate random number
 *
 *
 * parseInt()
 * -> Convert string/decimal to integer
 *
 *
 * Arrays
 * -> Store previous guesses
 *
 *
 * Event Handling
 * -> Handle button clicks
 *
 *
 * Conditional Statements
 * -> Compare guesses
 */