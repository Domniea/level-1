
numbers = []

for(let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        console.log("fizz")
        numbers.push("fizz") 
    }
    else if (i % 5 === 0) {
        console.log("buzz")
        numbers.push("buzz")
    }
    else {
        console.log(i)
        numbers.push(i)
    }

}
console.log(numbers)