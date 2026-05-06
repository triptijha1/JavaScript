// ******************************* Numbers ********************************


const score = 400;

const balance = new Number(1000);

console.log(score);
console.log(balance);

console.log(typeof score);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num = 123.456789;

console.log(num.toPrecision(4));
//console.log(num.toExponential(2));

const hundreds = 10000000000;
console.log(hundreds.toLocaleString('en-IN'));

// ******************************* Math Object ************************

console.log(Math);
console.log(Math.abs(-121));
console.log(Math.round(3.6));
console.log(Math.floor(3.6));
console.log(Math.ceil(3.2));
console.log(Math.max(1, 5, 3, 9, 2));
console.log(Math.min(1, 5, 3, 9, 2));
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.random() * (max - min ) + min);