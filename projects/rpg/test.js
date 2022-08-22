const readline = require('readline-sync')  

let hero = {
    name: `hero`,
    level: 1,
    hp: 100,
    attack: 3,
    defense: 2,
    evasion: 3,
    chance: 2,
    exp: 0,
    inventory: [`potion`,`potion`],
}

let enemy1 = {
    name: 'enemy1',
    hp: 50,
    attack: 2,
    defense: 1,
    evasion: 1,
    exp: 25
}

let enemy2 = {
    name: 'enemy2',
    attack: 3,
    hp: 75,
    defense: 2,
    evasion: 2,
    exp: 50
}
let enemy3 = {
    name: 'Boss',
    hp: 250,
    attack: 7,
    defense: 4,
    evasion: 5,
    exp: 200
}

let total = {
    damageDone: 0,
    damageAccrued: 0,
    expEarned: 0,
    steps: 0
}

var heroIsAlive = true
var gameOn = true

function quit() {
    console.log(`Goodbye ${hero.name}, thanks for playing \n`)
    console.log(total)
}

function heroAtack() {
    let hitChance = (Math.ceil(Math.random() * 40) - enemy.evasion)
    if (hitChance > 5) {
        
        if (critHit()) {
                heroDamage = 30
                total.damageDone += heroDamage
                console.log(`${enemy.name} took ${heroDamage} of damage`)
                enemy.hp -= heroDamage
        }

        else {
            let heroDamage = (Math.ceil(Math.random() * 20) + (hero.attack - enemy.defense))
                    total.damageDone += heroDamage
                    console.log(`${enemy.name} took ${heroDamage} of damage`)
                    enemy.hp -= heroDamage
        }
    }

    else {
        console.log(`${hero.name} tried to attack, but missed \n`)
    }
  
    if (enemy.hp >= 0 && hitChance > 5) {
        console.log(`enemy is down to ${enemy.hp}HP \n`)
        
    }

    else if (enemy.hp < 0) {
        console.log(`${hero.name} vanquished the enemy \n`)
        enemy.hp = 0
    }
}

function chooseEnemy() {
    var enemyProbability = Math.ceil(Math.random() * 10)

    if ((enemyProbability >= 0) && (enemyProbability <= 4)) {
        enemy = enemy1
    }
    if ((enemyProbability > 4) && (enemyProbability <=8)) {
        enemy = enemy2
    }
    if ((enemyProbability >=9 ) && (enemyProbability <= 10)) {
        enemy = enemy3
    }
    
    console.log(` -- A ${enemy.name} has apeared in your path! \n`)
}

function enemyAttack() {
    let hitChance = (Math.ceil(Math.random() * 40) - hero.evasion)
        if (hitChance > 5) {

            if (critHit()) {
                    enemyDamage = 30
                    total.damageAccrued += enemyDamage
                    console.log(`${hero.name} took ${enemyDamage} of damage`)
                    
                    hero.hp -= enemyDamage
             }

            else {
                    let enemyDamage = (Math.ceil(Math.random() * 20) + (enemy.attack - hero.defense))
                        total.damageAccrued += enemyDamage
                        console.log(`${hero.name} took ${enemyDamage} of damage`)
                        hero.hp -= enemyDamage
                }
        }

        else {
            console.log(`${enemy.name} tried to attack, but missed \n`)
        }
    
    if (hero.hp <= 0) {
        console.log('')
        console.log("Youre DEAD BUDDY!!! \n")
        quit()
        return false
    }

    if (hero.hp > 0 && hitChance > 5) {
    console.log(`${hero.name} is down to ${hero.hp}HP \n`)
    }
}

// function specialAttack() {
//     heroDamage = 75
//     total.damageDone += heroDamage
        
//     if (enemy.hp > 0) {
//         console.log(`${enemy.name} took ${heroDamage} of damage`)
//         enemy.hp -= heroDamage
//         console.log(`enemy is down to ${enemy.hp}HP \n`)
//     }

