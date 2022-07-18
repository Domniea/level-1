
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var splitAlphabet = alphabet.toUpperCase().split("")


function forception(array1, array2) {
    newArray = []
for (var i = 0; i < array1.length; i++) {
    newArray.push(people[i])
    for (var j = 0; j < array2.length; j++) {
        newArray.push(splitAlphabet[j])
    
    }
}
}
forception(people, splitAlphabet)

console.log(newArray)



    // 
//     for (var j = 0; j < splitAlphabet[i].length; j++) {
//         console.log(newPeople)


// // for (var i = 0; i < people.length; i++) {
//     let newPeople = people.shift([i], "").concat(splitAlphabet)
//     for (var j = 0; j < splitAlphabet[i].length; j++) {
//         console.log(newPeople)
//     }
// }