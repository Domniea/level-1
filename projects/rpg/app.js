const readline = require('readline-sync')

mapActions = ['Walk']
battleActions = ['Attack', 'Potion', 'Run']

var heroHP = [100]
inventory = {
    potions : [],
    exp: [],
}

var heroIsAlive = true
var enemyIsAlive = true
var enemy1HP = [50]

function enemy1Atack() {
    let enemy1Damage = (Math.floor(Math.random() * 20))
    console.log(`${name} took ${enemy1Damage} of damage`)
    let newHp = heroHP[0] - enemy1Damage
    heroHP.pop()
    heroHP.push(newHp)
    if (heroHP[0] <= 0) {
        heroIsAlive = false
        console.log("Youre DEAD BUDDY!!!")
    }
    console.log(`${name} is down to ${heroHP} HP`)
}

function heroAtack(string) {
    let heroDamage = (Math.floor(Math.random() * 20))
    console.log(`enemy1 took ${heroDamage} of damage`)
    let newHp = enemy1HP[0] - heroDamage
    enemy1HP.pop()
    enemy1HP.push(newHp)
    console.log(` Enemy is down to ${enemy1HP[0]}`)
    if (enemy1HP[0] <= 0){
        enemyIsAlive = false
        console.log("You've vanquished the Enemy")
    }
}

function potion() {
    console.log("You drank a potion and regained 75 HP.")
    let newHP = heroHP[0] + 75
    heroHP.pop()
    heroHP.push(newHP)
    console.log(`${name} now has ${heroHP[0]}`)
     
}

function run() {
    let runProbability = (Math.floor(Math.random() * 10))
    if (runProbability >= 0) {
        console.log(`${name} escaped safeley. `)
        return true;
    }
    else {
        console.log(`The enemy blocked ${name}'s path and you were unable to run away.`)
        return false;
    }
}



function enemy1Appearance() {
    while (enemyIsAlive === true) {
        let move = readline.question("Type: attack, potion, or run ")
        
        if (move === "attack") {
            console.log(` ${name} atacked. `)
            heroAtack()
        }

        if ((move === "potion")&& (enemyIsAlive === true)){
            console.log(` ${name} used a potion. `)
            potion()
        } 

        if ((move === "run") && (enemyIsAlive === true)) {
            if (run()) {
                break;
            }
        }

        enemy1Atack()
        console.log("What would you like to do? ")
        readline.question("Type: attack, potion, or run ")
    }
}
           

function nextMove() {
    readline.question('make a move')
}


const name = readline.question('Welcome adventureist,lets first start my giving your Hero a name? ')
console.log(`Welcome ${name}.`);
console.log(`Welcome to the fighting arena`);
const firstStep = readline.question(`To walk forward type "walk" Give it a shot now. `)
if (firstStep === 'walk') {
    console.log(`Good job! ${name} swiftly took a few steps forward.`)
}
let walk = readline.question(`Now that we've got that covered, lets begin. Start making your way to the tresure trove. `) 
let enemy1Probability = (Math.floor(Math.random() * 10))
while (heroIsAlive === true) {
    if ((walk === "walk") && (enemy1Probability > 3)) {
        console.log("A enemy1 has apeared in your path! ")
        console.log("What would you like to do? ")
        enemy1Appearance()
        nextMove()
    } else {
        console.log(`${name} walked down the path a bit more. `)
        nextMove()
    }
}