//     else if (enemy.hp <= 0) {
//         console.log(`${hero.name} vanquished the enemy \n`)
//     }
// }


function critHit() {
    let critChance = (Math.ceil(Math.random() * 20)) + hero.chance
    
    if (critChance >= 20) {
        console.log('CRITICAL HIT')
       return true
    }
}

function potion() {
    console.log("You drank a potion and regained 75 HP.")
    let newHP = hero.hp + 75
    hero.hp = newHP

    if ((hero.hp >= 100) && (hero.level === 1)) {
        hero.hp = 100
    }
    
    else if ((hero.hp >= 200) && (hero.level === 2)) {
        hero.hp = 200
    }
        
    else if ((hero.hp >= 300) && (hero.level === 3)){
        hero.hp = 300
    }

    console.log(`${hero.name} now has ${hero.hp}HP \n`)
    hero.inventory.pop(`potion`)
}

function hiPotion() {
    console.log("You drank a hi-potion and regained 150 HP.")
    let newHP = hero.hp + 200
    hero.hp = newHP

    if ((hero.hp >= 100) && (hero.level === 1)) {
        hero.hp = 100
    }
    
    if ((hero.hp >= 200) && (hero.level === 2)) {
        hero.hp = 200
    }
        
    if ((hero.hp >= 300) && (hero.level === 3)){
        hero.hp = 300
    }

    console.log(`${hero.name} now has ${hero.hp}HP \n`)
    hero.inventory.pop(`hi-Potion`)
}

function bomb() {
    if (hero.inventory.includes('bomb')) {
        let heroDamage = (Math.ceil(Math.random() * 20) + (hero.attack - enemy.defense)) * 3
        total.damageDone += heroDamage

        console.log(`${enemy.name} took ${heroDamage} of damage`)
        enemy.hp -= heroDamage
        hero.inventory.pop('bomb')

        if (enemy.hp >= 0) {
            console.log(`enemy is down to ${enemy.hp}HP \n`)
            
        }

        else if (enemy.hp < 0) {
            console.log(`${hero.name} vanquished the enemy \n`)
            enemy.hp = 0
        }
    }
    
    else {
        console.log(`${hero.name} tried to throw a bomb, but quickly relized they were out. \n`)
    }
   
}

