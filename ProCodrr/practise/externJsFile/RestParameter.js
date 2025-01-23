// const Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
function add(...Number) {
    let sum=0;
    for (let i = 0; i<Number.length; i++) {
        sum = sum + Number[i];
    }
    return sum
}

add()