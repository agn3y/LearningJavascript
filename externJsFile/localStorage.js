const nameTag = document.querySelector(".nametag")
const nameInput = document.querySelector(".nameInput")
const ageTag = document.querySelector(".agetag")
const ageInput = document.querySelector(".ageInput")

// console.log("i love rotiSalute");

// nameTag.innerText = localStorage.getItem("myName")

// nameInput.addEventListener('input', (event) => {
//     localStorage.setItem('myName', event.target.value);
//     nameTag.innerText = localStorage.getItem("myName");
// })

// agetag.innerText = localStorage.getItem("myAge")

// ageInput.addEventListener('input', (event) => {
//     localStorage.setItem('myAge', event.target.value)
//     agetag.innerText=localStorage.getItem("myAge")
// } )



// const personalInfo = {
//     myName : '',
//     myAge : ''
// }

// const personalInfo = localStorage.getItem('personalInfo')

const personalInfo = JSON.parse(localStorage.getItem("personalInfo")) || {};

if(personalInfo.Name) {
    nameTag.innerText = personalInfo.Name;
}

if(personalInfo.Age) {
    ageTag.innerText = personalInfo.Age;
}


nameInput.addEventListener('input', (event) => {
    personalInfo.Name = event.target.value;
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo))
    nameTag.innerText = personalInfo.getItem(Name);
    nameTag.innerText = personalInfo.Name || ''
})


ageInput.addEventListener('input', (event) => {
    personalInfo.Age = event.target.value;
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo))
    ageInput.innerHTML = personalInfo.getItem(Age)
    ageTag.innerText = personalInfo.Age || ''
})

// to clear the localstorage
// localStorage.clear()
// localStorage.removeItem('personalInfo')

// with the help of stringify we can trandform object into strings
// and to reverse the thing we can use json.parse which will turns the strings to object again

//see ther are two ways with which we can do it as we described it above
//by using getItem and directly targetting the item
//but when we use getitem and direct targetting like localstorage.myname to find value both gives different value in returns 

