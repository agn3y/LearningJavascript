'set strict'
const fruits = ['Apple','Banana','Grapes','Mango','Orange'];

// fruits.forEach ((fruit) => {
//        console.log(fruit);
// })

const MapReturnValue = fruits.map((fruity)=>{
       console.log(fruity);
       return fruity.toUpperCase();
})

console.log(MapReturnValue);

for(const fruit of fruits) {
       console.log(fruit);
}