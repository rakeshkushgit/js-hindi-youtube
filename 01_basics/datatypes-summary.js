// 1 Primitive datatype ---------------- 
  //  (it's provide copy value, whose we are changes we are changes, that will effect in into copy value not origin value))

  // 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

  let name = "Rakesh"
  const score = 100
  const scoreValue = 100.3

  const isLoggedIn = false
  const outsideTemp = null
  let userEmail;
  const id = Symbol('123')
  const anotherId = Symbol('123')
  const bigNumber = 8478343243208432904n


  // console.log(id === anotherId);


// 2. Reference (Non Primitive datatype) ---------------
  // (it's provide reference, whose we are changes. that will be effect in original values)
   // Array, Objects, Functions0

    const heros = ["shaktiman", "naagraj", "doga"];

    let myObj = {
        name: "Rakesh",
        age: 22,
    }

    const myFunction = function() {
        console.log("Hello world");
    }

    // console.log(typeof myFunction)


    // When we check type of dataypes then return below -------

    // string = string
    // number = number
    // boolean = boolean
    // null = object
    // undefined = undefined
    // Symbol = Symbol
    // bigint = bigint

    // array = object
    // object = object
    // function = function




    // Memory ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // Stack Memory (Primitive),  Heap (Non-Primitive)
    let myYoutubename = "rakeshkush@gmail.com"

    let anothername = myYoutubename
    anothername = "chaiaurcode"

    // console.log(myYoutubename);
    // console.log(anothername);

    let userOne = {
      email: "abc@google.com",
      upi: "user@yml"
    }

    let userTwo = userOne

    userTwo.email = "rakesh@google.com"
    
    // console.log(userOne.email);     o/p rakesh@google.com
    // console.log(userTwo.email);     o/p rakesh@google.com

