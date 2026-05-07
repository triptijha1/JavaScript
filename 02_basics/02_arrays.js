const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"];

// *************************** Push *******************

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]


// ******************* Concat *********************

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


// ****************** Spread *********************

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


// ***************** Flatten Array ******************

// const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const flatten_arr = another_arr.flat(Infinity);
// console.log(flatten_arr);

console.log(Array.isArray("Tripti"));
console.log(Array.from("Tripti")); // [ 'T', 'r', 'i', 'p', 't', 'i' ]
// ** 
console.log(Array.from({name:"Tripti"})); // []

let score1 = 110;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
