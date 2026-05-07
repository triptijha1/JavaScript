// ========================== LOOPS IN JAVASCRIPT ==========================



// ========================== BASIC FOR LOOP ==========================

/**
 * Syntax:
 *
 * for(initialization; condition; increment/decrement){
 *
 *      code
 * }
 */


for(let i = 0; i < 10; i++){

    // Checking condition
    if(i == 5){

        console.log("This is the mid element");
    }
    console.log(i);
}



/**
 * Output:
 *
 * 0
 * 1
 * 2
 * 3
 * 4
 * This is the mid element
 * 5
 * 6
 * 7
 * 8
 * 9
 */



// ========================== NESTED FOR LOOP ==========================

/**
 * Loop inside another loop
 */


for(let i = 0; i < 5; i++){

    for(let j = 1; j <= 5; j++){

        process.stdout.write((i * 5 + j) + " ");
    }

    console.log();
}



/**
 * Output:
 *
 * 1 2 3 4 5
 * 6 7 8 9 10
 * 11 12 13 14 15
 * 16 17 18 19 20
 * 21 22 23 24 25
 */



// ========================== LOOPING THROUGH ARRAY ==========================

// Creating array
let myArr = ["flash", "batman", "superman"];


// Looping array using for loop

for(let i = 0; i < myArr.length; i++){

    console.log(myArr[i]);
}



/**
 * Output:
 *
 * flash
 * batman
 * superman
 */



// ========================== BREAK & CONTINUE ==========================

/**
 * break
 * -> Stops loop completely
 *
 * continue
 * -> Skips current iteration
 */



for(let i = 0; i < 10; i++){

    
    // Skip iteration when i = 3
    if(i == 3){

        continue;
    }


    // Stop loop when i = 7
    if(i == 7){

        console.log("Detected 7");

        break;
    }


    console.log(i);
}



/**
 * Output:
 *
 * 0
 * 1
 * 2
 * 4
 * 5
 * 6
 * Detected 7
 */



// ========================== HOW CONTINUE WORKS ==========================

/**
 * continue:
 *
 * When i = 3
 * -> Remaining code skipped
 * -> Loop moves to next iteration
 *
 * So 3 is NOT printed
 */



// ========================== HOW BREAK WORKS ==========================

/**
 * break:
 *
 * When i = 7
 * -> Loop stops immediately
 * -> No further iterations run
 */



// ========================== IMPORTANT POINTS ==========================

/**
 * for loop components:
 *
 * 1. Initialization
 * 2. Condition
 * 3. Increment / Decrement
 */



// Example
for(let i = 0; i < 3; i++){

    console.log(i);
}



/**
 * Flow:
 *
 * Step 1:
 * let i = 0
 *
 * Step 2:
 * Check condition
 *
 * Step 3:
 * Execute code
 *
 * Step 4:
 * Increment i
 *
 * Step 5:
 * Repeat until condition becomes false
 */