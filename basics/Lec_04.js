// +++++++++++++++++++++++++  Function +++++++++++++
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// sayMyName   --> this is just refernce 
// sayMyName()  --> this is execution of function

// ** This is way of passing any number of parameter when you initially didn't have enough info about arg. 

// function calculateCartPrice(...num1){
    // return num1      This will store in the form of Array
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// **  This is how object passed in function 
// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)


// +++++++++++++++++++++ Scopes ++++++++++++++++++
// ********** This is function 
// console.log(addone(5))   also can call before declaration
// function addone(num){            
//     return num + 1
// }

// console.log(addone(5))   also good

// ******This is expression
// addTwo(5) This is not possible
// const addTwo = function(num){
//     return num + 2
// }

// addTwo(5)   Expression can called after declaration



// +++++++++++++++++++++++ Arrows ++++++++++++++++++++++
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  ----> This gives context {} But browser gives window as context of this.


// **Arrow function
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3, 4))


// ++++++++++++++++++++++++++++++ IIFE +++++++++++++++++++++++++++
// Immediately Invoked Function Expressions (IIFE)

// Chai() Analogy
// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();
// ####  The semicolon is must to block the prev context other wise it give error 

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh');

// const counter = (function () {
//     let count = 0;
    
//     return function () {
//       count += 1;
//       return count;
//     };

//    })();
//    console.log(counter())  1
//    console.log(counter())  2


// WHY??
// 1. One of the primary uses for an IIFE is to create private scope.
// 2.  closures to protect variables or methods from being accessed!(Protect from the gobalPollution)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// A) Falsy Values:-   false, 0, -0, BigInt 0n, "", null, undefined, NaN
// B) Truth values:- "0", 'false', " ", [], {}, function(){}

// C) In array
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// D) in object
// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// +++++++++++++++ Interesting Operator +++++++++++++++++++++++++++
// **  Nullish Coalescing Operator (??): null undefined
// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


