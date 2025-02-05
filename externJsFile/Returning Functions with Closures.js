// function createMultiplier(multiplier) {
//     return function (number) {
//         return number + multiplier * 2;
//     };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // Output: 9
// console.log(triple(5)); // Output: 11

// function parentFunction() {
//     function unbornChid(a, b) {
//         return a + b;
//     }
//     return unbornChid(923,2353);
// }

// // Call parentFunction to get the unbornChid function
// const childFunction = parentFunction();
// console.log(parentFunction());

// function aad() {
//     return "Hello!";
// }

// console.log(aad); 
// // Output: [Function: aad] (shows the function definition)

// const funcRef = aad; 
// console.log(funcRef); 
// // Output: [Function: aad]


// function parentFunction() {
//     return function () {  
//         const a = 10;
//         return function () {
//             const b = 1110;
//             console.log(a+b);
//         }
//     }
// }

// parentFunction()

// function parentFunction() {
//     return function aa () { // First returned function
//         const a = 10;
//         return function bb () { // Second returned function
//             const b = 1110;
//             console.log(a + b);
//         };
//     };
// }


// parentFunction()()(); // Output: 1120

// const firstFunction = parentFunction();
// console.log(firstFunction);

function outer() {
    const a = 4
    function parent() {
      const b = 6
      return function add() {
        console.log(a + b)
      }
    }
    return parent()
  }
  
  const add1 = outer()
  
  console.dir(add1)
