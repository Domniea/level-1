const readline = require('readline-sync')  

let hero = {
    name: `hero`,
    hp: 100,
    defense: 5,
    evasion: 3,
    exp: 0,
    inventory: [`potion`,`potion`],
}

let enemy1 = {
    name: 'enemy1',
    hp: 25,
    defense: 2,
    evasion: 1,
    exp: 25
}

let enemy2 = {
    name: 'enemy2',
    hp: 50,
    defense: 5,
    evasion: 2,
    exp: 50
}
let enemy3 = {
    name: 'enemy3',
    hp: 75,
    defense: 7,
    evasion: 3,
    exp: 75
}

let total = {
    damageDone: 0,
    damageAccrued: 0,
    expEarned: 0,
    steps: 0
}

var heroIsAlive = true
var enemyIsAlive = true
var gameOn = true

function quit() {
    console.log(`Goodbye ${hero.name}, thanks for playing \n`)
    console.log(total)
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
    
    console.log(` -- A ${enemy.name} has apeared in your path! \n`)
}

function enemyAttack() {
    let enemyDamage = (Math.floor(Math.random() * 20))
    let totalDA = total.damageAccrued + enemyDamage
    total.damageAccrued = totalDA
    console.log(` -- ${enemy.name} attacked`)
    console.log(`${hero.name} took ${enemyDamage} of damage`)
    let newHp = hero.hp - enemyDamage
    hero.hp = newHp

    if (hero.hp <= 0) {
        console.log('')
        console.log("Youre DEAD BUDDY!!! \n")
        quit()
        return false
    }

    if (hero.hp > 0) {
    console.log(`${hero.name} is down to ${hero.hp}HP \n`)
    }
}

function heroAtack() {
    let heroDamage = (Math.floor(Math.random() * 20))
    let totalDD = total.damageDone + heroDamage
    total.damageDone = totalDD
    console.log(`${enemy.name} took ${heroDamage} of damage`)
    let newHp = enemy.hp - heroDamage
    enemy.hp = newHp

    if (enemy.hp >= 0) {
        console.log(`enemy is down to ${enemy.hp}HP \n`)
        
    }
    else if (enemy.hp < 0) {
        console.log(`${hero.name} vanquished the enemy \n`)
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

    console.log(`${hero.name} now has ${hero.hp}HP \n`)
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
        console.log(`The enemy blocked ${hero.name}'s path and you were unable to run away. \n`)
        return false;
    }
}

function expGen(){
    let bonusExp = Math.floor(Math.random() * 50)
    let newexp = hero.exp + bonusExp + enemy.exp
    total.expEarned = hero.exp = newexp
    console.log(`${hero.name} gained ${enemy.exp + bonusExp}exp \n`)
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
        let move = readline.keyIn(`Type: "a" to attack, "p" to use potion and "q" to quit.`, {limit: "aprq"})
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

                else {
                    console.log(` -- ${hero.name}  is out of potions \n`)
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


// -------------------------------------------------- GAME ---------------------------------------------------//
while (hero.hp > 0) {
    
    hero.name = readline.question('Welcome adventureist,lets first start my giving your Hero a name? \n')
    
    console.log(`Welcome ${hero.name}.\n`);
   
    const firstStep = readline.keyIn(`To walk forward, type "w" \nTo view ${hero.name}'s stats and inventory, type "p" \nTo quit the game at any point, type "q" \nGive it a shot now. \n`, {limit: `wpq`})

    if (firstStep === "w") {
        console.log(`Good job! ${hero.name} swiftly took a few steps forward. \n`)
        let totalS = total.steps + 3
        total.steps = totalS
    }
    
    if (firstStep === "p") {
        console.log(hero)
    }

    if (firstStep === "q") {
        quit()
        return false
    }

    let move = readline.keyIn(`Now that we've got that covered, lets begin. \nStart making your way to the tresure trove. \n`, {limit: 'wpq'})

    while ((hero.hp > 0) && (gameOn = true)) {
        resetEnemy()
        move = readline.keyIn('make a move. \n', {limit: 'wpq'})

            if (move === "w") {
                console.log(`Good job! ${hero.name} swiftly took a few steps forward. \n`)
                let totalS = total.steps + 3
                total.steps = totalS
            }
    
            if (move === "p") {
                console.log(hero)
            }
        
            if (move === "q") {
                quit()
                return false
            }
            
        var ambushProbability = Math.floor(Math.random() * 5) 

        if ((move === "w") && (ambushProbability >= 3)){
            chooseEnemy()
            enemyFight()
        }  

        if ((move === "w") && (ambushProbability < 3) && (hero.hp > 0)) {
            console.log(`${hero.name} walked down the path a bit more. \n`)
            ambushProbability
        }
          
    }
}