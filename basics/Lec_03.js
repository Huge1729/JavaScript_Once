// const myArr = [0, 1, 2, 3, 4, 5]        
//   Array consist of any things i.e number , string array, object together 
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)  
// console.log(myArr[1]);    Use this on browser for prototype or methods

// Methods
// 1.  myArr.unshift(9)  add value to starting of array (shift all values to right)
// 2. myarr.shift()

// const newArr = myArr.join()   
// console.log(typeof myArr)    Object
// console.log(typeof newArr)    String

// +++++++++++++++++++ slice, splice +++++++++++++++

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)   => 1,2 (3-1) and No chnage in original array

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)      Change the original array
// console.log("C ", myArr);         => (0 , 4 , 5) 
// console.log(myn2);                   => 1 , 2, 3

// ++++++++++++++++++++++  Combine two arrays
// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  This will push de_heros as array into marvel_heros
// const allHeros = marvel_heros.concat(dc_heros)    This is a way to concatnate the array but here we need an extra array 
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// This is a way to merge to array

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("Hitesh"))     False
// console.log(Array.from("Hitesh"))  [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})) // interesting    []

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));   [ 100, 200, 300 ]



// +++++++++++++++++++++++++++++ Objects +++++++++++++++++++++++++++++
// 1.  singleton 
// a) Singleton is a design pattern that tells us that we can create only one instance of a class 
// and that instance can be accessed globally.
// b) This is one of the basic types of design pattern. It makes sure that the class acts as a single source of entry 
// for all the consumer components that want to access this state. In other words, 
// it provides a common entry point for using global state.

// Object.create

// 2 . object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // mySym: "mykey1",
    [mySym]: "mykey1",            
// # Specific way to declare the symbol in object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])   Always prefer this
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  This is symbol inside the object ++ =>  [Symbol(key1)]: 'mykey1'
// console.log(JsUser.mySym)  This is symbol outside the object  ++ => mySym: 'mykey1',

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


// **** Function in object*****
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
// Hello JS user
// undefined      Know in Future lectures
// Hello JS user, Hitesh
// undefined      
// console.log(JsUser);
// {
//     name: 'Hitesh',
//     'full name': 'Hitesh Choudhary',
//     age: 18,
//     location: 'Jaipur',
//     email: 'hitesh@google.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     greeting: [Function (anonymous)],
//     greetingTwo: [Function (anonymous)],
//     [Symbol(key1)]: 'mykey1'
//   }

// const tinderUser = new Object()   Singloton 
// const tinderUser = {}  Object literals

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  true
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// *** Nested Object **
// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// Merge the Object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// JSON File Structure 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

