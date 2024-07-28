// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

/*
data types : 
1. Primitive {
    a. Number 
    b. string
    c. boolean
    d. Null
    e. Undefined
    f. Symbol
    g. Bigint
}
2. Non-Primitive {
    a. Array
    b. Objects
    c. Function
}
*/

// ***************** Conversion **************
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0




// ******************* Operations ***************
// console.log("1" + 2);    12
// console.log(1 + "2");      12
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2"); 32

// console.log(+true); 1
// console.log(+"");  0

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



// ****************** Comparsion **********************

// Always be Aware & Avoid of this type of Compare

// console.log(null > 0);  F
// console.log(null == 0); F
// console.log(null >= 0); T

// console.log(undefined == 0);  F
// console.log(undefined > 0); F
// console.log(undefined < 0); F

// a) == check only values 
// b) === check datatype as well as Values




// ********************** Strings ******************
// const gameName = new String('hitesh-hc-com')
// console.log(gameName)
// once try by yourself on browser and read about other methods in prototype 

// const newString = gameName.substring(0, 4)  NO negative indexing is allowed
// console.log(newString);

// const anotherString = gameName.slice(0, 4)  In case of negative indexing it print empty Strings
// console.log(anotherString);

// console.log(gameName.split('-'));  [ 'hitesh', 'hc', 'com' ]




// ******************* Maths and Numbers *************************
// const balance = new Number(100)  try this in Browser
// // console.log(balance);    

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// This is used in guessing the number between range min and max randomly



// ************************* Dates Basic ****************************
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString("en-US" , {timeZone: 'Asia/Kolkata'}));
// console.log(typeof myDate);

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.toLocaleString("en-US" , {timeZone: 'Asia/Kolkata'}));
// console.log(newDate.getMonth() + 1); April
// console.log(newDate.getDay());   Thusraday

// ********************** Const Keyword ****************
// Certainly! The keyword const in JavaScript is used to define a constant reference to a value.
// This means that the reference itself cannot be reassigned, but the contents of the value the reference points to can be modified 
//     if the value is an object or array.
// Example
// const myArray = [1, 2, 3];
// myArray = [4, 5, 6]; // Error: Assignment to constant variable.

// myArray[0] = 10; // This is allowed
// console.log(myArray); // Output: [10, 2, 3]


