document.getElementsByTagName("h5").innerText = "Bale Bale";

document.querySelector("[haName]").attributes.haName;

console.dir(document.querySelector("[haName]").attributes.haName);

document.querySelector("[haName]").attributes.haName.value;

document.querySelector("[haName]").getAttribute("haName");
document.querySelector("[haName]").getAttribute("class");


//Using setAttribute and getAttribute

document.querySelector('h5').setAttribute('title','getAttribute and setAttribute')
document.querySelector('h5').getAttribute('haName')
document.querySelector('h4').setAttribute('id','newId')
document.querySelector('h4').id="newIdName"
document.querySelector('section').setAttribute("class","playgroundSection")

// Accessing child elements
// We could access child of child if there are any 
console.log(document.querySelector('section > h5'));

