// 1.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        console.log("computer")
    }
}

// 2.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
    } else console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
  }

//   5.
const arr1 = [2, 5, 435, 4, 3] // "The light is on"
const arr2 = [1, 1, 1, 1, 3]   // "The light is on"
const arr3 = [9, 3, 4, 2]      // "The light is off"


let sum = 0
for (var i = 0; i < arr3.length; i++) {
    console.log(sum += arr3[i])
} if (sum % 2 === 0){
    console.log("the light is off")
} else console.log("the light is on")

