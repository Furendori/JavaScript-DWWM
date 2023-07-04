let tabValues = []
let nbNegatifs = 0;
let nbPositifs = 0


let userValue = parseInt(prompt("Combien de valeurs voulez vous saisir"))

for (let i = 0; i < userValue; i++) {
    let userValue = prompt("Entrez une valeur")
    tabValues.push(userValue)

    if (userValue < 0) {
        nbNegatifs++
    } else if (userValue >= 0) {
        nbPositifs++
    }
}

console.log("Il y a " + nbNegatifs + " nombres négatifs et " + nbPositifs + " nombres positifs")