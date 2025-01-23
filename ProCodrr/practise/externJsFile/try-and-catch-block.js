// try {
//     // const a = 'Agney'
//     console.log(a);
// } catch (note) {
//     console.dir(note);
//     console.log("An error may have occured");
//     // console.dir(note.message);
//     // console.dir(note.stack);
// } finally {
//     console.log('Execution ended')
// }
// console.log(9+99);

// makeRequest().then((data)=>{
// console.log(data);
// })


async function makeRequest() {
    try {
        // const url = 'https://httpbin.org/delaypp/5'
        const url = 'https://httpbin.org/delay/2'
        const response = await (await fetch(url)).json()
        console.log(response.origin);
        // return response
    }
    catch(err) {
        console.log(err)
        console.log("Seems like we have got an issue we'll be back soon, stay tuned!!!");
    }
    finally {
        console.log("programme ended");
        // setTimeout(()=>{console.log('Last execution')},2000)
        // console.log('Code after finally block');
    }
    console.log("Line after try and catch block");
}

makeRequest()


