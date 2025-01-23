document.querySelector('h2').style.color = "#00D700"
document.querySelector('body').style.backgroundColor = "black";
document.querySelector('a').style.backgroundColor = "teal";

const allLinks = document.querySelectorAll('a');

//changing style using javascript
function setColor() {
    document.querySelector('section').style.display = "inline-block";
    const allLinks = document.querySelectorAll('a');
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].style.display = "inline-block"; // Force the links to behave as inline-block elements
        allLinks[i].style.padding = "5px 10px"; // Optional: Add padding to make the change more noticeable
        allLinks[i].style.color = "black"; // Change text color to black
        allLinks[i].style.background = "#00D700"; // Change background to green
    }
}

// Accessing an element o we could avoid more line of code
function setColor1(){
    const allLinks = document.querySelectorAll('a');
    for (let i = 0; i < allLinks.length; i++){
            console.log(allLinks[i].style.cssText) // this line will access inline css using cssText
    }
}


// this function will apply color and other thing using for loop and without repeating much of code
function setColor2() {
    document.querySelector('section').style.display = "inline-block";
    const allLinks = document.querySelectorAll('a');
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].style.cssText = `
        color: #00D700;
        background: black;
        `;
    }
}


// more better way we could just define class to an element and then use query selector to access that item and use for loop it would be way more easy
// we can also assign class using javascript

//When we want to apply two classes on 1 element

allLinks.classname = "ji gi" // both class do not exist this is here for explanation

//More better way

function newDay() {
    const allLinks = document.querySelectorAll('a'); // Select all <a> elements

    // Add a new class to allLinks[0] without removing its existing classes
    if (allLinks[0]) {
        allLinks[0].classList.add('SecondlyAssignedClass'); // Add a new class to the first element
    }

    // Assign a specific class as the first and only class to all other <a> elements
    for (let i = 1; i < allLinks.length; i++) {
        allLinks[i].setAttribute('class', 'SecondClass'); // Replace all existing classes with 'SecondClass'
    }

    // Log the class lists of all elements
    for (let i = 0; i < allLinks.length; i++) {
        console.log(allLinks[i].classList);
    }
}

//
function oldDay(){
    const allPsInSection = document.querySelectorAll('section > p'); // Select all <p> elements inside <section>
    console.log(allPsInSection);
    
    allPsInSection.forEach(p => {
        console.log(p);
    });
}






