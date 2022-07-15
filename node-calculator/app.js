

// let readlineSync = require('readline-sync'),
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');

let readlineSync = require('readline-sync')

function add(num1, num2) {
 return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  return num1 / num2
}

const functions = [
  add,
  subtract, 
  multiply, 
  divide
]

let num1 = parseInt(readlineSync.question("Please choose the first number "))
let num2 = parseInt(readlineSync.question("Please choose the second number "))
operations = ["add", "subtract", "multiply", "divide"]
let index = readlineSync.keyInSelect(operations, "Please choose an operation ") // enumerating the array for you

console.log("The answer is " + functions[index](num1, num2))

if (index === 0) add()

if (index === 1) subtract()

if (index === 2) multiply

if (index === 2) divide
// if (1) {
//   console.log(add(num1, num2))
// }
//  if (2) {
//   console.log(subtract(num1, num2))
// } if (3) {
//   console.log(multiply(num1, num2))
// } if (4) 
//   console.log(divide(num1, num2))


