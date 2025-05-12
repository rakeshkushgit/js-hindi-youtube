const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));   o/p = 124

// console.log(otherNumber.toPrecision(4));   o/p = 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString());   //o/p = 1,000,000 - (this in Us FORMAT)
// console.log(hundreds.toLocaleString('en-IN'));  //o/p = 10,00,000 (India format)




// Math ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
// console.log(Math.abs(-4));     //o/p = 4
// console.log(Math.round(4.6));   // o/p = 5
// console.log(Math.ceil(4.2));   // o/p = 5
// console.log(Math.floor(4.9));  // o/p = 4

// console.log(Math.min(3, 4, 8, 9)); 
// console.log(Math.max(3, 4, 8, 9)); 


console.log(Math.random());               //random always give value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);