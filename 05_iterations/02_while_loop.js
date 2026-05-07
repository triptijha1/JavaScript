// ========================== WHILE & DO WHILE LOOP IN JAVASCRIPT ==========================



// ========================== WHILE LOOP ==========================

/**
 * Syntax:
 *
 * while(condition){
 *
 *      code
 * }
 *
 * Loop runs while condition is TRUE
 */



// ========================== BASIC WHILE LOOP ==========================

let idx = 0;

while(idx <= 10){

    console.log(`Value of index is ${idx}`);


    // Increment by 2
    idx = idx + 2;
}



/**
 * Output:
 *
 * Value of index is 0
 * Value of index is 2
 * Value of index is 4
 * Value of index is 6
 * Value of index is 8
 * Value of index is 10
 */



// ========================== LOOPING THROUGH ARRAY ==========================

// Creating array
 let myArr = ["flash", "batman", "superman"];


// Starting index
let arr = 0;


while(arr < myArr.length){

    console.log(`Value is ${myArr[arr]}`);


    // Increment index
    arr++;
}



/**
 * Output:
 *
 * Value is flash
 * Value is batman
 * Value is superman
 */



// ========================== DO WHILE LOOP ==========================

/**
 * Syntax:
 *
 * do{
 *
 *      code
 *
 * }while(condition)
 *
 *
 * IMPORTANT:
 * -> Executes code AT LEAST ONCE
 * -> Condition checked AFTER execution
 */



let score = 11;


do{

    console.log(`Score is ${score}`);

    score++;

}while(score <= 10);




/**
 * Output:
 *
 * Score is 11
 */



// ========================== WHY OUTPUT COMES ONCE ==========================

/**
 * Initial value:
 * score = 11
 *
 * Step 1:
 * do block executes FIRST
 *
 * Prints:
 * Score is 11
 *
 * Step 2:
 * score becomes 12
 *
 * Step 3:
 * Condition checked
 * 12 <= 10 -> FALSE
 *
 * Loop stops
 */



// ========================== DIFFERENCE BETWEEN WHILE & DO WHILE ==========================

/**
 * while loop
 * -> Condition checked BEFORE execution
 * -> May execute zero times
 *
 *
 * do while loop
 * -> Condition checked AFTER execution
 * -> Executes at least one time
 */



// ========================== EXAMPLE COMPARISON ==========================


// ---------- WHILE LOOP ----------

let num1 = 11;

while(num1 <= 10){

    console.log(num1);
}



/**
 * Output:
 * Nothing printed
 */



// ---------- DO WHILE LOOP ----------

let num = 11;

do{

    console.log(num);

}while(num <= 10);



/**
 * Output:
 * 11
 */