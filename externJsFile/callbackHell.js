function makeHttpRequest (method, url,callback) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {

        // console.log(xhr.response);  
        // console.log(xhr);  

        callback(xhr.response)        
    })
    xhr.open(method,url)
    xhr.send()  
}

// makeHttpRequest('GET',"https://dummyjson.com/posts/user/5", (data)=>{

makeHttpRequest('GET',"https://dummyjson.com/users/", (UsersData)=>{
    console.log(UsersData);
        makeHttpRequest('GET',`https://dummyjson.com/posts/user/${UsersData.users[0].id}`,(postsData)=>{
            console.log(postsData);
                makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData)=>{               
                    console.log(commentsData)                
                        makeHttpRequest('GET',`https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData)=> {
                            console.log(userData);
            })
        })
    })
})

// makeHttpRequest('GET', 'https://dummyjson.com/users')
// makeHttpRequest('GET', 'https://dummyjson.com/users/1')
// makeHttpRequest('GET','https://dummyjson.com/posts/user/5')
// makeHttpRequest('GET','')