// function hi(){
//     console.log('First Function');
//     throw 'This error was placed here intentionally'
//     console.log('the second message which will not appear');
// }

// function hii(){
//     console.log('Second Function');
//     throw new error(()=>{
//         console.log('I like Ice Cube');
//     })
//     console.log('the second message which will not appear');
// }

// function sayhi(){
//     throw ('Errror beacuse of using wrong variable')
// }
            
// async function sayMyname(){
//     throw new Error('I like Ice Cube')
// }

// async function makeRequest() {
//     const url = 'https://httpbin.org/delay/5'
//     const response = fetch(url)
//     response.then((response)=>{
//         console.log(response.json());
//     })
//     console.log(response);
// }
// makeRequest()

async function makeRequest() {
    const url = 'https://httpbin.org/delay/5'
    const response = await (await fetch(url)).json()
    // return response.url
    return response
}

makeRequest().then((data)=>{
console.log(data);
})