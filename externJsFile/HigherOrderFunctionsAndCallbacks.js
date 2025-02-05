// debugger
// A higher-order function that takes another function as an argument
function greetUser(callback) {
console.log("The Name is");
callback();  // Call the callback function after greeting
}
                                
    // A simple callback function
function sayGoodbye() {
console.log("Travis-Scott....!!!!!!");
}
                                
    // Using the higher-order function
greetUser(sayGoodbye); 

//Using anonymous function
greetUser(function(){
    console.log("Travis-Scott.....!!!!!!!!!!!!")
})
  
// A simple callback function
// function sayGoodbye() {
// console.log("Goodbye!");
// }
  
// Using the higher-order function
// greetUser();


// // new code
// function NameLogo(x,y){
//     console.log(x);
//     y();
// }
// function artistName(){
//     const name = "Travis-scott"
//     console.log(name);
// }
// NameLogo("The Name is",artistName);
