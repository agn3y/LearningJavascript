let container = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}

let removeElement = document.querySelector("body > div > div:nth-child(7)");

// removeElement.remove()                                       // new way
// removeElement.parentElement.removeChild(removeElement)       // old way

// document.body.append(container)

