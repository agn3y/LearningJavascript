// // //debugger
// function anu(){
//     for (let i = 1; i <= 10; i++) {
//         setTimeout(() => {
//             console.log("Anu Love TuLsi");
//         }, i * 100); // Delay increases with each iteration
//     }
// }

// setTimeout("console.log('Message-1 Displayed')",2000)
// setTimeout("console.log('Message-2 Displayed')",3000)
// setTimeout("console.log('Message-3 Displayed')",4000)
// setTimeout("console.log('Message-4 Displayed')",5000)
// setTimeout(anu(),1000)

// // In the above given code anu() function will get called first because we have used anu() if only we had used anu the code could have run from up to down manner, which we will mention in below given code

// setTimeout("console.log('Message-1 Displayed')",1000)
// setTimeout("console.log('Message-2 Displayed')",2000)
// setTimeout("console.log('Message-3 Displayed')",3000)
// setTimeout("console.log('Message-4 Displayed')",4000)
// setTimeout(anu(),5000)

// //Here last line will get executed first and out of 10 one time line will get executed and other Nine lines will be executed after because of we have called function like function() so by default function will execute first to avoid that we can just use

// setTimeout(anu,5000)

// setTimeout returns a Timer ID that can be used to cancel the scheduled function using clearTimeout  

const timer1 = setTimeout('console.log("HIIiiii-1")',1000)
const timer2 = setTimeout('console.log("HIIiiii-2")',2000)
const timer3 = setTimeout('console.log("HIIiiii-3")',3000)

setTimeout(a,4000);

console.log(timer1);
console.log(timer2);
console.log(timer3);

function a(){
    console.log('Jay Mataji');
}