const username = document.querySelector("#username");
const password = document.querySelector("#password");
const ddisplay = document.querySelector("#ddisplay");
const form = document.querySelector("form");

let valueContainer = "";
// username.addEventListener('click', () => {
//     console.log('1')
// })

// username.addEventListener('dblclick', () => {
//     console.log('1+1')
// })

// password.addEventListener('input',(event) => {
//     console.log(event.target.value)
//     // console.log(event.type)
//     ddisplay.innerText = event.target.value
//     // console.log(event)
//   valueContainer = event.target.value;
// })

// password.addEventListener("change", (event) => {
//   console.log(event.type);
//   console.log(event.target.value);
//   ddisplay.innerText = event.target.value;
//   valueContainer = event.target.value;
// });

// password.addEventListener('focus',(event) => {
//     console.log(event.type)
//     // console.log(event.target.value)
//     // ddisplay.innerText = event.target.value
//     // console.log('Focus event fired!!!')
// })

// password.addEventListener('blur',(event) => {
//     console.log(event.type)
//     // console.log(event.target.value)
//     // console.dir(event)
//     // ddisplay.innerText = event.target.value
//     // console.log('Focus event fired!!!')
// })

// form.addEventListener('click',(event)=>{
//     console.log(event.type)
// })

form.addEventListener('submit',(event) => {
    // console.log(event.type)
    // event.preventDefault()
    // console.log(event.type)
    // console.log(Data)
    // console.log(Data.entries)   
    const Data = new FormData(form)

    for(const p of Data.entries()) {
        console.log(p)
    }
})

form.addEventListener('click',(event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(event.currentTarget)
})