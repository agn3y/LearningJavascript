const card = document.querySelector('.card')
const container = document.querySelector('.container')

// document.addEventListener("DOMContentLoaded", function forClick() {
//     const firstElement = document.querySelector(".card");

//     firstElement.onclick = function() {
//         const clonedCard = firstElement.cloneNode(true); 
//         firstElement.parentElement.appendChild(clonedCard); 
//     };
// });
let count = 1

card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML =  count++;
    container.appendChild(newCard)
})
