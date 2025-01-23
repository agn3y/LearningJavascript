'use strict'

// Using for...of loop

const numbers = ['Mango','SitaFal','Orange','Apple','Banana','Watermelon','Papaya','Peach','Strawberry','Grapes','Sugarcane']

for (let i = 1; i < numbers.length; i++){
    console.log(i+ '. ' + numbers[i]);
}

console.log('--------------------------------')

for(const number of numbers) {
    console.log(number);
}

const userName = 'Agney Patel'

for (const name of userName) {
    console.log(name);
}

// Using for...n Loop
// out of context but can useful, accessing elements using key and values and something called entries

const person = {
    Name : 'Agney',
    Height : '6ft 3inch',
    Weight : '60 Kg',
    'Eye-Color' : 'Black',
    'Shoe-Size' : '10',
    Status : 'Trainee'
}

for (let info in person){
    console.log(info + ' : ' + person[info]);
}

const nameAgain = Object.keys(person);
const nameAgain1 = Object.values(person);
const nameEntries = Object.entries(person);

console.log(nameAgain);
console.log(nameAgain1);
console.log(nameEntries);

// to use for of loop on any object we can use some technique

 const fruit_basket = {
     Name : 'Agney',
     Height : '6ft 3inch',
     Weight : '60 Kg',    
    'Eye-Color' : 'Black',
    'Shoe-Size' : '10',
     Status : 'Trainee'
 }

 const jugad = Object.keys(fruit_basket)
 const jugad2 = Object.values(fruit_basket);

for (let newVar of jugad) {
    console.log(newVar);
}
console.log('**************');
for (let newVar2 of jugad2){
    console.log(newVar2);
}