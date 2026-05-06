let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);


//let myCreatedDate = new Date(2026, 0, 6);
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2026, 0, 6, 5, 48);
//let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2026");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


newDate.toLocaleString('default', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
});