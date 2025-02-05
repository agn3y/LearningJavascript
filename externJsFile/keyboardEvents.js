const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')

h1.addEventListener('keypress', (event)=>{
    console.log(event)
    console.log('Code :',event.code)
    console.log('Value :',event.key)
    console.log('charCode :',event.charCode)
})

h2.addEventListener('keyup', (event)=>{
    console.log(event)
    console.log('',event.code)
    console.log('',event.key)
    console.log('',event.charCode)
})

h3.addEventListener('keydown', (event)=>{
    //console.log(event)
    console.log('',event.code)
    console.log('',event.key)
    //console.log('',event.charCode)
})