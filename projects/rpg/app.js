const readline = require('readline-sync')

mapActions = ['Walk']
battleActions = ['Attack', 'Potion', 'Run']


let hero = {
    name: `hero`,
    hp: 100,
    defense: 2,
    evasion: 3,
    exp: 0,
    inventory: [`potion`,`potion`],
}

let enemy1 = {
    name: 'enemy1',
    hp: 25,
    defense: 2,
    evasion: 3,
    exp: 45
}

var heroIsAlive = true
var enemyIsAlive = true

if (enemy1.hp <= 0){
    enemyIsAlive = false
    console.log("You've vanquished the Enemy")
}

function enemy1Atack() {
    let enemy1Damage = (Math.floor(Math.random() * 20))
    console.log(` -- ${enemy1.name} attacked`)
    console.log(`${hero.name} took ${enemy1Damage} of damage`)
    let newHp = hero.hp - enemy1Damage
    hero.hp = newHp

    if (hero.hp <= 0) {
        heroIsAlive === false
        console.log('')
        console.log("Youre DEAD BUDDY!!!")
    }

    if (hero.hp >= 0) {
    console.log(`${hero.name} is down to ${hero.hp}HP`)
    console.log("")
    }
}

function heroAtack() {
        let heroDamage = (Math.floor(Math.random() * 20))
        console.log(`${enemy1.name} took ${heroDamage} of damage`)
        let newHp = enemy1.hp - heroDamage
        enemy1.hp = newHp

        if (enemy1.hp >= 0) {
            console.log(`Enemy is down to ${enemy1.hp}HP`)
            console.log("")
            
        }
        else if (enemy1.hp <= 0) {
            enemyIsAlive === false
            console.log(`${hero.name} vanquished the enemy`)
            console.log("")
            }
    }


function potion() {
    console.log("You drank a potion and regained 75 HP.")
    let newHP = hero.hp + 75
    hero.hp = newHP

    if (hero.hp >= 100){
        hero.hp = 100
    }

    console.log(`${hero.name} now has ${hero.hp}HP`)
    console.log("")
    hero.inventory.pop(`potion`)
     
}

function run() {
    let runProbability = (Math.floor(Math.random() * 10))

    if (runProbability >= 5) {
        console.log(`${hero.name} escaped safeley. `)
        console.log("")
        return true;
    }
    else {
        console.log(`The enemy blocked ${hero.name}'s path and you were unable to run away.`)
        console.log("")
        return false;
    }
}



function enemy1Appearance() {
    while ((enemy1.hp >= 0) && (hero.hp >= 0)) {
        let move = readline.keyIn("Type: attack, potion, or run ", {limit: "aprq"})
        console.log("")
        
        if (move === "a") {
            console.log(`--  ${hero.name} atacked. `)
            heroAtack()
        }

            if ((move === "p")&& (enemyIsAlive === true)){
                if (hero.inventory.includes(`potion`)) {
                console.log(` -- ${hero.name} used a potion. `)
                potion()
            }
            else{
                console.log(` -- ${hero.name}  is out of potions`)
                console.log('')
            }
        
        }
        if ((move === "r") && (enemyIsAlive === true)) {
            if (run()) {
                break;
            }
        }

        if ((enemy1.hp >= 0) && (hero.hp >= 0)) {
            enemy1Atack()
        }
        else {
            enemy1.hp = 25
            break
        }
    
    }
}
           

function nextMove() {
    readline.keyIn('make a move.', {limit: 'wq'})
    console.log('')
}


hero.name = readline.question('Welcome adventureist,lets first start my giving your Hero a name? ')
console.log('')
console.log(`Welcome ${hero.name}.`);
console.log('')
const firstStep = readline.keyIn(`To walk forward type "walk" Give it a shot now. `, {limit: `wq`})
console.log('')
if (firstStep !== "w") {
    console.log(`Good job! ${hero.name} swiftly took a few steps forward.`)
    console.log('')
}

let walk = readline.keyIn(`Now that we've got that covered, lets begin. Start making your way to the tresure trove. `, {limit: 'wq'})
console.log('')

while (heroIsAlive === true && hero.hp > 0) {
    let enemy1Probability = (Math.floor(Math.random() * 10))

    if ((walk === "w") && (enemy1Probability > 3)) {
        console.log(`A ${enemy1.name} has apeared in your path!`)
        console.log('')
        console.log("What would you like to do? ")
        enemy1Appearance()
        
        if(hero.hp > 0) {
            nextMove()
        } 
    }    
    else if (enemy1Probability < 3) {
        console.log(`${hero.name} walked down the path a bit more. `)
        nextMove()
    }
}
