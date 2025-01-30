const h1 = document.querySelector('h1')
const addCardButton = document.querySelector('.card')
const container = document.querySelector('.container')
const newSpan = document.querySelector('#newSpan')
const draggable = document.querySelector('#draggable')

let count = 0

// addCardButton.addEventListener('click', (event) => {
//     // console.log(event)
//     console.log(event.type);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerHTML =  ++count;
//     container.appendChild(newCard)
// })

// addCardButton.addEventListener('dblclick', (event) => {
//     // console.log(event)
//     console.log(event.type);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerHTML =  ++count;
//     container.appendChild(newCard)
// })

// // h1.addEventListener('keypress', (event)=>{
// //     console.log(event.key);
// //     newSpan.innerText = event.key
// // })

// addCardButton.addEventListener('click', (event) => {
//     // console.log(event)
//     console.log(event.type);
// })

// // addCardButton.addEventListener('mousedown',(event) => {
// //     console.log(event.type);
// //     const newCard = document.createElement('div')
// //     newCard.classList.add('card')
// //     newCard.innerHTML =  ++count;
// //     container.appendChild(newCard)
// // })

// // addCardButton.addEventListener('mouseup',(event) => {
// //     console.log(event.type);
// //     const newCard = document.createElement('div')
// //     newCard.classList.add('card')
// //     newCard.innerHTML =  ++count;
// //     container.appendChild(newCard)
// // })

// addCardButton.addEventListener('mouseenter',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('mouseleave',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('mousemove',(event) => {
//     console.log(event.type);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerHTML =  ++count;
//     container.appendChild(newCard)
// })

// addCardButton.addEventListener('mouseout',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('mouseover',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('wheel',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })


// document.addEventListener('scroll',(event) => {
//     //use this with mouse move
//     console.log(event.type);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerHTML =  ++count;
//     container.appendChild(newCard)
// })

// addCardButton.addEventListener('touchstart',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('touchend',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('touchmove',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('drag',(event) => {
//     console.log(event.type);
// })

// addCardButton.addEventListener('mousemove',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('pointermove',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

// addCardButton.addEventListener('pointerenter',(event) => {
//     console.log(event.type);
//     // const newCard = document.createElement('div')
//     // newCard.classList.add('card')
//     // newCard.innerHTML =  ++count;
//     // container.appendChild(newCard)
// })

addCardButton.addEventListener('pointerleave',(event) => {
    console.log(event.type);
    // const newCard = document.createElement('div')
    // newCard.classList.add('card')
    // newCard.innerHTML =  ++count;
    // container.appendChild(newCard)
})