const firstElement = document.querySelector("#dummy-id");
const secondElement = document.querySelector("body > section:nth-child(3)");


function removalOfGovt() {
    firstElement.remove();
    console.log('The Government Has Removed H1 Tag');
}



firstElement.addEventListener('click', removalOfGovt);
secondElement.addEventListener('click',function() {
    secondElement.remove();
    console.log('The Government Has Removed Section Tag');
})

// document.querySelector('.dummy-class').onmouseover = function () {
//     firstElement.innerText = 'Reload karo';
// };

// firstElement.onclick = function () {
//         for (let i = 1; i <= 100 ;i++){
//             console.log(`${i}`)
//         }
// };

// document.querySelector('.dummy-class').onmouseover = function () {
    // secondElement.ondblclick = function () {
    //     firstElement.remove();
    // };



////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

//Youtube code
// const h1 = document.querySelector('h1')
// const card = document.querySelector('.card')
// const container = document.querySelector('.container')

// function sayHi() {
//     console.log('Hiii');
// }

// function secondSayHi() {
//     console.log('Second Hi');
// }

// // h1.onclick = sayHi
// // h1.onclick = secondSayHi


// // h1.addEventListener('click', sayHi)
// // h1.addEventListener('click', secondSayHi)

// let count = 1

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     // const newCard = card.cloneNode()
//     // newCard.classList.remove('add-card')
//     console.log(newCard)
//     newCard.innerText = count++
//     container.append(newCard)
// })   