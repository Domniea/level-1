const readline = require('readline-sync')
; 
mapActions = ['Walk']
battleActions = ['Attack', 'Potion', 'Run']

heroHP = [100]
inventory = {
    potions : [],
    exp: [],
}

heroIsAlive = true
while (heroIsAlive === true) {
    if (heroIsAlive === false) [
        console.log("YOU'RE DEAD")
    ]
}

enemy1HP = [50]


function enemy1Atack() {
    let enemy1Damage = (Math.floor(Math.random() * 20))
    console.log(enemy1Damage)
    let newHp = characterHP[0] - enemy1Damage
    characterHP.pop()
    characterHP.push(newHp)
    if (characterHP[0] <= 0) {
        heroIsAlive = false
        console.log("Youre DEAD BUDDY!!!")
        }
    console.log(characterHP)
}

function heroAtack(string) {
    let heroDamage = (Math.floor(Math.random() * 20))
    console.log(heroDamage)
    let newHp = enemy1HP[0] - heroDamage
    enemy1HP.pop()
    enemy1HP.push(newHp)
    if (enemy1HP[0] <= 0){
        enemyIsAlive = false
        console.log("You've vanquished the Enemy")
        }
    console.log(enemyHP)
}

// function potion(string) {
//     console.log("You drank a potion and regained 75 HP.")
//     let newHP = heroAtack[0] + 75
//     heroHP.pop()
//     heroHP.push(newHP)
// }

// function run(string) {
//     let runProbability = (Math.floor(Math.random() * 10))
//     if (runProbability >= 5) {
//         console.log("You ran away safely")
//     }
//     else {
//         console.log("The enemy blocked your path and you were unable to run away.")
//     }
// }

// function enemyAppearance() {
//     let enemyProbability = (Math.floor(Math.random() * 4)) 
//     if ((enemyProbability >= 3) && (heroIsAlive === true)) {
//         console.log("A monster has apeared in your path!")
//         console.log("What would you like to do?")
//         let move = readline.question("Type: attack, potion, or run")
//             if (move === "attack") {
//                 heroAtack
//             }
//             else if (move === "potion") {
//                 potion()
//             } else if (move === "run") {
//                 run()
//             }

//     }
//     else {
//         console.log("You made it a few strides further")
//     }
// }

const name = readline.question('Welcome adventureist, what is your name? ')
console.log(`Welcome ${name}.`);
console.log(`Welcome to the fighting arena`);

// const walk = readline.question('To walk forward type "walk" Give it a shot now. ')
// if (walk === 'walk') {
//     console.log('Good job! You swiftly took a few steps forward.')
// }

// let start = readline.question("Now that we've got that covered, lets begin. Start making your way to the tresure trove ")

//  if (walk === walk) {
//     enemyAppearance()
// }