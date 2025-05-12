const name = "Rakesh-kush"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rakesh')                // we can declear string like that it's modern way

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('k'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)                  //(we can use negative value into slice method)
console.log(anotherString);

const newStringOne = "   Rakesh   "
console.log(newStringOne)                     //it's take space
console.log(newStringOne.trim())              //but it's not take space


const url = "https://rakesh.com/rakesh%20kush"
console.log(url.replace('%20', '-'))

// O/P ---
// https://rakesh.com/rakesh-kush

console.log(url.includes('rakesh'))

console.log(name.split('-'))
