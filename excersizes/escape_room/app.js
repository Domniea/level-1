const readlineSync = require("readline-sync");
const playerName = readlineSync.question('What is your name? ');


console.log(`Welcome ${playerName}, to the Escape Room`)
console.log(`${playerName}, you awake in an old abandond classroom. As you look around, you notice it is fairly empty with the exception of hole in the wall and a door.`)

let isAlive = true;
let hasKey = false;
choices = ["put your hand in the hole.", "look for the key.", "go through the door"]

while (isAlive === true) {
  choiceOfPath = readlineSync.keyInSelect(choices, `${playerName} what is it you choose?`)
  // choiceOfPath = readlineSync.keyIn('Press 1 to put your hand in the hole. Press 2 to look for the key. Press 3 to go through the door');
  
  if (choiceOfPath == 0) {
    isAlive = false;
    console.log('YOU"RE DEAD!!!')
  }

  else if (choiceOfPath == 1 && hasKey == false) {
      console.log('Great job, you found the key! Next, try and put it to use.');
      hasKey =  true
  }

else if (choiceOfPath == 1 && hasKey == true) {
    console.log("You've already found it")
  }

  else if (choiceOfPath == 2 && hasKey == false) {
    console.log("The key is needed to open the door")
  }

  else if (choiceOfPath == 2 && hasKey == true) {
    console.log("YOU DID IT!!!! You escaped with your life!")
    isAlive = false
  }
}
