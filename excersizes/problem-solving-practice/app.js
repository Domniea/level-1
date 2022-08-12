// Write a function that takes an array of numbers and returns the largest (without using Math.max())

let numbers = [1, 234, 1111, 34, 2, 42, 100, 666,88]
let boobs = [2341,312423,43,5,1,3,4,5432,10]
function highestNumber(array) {
    let max = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max.pop()
            max.push(array[i])
        }  
    }
 console.log(max)
}

highestNumber(boobs)

// Write a function that takes an array of words and a character and returns each word that has that character present.

function characterMatch (array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(string)) {
            console.log(array[i])
        }
    }
}

words = ["$^&Tra!@", "*&^45", "68GRT!", "!hey!", "$balls$"]

characterMatch(words, "!")

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

 function isDivisable(num1, num2) {
    if ((num1 % num2 === 0) ||(num2 % num1 === 0)) {
        console.log('Its Divisable!!!')
    } else {
        console.log('Not Today Junior!!!')
    }
 }

 isDivisable(9, 3)
 isDivisable(9, 4)