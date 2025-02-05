const evenNumbers = [0, 2, 10, 4, 61, 8]


const result1 = evenNumbers.some((num, i) => {
    if(num % 2 === 1) {
        console.log(`On ${i}th  Place`);
    }
    return num % 2 === 1
})

console.log(result1);

const result2 = evenNumbers.every((num) => {
    return num % 2 === 0
})

console.log(result2);