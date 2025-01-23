const container = document.querySelector('.container')
// const createImg = document.querySelector('img')
const createImg = document.createElement('img')
container.append(createImg)

// function waterBottle(){
//     for(let i = 1; i < 100; i++){
//         // console.log(i);
//         const newImage = createImg.cloneNode()
//         // newImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
//         newImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//         container.append(newImage)
//     }
// }
// waterBottle()

// let i = 1; // Start with Pokémon #1

// function waterBottle() {
//     if (i >= 100) { // Stop when i reaches 100
//         clearInterval(interval); // Stop the interval to prevent infinite loop
//         return;
//     }

//     const newImage = createImg.cloneNode(); // Clone the original <img> element
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`; // Set the image source dynamically based on i
//     container.append(newImage); // Append the image to the container

//     i++; // Increment the counter for the next image
// }

// // Call the waterBottle function every 2 seconds
// const interval = setInterval(waterBottle, 100);


// const paragraph = document.createElement('p')
// paragraph.innerText = 'Hello'
// container.append(paragraph);
// paragraph.classList.add('my-para')
// container.id = 'newId'

// const newImage = document.createElement('img')

// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`

// container.append(newImage)

// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.querySelector('.container');
//     const createImg = document.createElement('img');

//     function waterBottle() {
//         for (let i = 1; i <= 10; i++) {  // Loop to generate 10 images (i <= 10)
//             const newImage = createImg.cloneNode();  // Clone the <img> element

//             // Set the source of the image
//             newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

//             // Log the image src to verify it is being set correctly
//             console.log("Adding image:", newImage.src);

//             // Append the newly cloned image to the container
//             container.append(newImage);
//         }
//     }

//     // Call the function to generate the images
//     waterBottle();
// });

// const mainContainer = document.querySelector('.container')

// for (let i = 0 ; i <= 100 ; i++) {
//     const newImage = document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     mainContainer.appendChild(newImage)
    
//     const newParagraph = document.createElement('p')
//     newParagraph.innerText = i
//     mainContainer.append(newParagraph)


// }

let myHtml = ``

for(let i = 1; i <= 100; i++) {
    myHtml += `
        <div class="container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
        <p><==${i}</p>
    </div>
    `
}

container.innerHTML = myHtml