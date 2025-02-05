
const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')
const numberContainer = document.querySelector('.numberContainer')
const cardsList = document.querySelectorAll('.card')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++   
    container.append(newCard)
    numberContainer.innerHTML = 'Number : '+ newCard.innerText

   const resetCard = newCard.addEventListener('click',() => {
        newCard.remove()
    })

    if(resetCard = true){
        count = 0
        newCard.innerText = 0
    }
  })