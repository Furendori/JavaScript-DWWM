const nbRep = Math.floor(Math.random() * 10)

// const nbRep = getRandom(10)

let nbUser = parseInt(prompt("Entre 1 et 10"))
while (nbUser !== nbRep) {
    if (nbUser > nbRep) {
        nbUser = parseInt(prompt("Plus petit"))
        
    } else {
        nbUser = parseInt(prompt("Plus grand"))
    }
}
console.log("Gagné")