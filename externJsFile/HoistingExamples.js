//Function Declaration

function hiMessage(name){
console.log(`Hii, My name is ${name}`);
}

//1. Named Function Expression:

const someRandomVariable = function sayHello() {
    console.log("Hello!");    
};

//2. Anonymous Function Expression:

const RandomVariable1 = function (){  // This works! // if we don't want to name it it’s Ok
console.log("Hello!");
}

//3. Function Expression with Parameters:
const greet = function(name) {
    return `Hello, ${name}!`;
};

