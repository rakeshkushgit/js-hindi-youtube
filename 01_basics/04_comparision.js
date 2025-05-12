// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);        o/p = false
// console.log(null == 0);       o/p = false
// console.log(null >= 0);       o/p = true


/*The Reason is that an quality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0. 
that why null >=0 is true and null > 0 is false.*/


// console.log(undefined == 0);   o/p = false
// console.log(undefined > 0);    o/p = false
// console.log(undefined < 0);    o/p = false

console.log("2" === 2); 
