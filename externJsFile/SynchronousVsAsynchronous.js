const image = document.querySelector('img')
const button  = document.querySelector("body > section:nth-child(1) > button:nth-child(2)")
let BlockButton = document.querySelector("body > section:nth-child(1) > button.blocking") 

button.onclick = () => {

    const xhr = new XMLHttpRequest()

    console.log(xhr);

    xhr.open('GET','https://randomfox.ca/floof')

    // xhr.open('GET','https://procodrr.vercel.app/?sleep=5000')
    // xhr.open('GET','https://procodrr.vercel.app/?sleep=5000', false) // bydefault it is set to true

    xhr.responseType = "json" 

    xhr.send()
    
    // console.log(xhr.response);
            
    xhr.onload = () => {

            console.log(xhr)

            // console.log(Response.responseText)

        if (xhr.status === 200) {

            // console.log('Operation executed sucessfuly')

            // image.src = JSON.parse(xhr.response.image)

            image.src = xhr.response.image

            // image.src = JSON.parse(xhr.response).message
        }
        // else {
            // console.logA('something went wrong');
        // }

        // setTimeout(()=> {
        //     console.log("Imgae Loaded")
        // }, 5000)
    }
    
}


// BlockButton.onclick = () => {
//     let startTime = Date.now()
//     let currentTime = startTime
    
//     while(startTime + 4000  > currentTime) {
//         currentTime = Date.now()
//     }
// }