function run() {
    let runProbability = (Math.ceil(Math.random() * 10)) + hero.evasion

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

function itemGen() {
    let randomNumber = Math.ceil(Math.random() * 10)
    
    if ((randomNumber >= 1) && (randomNumber <= 3)) {
        hero.inventory.push('potion')
        console.log(`${enemy.name} dropped a potion! \n`)
    }

    if ((randomNumber > 3) && (randomNumber <= 5)) {
        hero.inventory.push('hi-potion')
        console.log(`${enemy.name} dropped a hi-potion! \n`)
    }

    if (randomNumber === 10) {
        hero.inventory.push('bomb')
        console.log(`${enemy.name} dropped a bomb! \n`)
    }
}

function expGen() {
    let bonusExp = Math.ceil(Math.random() * 50)
    let newexp = hero.exp + bonusExp + enemy.exp
    total.expEarned = hero.exp = newexp
    console.log(`${hero.name} gained ${enemy.exp + bonusExp}exp \n`)

    if ( hero.exp >= 300 && hero.level === 1 ) {
            let levelUpRefresh = 200 - hero.hp
            hero.hp += levelUpRefresh
            console.log(`${hero.name} Leveled Up! \n${hero.name} now has 200HP`)
            hero.level = 2
            hero.attack += 2
            hero.defense += 2
            hero.evasion += 2
            hero.chance += 3
    
        }

    if ( hero.exp >= 500 && hero.level === 2 ) {
            let levelUpRefresh = 300 - hero.hp
            hero.hp += levelUpRefresh
            console.log(`${hero.name} Leveled Up! \n${hero.name} now has 300HP`)
            hero.level = 3
            hero.attack += 3
            hero.defense += 3
            hero.evasion += 3
            hero.chance += 4
    }
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
        let move = readline.keyIn(`Type: "a" to attack, "i" to open/use an item from your inventory, "r" to run \n`, {limit: "air"})
        // if (total.damageAccrued & 200 === 0) {
        //     console.log(`${hero.name}'s Special Attack is ready! \n`)
        // }

            if (move === "a") {
                console.log(`--  ${hero.name} atacked. `)
                heroAtack()
            }

            // if (move === 's') {
            //     specialAttack()
            // }
            
            if ((move === 'i') && (enemy.hp > 0)) {
                let move = readline.keyIn(`Type: the first letter of whatever item you would like to use. \n${hero.inventory} \n`, {limit: 'phb'})
                    
                    if (move === 'p') {
                        if (hero.inventory.includes(`potion`)) {
                            console.log(` -- ${hero.name} used a potion. `)
                            potion()
                        }

                        else {
                            console.log(` -- ${hero.name}  is out of potions`)
                        }
                    }

                    if (move === 'h') {
                        if (hero.inventory.includes(`hi-potion`)) {
                            console.log(` -- ${hero.name} used a hi-potion. `)
                            hiPotion()
                        }
                        
                        else {
                            console.log(` -- ${hero.name}  is out of hi- potions`)
                        }
                    }

                    if (move === 'b') {
                        console.log(`--  ${hero.name} threw a Bomb. `)
                        bomb()
                    }
            }

            if ((move === 'r') && (enemy.hp >= 0)) {
               
                if (run()) {
                    break;
                }
            }

        if ((enemy.hp > 0) && (hero.hp > 0)) {
            console.log(` -- ${enemy.name} attacked.`)
            enemyAttack()
        }

        else {
            expGen()
            itemGen()
            break
        }
    
    }
}


// -------------------------------------------------- GAME ---------------------------------------------------//
while (hero.hp > 0) {
    
    hero.name = readline.question('Welcome,lets first start my giving your Hero a name? \n')
    
    console.log(`Welcome ${hero.name}.\n`)
   
    const firstStep = readline.keyIn(`To walk forward, type "w" \n\nTo view ${hero.name}'s stats and inventory, type "p" \n\nTo quit the game at any point, type "q" \n\nGive it a shot now. \n`, {limit: `wpq`})

        if (firstStep === "w") {
            console.log(`Good job! ${hero.name} swiftly took a few steps forward. \n`)
        total.steps += 3
        }
        
        if (firstStep === "p") {
            console.log(hero)
        }

        if (firstStep === "q") {
            quit()
        }

    let move = readline.keyIn(`Now that we've got that covered, lets begin. \n \nStart making your way to the tresure trove. \n`, {limit: 'wpq'})
    
        if (move === "w") {
            console.log(`Good job! ${hero.name} swiftly took a few steps forward. \n`)
            total.steps += 3
        }

        if (move === "p") {
            console.log(hero)
        }

        if (move === "q") {
            quit()
        }
    
    while ((hero.hp > 0) && (gameOn = true)) {
        resetEnemy()
        move = readline.keyIn('Make a move. \n', {limit: 'wpiq'})

        if (move === "w") {
            console.log(`Good job! ${hero.name} swiftly took a few steps forward. \n`)
            total.steps += 3
        }

        if (move === "p") {
            console.log(hero)
        }
        
        if (move === 'i') {
            let move = readline.keyIn(`Type: the first letter of whatever item you would like to use. \n${hero.inventory} \n`)
            
            if ((move === "p")){
                
                if (hero.inventory.includes(`potion`)) {
                console.log(` -- ${hero.name} used a potion. \n`)
                potion()
                }

                else {
                    console.log(` -- ${hero.name}  is out of potions.`)
                }
            }
        }

        if (move === "q") {
            quit()
            return false
        }
            
        var ambushProbability = Math.ceil(Math.random() * 5) 

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
