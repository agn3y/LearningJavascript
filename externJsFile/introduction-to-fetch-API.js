// fetch('https://dummyjson.com/products')
// .then((response)=>{console.log(response); return response.json()})
// .then((data)=>{console.log(data); console.log(data.products[29].images)})

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'BMW Pencil',
//       name : 'chaddi me pencil',
//       price : '15'
//       /* other product data */
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);

function fetchFunction(){
    fetch('https://dummyjson.com/users')
    .then((response)=>{ return response.json()})
    .then((usersData)=>{ return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`)})
    .then((repsonse)=>{ return repsonse.json()})
    .then((postsData)=>{ return fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`)})
    .then((repsonse)=>{ return repsonse.json()})
    .then((commentsData)=>{ return fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)})
    .then((response)=>{return response.json()})
    .then((userData)=>{console.log(userData);})
    .catch(()=>{console.log("Server might be busy Please try again later");})
    .finally(()=>{console.log("Session Terminated");})
}
