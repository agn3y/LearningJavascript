//Code to understand Stack

function greet() {
    console.log("Hello");
    sayName();
    console.log("Goodbye");
}
              
function sayName() {
    console.log("My name is Agney");
}
              
greet(); 

// Stack Overflow

function introduceMe() {
    console.log('Hi, My name is Agney.');
    introduceMe()
}

introduceMe()

console.log('Program Ended');