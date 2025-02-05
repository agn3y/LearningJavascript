// const Mouse = function addMe(a,b) {
//     console.log(arguments);
//     return ((a*b)-1)
// }

// console.log(Mouse(3,2,2,3,2,4,5,6,7,7));

// woke

function addMe() {
    let sum = 0;
    for(let i = 0 ; i < arguments.length; i++) {
        sum = sum + arguments[i];
        const argumentsArray = Array.from(arguments);
        console.log(argumentsArray);
    }
    return sum
}
