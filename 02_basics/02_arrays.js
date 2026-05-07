// ========================== ARRAYS IN JAVASCRIPT ==========================

// Creating arrays
const marvel_heros = ["Thor", "Ironman", "Spiderman"];

const dc_heros = ["Superman", "Flash", "Batman"];



// ========================== PUSH METHOD ==========================

// push() adds element at the END of array

// If we push one array into another array,
// the whole array becomes a SINGLE element

marvel_heros.push(dc_heros);
console.log(marvel_heros);

/**
 * Output:
 * [
 *   'Thor',
 *   'Ironman',
 *   'Spiderman',
 *   ['Superman', 'Flash', 'Batman']
 * ]
 */


// ========================== CONCAT METHOD ==========================

// concat() merges two arrays
// Returns a NEW array

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

/**
 * Output:
 * [
 *   'Thor',
 *   'Ironman',
 *   'Spiderman',
 *   'Superman',
 *   'Flash',
 *   'Batman'
 * ]
 */



// ========================== SPREAD OPERATOR ==========================

// Spread operator (...) spreads all elements individually

// Modern way to merge arrays

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);



/**
 * Output:
 * [
 *   'Thor',
 *   'Ironman',
 *   'Spiderman',
 *   'Superman',
 *   'Flash',
 *   'Batman'
 * ]
 */



// ========================== FLAT METHOD ==========================

// flat() converts nested arrays into single array

// Infinity means flatten all nested levels

const another_arr = [
    1,
    2,
    3,
    [4, 5, 6],
    7,
    [6, 7, [4, 5]]
];

const flatten_arr = another_arr.flat(Infinity);

console.log(flatten_arr);



/**
 * Output:
 * [
 *   1, 2, 3, 4, 5,
 *   6, 7, 6, 7, 4, 5
 * ]
 */



// ========================== ARRAY CHECKING ==========================

// Array.isArray() checks whether value is array or not

console.log(Array.isArray("Tripti"));

/**
 * Output:
 * false
 */



// ========================== ARRAY.FROM() ==========================

// Array.from() converts iterable data into array

console.log(Array.from("Tripti"));

/**
 * Output:
 * ['T', 'r', 'i', 'p', 't', 'i']
 */



// ========================== IMPORTANT NOTE ==========================

// Object cannot directly convert into array
// because JavaScript doesn't know whether
// to make array from keys or values

console.log(Array.from({ name: "Tripti" }));

/**
 * Output:
 * []
 */



// ========================== ARRAY.OF() ==========================

// Array.of() creates array from multiple values

let score1 = 110;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



/**
 * Output:
 * [110, 200, 300]
 */