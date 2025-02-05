const numbers = [ 0, 1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    console.log(currentValue);
    return accumulator + currentValue ;
},99);

console.log(sum); // Output: 109
