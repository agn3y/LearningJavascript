
const arr = [1,3,33,4,55]

console.dir(arr);
console.log("ain't Man enough");
console.log(typeof(document));

function newWallpaper(){
    return document.body.children[13].src = "https://www.pixelstalk.net/wp-content/uploads/2016/06/Desktop-Wallpaper-HD.jpg";
}

const allImages = console.log(document.getElementsByTagName('p')); //[0].innerText = "set the text");
// const allImages = document.getElementsByTagName('p')
console.log(allImages);

//Console tricks in comment

const paniPilaDijiye = document.getElementsByTagName('p'); 
// classSe[0].innerText = "Jay Girnari"

const classSe = document.getElementsByClassName('heading'); 
// classSe[0].innerHTML = "Uncle Jee PaniPilaDijiye"

const idSe = document.getElementById('NoCanada'); 
//NoCanada.innerHTML = "Trudeau is a liberal"

const querySe = document.querySelector('.hea'); 
//document.querySelector("#NoCanada").innerText = "Query Selector"

const querySe1 = document.querySelectorAll('#NoCanada'); 
// look for every element who has the id NoCanada
// document.querySelectorAll('#NoCanada')

const attributeSelector1 = document.querySelector('[alt=Honey-Bunny]')
const attributeSelector2 = document.querySelector('ul li')
const attributeSelector3 = document.querySelector('ul li:nth-child(2)')
//targeting an element using attribute


//below function changes the wallpaper 
function changeWall(){
    document.querySelector('[alt=Honey-Bunny]').src = "https://cdn.wallpapersafari.com/45/30/QrV6dq.jpg"
}

