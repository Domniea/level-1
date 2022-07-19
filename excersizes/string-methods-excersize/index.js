// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.


function upperCaseLowerCasex2(string) {
    return string.toUpperCase() +  string.toLowerCase()
}

console.log(upperCaseLowerCasex2("butts"))

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

// > Hint: You'll need to use Math.floor().
// >
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5




function halfLength(string) {
    return Math.floor(string.length / 2)
}

console.log(halfLength("butts"))

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

function halfStrings(string) {
    let half = Math.floor(string.length / 2)
    return string.slice(half)
}

console.log(halfStrings("hello world"))

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// > Hint: If your string length is odd, use Math.floor() to round down.
// >
// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

function capitalsAndLowercase(string){
    let arry = string.split("")
    let half = Math.floor(arry.length / 2)
    let arrBackHalf = arry.splice(half)
    let frontHalf = arry.splice(half * (-1))
    let stringFH = frontHalf.join("").toUpperCase()
    let stringBH = arrBackHalf.join("").toLowerCase()
    return stringFH + stringBH
}

console.log(capitalsAndLowercase("balls balls"))