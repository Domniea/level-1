const readline = require('readline-sync')  

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
    exp: 50
}

let enemy2 = {
    name: 'enemy2',
    hp: 50,
    defense: 2,
    evasion: 3,
    exp: 75
}
let enemy3 = {
    name: 'enemy3',
    hp: 100,
    defense: 2,
    evasion: 3,
    exp: 100
}


var heroIsAlive = true
var enemyIsAlive = true
var gameOn = true

function quit() {
    console.log(`Goodbye ${hero.name}, thanks for playing`);
    gameOn === false
}

function chooseEnemy() {
    var enemyProbability = Math.floor(Math.random() * 10)

    if ((enemyProbability >= 0) && (enemyProbability < 4)) {
        enemy = enemy1
    }
    if ((enemyProbability >= 4) && (enemyProbability < 8)) {
        enemy = enemy2
    }
    if ((enemyProbability >=8 ) && (enemyProbability <= 9)) {
        enemy = enemy3
    }
    
}

function enemyAttack() {
    let enemyDamage = (Math.floor(Math.random() * 20))
    console.log(` -- ${enemy.name} attacked`)
    console.log(`${hero.name} took ${enemyDamage} of damage`)
    let newHp = hero.hp - enemyDamage
    hero.hp = newHp

    if (hero.hp <= 0) {
        console.log('')
        console.log("Youre DEAD BUDDY!!!")
        return heroIsAlive === false
    }

    if (hero.hp > 0) {
    console.log(`${hero.name} is down to ${hero.hp}HP`)
    console.log("")
    }
}

function heroAtack() {
        let heroDamage = (Math.floor(Math.random() * 20))
        console.log(`${enemy.name} took ${heroDamage} of damage`)
        let newHp = enemy.hp - heroDamage
        enemy.hp = newHp

        if (enemy.hp >= 0) {
            console.log(`enemy is down to ${enemy.hp}HP`)
            console.log("")
            
        }
        else if (enemy.hp < 0) {
            console.log(`${hero.name} vanquished the enemy`)
            console.log("")
            enemy.hp = 0
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

function expGen(){
    let newExp = Math.floor(Math.random() * 100)
    hero.exp = newExp
    console.log(`${hero.name} gained ${hero.exp}exp`)
    console.log('')
}

function resetEnemy() {
    if (enemy1.hp <= 0) {
        enemy1.hp = 25
    }

    if (enemy2.hp <= 0) {
        enemy2.hp = 75
    }

    if (enemy3.hp <= 0) {
        enemy3.hp = 100
    }
}

function enemyFight() {
    while ((enemy.hp >= 0) && (hero.hp > 0)) {
        console.log("What would you like to do? ")
        let move = readline.keyIn("Type: attack, potion, or run ", {limit: "aprq"})
        console.log("")
        
            if (move === "a") {
                console.log(`--  ${hero.name} atacked. `)
                heroAtack()
            }

            if ((move === "p") && (enemy.hp > 0)){
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

        if ((enemy.hp  >0) && (hero.hp > 0)) {
            enemyAttack()
        }
        else {
            expGen()
            break
        }
    
    }
}
           

function nextMove() {
    readline.keyIn('make a move.', {limit: 'wq'})
    console.log('')
}


while (hero.hp > 0) {
    hero.name = readline.question('Welcome adventureist,lets first start my giving your Hero a name? ')
    console.log('')
    console.log(`Welcome ${hero.name}.`);
    console.log('')
    const firstStep = readline.keyIn(`To walk forward type "walk" Give it a shot now. `, {limit: `w`})
    console.log('')

    if (firstStep === "w") {
        console.log(`Good job! ${hero.name} swiftly took a few steps forward.`)
        console.log('')
    }

    let move = readline.keyIn(`Now that we've got that covered, lets begin. Start making your way to the tresure trove. `, {limit: 'wq'})
    console.log('')

   

    while (hero.hp > 0) {
        resetEnemy()
        readline.keyIn('make a move.', {limit: 'wq'})
        console.log('')
        var randomNumber = Math.floor(Math.random() * 5) 

        if ((move === "w") && (randomNumber >= 3)){
            chooseEnemy()
            console.log(`A ${enemy.name} has apeared in your path!`)
            console.log('')
            enemyFight()
        }  

            if ((randomNumber < 3) && (hero.hp > 0)) {
                console.log(`${hero.name} walked down the path a bit more. `)
                console.log('')
                randomNumber
            }
          
    }
}