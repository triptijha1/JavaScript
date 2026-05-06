const name = "Tripti";
const repoCount = 5;

        // String concatenation 
// const message1 = "Hello, " + name + "! You have " + repoCount + " repositories.";
// console.log(message1);

// Template literals
const message2 = `Hello, ${name}! You have ${repoCount} repositories.`;
console.log(message2);

const gameName = new String("Chess");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); // String prototype
console.log(typeof gameName); // object
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));


const anotherGame = "Chess";
console.log(anotherGame);
console.log(typeof anotherGame); // string

// Comparing string literals and String objects
console.log(gameName === anotherGame); // false
console.log(gameName == anotherGame);  // true (type coercion)

const newString = gameName.substring(0, 3);
console.log(newString); // "Che"

const anotherString = gameName.slice(-7, 3);
console.log(anotherString); // "Che"

const yetAnotherString = gameName.slice(0, -4);
console.log(yetAnotherString); // "C"

const finalString = gameName.slice(-7, -4);
console.log(finalString); // "C"

const str = "   Hii  ";
console.log(str);
console.log(str.trim()); // "Hii"

const url = "https://www.tripti%20jha.com";
console.log(url.replace('%20', '-'));
console.log(url.includes('extrs'));

