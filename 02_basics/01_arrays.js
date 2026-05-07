// ========================== ARRAYS IN JAVASCRIPT ==========================

// Creating an array using array literal
const myArr = [0, 1, 2, 3, 4, 5];

// Accessing array elements using index
// console.log(myArr[0]);



/**
 * ========================== IMPORTANT CONCEPTS ==========================
 *
 * JS array-copy operations create SHALLOW copies
 *
 * Shallow Copy:
 * -> Copy shares the same reference as original object
 * -> Changes may affect original data
 *
 * Deep Copy:
 * -> Copy does NOT share same reference
 * -> Original and copied data are completely separate
 */



// Creating array using Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// Accessing element using index
console.log(myArr2[3]);



// ========================== ARRAY METHODS ==========================

// push() -> Adds element at END of array
myArr2.push(5);
myArr2.push(65);

console.log(myArr2);



// pop() -> Removes last element
myArr2.pop();

console.log(myArr2);



// unshift() -> Adds element at START of array
myArr2.unshift(9);

console.log(myArr2);



// shift() -> Removes first element
myArr2.shift();

console.log(myArr2);



// includes() -> Checks if value exists in array
console.log(myArr2.includes(9));



// indexOf() -> Returns index of element
// If element does not exist -> returns -1
console.log(myArr2.indexOf(8));



// join() -> Converts array into string
const newArr = myArr2.join();

console.log(myArr2);

// Checking datatype after join()
console.log(typeof newArr);



// ========================== SLICE & SPLICE ==========================

console.log("A", myArr);



// ========================== SLICE ==========================

// slice(start, end)

// -> Does NOT modify original array
// -> End index is NOT included

const myn1 = myArr.slice(1, 3);

console.log(myn1); // [1, 2]

console.log("B", myArr);
// Original array remains unchanged
// B [0, 1, 2, 3, 4, 5]



// ========================== SPLICE ==========================

// splice(start, deleteCount)

// -> Modifies original array
// -> End range is included
// -> Removes elements from original array

const myn2 = myArr.splice(1, 3);

console.log(myn2); // [1, 2, 3]

console.log("C", myArr);
// Original array changed
// C [0, 4, 5]



// ========================== IMPORTANT DIFFERENCE ==========================

/**
 * slice()
 * -> Does NOT change original array
 * -> End index NOT included
 *
 * splice()
 * -> Changes original array
 * -> Removes elements from original array
 * -> Includes complete delete range
 */