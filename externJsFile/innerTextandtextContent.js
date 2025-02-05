// Select the child element (the span inside the div)
const childElement = document.querySelector('#example1 span');

// Create a new element to display the child element's content
const newParagraph = document.createElement('p');
newParagraph.textContent = 'The child element selected is: ' + childElement.textContent;

// Append the new paragraph to the body
document.body.appendChild(newParagraph);
