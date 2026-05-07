// ****************** Array **********************

const myArr = [0, 1, 2, 3, 4, 5];
//console.log(myArr[0]);

/**
    JS array-copy operations create shallow copies

    Shallow Copy -> A shallow copy of an object is a copy whose 
        properties share the same reference
        (Point to same underlying values)
        as those of the source object from which copy was made

    Deep Copy -> A deep copy of an object is a copy whose 
        properties do not share the same reference
        (Point to same underlying values)
        as those of the source object from which copy was made

 */

//const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr2[3]);

// myArr2.push(5);
// myArr2.push(65)
// console.log(myArr2);

// myArr2.pop();
// console.log(myArr2);

// myArr2.unshift(9);
// console.log(myArr2);
// myArr2.shift();
// console.log(myArr2);


// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(8));

// const newArr = myArr2.join();
// console.log(myArr2);
// console.log(typeof newArr);

// ************************* Slice & Splice **********************

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1); // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3);
console.log(myn2); // [ 1, 2, 3 ]
console.log("C", myArr); // C [ 0, 4, 5 ]
// splice manipulate original arr  & also include the outer num