console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
    The reason is tha an equality check == & comparision > < >= <= works differently

    Comparisions convert null to a number , treating it as 0.
    That's why 'null >= 0' is true & 'null > 0' is false

 */

// Strict check - '===' also checks for data types

console.log(2 == 2);


