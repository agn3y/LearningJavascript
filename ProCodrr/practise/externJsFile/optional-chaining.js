const user = {
    firstName : 'Patel',
    middleName : 'Agneykumar',
    lastName : 'Sureshbhai',
    Age : '23',
    weight : '64kg',
    height : '6ft3',
    male : {
        gender : 'Male',
        mobile : 'Iphone 7plus',
        city : 'Surat'
    },
    fullName : ()=>{
        return user.firstName +' '+ user.middleName +' '+ user.lastName
    }
}

const Surat = 'city'

// if(user.male) {
    // console.log(user.male.gender);
// }

// // console.log( user.firstName && user.firstName.gender)
// console.log( user.firstName && user.male.gender)

//optinal chaining
// console.log(user.male?.gender)
// console.log(user.male?.['city']);
// console.log(user.male?.[Surat]);

console.log(user?.fullName?.());






