const readline = require('readline-sync')

mapActions = ['Walk']
battleActions = ['Attack', 'Potion', 'Run']

heroHP = [100]
inventory = {
    potions : [],
    exp: [],
}

heroIsAlive = true
enemyIsAlive = true
enemy1HP = [50]

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
    if (enemy1HP[0] <= 0){
        enemyIsAlive = false
        console.log("You've vanquished the Enemy")
        }
    console.log(` Enemy is down to ${enemy1HP}`)
}

function potion(string) {
    console.log("You drank a potion and regained 75 HP.")
    let newHP = heroAtack[0] + 75
    heroHP.pop()
    heroHP.push(newHP)
}

function run(string) {
    let runProbability = (Math.floor(Math.random() * 10))
    if (runProbability >= 5) {
        console.log("You ran away safely")
    }
    else {
        console.log(`The enemy blocked ${name}'s path and you were unable to run away.`)
    }
}

let enemy1Probability = (Math.floor(Math.random() * 10))

function enemy1Appearance() {
        console.log("A enemy1 has apeared in your path! ")
        console.log("What would you like to do? ")
        let move = readline.question("Type: attack, potion, or run ")
        while (enemyIsAlive === true) {
            if ((move === "attack") && (enemyIsAlive === true)) {
                console.log(` ${name} atacked. `)
                heroAtack()
                break
            }
            if ((move === "potion")&& (enemyIsAlive === true)){
                console.log(` ${name} used a potion. `)
                potion()
                break
            } 
            if ((move === "run") && (enemyIsAlive === true)) {
                console.log(`${name} escaped safeley. `)
                run()
                break
            }
             enemy1Atack()
            console.log("What would you like to do? ")
            readline.question("Type: attack, potion, or run ")
            }
           
    }





const name = readline.question('Welcome adventureist,lets first start my giving your Hero a name? ')
console.log(`Welcome ${name}.`);
console.log(`Welcome to the fighting arena`);

const firstStep = readline.question(`To walk forward type "walk" Give it a shot now. `)
if (firstStep === 'walk') {
    console.log(`Good job! ${name} swiftly took a few steps forward.`)
}

let walk = readline.question(`Now that we've got that covered, lets begin. Start making your way to the tresure trove. `)

while (heroIsAlive === true) {
 if ((walk === "walk") && (enemy1Probability > 3)) {
    enemy1Appearance()
}
else {
    console.log(`${name} walked down the path a bit more. `)
}

}