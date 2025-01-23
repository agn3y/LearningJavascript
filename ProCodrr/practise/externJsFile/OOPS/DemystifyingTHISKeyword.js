// const fistArray = [0,1,2,3,4,5,6,7,8]
// const secoArray = [0,1,2,4,6,8,7,7,8]

// fistArray.forEach((value,value2)=>{
//     console.log(value);
//     console.log(value2);
// })

// // secoArray.forEach((value2)=>{
// //     console.log(value2);
// // })

// fistArray.forEach((one,two)=>{
//     if (one === secoArray[two]) {
//         console.log(`${one} : ${two}`);
//     }
// })


// console.log(this);
// const user = {
//     firstName : 'Agney',
//     lastName : 'Patel',
//     Age : 23,
//     getfullName() {
//         function getAge(){
//             console.log(this);
//         }
//     }
// }


// const user = {
//     firstName : 'Agney',
//     lastName : 'Patel',
//     numbers : [1,2,3,4,5,6,7,8,9],
//     oneByone(){
//         this.numbers.forEach((number)=>{
//             console.log(number);
//             console.log(this);
//             // return console.log(number);
//         },this)
//         // return 1
//     }
// }

// class Sayhi {
//     constructor(value) {
//         this.name = value
//         this.namefunction() = function (){ 
//          console.log(this.name)
//          }
//     }
// }

// const newUser = "Agney" 

// function Sayhi(){
//     this.name = 'Agney Patel'
//     console.log(this);
// }
// new Sayhi()
// Sayhi()

const select = document.querySelector("body > section:nth-child(3) > h2")

select.addEventListener('click',function(){
    console.log(this);
})


