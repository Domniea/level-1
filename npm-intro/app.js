var readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!'); 

// var favFood = readlineSync.question('What is your favorite food? ', {
//     hideEchoBack: true // The typed text on screen is hidden by `*` (default).
//   });
//   console.log('Oh, ' + userName + ' loves ' + favFood + '!');

function sum(a, b) {
    return a + b 
} 

var numb1 = readlineSync.question('Please enter your first number? ');
var numb2 = readlineSync.question('Please enter your second number? ');
var operation = readlineSync.question('Please enter the operation to preform ');
    if ("sum") {
        console.log(sum(numb1, numb2))
    }
