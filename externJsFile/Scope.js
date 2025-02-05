//Global and Local scope

let userAge = 25
const username = 'Agney'
var a = 50

function add() {
  debugger
  const username = 'Ayush'
  const x = 5
  const y = 8
  console.log(x + y)
  console.log(username)
}

function subtract() {
  const x = 15
  const y = 18
  console.log(x - y)
  console.log(username)
}

add()
subtract()

console.log('Program Ended')