// ========================== ARRAY ITERATION METHODS ==========================



// ========================== FOREACH LOOP ==========================

/**
 * forEach():
 *
 * -> Executes function for every element
 * -> Does NOT return any value
 */

const codes = ["js", "cpp", "java", "py", "rb"];



const values = codes.forEach((item) => {

    console.log(item);


    // forEach does NOT return values
    // return item
});


console.log(values);



/**
 * Output:
 *
 * js
 * cpp
 * java
 * py
 * rb
 *
 * undefined
 */



// ========================== FILTER METHOD ==========================

/**
 * filter():
 *
 * -> Returns a NEW array
 * -> Includes elements that satisfy condition
 */

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// ========================== FILTER WITH IMPLICIT RETURN ==========================

const newNums = nums.filter((num) => num > 4);

console.log(newNums);



/**
 * Output:
 *
 * [5, 6, 7, 8, 9, 10]
 */



// ========================== FILTER WITH EXPLICIT RETURN ==========================

const newNum1 = nums.filter((num) => {

    // If using {} scope,
    // return keyword is mandatory

    return num > 4;
});



// ========================== USING FOREACH INSTEAD OF FILTER ==========================

const newNum = [];


nums.forEach((num) => {

    if(num > 4){

        newNum.push(num);
    }
});


console.log(newNum);



/**
 * Output:
 *
 * [5, 6, 7, 8, 9, 10]
 */



// ========================== ARRAY OF OBJECTS ==========================

const books = [

    {
        title: "Book 1",
        genre: "Fiction",
        publish: 1981,
        edition: 2004
    },

    {
        title: "Book 2",
        genre: "Non-Fiction",
        publish: 1992,
        edition: 2008
    },

    {
        title: "Book 3",
        genre: "History",
        publish: 1999,
        edition: 2007
    },

    {
        title: "Book 4",
        genre: "Non-Fiction",
        publish: 1989,
        edition: 2010
    },

    {
        title: "Book 5",
        genre: "Science",
        publish: 1987,
        edition: 2010
    },

    {
        title: "Book 6",
        genre: "Fiction",
        publish: 1987,
        edition: 2010
    },

    {
        title: "Book 7",
        genre: "History",
        publish: 1986,
        edition: 1996
    },

    {
        title: "Book 8",
        genre: "Science",
        publish: 2011,
        edition: 2026
    },

    {
        title: "Book 9",
        genre: "Non-Fiction",
        publish: 1981,
        edition: 1989
    }
];



// ========================== FILTER OBJECTS ==========================

// Filter books by genre

const userBooks = books.filter(
    (bk) => bk.genre === "History"
);



// Filter using multiple conditions

const userBooks1 = books.filter((bk) => {

    return bk.publish >= 1995 && bk.genre === "History";
});


console.log(userBooks);

console.log(userBooks1);

// ========================== MAP METHOD ==========================

/**
 * map():
 *
 * -> Returns NEW transformed array
 * -> Used to modify elements
 */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// ========================== SIMPLE MAP ==========================

const newNums1 = myNums.map((num) => num + 10);

console.log(newNums1);



/**
 * Output:
 *
 * [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 */



// ========================== METHOD CHAINING ==========================

/**
 * Chaining:
 *
 * Using multiple methods together
 */

const newNums2 = myNums

                .map((num) => num * 10)

                .map((num) => num + 1)

                .filter((num) => num >= 39);


console.log(newNums2);



/**
 * Step 1:
 * Multiply by 10
 *
 * [10,20,30,40...]
 *
 *
 * Step 2:
 * Add 1
 *
 * [11,21,31,41...]
 *
 *
 * Step 3:
 * Filter values >= 39
 *
 * [41,51,61,71,81,91,101]
 */



// ========================== REDUCE METHOD ==========================

/**
 * reduce():
 *
 * -> Reduces array into single value
 * -> Commonly used for:
 *      Sum
 *      Total
 *      Counting
 *      Aggregation
 */

const reduceNums = [1, 2, 3, 4, 5];



// ========================== REDUCE WITH NORMAL FUNCTION ==========================

const myTotal = reduceNums.reduce(function(acc, currVal){

    console.log(
        `accumulator: ${acc} & current value: ${currVal}`
    );


    return acc + currVal;

}, 0);


console.log(myTotal);



/**
 * Flow:
 *
 * acc = accumulator
 * currVal = current value
 *
 * Initial value = 0
 *
 * 0 + 1 = 1
 * 1 + 2 = 3
 * 3 + 3 = 6
 * 6 + 4 = 10
 * 10 + 5 = 15
 */



// ========================== REDUCE WITH ARROW FUNCTION ==========================

const myTotal1 = reduceNums.reduce(
    (acc, currVal) => acc + currVal,
    0
);


console.log(myTotal1);



/**
 * Output:
 *
 * 15
 */



// ========================== REAL WORLD EXAMPLE ==========================

// Shopping cart example

const shoppingCart = [

    {
        itemName: "JS course",
        price: 2999
    },

    {
        itemName: "Ruby course",
        price: 2999
    },

    {
        itemName: "Java course",
        price: 5999
    },

    {
        itemName: "Python course",
        price: 3999
    },

    {
        itemName: "C++ course",
        price: 2999
    }
];



// Calculating total cart price
const priceToPay = shoppingCart.reduce(

    (acc, item) => acc + item.price,

    0
);


console.log(priceToPay);



/**
 * Output:
 *
 * 18995
 */



// ========================== IMPORTANT DIFFERENCES ==========================

/**
 * forEach()
 * -> Executes function
 * -> Does NOT return new array
 */



/**
 * filter()
 * -> Returns filtered array
 * -> Condition based
 */



/**
 * map()
 * -> Returns transformed array
 * -> Modifies values
 */



/**
 * reduce()
 * -> Returns single value
 * -> Used for totals/sums/calculations
 */