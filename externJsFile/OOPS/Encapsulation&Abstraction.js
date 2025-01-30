// const user = {
//     firstName: 'Agney',
//     lastName: 'Patel',
//     age: 23,
//     getAge : ()=>{
//         return new Date().getFullYear()-user.age  
//         }
//   }

// // considered old way 
// function createUser(firstName,lastName,age){
//     const user = {
//         firstName : firstName ,
//         lastName : lastName,
//         age : age
//     }
//     return user
// }


//we can also do something like this which is avialable now in new ES6 feature
//both name should be same without that it wont work

function createUser(firstName,lastName,age){
    const user = {
        firstName,
        lastName,
        age,
        getAge : function () {
            const data = new Date().getFullYear() - user.age 
            return  data
        }
    }
    return user
}

const user0 = createUser('Agney','Patel',23)
const user1 = createUser('Anirudh','Parab',23) 
const user2 = createUser('Niyam','Bajpai',25)
const dad = createUser('Suresh','Patel',51)