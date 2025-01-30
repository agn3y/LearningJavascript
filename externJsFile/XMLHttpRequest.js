const button = document.querySelector("button")
const image = document.querySelector("img")

button.addEventListener ('click' , () => {

    // fetch ('https://dog.ceo/api/breeds/image/random')
    // .then((Response)=> {
    //     return Response.json()
    // })
    // .then((json)=>{
    //         const imageSelector = document.querySelector('img')
    //         imageSelector.src = json.message;
    
    // function sayhii () {
        //     console.log("Say Hi but no HIII")
        // }
        
        // const xhr = new sayhii()
        // console.log(xhr)
        
    const xhr = new XMLHttpRequest  // new var
    xhr.open('GET','https://dog.ceo/api/breeds/image/random')
    // xhr.open('GET','https://httpbin.org/delay/5')  // oepns a get request on the url
    // console.log(xhr);
    xhr.send()                                    // send request
    xhr.responseType = "json"                    // takes response in json format (object)

xhr.onload = () => {
    console.log(xhr);
    image.src = xhr.response.message
}

    // xhr.addEventListener('load',()=>{
    //     console.log(xhr);
    //     image.src = xhr.response.message
    //     setTimeout(()=>{
    //         // console.log(JSON.parse(xhr.response));
    //         console.log(xhr.response);
    //         console.log(xhr.response.status);
    //         console.log(xhr.response.message);
    //     },2000)
    // })

    // console.log("receiving data")
    // setTimeout(()=>{
    //     console.log(xhr.response);
    // },6000)
})
