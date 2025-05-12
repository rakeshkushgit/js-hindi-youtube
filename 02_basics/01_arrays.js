// Array --------------

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array (1, 2, 3, 4)
const myHeros = ["shaktiman", "naagraj"]

// console.log(myArr[2])


// Array Methods -------

// myArr.push(6)          //add value
// myArr.push(7)
// myArr.pop(7)        // Remove value 

myArr.unshift(9)          // add in starting
myArr.shift()       // No need assign value remove value from starting  

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);



// Slice, splice ----------------

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);