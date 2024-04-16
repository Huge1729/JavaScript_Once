const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    childFunction();
}

myFunction();
// ******** Closure *********
// const myFunction = () => {
//     let myValue = 2;
//     console.log(myValue);

//     const childFunction = () => {
//          console.log(myValue += 1);
//     }

//     return childFunction;
// }

// const result = myFunction();  // 2
// console.log(result);  // [Function: childFunction]
// result();  // 3 
// result();  // 4 
// result();  // 5



// ********** July se ab Article likhna sure karenge ****************