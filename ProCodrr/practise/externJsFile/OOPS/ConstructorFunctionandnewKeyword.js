//factroy functions

// function createCar(make, model, year) {
  // return {
      // make,
      // model,
      // year,
      // start() {
          // console.log(`${make} ${model}-${year} is starting...`);
      // },
      // drive() {
          // console.log(`${make} ${model}-${year} is driving...`);
      // }
  // };
// }

// Using the factory function
// const car1 = createCar('Toyota', 'Corolla', 2020);
// const car2 = createCar('Honda', 'Civic', 2022);

// car1.start(); 
// car2.drive(); 

//--------------------------------------------------------------------------

//from last video

// function getYearOfBirth(){
//   console.log(this);
//   return new Date().getFullYear() - this.age
// }

// function createUser(firstName, lastName, age) {
//     const user = {
//       firstName,
//       lastName,
//       age,
//       getYearOfBirth,
//     }
//     return user
// }

// const user1 = createUser('Agney', 'Patel', 23)
// const user2 = createUser('Anirudh', 'Parab', 25)

// -------------------------------------------------------------------------

// Using this keyword

// function createUser(firstName, lastName, age) {
//   const user = {
//       firstName : firstName,
//       lastName : lastName,
//       age : age,
//       getAgeyear : function (){
//         return new Date().getFullYear() - age
//       }
//     }
//   return user
// }

// --------------------above code for my understanding-------------------------

// function createUser(firstName, lastName, age) {
//     const user = {
//       firstName : firstName,
//       lastName : lastName,
//       age : age,
//       getAgeYear : createUser.commonmethods.getAgeYear,
//     }
//     return user
// }

// createUser.commonmethods = {
//    getAgeYear : function () {
//     return new Date().getFullYear() - this.age
//   }
// }

// const user1 = createUser('Agney', 'Patel', 23)
// const user2 = createUser('Anirudh', 'Parab', 25)

// -------------------------------------------------------------------------

// Using prototypes 

// function CreateUser(firstName, lastName, age) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.getYearOfBirth = function(){
//     return new Date().getFullYear() - age
//     // return new Date().getFullYear() - data 
//   }
// }

function CreateUser(firstName, lastName, age){
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age
}

CreateUser.prototype.getYearofBirth = function(){
  return new Date().getFullYear() - this.age
}
const user1 =  new CreateUser('Agney', 'Patel', 23)
const user2 = new CreateUser('Anirudh', 'Parab', 25)

// const user1 = CreateUser('Agney', 'Patel', 23)
// const user2 = CreateUser('Anirudh', 'Parab', 25)

