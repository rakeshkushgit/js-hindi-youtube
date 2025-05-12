//----------if we want know type of variable. we know by below

// let score = "33abc"

//console.log(typeof score);
         //(OR)
//console.log(typeof (scrore));


// ------------------------ Convert in Number

let score = "33abc"

let valueNumber = Number(score)

// console.log(typeof valueNumber);
// console.log(valueNumber);


// ------ if value of variable the o/p below
// let score = "33abc"

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN
// "Rakesh" => NaN



// ------------------------ Convert in Boolean

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// let isLoggedIn = "Rakesh"      o/p = true
// let isLoggedIn = ""            o/p = flase

// 1 => true; 0 => false
// "" => false
// "Rakesh" => true


// ------------------------ Convert in Sring

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);           o/p = 33
// console.log(typeof stringNumber);    o/p = string




// ************************************** Operation **************************************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);         Means (2)²
// console.log(2**3);         Means (2)³
// console.log(2/3); 
// console.log(2%3); 

let str1 = "hello"
let str2 = " Rakesh"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);    // if string is 1st then all value treat as a string
// console.log(1 + 2 + "2");    // if string is last then calculatin first then treat as a string


// console.log(+true);     o/p = 1
// console.log(+"");       o/p = 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
