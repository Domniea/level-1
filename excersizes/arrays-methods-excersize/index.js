// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array.
// 10. Turn the array into a string and return it.



var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1.
vegetables.pop()
console.log(vegetables)

// 2.

fruit.shift()
console.log(fruit)

// 3.
const indexOrange = fruit.indexOf("orange")
console.log(indexOrange)

// 4.
fruit.push(1)
console.log(fruit)

// 5.
console.log(vegetables.length)

// 6.
vegetables.push(3)
console.log(vegetables)

// 7. 
const food = fruit.concat(vegetables)
console.log(food)

// 8.
const newFood = food.splice(4,2)
console.log(food)
console.log(newFood)

// 9.
food.reverse()
console.log(food)

// 10.
const stringFood = food.join()
console.log(stringFood)
