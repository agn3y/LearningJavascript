const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('.input')
const numberContainer = document.querySelector('.numberContainer')
const inputFocus = document.querySelector('.password')
const form = document.querySelector('form')
const submit = document.querySelector('button')

let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++   
  container.append(newCard)
  numberContainer.innerHTML = 'Number : '+ newCard.innerText
})

// using for loop to print 100 card a once
// for(let i = 1 ; i <= 1000; i++) {
//   addCardBtn.click()
// }

//Using setInterval
// const clear = setInterval(()=>{
//   if(count >= 1000) {
//     clearInterval (clear);
//   }
//   addCardBtn.click()
// },10)

//focus() event
// setInterval(()=>{
  //   inputFocus.focus()
  // },2000)
  
// Blur() event  
// setInterval(()=>{
//   input.blur()
// },1500)

// setTimeout(() => {
//   form.submit()
//   console.log('form submitted')
// }, 3000);

setInterval(() => {
  form.reset();
}, 3000);
