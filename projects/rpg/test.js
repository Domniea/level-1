const readline = require('readline-sync')  





var enemy1 = {
    name: 1,
    hp: 25,
    defense: 2,
    evasion: 3,
    exp: 50
}

var enemy2 = {
    name: 2,
    hp: 50,
    defense: 2,
    evasion: 3,
    exp: 75
}
var enemy3 = {
    name: 3,
    hp: 75,
    defense: 2,
    evasion: 3,
    exp: 100
}

readline.question(`time to fight`)
function chooseEnemy() {
    var enemy1Probability = Math.ceil(Math.random() * 30)

    if ((enemy1Probability > 10) && (enemy1Probability < 18)) {
        enemy = enemy1
    }
    if ((enemy1Probability > 19) && (enemy1Probability < 25)) {
        enemy = enemy2
    }
    if ((enemy1Probability > 26) && (enemy1Probability < 29)) {
        enemy = enemy3
    }
    
    console.log(enemy1Probability)
}
chooseEnemy()

readline.question(`${enemy.name} says hello`)