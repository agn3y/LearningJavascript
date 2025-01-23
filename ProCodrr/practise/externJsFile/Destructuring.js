// Destructuring Arrays

const clgFriend = [
  "Agney",
  "Guruvesh",
  "Ayush",
  "Anirudh",
  "Harmin",
  "Wajid",
  "Viren",
];

const [a, b, c, d, e, f, g] = clgFriend;
const [, , thirdFriend] = clgFriend; // skip first two values

//Another way of accessing any element of an array 
const {2:ayushName} = clgFriend;
const {2:canada} = clgFriend; // {indexOfAnArray:variableName = Name of array that you are targeting}

//And Another way

const LastName = clgFriend[6];

// Destructuring Objects

const person = {
    Name : 'Agney',
    Age : 25,
    Education : 'Bachelor Of Engineering in Information Technology',
    Degree : 'Yes',
    Job : 'front-End Web-Developer',
    address : {
        Country : 'India',
        State : 'NewYork',
        Village : 'Jhadadia'
    }
}

const {Name, Age,Job} = person ;
const {Name : myName, Age : myAge} = person ; // Passing value of name and age to myName and myAge.
const {address : {Country : homeCountry }  } = person;


console.log(homeCountry); // Accessing an inner element of an object and then changing name of the variable


// Destructuring function
function info(data) {
    return(data)
}

info(person) 

function friends([zero,,one,two]) {
    console.log(zero,one,two);
}
friends(clgFriend)

//Accessing particular element from object

function info2({Name,Age}) {
    console.log({Name,Age}); 
}
info2(person)