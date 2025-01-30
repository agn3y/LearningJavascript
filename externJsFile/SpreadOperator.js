const newArr = [1,3,3,3,3,3,3,3,2]
const newArr1 = [1,3,3,3,3,3,3,3,2]
const Gopal = [...newArr,...newArr1]

const newObj = {
    userName : 'Agney',
    lastName : 'Patel',
    age : 23,
    AnyElse : 'No',
};


function add() {
    console.log(arguments);
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }

    return sum
}

console.log(add(...Gopal)); // Output: 48

const Mouse = [...newArr, ...newArr1 ]

const Mouse1 = {...newObj, FavouriteTeam: 'Portugal'}

console.log(Mouse);

console.log(Mouse1);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
