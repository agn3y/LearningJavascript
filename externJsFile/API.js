const button = document.querySelector("button")

button.addEventListener ('click' , () => {
    fetch ('https://dog.ceo/api/breeds/image/random')
    .then((Response)=> {
        return Response.json()
    })
    .then((json)=>{
            const imageSelector = document.querySelector('img')
            imageSelector.src = json.message;
        })

    })
