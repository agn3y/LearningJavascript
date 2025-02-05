const green = document.querySelector('.firstContainer')
const hotpink = document.querySelector('.secondContainer')
const skyblue = document.querySelector('.thirdContainer')

window.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log('Event Fired On window')
})

document.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log('Event Fired On document')
})

document.body.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log('Event Fired On body')
})

green.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log('Event Fired On green')
},true)

hotpink.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log('Event Fired On hotpink')
},{capture : true })

skyblue.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log('Event Fired On skyblue')
},{capture : true , once : true})

